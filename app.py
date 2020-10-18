from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
from data import Resources
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt


app = Flask(__name__)


#config mySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'shiwei'
app.config['MYSQL_PASSWORD'] = '123456'
app.config['MYSQL_DB'] = 'myflaskapp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

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

@app.route('/resources')
def resources():
    return render_template('resources.html', resources = Resources)    


@app.route('/resource/<string:id>')
def resource(id):
    return render_template('resource.html', id=id)    

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


if __name__ == '__main__':
    app.secret_key='secret@@@'
    app.run(debug = True)
