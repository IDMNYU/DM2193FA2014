;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) { module.exports = definition(); }
  else if (typeof define === 'function' && define.amd) { define(definition); }
  else { context[name] = definition(); }
})('Fingerprint', this, function () {
  'use strict';
  
  var Fingerprint = function (options) {
    var nativeForEach, nativeMap;
    nativeForEach = Array.prototype.forEach;
    nativeMap = Array.prototype.map;

    this.each = function (obj, iterator, context) {
      if (obj === null) {
        return;
      }
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === {}) return;
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iterator.call(context, obj[key], key, obj) === {}) return;
          }
        }
      }
    };

    this.map = function(obj, iterator, context) {
      var results = [];
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) return results;
      if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
      this.each(obj, function(value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
      });
      return results;
    };

    if (typeof options == 'object'){
      this.hasher = options.hasher;
      this.screen_resolution = options.screen_resolution;
      this.canvas = options.canvas;
      this.ie_activex = options.ie_activex;
    } else if(typeof options == 'function'){
      this.hasher = options;
    }
  };

  Fingerprint.prototype = {
    get: function(){
      var keys = [];
      keys.push(navigator.userAgent);
      keys.push(navigator.language);
      keys.push(screen.colorDepth);
      if (this.screen_resolution) {
        var resolution = this.getScreenResolution();
        if (typeof resolution !== 'undefined'){ // headless browsers, such as phantomjs
          keys.push(this.getScreenResolution().join('x'));
        }
      }
      keys.push(new Date().getTimezoneOffset());
      keys.push(this.hasSessionStorage());
      keys.push(this.hasLocalStorage());
      keys.push(!!window.indexedDB);
      //body might not be defined at this point or removed programmatically
      if(document.body){
        keys.push(typeof(document.body.addBehavior));
      } else {
        keys.push(typeof undefined);
      }
      keys.push(typeof(window.openDatabase));
      keys.push(navigator.cpuClass);
      keys.push(navigator.platform);
      keys.push(navigator.doNotTrack);
      keys.push(this.getPluginsString());
      if(this.canvas && this.isCanvasSupported()){
        keys.push(this.getCanvasFingerprint());
      }
      if(this.hasher){
        return this.hasher(keys.join('###'), 31);
      } else {
        return this.murmurhash3_32_gc(keys.join('###'), 31);
      }
    },

    /**
* JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
*
* @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
* @see http://github.com/garycourt/murmurhash-js
* @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
* @see http://sites.google.com/site/murmurhash/
*
* @param {string} key ASCII only
* @param {number} seed Positive integer only
* @return {number} 32-bit positive integer hash
*/

    murmurhash3_32_gc: function(key, seed) {
      var remainder, bytes, h1, h1b, c1, c2, k1, i;
      
      remainder = key.length & 3; // key.length % 4
      bytes = key.length - remainder;
      h1 = seed;
      c1 = 0xcc9e2d51;
      c2 = 0x1b873593;
      i = 0;
      
      while (i < bytes) {
          k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        
        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

        h1 ^= k1;
            h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
      }
      
      k1 = 0;
      
      switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff);
        
        k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
      }
      
      h1 ^= key.length;

      h1 ^= h1 >>> 16;
      h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
      h1 ^= h1 >>> 13;
      h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
      h1 ^= h1 >>> 16;

      return h1 >>> 0;
    },

    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    hasLocalStorage: function () {
      try{
        return !!window.localStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    
    hasSessionStorage: function () {
      try{
        return !!window.sessionStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },

    isCanvasSupported: function () {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    },

    isIE: function () {
      if(navigator.appName === 'Microsoft Internet Explorer') {
        return true;
      } else if(navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)){// IE 11
        return true;
      }
      return false;
    },

    getPluginsString: function () {
      if(this.isIE() && this.ie_activex){
        return this.getIEPluginsString();
      } else {
        return this.getRegularPluginsString();
      }
    },

    getRegularPluginsString: function () {
      return this.map(navigator.plugins, function (p) {
        var mimeTypes = this.map(p, function(mt){
          return [mt.type, mt.suffixes].join('~');
        }).join(',');
        return [p.name, p.description, mimeTypes].join('::');
      }, this).join(';');
    },

    getIEPluginsString: function () {
      if(window.ActiveXObject){
        var names = ['ShockwaveFlash.ShockwaveFlash',//flash plugin
          'AcroPDF.PDF', // Adobe PDF reader 7+
          'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
          'QuickTime.QuickTime', // QuickTime
          // 5 versions of real players
          'rmocx.RealPlayer G2 Control',
          'rmocx.RealPlayer G2 Control.1',
          'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
          'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
          'RealPlayer',
          'SWCtl.SWCtl', // ShockWave player
          'WMPlayer.OCX', // Windows media player
          'AgControl.AgControl', // Silverlight
          'Skype.Detection'];
          
        // starting to detect plugins in IE
        return this.map(names, function(name){
          try{
            new ActiveXObject(name);
            return name;
          } catch(e){
            return null;
          }
        }).join(';');
      } else {
        return ""; // behavior prior version 0.5.0, not breaking backwards compat.
      }
    },

    getScreenResolution: function () {
      return [screen.height, screen.width];
    },

    getCanvasFingerprint: function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var txt = 'http://www.ad-score.com | Ad-Anti-Fraud detection | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125,1,62,20);
      ctx.fillStyle = "#069";
      ctx.fillText(txt, 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText(txt, 4, 17);
      return canvas.toDataURL();
    }
  };


  return Fingerprint;

});
var AdScoreJsonp = AdScoreJsonp || {};
(function(dt) {

    var __callbackId = 0;
    //var maxQueryStringLengthErrorMessage = "Query string length exceeds maximum recommended value of ";
    //var maxPathLengthErrorMessage = "Url path length exceeds maximum recommended value of ";

    // expose these for reference
    var maxQueryStringLength = dt.maxQueryStringLength = 2000;
    var maxPathLength = dt.maxPathLength = 2000;//240; // me

    var jsEncode = dt.jsEncode = function(value) 
	{
        // properly encode arrays and dates
        // NOTE: use this to turn arrays of ids into
        // semicolon delimited string.

        if (value instanceof Date) 
		{
            return new Date(value).getTime();
        };

        if (value instanceof Array) 
		{
            var values = [];
            for (var i = 0; i < value.length; i++) 
			{
                values.push(encodeURIComponent(value[i]));
            };
            // vectorize arrays
            return values.join(";");
        };

        return encodeURIComponent(value);

    };

    var jsonp = dt.jsonp = function(url, parameters, apiKey, success, error, timeout) 
	{
        /// <summary>
        /// Sets up a JSONP call to the api.
        /// </summary>
        /// <param name="url" type="String"></param>
        /// <param name="parameters" type="Map">Optional</param>
        /// <param name="apiKey" type="String">Optional</param>
        /// <param name="success" type="Function(data)">Handle successful api call. data = api JSOB</param>
        /// <param name="error" type="Function(error)">Handle and error condition. error = API error JSOB. 
        /// Optional, if you are crazy or would like to be driven that way.</param>
        /// <param name="timeout" type="Number">Timeout in ms. Optional. Defaults to 10,000</param>

        if (url.length > maxPathLength) 
		{
			url = url.substring(0,maxPathLength-1);
            //throw new Error(maxPathLengthErrorMessage + maxPathLength);
        };

        var callBackName = "_callback" + __callbackId++;

        //var queryString = "?jsonp=DevTips.jsonp." + callBackName; 
		var queryString = "&callback=AdScoreJsonp.jsonp." + callBackName;  // me
        if (parameters) 
		{
            for (var name in parameters) 
			{
                if (parameters.hasOwnProperty(name)) 
				{
                    queryString = queryString + "&" + name + "=" + jsEncode(parameters[name]);
                };
            };
        };
        if (queryString.length > maxQueryStringLength) 
		{
			queryString = queryString.substring(0,maxQueryStringLength-1);
            //throw new Error(maxQueryStringLengthErrorMessage + maxQueryStringLength);
        };

        // setup the callback
        jsonp[callBackName] = function(data) 
		{					
            delete jsonp[callBackName];
            if (data.error) 
			{
                if (error) 
				{
                    data.error.callback = callBackName;
                    error(data.error);
                };
            }
            else 
			{
                success(data);
            };
        };

        // send the request
        var scr = document.createElement("script");
        scr.type = "text/javascript";
        scr.src = url + queryString;
        var head = document.getElementsByTagName("head")[0];
        head.insertBefore(scr, head.firstChild);


        // default to 10 second timeout
        timeout = timeout || 10000;

        window.setTimeout(function() 
		{
            if (typeof jsonp[callBackName] == "function") 
			{
                // replace success with null callback in case the request is just very latent.
                jsonp[callBackName] = function(data) 
				{
                    delete jsonp[callBackName];
                };

                // call the error callback
                error({ code: 408, message: "Request Timeout", callback: callBackName });

                // set a longer timeout to safely clean up the unused callback.
                window.setTimeout(function() 
				{
                    if (typeof jsonp[callBackName] == "function") 
					{
                        delete jsonp[callBackName];
                    };
                }, 60000);
            };
        }, timeout);
    };
})(AdScoreJsonp);

;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) { module.exports = definition(); }
  else if (typeof define === 'function' && define.amd) { define(definition); }
  else { context[name] = definition(); }
})('AdScoreClass', this, function () {
  'use strict';
  
  var AdScoreClass = function (options) 
  {
  };
  
  AdScoreClass.prototype = 
  {
	//-----------------------------------------------------------
	api_host: "api.ad-score.com",
	affid : "",
	g_params: {},
	seconds_keepalive: 4,
	track : true,
	//-----------------------------------------------------------
	getFeaturesStr: function()
	{
		var engine = 0 ; var features = 0;
		
		try
		{
			engine |= window.ActiveXObject ? 1 : 0; // old ie ?
			engine |= window.opera ? 2 : 0;
			engine |= window.chrome ? 4 : 0;
			engine |= 'getBoxObjectFor' in document || 'mozInnerScreenX' in window ? 8 : 0; // ff
			engine |= ('WebKitCSSMatrix' in window || 'WebKitPoint' in window || 'webkitStorageInfo' in window || 'webkitURL' in window) ? 16 : 0;
			engine |= (engine & 16 && ({}.toString).toString().indexOf("\n") === -1) ? 32 : 0;

			var ie_test = null;
			try { ie_test = new ActiveXObject('htmlfile'); } catch (e) {}
			engine |= ie_test ? 64 : 0; // ie
						
			features |= 'sandbox' in document.createElement('iframe') ? 1 : 0;
			features |= 'WebSocket' in window ? 2 : 0;
			features |= window.Worker ? 4 : 0;
			features |= window.applicationCache ? 8 : 0;
			features |= window.history && history.pushState ? 16 : 0;
			features |= document.documentElement.webkitRequestFullScreen ? 32 : 0;
			features |= 'FileReader' in window ? 64 : 0;
		}
		catch(e){}
		var w1 = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		var h1 = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

		return "&f1=" + engine + "&f2=" + features + "&w=" + screen.width + "&h=" + screen.height + "&w1=" + w1 + "&h1=" + h1 ;
	},
	//-----------------------------------------------------------
	getBrowserId: function()
	{
		// http://help.dottoro.com/ljhrmrfb.php
		// http://zhao-shuai.blogspot.co.il/2011/10/determining-browser-type-using-object.html
		// http://www.nczonline.net/blog/2009/12/29/feature-detection-is-not-browser-detection/
		// http://www.howtocreate.co.uk/jslibs/script-sniffer
		// http://tanalin.com/en/articles/ie-version-js/
		// https://github.com/NielsLeenheer/WhichBrowser
		
		try
		{
			if ( typeof Function.prototype.bind == 'undefined' )
				return "pj";
			else if ( ( typeof navigator != 'undefined' && typeof navigator.systemLanguage != 'undefined' ) || 
				 ( typeof clientInformation != 'undefined' && typeof clientInformation.systemLanguage != 'undefined'  ) )
				return "ie";
			else if ( ( typeof navigator != 'undefined' && typeof navigator.browserLanguage != 'undefined' ) || 
					  ( typeof clientInformation != 'undefined' && typeof clientInformation.browserLanguage != 'undefined'  ) )
				return "op";
			else if ( typeof screen != 'undefined' && typeof screen.left != 'undefined'  ) 
				return "ff";		
			else if ( typeof window.external != 'undefined'  )
				return "ch";
			else 
				return "na";
		}
		catch(e){return "ne";}
	},
	//-----------------------------------------------------------
	getFlashVersion: function()
	{
		try
		{
			if (navigator.plugins && navigator.plugins.length > 0) 
			{
				var type = 'application/x-shockwave-flash';
				var mimeTypes = navigator.mimeTypes;
				if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) 
				{
					version = mimeTypes[type].enabledPlugin.description.replace("Shockwave Flash","").replace(/ /,"");				
					return version;
				}
			} 
			else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) 
			{
				var version = -1;
				for (var i = 0; i < activeXDetectRules.length && version == -1; i++) 
				{
					var obj = getActiveXObject(activeXDetectRules[i].name);
					if (!obj.activeXError) 
					{                    
						version = activeXDetectRules[i].version(obj);
						if (version != -1) 
						{
							return version.replace("Shockwave Flash","").replace(/ /,"");
						}
					}
				}
			}
			return -1;
		}
		catch(e){ return -2;}
	},
	//-----------------------------------------------------------
	call_server_img: function(cmd,params,conf_obj)
	{				
		if(!adScoreClass.track)
			return;
		if(cmd=="adcheck"||cmd=="adview")
		{
			if(conf_obj.fsuccess)
				conf_obj.fsuccess({'c': cmd , 'status' : '1' ,'score':'0.911' , 'msg':'default answer'});
			return;		
		}
		var url = "//" + adScoreClass.api_host + "/collect?c=" + cmd + params + 
							"&fi=" + adScoreClass.fingerprint + 
							adScoreClass.getFeaturesStr() +
							"&bo=" + adScoreClass.getBrowserId() +							
							"&fv=" + adScoreClass.getFlashVersion() + 
							"&aff=" + adScoreClass.affid + 							
							"&rnd=" + new Date().getTime() + 
							"&r=" + encodeURIComponent(document.referrer) ;		// referrer must be at the end , might be long ! 
							
		if(cmd=="pageleft")
		{		
			var img = document.createElement("img");		
			img.style.display = "none";
			img.src = url;
			document.body.appendChild(img);
		}
		else
		{
			AdScoreJsonp.jsonp( url, {}, "",	
										function success(data) 
										{ 		
											if(conf_obj.fsuccess)
												conf_obj.fsuccess(data);
										},
										function failure(error) 
										{      
											if(conf_obj.ferror)
												conf_obj.ferror({'c': cmd , 'status' : '0' ,'msg':'timeout'});								
										}
							  );	
		}		
	},	
	//-----------------------------------------------------------
	getUrlParamValue: function ( url , name )
	{
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  if( results == null )
		return "";
	  else
		return results[1];
	},
	//-----------------------------------------------------------
	obj2param_str: function(conf_obj , affid_params_obj)
	{
		var str = "";
		for (var key in conf_obj) 
		{
			var value = conf_obj[key];
			if(key == 'add_url_params')
			{
				var found_one_of_url_params_in_addressbar = false;
				var href_params = value.split(",");
				for (var href_param in href_params) 
				{
					var href_param_value = adScoreClass.getUrlParamValue(location.href,href_params[href_param]);
					if(href_param_value!="")
						found_one_of_url_params_in_addressbar = true;
					str = str + "&" + href_params[href_param] + "=" + href_param_value.substring(0, 50); ;
				}
				if(!found_one_of_url_params_in_addressbar)
					adScoreClass.track = false;		
			}
			else if(key == 'ad_id')
			{
				str = str + "&" + "ad_id=" + value ;
			}
		}
		for (var key in affid_params_obj) 
		{
			var value = affid_params_obj[key];
			str = str + "&" + key + "=" + value ;			
		}
		return str;
	},
	//-----------------------------------------------------------
	pageleft : function()
	{		
		var timestamp_diff = new Date().getTime() - adScoreClass.timestamp;
		
		adScoreClass.call_server_img( "pageleft" , "&t=" + timestamp_diff + adScoreClass.l_params + adScoreClass.g_params , null);
		
		// must not "return" anything ( because of IE ) !
	},
	//-----------------------------------------------------------
	init : function()
	{
		var fi = new Fingerprint({canvas: true, ie_activex: true , screen_resolution: true});
		adScoreClass.fingerprint = 	fi.get();
		var func = window['AdScoreObject'];
		var time = window[func].l;
		for (var key in window[func].q ) 
		{ 
			var obj = window[func].q[key];
			
			var cmd  				= obj[0];
			var type 				= obj[1];
			var conf_obj  			= obj[2];
			var affid_params_obj 	= obj[3];
			adScoreClass.run(cmd,type,conf_obj,affid_params_obj);			
		}
		window[func] = adScoreClass.run; // replace function 
	},
	//-----------------------------------------------------------
	keepalive: function ( firsttime,conf_obj)
	{
		if(typeof adScoreClass === 'undefined' || typeof adScoreClass.l_params === 'undefined' )
			return;
		if(adScoreClass.seconds_keepalive < 1 )
			return;
		adScoreClass.seconds_keepalive --;
		
		if(firsttime!=true)
		{
			adScoreClass.call_server_img( "pagekeepalive" , "&ks=" + adScoreClass.seconds_keepalive + adScoreClass.l_params + adScoreClass.g_params ,conf_obj);
		}
		
		setTimeout( function(){ adScoreClass.keepalive(false,conf_obj); }, 2000);
	},
	//-----------------------------------------------------------
	run: function ( cmd , type , conf_obj , affid_params_obj )
	{		
		if( cmd == 'create' )
		{
			adScoreClass.affid = type;
			adScoreClass.g_params  = adScoreClass.obj2param_str(conf_obj , affid_params_obj);
		}
		else if ( cmd == 'send' )
		{
			var cmd_params = adScoreClass.obj2param_str(conf_obj , affid_params_obj)
			
			if( type == 'adcheck' || type == 'adview' || type == 'adclick' || type == 'pageview' || type == 'pageclick' )
			{
				adScoreClass.call_server_img( type , adScoreClass.g_params+cmd_params ,conf_obj );
			}
			else if (type == 'pagekeepalive')
			{
				adScoreClass.l_params = cmd_params;
				adScoreClass.keepalive(true,conf_obj);			
			}
			else if (type == 'pageleft')
			{			
				adScoreClass.timestamp = new Date().getTime();
				adScoreClass.l_params = cmd_params;
				window.onbeforeunload  = adScoreClass.pageleft;		
			}				
		}
	}
	//-----------------------------------------------------------
  };
  
  return AdScoreClass;

});
//-------------------------------
var adScoreClass = new AdScoreClass();
adScoreClass.init();

