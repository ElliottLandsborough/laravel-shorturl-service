!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){t(1),e.exports=t(2)},function(e,r,t){"use strict";function n(e){if("object"===(void 0===e?"undefined":a(e))&&"token"in e){var r=s+"/"+e.token;$("#shortURL").length||$('<div id="shortURL"></div>').insertAfter("#shorten"),$(".shorten img").hide(),$("#shortURL").html("Success!<span>"+r+"</span>").on("click",function(){document.getElementById("#shortURL").select()})}}function o(){$("#shorten input.url").animate({"background-color":"#000"},100).animate({"background-color":"#fff"},100)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function r(r,t,n){var o="rgb"+(e.support.rgba?"a":"")+"("+parseInt(r[0]+n*(t[0]-r[0]),10)+","+parseInt(r[1]+n*(t[1]-r[1]),10)+","+parseInt(r[2]+n*(t[2]-r[2]),10);return e.support.rgba&&(o+=","+(r&&t?parseFloat(r[3]+n*(t[3]-r[3])):1)),o+")"}function t(e){var r;return(r=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e))?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),1]:(r=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e))?[17*parseInt(r[1],16),17*parseInt(r[2],16),17*parseInt(r[3],16),1]:(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(r[1]),parseInt(r[2]),parseInt(r[3]),1]:(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e))?[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4])]:o[e]}e.extend(!0,e,{support:{rgba:function(){var r=e("script:first"),t=r.css("color"),n=!1;if(/^rgba/.test(t))n=!0;else try{n=t!=r.css("color","rgba(0, 0, 0, 0.5)").css("color"),r.css("color",t)}catch(e){}return n}()}});var n="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");e.each(n,function(n,o){e.Tween.propHooks[o]={get:function(r){return e(r.elem).css(o)},set:function(n){var a=n.elem.style,s=t(e(n.elem).css(o)),i=t(n.end);n.run=function(e){a[o]=r(s,i,e)}}}}),e.Tween.propHooks.borderColor={set:function(o){var a=o.elem.style,s=[],i=n.slice(2,6);e.each(i,function(r,n){s[n]=t(e(o.elem).css(n))});var c=t(o.end);o.run=function(t){e.each(i,function(e,n){a[n]=r(s[n],c,t)})}}};var o={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,0,1],transparent:[255,255,255,0]}}(jQuery);var s=window.location.protocol+"//"+window.location.host;$("#shorten").on("submit",function(e){e.preventDefault();var r=$("#shorten input.url").val();if(r.length){/^https?:\/\//i.test(r)||(r="http://"+r);var t=$('#shorten input[name="_token"]').val();t.length&&$.ajax({type:"POST",url:s+"/shorten",data:{url:r,_token:t},dataType:"json"}).done(function(e){n(e)}).error(function(){o()})}else o()})},function(e,r){}]);