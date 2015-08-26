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

/* Riot v2.2.4, @license MIT, (c) 2015 Muut Inc. + contributors */
(function(e,t){"use strict";var n={version:"v2.2.4",settings:{}},i=0,r="riot-",o=r+"tag",u="string",f="object",a="undefined",s="function",c=/^(?:opt(ion|group)|tbody|col|t[rhd])$/,l=["_item","_id","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],p=(e&&e.document||{}).documentMode|0,d=Array.isArray;n.observable=function(e){e=e||{};var t={},n=0;e.on=function(i,r){if(M(r)){if(typeof r.id===a)r._id=n++;i.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,i){if(n=="*")t={};else{n.replace(/\S+/g,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o._id==i._id)n.splice(r--,1)}}else{t[e]=[]}})}return e};e.one=function(t,n){function i(){e.off(t,i);n.apply(e,arguments)}return e.on(t,i)};e.trigger=function(n){var i=[].slice.call(arguments,1),r=t[n]||[];for(var o=0,u;u=r[o];++o){if(!u.busy){u.busy=1;u.apply(e,u.typed?[n].concat(i):i);if(r[o]!==u){o--}u.busy=0}}if(t.all&&n!="all"){e.trigger.apply(e,["all",n].concat(i))}return e};return e};n.mixin=function(){var e={};return function(t,n){if(!n)return e[t];e[t]=n}}();(function(e,t,n){if(!n)return;var i=n.location,r=e.observable(),o=false,u;function f(){return i.href.split("#")[1]||""}function a(e){return e.split("/")}function s(e){if(e.type)e=f();if(e!=u){r.trigger.apply(null,["H"].concat(a(e)));u=e}}var c=e.route=function(e){if(e[0]){i.hash=e;s(e)}else{r.on("H",e)}};c.exec=function(e){e.apply(null,a(f()))};c.parser=function(e){a=e};c.stop=function(){if(o){if(n.removeEventListener)n.removeEventListener(t,s,false);else n.detachEvent("on"+t,s);r.off("*");o=false}};c.start=function(){if(!o){if(n.addEventListener)n.addEventListener(t,s,false);else n.attachEvent("on"+t,s);o=true}};c.start()})(n,"hashchange",e);var g=function(e){var t,i,r,o=/[{}]/g;return function(u){var f=n.settings.brackets||e;if(t!==f){t=f;r=f.split(" ");i=r.map(function(e){return e.replace(/(?=.)/g,"\\")})}return u instanceof RegExp?f===e?u:new RegExp(u.source.replace(o,function(e){return i[~~(e==="}")]}),u.global?"g":""):r[u]}}("{ }");var m=function(){var t={},n='"in d?d:'+(e?"window).":"global)."),i=/(['"\/])(?:[^\\]*?|\\.|.)*?\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function\s*\()|([A-Za-z_$]\w*)/g;return function(e,n){return e&&(t[e]||(t[e]=r(e)))(n)};function r(e,t){if(e.indexOf(g(0))<0){e=e.replace(/\n|\r\n?/g,"\n");return function(){return e}}e=e.replace(g(/\\{/g),"￰").replace(g(/\\}/g),"￱");t=f(e,a(e,g(/{/),g(/}/)));e=t.length===2&&!t[0]?o(t[1]):"["+t.map(function(e,t){return t%2?o(e,true):'"'+e.replace(/\n|\r\n?/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")';return new Function("d","return "+e.replace(/\uFFF0/g,g(0)).replace(/\uFFF1/g,g(1))+";")}function o(e,t){e=e.replace(/\n|\r\n?/g," ").replace(g(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),"");return/^\s*[\w- "']+ *:/.test(e)?"["+a(e,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(e){return e.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(e,t,n){return n.replace(/[^&|=!><]+/g,u)+'?"'+t+'":"",'})}).join("")+'].join(" ").trim()':u(e,t)}function u(e,t){e=e.trim();return!e?"":"(function(v){try{v="+e.replace(i,function(e,t,i){return i?'(("'+i+n+i+")":e})+"}catch(e){}return "+(t===true?'!v&&v!==0?"":v':"v")+"}).call(d)"}function f(e,t){var n=[];t.map(function(t,i){i=e.indexOf(t);n.push(e.slice(0,i),t);e=e.slice(i+t.length)});if(e)n.push(e);return n}function a(e,t,n){var i,r=0,o=[],u=new RegExp("("+t.source+")|("+n.source+")","g");e.replace(u,function(t,n,u,f){if(!r&&n)i=f;r+=n?1:-1;if(!r&&u!=null)o.push(e.slice(i,f+u.length))});return o}}();var v=function(e){var t={tr:"tbody",th:"tr",td:"tr",tbody:"table",col:"colgroup"},n="div";e=e&&e<10;function i(i){var o=i&&i.match(/^\s*<([-\w]+)/),u=o&&o[1].toLowerCase(),f=t[u]||n,a=R(f);a.stub=true;if(e&&u&&(o=u.match(c)))r(a,i,u,!!o[1]);else a.innerHTML=i;return a}function r(e,t,i,r){var o=R(n),u=r?"select>":"table>",f;o.innerHTML="<"+u+t+"</"+u;f=o.getElementsByTagName(i)[0];if(f)e.appendChild(f)}return i}(p);function h(e){var t=g(0),n=e.trim().slice(t.length).match(/^\s*(\S+?)\s*(?:,\s*(\S+))?\s+in\s+(.+)$/);return n?{key:n[1],pos:n[2],val:t+n[3]}:{val:e}}function y(e,t,n){var i={};i[e.key]=t;if(e.pos)i[e.pos]=n;return i}function b(e,t,n){A(e,"each");var i=S(e),r=e.outerHTML,o=!!U[i],u=U[i]||{tmpl:r},f=e.parentNode,a=document.createComment("riot placeholder"),s=[],l=O(e),p;f.insertBefore(a,e);n=h(n);t.one("premount",function(){if(f.stub)f=t.root;e.parentNode.removeChild(e)}).on("update",function(){var r=m(n.val,t);if(!d(r)){p=r?JSON.stringify(r):"";r=!r?[]:Object.keys(r).map(function(e){return y(n,e,r[e])})}var g=document.createDocumentFragment(),v=s.length,h=r.length;while(v>h){s[--v].unmount();s.splice(v,1)}for(v=0;v<h;++v){var b=!p&&!!n.key?y(n,r[v],v):r[v];if(!s[v]){(s[v]=new _(u,{parent:t,isLoop:true,hasImpl:o,root:c.test(i)?f:e.cloneNode(),item:b},e.innerHTML)).mount();g.appendChild(s[v].root)}else s[v].update(b);s[v]._item=b}f.insertBefore(g,a);if(l)t.tags[i]=s}).one("updated",function(){var e=Object.keys(t);F(f,function(n){if(n.nodeType==1&&!n.isLoop&&!n._looped){n._visited=false;n._looped=true;z(n,t,e)}})})}function w(e,t,n){F(e,function(e){if(e.nodeType==1){e.isLoop=e.isLoop||(e.parentNode&&e.parentNode.isLoop||e.getAttribute("each"))?1:0;var i=O(e);if(i&&!e.isLoop){n.push(E(i,e,t))}if(!e.isLoop)z(e,t,[])}})}function L(e,t,n){function i(e,t,i){if(t.indexOf(g(0))>=0){var r={dom:e,expr:t};n.push(k(r,i))}}F(e,function(e){var n=e.nodeType;if(n==3&&e.parentNode.tagName!="STYLE")i(e,e.nodeValue);if(n!=1)return;var r=e.getAttribute("each");if(r){b(e,t,r);return false}C(e.attributes,function(t){var n=t.name,r=n.split("__")[1];i(e,t.value,{attr:r||n,bool:r});if(r){A(e,n);return false}});if(O(e))return false})}function _(e,r,o){var s=n.observable(this),c=q(r.opts)||{},p=v(e.tmpl),h=r.parent,y=r.isLoop,b=r.hasImpl,_=j(r.item),N=[],x=[],A=r.root,O=e.fn,E=A.tagName.toLowerCase(),S={},F=[];if(O&&A._tag){A._tag.unmount(true)}this.isMounted=false;A.isLoop=y;A._tag=this;this._id=i++;k(this,{parent:h,root:A,opts:c,tags:{}},_);C(A.attributes,function(e){var t=e.value;if(g(/{.*}/).test(t))S[e.name]=t});if(p.innerHTML&&!/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(E))p.innerHTML=D(p.innerHTML,o);function R(){var e=b&&y?s:h||s;C(A.attributes,function(t){c[t.name]=m(t.value,e)});C(Object.keys(S),function(t){c[t]=m(S[t],e)})}function I(e){for(var t in _){if(typeof s[t]!==a)s[t]=e[t]}}function V(){if(!s.parent||!y)return;C(Object.keys(s.parent),function(e){var t=!~l.indexOf(e)&&~F.indexOf(e);if(typeof s[e]===a||t){if(!t)F.push(e);s[e]=s.parent[e]}})}this.update=function(e){e=j(e);V();if(e&&typeof _===f){I(e);_=e}k(s,e);R();s.trigger("update",e);T(N,s);s.trigger("updated")};this.mixin=function(){C(arguments,function(e){e=typeof e===u?n.mixin(e):e;C(Object.keys(e),function(t){if(t!="init")s[t]=M(e[t])?e[t].bind(s):e[t]});if(e.init)e.init.bind(s)()})};this.mount=function(){R();if(O)O.call(s,c);L(p,s,N);z(true);if(e.attrs||b){$(e.attrs,function(e,t){A.setAttribute(e,t)});L(s.root,s,N)}if(!s.parent||y)s.update(_);s.trigger("premount");if(y&&!b){s.root=A=p.firstChild}else{while(p.firstChild)A.appendChild(p.firstChild);if(A.stub)s.root=A=h.root}if(!s.parent||s.parent.isMounted){s.isMounted=true;s.trigger("mount")}else s.parent.one("mount",function(){if(!B(s.root)){s.parent.isMounted=s.isMounted=true;s.trigger("mount")}})};this.unmount=function(e){var n=A,i=n.parentNode,r;if(i){if(h){r=H(h);if(d(r.tags[E]))C(r.tags[E],function(e,t){if(e._id==s._id)r.tags[E].splice(t,1)});else r.tags[E]=t}else while(n.firstChild)n.removeChild(n.firstChild);if(!e)i.removeChild(n);else i.removeAttribute("riot-tag")}s.trigger("unmount");z();s.off("*");A._tag=null};function z(e){C(x,function(t){t[e?"mount":"unmount"]()});if(h){var t=e?"on":"off";if(y)h[t]("unmount",s.unmount);else h[t]("update",s.update)[t]("unmount",s.unmount)}}w(p,this,x)}function N(t,n,i,r){i[t]=function(t){var o=r._item,u=r.parent,f;if(!o)while(u&&!o){o=u._item;u=u.parent}t=t||e.event;try{t.currentTarget=i;if(!t.target)t.target=t.srcElement;if(!t.which)t.which=t.charCode||t.keyCode}catch(a){}t.item=o;if(n.call(r,t)!==true&&!/radio|check/.test(i.type)){if(t.preventDefault)t.preventDefault();t.returnValue=false}if(!t.preventUpdate){f=o?H(u):r;f.update()}}}function x(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function T(e,t){C(e,function(e,n){var i=e.dom,u=e.attr,a=m(e.expr,t),s=e.dom.parentNode;if(e.bool)a=a?u:false;else if(a==null)a="";if(s&&s.tagName=="TEXTAREA")a=(""+a).replace(/riot-/g,"");if(e.value===a)return;e.value=a;if(!u){i.nodeValue=""+a;return}A(i,u);if(M(a)){N(u,a,i,t)}else if(u=="if"){var c=e.stub,l=function(){x(c.parentNode,c,i)},p=function(){x(i.parentNode,i,c)};if(a){if(c){l();i.inStub=false;if(!B(i)){F(i,function(e){if(e._tag&&!e._tag.isMounted)e._tag.isMounted=!!e._tag.trigger("mount")})}}}else{c=e.stub=c||document.createTextNode("");if(i.parentNode)p();else(t.parent||t).one("updated",p);i.inStub=true}}else if(/^(show|hide)$/.test(u)){if(u=="hide")a=!a;i.style.display=a?"":"none"}else if(u=="value"){i.value=a}else if(J(u,r)&&u!=o){if(a)i.setAttribute(u.slice(r.length),a)}else{if(e.bool){i[u]=a;if(!a)return}if(typeof a!==f)i.setAttribute(u,a)}})}function C(e,t){for(var n=0,i=(e||[]).length,r;n<i;n++){r=e[n];if(r!=null&&t(r,n)===false)n--}return e}function M(e){return typeof e===s||false}function A(e,t){e.removeAttribute(t)}function O(e){return e.tagName&&U[e.getAttribute(o)||e.tagName.toLowerCase()]}function E(e,t,n){var i=new _(e,{root:t,parent:n},t.innerHTML),r=S(t),o=H(n),u;i.parent=o;u=o.tags[r];if(u){if(!d(u))o.tags[r]=[u];if(!~o.tags[r].indexOf(i))o.tags[r].push(i)}else{o.tags[r]=i}t.innerHTML="";return i}function H(e){var t=e;while(!O(t.root)){if(!t.parent)break;t=t.parent}return t}function S(e){var t=O(e),n=e.getAttribute("name"),i=n&&n.indexOf(g(0))<0?n:t?t.name:e.tagName.toLowerCase();return i}function k(e){var t,n=arguments;for(var i=1;i<n.length;++i){if(t=n[i]){for(var r in t){e[r]=t[r]}}}return e}function j(e){if(!(e instanceof _)&&!(e&&typeof e.trigger==s))return e;var t={};for(var n in e){if(!~l.indexOf(n))t[n]=e[n]}return t}function F(e,t){if(e){if(t(e)===false)return;else{e=e.firstChild;while(e){F(e,t);e=e.nextSibling}}}}function $(e,t){var n,i=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;while(n=i.exec(e)){t(n[1].toLowerCase(),n[2]||n[3]||n[4])}}function B(e){while(e){if(e.inStub)return true;e=e.parentNode}return false}function R(e){return document.createElement(e)}function D(e,t){return e.replace(/<(yield)\/?>(<\/\1>)?/gi,t||"")}function I(e,t){return(t||document).querySelectorAll(e)}function V(e,t){return(t||document).querySelector(e)}function q(e){function t(){}t.prototype=e;return new t}function z(e,t,n){if(e._visited)return;var i,r=e.getAttribute("id")||e.getAttribute("name");if(r){if(n.indexOf(r)<0){i=t[r];if(!i)t[r]=e;else if(d(i))i.push(e);else t[r]=[i,e]}e._visited=true}}function J(e,t){return e.slice(0,t.length)===t}var P=[],U={},W;function X(e){if(n.render)return;if(!W){W=R("style");W.setAttribute("type","text/css")}var t=document.head||document.getElementsByTagName("head")[0];if(W.styleSheet)W.styleSheet.cssText+=e;else W.innerHTML+=e;if(!W._rendered)if(W.styleSheet){document.body.appendChild(W)}else{var i=V("style[type=riot]");if(i){i.parentNode.insertBefore(W,i);i.parentNode.removeChild(i)}else t.appendChild(W)}W._rendered=true}function Y(e,t,n){var i=U[t],r=e._innerHTML=e._innerHTML||e.innerHTML;e.innerHTML="";if(i&&e)i=new _(i,{root:e,opts:n},r);if(i&&i.mount){i.mount();P.push(i);return i.on("unmount",function(){P.splice(P.indexOf(i),1)})}}n.tag=function(e,t,n,i,r){if(M(i)){r=i;if(/^[\w\-]+\s?=/.test(n)){i=n;n=""}else i=""}if(n){if(M(n))r=n;else X(n)}U[e]={name:e,tmpl:t,attrs:i,fn:r};return e};n.mount=function(e,t,n){var i,r,a=[];function s(e){var t="";C(e,function(e){t+=", *["+o+'="'+e.trim()+'"]'});return t}function c(){var e=Object.keys(U);return e+s(e)}function l(e){var i;if(e.tagName){if(t&&(!(i=e.getAttribute(o))||i!=t))e.setAttribute(o,t);var r=Y(e,t||e.getAttribute(o)||e.tagName.toLowerCase(),n);if(r)a.push(r)}else if(e.length){C(e,l)}}if(typeof t===f){n=t;t=0}if(typeof e===u){if(e==="*")e=r=c();else e+=s(e.split(","));i=I(e)}else i=e;if(t==="*"){t=r||c();if(i.tagName)i=I(t,i);else{var p=[];C(i,function(e){p.push(I(t,e))});i=p}t=0}if(i.tagName)l(i);else C(i,l);return a};n.update=function(){return C(P,function(e){e.update()})};n.mountTo=n.mount;n.util={brackets:g,tmpl:m};if(typeof exports===f)module.exports=n;else if(typeof define==="function"&&define.amd)define(function(){return e.riot=n});else e.riot=n})(typeof window!="undefined"?window:void 0);

riot.tag('balance-table-child', '<div class="th"> <view-edit-box surface="{ this.record.date }" > <input name="date" type="date" class="edit-input {edit-mode: this.editMode}" value="{ this.record.date }" onblur="{ editModeEnd }"> </view-edit-box> </div> <div class="td record-section"> <view-edit-box surface="{ this.record.section.surface }" > <select name="section" class="edit-input {edit-mode: this.editMode}" onblur="{ editModeEnd }"> <option each="{ parent.sections.models }" value="{ this.id }" __selected="{ this.id === this.record.section.id }"> { this.title } </option> </select> </view-edit-box> </div> <div class="td record-subsection"> <view-edit-box surface="{ this.record.subsection.surface }" > <select name="subsection" class="edit-input {edit-mode: this.editMode}" onblur="{ editModeEnd }"> <option each="{ parent.subsections.models }" value="{ this.id }" __selected="{ this.id === this.record.subsection.id }"> { this.title } </option> </select> </view-edit-box> </div> <div class="td record-amount"> <view-edit-box surface="{ this.record.amount.surface }" > <input name="amount" riot-type={"number"} class="edit-input {edit-mode: this.editMode}" value="{ this.record.amount.value }" onblur="{ editModeEnd }"> </view-edit-box> </div>', function(opts) {

      
        this.keypress = function(e) {
            if( e.keyCode === 13 ) {
              e.target.blur();
              this.trigger('patch', e.target.parentElement);
            }
            else return true;
        }.bind(this);
      
        this.submit = function(e) {
            this.parent.changedId = this.record.id;
            this.trigger('patch', e.target)
        }.bind(this);
        
        this.puts = function(obj) {
          console.log(obj);
        }.bind(this);

      
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
riot.tag('balance-table', '<div class="table balance-table"> <div class="thead"> <div class="tr"> <div class="th" each="{ title, i in titles }">{ title }</div> </div> </div> <div class="tbody" each="{ record_groups }"> <balance-table-child each="{ record, i in records }" class="tr { changed: record.id === parent.changedId }"></balance-table-child> </div> <div class="tfoot"> <div class="tr"> <div class="th">total income </div> <div class="td">{ total.income }</div> </div> <div class="tr"> <div class="th">total expense </div> <div class="td">{ total.expense }</div> </div> <div class="tr"> <div class="th">total</div> <div class="td">{ total.all }</div> </div> </div> </div>', function(opts) {
        
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
riot.tag('record-edit', '<form> <div class="radio-tabs"> <label for="{ \'isIncome\' + opt.suffix }">Income</label> <input id="{ \'isIncome\' + opt.suffix }" name="is_income" type="radio" value="1" __checked="{ record.is_income }"> <label for="{ \'isExpense\' + opt.suffix }">Expense</label> <input id="{ \'isExpense\' + opt.suffix }" name="is_income" type="radio" value="0" __checked="{ !record.is_income }"> </div><div> <input name="date" type="date" class="edit-input" value="{ record.date }"> </div><div> <select name="section" class="edit-input"> <option if="{ this.id }" each="{ sections.models }" value="{ this.id }" __selected="{ this.id === parent.record.section }"> { this.title } </option> </select> </div><div> <select name="subsection" class="edit-input"> <option if="{ this.id }" each="{ subsections.models }" value="{ this.id }" __selected="{ this.id === parent.record.subsection }"> { this.title } </option> </select> </div><div> <input name="amount" riot-type={"number"} class="edit-input" value="{ record.amount }"> </div><div> <input name="detail" type="text" class="edit-input" value="{ record.detail }"> </div> </form>', function(opts) {
        
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
riot.tag('tabs', '<h2>Tabs</h2> <ul> <li each="{ tab, i in tabs }" class="tabItem { is-active: parent.isActiveTab(tab.ref) }" onclick="{ parent.toggleTab }">{tab.title}</li> </ul> <div class="tabContent"> <div each="{ tab, i in tabs }" class="tabContent__item { hidden: !parent.isActiveTab(tab.ref) }">{tab.content}</div> </div>', function(opts) {
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
        }.bind(this);

        this.toggleTab = function(e) {
            this.activeTab = e.item.tab.ref
            riot.event.trigger('open', 'opened');
            return true
        }.bind(this);
    
});
riot.tag('todo', '<h3>{ title }</h3> <ul> <li each="{ items }" class="{ hidden: hidden }"> <label class="{ completed: done }"> <input type="checkbox" __checked="{ done }" onclick="{ parent.toggle }"> { title } </label> </li> </ul> <form onsubmit="{ add }"> <input type="checkbox" __checked="{ checked }" onclick="{ check }"><input name="input" onkeyup="{ edit }"> <button __disabled="{ !text }">Add #{ items.length + 1 }</button> </form>', function(opts) {
        
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
        }.bind(this);
        
        this.addAjax = function(tasks) {
            tasks.forEach(function(task){
                self.items.push({
                    title: task.title,
                    done: task.done
                });
            });
            self.update();
        }.bind(this);

        this.add = function(e) {
            if (self.text) {
                self.items.push({
                    title: self.text,
                    done: self.checked
                })
                self.text = self.input.value = ''
            }
        }.bind(this);
        
        this.check = function(e) {
            self.checked = !self.checked
            return true
        }.bind(this);

        this.toggle = function(e) {
            var item = e.item
            item.done = !item.done
            return true
        }.bind(this);











    
});
riot.tag('user-edit', '<div class="table user-edit"> <div class="thead"> <div class="tr"> <div class="th" each="{ title, i in titles }">{ title }</div> </div> </div> <div class="tbody"> <div class="tr" each="{ this.users.models }"> <div class="td"> { this.id } </div> <div class="td"> { this.name } </div> <div class="td"> </div> <div class="td"> { this.using_books } </div> <div class="td"> </div> <div class="td"> </div> </div> </div> </div>', function(opts) {
        
        this.users = riot.collections.users;
        console.log(this.users.models);
      
        this.titles = ['id', 'name', 'password', 'using books', 'using credit', 'using cards'];

              
        var self = this;
      
        self.users.on('updated', function(){
            self.update();
        });

    
});

riot.tag('view-edit-box', '<p class="{ hidden: editMode }" onclick="{ editModeStart }">{ opts.surface }</p> <form if="{ editMode }" onsubmit="{ parent.submit }" onkeypress="{ parent.keypress }"> <yield></yield> </form>', function(opts) {
      
        this.editMode = false;
      
        this.editModeStart = function(editModeName) {
            this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }.bind(this);
      
        this.editModeEnd = function(e) {
            this.editMode = false;
        }.bind(this);
  
    
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
