from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
#from flask_cas import CAS
from data import Resources
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps


app = Flask(__name__)


#config mySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'shiwei'
app.config['MYSQL_PASSWORD'] = '123456'
app.config['MYSQL_DB'] = 'myflaskapp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['CAS_SERVER'] = ''

app.config['CAS_AFTER_LOGIN'] = 'route_root'
#initialize mySQL
mysql = MySQL(app)

Resources = Resources()

@app.route('/')# add app route
def index():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/caslogin')
def caslogin():
    return render_template('caslogin.html')

@app.route('/resources')
def resources():
    # creating a cursor; connection to a database server 
    cur = mysql.connection.cursor()

    #get houses
    result = cur.execute("SELECT * FROM articles")

    resources = cur.fetchall()
    if result > 0:
        return render_template('resources.html', resources=resources)
    else:
        msg = 'No Houses Found'
        return render_template('resources.html', msg=msg)
    cur.close()



@app.route('/resource/<string:id>')
def resource(id):
    cur = mysql.connection.cursor()

    #get houses
    result = cur.execute("SELECT * FROM articles WHERE id = %s", [id])

    resource = cur.fetchone()
    return render_template('resource.html', resource=resource)    

#register form class
class RegisterForm(Form):
    name = StringField('Name', [validators.Length(min = 1, max = 50)])
    username = StringField('Username', [validators.Length(min = 4, max = 25)])
    email = StringField('Email', [validators.Length(min = 6, max = 50)])
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message = 'Passwords do not match')
    ])
    confirm = PasswordField('Confirm Password')

@app.route('/register', methods = ['GET', 'POST'])
def register():
    form = RegisterForm(request.form)
    print(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        username = form.username.data
        password = sha256_crypt.encrypt(str(form.password.data))

        #create cursor
        cur = mysql.connection.cursor()

        #execute query
        cur.execute("INSERT INTO users(name, email, username, password) VALUES(%s, %s, %s, %s)", (name, email, username, password))

        #commit to DB
        mysql.connection.commit()

        #close connection
        cur.close()

        flash('You are now registered and can login', 'success')
        #redirect
        return redirect(url_for('home'))
        #return render_template('home.html')
        
    return render_template('register.html', form=form)

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method =='POST':
        # Get form fields
        username = request.form['username']
        password_candidate = request.form['password']

        # create cursor
        cur = mysql.connection.cursor()

        # get user by username
        result = cur.execute("SELECT * FROM users WHERE username = %s", [username])

        if result > 0:
            # Get stored hash
            data = cur.fetchone()
            password = data['password']

            # compare the passwords
            if sha256_crypt.verify(password_candidate, password):
                #app.logger.info('PASSWORD MATCHED')
                #passed password
                #create session variable
                session['logged_in'] = True
                session['username'] = username

                flash('You are now logged in', 'success')
                return redirect(url_for('dashboard'))

            else:
                #app.logger.info('PASSWORD DOES NOT MATCH')
                error = 'Invalid Login'
                return render_template('login.html', error=error)
            # close the connection here
            cur.close()
        else:
            #app.logger.info('No USER FOUND')
            error = 'Username Not Found'
            return render_template('login.html', error=error)

    return render_template('login.html')


#check if user logged in
def is_logged_in(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('Unauthorized, Please login', 'danger')
            return redirect(url_for('login'))
    return wrap



@app.route('/logout')
@is_logged_in
def logout():
    session.clear()
    flash('You are now logged out', 'success')
    return redirect(url_for('login'))




@app.route('/dashboard')
@is_logged_in
def dashboard():
    #create cursor
    cur = mysql.connection.cursor()
    #get houses
    result = cur.execute("SELECT * FROM articles")

    resources = cur.fetchall()
    if result > 0:
        return render_template('dashboard.html', resources=resources)
    else:
        msg = 'No Houses Found'
        return render_template('dashboard.html', msg=msg)
    # close the connection
    cur.close()


#register form class
class ArticleForm(Form):
    title = StringField('Title', [validators.Length(min = 1, max = 200)])
    body = TextAreaField('Body', [validators.Length(min = 1)])
    

@app.route('/add_house', methods=['GET', 'POST'])
@is_logged_in
def add_house():
    form = ArticleForm(request.form)
    if request.method == 'POST' and form.validate():
        title = form.title.data
        body = form.body.data

        #create cursor
        cur = mysql.connection.cursor()

        # execute
        cur.execute("INSERT INTO articles(title, body, author) VALUES(%s, %s, %s)", (title, body, session['username']))
        #commit to DB
        mysql.connection.commit()

        #close connection
        cur.close()
        
        flash('Resource Created', 'success')

        return redirect(url_for('dashboard'))
    return render_template('add_house.html', form=form)



@app.route('/edit_house/<string:id>', methods=['GET', 'POST'])
@is_logged_in
def edit_house(id):
    # create cursor
    cur = mysql.connection.cursor()

    # get the house by id
    result = cur.execute("SELECT * FROM articles WHERE id = %s", [id])

    resource = cur.fetchone()

    # get form
    form = ArticleForm(request.form)

    # populate article form fields
    form.title.data = resource['title']
    form.body.data = resource['body']

    #form = ArticleForm(request.form)
    if request.method == 'POST' and form.validate():
        title = request.form['title']
        body = request.form['body']

        #create cursor
        cur = mysql.connection.cursor()

        # execute
        cur.execute("UPDATE articles SET title=%s, body=%s WHERE id = %s", (title, body, id))
        #commit to DB
        mysql.connection.commit()

        #close connection
        cur.close()
        
        flash('Resource Updated', 'success')

        return redirect(url_for('dashboard'))
    return render_template('edit_house.html', form=form)

@app.route('/delete_article/<string:id>', methods = ['POST'])
@is_logged_in
def delete_article(id):
    #create cursor
    cur = mysql.connection.cursor()

    #execute
    cur.execute("DELETE FROM articles WHERE id= %s", [id])
    #commit to DB
    mysql.connection.commit()

    #close connection
    cur.close()

    flash('Article Deleted', 'success')
    return redirect(url_for('dashboard'))

if __name__ == '__main__':
    app.secret_key='secret@@@'
    app.run(debug = True)
