//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
function $(e){if(typeof e=='string')e=document.getElementById(e);return e};
function collect(a,f){var n=[];for(var i=0;i<a.length;i++){var v=f(a[i]);if(v!=null)n.push(v)}return n};

ajax={};
ajax.x=function(){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(e){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){return new XMLHttpRequest()}}};
ajax.serialize=function(f){var g=function(n){return f.getElementsByTagName(n)};var nv=function(e){if(e.name)return encodeURIComponent(e.name)+'='+encodeURIComponent(e.value);else return ''};var i=collect(g('input'),function(i){if((i.type!='radio'&&i.type!='checkbox')||i.checked)return nv(i)});var s=collect(g('select'),nv);var t=collect(g('textarea'),nv);return i.concat(s).concat(t).join('&');};
ajax.send=function(u,f,m,a){var x=ajax.x();x.open(m,u,true);x.onreadystatechange=function(){if(x.readyState==4)f(x.responseText)};if(m=='POST')x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(a)};
ajax.get=function(url,func){ajax.send(url,func,'GET')};
ajax.gets=function(url){var x=ajax.x();x.open('GET',url,false);x.send(null);return x.responseText};
ajax.post=function(url,func,args){ajax.send(url,func,'POST',args)};
ajax.update=function(url,elm){var e=$(elm);var f=function(r){e.innerHTML=r};ajax.get(url,f)};
ajax.submit=function(url,elm,frm){var e=$(elm);var f=function(r){e.innerHTML=r};ajax.post(url,f,ajax.serialize(frm))};

/* Riot v2.3.18, @license MIT */
!function(t,e){"use strict";function n(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function r(t,e){for(var n,r=e.length,o=t.length;r>o;)n=e[--r],e.splice(r,1),n.unmount()}function o(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];M(r)?g(r,function(t){N(t,n,e)}):N(r,n,e)})}function i(t,e,n){var r,o=t._root;for(t._virts=[];o;)r=o.nextSibling,n?e.insertBefore(o,n._root):e.appendChild(o),t._virts.push(o),o=r}function u(t,e,n,r){for(var o,i=t._root,u=0;r>u;u++)o=i.nextSibling,e.insertBefore(i,n._root),i=o}function a(t,e,a){m(t,"each");var f,c=typeof y(t,"no-reorder")!==Y||m(t,"no-reorder"),l=S(t),p=Z[l]||{tmpl:t.outerHTML},d=nt.test(l),g=t.parentNode,h=document.createTextNode(""),v=w(t),b="option"===l.toLowerCase(),x=[],_=[],N="VIRTUAL"==t.tagName;a=at.loopKeys(a),g.insertBefore(h,t),e.one("before-mount",function(){t.parentNode.removeChild(t),g.stub&&(g=e.root)}).on("update",function(){var m=at(a.val,e),y=document.createDocumentFragment();M(m)||(f=m||!1,m=f?Object.keys(m).map(function(t){return n(a,t,m[t])}):[]);for(var w=0,C=m.length;C>w;w++){var L=m[w],S=c&&L instanceof Object&&!f,T=_.indexOf(L),O=~T&&S?T:w,A=x[O];L=!f&&a.key?n(a,L,w):L,!S&&!A||S&&!~T||!A?(A=new s(p,{parent:e,isLoop:!0,hasImpl:!!Z[l],root:d?g:t.cloneNode(),item:L},t.innerHTML),A.mount(),N&&(A._root=A.root.firstChild),w!=x.length&&x[w]?(N?i(A,g,x[w]):g.insertBefore(A.root,x[w].root),_.splice(w,0,L)):N?i(A,y):y.appendChild(A.root),x.splice(w,0,A),O=w):A.update(L,!0),O!==w&&S&&x[w]&&(N?u(A,g,x[w],t.childNodes.length):g.insertBefore(A.root,x[w].root),a.pos&&(A[a.pos]=w),x.splice(w,0,x.splice(O,1)[0]),_.splice(w,0,_.splice(O,1)[0]),!v&&A.tags&&o(A,w)),A._item=L,E(A,"_parent",e)}if(r(m,x),b){if(g.appendChild(y),it&&!g.multiple)for(var j=0;j<g.length;j++)if(g[j].__riot1374){g.selectedIndex=j,delete g[j].__riot1374;break}}else g.insertBefore(y,h);v&&(e.tags[l]=x),_=m.slice()})}function f(t,e,n,r){R(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||y(t,"each")?1:0,n){var o=w(t);o&&!t.isLoop&&n.push(C(o,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||K(t,e,[])}})}function c(t,e,n){function r(t,e,r){at.hasExpr(e)&&n.push(T({dom:t,expr:e},r))}R(t,function(t){var n,o=t.nodeType;return 3==o&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==o?(n=y(t,"each"))?(a(t,e,n),!1):(g(t.attributes,function(e){var n=e.name,o=n.split("__")[1];return r(t,e.value,{attr:o||n,bool:o}),o?(m(t,n),!1):void 0}),w(t)?!1:void 0):void 0})}function s(t,n,r){function o(){var t=N&&_?p:w||p;g(k.attributes,function(e){var n=e.value;y[b(e.name)]=at.hasExpr(n)?at(n,t):n}),g(Object.keys(F),function(e){y[b(e)]=at(F[e],t)})}function i(t){for(var e in C)typeof p[e]!==tt&&A(p,e)&&(p[e]=t[e])}function u(){p.parent&&_&&g(Object.keys(p.parent),function(t){var e=!O(rt,t)&&O(B,t);(typeof p[t]===tt||e)&&(e||B.push(t),p[t]=p.parent[t])})}function a(t){p.update(t,!0)}function s(t){if(g(R,function(e){e[t?"mount":"unmount"]()}),w){var e=t?"on":"off";_?w[e]("unmount",p.unmount):w[e]("update",a)[e]("unmount",p.unmount)}}var l,p=V.observable(this),y=P(n.opts)||{},w=n.parent,_=n.isLoop,N=n.hasImpl,C=j(n.item),S=[],R=[],k=n.root,H=k.tagName.toLowerCase(),F={},B=[];t.name&&k._tag&&k._tag.unmount(!0),this.isMounted=!1,k.isLoop=_,k._tag=this,E(this,"_riot_id",++z),T(this,{parent:w,root:k,opts:y,tags:{}},C),g(k.attributes,function(t){var e=t.value;at.hasExpr(e)&&(F[t.name]=e)}),l=ft(t.tmpl,r),E(this,"update",function(t,e){return t=j(t),u(),t&&v(C)&&(i(t),C=t),T(p,t),o(),p.trigger("update",t),d(S,p),e&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):st(function(){p.trigger("updated")}),this}),E(this,"mixin",function(){return g(arguments,function(t){var e;t=typeof t===Y?V.mixin(t):t,h(t)?(e=new t,t=t.prototype):e=t,g(Object.getOwnPropertyNames(t),function(t){"init"!=t&&(p[t]=h(e[t])?e[t].bind(p):e[t])}),e.init&&e.init.bind(p)()}),this}),E(this,"mount",function(){o();var e=V.mixin(Q);if(e&&p.mixin(e),t.fn&&t.fn.call(p,y),c(l,p,S),s(!0),t.attrs&&$(t.attrs,function(t,e){x(k,t,e)}),(t.attrs||N)&&c(p.root,p,S),p.parent&&!_||p.update(C),p.trigger("before-mount"),_&&!N)k=l.firstChild;else{for(;l.firstChild;)k.appendChild(l.firstChild);k.stub&&(k=w.root)}E(p,"root",k),_&&f(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){I(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),E(this,"unmount",function(t){var n,r=k,o=r.parentNode,i=U.indexOf(p);if(p.trigger("before-unmount"),~i&&U.splice(i,1),o){if(w)n=L(w),M(n.tags[H])?g(n.tags[H],function(t,e){t._riot_id==p._riot_id&&n.tags[H].splice(e,1)}):n.tags[H]=e;else for(;r.firstChild;)r.removeChild(r.firstChild);t?(m(o,X),m(o,W)):o.removeChild(r)}this._virts&&g(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),p.trigger("unmount"),s(),p.off("*"),p.isMounted=!1,delete k._tag}),f(l,this,R)}function l(e,n,r,o){r[e]=function(e){var i,u=o._parent,a=o._item;if(!a)for(;u&&!a;)a=u._item,u=u._parent;e=e||t.event,A(e,"currentTarget")&&(e.currentTarget=r),A(e,"target")&&(e.target=e.srcElement),A(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=a,n.call(o,e)===!0||/radio|check/.test(r.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(i=a?L(u):o,i.update())}}function p(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function d(t,e){g(t,function(t,n){var r=t.dom,o=t.attr,i=at(t.expr,e),u=t.dom.parentNode;if(t.bool?i=!!i:null==i&&(i=""),t.value!==i){if(t.value=i,!o)return i+="",void(u&&("TEXTAREA"===u.tagName?(u.value=i,ot||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(m(r,o),h(i))l(o,i,r,e);else if("if"==o){var a=t.stub,f=function(){p(a.parentNode,a,r)},c=function(){p(r.parentNode,r,a)};i?a&&(f(),r.inStub=!1,I(r)||R(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":t.bool?(r[o]=i,i&&x(r,o,o),it&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==J)&&(D(o,G)&&o!=W&&(o=o.slice(G.length)),x(r,o,i))}})}function g(t,e){for(var n,r=t?t.length:0,o=0;r>o;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function h(t){return typeof t===et||!1}function v(t){return t&&typeof t===J}function m(t,e){t.removeAttribute(e)}function b(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function y(t,e){return t.getAttribute(e)}function x(t,e,n){t.setAttribute(e,n)}function w(t){return t.tagName&&Z[y(t,X)||y(t,W)||t.tagName.toLowerCase()]}function _(t,e,n){var r=n.tags[e];r?(M(r)||r!==t&&(n.tags[e]=[r]),O(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function N(t,e,n){var r,o=t.parent;o&&(r=o.tags[e],M(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):_(t,e,o))}function C(t,e,n,r){var o=new s(t,e,n),i=S(e.root),u=L(r);return o.parent=u,o._parent=r,_(o,i,u),u!==r&&_(o,i,r),e.root.innerHTML="",o}function L(t){for(var e=t;!w(e.root)&&e.parent;)e=e.parent;return e}function E(t,e,n,r){return Object.defineProperty(t,e,T({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function S(t){var e=w(t),n=y(t,"name"),r=n&&!at.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function T(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var o in e)A(t,o)&&(t[o]=e[o]);return t}function O(t,e){return~t.indexOf(e)}function M(t){return Array.isArray(t)||t instanceof Array}function A(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===tt||n&&n.writable}function j(t){if(!(t instanceof s||t&&typeof t.trigger==et))return t;var e={};for(var n in t)O(rt,n)||(e[n]=t[n]);return e}function R(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)R(t,e),t=t.nextSibling}}function $(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function I(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function k(t){return document.createElement(t)}function H(t,e){return(e||document).querySelectorAll(t)}function F(t,e){return(e||document).querySelector(t)}function P(t){function e(){}return e.prototype=t,new e}function B(t){return y(t,"id")||y(t,"name")}function K(t,e,n){var r,o=B(t),i=function(i){O(n,o)||(r=M(i),i?(!r||r&&!O(i,t))&&(r?i.push(t):e[o]=[i,t]):e[o]=t)};o&&(at.hasExpr(o)?e.one("mount",function(){o=B(t),i(e[o])}):i(e[o]))}function D(t,e){return t.slice(0,e.length)===e}function q(t,e,n){var r=Z[e],o=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new s(r,{root:t,opts:n},o)),r&&r.mount&&(r.mount(),O(U,r)||U.push(r)),r}var V={version:"v2.3.18",settings:{}},z=0,U=[],Z={},Q="__global_mixin",G="riot-",W=G+"tag",X="data-is",Y="string",J="object",tt="undefined",et="function",nt=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,rt=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],ot=0|(t&&t.document||{}).documentMode,it=t&&!!t.InstallTrigger;V.observable=function(t){t=t||{};var e={},n=Array.prototype.slice,r=function(t,e){t.replace(/\S+/g,e)};return Object.defineProperties(t,{on:{value:function(n,o){return"function"!=typeof o?t:(r(n,function(t,n){(e[t]=e[t]||[]).push(o),o.typed=n>0}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,o){return"*"!=n||o?r(n,function(t){if(o)for(var n,r=e[t],i=0;n=r&&r[i];++i)n==o&&r.splice(i--,1);else delete e[t]}):e={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,u=arguments.length-1,a=new Array(u),f=0;u>f;f++)a[f]=arguments[f+1];return r(o,function(r){i=n.call(e[r]||[],0);for(var o,u=0;o=i[u];++u){if(o.busy)return;o.busy=1,o.apply(t,o.typed?[r].concat(a):a),i[u]!==o&&u--,o.busy=0}e["*"]&&"*"!=r&&t.trigger.apply(t,["*",r].concat(a))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(e){function n(t){return t.split(/[\/?#]/)}function r(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);return r?r.slice(1):void 0}function o(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function i(t){g=o(l,1),O[_](L,g),O[_](E,g),M[_]($,p),t&&l(!0)}function u(){this.$=[],e.observable(this),k.on("stop",this.s.bind(this)),k.on("emit",this.e.bind(this))}function a(t){return t[C](/^\/|\/$/,"")}function f(t){return"string"==typeof t}function c(t){return(t||j.href)[C](y,"")}function s(t){return"#"==h[0]?(t||j.href||"").split(h)[1]||"":(j?c(t):t||"")[C](h,"")}function l(t){var e=0==P;if(!(P>=T)&&(P++,F.push(function(){var e=s();(t||e!=v)&&(k[S]("emit",e),v=e)}),e)){for(;F.length;)F[0](),F.shift();P=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[N]("download")||!e[N]("href")||e.target&&"_self"!=e.target||-1==e.href.indexOf(j.href.match(y)[0])||(e.href==j.href||e.href.split("#")[0]!=j.href.split("#")[0]&&("#"==h||0===c(e.href).indexOf(h))&&d(s(e.href),e.title||M.title))&&t.preventDefault()}}function d(t,e,n){return A?(t=h+a(t),e=e||M.title,n?A.replaceState(null,e,t):A.pushState(null,e,t),M.title=e,H=!1,l(),H):k[S]("emit",s(t))}var g,h,v,m,b,y=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,N="hasAttribute",C="replace",L="popstate",E="hashchange",S="trigger",T=3,O="undefined"!=typeof t&&t,M="undefined"!=typeof document&&document,A=O&&history,j=O&&(A.location||O.location),R=u.prototype,$=M&&M.ontouchstart?"touchstart":"click",I=!1,k=e.observable(),H=!1,F=[],P=0;R.m=function(t,e,n){!f(t)||e&&!f(e)?e?this.r(t,e):this.r("@",t):d(t,e,n||!1)},R.s=function(){this.off("*"),this.$=[]},R.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?m:b)(a(t),a(e));return"undefined"!=typeof n?(this[S].apply(null,[e].concat(n)),H=!0):void 0},this)},R.r=function(t,e){"@"!=t&&(t="/"+a(t),this.$.push(t)),this.on(t,e)};var B=new u,K=B.m.bind(B);K.create=function(){var t=new u,e=t.m.bind(t);return e.stop=t.s.bind(t),e},K.base=function(t){h=t||"#",v=s()},K.exec=function(){l(!0)},K.parser=function(t,e){t||e||(m=n,b=r),t&&(m=t),e&&(b=e)},K.query=function(){var t={},e=j.href||v;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},K.stop=function(){I&&(O&&(O[w](L,g),O[w](E,g),M[w]($,p)),k[S]("stop"),I=!1)},K.start=function(t){I||(O&&("complete"==document.readyState?i(t):O[_]("load",function(){setTimeout(function(){i(t)},1)})),I=!0)},K.base(),K.parser(),e.route=K}(V);var ut=function(t){function e(t){return t}function n(t,e){return e||(e=m),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===g)return h;var e=t.split(" ");if(2!==e.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:h[4],e),e[5]=n(t.length>3?/\\({|})/g:h[5],e),e[6]=n(h[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,c),e[8]=t,e}function o(t){return t instanceof RegExp?a(t):m[t]}function i(t){(t||(t=g))!==m[8]&&(m=r(t),a=t===g?e:n,m[9]=a(h[9])),v=t}function u(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:i,get:function(){return v},enumerable:!0}),f=t,i(e)}var a,f,c="g",s=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},g="{ }",h=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),g,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],v=t,m=[];return o.split=function(t,e,n){function r(t){e||u?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function o(t,e,n){var r,o=d[e];for(o.lastIndex=n,n=1;(r=o.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:o.lastIndex}n||(n=m);var i,u,a,f,c=[],s=n[6];for(u=a=s.lastIndex=0;i=s.exec(t);){if(f=i.index,u){if(i[2]){s.lastIndex=o(t,i[2],s.lastIndex);continue}if(!i[3])continue}i[1]||(r(t.slice(a,f)),a=s.lastIndex,s=n[6+(u^=1)],s.lastIndex=a)}return t&&a<t.length&&r(t.slice(a)),c},o.hasExpr=function(t){return m[4].test(t)},o.loopKeys=function(t){var e=t.match(m[9]);return e?{key:e[1],pos:e[2],val:m[0]+e[3].trim()+m[1]}:{val:t.trim()}},o.array=function(t){return t?r(t):m},Object.defineProperty(o,"settings",{set:u,get:function(){return f}}),o.settings="undefined"!=typeof V&&V.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=s,o.S_QBLOCKS=p,o}(),at=function(){function e(t,e){return t?(a[t]||(a[t]=r(t))).call(e,n):t}function n(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function r(t){var e=o(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function o(t){var e,n=[],r=ut.split(t.replace(l,'"'),1);if(r.length>2||r[0]){var o,u,a=[];for(o=u=0;o<r.length;++o)e=r[o],e&&(e=1&o?i(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[u++]=e);e=2>u?a[0]:"["+a.join(",")+'].join("")'}else e=i(r[1],0,n);return n[0]&&(e=e.replace(p,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){function r(e,n){var r,o=1,i=d[e];for(i.lastIndex=n.lastIndex;r=i.exec(t);)if(r[0]===e)++o;else if(!--o)break;n.lastIndex=o?t.length:i.lastIndex}if(t=t.replace(s,function(t,e){return t.length>2&&!e?f+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],a=0;t&&(o=t.match(c))&&!o.index;){var l,p,g=/,|([[{(])|$/g;for(t=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=g.exec(t))[1];)r(p,g);p=t.slice(0,o.index),t=RegExp.rightContext,i[a++]=u(p,1,l)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:u(t,e)}return t}function u(t,e,n){var r;return t=t.replace(h,function(t,e,n,o,i){return n&&(o=r?0:o+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+g+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!v.test(i.slice(o)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};e.haveRaw=ut.hasRaw,e.hasExpr=ut.hasExpr,e.loopKeys=ut.loopKeys,e.errorHandler=null;var f="⁗",c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,s=RegExp(ut.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof t?"global":"window")+").",h=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,v=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.parse=function(t){return t},e.version=ut.version="v2.3.22",e}(),ft=function t(){function t(t,r){var o=t&&t.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),u=k("div");return t=n(t,r),f.test(i)?u=e(u,t,i):u.innerHTML=t,u.stub=!0,u}function e(t,e,n){var r="o"===n[0],o=r?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,r)o.selectedIndex=-1;else{var i=a[n];i&&1===o.childElementCount&&(o=F(i,o))}return o}function n(t,e){if(!r.test(t))return t;var n={};return e=e&&e.replace(i,function(t,e,r){return n[e]=n[e]||r,""}).trim(),t.replace(u,function(t,e,r){return n[e]||r||""}).replace(o,function(t,n){return e||n||""})}var r=/<yield\b/i,o=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,u=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,a={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},f=ot&&10>ot?nt:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return t}(),ct=function(e){if(!t)return{add:function(){},inject:function(){}};var n=function(){var t=k("style");x(t,"type","text/css");var e=F("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),r=n.styleSheet,o="";return Object.defineProperty(e,"styleNode",{value:n,writable:!0}),{add:function(t){o+=t},inject:function(){o&&(r?r.cssText+=o:n.innerHTML+=o,o="")}}}(V),st=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(t||{});V.util={brackets:ut,tmpl:at},V.mixin=function(){var t={};return function(e,n){return v(e)?(n=e,void(t[Q]=T(t[Q]||{},n))):n?void(t[e]=n):t[e]}}(),V.tag=function(t,e,n,r,o){return h(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(h(n)?o=n:ct.add(n)),t=t.toLowerCase(),Z[t]={name:t,tmpl:e,attrs:r,fn:o},t},V.tag2=function(t,e,n,r,o){return n&&ct.add(n),Z[t]={name:t,tmpl:e,attrs:r,fn:o},t},V.mount=function(t,e,n){function r(t){var e="";return g(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+X+'="'+t+'"],['+W+'="'+t+'"]')}),e}function o(){var t=Object.keys(Z);return t+r(t)}function i(t){if(t.tagName){var r=y(t,X)||y(t,W);e&&r!==e&&(r=e,x(t,X,e),x(t,W,e));var o=q(t,r||t.tagName.toLowerCase(),n);o&&f.push(o)}else t.length&&g(t,i)}var u,a,f=[];if(ct.inject(),v(e)&&(n=e,e=0),typeof t===Y?("*"===t?t=a=o():t+=r(t.split(/, */)),u=t?H(t):[]):u=t,"*"===e){if(e=a||o(),u.tagName)u=H(e,u);else{var c=[];g(u,function(t){c.push(H(e,t))}),u=c}e=0}return i(u),f},V.update=function(){return g(U,function(t){t.update()})},V.vdom=U,V.Tag=s,typeof exports===J?module.exports=V:typeof define===et&&typeof define.amd!==tt?define(function(){return V}):t.riot=V}("undefined"!=typeof window?window:void 0);

riot.tag2('balance-table-child', '<div class="th"> <view-edit-box surface="{this.record.date}"> <input name="date" class="edit-input {edit-mode: this.editMode}" value="{this.record.date}" onblur="{editModeEnd}" type="{\'date\'}"> </view-edit-box> </div> <div class="td record-section"> <view-edit-box surface="{this.record.section.surface}"> <select name="section" class="edit-input {edit-mode: this.editMode}" onblur="{editModeEnd}"> <option each="{parent.sections.models}" value="{this.id}" __selected="{this.id === this.record.section.id}"> {this.title} </option> </select> </view-edit-box> </div> <div class="td record-subsection"> <view-edit-box surface="{this.record.subsection.surface}"> <select name="subsection" class="edit-input {edit-mode: this.editMode}" onblur="{editModeEnd}"> <option each="{parent.subsections.models}" value="{this.id}" __selected="{this.id === this.record.subsection.id}"> {this.title} </option> </select> </view-edit-box> </div> <div class="td record-amount"> <view-edit-box surface="{this.record.amount.surface}"> <input name="amount" class="edit-input {edit-mode: this.editMode}" value="{this.record.amount.value}" onblur="{editModeEnd}" type="{\'number\'}"> </view-edit-box> </div>', '', '', function(opts) {


        this.keypress = function(e) {
            if( e.keyCode === 13 ) {
              e.target.blur();
              this.trigger('patch', e.target.parentElement);
            }
            else return true;
        }.bind(this)

        this.submit = function(e) {
            this.parent.changedId = this.record.id;
            this.trigger('patch', e.target)
        }.bind(this)

        this.puts = function(obj){
          console.log(obj);
        }.bind(this)

        var self = this;

        self.on('patch', function(form){
            var param = ajax.serialize(form);
            console.log(self.parent.parent);
            self.parent.parent.changedId = self.record.id;
            riot.collections.records.trigger('patch', self.record.id, param);

        });

        self.on('update', function(){

        });

        self.on('updated', function(){

        });

});
riot.tag2('balance-table', '<div class="table balance-table"> <div class="thead"> <div class="tr"> <div class="th" each="{title, i in titles}">{title}</div> </div> </div> <div class="tbody" each="{record_groups}"> <balance-table-child each="{record, i in records}" class="tr {changed: record.id === parent.changedId}"></balance-table-child> </div> <div class="tfoot"> <div class="tr"> <div class="th">total income </div> <div class="td">{total.income}</div> </div> <div class="tr"> <div class="th">total expense </div> <div class="td">{total.expense}</div> </div> <div class="tr"> <div class="th">total</div> <div class="td">{total.all}</div> </div> </div> </div>', '', '', function(opts) {

        this.records = riot.collections.records;
        this.sections = riot.collections.sections;
        this.subsections = riot.collections.subsections;

        this.changedId = false;

        this.titles = ['date', 'section', 'subsection', 'amount'];
        this.record_groups = [];
        this.total = {
            income : 0,
            expense : 0,
            all : 0
        }

        var self = this;

        self.calculate = {

            totals: function(){
                var income = 0, expense = 0;
                _.each(self.records.models, function(record_group){
                    _.each(record_group.records, function(record){
                        if( record.is_income ) income += record.amount;
                        else expense += record.amount;
                    });
                });
                self.total.income = income;
                self.total.expense = expense;
                self.total.all = income - expense;
                return self.total;
            },

            total_income : function(){
                this.totals();
                return self.total.income;
            },

            total_expense : function(){
                this.totals();
                return self.total.expense;
            }
        }

        self.records.on('updated', function(){
            self.update();
        });

        self.sections.on('updated', function(){
            self.update();
        });

        self.subsections.on('updated', function(){
            self.update();
        });

        self.on('update', function() {
            if(self.records.isReady() && self.sections.isReady() && self.subsections.isReady()){
                self.record_groups = _.map(self.records.models, function(record_group){
                    var record_group = _.clone(record_group);
                    record_group.records = _.map(record_group.records, function(record){
                        var section = self.sections.models[record.section],
                            subsection = self.subsections.models[record.subsection];
                        return {
                            date : record.date,
                            id : record.id,
                            section :    { id : record.section, surface: section.title },
                            subsection : { id : record.subsection, surface: subsection.title },
                            amount :     { value : record.amount, surface: record.amount }
                        }
                    });
                    return record_group;
                });
                self.calculate.totals();
            }

        });

});
riot.tag2('record-edit', '<form> <div class="radio-tabs"> <label for="{\'isIncome\' + opt.suffix}">Income</label> <input id="{\'isIncome\' + opt.suffix}" name="is_income" type="radio" value="1" __checked="{record.is_income}"> <label for="{\'isExpense\' + opt.suffix}">Expense</label> <input id="{\'isExpense\' + opt.suffix}" name="is_income" type="radio" value="0" __checked="{!record.is_income}"> </div><div> <input name="date" class="edit-input" value="{record.date}" type="{\'date\'}"> </div><div> <select name="section" class="edit-input"> <option if="{this.id}" each="{sections.models}" value="{this.id}" __selected="{this.id === parent.record.section}"> {this.title} </option> </select> </div><div> <select name="subsection" class="edit-input"> <option if="{this.id}" each="{subsections.models}" value="{this.id}" __selected="{this.id === parent.record.subsection}"> {this.title} </option> </select> </div><div> <input name="amount" class="edit-input" value="{record.amount}" type="{\'number\'}"> </div><div> <input name="detail" type="text" class="edit-input" value="{record.detail}"> </div> </form>', '', '', function(opts) {


        this.records = riot.collections.records;
        this.sections = riot.collections.sections;
        this.subsections = riot.collections.subsections;

        this.record = {
            is_income: true
        };

        var self = this;

        self.records.on('updated', function(){
            self.update();
        });

        self.sections.on('updated', function(){
            self.update();
        });

        self.subsections.on('updated', function(){
            self.update();
        });

        self.on('update', function() {
            if(self.records.isReady() && self.sections.isReady() && self.subsections.isReady()){
                self.record = this.records.models[0].records[0];
                console.log(self.record);
            }
        });

});
riot.tag2('tabs', '<h2>Tabs</h2> <ul> <li each="{tab, i in tabs}" class="tabItem {is-active: parent.isActiveTab(tab.ref)}" onclick="{parent.toggleTab}">{tab.title}</li> </ul> <div class="tabContent"> <div each="{tab, i in tabs}" class="tabContent__item {hidden: !parent.isActiveTab(tab.ref)}">{tab.content}</div> </div>', '', '', function(opts) {
        this.tabs = [
            {
                title: 'Tab 1',
                ref: 'tab1',
                content: "(1) Lorem ipsum dolor"
            },
            {
                title: 'Tab 2',
                ref: 'tab2',
                content: "(2) Lorem ipsum dolor"
            },
            {
                title: 'Tab 3',
                ref: 'tab3',
                content: "(3) Lorem ipsum dolor"
            }
      ]

        this.activeTab = 'tab1'

        this.isActiveTab = function(tab) {
            return this.activeTab === tab
        }.bind(this)

        this.toggleTab = function(e) {
            this.activeTab = e.item.tab.ref
            riot.event.trigger('open', 'opened');
            return true
        }.bind(this)
});
riot.tag2('todo', '<h3>{title}</h3> <ul> <li each="{items}" class="{hidden: hidden}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input type="checkbox" __checked="{checked}" onclick="{check}"><input name="input" onkeyup="{edit}"> <button __disabled="{!text}">Add #{items.length + 1}</button> </form>', '', '', function(opts) {

        var self = this;

        self.disabled = true

        self.title = opts.title || 'TODO LISTS'
        self.items = opts.items || []
        self.checked = false

        if( opts.remote ){
          ajax.get(opts.remote, function(res){
              var tasks = JSON.parse(res);
              self.addAjax(tasks);
          });
        }

        this.edit = function(e) {
            self.text = e.target.value
        }.bind(this)

        this.addAjax = function(tasks) {
            tasks.forEach(function(task){
                self.items.push({
                    title: task.title,
                    done: task.done
                });
            });
            self.update();
        }.bind(this)

        this.add = function(e) {
            if (self.text) {
                self.items.push({
                    title: self.text,
                    done: self.checked
                })
                self.text = self.input.value = ''
            }
        }.bind(this)

        this.check = function(e) {
            self.checked = !self.checked
            return true
        }.bind(this)

        this.toggle = function(e) {
            var item = e.item
            item.done = !item.done
            return true
        }.bind(this)

});
riot.tag2('user-edit', '<div class="table user-edit"> <div class="thead"> <div class="tr"> <div class="th" each="{title, i in titles}">{title}</div> </div> </div> <div class="tbody"> <div class="tr" each="{this.users.models}"> <div class="td"> {this.id} </div> <div class="td"> {this.name} </div> <div class="td"> </div> <div class="td"> {this.using_books} </div> <div class="td"> </div> <div class="td"> </div> </div> </div> </div>', '', '', function(opts) {


        this.users = riot.collections.users;
        console.log(this.users.models);

        this.titles = ['id', 'name', 'password', 'using books', 'using credit', 'using cards'];

        var self = this;

        self.users.on('updated', function(){
            self.update();
        });

});

riot.tag2('view-edit-box', '<p class="{hidden: editMode}" onclick="{editModeStart}">{opts.surface}</p> <form if="{editMode}" onsubmit="{parent.submit}" onkeypress="{parent.keypress}"> <yield></yield> </form>', '', '', function(opts) {

        this.editMode = false;

        this.editModeStart = function(editModeName) {
            this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }.bind(this)

        this.editModeEnd = function(e) {
            this.editMode = false;
        }.bind(this)

});
(function(){
    var isReady = false,
        ready = function(func){
            ready.set(func);
        };

    ready.set = function (func) {
        if(!this.list) {
            this.list = [];
            this.list.push(func);

            if (document.readyState === "complete") {
                setTimeout( this.run );

            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);

            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}

                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }

                            detach();
                            this.run();
                        }
                    })();
                }
            }

        } else if (this.list.length === 0) {
            func();

        } else {
            this.list.push(func);
        }
    };

    ready.run = function(){
        if ( !document.body ) {
            return setTimeout( this.run );
        }

        isReady = true;

        while( this.list.length > 0 ){
            this.list.shift()();
        }
    }

    function completed(){
        if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
            document.ready.run();
            detach();
        }
    }

    function detach() {
        if ( document.addEventListener ) {
            document.removeEventListener( "DOMContentLoaded", completed, false );
            window.removeEventListener( "load", completed, false );

        } else {
            document.detachEvent( "onreadystatechange", completed );
            window.detachEvent( "onload", completed );
        }
    }

    document.ready = ready;
})();

(function(){

    //------ riot拡張 ------------
    //riot.event 全riot独自タグ内でイベント感知できるように
    riot.event  = riot.observable();
    
    //riot.getData タグからdata-○○属性を取得。
    riot.getData = function(dom, name) {
        if(!document.createElement('div').dataset) {
            return dom.getAttribute('data-' + name);
        }
        return dom.dataset[name];
    }
    
    //riot.createCollection リモートからデータをAjaxで取得して、モデル群を保持。
    riot.createCollection = function(opts){
        var collection = riot.observable(), opts = opts || {};

        collection.remote = opts.remote;
        collection.params = '';
        collection.isReady = function(){
            return ( this.models && this.models.length > 0 );
        }

        collection.on('get', function(params){
            var co = this;
            if(!params) params = co.params;
            ajax.get(this.remote + '?' + params, function(res){
                var models = JSON.parse(res);
                co.models = models;
                co.trigger('updated');
            });
        });

        collection.on('patch', function(id, params){
            var co = this;
            if(!id || !params) return;
            ajax.post(this.remote + '/update/' + id, function(res){
                var models = JSON.parse(res);
                co.models = models;
                collection.trigger('get');
            }, params);
        });
        collection.trigger('get'); //あとでrouteと合わせてparamを連動するよう修正

        return collection;
    }
    //保持するモデル群。
    riot.collections  = {
      records : riot.createCollection({remote: '/records'}),
      sections : riot.createCollection({remote: '/sections'}),
      subsections : riot.createCollection({remote: '/subsections'}),
      users : riot.createCollection({remote: '/users'})
    }

    document.ready(function(){
        riot.mount('*');
//        riot.mount('todo', {
//              title: 'TODO A',
//              remote: '/static_pages/test/'
//        });
//        riot.mount('#todoB', 'todo', {
//              items: [
//                  {
//                      title: 'Avoid excessive coffeine',
//                      done: true
//                  }
//                ]
//        });
//        riot.mount('tabs');
    });
})()
