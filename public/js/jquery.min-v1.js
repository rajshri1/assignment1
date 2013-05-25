(function(a,b){
    function f(a,c,f){
        if(f===b&&a.nodeType===1){
            f=a.getAttribute("data-"+c);
            if(typeof f==="string"){
                try{
                    f=f==="true"?true:f==="false"?false:f==="null"?null:!d.isNaN(f)?parseFloat(f):e.test(f)?d.parseJSON(f):f
                    }catch(g){}
                d.data(a,c,f)
                }else{
                f=b
                }
            }
        return f
    }
    function g(a){
    for(var b in a){
        if(b!=="toJSON"){
            return false
            }
        }
    return true
}
function v(){
    return false
    }
    function w(){
    return true
    }
    function C(a,c,e){
    var f=d.extend({},e[0]);
    f.type=a;
    f.originalEvent={};
    
    f.liveFired=b;
    d.event.handle.call(c,f);
    if(f.isDefaultPrevented()){
        e[0].preventDefault()
        }
    }
function E(a){
    var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");
    if(a.liveFired===this||!s||!s.live||a.target.disabled||a.button&&a.type==="click"){
        return
    }
    if(a.namespace){
        n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")
        }
        a.liveFired=this;
    var t=s.live.slice(0);
    for(i=0;i<t.length;i++){
        g=t[i];
        if(g.origType.replace(p,"")===a.type){
            r.push(g.selector)
            }else{
            t.splice(i--,1)
            }
        }
    f=d(a.target).closest(r,a.currentTarget);
for(j=0,k=f.length;j<k;j++){
    m=f[j];
    for(i=0;i<t.length;i++){
        g=t[i];
        if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){
            h=m.elem;
            e=null;
            if(g.preType==="mouseenter"||g.preType==="mouseleave"){
                a.type=g.preType;
                e=d(a.relatedTarget).closest(g.selector)[0]
                }
                if(!e||e!==h){
                q.push({
                    elem:h,
                    handleObj:g,
                    level:m.level
                    })
                }
            }
    }
}
for(j=0,k=q.length;j<k;j++){
    f=q[j];
    if(c&&f.level>c){
        break
    }
    a.currentTarget=f.elem;
    a.data=f.handleObj.data;
    a.handleObj=f.handleObj;
    o=f.handleObj.origHandler.apply(f.elem,arguments);
    if(o===false||a.isPropagationStopped()){
        c=f.level;
        if(o===false){
            b=false
            }
            if(a.isImmediatePropagationStopped()){
            break
        }
    }
}
return b
}
function F(a,b){
    return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")
    }
    function N(a){
    return!a||!a.parentNode||a.parentNode.nodeType===11
    }
    function O(a,b,c){
    if(d.isFunction(b)){
        return d.grep(a,function(a,d){
            var e=!!b.call(a,d,a);
            return e===c
            })
        }else if(b.nodeType){
        return d.grep(a,function(a,d){
            return a===b===c
            })
        }else if(typeof b==="string"){
        var e=d.grep(a,function(a){
            return a.nodeType===1
            });
        if(J.test(b)){
            return d.filter(b,e,!c)
            }else{
            b=d.filter(b,e)
            }
        }
    return d.grep(a,function(a,e){
    return d.inArray(a,b)>=0===c
    })
}
function Y(a,b){
    return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
    }
    function Z(a,b){
    if(b.nodeType!==1||!d.hasData(a)){
        return
    }
    var c=d.expando,e=d.data(a),f=d.data(b,e);
    if(e=e[c]){
        var g=e.events;
        f=f[c]=d.extend({},e);
        if(g){
            delete f.handle;
            f.events={};
            
            for(var h in g){
                for(var i=0,j=g[h].length;i<j;i++){
                    d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)
                    }
                }
            }
        }
}
function $(a,b){
    if(b.nodeType!==1){
        return
    }
    var c=b.nodeName.toLowerCase();
    b.clearAttributes();
    b.mergeAttributes(a);
    if(c==="object"){
        b.outerHTML=a.outerHTML
        }else if(c==="input"&&(a.type==="checkbox"||a.type==="radio")){
        if(a.checked){
            b.defaultChecked=b.checked=a.checked
            }
            if(b.value!==a.value){
            b.value=a.value
            }
        }else if(c==="option"){
    b.selected=a.defaultSelected
    }else if(c==="input"||c==="textarea"){
    b.defaultValue=a.defaultValue
    }
    b.removeAttribute(d.expando)
}
function _(a){
    if("getElementsByTagName"in a){
        return a.getElementsByTagName("*")
        }else if("querySelectorAll"in a){
        return a.querySelectorAll("*")
        }else{
        return[]
        }
    }
function ab(a,b){
    if(b.src){
        d.ajax({
            url:b.src,
            async:false,
            dataType:"script"
        })
        }else{
        d.globalEval(b.text||b.textContent||b.innerHTML||"")
        }
        if(b.parentNode){
        b.parentNode.removeChild(b)
        }
    }
function ob(a,b,c){
    var e=b==="width"?ib:jb,f=b==="width"?a.offsetWidth:a.offsetHeight;
    if(c==="border"){
        return f
        }
        d.each(e,function(){
        if(!c){
            f-=parseFloat(d.css(a,"padding"+this))||0
            }
            if(c==="margin"){
            f+=parseFloat(d.css(a,"margin"+this))||0
            }else{
            f-=parseFloat(d.css(a,"border"+this+"Width"))||0
            }
        });
return f
}
function Mb(a){
    return function(b,c){
        if(typeof b!=="string"){
            c=b;
            b="*"
            }
            if(d.isFunction(c)){
            var e=b.toLowerCase().split(Bb),f=0,g=e.length,h,i,j;
            for(;f<g;f++){
                h=e[f];
                j=/^\+/.test(h);
                if(j){
                    h=h.substr(1)||"*"
                    }
                    i=a[h]=a[h]||[];
                i[j?"unshift":"push"](c)
                }
            }
        }
}
function Nb(a,c,d,e,f,g){
    f=f||c.dataTypes[0];
    g=g||{};
    
    g[f]=true;
    var h=a[f],i=0,j=h?h.length:0,k=a===Hb,l;
    for(;i<j&&(k||!l);i++){
        l=h[i](c,d,e);
        if(typeof l==="string"){
            if(!k||g[l]){
                l=b
                }else{
                c.dataTypes.unshift(l);
                l=Nb(a,c,d,e,l,g)
                }
            }
    }
    if((k||!l)&&!g["*"]){
    l=Nb(a,c,d,e,"*",g)
    }
    return l
}
function Ob(a,b,c,e){
    if(d.isArray(b)&&b.length){
        d.each(b,function(b,f){
            if(c||qb.test(a)){
                e(a,f)
                }else{
                Ob(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)
                }
            })
    }else if(!c&&b!=null&&typeof b==="object"){
    if(d.isArray(b)||d.isEmptyObject(b)){
        e(a,"")
        }else{
        for(var f in b){
            Ob(a+"["+f+"]",b[f],c,e)
            }
        }
        }else{
    e(a,b)
    }
}
function Pb(a,c,d){
    var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;
    for(i in g){
        if(i in d){
            c[g[i]]=d[i]
            }
        }while(f[0]==="*"){
    f.shift();
    if(h===b){
        h=a.mimeType||c.getResponseHeader("content-type")
        }
    }
if(h){
    for(i in e){
        if(e[i]&&e[i].test(h)){
            f.unshift(i);
            break
        }
    }
    }
    if(f[0]in d){
    j=f[0]
    }else{
    for(i in d){
        if(!f[0]||a.converters[i+" "+f[0]]){
            j=i;
            break
        }
        if(!k){
            k=i
            }
        }
    j=j||k
}
if(j){
    if(j!==f[0]){
        f.unshift(j)
        }
        return d[j]
    }
}
function Qb(a,c){
    if(a.dataFilter){
        c=a.dataFilter(c,a.dataType)
        }
        var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;
    for(g=1;g<i;g++){
        if(g===1){
            for(h in a.converters){
                if(typeof h==="string"){
                    f[h.toLowerCase()]=a.converters[h]
                    }
                }
            }
            l=k;
    k=e[g];
    if(k==="*"){
        k=l
        }else if(l!=="*"&&l!==k){
        m=l+" "+k;
        n=f[m]||f["* "+k];
        if(!n){
            p=b;
            for(o in f){
                j=o.split(" ");
                if(j[0]===l||j[0]==="*"){
                    p=f[j[1]+" "+k];
                    if(p){
                        o=f[o];
                        if(o===true){
                            n=p
                            }else if(p===true){
                            n=o
                            }
                            break
                    }
                }
            }
            }
        if(!(n||p)){
    d.error("No conversion from "+m.replace(" "," to "))
    }
    if(n!==true){
    c=n?n(c):p(o(c))
    }
}
}
return c
}
function Wb(){
    d(a).unload(function(){
        for(var a in Ub){
            Ub[a](0,1)
            }
        })
}
function Xb(){
    try{
        return new a.XMLHttpRequest
        }catch(b){}
}
function Yb(){
    try{
        return new a.ActiveXObject("Microsoft.XMLHTTP")
        }catch(b){}
}
function cc(a,b){
    var c={};
    
    d.each(bc.concat.apply([],bc.slice(0,b)),function(){
        c[this]=a
        });
    return c
    }
    function dc(a){
    if(!Zb[a]){
        var b=d("<"+a+">").appendTo("body"),c=b.css("display");
        b.remove();
        if(c==="none"||c===""){
            c="block"
            }
            Zb[a]=c
        }
        return Zb[a]
    }
    function gc(a){
    return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false
    }
    var c=a.document;
var d=function(){
    function I(){
        if(d.isReady){
            return
        }
        try{
            c.documentElement.doScroll("left")
            }catch(a){
            setTimeout(I,1);
            return
        }
        d.ready()
        }
        var d=function(a,b){
        return new d.fn.init(a,b,g)
        },e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=false,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};
    
    d.fn=d.prototype={
        constructor:d,
        init:function(a,e,f){
            var g,i,j,k;
            if(!a){
                return this
                }
                if(a.nodeType){
                this.context=this[0]=a;
                this.length=1;
                return this
                }
                if(a==="body"&&!e&&c.body){
                this.context=c;
                this[0]=c.body;
                this.selector="body";
                this.length=1;
                return this
                }
                if(typeof a==="string"){
                g=h.exec(a);
                if(g&&(g[1]||!e)){
                    if(g[1]){
                        e=e instanceof d?e[0]:e;
                        k=e?e.ownerDocument||e:c;
                        j=m.exec(a);
                        if(j){
                            if(d.isPlainObject(e)){
                                a=[c.createElement(j[1])];
                                d.fn.attr.call(a,e,true)
                                }else{
                                a=[k.createElement(j[1])]
                                }
                            }else{
                        j=d.buildFragment([g[1]],[k]);
                        a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes
                        }
                        return d.merge(this,a)
                    }else{
                    i=c.getElementById(g[2]);
                    if(i&&i.parentNode){
                        if(i.id!==g[2]){
                            return f.find(a)
                            }
                            this.length=1;
                        this[0]=i
                        }
                        this.context=c;
                    this.selector=a;
                    return this
                    }
                }else if(!e||e.jquery){
            return(e||f).find(a)
            }else{
            return this.constructor(e).find(a)
            }
        }else if(d.isFunction(a)){
    return f.ready(a)
    }
    if(a.selector!==b){
    this.selector=a.selector;
    this.context=a.context
    }
    return d.makeArray(a,this)
},
selector:"",
jquery:"1.5.1",
length:0,
size:function(){
    return this.length
    },
toArray:function(){
    return E.call(this,0)
    },
get:function(a){
    return a==null?this.toArray():a<0?this[this.length+a]:this[a]
    },
pushStack:function(a,b,c){
    var e=this.constructor();
    if(d.isArray(a)){
        D.apply(e,a)
        }else{
        d.merge(e,a)
        }
        e.prevObject=this;
    e.context=this.context;
    if(b==="find"){
        e.selector=this.selector+(this.selector?" ":"")+c
        }else if(b){
        e.selector=this.selector+"."+b+"("+c+")"
        }
        return e
    },
each:function(a,b){
    return d.each(this,a,b)
    },
ready:function(a){
    d.bindReady();
    y.done(a);
    return this
    },
eq:function(a){
    return a===-1?this.slice(a):this.slice(a,+a+1)
    },
first:function(){
    return this.eq(0)
    },
last:function(){
    return this.eq(-1)
    },
slice:function(){
    return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))
    },
map:function(a){
    return this.pushStack(d.map(this,function(b,c){
        return a.call(b,c,b)
        }))
    },
end:function(){
    return this.prevObject||this.constructor(null)
    },
push:D,
sort:[].sort,
splice:[].splice
};

d.fn.init.prototype=d.fn;
d.extend=d.fn.extend=function(){
    var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=false;
    if(typeof i==="boolean"){
        l=i;
        i=arguments[1]||{};
        
        j=2
        }
        if(typeof i!=="object"&&!d.isFunction(i)){
        i={}
    }
    if(k===j){
    i=this;
    --j
    }
    for(;j<k;j++){
    if((a=arguments[j])!=null){
        for(c in a){
            e=i[c];
            f=a[c];
            if(i===f){
                continue
            }
            if(l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))){
                if(g){
                    g=false;
                    h=e&&d.isArray(e)?e:[]
                    }else{
                    h=e&&d.isPlainObject(e)?e:{}
                }
                i[c]=d.extend(l,h,f)
            }else if(f!==b){
            i[c]=f
            }
        }
        }
}
return i
};

d.extend({
    noConflict:function(b){
        a.$=f;
        if(b){
            a.jQuery=e
            }
            return d
        },
    isReady:false,
    readyWait:1,
    ready:function(a){
        if(a===true){
            d.readyWait--
        }
        if(!d.readyWait||a!==true&&!d.isReady){
            if(!c.body){
                return setTimeout(d.ready,1)
                }
                d.isReady=true;
            if(a!==true&&--d.readyWait>0){
                return
            }
            y.resolveWith(c,[d]);
            if(d.fn.trigger){
                d(c).trigger("ready").unbind("ready")
                }
            }
    },
bindReady:function(){
    if(x){
        return
    }
    x=true;
    if(c.readyState==="complete"){
        return setTimeout(d.ready,1)
        }
        if(c.addEventListener){
        c.addEventListener("DOMContentLoaded",A,false);
        a.addEventListener("load",d.ready,false)
        }else if(c.attachEvent){
        c.attachEvent("onreadystatechange",A);
        a.attachEvent("onload",d.ready);
        var b=false;
        try{
            b=a.frameElement==null
            }catch(e){}
        if(c.documentElement.doScroll&&b){
            I()
            }
        }
},
isFunction:function(a){
    return d.type(a)==="function"
    },
isArray:Array.isArray||function(a){
    return d.type(a)==="array"
    },
isWindow:function(a){
    return a&&typeof a==="object"&&"setInterval"in a
    },
isNaN:function(a){
    return a==null||!l.test(a)||isNaN(a)
    },
type:function(a){
    return a==null?String(a):H[B.call(a)]||"object"
    },
isPlainObject:function(a){
    if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a)){
        return false
        }
        if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf")){
        return false
        }
        var c;
    for(c in a){}
        return c===b||C.call(a,c)
    },
isEmptyObject:function(a){
    for(var b in a){
        return false
        }
        return true
    },
error:function(a){
    throw a
    },
parseJSON:function(b){
    if(typeof b!=="string"||!b){
        return null
        }
        b=d.trim(b);
    if(n.test(b.replace(o,"@").replace(p,"]").replace(q,""))){
        return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))()
        }else{
        d.error("Invalid JSON: "+b)
        }
    },
parseXML:function(b,c,e){
    if(a.DOMParser){
        e=new DOMParser;
        c=e.parseFromString(b,"text/xml")
        }else{
        c=new ActiveXObject("Microsoft.XMLDOM");
        c.async="false";
        c.loadXML(b)
        }
        e=c.documentElement;
    if(!e||!e.nodeName||e.nodeName==="parsererror"){
        d.error("Invalid XML: "+b)
        }
        return c
    },
noop:function(){},
globalEval:function(a){
    if(a&&i.test(a)){
        var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");
        if(d.support.scriptEval()){
            e.appendChild(c.createTextNode(a))
            }else{
            e.text=a
            }
            b.insertBefore(e,b.firstChild);
        b.removeChild(e)
        }
    },
nodeName:function(a,b){
    return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
    },
each:function(a,c,e){
    var f,g=0,h=a.length,i=h===b||d.isFunction(a);
    if(e){
        if(i){
            for(f in a){
                if(c.apply(a[f],e)===false){
                    break
                }
            }
            }else{
    for(;g<h;){
        if(c.apply(a[g++],e)===false){
            break
        }
    }
    }
}else{
    if(i){
        for(f in a){
            if(c.call(a[f],f,a[f])===false){
                break
            }
        }
        }else{
    for(var j=a[0];g<h&&c.call(j,g,j)!==false;j=a[++g]){}
}
}
return a
},
trim:F?function(a){
    return a==null?"":F.call(a)
    }:function(a){
    return a==null?"":a.toString().replace(j,"").replace(k,"")
    },
makeArray:function(a,b){
    var c=b||[];
    if(a!=null){
        var e=d.type(a);
        if(a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)){
            D.call(c,a)
            }else{
            d.merge(c,a)
            }
        }
    return c
},
inArray:function(a,b){
    if(b.indexOf){
        return b.indexOf(a)
        }
        for(var c=0,d=b.length;c<d;c++){
        if(b[c]===a){
            return c
            }
        }
    return-1
},
merge:function(a,c){
    var d=a.length,e=0;
    if(typeof c.length==="number"){
        for(var f=c.length;e<f;e++){
            a[d++]=c[e]
            }
        }else{
    while(c[e]!==b){
        a[d++]=c[e++]
        }
    }
a.length=d;
return a
},
grep:function(a,b,c){
    var d=[],e;
    c=!!c;
    for(var f=0,g=a.length;f<g;f++){
        e=!!b(a[f],f);
        if(c!==e){
            d.push(a[f])
            }
        }
    return d
},
map:function(a,b,c){
    var d=[],e;
    for(var f=0,g=a.length;f<g;f++){
        e=b(a[f],f,c);
        if(e!=null){
            d[d.length]=e
            }
        }
    return d.concat.apply([],d)
},
guid:1,
proxy:function(a,c,e){
    if(arguments.length===2){
        if(typeof c==="string"){
            e=a;
            a=e[c];
            c=b
            }else if(c&&!d.isFunction(c)){
            e=c;
            c=b
            }
        }
    if(!c&&a){
    c=function(){
        return a.apply(e||this,arguments)
        }
    }
if(a){
    c.guid=a.guid=a.guid||c.guid||d.guid++
}
return c
},
access:function(a,c,e,f,g,h){
    var i=a.length;
    if(typeof c==="object"){
        for(var j in c){
            d.access(a,j,c[j],f,g,e)
            }
            return a
        }
        if(e!==b){
        f=!h&&f&&d.isFunction(e);
        for(var k=0;k<i;k++){
            g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h)
            }
            return a
        }
        return i?g(a[0],c):b
    },
now:function(){
    return(new Date).getTime()
    },
_Deferred:function(){
    var a=[],b,c,e,f={
        done:function(){
            if(!e){
                var c=arguments,g,h,i,j,k;
                if(b){
                    k=b;
                    b=0
                    }
                    for(g=0,h=c.length;g<h;g++){
                    i=c[g];
                    j=d.type(i);
                    if(j==="array"){
                        f.done.apply(f,i)
                        }else if(j==="function"){
                        a.push(i)
                        }
                    }
                if(k){
                f.resolveWith(k[0],k[1])
                }
            }
        return this
    },
resolveWith:function(d,f){
    if(!e&&!b&&!c){
        c=1;
        try{
            while(a[0]){
                a.shift().apply(d,f)
                }
            }catch(g){
        throw g
        }finally{
        b=[d,f];
        c=0
        }
    }
return this
},
resolve:function(){
    f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);
    return this
    },
isResolved:function(){
    return!!(c||b)
    },
cancel:function(){
    e=1;
    a=[];
    return this
    }
};

return f
},
Deferred:function(a){
    var b=d._Deferred(),c=d._Deferred(),e;
    d.extend(b,{
        then:function(a,c){
            b.done(a).fail(c);
            return this
            },
        fail:c.done,
        rejectWith:c.resolveWith,
        reject:c.resolve,
        isRejected:c.isResolved,
        promise:function(a){
            if(a==null){
                if(e){
                    return e
                    }
                    e=a={}
            }
            var c=z.length;
        while(c--){
            a[z[c]]=b[z[c]]
            }
            return a
        }
    });
b.done(c.cancel).fail(b.cancel);
delete b.cancel;
if(a){
    a.call(b,b)
    }
    return b
},
when:function(a){
    var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();
    if(b>1){
        var f=E.call(arguments,0),g=b,h=function(a){
            return function(b){
                f[a]=arguments.length>1?E.call(arguments,0):b;
                if(!--g){
                    c.resolveWith(e,f)
                    }
                }
        };
while(b--){
    a=f[b];
    if(a&&d.isFunction(a.promise)){
        a.promise().then(h(b),c.reject)
        }else{
        --g
        }
    }
if(!g){
    c.resolveWith(e,f)
    }
}else if(c!==a){
    c.resolve(a)
    }
    return e
},
uaMatch:function(a){
    a=a.toLowerCase();
    var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];
    return{
        browser:b[1]||"",
        version:b[2]||"0"
        }
    },
sub:function(){
    function a(b,c){
        return new a.fn.init(b,c)
        }
        d.extend(true,a,this);
    a.superclass=this;
    a.fn=a.prototype=this();
    a.fn.constructor=a;
    a.subclass=this.subclass;
    a.fn.init=function(e,f){
        if(f&&f instanceof d&&!(f instanceof a)){
            f=a(f)
            }
            return d.fn.init.call(this,e,f,b)
        };
        
    a.fn.init.prototype=a.fn;
    var b=a(c);
    return a
    },
browser:{}
});
y=d._Deferred();
d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){
    H["[object "+b+"]"]=b.toLowerCase()
    });
w=d.uaMatch(v);
if(w.browser){
    d.browser[w.browser]=true;
    d.browser.version=w.version
    }
    if(d.browser.webkit){
    d.browser.safari=true
    }
    if(G){
    d.inArray=function(a,b){
        return G.call(b,a)
        }
    }
if(i.test(" ")){
    j=/^[\s\xA0]+/;
    k=/[\s\xA0]+$/
    }
    g=d(c);
if(c.addEventListener){
    A=function(){
        c.removeEventListener("DOMContentLoaded",A,false);
        d.ready()
        }
    }else if(c.attachEvent){
    A=function(){
        if(c.readyState==="complete"){
            c.detachEvent("onreadystatechange",A);
            d.ready()
            }
        }
}
return d
}();
(function(){
    d.support={};
    
    var b=c.createElement("div");
    b.style.display="none";
    b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];
    if(!e||!e.length||!f){
        return
    }
    d.support={
        leadingWhitespace:b.firstChild.nodeType===3,
        tbody:!b.getElementsByTagName("tbody").length,
        htmlSerialize:!!b.getElementsByTagName("link").length,
        style:/red/.test(f.getAttribute("style")),
        hrefNormalized:f.getAttribute("href")==="/a",
        opacity:/^0.55$/.test(f.style.opacity),
        cssFloat:!!f.style.cssFloat,
        checkOn:i.value==="on",
        optSelected:h.selected,
        deleteExpando:true,
        optDisabled:false,
        checkClone:false,
        noCloneEvent:true,
        noCloneChecked:true,
        boxModel:null,
        inlineBlockNeedsLayout:false,
        shrinkWrapBlocks:false,
        reliableHiddenOffsets:true
    };
    
    i.checked=true;
    d.support.noCloneChecked=i.cloneNode(true).checked;
    g.disabled=true;
    d.support.optDisabled=!h.disabled;
    var j=null;
    d.support.scriptEval=function(){
        if(j===null){
            var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();
            try{
                e.appendChild(c.createTextNode("window."+f+"=1;"))
                }catch(g){}
            b.insertBefore(e,b.firstChild);
            if(a[f]){
                j=true;
                delete a[f]
            }else{
                j=false
                }
                b.removeChild(e);
            b=e=f=null
            }
            return j
        };
        
    try{
        delete b.test
        }catch(k){
        d.support.deleteExpando=false
        }
        if(!b.addEventListener&&b.attachEvent&&b.fireEvent){
        b.attachEvent("onclick",function n(){
            d.support.noCloneEvent=false;
            b.detachEvent("onclick",n)
            });
        b.cloneNode(true).fireEvent("onclick")
        }
        b=c.createElement("div");
    b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
    var l=c.createDocumentFragment();
    l.appendChild(b.firstChild);
    d.support.checkClone=l.cloneNode(true).cloneNode(true).lastChild.checked;
    d(function(){
        var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];
        if(!b){
            return
        }
        a.style.width=a.style.paddingLeft="1px";
        b.appendChild(a);
        d.boxModel=d.support.boxModel=a.offsetWidth===2;
        if("zoom"in a.style){
            a.style.display="inline";
            a.style.zoom=1;
            d.support.inlineBlockNeedsLayout=a.offsetWidth===2;
            a.style.display="";
            a.innerHTML="<div style='width:4px;'></div>";
            d.support.shrinkWrapBlocks=a.offsetWidth!==2
            }
            a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        var e=a.getElementsByTagName("td");
        d.support.reliableHiddenOffsets=e[0].offsetHeight===0;
        e[0].style.display="";
        e[1].style.display="none";
        d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0;
        a.innerHTML="";
        b.removeChild(a).style.display="none";
        a=e=null
        });
    var m=function(a){
        var b=c.createElement("div");
        a="on"+a;
        if(!b.attachEvent){
            return true
            }
            var d=a in b;
        if(!d){
            b.setAttribute(a,"return;");
            d=typeof b[a]==="function"
            }
            b=null;
        return d
        };
        
    d.support.submitBubbles=m("submit");
    d.support.changeBubbles=m("change");
    b=e=f=null
    })();
var e=/^(?:\{.*\}|\[.*\])$/;
d.extend({
    cache:{},
    uuid:0,
    expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),
    noData:{
        embed:true,
        object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet:true
    },
    hasData:function(a){
        a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];
        return!!a&&!g(a)
        },
    data:function(a,c,e,f){
        if(!d.acceptData(a)){
            return
        }
        var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;
        if((!l||f&&l&&!k[l][g])&&h&&e===b){
            return
        }
        if(!l){
            if(j){
                a[d.expando]=l=++d.uuid
                }else{
                l=d.expando
                }
            }
        if(!k[l]){
        k[l]={};
        
        if(!j){
            k[l].toJSON=d.noop
            }
        }
    if(typeof c==="object"||typeof c==="function"){
    if(f){
        k[l][g]=d.extend(k[l][g],c)
        }else{
        k[l]=d.extend(k[l],c)
        }
    }
i=k[l];
if(f){
    if(!i[g]){
        i[g]={}
    }
    i=i[g]
}
if(e!==b){
    i[c]=e
    }
    if(c==="events"&&!i[c]){
    return i[g]&&i[g].events
    }
    return h?i[c]:i
},
removeData:function(b,c,e){
    if(!d.acceptData(b)){
        return
    }
    var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;
    if(!i[j]){
        return
    }
    if(c){
        var k=e?i[j][f]:i[j];
        if(k){
            delete k[c];
            if(!g(k)){
                return
            }
        }
    }
if(e){
    delete i[j][f];
    if(!g(i[j])){
        return
    }
}
var l=i[j][f];
if(d.support.deleteExpando||i!=a){
    delete i[j]
}else{
    i[j]=null
    }
    if(l){
    i[j]={};
    
    if(!h){
        i[j].toJSON=d.noop
        }
        i[j][f]=l
    }else if(h){
    if(d.support.deleteExpando){
        delete b[d.expando]
    }else if(b.removeAttribute){
        b.removeAttribute(d.expando)
        }else{
        b[d.expando]=null
        }
    }
},
_data:function(a,b,c){
    return d.data(a,b,c,true)
    },
acceptData:function(a){
    if(a.nodeName){
        var b=d.noData[a.nodeName.toLowerCase()];
        if(b){
            return!(b===true||a.getAttribute("classid")!==b)
            }
        }
    return true
}
});
d.fn.extend({
    data:function(a,c){
        var e=null;
        if(typeof a==="undefined"){
            if(this.length){
                e=d.data(this[0]);
                if(this[0].nodeType===1){
                    var g=this[0].attributes,h;
                    for(var i=0,j=g.length;i<j;i++){
                        h=g[i].name;
                        if(h.indexOf("data-")===0){
                            h=h.substr(5);
                            f(this[0],h,e[h])
                            }
                        }
                    }
            }
    return e
}else if(typeof a==="object"){
    return this.each(function(){
        d.data(this,a)
        })
    }
    var k=a.split(".");
k[1]=k[1]?"."+k[1]:"";
if(c===b){
    e=this.triggerHandler("getData"+k[1]+"!",[k[0]]);
    if(e===b&&this.length){
        e=d.data(this[0],a);
        e=f(this[0],a,e)
        }
        return e===b&&k[1]?this.data(k[0]):e
    }else{
    return this.each(function(){
        var b=d(this),e=[k[0],c];
        b.triggerHandler("setData"+k[1]+"!",e);
        d.data(this,a,c);
        b.triggerHandler("changeData"+k[1]+"!",e)
        })
    }
},
removeData:function(a){
    return this.each(function(){
        d.removeData(this,a)
        })
    }
});
d.extend({
    queue:function(a,b,c){
        if(!a){
            return
        }
        b=(b||"fx")+"queue";
        var e=d._data(a,b);
        if(!c){
            return e||[]
            }
            if(!e||d.isArray(c)){
            e=d._data(a,b,d.makeArray(c))
            }else{
            e.push(c)
            }
            return e
        },
    dequeue:function(a,b){
        b=b||"fx";
        var c=d.queue(a,b),e=c.shift();
        if(e==="inprogress"){
            e=c.shift()
            }
            if(e){
            if(b==="fx"){
                c.unshift("inprogress")
                }
                e.call(a,function(){
                d.dequeue(a,b)
                })
            }
            if(!c.length){
            d.removeData(a,b+"queue",true)
            }
        }
});
d.fn.extend({
    queue:function(a,c){
        if(typeof a!=="string"){
            c=a;
            a="fx"
            }
            if(c===b){
            return d.queue(this[0],a)
            }
            return this.each(function(b){
            var e=d.queue(this,a,c);
            if(a==="fx"&&e[0]!=="inprogress"){
                d.dequeue(this,a)
                }
            })
    },
dequeue:function(a){
    return this.each(function(){
        d.dequeue(this,a)
        })
    },
delay:function(a,b){
    a=d.fx?d.fx.speeds[a]||a:a;
    b=b||"fx";
    return this.queue(b,function(){
        var c=this;
        setTimeout(function(){
            d.dequeue(c,b)
            },a)
        })
    },
clearQueue:function(a){
    return this.queue(a||"fx",[])
    }
});
var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;
d.props={
    "for":"htmlFor",
    "class":"className",
    readonly:"readOnly",
    maxlength:"maxLength",
    cellspacing:"cellSpacing",
    rowspan:"rowSpan",
    colspan:"colSpan",
    tabindex:"tabIndex",
    usemap:"useMap",
    frameborder:"frameBorder"
};

d.fn.extend({
    attr:function(a,b){
        return d.access(this,a,b,true,d.attr)
        },
    removeAttr:function(a,b){
        return this.each(function(){
            d.attr(this,a,"");
            if(this.nodeType===1){
                this.removeAttribute(a)
                }
            })
    },
addClass:function(a){
    if(d.isFunction(a)){
        return this.each(function(b){
            var c=d(this);
            c.addClass(a.call(this,b,c.attr("class")))
            })
        }
        if(a&&typeof a==="string"){
        var b=(a||"").split(i);
        for(var c=0,e=this.length;c<e;c++){
            var f=this[c];
            if(f.nodeType===1){
                if(!f.className){
                    f.className=a
                    }else{
                    var g=" "+f.className+" ",h=f.className;
                    for(var j=0,k=b.length;j<k;j++){
                        if(g.indexOf(" "+b[j]+" ")<0){
                            h+=" "+b[j]
                            }
                        }
                    f.className=d.trim(h)
                }
            }
        }
}
return this
},
removeClass:function(a){
    if(d.isFunction(a)){
        return this.each(function(b){
            var c=d(this);
            c.removeClass(a.call(this,b,c.attr("class")))
            })
        }
        if(a&&typeof a==="string"||a===b){
        var c=(a||"").split(i);
        for(var e=0,f=this.length;e<f;e++){
            var g=this[e];
            if(g.nodeType===1&&g.className){
                if(a){
                    var j=(" "+g.className+" ").replace(h," ");
                    for(var k=0,l=c.length;k<l;k++){
                        j=j.replace(" "+c[k]+" "," ")
                        }
                        g.className=d.trim(j)
                    }else{
                    g.className=""
                    }
                }
        }
    }
return this
},
toggleClass:function(a,b){
    var c=typeof a,e=typeof b==="boolean";
    if(d.isFunction(a)){
        return this.each(function(c){
            var e=d(this);
            e.toggleClass(a.call(this,c,e.attr("class"),b),b)
            })
        }
        return this.each(function(){
        if(c==="string"){
            var f,g=0,h=d(this),j=b,k=a.split(i);
            while(f=k[g++]){
                j=e?j:!h.hasClass(f);
                h[j?"addClass":"removeClass"](f)
                }
            }else if(c==="undefined"||c==="boolean"){
        if(this.className){
            d._data(this,"__className__",this.className)
            }
            this.className=this.className||a===false?"":d._data(this,"__className__")||""
        }
    })
},
hasClass:function(a){
    var b=" "+a+" ";
    for(var c=0,d=this.length;c<d;c++){
        if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1){
            return true
            }
        }
    return false
},
val:function(a){
    if(!arguments.length){
        var c=this[0];
        if(c){
            if(d.nodeName(c,"option")){
                var e=c.attributes.value;
                return!e||e.specified?c.value:c.text
                }
                if(d.nodeName(c,"select")){
                var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";
                if(f<0){
                    return null
                    }
                    for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){
                    var m=h[k];
                    if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){
                        a=d(m).val();
                        if(i){
                            return a
                            }
                            g.push(a)
                        }
                    }
                if(i&&!g.length&&h.length){
                return d(h[f]).val()
                }
                return g
            }
            if(o.test(c.type)&&!d.support.checkOn){
            return c.getAttribute("value")===null?"on":c.value
            }
            return(c.value||"").replace(j,"")
        }
        return b
    }
    var n=d.isFunction(a);
return this.each(function(b){
    var c=d(this),e=a;
    if(this.nodeType!==1){
        return
    }
    if(n){
        e=a.call(this,b,c.val())
        }
        if(e==null){
        e=""
        }else if(typeof e==="number"){
        e+=""
        }else if(d.isArray(e)){
        e=d.map(e,function(a){
            return a==null?"":a+""
            })
        }
        if(d.isArray(e)&&o.test(this.type)){
        this.checked=d.inArray(c.val(),e)>=0
        }else if(d.nodeName(this,"select")){
        var f=d.makeArray(e);
        d("option",this).each(function(){
            this.selected=d.inArray(d(this).val(),f)>=0
            });
        if(!f.length){
            this.selectedIndex=-1
            }
        }else{
    this.value=e
    }
})
}
});
d.extend({
    attrFn:{
        val:true,
        css:true,
        html:true,
        text:true,
        data:true,
        width:true,
        height:true,
        offset:true
    },
    attr:function(a,c,e,f){
        if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2){
            return b
            }
            if(f&&c in d.attrFn){
            return d(a)[c](e)
            }
            var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;
        c=g&&d.props[c]||c;
        if(a.nodeType===1){
            var i=k.test(c);
            if(c==="selected"&&!d.support.optSelected){
                var j=a.parentNode;
                if(j){
                    j.selectedIndex;
                    if(j.parentNode){
                        j.parentNode.selectedIndex
                        }
                    }
            }
        if((c in a||a[c]!==b)&&g&&!i){
        if(h){
            if(c==="type"&&l.test(a.nodeName)&&a.parentNode){
                d.error("type property can't be changed")
                }
                if(e===null){
                if(a.nodeType===1){
                    a.removeAttribute(c)
                    }
                }else{
            a[c]=e
            }
        }
    if(d.nodeName(a,"form")&&a.getAttributeNode(c)){
    return a.getAttributeNode(c).nodeValue
    }
    if(c==="tabIndex"){
    var o=a.getAttributeNode("tabIndex");
    return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b
    }
    return a[c]
}
if(!d.support.style&&g&&c==="style"){
    if(h){
        a.style.cssText=""+e
        }
        return a.style.cssText
    }
    if(h){
    a.setAttribute(c,""+e)
    }
    if(!a.attributes[c]&&a.hasAttribute&&!a.hasAttribute(c)){
    return b
    }
    var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);
return p===null?b:p
}
if(h){
    a[c]=e
    }
    return a[c]
}
});
var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){
    return a.replace(t,"\\$&")
    };
    
d.event={
    add:function(c,e,f,g){
        if(c.nodeType===3||c.nodeType===8){
            return
        }
        try{
            if(d.isWindow(c)&&c!==a&&!c.frameElement){
                c=a
                }
            }catch(h){}
    if(f===false){
        f=v
        }else if(!f){
        return
    }
    var i,j;
    if(f.handler){
        i=f;
        f=i.handler
        }
        if(!f.guid){
        f.guid=d.guid++
    }
    var k=d._data(c);
    if(!k){
        return
    }
    var l=k.events,m=k.handle;
    if(!l){
        k.events=l={}
    }
    if(!m){
    k.handle=m=function(){
        return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b
        }
    }
m.elem=c;
e=e.split(" ");
var n,o=0,p;
while(n=e[o++]){
    j=i?d.extend({},i):{
        handler:f,
        data:g
    };
    
    if(n.indexOf(".")>-1){
        p=n.split(".");
        n=p.shift();
        j.namespace=p.slice(0).sort().join(".")
        }else{
        p=[];
        j.namespace=""
        }
        j.type=n;
    if(!j.guid){
        j.guid=f.guid
        }
        var q=l[n],r=d.event.special[n]||{};
    
    if(!q){
        q=l[n]=[];
        if(!r.setup||r.setup.call(c,g,p,m)===false){
            if(c.addEventListener){
                c.addEventListener(n,m,false)
                }else if(c.attachEvent){
                c.attachEvent("on"+n,m)
                }
            }
    }
if(r.add){
    r.add.call(c,j);
    if(!j.handler.guid){
        j.handler.guid=f.guid
        }
    }
q.push(j);
d.event.global[n]=true
}
c=null
},
global:{},
remove:function(a,c,e,f){
    if(a.nodeType===3||a.nodeType===8){
        return
    }
    if(e===false){
        e=v
        }
        var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;
    if(!s||!t){
        return
    }
    if(c&&c.type){
        e=c.handler;
        c=c.type
        }
        if(!c||typeof c==="string"&&c.charAt(0)==="."){
        c=c||"";
        for(h in t){
            d.event.remove(a,h+c)
            }
            return
    }
    c=c.split(" ");
    while(h=c[k++]){
        r=h;
        q=null;
        l=h.indexOf(".")<0;
        m=[];
        if(!l){
            m=h.split(".");
            h=m.shift();
            n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")
            }
            p=t[h];
        if(!p){
            continue
        }
        if(!e){
            for(j=0;j<p.length;j++){
                q=p[j];
                if(l||n.test(q.namespace)){
                    d.event.remove(a,r,q.handler,j);
                    p.splice(j--,1)
                    }
                }
            continue
    }
    o=d.event.special[h]||{};
    
    for(j=f||0;j<p.length;j++){
        q=p[j];
        if(e.guid===q.guid){
            if(l||n.test(q.namespace)){
                if(f==null){
                    p.splice(j--,1)
                    }
                    if(o.remove){
                    o.remove.call(a,q)
                    }
                }
            if(f!=null){
            break
        }
    }
    }
if(p.length===0||f!=null&&p.length===1){
    if(!o.teardown||o.teardown.call(a,m)===false){
        d.removeEvent(a,h,s.handle)
        }
        g=null;
    delete t[h]
}
}
if(d.isEmptyObject(t)){
    var w=s.handle;
    if(w){
        w.elem=null
        }
        delete s.events;
    delete s.handle;
    if(d.isEmptyObject(s)){
        d.removeData(a,b,true)
        }
    }
},
trigger:function(a,c,e){
    var f=a.type||a,g=arguments[3];
    if(!g){
        a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f);
        if(f.indexOf("!")>=0){
            a.type=f=f.slice(0,-1);
            a.exclusive=true
            }
            if(!e){
            a.stopPropagation();
            if(d.event.global[f]){
                d.each(d.cache,function(){
                    var b=d.expando,e=this[b];
                    if(e&&e.events&&e.events[f]){
                        d.event.trigger(a,c,e.handle.elem)
                        }
                    })
            }
        }
    if(!e||e.nodeType===3||e.nodeType===8){
    return b
    }
    a.result=b;
a.target=e;
c=d.makeArray(c);
c.unshift(a)
}
a.currentTarget=e;
var h=d._data(e,"handle");
if(h){
    h.apply(e,c)
    }
    var i=e.parentNode||e.ownerDocument;
try{
    if(!(e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()])){
        if(e["on"+f]&&e["on"+f].apply(e,c)===false){
            a.result=false;
            a.preventDefault()
            }
        }
}catch(j){}
if(!a.isPropagationStopped()&&i){
    d.event.trigger(a,c,i,true)
    }else if(!a.isDefaultPrevented()){
    var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};
    
    if((!o._default||o._default.call(e,a)===false)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){
        try{
            if(l[m]){
                k=l["on"+m];
                if(k){
                    l["on"+m]=null
                    }
                    d.event.triggered=true;
                l[m]()
                }
            }catch(q){}
    if(k){
        l["on"+m]=k
        }
        d.event.triggered=false
    }
}
},
handle:function(c){
    var e,f,g,h,i,j=[],k=d.makeArray(arguments);
    c=k[0]=d.event.fix(c||a.event);
    c.currentTarget=this;
    e=c.type.indexOf(".")<0&&!c.exclusive;
    if(!e){
        g=c.type.split(".");
        c.type=g.shift();
        j=g.slice(0).sort();
        h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")
        }
        c.namespace=c.namespace||j.join(".");
    i=d._data(this,"events");
    f=(i||{})[c.type];
    if(i&&f){
        f=f.slice(0);
        for(var l=0,m=f.length;l<m;l++){
            var n=f[l];
            if(e||h.test(n.namespace)){
                c.handler=n.handler;
                c.data=n.data;
                c.handleObj=n;
                var o=n.handler.apply(this,k);
                if(o!==b){
                    c.result=o;
                    if(o===false){
                        c.preventDefault();
                        c.stopPropagation()
                        }
                    }
                if(c.isImmediatePropagationStopped()){
                break
            }
        }
        }
}
return c.result
},
props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){
    if(a[d.expando]){
        return a
        }
        var e=a;
    a=d.Event(e);
    for(var f=this.props.length,g;f;){
        g=this.props[--f];
        a[g]=e[g]
        }
        if(!a.target){
        a.target=a.srcElement||c
        }
        if(a.target.nodeType===3){
        a.target=a.target.parentNode
        }
        if(!a.relatedTarget&&a.fromElement){
        a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement
        }
        if(a.pageX==null&&a.clientX!=null){
        var h=c.documentElement,i=c.body;
        a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0);
        a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)
        }
        if(a.which==null&&(a.charCode!=null||a.keyCode!=null)){
        a.which=a.charCode!=null?a.charCode:a.keyCode
        }
        if(!a.metaKey&&a.ctrlKey){
        a.metaKey=a.ctrlKey
        }
        if(!a.which&&a.button!==b){
        a.which=a.button&1?1:a.button&2?3:a.button&4?2:0
        }
        return a
    },
guid:1e8,
proxy:d.proxy,
special:{
    ready:{
        setup:d.bindReady,
        teardown:d.noop
        },
    live:{
        add:function(a){
            d.event.add(this,F(a.origType,a.selector),d.extend({},a,{
                handler:E,
                guid:a.handler.guid
                }))
            },
        remove:function(a){
            d.event.remove(this,F(a.origType,a.selector),a)
            }
        },
beforeunload:{
    setup:function(a,b,c){
        if(d.isWindow(this)){
            this.onbeforeunload=c
            }
        },
teardown:function(a,b){
    if(this.onbeforeunload===b){
        this.onbeforeunload=null
        }
    }
}
}
};

d.removeEvent=c.removeEventListener?function(a,b,c){
    if(a.removeEventListener){
        a.removeEventListener(b,c,false)
        }
    }:function(a,b,c){
    if(a.detachEvent){
        a.detachEvent("on"+b,c)
        }
    };

d.Event=function(a){
    if(!this.preventDefault){
        return new d.Event(a)
        }
        if(a&&a.type){
        this.originalEvent=a;
        this.type=a.type;
        this.isDefaultPrevented=a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault()?w:v
        }else{
        this.type=a
        }
        this.timeStamp=d.now();
    this[d.expando]=true
    };
    
d.Event.prototype={
    preventDefault:function(){
        this.isDefaultPrevented=w;
        var a=this.originalEvent;
        if(!a){
            return
        }
        if(a.preventDefault){
            a.preventDefault()
            }else{
            a.returnValue=false
            }
        },
stopPropagation:function(){
    this.isPropagationStopped=w;
    var a=this.originalEvent;
    if(!a){
        return
    }
    if(a.stopPropagation){
        a.stopPropagation()
        }
        a.cancelBubble=true
    },
stopImmediatePropagation:function(){
    this.isImmediatePropagationStopped=w;
    this.stopPropagation()
    },
isDefaultPrevented:v,
isPropagationStopped:v,
isImmediatePropagationStopped:v
};

var x=function(a){
    var b=a.relatedTarget;
    try{
        if(b!==c&&!b.parentNode){
            return
        }while(b&&b!==this){
            b=b.parentNode
            }
            if(b!==this){
            a.type=a.data;
            d.event.handle.apply(this,arguments)
            }
        }catch(e){}
},y=function(a){
    a.type=a.data;
    d.event.handle.apply(this,arguments)
    };
    
d.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout"
},function(a,b){
    d.event.special[a]={
        setup:function(c){
            d.event.add(this,b,c&&c.selector?y:x,a)
            },
        teardown:function(a){
            d.event.remove(this,b,a&&a.selector?y:x)
            }
        }
});
if(!d.support.submitBubbles){
    d.event.special.submit={
        setup:function(a,b){
            if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){
                d.event.add(this,"click.specialSubmit",function(a){
                    var b=a.target,c=b.type;
                    if((c==="submit"||c==="image")&&d(b).closest("form").length){
                        C("submit",this,arguments)
                        }
                    });
            d.event.add(this,"keypress.specialSubmit",function(a){
                var b=a.target,c=b.type;
                if((c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13){
                    C("submit",this,arguments)
                    }
                })
        }else{
        return false
        }
    },
teardown:function(a){
    d.event.remove(this,".specialSubmit")
    }
}
}
if(!d.support.changeBubbles){
    var z,A=function(a){
        var b=a.type,c=a.value;
        if(b==="radio"||b==="checkbox"){
            c=a.checked
            }else if(b==="select-multiple"){
            c=a.selectedIndex>-1?d.map(a.options,function(a){
                return a.selected
                }).join("-"):""
            }else if(a.nodeName.toLowerCase()==="select"){
            c=a.selectedIndex
            }
            return c
        },B=function(c){
        var e=c.target,f,g;
        if(!q.test(e.nodeName)||e.readOnly){
            return
        }
        f=d._data(e,"_change_data");
        g=A(e);
        if(c.type!=="focusout"||e.type!=="radio"){
            d._data(e,"_change_data",g)
            }
            if(f===b||g===f){
            return
        }
        if(f!=null||g){
            c.type="change";
            c.liveFired=b;
            d.event.trigger(c,arguments[1],e)
            }
        };
    
d.event.special.change={
    filters:{
        focusout:B,
        beforedeactivate:B,
        click:function(a){
            var b=a.target,c=b.type;
            if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select"){
                B.call(this,a)
                }
            },
    keydown:function(a){
        var b=a.target,c=b.type;
        if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple"){
            B.call(this,a)
            }
        },
beforeactivate:function(a){
    var b=a.target;
    d._data(b,"_change_data",A(b))
    }
},
setup:function(a,b){
    if(this.type==="file"){
        return false
        }
        for(var c in z){
        d.event.add(this,c+".specialChange",z[c])
        }
        return q.test(this.nodeName)
    },
teardown:function(a){
    d.event.remove(this,".specialChange");
    return q.test(this.nodeName)
    }
};

z=d.event.special.change.filters;
z.focus=z.beforeactivate
}
if(c.addEventListener){
    d.each({
        focus:"focusin",
        blur:"focusout"
    },function(a,b){
        function c(a){
            a=d.event.fix(a);
            a.type=b;
            return d.event.handle.call(this,a)
            }
            d.event.special[b]={
            setup:function(){
                this.addEventListener(a,c,true)
                },
            teardown:function(){
                this.removeEventListener(a,c,true)
                }
            }
    })
}
d.each(["bind","one"],function(a,c){
    d.fn[c]=function(a,e,f){
        if(typeof a==="object"){
            for(var g in a){
                this[c](g,e,a[g],f)
                }
                return this
            }
            if(d.isFunction(e)||e===false){
            f=e;
            e=b
            }
            var h=c==="one"?d.proxy(f,function(a){
            d(this).unbind(a,h);
            return f.apply(this,arguments)
            }):f;
        if(a==="unload"&&c!=="one"){
            this.one(a,e,f)
            }else{
            for(var i=0,j=this.length;i<j;i++){
                d.event.add(this[i],a,h,e)
                }
            }
            return this
    }
});
d.fn.extend({
    unbind:function(a,b){
        if(typeof a==="object"&&!a.preventDefault){
            for(var c in a){
                this.unbind(c,a[c])
                }
            }else{
        for(var e=0,f=this.length;e<f;e++){
            d.event.remove(this[e],a,b)
            }
        }
        return this
},
delegate:function(a,b,c,d){
    return this.live(b,c,d,a)
    },
undelegate:function(a,b,c){
    if(arguments.length===0){
        return this.unbind("live")
        }else{
        return this.die(b,null,c,a)
        }
    },
trigger:function(a,b){
    return this.each(function(){
        d.event.trigger(a,b,this)
        })
    },
triggerHandler:function(a,b){
    if(this[0]){
        var c=d.Event(a);
        c.preventDefault();
        c.stopPropagation();
        d.event.trigger(c,b,this[0]);
        return c.result
        }
    },
toggle:function(a){
    var b=arguments,c=1;
    while(c<b.length){
        d.proxy(a,b[c++])
        }
        return this.click(d.proxy(a,function(e){
        var f=(d._data(this,"lastToggle"+a.guid)||0)%c;
        d._data(this,"lastToggle"+a.guid,f+1);
        e.preventDefault();
        return b[f].apply(this,arguments)||false
        }))
    },
hover:function(a,b){
    return this.mouseenter(a).mouseleave(b||a)
    }
});
var D={
    focus:"focusin",
    blur:"focusout",
    mouseenter:"mouseover",
    mouseleave:"mouseout"
};

d.each(["live","die"],function(a,c){
    d.fn[c]=function(a,e,f,g){
        var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);
        if(typeof a==="object"&&!a.preventDefault){
            for(var o in a){
                n[c](o,e,a[o],m)
                }
                return this
            }
            if(d.isFunction(e)){
            f=e;
            e=b
            }
            a=(a||"").split(" ");
        while((h=a[i++])!=null){
            j=p.exec(h);
            k="";
            if(j){
                k=j[0];
                h=h.replace(p,"")
                }
                if(h==="hover"){
                a.push("mouseenter"+k,"mouseleave"+k);
                continue
            }
            l=h;
            if(h==="focus"||h==="blur"){
                a.push(D[h]+k);
                h=h+k
                }else{
                h=(D[h]||h)+k
                }
                if(c==="live"){
                for(var q=0,r=n.length;q<r;q++){
                    d.event.add(n[q],"live."+F(h,m),{
                        data:e,
                        selector:m,
                        handler:f,
                        origType:h,
                        origHandler:f,
                        preType:l
                    })
                    }
                }else{
            n.unbind("live."+F(h,m),f)
            }
        }
    return this
}
});
d.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(a,b){
    d.fn[b]=function(a,c){
        if(c==null){
            c=a;
            a=null
            }
            return arguments.length>0?this.bind(b,a,c):this.trigger(b)
        };
        
    if(d.attrFn){
        d.attrFn[b]=true
        }
    });
(function(){
    function t(a,b,c,d,e,f){
        for(var g=0,h=d.length;g<h;g++){
            var i=d[g];
            if(i){
                var j=false;
                i=i[a];
                while(i){
                    if(i.sizcache===c){
                        j=d[i.sizset];
                        break
                    }
                    if(i.nodeType===1&&!f){
                        i.sizcache=c;
                        i.sizset=g
                        }
                        if(i.nodeName.toLowerCase()===b){
                        j=i;
                        break
                    }
                    i=i[a]
                    }
                    d[g]=j
                }
            }
        }
    function u(a,b,c,d,e,f){
    for(var g=0,h=d.length;g<h;g++){
        var i=d[g];
        if(i){
            var j=false;
            i=i[a];
            while(i){
                if(i.sizcache===c){
                    j=d[i.sizset];
                    break
                }
                if(i.nodeType===1){
                    if(!f){
                        i.sizcache=c;
                        i.sizset=g
                        }
                        if(typeof b!=="string"){
                        if(i===b){
                            j=true;
                            break
                        }
                    }else if(k.filter(b,[i]).length>0){
                    j=i;
                    break
                }
            }
            i=i[a]
        }
        d[g]=j
    }
    }
}
var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=false,h=true,i=/\\/g,j=/\W/;
[0,0].sort(function(){
    h=false;
    return 0
    });
var k=function(b,d,e,g){
    e=e||[];
    d=d||c;
    var h=d;
    if(d.nodeType!==1&&d.nodeType!==9){
        return[]
        }
        if(!b||typeof b!=="string"){
        return e
        }
        var i,j,n,o,q,r,s,t,u=true,w=k.isXML(d),x=[],y=b;
    do{
        a.exec("");
        i=a.exec(y);
        if(i){
            y=i[3];
            x.push(i[1]);
            if(i[2]){
                o=i[3];
                break
            }
        }
    }while(i);
if(x.length>1&&m.exec(b)){
    if(x.length===2&&l.relative[x[0]]){
        j=v(x[0]+x[1],d)
        }else{
        j=l.relative[x[0]]?[d]:k(x.shift(),d);
        while(x.length){
            b=x.shift();
            if(l.relative[b]){
                b+=x.shift()
                }
                j=v(b,j)
            }
        }
}else{
    if(!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])){
        q=k.find(x.shift(),d,w);
        d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]
        }
        if(d){
        q=g?{
            expr:x.pop(),
            set:p(g)
            }:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w);
        j=q.expr?k.filter(q.expr,q.set):q.set;
        if(x.length>0){
            n=p(j)
            }else{
            u=false
            }while(x.length){
            r=x.pop();
            s=r;
            if(!l.relative[r]){
                r=""
                }else{
                s=x.pop()
                }
                if(s==null){
                s=d
                }
                l.relative[r](n,s,w)
            }
        }else{
    n=x=[]
    }
}
if(!n){
    n=j
    }
    if(!n){
    k.error(r||b)
    }
    if(f.call(n)==="[object Array]"){
    if(!u){
        e.push.apply(e,n)
        }else if(d&&d.nodeType===1){
        for(t=0;n[t]!=null;t++){
            if(n[t]&&(n[t]===true||n[t].nodeType===1&&k.contains(d,n[t]))){
                e.push(j[t])
                }
            }
        }else{
    for(t=0;n[t]!=null;t++){
        if(n[t]&&n[t].nodeType===1){
            e.push(j[t])
            }
        }
    }
}else{
    p(n,e)
    }
    if(o){
    k(o,h,e,g);
    k.uniqueSort(e)
    }
    return e
};

k.uniqueSort=function(a){
    if(r){
        g=h;
        a.sort(r);
        if(g){
            for(var b=1;b<a.length;b++){
                if(a[b]===a[b-1]){
                    a.splice(b--,1)
                    }
                }
            }
    }
return a
};

k.matches=function(a,b){
    return k(a,null,null,b)
    };
    
k.matchesSelector=function(a,b){
    return k(b,null,null,[a]).length>0
    };
    
k.find=function(a,b,c){
    var d;
    if(!a){
        return[]
        }
        for(var e=0,f=l.order.length;e<f;e++){
        var g,h=l.order[e];
        if(g=l.leftMatch[h].exec(a)){
            var j=g[1];
            g.splice(1,1);
            if(j.substr(j.length-1)!=="\\"){
                g[1]=(g[1]||"").replace(i,"");
                d=l.find[h](g,b,c);
                if(d!=null){
                    a=a.replace(l.match[h],"");
                    break
                }
            }
        }
    }
if(!d){
    d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]
    }
    return{
    set:d,
    expr:a
}
};

k.filter=function(a,c,d,e){
    var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);
    while(a&&c.length){
        for(var n in l.filter){
            if((f=l.leftMatch[n].exec(a))!=null&&f[2]){
                var o,p,q=l.filter[n],r=f[1];
                g=false;
                f.splice(1,1);
                if(r.substr(r.length-1)==="\\"){
                    continue
                }
                if(j===i){
                    i=[]
                    }
                    if(l.preFilter[n]){
                    f=l.preFilter[n](f,j,d,i,e,m);
                    if(!f){
                        g=o=true
                        }else if(f===true){
                        continue
                    }
                }
                if(f){
                for(var s=0;(p=j[s])!=null;s++){
                    if(p){
                        o=q(p,f,s,j);
                        var t=e^!!o;
                        if(d&&o!=null){
                            if(t){
                                g=true
                                }else{
                                j[s]=false
                                }
                            }else if(t){
                        i.push(p);
                        g=true
                        }
                    }
                }
        }
        if(o!==b){
        if(!d){
            j=i
            }
            a=a.replace(l.match[n],"");
        if(!g){
            return[]
            }
            break
    }
}
}
if(a===h){
    if(g==null){
        k.error(a)
        }else{
        break
    }
}
h=a
}
return j
};

k.error=function(a){
    throw"Syntax error, unrecognized expression: "+a
    };
    
var l=k.selectors={
    order:["ID","NAME","TAG"],
    match:{
        ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
    },
    leftMatch:{},
    attrMap:{
        "class":"className",
        "for":"htmlFor"
    },
    attrHandle:{
        href:function(a){
            return a.getAttribute("href")
            },
        type:function(a){
            return a.getAttribute("type")
            }
        },
relative:{
    "+":function(a,b){
        var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;
        if(d){
            b=b.toLowerCase()
            }
            for(var f=0,g=a.length,h;f<g;f++){
            if(h=a[f]){
                while((h=h.previousSibling)&&h.nodeType!==1){}
                a[f]=e||h&&h.nodeName.toLowerCase()===b?h||false:h===b
                }
            }
        if(e){
        k.filter(b,a,true)
        }
    },
">":function(a,b){
    var c,d=typeof b==="string",e=0,f=a.length;
    if(d&&!j.test(b)){
        b=b.toLowerCase();
        for(;e<f;e++){
            c=a[e];
            if(c){
                var g=c.parentNode;
                a[e]=g.nodeName.toLowerCase()===b?g:false
                }
            }
        }else{
    for(;e<f;e++){
        c=a[e];
        if(c){
            a[e]=d?c.parentNode:c.parentNode===b
            }
        }
    if(d){
    k.filter(b,a,true)
    }
}
},
"":function(a,b,c){
    var d,f=e++,g=u;
    if(typeof b==="string"&&!j.test(b)){
        b=b.toLowerCase();
        d=b;
        g=t
        }
        g("parentNode",b,f,a,d,c)
    },
"~":function(a,b,c){
    var d,f=e++,g=u;
    if(typeof b==="string"&&!j.test(b)){
        b=b.toLowerCase();
        d=b;
        g=t
        }
        g("previousSibling",b,f,a,d,c)
    }
},
find:{
    ID:function(a,b,c){
        if(typeof b.getElementById!=="undefined"&&!c){
            var d=b.getElementById(a[1]);
            return d&&d.parentNode?[d]:[]
            }
        },
NAME:function(a,b){
    if(typeof b.getElementsByName!=="undefined"){
        var c=[],d=b.getElementsByName(a[1]);
        for(var e=0,f=d.length;e<f;e++){
            if(d[e].getAttribute("name")===a[1]){
                c.push(d[e])
                }
            }
        return c.length===0?null:c
    }
},
TAG:function(a,b){
    if(typeof b.getElementsByTagName!=="undefined"){
        return b.getElementsByTagName(a[1])
        }
    }
},
preFilter:{
    CLASS:function(a,b,c,d,e,f){
        a=" "+a[1].replace(i,"")+" ";
        if(f){
            return a
            }
            for(var g=0,h;(h=b[g])!=null;g++){
            if(h){
                if(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)){
                    if(!c){
                        d.push(h)
                        }
                    }else if(c){
                b[g]=false
                }
            }
        }
    return false
},
ID:function(a){
    return a[1].replace(i,"")
    },
TAG:function(a,b){
    return a[1].replace(i,"").toLowerCase()
    },
CHILD:function(a){
    if(a[1]==="nth"){
        if(!a[2]){
            k.error(a[0])
            }
            a[2]=a[2].replace(/^\+|\s*/g,"");
        var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
        a[2]=b[1]+(b[2]||1)-0;
        a[3]=b[3]-0
    }else if(a[2]){
        k.error(a[0])
        }
        a[0]=e++;
    return a
    },
ATTR:function(a,b,c,d,e,f){
    var g=a[1]=a[1].replace(i,"");
    if(!f&&l.attrMap[g]){
        a[1]=l.attrMap[g]
        }
        a[4]=(a[4]||a[5]||"").replace(i,"");
    if(a[2]==="~="){
        a[4]=" "+a[4]+" "
        }
        return a
    },
PSEUDO:function(b,c,d,e,f){
    if(b[1]==="not"){
        if((a.exec(b[3])||"").length>1||/^\w/.test(b[3])){
            b[3]=k(b[3],null,null,c)
            }else{
            var g=k.filter(b[3],c,d,true^f);
            if(!d){
                e.push.apply(e,g)
                }
                return false
            }
        }else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0])){
    return true
    }
    return b
},
POS:function(a){
    a.unshift(true);
    return a
    }
},
filters:{
    enabled:function(a){
        return a.disabled===false&&a.type!=="hidden"
        },
    disabled:function(a){
        return a.disabled===true
        },
    checked:function(a){
        return a.checked===true
        },
    selected:function(a){
        if(a.parentNode){
            a.parentNode.selectedIndex
            }
            return a.selected===true
        },
    parent:function(a){
        return!!a.firstChild
        },
    empty:function(a){
        return!a.firstChild
        },
    has:function(a,b,c){
        return!!k(c[3],a).length
        },
    header:function(a){
        return/h\d/i.test(a.nodeName)
        },
    text:function(a){
        return"text"===a.getAttribute("type")
        },
    radio:function(a){
        return"radio"===a.type
        },
    checkbox:function(a){
        return"checkbox"===a.type
        },
    file:function(a){
        return"file"===a.type
        },
    password:function(a){
        return"password"===a.type
        },
    submit:function(a){
        return"submit"===a.type
        },
    image:function(a){
        return"image"===a.type
        },
    reset:function(a){
        return"reset"===a.type
        },
    button:function(a){
        return"button"===a.type||a.nodeName.toLowerCase()==="button"
        },
    input:function(a){
        return/input|select|textarea|button/i.test(a.nodeName)
        }
    },
setFilters:{
    first:function(a,b){
        return b===0
        },
    last:function(a,b,c,d){
        return b===d.length-1
        },
    even:function(a,b){
        return b%2===0
        },
    odd:function(a,b){
        return b%2===1
        },
    lt:function(a,b,c){
        return b<c[3]-0
        },
    gt:function(a,b,c){
        return b>c[3]-0
        },
    nth:function(a,b,c){
        return c[3]-0===b
        },
    eq:function(a,b,c){
        return c[3]-0===b
        }
    },
filter:{
    PSEUDO:function(a,b,c,d){
        var e=b[1],f=l.filters[e];
        if(f){
            return f(a,c,b,d)
            }else if(e==="contains"){
            return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0
            }else if(e==="not"){
            var g=b[3];
            for(var h=0,i=g.length;h<i;h++){
                if(g[h]===a){
                    return false
                    }
                }
            return true
        }else{
        k.error(e)
        }
    },
CHILD:function(a,b){
    var c=b[1],d=a;
    switch(c){
        case"only":case"first":
            while(d=d.previousSibling){
            if(d.nodeType===1){
                return false
                }
            }
        if(c==="first"){
            return true
            }
            d=a;
    case"last":
        while(d=d.nextSibling){
        if(d.nodeType===1){
            return false
            }
        }
    return true;
case"nth":
    var e=b[2],f=b[3];
    if(e===1&&f===0){
    return true
    }
    var g=b[0],h=a.parentNode;
if(h&&(h.sizcache!==g||!a.nodeIndex)){
    var i=0;
    for(d=h.firstChild;d;d=d.nextSibling){
        if(d.nodeType===1){
            d.nodeIndex=++i
            }
        }
    h.sizcache=g
}
var j=a.nodeIndex-f;
if(e===0){
    return j===0
    }else{
    return j%e===0&&j/e>=0
    }
}
},
ID:function(a,b){
    return a.nodeType===1&&a.getAttribute("id")===b
    },
TAG:function(a,b){
    return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b
    },
CLASS:function(a,b){
    return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1
    },
ATTR:function(a,b){
    var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];
    return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:!g?e&&d!==false:f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":false
    },
POS:function(a,b,c,d){
    var e=b[2],f=l.setFilters[e];
    if(f){
        return f(a,c,b,d)
        }
    }
}
};

var m=l.match.POS,n=function(a,b){
    return"\\"+(b-0+1)
    };
    
for(var o in l.match){
    l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source);
    l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n))
    }
    var p=function(a,b){
    a=Array.prototype.slice.call(a,0);
    if(b){
        b.push.apply(b,a);
        return b
        }
        return a
    };
    
try{
    Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType
    }catch(q){
    p=function(a,b){
        var c=0,d=b||[];
        if(f.call(a)==="[object Array]"){
            Array.prototype.push.apply(d,a)
            }else{
            if(typeof a.length==="number"){
                for(var e=a.length;c<e;c++){
                    d.push(a[c])
                    }
                }else{
            for(;a[c];c++){
                d.push(a[c])
                }
            }
        }
return d
}
}
var r,s;
if(c.documentElement.compareDocumentPosition){
    r=function(a,b){
        if(a===b){
            g=true;
            return 0
            }
            if(!a.compareDocumentPosition||!b.compareDocumentPosition){
            return a.compareDocumentPosition?-1:1
            }
            return a.compareDocumentPosition(b)&4?-1:1
        }
    }else{
    r=function(a,b){
        var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;
        if(a===b){
            g=true;
            return 0
            }else if(h===i){
            return s(a,b)
            }else if(!h){
            return-1
            }else if(!i){
            return 1
            }while(j){
            e.unshift(j);
            j=j.parentNode
            }
            j=i;
        while(j){
            f.unshift(j);
            j=j.parentNode
            }
            c=e.length;
        d=f.length;
        for(var k=0;k<c&&k<d;k++){
            if(e[k]!==f[k]){
                return s(e[k],f[k])
                }
            }
        return k===c?s(a,f[k],-1):s(e[k],b,1)
    };
    
s=function(a,b,c){
    if(a===b){
        return c
        }
        var d=a.nextSibling;
    while(d){
        if(d===b){
            return-1
            }
            d=d.nextSibling
        }
        return 1
    }
}
k.getText=function(a){
    var b="",c;
    for(var d=0;a[d];d++){
        c=a[d];
        if(c.nodeType===3||c.nodeType===4){
            b+=c.nodeValue
            }else if(c.nodeType!==8){
            b+=k.getText(c.childNodes)
            }
        }
    return b
};
(function(){
    var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;
    a.innerHTML="<a name='"+d+"'/>";
    e.insertBefore(a,e.firstChild);
    if(c.getElementById(d)){
        l.find.ID=function(a,c,d){
            if(typeof c.getElementById!=="undefined"&&!d){
                var e=c.getElementById(a[1]);
                return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]
                }
            };
        
    l.filter.ID=function(a,b){
        var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");
        return a.nodeType===1&&c&&c.nodeValue===b
        }
    }
e.removeChild(a);
e=a=null
})();
(function(){
    var a=c.createElement("div");
    a.appendChild(c.createComment(""));
    if(a.getElementsByTagName("*").length>0){
        l.find.TAG=function(a,b){
            var c=b.getElementsByTagName(a[1]);
            if(a[1]==="*"){
                var d=[];
                for(var e=0;c[e];e++){
                    if(c[e].nodeType===1){
                        d.push(c[e])
                        }
                    }
                c=d
            }
            return c
        }
    }
a.innerHTML="<a href='#'></a>";
if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"){
    l.attrHandle.href=function(a){
        return a.getAttribute("href",2)
        }
    }
a=null
})();
if(c.querySelectorAll){
    (function(){
        var a=k,b=c.createElement("div"),d="__sizzle__";
        b.innerHTML="<p class='TEST'></p>";
        if(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0){
            return
        }
        k=function(b,e,f,g){
            e=e||c;
            if(!g&&!k.isXML(e)){
                var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                if(h&&(e.nodeType===1||e.nodeType===9)){
                    if(h[1]){
                        return p(e.getElementsByTagName(b),f)
                        }else if(h[2]&&l.find.CLASS&&e.getElementsByClassName){
                        return p(e.getElementsByClassName(h[2]),f)
                        }
                    }
                if(e.nodeType===9){
                if(b==="body"&&e.body){
                    return p([e.body],f)
                    }else if(h&&h[3]){
                    var i=e.getElementById(h[3]);
                    if(i&&i.parentNode){
                        if(i.id===h[3]){
                            return p([i],f)
                            }
                        }else{
                    return p([],f)
                    }
                }
            try{
            return p(e.querySelectorAll(b),f)
            }catch(j){}
    }else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){
        var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);
        if(!n){
            e.setAttribute("id",o)
            }else{
            o=o.replace(/'/g,"\\$&")
            }
            if(r&&q){
            e=e.parentNode
            }
            try{
            if(!r||q){
                return p(e.querySelectorAll("[id='"+o+"'] "+b),f)
                }
            }catch(s){}finally{
        if(!n){
            m.removeAttribute("id")
            }
        }
}
}
return a(b,e,f,g)
};

for(var e in a){
    k[e]=a[e]
    }
    b=null
})()
}(function(){
    var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=false;
    try{
        b.call(c.documentElement,"[test!='']:sizzle")
        }catch(e){
        d=true
        }
        if(b){
        k.matchesSelector=function(a,c){
            c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
            if(!k.isXML(a)){
                try{
                    if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){
                        return b.call(a,c)
                        }
                    }catch(e){}
        }
        return k(c,null,null,[a]).length>0
    }
}
})();
(function(){
    var a=c.createElement("div");
    a.innerHTML="<div class='test e'></div><div class='test'></div>";
    if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0){
        return
    }
    a.lastChild.className="e";
    if(a.getElementsByClassName("e").length===1){
        return
    }
    l.order.splice(1,0,"CLASS");
    l.find.CLASS=function(a,b,c){
        if(typeof b.getElementsByClassName!=="undefined"&&!c){
            return b.getElementsByClassName(a[1])
            }
        };
    
a=null
})();
if(c.documentElement.contains){
    k.contains=function(a,b){
        return a!==b&&(a.contains?a.contains(b):true)
        }
    }else if(c.documentElement.compareDocumentPosition){
    k.contains=function(a,b){
        return!!(a.compareDocumentPosition(b)&16)
        }
    }else{
    k.contains=function(){
        return false
        }
    }
k.isXML=function(a){
    var b=(a?a.ownerDocument||a:0).documentElement;
    return b?b.nodeName!=="HTML":false
    };
    
var v=function(a,b){
    var c,d=[],e="",f=b.nodeType?[b]:b;
    while(c=l.match.PSEUDO.exec(a)){
        e+=c[0];
        a=a.replace(l.match.PSEUDO,"")
        }
        a=l.relative[a]?a+"*":a;
    for(var g=0,h=f.length;g<h;g++){
        k(a,f[g],d)
        }
        return k.filter(e,d)
    };
    
d.find=k;
d.expr=k.selectors;
d.expr[":"]=d.expr.filters;
d.unique=k.uniqueSort;
d.text=k.getText;
d.isXMLDoc=k.isXML;
d.contains=k.contains
})();
var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={
    children:true,
    contents:true,
    next:true,
    prev:true
};

d.fn.extend({
    find:function(a){
        var b=this.pushStack("","find",a),c=0;
        for(var e=0,f=this.length;e<f;e++){
            c=b.length;
            d.find(a,this[e],b);
            if(e>0){
                for(var g=c;g<b.length;g++){
                    for(var h=0;h<c;h++){
                        if(b[h]===b[g]){
                            b.splice(g--,1);
                            break
                        }
                    }
                    }
                }
        }
return b
},
has:function(a){
    var b=d(a);
    return this.filter(function(){
        for(var a=0,c=b.length;a<c;a++){
            if(d.contains(this,b[a])){
                return true
                }
            }
        })
},
not:function(a){
    return this.pushStack(O(this,a,false),"not",a)
    },
filter:function(a){
    return this.pushStack(O(this,a,true),"filter",a)
    },
is:function(a){
    return!!a&&d.filter(a,this).length>0
    },
closest:function(a,b){
    var c=[],e,f,g=this[0];
    if(d.isArray(a)){
        var h,i,j={},k=1;
        if(g&&a.length){
            for(e=0,f=a.length;e<f;e++){
                i=a[e];
                if(!j[i]){
                    j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i
                    }
                }while(g&&g.ownerDocument&&g!==b){
            for(i in j){
                h=j[i];
                if(h.jquery?h.index(g)>-1:d(g).is(h)){
                    c.push({
                        selector:i,
                        elem:g,
                        level:k
                    })
                    }
                }
            g=g.parentNode;
        k++
    }
}
return c
}
var l=L.test(a)?d(a,b||this.context):null;
for(e=0,f=this.length;e<f;e++){
    g=this[e];
    while(g){
        if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){
            c.push(g);
            break
        }else{
            g=g.parentNode;
            if(!g||!g.ownerDocument||g===b){
                break
            }
        }
    }
}
c=c.length>1?d.unique(c):c;
return this.pushStack(c,"closest",a)
},
index:function(a){
    if(!a||typeof a==="string"){
        return d.inArray(this[0],a?d(a):this.parent().children())
        }
        return d.inArray(a.jquery?a[0]:a,this)
    },
add:function(a,b){
    var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);
    return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))
    },
andSelf:function(){
    return this.add(this.prevObject)
    }
});
d.each({
    parent:function(a){
        var b=a.parentNode;
        return b&&b.nodeType!==11?b:null
        },
    parents:function(a){
        return d.dir(a,"parentNode")
        },
    parentsUntil:function(a,b,c){
        return d.dir(a,"parentNode",c)
        },
    next:function(a){
        return d.nth(a,2,"nextSibling")
        },
    prev:function(a){
        return d.nth(a,2,"previousSibling")
        },
    nextAll:function(a){
        return d.dir(a,"nextSibling")
        },
    prevAll:function(a){
        return d.dir(a,"previousSibling")
        },
    nextUntil:function(a,b,c){
        return d.dir(a,"nextSibling",c)
        },
    prevUntil:function(a,b,c){
        return d.dir(a,"previousSibling",c)
        },
    siblings:function(a){
        return d.sibling(a.parentNode.firstChild,a)
        },
    children:function(a){
        return d.sibling(a.firstChild)
        },
    contents:function(a){
        return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)
        }
    },function(a,b){
    d.fn[a]=function(c,e){
        var f=d.map(this,b,c),g=K.call(arguments);
        if(!G.test(a)){
            e=c
            }
            if(e&&typeof e==="string"){
            f=d.filter(e,f)
            }
            f=this.length>1&&!M[a]?d.unique(f):f;
        if((this.length>1||I.test(e))&&H.test(a)){
            f=f.reverse()
            }
            return this.pushStack(f,a,g.join(","))
        }
    });
d.extend({
    filter:function(a,b,c){
        if(c){
            a=":not("+a+")"
            }
            return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)
        },
    dir:function(a,c,e){
        var f=[],g=a[c];
        while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e))){
            if(g.nodeType===1){
                f.push(g)
                }
                g=g[c]
            }
            return f
        },
    nth:function(a,b,c,d){
        b=b||1;
        var e=0;
        for(;a;a=a[c]){
            if(a.nodeType===1&&++e===b){
                break
            }
        }
        return a
    },
sibling:function(a,b){
    var c=[];
    for(;a;a=a.nextSibling){
        if(a.nodeType===1&&a!==b){
            c.push(a)
            }
        }
    return c
}
});
var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={
    option:[1,"<select multiple='multiple'>","</select>"],
    legend:[1,"<fieldset>","</fieldset>"],
    thead:[1,"<table>","</table>"],
    tr:[2,"<table><tbody>","</tbody></table>"],
    td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
    col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
    area:[1,"<map>","</map>"],
    _default:[0,"",""]
    };
    
X.optgroup=X.option;
X.tbody=X.tfoot=X.colgroup=X.caption=X.thead;
X.th=X.td;
if(!d.support.htmlSerialize){
    X._default=[1,"div<div>","</div>"]
    }
    d.fn.extend({
    text:function(a){
        if(d.isFunction(a)){
            return this.each(function(b){
                var c=d(this);
                c.text(a.call(this,b,c.text()))
                })
            }
            if(typeof a!=="object"&&a!==b){
            return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))
            }
            return d.text(this)
        },
    wrapAll:function(a){
        if(d.isFunction(a)){
            return this.each(function(b){
                d(this).wrapAll(a.call(this,b))
                })
            }
            if(this[0]){
            var b=d(a,this[0].ownerDocument).eq(0).clone(true);
            if(this[0].parentNode){
                b.insertBefore(this[0])
                }
                b.map(function(){
                var a=this;
                while(a.firstChild&&a.firstChild.nodeType===1){
                    a=a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
    wrapInner:function(a){
        if(d.isFunction(a)){
            return this.each(function(b){
                d(this).wrapInner(a.call(this,b))
                })
            }
            return this.each(function(){
            var b=d(this),c=b.contents();
            if(c.length){
                c.wrapAll(a)
                }else{
                b.append(a)
                }
            })
    },
wrap:function(a){
    return this.each(function(){
        d(this).wrapAll(a)
        })
    },
unwrap:function(){
    return this.parent().each(function(){
        if(!d.nodeName(this,"body")){
            d(this).replaceWith(this.childNodes)
            }
        }).end()
    },
append:function(){
    return this.domManip(arguments,true,function(a){
        if(this.nodeType===1){
            this.appendChild(a)
            }
        })
},
prepend:function(){
    return this.domManip(arguments,true,function(a){
        if(this.nodeType===1){
            this.insertBefore(a,this.firstChild)
            }
        })
},
before:function(){
    if(this[0]&&this[0].parentNode){
        return this.domManip(arguments,false,function(a){
            this.parentNode.insertBefore(a,this)
            })
        }else if(arguments.length){
        var a=d(arguments[0]);
        a.push.apply(a,this.toArray());
        return this.pushStack(a,"before",arguments)
        }
    },
after:function(){
    if(this[0]&&this[0].parentNode){
        return this.domManip(arguments,false,function(a){
            this.parentNode.insertBefore(a,this.nextSibling)
            })
        }else if(arguments.length){
        var a=this.pushStack(this,"after",arguments);
        a.push.apply(a,d(arguments[0]).toArray());
        return a
        }
    },
remove:function(a,b){
    for(var c=0,e;(e=this[c])!=null;c++){
        if(!a||d.filter(a,[e]).length){
            if(!b&&e.nodeType===1){
                d.cleanData(e.getElementsByTagName("*"));
                d.cleanData([e])
                }
                if(e.parentNode){
                e.parentNode.removeChild(e)
                }
            }
    }
    return this
},
empty:function(){
    for(var a=0,b;(b=this[a])!=null;a++){
        if(b.nodeType===1){
            d.cleanData(b.getElementsByTagName("*"))
            }while(b.firstChild){
            b.removeChild(b.firstChild)
            }
        }
    return this
},
clone:function(a,b){
    a=a==null?false:a;
    b=b==null?a:b;
    return this.map(function(){
        return d.clone(this,a,b)
        })
    },
html:function(a){
    if(a===b){
        return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null
        }else if(typeof a==="string"&&!V.test(a)&&(d.support.leadingWhitespace||!Q.test(a))&&!X[(S.exec(a)||["",""])[1].toLowerCase()]){
        a=a.replace(R,"<$1></$2>");
        try{
            for(var c=0,e=this.length;c<e;c++){
                if(this[c].nodeType===1){
                    d.cleanData(this[c].getElementsByTagName("*"));
                    this[c].innerHTML=a
                    }
                }
            }catch(f){
    this.empty().append(a)
    }
}else if(d.isFunction(a)){
    this.each(function(b){
        var c=d(this);
        c.html(a.call(this,b,c.html()))
        })
    }else{
    this.empty().append(a)
    }
    return this
},
replaceWith:function(a){
    if(this[0]&&this[0].parentNode){
        if(d.isFunction(a)){
            return this.each(function(b){
                var c=d(this),e=c.html();
                c.replaceWith(a.call(this,b,e))
                })
            }
            if(typeof a!=="string"){
            a=d(a).detach()
            }
            return this.each(function(){
            var b=this.nextSibling,c=this.parentNode;
            d(this).remove();
            if(b){
                d(b).before(a)
                }else{
                d(c).append(a)
                }
            })
    }else{
    return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)
    }
},
detach:function(a){
    return this.remove(a,true)
    },
domManip:function(a,c,e){
    var f,g,h,i,j=a[0],k=[];
    if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j)){
        return this.each(function(){
            d(this).domManip(a,c,e,true)
            })
        }
        if(d.isFunction(j)){
        return this.each(function(f){
            var g=d(this);
            a[0]=j.call(this,f,c?g.html():b);
            g.domManip(a,c,e)
            })
        }
        if(this[0]){
        i=j&&j.parentNode;
        if(d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length){
            f={
                fragment:i
            }
        }else{
        f=d.buildFragment(a,this,k)
        }
        h=f.fragment;
    if(h.childNodes.length===1){
        g=h=h.firstChild
        }else{
        g=h.firstChild
        }
        if(g){
        c=c&&d.nodeName(g,"tr");
        for(var l=0,m=this.length,n=m-1;l<m;l++){
            e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,true,true):h)
            }
        }
        if(k.length){
    d.each(k,ab)
    }
}
return this
}
});
d.buildFragment=function(a,b,e){
    var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;
    if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))){
        g=true;
        h=d.fragments[a[0]];
        if(h){
            if(h!==1){
                f=h
                }
            }
    }
if(!f){
    f=i.createDocumentFragment();
    d.clean(a,i,f,e)
    }
    if(g){
    d.fragments[a[0]]=h?f:1
    }
    return{
    fragment:f,
    cacheable:g
}
};

d.fragments={};

d.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
},function(a,b){
    d.fn[a]=function(c){
        var e=[],f=d(c),g=this.length===1&&this[0].parentNode;
        if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){
            f[b](this[0]);
            return this
            }else{
            for(var h=0,i=f.length;h<i;h++){
                var j=(h>0?this.clone(true):this).get();
                d(f[h])[b](j);
                e=e.concat(j)
                }
                return this.pushStack(e,a,f.selector)
            }
        }
});
d.extend({
    clone:function(a,b,c){
        var e=a.cloneNode(true),f,g,h;
        if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){
            $(a,e);
            f=_(a);
            g=_(e);
            for(h=0;f[h];++h){
                $(f[h],g[h])
                }
            }
            if(b){
        Z(a,e);
        if(c){
            f=_(a);
            g=_(e);
            for(h=0;f[h];++h){
                Z(f[h],g[h])
                }
            }
        }
return e
},
clean:function(a,b,e,f){
    b=b||c;
    if(typeof b.createElement==="undefined"){
        b=b.ownerDocument||b[0]&&b[0].ownerDocument||c
        }
        var g=[];
    for(var h=0,i;(i=a[h])!=null;h++){
        if(typeof i==="number"){
            i+=""
            }
            if(!i){
            continue
        }
        if(typeof i==="string"&&!U.test(i)){
            i=b.createTextNode(i)
            }else if(typeof i==="string"){
            i=i.replace(R,"<$1></$2>");
            var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");
            m.innerHTML=k[1]+i+k[2];
            while(l--){
                m=m.lastChild
                }
                if(!d.support.tbody){
                var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];
                for(var p=o.length-1;p>=0;--p){
                    if(d.nodeName(o[p],"tbody")&&!o[p].childNodes.length){
                        o[p].parentNode.removeChild(o[p])
                        }
                    }
                }
            if(!d.support.leadingWhitespace&&Q.test(i)){
        m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild)
        }
        i=m.childNodes
    }
    if(i.nodeType){
        g.push(i)
        }else{
        g=d.merge(g,i)
        }
    }
if(e){
    for(h=0;g[h];h++){
        if(f&&d.nodeName(g[h],"script")&&(!g[h].type||g[h].type.toLowerCase()==="text/javascript")){
            f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h])
            }else{
            if(g[h].nodeType===1){
                g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script"))))
                }
                e.appendChild(g[h])
            }
        }
    }
return g
},
cleanData:function(a){
    var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;
    for(var i=0,j;(j=a[i])!=null;i++){
        if(j.nodeName&&d.noData[j.nodeName.toLowerCase()]){
            continue
        }
        c=j[d.expando];
        if(c){
            b=e[c]&&e[c][f];
            if(b&&b.events){
                for(var k in b.events){
                    if(g[k]){
                        d.event.remove(j,k)
                        }else{
                        d.removeEvent(j,k,b.handle)
                        }
                    }
                if(b.handle){
                b.handle.elem=null
                }
            }
        if(h){
        delete j[d.expando]
    }else if(j.removeAttribute){
        j.removeAttribute(d.expando)
        }
        delete e[c]
    }
}
}
});
var bb=/alpha\([^)]*\)/i,cb=/opacity=([^)]*)/,db=/-([a-z])/ig,eb=/([A-Z])/g,fb=/^-?\d+(?:px)?$/i,gb=/^-?\d/,hb={
    position:"absolute",
    visibility:"hidden",
    display:"block"
},ib=["Left","Right"],jb=["Top","Bottom"],kb,lb,mb,nb=function(a,b){
    return b.toUpperCase()
    };
    
d.fn.css=function(a,c){
    if(arguments.length===2&&c===b){
        return this
        }
        return d.access(this,a,c,true,function(a,c,e){
        return e!==b?d.style(a,c,e):d.css(a,c)
        })
    };
    
d.extend({
    cssHooks:{
        opacity:{
            get:function(a,b){
                if(b){
                    var c=kb(a,"opacity","opacity");
                    return c===""?"1":c
                    }else{
                    return a.style.opacity
                    }
                }
        }
},
cssNumber:{
    zIndex:true,
    fontWeight:true,
    opacity:true,
    zoom:true,
    lineHeight:true
},
cssProps:{
    "float":d.support.cssFloat?"cssFloat":"styleFloat"
    },
style:function(a,c,e,f){
    if(!a||a.nodeType===3||a.nodeType===8||!a.style){
        return
    }
    var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];
    c=d.cssProps[h]||h;
    if(e!==b){
        if(typeof e==="number"&&isNaN(e)||e==null){
            return
        }
        if(typeof e==="number"&&!d.cssNumber[h]){
            e+="px"
            }
            if(!j||!("set"in j)||(e=j.set(a,e))!==b){
            try{
                i[c]=e
                }catch(k){}
        }
    }else{
    if(j&&"get"in j&&(g=j.get(a,false,f))!==b){
        return g
        }
        return i[c]
    }
},
css:function(a,c,e){
    var f,g=d.camelCase(c),h=d.cssHooks[g];
    c=d.cssProps[g]||g;
    if(h&&"get"in h&&(f=h.get(a,true,e))!==b){
        return f
        }else if(kb){
        return kb(a,c,g)
        }
    },
swap:function(a,b,c){
    var d={};
    
    for(var e in b){
        d[e]=a.style[e];
        a.style[e]=b[e]
        }
        c.call(a);
    for(e in b){
        a.style[e]=d[e]
        }
    },
camelCase:function(a){
    return a.replace(db,nb)
    }
});
d.curCSS=d.css;
d.each(["height","width"],function(a,b){
    d.cssHooks[b]={
        get:function(a,c,e){
            var f;
            if(c){
                if(a.offsetWidth!==0){
                    f=ob(a,b,e)
                    }else{
                    d.swap(a,hb,function(){
                        f=ob(a,b,e)
                        })
                    }
                    if(f<=0){
                    f=kb(a,b,b);
                    if(f==="0px"&&mb){
                        f=mb(a,b,b)
                        }
                        if(f!=null){
                        return f===""||f==="auto"?"0px":f
                        }
                    }
                if(f<0||f==null){
                f=a.style[b];
                return f===""||f==="auto"?"0px":f
                }
                return typeof f==="string"?f:f+"px"
            }
        },
set:function(a,b){
    if(fb.test(b)){
        b=parseFloat(b);
        if(b>=0){
            return b+"px"
            }
        }else{
    return b
    }
}
}
});
if(!d.support.opacity){
    d.cssHooks.opacity={
        get:function(a,b){
            return cb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""
            },
        set:function(a,b){
            var c=a.style;
            c.zoom=1;
            var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";
            c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e
            }
        }
}
if(c.defaultView&&c.defaultView.getComputedStyle){
    lb=function(a,c,e){
        var f,g,h;
        e=e.replace(eb,"-$1").toLowerCase();
        if(!(g=a.ownerDocument.defaultView)){
            return b
            }
            if(h=g.getComputedStyle(a,null)){
            f=h.getPropertyValue(e);
            if(f===""&&!d.contains(a.ownerDocument.documentElement,a)){
                f=d.style(a,e)
                }
            }
        return f
    }
}
if(c.documentElement.currentStyle){
    mb=function(a,b){
        var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;
        if(!fb.test(d)&&gb.test(d)){
            c=f.left;
            if(e){
                a.runtimeStyle.left=a.currentStyle.left
                }
                f.left=b==="fontSize"?"1em":d||0;
            d=f.pixelLeft+"px";
            f.left=c;
            if(e){
                a.runtimeStyle.left=e
                }
            }
        return d===""?"auto":d
    }
}
kb=lb||mb;
if(d.expr&&d.expr.filters){
    d.expr.filters.hidden=function(a){
        var b=a.offsetWidth,c=a.offsetHeight;
        return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"
        };
        
    d.expr.filters.visible=function(a){
        return!d.expr.filters.hidden(a)
        }
    }
var pb=/%20/g,qb=/\[\]$/,rb=/\r?\n/g,sb=/#.*$/,tb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,ub=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,vb=/(?:^file|^widget|\-extension):$/,wb=/^(?:GET|HEAD)$/,xb=/^\/\//,yb=/\?/,zb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Ab=/^(?:select|textarea)/i,Bb=/\s+/,Cb=/([?&])_=[^&]*/,Db=/(^|\-)([a-z])/g,Eb=function(a,b,c){
    return b+c.toUpperCase()
    },Fb=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,Gb=d.fn.load,Hb={},Ib={},Jb,Kb;
try{
    Jb=c.location.href
    }catch(Lb){
    Jb=c.createElement("a");
    Jb.href="";
    Jb=Jb.href
    }
    Kb=Fb.exec(Jb.toLowerCase());
d.fn.extend({
    load:function(a,c,e){
        if(typeof a!=="string"&&Gb){
            return Gb.apply(this,arguments)
            }else if(!this.length){
            return this
            }
            var f=a.indexOf(" ");
        if(f>=0){
            var g=a.slice(f,a.length);
            a=a.slice(0,f)
            }
            var h="GET";
        if(c){
            if(d.isFunction(c)){
                e=c;
                c=b
                }else if(typeof c==="object"){
                c=d.param(c,d.ajaxSettings.traditional);
                h="POST"
                }
            }
        var i=this;
    d.ajax({
        url:a,
        type:h,
        dataType:"html",
        data:c,
        complete:function(a,b,c){
            c=a.responseText;
            if(a.isResolved()){
                a.done(function(a){
                    c=a
                    });
                i.html(g?d("<div>").append(c.replace(zb,"")).find(g):c)
                }
                if(e){
                i.each(e,[c,b,a])
                }
            }
    });
return this
},
serialize:function(){
    return d.param(this.serializeArray())
    },
serializeArray:function(){
    return this.map(function(){
        return this.elements?d.makeArray(this.elements):this
        }).filter(function(){
        return this.name&&!this.disabled&&(this.checked||Ab.test(this.nodeName)||ub.test(this.type))
        }).map(function(a,b){
        var c=d(this).val();
        return c==null?null:d.isArray(c)?d.map(c,function(a,c){
            return{
                name:b.name,
                value:a.replace(rb,"\r\n")
                }
            }):{
        name:b.name,
        value:c.replace(rb,"\r\n")
        }
    }).get()
}
});
d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){
    d.fn[b]=function(a){
        return this.bind(b,a)
        }
    });
d.each(["get","post"],function(a,c){
    d[c]=function(a,e,f,g){
        if(d.isFunction(e)){
            g=g||f;
            f=e;
            e=b
            }
            return d.ajax({
            type:c,
            url:a,
            data:e,
            success:f,
            dataType:g
        })
        }
    });
d.extend({
    getScript:function(a,c){
        return d.get(a,b,c,"script")
        },
    getJSON:function(a,b,c){
        return d.get(a,b,c,"json")
        },
    ajaxSetup:function(a,b){
        if(!b){
            b=a;
            a=d.extend(true,d.ajaxSettings,b)
            }else{
            d.extend(true,a,d.ajaxSettings,b)
            }
            for(var c in{
            context:1,
            url:1
        }){
            if(c in b){
                a[c]=b[c]
                }else if(c in d.ajaxSettings){
                a[c]=d.ajaxSettings[c]
                }
            }
        return a
    },
ajaxSettings:{
    url:Jb,
    isLocal:vb.test(Kb[1]),
    global:true,
    type:"GET",
    contentType:"application/x-www-form-urlencoded",
    processData:true,
    async:true,
    accepts:{
        xml:"application/xml, text/xml",
        html:"text/html",
        text:"text/plain",
        json:"application/json, text/javascript",
        "*":"*/*"
    },
    contents:{
        xml:/xml/,
        html:/html/,
        json:/json/
    },
    responseFields:{
        xml:"responseXML",
        text:"responseText"
    },
    converters:{
        "* text":a.String,
        "text html":true,
        "text json":d.parseJSON,
        "text xml":d.parseXML
        }
    },
ajaxPrefilter:Mb(Hb),
ajaxTransport:Mb(Ib),
ajax:function(a,c){
    function v(a,c,l,n){
        if(r===2){
            return
        }
        r=2;
        if(p){
            clearTimeout(p)
            }
            o=b;
        m=n||"";
        u.readyState=a?4:0;
        var q,t,v,w=l?Pb(e,u,l):b,x,y;
        if(a>=200&&a<300||a===304){
            if(e.ifModified){
                if(x=u.getResponseHeader("Last-Modified")){
                    d.lastModified[k]=x
                    }
                    if(y=u.getResponseHeader("Etag")){
                    d.etag[k]=y
                    }
                }
            if(a===304){
            c="notmodified";
            q=true
            }else{
            try{
                t=Qb(e,w);
                c="success";
                q=true
                }catch(z){
                c="parsererror";
                v=z
                }
            }
    }else{
    v=c;
    if(!c||a){
        c="error";
        if(a<0){
            a=0
            }
        }
}
u.status=a;
u.statusText=c;
if(q){
    h.resolveWith(f,[t,c,u])
    }else{
    h.rejectWith(f,[u,c,v])
    }
    u.statusCode(j);
j=b;
if(s){
    g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v])
    }
    i.resolveWith(f,[u,c]);
if(s){
    g.trigger("ajaxComplete",[u,e]);
    if(!--d.active){
        d.event.trigger("ajaxStop")
        }
    }
}
if(typeof a==="object"){
    c=a;
    a=b
    }
    c=c||{};

var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={
    readyState:0,
    setRequestHeader:function(a,b){
        if(!r){
            l[a.toLowerCase().replace(Db,Eb)]=b
            }
            return this
        },
    getAllResponseHeaders:function(){
        return r===2?m:null
        },
    getResponseHeader:function(a){
        var c;
        if(r===2){
            if(!n){
                n={};
                while(c=tb.exec(m)){
                    n[c[1].toLowerCase()]=c[2]
                    }
                }
            c=n[a.toLowerCase()]
        }
        return c===b?null:c
    },
overrideMimeType:function(a){
    if(!r){
        e.mimeType=a
        }
        return this
    },
abort:function(a){
    a=a||"abort";
    if(o){
        o.abort(a)
        }
        v(0,a);
    return this
    }
};

h.promise(u);
u.success=u.done;
u.error=u.fail;
u.complete=i.done;
u.statusCode=function(a){
    if(a){
        var b;
        if(r<2){
            for(b in a){
                j[b]=[j[b],a[b]]
                }
            }else{
        b=a[u.status];
        u.then(b,b)
        }
    }
return this
};

e.url=((a||e.url)+"").replace(sb,"").replace(xb,Kb[1]+"//");
e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(Bb);
if(!e.crossDomain){
    q=Fb.exec(e.url.toLowerCase());
    e.crossDomain=!!(q&&(q[1]!=Kb[1]||q[2]!=Kb[2]||(q[3]||(q[1]==="http:"?80:443))!=(Kb[3]||(Kb[1]==="http:"?80:443))))
    }
    if(e.data&&e.processData&&typeof e.data!=="string"){
    e.data=d.param(e.data,e.traditional)
    }
    Nb(Hb,e,c,u);
if(r===2){
    return false
    }
    s=e.global;
e.type=e.type.toUpperCase();
e.hasContent=!wb.test(e.type);
if(s&&d.active++===0){
    d.event.trigger("ajaxStart")
    }
    if(!e.hasContent){
    if(e.data){
        e.url+=(yb.test(e.url)?"&":"?")+e.data
        }
        k=e.url;
    if(e.cache===false){
        var w=d.now(),x=e.url.replace(Cb,"$1_="+w);
        e.url=x+(x===e.url?(yb.test(e.url)?"&":"?")+"_="+w:"")
        }
    }
if(e.data&&e.hasContent&&e.contentType!==false||c.contentType){
    l["Content-Type"]=e.contentType
    }
    if(e.ifModified){
    k=k||e.url;
    if(d.lastModified[k]){
        l["If-Modified-Since"]=d.lastModified[k]
        }
        if(d.etag[k]){
        l["If-None-Match"]=d.etag[k]
        }
    }
l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];
for(t in e.headers){
    u.setRequestHeader(t,e.headers[t])
    }
    if(e.beforeSend&&(e.beforeSend.call(f,u,e)===false||r===2)){
    u.abort();
    return false
    }
    for(t in{
    success:1,
    error:1,
    complete:1
}){
    u[t](e[t])
    }
    o=Nb(Ib,e,c,u);
if(!o){
    v(-1,"No Transport")
    }else{
    u.readyState=1;
    if(s){
        g.trigger("ajaxSend",[u,e])
        }
        if(e.async&&e.timeout>0){
        p=setTimeout(function(){
            u.abort("timeout")
            },e.timeout)
        }
        try{
        r=1;
        o.send(l,v)
        }catch(y){
        if(status<2){
            v(-1,y)
            }else{
            d.error(y)
            }
        }
}
return u
},
param:function(a,c){
    var e=[],f=function(a,b){
        b=d.isFunction(b)?b():b;
        e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
        };
        
    if(c===b){
        c=d.ajaxSettings.traditional
        }
        if(d.isArray(a)||a.jquery&&!d.isPlainObject(a)){
        d.each(a,function(){
            f(this.name,this.value)
            })
        }else{
        for(var g in a){
            Ob(g,a[g],c,f)
            }
        }
        return e.join("&").replace(pb,"+")
}
});
d.extend({
    active:0,
    lastModified:{},
    etag:{}
});
var Rb=d.now(),Sb=/(\=)\?(&|$)|()\?\?()/i;
d.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function(){
        return d.expando+"_"+Rb++
        }
    });
d.ajaxPrefilter("json jsonp",function(b,c,e){
    var f=typeof b.data==="string";
    if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==false&&(Sb.test(b.url)||f&&Sb.test(b.data))){
        var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){
            a[h]=i;
            if(g&&d.isFunction(i)){
                a[h](g[0])
                }
            };
        
    if(b.jsonp!==false){
        j=j.replace(Sb,l);
        if(b.url===j){
            if(f){
                k=k.replace(Sb,l)
                }
                if(b.data===k){
                j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h
                }
            }
    }
b.url=j;
b.data=k;
a[h]=function(a){
    g=[a]
    };
    
e.then(m,m);
b.converters["script json"]=function(){
    if(!g){
        d.error(h+" was not called")
        }
        return g[0]
    };
    
b.dataTypes[0]="json";
return"script"
}
});
d.ajaxSetup({
    accepts:{
        script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
        script:/javascript|ecmascript/
    },
    converters:{
        "text script":function(a){
            d.globalEval(a);
            return a
            }
        }
});
d.ajaxPrefilter("script",function(a){
    if(a.cache===b){
        a.cache=false
        }
        if(a.crossDomain){
        a.type="GET";
        a.global=false
        }
    });
d.ajaxTransport("script",function(a){
    if(a.crossDomain){
        var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;
        return{
            send:function(f,g){
                d=c.createElement("script");
                d.async="async";
                if(a.scriptCharset){
                    d.charset=a.scriptCharset
                    }
                    d.src=a.url;
                d.onload=d.onreadystatechange=function(a,c){
                    if(!d.readyState||/loaded|complete/.test(d.readyState)){
                        d.onload=d.onreadystatechange=null;
                        if(e&&d.parentNode){
                            e.removeChild(d)
                            }
                            d=b;
                        if(!c){
                            g(200,"success")
                            }
                        }
                };
            
        e.insertBefore(d,e.firstChild)
        },
    abort:function(){
        if(d){
            d.onload(0,1)
            }
        }
}
}
});
var Tb=d.now(),Ub,Vb;
d.ajaxSettings.xhr=a.ActiveXObject?function(){
    return!this.isLocal&&Xb()||Yb()
    }:Xb;
Vb=d.ajaxSettings.xhr();
d.support.ajax=!!Vb;
d.support.cors=Vb&&"withCredentials"in Vb;
Vb=b;
if(d.support.ajax){
    d.ajaxTransport(function(a){
        if(!a.crossDomain||d.support.cors){
            var c;
            return{
                send:function(e,f){
                    var g=a.xhr(),h,i;
                    if(a.username){
                        g.open(a.type,a.url,a.async,a.username,a.password)
                        }else{
                        g.open(a.type,a.url,a.async)
                        }
                        if(a.xhrFields){
                        for(i in a.xhrFields){
                            g[i]=a.xhrFields[i]
                            }
                        }
                        if(a.mimeType&&g.overrideMimeType){
                    g.overrideMimeType(a.mimeType)
                    }
                    if(!(a.crossDomain&&!a.hasContent)&&!e["X-Requested-With"]){
                    e["X-Requested-With"]="XMLHttpRequest"
                    }
                    try{
                    for(i in e){
                        g.setRequestHeader(i,e[i])
                        }
                    }catch(j){}
            g.send(a.hasContent&&a.data||null);
            c=function(e,i){
                var j,k,l,m,n;
                try{
                    if(c&&(i||g.readyState===4)){
                        c=b;
                        if(h){
                            g.onreadystatechange=d.noop;
                            delete Ub[h]
                        }
                        if(i){
                            if(g.readyState!==4){
                                g.abort()
                                }
                            }else{
                        j=g.status;
                        l=g.getAllResponseHeaders();
                        m={};
                        
                        n=g.responseXML;
                        if(n&&n.documentElement){
                            m.xml=n
                            }
                            m.text=g.responseText;
                        try{
                            k=g.statusText
                            }catch(o){
                            k=""
                            }
                            if(!j&&a.isLocal&&!a.crossDomain){
                            j=m.text?200:404
                            }else if(j===1223){
                            j=204
                            }
                        }
                }
        }catch(p){
        if(!i){
            f(-1,p)
            }
        }
    if(m){
    f(j,k,m,l)
    }
};

if(!a.async||g.readyState===4){
    c()
    }else{
    if(!Ub){
        Ub={};
        
        Wb()
        }
        h=Tb++;
    g.onreadystatechange=Ub[h]=c
    }
},
abort:function(){
    if(c){
        c(0,1)
        }
    }
}
}
})
}
var Zb={},$b=/^(?:toggle|show|hide)$/,_b=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ac,bc=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
d.fn.extend({
    show:function(a,b,c){
        var e,f;
        if(a||a===0){
            return this.animate(cc("show",3),a,b,c)
            }else{
            for(var g=0,h=this.length;g<h;g++){
                e=this[g];
                f=e.style.display;
                if(!d._data(e,"olddisplay")&&f==="none"){
                    f=e.style.display=""
                    }
                    if(f===""&&d.css(e,"display")==="none"){
                    d._data(e,"olddisplay",dc(e.nodeName))
                    }
                }
            for(g=0;g<h;g++){
            e=this[g];
            f=e.style.display;
            if(f===""||f==="none"){
                e.style.display=d._data(e,"olddisplay")||""
                }
            }
        return this
    }
},
hide:function(a,b,c){
    if(a||a===0){
        return this.animate(cc("hide",3),a,b,c)
        }else{
        for(var e=0,f=this.length;e<f;e++){
            var g=d.css(this[e],"display");
            if(g!=="none"&&!d._data(this[e],"olddisplay")){
                d._data(this[e],"olddisplay",g)
                }
            }
        for(e=0;e<f;e++){
        this[e].style.display="none"
        }
        return this
    }
},
_toggle:d.fn.toggle,
toggle:function(a,b,c){
    var e=typeof a==="boolean";
    if(d.isFunction(a)&&d.isFunction(b)){
        this._toggle.apply(this,arguments)
        }else if(a==null||e){
        this.each(function(){
            var b=e?a:d(this).is(":hidden");
            d(this)[b?"show":"hide"]()
            })
        }else{
        this.animate(cc("toggle",3),a,b,c)
        }
        return this
    },
fadeTo:function(a,b,c,d){
    return this.filter(":hidden").css("opacity",0).show().end().animate({
        opacity:b
    },a,c,d)
    },
animate:function(a,b,c,e){
    var f=d.speed(b,c,e);
    if(d.isEmptyObject(a)){
        return this.each(f.complete)
        }
        return this[f.queue===false?"each":"queue"](function(){
        var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;
        for(c in a){
            var i=d.camelCase(c);
            if(c!==i){
                a[i]=a[c];
                delete a[c];
                c=i
                }
                if(a[c]==="hide"&&g||a[c]==="show"&&!g){
                return b.complete.call(this)
                }
                if(e&&(c==="height"||c==="width")){
                b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
                if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none"){
                    if(!d.support.inlineBlockNeedsLayout){
                        this.style.display="inline-block"
                        }else{
                        var j=dc(this.nodeName);
                        if(j==="inline"){
                            this.style.display="inline-block"
                            }else{
                            this.style.display="inline";
                            this.style.zoom=1
                            }
                        }
                }
        }
        if(d.isArray(a[c])){
            (b.specialEasing=b.specialEasing||{})[c]=a[c][1];
            a[c]=a[c][0]
            }
        }
    if(b.overflow!=null){
    this.style.overflow="hidden"
    }
    b.curAnim=d.extend({},a);
d.each(a,function(c,e){
    var f=new d.fx(h,b,c);
    if($b.test(e)){
        f[e==="toggle"?g?"show":"hide":e](a)
        }else{
        var i=_b.exec(e),j=f.cur();
        if(i){
            var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");
            if(l!=="px"){
                d.style(h,c,(k||1)+l);
                j=(k||1)/f.cur()*j;
                d.style(h,c,j+l)
                }
                if(i[1]){
                k=(i[1]==="-="?-1:1)*k+j
                }
                f.custom(j,k,l)
            }else{
            f.custom(j,e,"")
            }
        }
});
return true
})
},
stop:function(a,b){
    var c=d.timers;
    if(a){
        this.queue([])
        }
        this.each(function(){
        for(var a=c.length-1;a>=0;a--){
            if(c[a].elem===this){
                if(b){
                    c[a](true)
                    }
                    c.splice(a,1)
                }
            }
        });
if(!b){
    this.dequeue()
    }
    return this
}
});
d.each({
    slideDown:cc("show",1),
    slideUp:cc("hide",1),
    slideToggle:cc("toggle",1),
    fadeIn:{
        opacity:"show"
    },
    fadeOut:{
        opacity:"hide"
    },
    fadeToggle:{
        opacity:"toggle"
    }
},function(a,b){
    d.fn[a]=function(a,c,d){
        return this.animate(b,a,c,d)
        }
    });
d.extend({
    speed:function(a,b,c){
        var e=a&&typeof a==="object"?d.extend({},a):{
            complete:c||!c&&b||d.isFunction(a)&&a,
            duration:a,
            easing:c&&b||b&&!d.isFunction(b)&&b
            };
            
        e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default;
        e.old=e.complete;
        e.complete=function(){
            if(e.queue!==false){
                d(this).dequeue()
                }
                if(d.isFunction(e.old)){
                e.old.call(this)
                }
            };
        
    return e
    },
easing:{
    linear:function(a,b,c,d){
        return c+d*a
        },
    swing:function(a,b,c,d){
        return(-Math.cos(a*Math.PI)/2+.5)*d+c
        }
    },
timers:[],
fx:function(a,b,c){
    this.options=b;
    this.elem=a;
    this.prop=c;
    if(!b.orig){
        b.orig={}
    }
}
});
d.fx.prototype={
    update:function(){
        if(this.options.step){
            this.options.step.call(this.elem,this.now,this)
            }(d.fx.step[this.prop]||d.fx.step._default)(this)
        },
    cur:function(){
        if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
            return this.elem[this.prop]
            }
            var a,b=d.css(this.elem,this.prop);
        return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a
        },
    custom:function(a,b,c){
        function g(a){
            return e.step(a)
            }
            var e=this,f=d.fx;
        this.startTime=d.now();
        this.start=a;
        this.end=b;
        this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");
        this.now=this.start;
        this.pos=this.state=0;
        g.elem=this.elem;
        if(g()&&d.timers.push(g)&&!ac){
            ac=setInterval(f.tick,f.interval)
            }
        },
show:function(){
    this.options.orig[this.prop]=d.style(this.elem,this.prop);
    this.options.show=true;
    this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
    d(this.elem).show()
    },
hide:function(){
    this.options.orig[this.prop]=d.style(this.elem,this.prop);
    this.options.hide=true;
    this.custom(this.cur(),0)
    },
step:function(a){
    var b=d.now(),c=true;
    if(a||b>=this.options.duration+this.startTime){
        this.now=this.end;
        this.pos=this.state=1;
        this.update();
        this.options.curAnim[this.prop]=true;
        for(var e in this.options.curAnim){
            if(this.options.curAnim[e]!==true){
                c=false
                }
            }
        if(c){
        if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){
            var f=this.elem,g=this.options;
            d.each(["","X","Y"],function(a,b){
                f.style["overflow"+b]=g.overflow[a]
                })
            }
            if(this.options.hide){
            d(this.elem).hide()
            }
            if(this.options.hide||this.options.show){
            for(var h in this.options.curAnim){
                d.style(this.elem,h,this.options.orig[h])
                }
            }
            this.options.complete.call(this.elem)
    }
    return false
}else{
    var i=b-this.startTime;
    this.state=i/this.options.duration;
    var j=this.options.specialEasing&&this.options.specialEasing[this.prop];
    var k=this.options.easing||(d.easing.swing?"swing":"linear");
    this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration);
    this.now=this.start+(this.end-this.start)*this.pos;
    this.update()
    }
    return true
}
};

d.extend(d.fx,{
    tick:function(){
        var a=d.timers;
        for(var b=0;b<a.length;b++){
            if(!a[b]()){
                a.splice(b--,1)
                }
            }
        if(!a.length){
        d.fx.stop()
        }
    },
interval:13,
stop:function(){
    clearInterval(ac);
    ac=null
    },
speeds:{
    slow:600,
    fast:200,
    _default:400
},
step:{
    opacity:function(a){
        d.style(a.elem,"opacity",a.now)
        },
    _default:function(a){
        if(a.elem.style&&a.elem.style[a.prop]!=null){
            a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit
            }else{
            a.elem[a.prop]=a.now
            }
        }
}
});
if(d.expr&&d.expr.filters){
    d.expr.filters.animated=function(a){
        return d.grep(d.timers,function(b){
            return a===b.elem
            }).length
        }
    }
var ec=/^t(?:able|d|h)$/i,fc=/^(?:body|html)$/i;
if("getBoundingClientRect"in c.documentElement){
    d.fn.offset=function(a){
        var b=this[0],c;
        if(a){
            return this.each(function(b){
                d.offset.setOffset(this,a,b)
                })
            }
            if(!b||!b.ownerDocument){
            return null
            }
            if(b===b.ownerDocument.body){
            return d.offset.bodyOffset(b)
            }
            try{
            c=b.getBoundingClientRect()
            }catch(e){}
        var f=b.ownerDocument,g=f.documentElement;
        if(!c||!d.contains(g,b)){
            return c?{
                top:c.top,
                left:c.left
                }:{
                top:0,
                left:0
            }
        }
        var h=f.body,i=gc(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;
    return{
        top:n,
        left:o
    }
}
}else{
    d.fn.offset=function(a){
        var b=this[0];
        if(a){
            return this.each(function(b){
                d.offset.setOffset(this,a,b)
                })
            }
            if(!b||!b.ownerDocument){
            return null
            }
            if(b===b.ownerDocument.body){
            return d.offset.bodyOffset(b)
            }
            d.offset.initialize();
        var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;
        while((b=b.parentNode)&&b!==i&&b!==h){
            if(d.offset.supportsFixedPosition&&k.position==="fixed"){
                break
            }
            c=j?j.getComputedStyle(b,null):b.currentStyle;
            l-=b.scrollTop;
            m-=b.scrollLeft;
            if(b===e){
                l+=b.offsetTop;
                m+=b.offsetLeft;
                if(d.offset.doesNotAddBorder&&!(d.offset.doesAddBorderForTableAndCells&&ec.test(b.nodeName))){
                    l+=parseFloat(c.borderTopWidth)||0;
                    m+=parseFloat(c.borderLeftWidth)||0
                    }
                    f=e;
                e=b.offsetParent
                }
                if(d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"){
                l+=parseFloat(c.borderTopWidth)||0;
                m+=parseFloat(c.borderLeftWidth)||0
                }
                k=c
            }
            if(k.position==="relative"||k.position==="static"){
            l+=i.offsetTop;
            m+=i.offsetLeft
            }
            if(d.offset.supportsFixedPosition&&k.position==="fixed"){
            l+=Math.max(h.scrollTop,i.scrollTop);
            m+=Math.max(h.scrollLeft,i.scrollLeft)
            }
            return{
            top:l,
            left:m
        }
    }
}
d.offset={
    initialize:function(){
        var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        d.extend(b.style,{
            position:"absolute",
            top:0,
            left:0,
            margin:0,
            border:0,
            width:"1px",
            height:"1px",
            visibility:"hidden"
        });
        b.innerHTML=j;
        a.insertBefore(b,a.firstChild);
        e=b.firstChild;
        f=e.firstChild;
        h=e.nextSibling.firstChild.firstChild;
        this.doesNotAddBorder=f.offsetTop!==5;
        this.doesAddBorderForTableAndCells=h.offsetTop===5;
        f.style.position="fixed";
        f.style.top="20px";
        this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;
        f.style.position=f.style.top="";
        e.style.overflow="hidden";
        e.style.position="relative";
        this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;
        this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i;
        a.removeChild(b);
        a=b=e=f=g=h=null;
        d.offset.initialize=d.noop
        },
    bodyOffset:function(a){
        var b=a.offsetTop,c=a.offsetLeft;
        d.offset.initialize();
        if(d.offset.doesNotIncludeMarginInBodyOffset){
            b+=parseFloat(d.css(a,"marginTop"))||0;
            c+=parseFloat(d.css(a,"marginLeft"))||0
            }
            return{
            top:b,
            left:c
        }
    },
setOffset:function(a,b,c){
    var e=d.css(a,"position");
    if(e==="static"){
        a.style.position="relative"
        }
        var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;
    if(j){
        l=f.position()
        }
        m=j?l.top:parseInt(h,10)||0;
    n=j?l.left:parseInt(i,10)||0;
    if(d.isFunction(b)){
        b=b.call(a,c,g)
        }
        if(b.top!=null){
        k.top=b.top-g.top+m
        }
        if(b.left!=null){
        k.left=b.left-g.left+n
        }
        if("using"in b){
        b.using.call(a,k)
        }else{
        f.css(k)
        }
    }
};

d.fn.extend({
    position:function(){
        if(!this[0]){
            return null
            }
            var a=this[0],b=this.offsetParent(),c=this.offset(),e=fc.test(b[0].nodeName)?{
            top:0,
            left:0
        }:b.offset();
        c.top-=parseFloat(d.css(a,"marginTop"))||0;
        c.left-=parseFloat(d.css(a,"marginLeft"))||0;
        e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0;
        e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;
        return{
            top:c.top-e.top,
            left:c.left-e.left
            }
        },
offsetParent:function(){
    return this.map(function(){
        var a=this.offsetParent||c.body;
        while(a&&!fc.test(a.nodeName)&&d.css(a,"position")==="static"){
            a=a.offsetParent
            }
            return a
        })
    }
});
d.each(["Left","Top"],function(a,c){
    var e="scroll"+c;
    d.fn[e]=function(c){
        var f=this[0],g;
        if(!f){
            return null
            }
            if(c!==b){
            return this.each(function(){
                g=gc(this);
                if(g){
                    g.scrollTo(!a?c:d(g).scrollLeft(),a?c:d(g).scrollTop())
                    }else{
                    this[e]=c
                    }
                })
        }else{
        g=gc(f);
        return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]
        }
    }
});
d.each(["Height","Width"],function(a,c){
    var e=c.toLowerCase();
    d.fn["inner"+c]=function(){
        return this[0]?parseFloat(d.css(this[0],e,"padding")):null
        };
        
    d.fn["outer"+c]=function(a){
        return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null
        };
        
    d.fn[e]=function(a){
        var f=this[0];
        if(!f){
            return a==null?null:this
            }
            if(d.isFunction(a)){
            return this.each(function(b){
                var c=d(this);
                c[e](a.call(this,b,c[e]()))
                })
            }
            if(d.isWindow(f)){
            var g=f.document.documentElement["client"+c];
            return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g
            }else if(f.nodeType===9){
            return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c])
            }else if(a===b){
            var h=d.css(f,e),i=parseFloat(h);
            return d.isNaN(i)?h:i
            }else{
            return this.css(e,typeof a==="string"?a:a+"px")
            }
        }
});
a.jQuery=a.$=d
})(window)