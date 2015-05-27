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
(function(e){var t={version:"v2.0.15",settings:{}},n=h();t.observable=function(e){e=e||{};var t={},n=0;e.on=function(i,r){if(typeof r=="function"){r._id=typeof r._id=="undefined"?n++:r._id;i.replace(/\S+/g,function(e,n){(t[e]=t[e]||[]).push(r);r.typed=n>0})}return e};e.off=function(n,i){if(n=="*")t={};else{n.replace(/\S+/g,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o._id==i._id){n.splice(r,1);r--}}}else{t[e]=[]}})}return e};e.one=function(t,n){function i(){e.off(t,i);n.apply(e,arguments)}return e.on(t,i)};e.trigger=function(n){var i=[].slice.call(arguments,1),r=t[n]||[];for(var o=0,u;u=r[o];++o){if(!u.busy){u.busy=1;u.apply(e,u.typed?[n].concat(i):i);if(r[o]!==u){o--}u.busy=0}}if(t.all&&n!="all"){e.trigger.apply(e,["all",n].concat(i))}return e};return e};(function(e,t,n){if(!n)return;var i=n.location,r=e.observable(),o=n,u=false,f;function a(){return i.href.split("#")[1]||""}function c(e){return e.split("/")}function l(e){if(e.type)e=a();if(e!=f){r.trigger.apply(null,["H"].concat(c(e)));f=e}}var s=e.route=function(e){if(e[0]){i.hash=e;l(e)}else{r.on("H",e)}};s.exec=function(e){e.apply(null,c(a()))};s.parser=function(e){c=e};s.stop=function(){if(!u)return;o.removeEventListener?o.removeEventListener(t,l,false):o.detachEvent("on"+t,l);r.off("*");u=false};s.start=function(){if(u)return;o.addEventListener?o.addEventListener(t,l,false):o.attachEvent("on"+t,l);u=true};s.start()})(t,"hashchange",e);var i=function(e,n,i){return function(r){n=t.settings.brackets||e;if(i!=n)i=n.split(" ");return r&&r.test?n==e?r:RegExp(r.source.replace(/\{/g,i[0].replace(/(?=.)/g,"\\")).replace(/\}/g,i[1].replace(/(?=.)/g,"\\")),r.global?"g":""):i[r]}}("{ }");var r=function(){var t={},n=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(e,n){return e&&(t[e]=t[e]||r(e))(n)};function r(e,t){e=(e||i(0)+i(1)).replace(i(/\\{/g),"￰").replace(i(/\\}/g),"￱");t=f(e,a(e,i(/{/),i(/}/)));return new Function("d","return "+(!t[0]&&!t[2]&&!t[3]?o(t[1]):"["+t.map(function(e,t){return t%2?o(e,true):'"'+e.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")').replace(/\uFFF0/g,i(0)).replace(/\uFFF1/g,i(1))+";")}function o(e,t){e=e.replace(/\n/g," ").replace(i(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),"");return/^\s*[\w- "']+ *:/.test(e)?"["+a(e,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(e){return e.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(e,t,n){return n.replace(/[^&|=!><]+/g,u)+'?"'+t+'":"",'})}).join("")+'].join(" ").trim()':u(e,t)}function u(t,i){t=t.trim();return!t?"":"(function(v){try{v="+(t.replace(n,function(t,n,i){return i?"(d."+i+"===undefined?"+(typeof e=="undefined"?"global.":"window.")+i+":d."+i+")":t})||"x")+"}finally{return "+(i===true?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function f(e,t){var n=[];t.map(function(t,i){i=e.indexOf(t);n.push(e.slice(0,i),t);e=e.slice(i+t.length)});return n.concat(e)}function a(e,t,n){var i,r=0,o=[],u=new RegExp("("+t.source+")|("+n.source+")","g");e.replace(u,function(t,n,u,f){if(!r&&n)i=f;r+=n?1:-1;if(!r&&u!=null)o.push(e.slice(i,f+u.length))});return o}}();function o(e){var t={val:e},n=e.split(/\s+in\s+/);if(n[1]){t.val=i(0)+n[1];n=n[0].slice(i(0).length).trim().split(/,\s*/);t.key=n[0];t.pos=n[1]}return t}function u(e,t,n){var i={};i[e.key]=t;if(e.pos)i[e.pos]=n;return i}function f(e,t,n){v(e,"each");var i=e.outerHTML,f=e.previousSibling,a=e.parentNode,c=[],s=[],p;n=o(n);function d(e,t,n){c.splice(e,0,t);s.splice(e,0,n)}t.one("update",function(){a.removeChild(e)}).one("premount",function(){if(a.stub)a=t.root}).on("update",function(){var e=r(n.val,t);if(!e)return;if(!Array.isArray(e)){var o=JSON.stringify(e);if(o==p)return;p=o;g(s,function(e){e.unmount()});c=[];s=[];e=Object.keys(e).map(function(t){return u(n,t,e[t])})}g(c,function(t){if(t instanceof Object){if(e.indexOf(t)>-1){return}}else{var n=T(e,t),i=T(c,t);if(n.length>=i.length){return}}var r=c.indexOf(t),o=s[r];if(o){o.unmount();c.splice(r,1);s.splice(r,1);return false}});var v=[].indexOf.call(a.childNodes,f)+1;g(e,function(r,o){var f=e.indexOf(r,o),g=c.indexOf(r,o);f<0&&(f=e.lastIndexOf(r,o));g<0&&(g=c.lastIndexOf(r,o));if(!(r instanceof Object)){var m=T(e,r),h=T(c,r);if(m.length>h.length){g=-1}}var b=a.childNodes;if(g<0){if(!p&&n.key)var y=u(n,r,f);var w=new l({tmpl:i},{before:b[v+f],parent:t,root:a,item:y||r});w.mount();d(f,r,w);return true}if(n.pos&&s[g][n.pos]!=f){s[g].one("update",function(e){e[n.pos]=f});s[g].update()}if(f!=g){a.insertBefore(b[v+g],b[v+(f>g?f+1:f)]);return d(f,c.splice(g,1)[0],s.splice(g,1)[0])}});c=e.slice()})}function a(e,t,n){w(e,function(e){if(e.nodeType==1){if(e.parentNode&&e.parentNode.isLoop)e.isLoop=1;if(e.getAttribute("each"))e.isLoop=1;var i=E(e);if(i&&!e.isLoop){var r=new l(i,{root:e,parent:t},e.innerHTML),o=i.name,u=t,f;while(!E(u.root)){if(!u.parent)break;u=u.parent}r.parent=u;f=u.tags[o];if(f){if(!Array.isArray(f))u.tags[o]=[f];u.tags[o].push(r)}else{u.tags[o]=r}e.innerHTML="";n.push(r)}g(e.attributes,function(n){if(/^(name|id)$/.test(n.name))t[n.value]=e})}})}function c(e,t,n){function r(e,t,r){if(t.indexOf(i(0))>=0){var o={dom:e,expr:t};n.push(m(o,r))}}w(e,function(e){var n=e.nodeType;if(n==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(n!=1)return;var i=e.getAttribute("each");if(i){f(e,t,i);return false}g(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){v(e,n);return false}});if(E(e))return false})}function l(e,n,i){var o=t.observable(this),u=C(n.opts)||{},f=y(e.tmpl),l=n.parent,s=[],p=[],v=n.root,h=n.item,b=e.fn,w=v.tagName.toLowerCase(),L={},O;if(b&&v._tag){v._tag.unmount(true)}v._tag=this;this._id=~~((new Date).getTime()*Math.random());m(this,{parent:l,root:v,opts:u,tags:{}},h);g(v.attributes,function(e){L[e.name]=e.value});if(f.innerHTML&&!/select/.test(w))f.innerHTML=x(f.innerHTML,i);function T(){g(Object.keys(L),function(e){u[e]=r(L[e],l||o)})}this.update=function(e,t){m(o,e,h);T();o.trigger("update",h);d(s,o,h);o.trigger("updated")};this.mount=function(){T();b&&b.call(o,u);N(true);c(f,o,s);if(!o.parent)o.update();o.trigger("premount");if(b){while(f.firstChild)v.appendChild(f.firstChild)}else{O=f.firstChild;v.insertBefore(O,n.before||null)}if(v.stub)o.root=v=l.root;o.trigger("mount")};this.unmount=function(e){var t=b?v:O,n=t.parentNode;if(n){if(l){if(Array.isArray(l.tags[w])){g(l.tags[w],function(e,t){if(e._id==o._id)l.tags[w].splice(t,1)})}else delete l.tags[w]}else{while(t.firstChild)t.removeChild(t.firstChild)}if(!e)n.removeChild(t)}o.trigger("unmount");N();o.off("*");v._tag=null};function N(e){g(p,function(t){t[e?"mount":"unmount"]()});if(l){var t=e?"on":"off";l[t]("update",o.update)[t]("unmount",o.unmount)}}a(f,this,p)}function s(t,n,i,r,o){i[t]=function(t){t=t||e.event;t.which=t.which||t.charCode||t.keyCode;t.target=t.target||t.srcElement;t.currentTarget=i;t.item=o;if(n.call(r,t)!==true&&!/radio|check/.test(i.type)){t.preventDefault&&t.preventDefault();t.returnValue=false}var u=o?r.parent:r;u.update()}}function p(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function d(e,t,n){g(e,function(e,i){var o=e.dom,u=e.attr,f=r(e.expr,t),a=e.dom.parentNode;if(f==null)f="";if(a&&a.tagName=="TEXTAREA")f=f.replace(/riot-/g,"");if(e.value===f)return;e.value=f;if(!u)return o.nodeValue=f;v(o,u);if(typeof f=="function"){s(u,f,o,t,n)}else if(u=="if"){var c=e.stub;if(f){c&&p(c.parentNode,c,o)}else{c=e.stub=c||document.createTextNode("");p(o.parentNode,o,c)}}else if(/^(show|hide)$/.test(u)){if(u=="hide")f=!f;o.style.display=f?"":"none"}else if(u=="value"){o.value=f}else if(u.slice(0,5)=="riot-"){u=u.slice(5);f?o.setAttribute(u,f):v(o,u)}else{if(e.bool){o[u]=f;if(!f)return;f=u}if(typeof f!="object")o.setAttribute(u,f)}})}function g(e,t){for(var n=0,i=(e||[]).length,r;n<i;n++){r=e[n];if(r!=null&&t(r,n)===false)n--}return e}function v(e,t){e.removeAttribute(t)}function m(e,t,n){t&&g(Object.keys(t),function(n){e[n]=t[n]});return n?m(e,n):e}function h(){if(e){var t=navigator.userAgent;var n=t.indexOf("MSIE ");if(n>0){return parseInt(t.substring(n+5,t.indexOf(".",n)),10)}else{return 0}}}function b(e,t){var n=document.createElement("option"),i=/value=[\"'](.+?)[\"']/,r=/selected=[\"'](.+?)[\"']/,o=t.match(i),u=t.match(r);n.innerHTML=t;if(o){n.value=o[1]}if(u){n.setAttribute("riot-selected",u[1])}e.appendChild(n)}function y(e){var t=e.trim().slice(1,3).toLowerCase(),i=/td|th/.test(t)?"tr":t=="tr"?"tbody":"div",r=document.createElement(i);r.stub=true;if(t==="op"&&n&&n<10){b(r,e)}else{r.innerHTML=e}return r}function w(e,t){if(e){if(t(e)===false)w(e.nextSibling,t);else{e=e.firstChild;while(e){w(e,t);e=e.nextSibling}}}}function x(e,t){return e.replace(/<(yield)\/?>(<\/\1>)?/gim,t||"")}function L(e,t){t=t||document;return t.querySelectorAll(e)}function O(e,t){return e.filter(function(e){return t.indexOf(e)<0})}function T(e,t){return e.filter(function(e){return e===t})}function C(e){function t(){}t.prototype=e;return new t}var N=[],A={};function E(e){return A[e.getAttribute("riot-tag")||e.tagName.toLowerCase()]}function _(e){var t=document.createElement("style");t.innerHTML=e;document.head.appendChild(t)}function j(e,t,n){var i=A[t],r=e.innerHTML;e.innerHTML="";if(i&&e)i=new l(i,{root:e,opts:n},r);if(i&&i.mount){i.mount();N.push(i);return i.on("unmount",function(){N.splice(N.indexOf(i),1)})}}t.tag=function(e,t,n,i){if(typeof n=="function")i=n;else if(n)_(n);A[e]={name:e,tmpl:t,fn:i};return e};t.mount=function(e,t,n){var i,r=function(e){e=Object.keys(A).join(", ");e.split(",").map(function(t){e+=', *[riot-tag="'+t.trim()+'"]'});return e},o=[];if(typeof t=="object"){n=t;t=0}if(typeof e=="string"){if(e=="*"){e=r(e)}i=L(e)}else i=e;if(t=="*"){t=r(e);if(i.tagName){i=L(t,i)}else{var u=[];g(i,function(e){u=L(t,e)});i=u}t=0}function f(e){var i=t||e.getAttribute("riot-tag")||e.tagName.toLowerCase(),r=j(e,i,n);if(r)o.push(r)}if(i.tagName)f(e);else g(i,f);return o};t.update=function(){return g(N,function(e){e.update()})};t.mountTo=t.mount;t.util={brackets:i,tmpl:r};if(typeof exports==="object")module.exports=t;else if(typeof define==="function"&&define.amd)define(function(){return t});else e.riot=t})(typeof window!="undefined"?window:undefined);

riot.tag('balance-table-child', '<div class="th"> <p class="{ hidden: this.editMode }" onclick="{ editModeStart }">{ opts.date }</p> <form onsubmit="{ patch }" if="{ this.editMode }"> <input type="date" class="edit-input {edit-mode: this.editMode}" name="date" value="{ opts.date }" onblur="{ editModeEnd }"> </form> </div> <div each="{ name, value in this.record }" class="td { \'record-\' + name }" if="{ name !== \'id\'}"> <p class="{hidden: this.editMode}" onclick="{ parent.editModeStart }">{ value.surface }</p> <form onsubmit="{ parent.patch }" if="{ this.editMode }"> <input type="number" class="edit-input {edit-mode: this.editMode}" name="{ name }" if="{ name === \'amount\'}" value="{ value.value }" onblur="{ parent.editModeEnd }"> <input type="number" class="edit-input {edit-mode: this.editMode}" name="{ name }" if="{ name === \'section\'}" value="{ value.id }" onblur="{ parent.editModeEnd }"> <input type="number" class="edit-input {edit-mode: this.editMode}" name="{ name }" if="{ name === \'subsection\'}" value="{ value.id }" onblur="{ parent.editModeEnd }"> </form> </div>', function(opts) {

        this.editMode = false;

        this.editModeStart = function(e) {
            if(e.item) e.item.editMode = true;
            else this.editMode = true;
            this.one('updated', function(){
                this.root.getElementsByClassName('edit-mode')[0].focus();
            });
        }.bind(this);

        this.editModeEnd = function(e) {
            if(e.item) e.item.editMode = false;
            else this.editMode = false;
        }.bind(this);

        this.patch = function(e) {
            var param = ajax.serialize(e.target);
            this.parent.records.trigger('patch', this.record.id, param)
        }.bind(this);

        var self = this;

        self.on('updated', function(){

        });


});
riot.tag('balance-table', '<div class="table balance-table"> <div class="thead"> <div class="tr"> <div class="th" each="{ title, i in titles }">{ title }</div> </div> </div> <div class="tbody" each="{ record_groups }"> <balance-table-child class="tr" date="{ date }" each="{ record, i in records }"></balance-table-child> </div> <div class="tfoot"> <div class="tr"> <div class="th">total income </div> <div class="td">{ total.income }</div> </div> <div class="tr"> <div class="th">total expense </div> <div class="td">{ total.expense }</div> </div> <div class="tr"> <div class="th">total</div> <div class="td">{ total.all }</div> </div> </div> </div>', function(opts) {

        this.records = riot.collections.records;
        this.sections = riot.collections.sections;
        this.subsections = riot.collections.subsections;

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
                console.log(self.records.models)
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

    //riot拡張
    riot.event  = riot.observable();

    riot.getData = function(dom, name) {
        if(!document.createElement('div').dataset) {
            return dom.getAttribute('data-' + name);
        }
        return dom.dataset[name];
    }

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

    riot.collections  = {
      records : riot.createCollection({remote: '/records'}),
      sections : riot.createCollection({remote: '/sections'}),
      subsections : riot.createCollection({remote: '/subsections'})
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
