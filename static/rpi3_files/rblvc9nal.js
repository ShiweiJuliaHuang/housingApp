



/* ControlTag Loader for U.S. News & World Report a44d508a-f6b3-4bef-a1b1-b0c630ad90d3 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.4","schema_version":3},"confid":"rblvc9nal","context_terms":[],"publisher":{"name":"U.S. News & World Report","active":true,"uuid":"a44d508a-f6b3-4bef-a1b1-b0c630ad90d3","version_bucket":"stable","id":2223},"params":{"first_party_dmp_managed":false,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","user_id_cookie":"usn_visitor_id","dfp_premium":true,"control_tag_namespace":"usnews"},"prioritized_segments":[],"realtime_segments":[{"id":"tibz7o5nr","test":["and",["and",["or",["or","$event_MUAtRb-G"]]]]},{"id":"r7suzovz2","test":["and",["and",["or",["or","$event_LgHOZUSK"]]]]},{"id":"tn5bn8kf2","test":["and",["and",["or",["or","$event_MUAtRb-G"]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/a44d508a-f6b3-4bef-a1b1-b0c630ad90d3","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/a44d508a-f6b3-4bef-a1b1-b0c630ad90d3","consent_set":"https://consumer.krxd.net/consent/set/a44d508a-f6b3-4bef-a1b1-b0c630ad90d3","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/a44d508a-f6b3-4bef-a1b1-b0c630ad90d3","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"usnews.com","cap":255,"id":1650267,"organization_id":2223,"uid":"rblvc9nal"},"tags":[{"id":32311,"name":"FBCA on USNWR_Online_All_Visitors","content":"<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '960799217289328');\nfbq('track', 'PageView');\nfbq('track', 'USNWR_Online_All_Visitors');\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["contains","$url","education/online-"]]]],"collects_data":true},{"id":28073,"name":"Krux DTC Standard - All sites","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":40303,"name":"Facebook: USN All Visitors 30-Day","content":"<script>\n// This library tag assumes fbq is available on the page.\n(function() {\n    if (window.fbq) {\n        var e = Krux;\n        var i = function() {\n            var n = e('get', atob('dXNlcl9zZWdtZW50cw==')) || [];\n            var i = {};\n            'key:usnallvisitors30'.split(',').map(function(n) {\n                var t = n.split(':');\n                if (t.length == 2) i[t[0]] = t[1];\n            });\n            for (var t in i) {\n                if (n.indexOf(t) !== -1 && i[t]) {\n                    fbq('track', 'ViewContent', {\n                        content_name: i[t]\n                    });\n                }\n            }\n        };\n        if (e('get', 'config').params.consent_active) {\n            e('consent:get', function(n, t) {\n                if (t.settings.tg) {\n                    i();\n                }\n            });\n        } else {\n            i();\n        }\n    }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["t0uelsyzz"]]]]],"collects_data":true},{"id":40560,"name":"DataLayer Whitelist (user/page attr no prefix)","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'utag_data');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('article_byline,is_mobile,page_type,site_product_section,site_product,site_product_subsection,tab,profile_type,rankinglist_type,site_vertical'.split(','), trim);\n    userAttr = _.map('usn_pageview_id,usn_session_id,usn_visitor_id'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'undefined' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":42357,"name":"DTC Whitelist (Page Attributes w/ prefix only)","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'utag_data');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('english-proficiency-min,article_byline,is_mobile,american-indian-diversity,page_type,profile_type,tab,acceptance-rate-max,rankinglist_type,math-proficiency-max,tuition-max,magnet,name,city-or-zip,referrer,enrollment-min,hs-gpa-avg-max,gold,silver,acceptance-rate-min,math-proficiency-min,tuition-min,public,ranking,college-readiness-max,school-name,english-proficiency-max,location,stem,ehs-gpa-avg-min,distance,major,state-urlname,enrollment-max,college-readiness-min,activity,gender-distribution-male,bronze,charter,gender-distribution-female,subject,sat-avg-max,district_id,program,country,gender-distribution-coed,overall-diversity,specialty,city,gpa,region,hispanic-diversity,program_rank,tuition_and_fees-max,employed_at_grad,avg_starting_salary,tuition_and_fees-min,gpa_gmat_part_time,site_vertical,african-american-diversity,organization_affiliation_general,Homepage_acceptance-rate-max,setting,site_product_section,site_product,site_product_subsection,act-avg-max,cert-0-1-awarded,cert-1-2-awarded,assoc-awarded,tuition_and_fees_out_of_state,tuition_and_fees_dnp-min,entry_times,tuition_and_fees_dnp-max,gmat,offer_phd,offer_ma,offer_dnp,gre_quantitative,fund_family,displayed,online-program-type,hs-gpa-avg-min,hospitals_displayed,money_fund_family'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'undefined' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('javascript', 'utag_data.site_vertical',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S (Oracle)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var consent = Krux('iab:urlParams');\r\n  if (kuid) {\r\n      if(!consent){\r\n          consent = \"\";\r\n      }\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid + consent;\r\n      (new Image()).src=liveramp_url;\r\n  }\r\n})();\r\n</script>\r\n\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":7,"name":"OpenX User Match","content":"<script>\n\n(function(){\n    var prefix = location.protocol == 'https:' ? 'https:' : 'http:' ;\n    var match_pixel = prefix + '//u.openx.net/w/1.0/cm?id=b53b3de0-a5e8-47e3-a78f-ca218d037abe&r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=openx&partner_uid=';\n    (new Image()).src = match_pixel;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":10,"name":"Rubicon User Match","content":"<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n        if(!consent){\r\n            consent = \"\";\r\n        }\r\n        var rubicon_url = '//tap.rubiconproject.com/oz/feeds/krux/tokens?afu=' + kuid + consent;\r\n        (new Image()).src=rubicon_url\r\n    }\r\n  }\r\n})();\r\n</script>\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":29,"name":"Nativo User Match","content":"<script>\r\n(function() {\r\n    var kuid = Krux('get', 'user');\r\n    var prefix = location.protocol;\r\n    if (kuid) {\r\n        var nativo_url = prefix + '//jadserve.postrelease.com/dmp/5?vk=KRUX_USER_ID&ntv_r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=nativo&partner_uid=NTV_USER_ID';\r\n        var i = new Image();\r\n        i.src = nativo_url;\r\n    }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":85,"name":"IXI Digital Open Market","content":"<script>\r\n(function(){\r\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":154,"name":"Lotame","content":"<script>\r\n    (function() {\r\n        var url = 'https://sync.crwdcntrl.net/map/c=9164/TP=KRUX?https://beacon.krxd.net/usermatch.gif?partner=lotame&partner_uid=${profile_id}';\r\n        (new Image()).src = url;\r\n    })(); \r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.0631b7d64dbbd3656a8b7368ad227a04', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
