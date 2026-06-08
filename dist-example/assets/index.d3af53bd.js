const Bh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};Bh();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="182",zh=0,ol=1,kh=2,Sr=1,Vh=2,ys=3,Vi=0,Wt=1,Si=2,zi=0,Xn=1,ll=2,cl=3,hl=4,Hh=5,fn=100,Gh=101,Wh=102,Xh=103,jh=104,qh=200,Yh=201,Kh=202,$h=203,La=204,Da=205,Zh=206,Jh=207,Qh=208,eu=209,tu=210,iu=211,nu=212,su=213,ru=214,Ia=0,Na=1,Fa=2,Kn=3,Ua=4,Oa=5,Ba=6,za=7,kc=0,au=1,ou=2,Ei=0,Vc=1,Hc=2,Gc=3,Do=4,Wc=5,Xc=6,jc=7,ul="attached",lu="detached",qc=300,Mn=301,$n=302,ka=303,Va=304,Ur=306,Zn=1e3,yi=1001,Rr=1002,Tt=1003,Yc=1004,bs=1005,At=1006,yr=1007,Oi=1008,Zt=1009,Kc=1010,$c=1011,Cs=1012,Io=1013,Ai=1014,ri=1015,Hi=1016,No=1017,Fo=1018,Rs=1020,Zc=35902,Jc=35899,Qc=1021,eh=1022,ai=1023,Gi=1026,mn=1027,Uo=1028,Oo=1029,Jn=1030,Bo=1031,zo=1033,br=33776,Er=33777,Tr=33778,Ar=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,ja=36196,qa=37492,Ya=37496,Ka=37488,$a=37489,Za=37490,Ja=37491,Qa=37808,eo=37809,to=37810,io=37811,no=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,xo=36284,vo=36285,Mo=36286,Ps=2300,Ls=2301,Xr=2302,dl=2400,fl=2401,pl=2402,cu=2500,hu=0,th=1,So=2,uu=3200,ih=0,du=1,Ji="",Dt="srgb",Vt="srgb-linear",Pr="linear",tt="srgb",bn=7680,ml=519,fu=512,pu=513,mu=514,ko=515,gu=516,_u=517,Vo=518,xu=519,yo=35044,gl="300 es",bi=2e3,Lr=2001;function nh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mu(){const r=Ds("canvas");return r.style.display="block",r}const _l={};function Dr(...r){const e="THREE."+r.shift();console.log(e,...r)}function be(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Re(...r){const e="THREE."+r.shift();console.error(e,...r)}function Is(...r){const e=r.join(" ");e in _l||(_l[e]=!0,be(...r))}function Su(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const Ts=Math.PI/180,Qn=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Ne(r,e,t){return Math.max(e,Math.min(t,r))}function Ho(r,e){return(r%e+e)%e}function yu(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function bu(r,e,t){return r!==e?(t-r)/(e-r):0}function As(r,e,t){return(1-t)*r+t*e}function Eu(r,e,t,i){return As(r,e,1-Math.exp(-t*i))}function Tu(r,e=1){return e-Math.abs(Ho(r,e*2)-e)}function Au(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ru(r,e){return r+Math.random()*(e-r)}function Pu(r){return r*(.5-Math.random())}function Lu(r){r!==void 0&&(xl=r);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Du(r){return r*Ts}function Iu(r){return r*Qn}function Nu(r){return(r&r-1)===0&&r!==0}function Fu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Uu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ou(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function fi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:Ts,RAD2DEG:Qn,generateUUID:pi,clamp:Ne,euclideanModulo:Ho,mapLinear:yu,inverseLerp:bu,lerp:As,damp:Eu,pingpong:Tu,smoothstep:Au,smootherstep:wu,randInt:Cu,randFloat:Ru,randFloatSpread:Pu,seededRandom:Lu,degToRad:Du,radToDeg:Iu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Ou,normalize:it,denormalize:fi};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),E=Math.sin(b);p=Math.sin(p*b)/E,o=Math.sin(o*b)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,i=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new w,vl=new Wi;class ke{constructor(e,t,i,n,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],b=n[1],E=n[4],y=n[7],A=n[2],R=n[5],C=n[8];return s[0]=a*_+o*b+l*A,s[3]=a*m+o*E+l*R,s[6]=a*p+o*y+l*C,s[1]=c*_+h*b+u*A,s[4]=c*m+h*E+u*R,s[7]=c*p+h*y+u*C,s[2]=d*_+f*b+g*A,s[5]=d*m+f*E+g*R,s[8]=d*p+f*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new ke,Ml=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const r={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Pr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Vt]:{primaries:e,whitePoint:i,transfer:Pr,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),r}const je=Bu();function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let En;class zu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{En===void 0&&(En=Ds("canvas")),En.width=e.width,En.height=e.height;const n=En.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=En}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Yr(n[a].image)):s.push(Yr(n[a]))}else s=Yr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?zu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let Vu=0;const Kr=new w;class wt extends Sn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=yi,n=yi,s=At,a=Oi,o=ai,l=Zt,c=wt.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=pi(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=qc;wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(f+1)/2,A=(p+1)/2,R=(h+d)/4,C=(u+_)/4,U=(g+m)/4;return E>y&&E>A?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=R/i,s=C/i):y>A?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=R/n,s=U/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=C/s,n=U/s),this.set(i,n,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hu extends Sn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:i.depth},s=new wt(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Go(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Hu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sh extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Xs.subVectors(this.max,cs),Tn.subVectors(e.a,cs),An.subVectors(e.b,cs),wn.subVectors(e.c,cs),Xi.subVectors(An,Tn),ji.subVectors(wn,An),rn.subVectors(Tn,wn);let t=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-rn.z,rn.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,rn.z,0,-rn.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-rn.y,rn.x,0];return!$r(t,Tn,An,wn,Xs)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Tn,An,wn,Xs))?!1:(js.crossVectors(Xi,ji),t=[js.x,js.y,js.z],$r(t,Tn,An,wn,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new w,new w,new w,new w,new w,new w,new w,new w],oi=new w,Ws=new dt,Tn=new w,An=new w,wn=new w,Xi=new w,ji=new w,rn=new w,cs=new w,Xs=new w,js=new w,an=new w;function $r(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){an.fromArray(r,s);const o=n.x*Math.abs(an.x)+n.y*Math.abs(an.y)+n.z*Math.abs(an.z),l=e.dot(an),c=t.dot(an),h=i.dot(an);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Wu=new dt,hs=new w,Zr=new w;class Qt{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(hs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Zr)),this.expandByPoint(hs.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new w,Jr=new w,qs=new w,qi=new w,Qr=new w,Ys=new w,ea=new w;class Bs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Jr.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=qi.dot(this.direction),l=-qi.dot(qs),c=qi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Jr).addScaledVector(qs,d),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),n=Di.dot(Di)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,n,s){Qr.subVectors(t,e),Ys.subVectors(i,e),ea.crossVectors(Qr,Ys);let a=this.direction.dot(ea),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(Ys.crossVectors(qi,Ys));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(qi));if(c<0||l+c>a)return null;const h=-o*qi.dot(ea);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,i,n,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,n=1/Cn.setFromMatrixColumn(e,0).length(),s=1/Cn.setFromMatrixColumn(e,1).length(),a=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,ju)}lookAt(e,t,i){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yi.crossVectors(i,Yt),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yi.crossVectors(i,Yt)),Yi.normalize(),Ks.crossVectors(Yt,Yi),n[0]=Yi.x,n[4]=Ks.x,n[8]=Yt.x,n[1]=Yi.y,n[5]=Ks.y,n[9]=Yt.y,n[2]=Yi.z,n[6]=Ks.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],E=i[7],y=i[11],A=i[15],R=n[0],C=n[4],U=n[8],v=n[12],S=n[1],L=n[5],H=n[9],k=n[13],q=n[2],j=n[6],B=n[10],N=n[14],W=n[3],ie=n[7],te=n[11],ue=n[15];return s[0]=a*R+o*S+l*q+c*W,s[4]=a*C+o*L+l*j+c*ie,s[8]=a*U+o*H+l*B+c*te,s[12]=a*v+o*k+l*N+c*ue,s[1]=h*R+u*S+d*q+f*W,s[5]=h*C+u*L+d*j+f*ie,s[9]=h*U+u*H+d*B+f*te,s[13]=h*v+u*k+d*N+f*ue,s[2]=g*R+_*S+m*q+p*W,s[6]=g*C+_*L+m*j+p*ie,s[10]=g*U+_*H+m*B+p*te,s[14]=g*v+_*k+m*N+p*ue,s[3]=b*R+E*S+y*q+A*W,s[7]=b*C+E*L+y*j+A*ie,s[11]=b*U+E*H+y*B+A*te,s[15]=b*v+E*k+y*N+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],b=l*f-c*d,E=o*f-c*u,y=o*d-l*u,A=a*f-c*h,R=a*d-l*h,C=a*u-o*h;return t*(_*b-m*E+p*y)-i*(g*b-m*A+p*R)+n*(g*E-_*A+p*C)-s*(g*y-_*R+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,E=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=t*b+i*E+n*y+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*p-i*d*p)*C,e[2]=(o*m*s-_*l*s+_*n*c-i*m*c-o*n*p+i*l*p)*C,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*C,e[4]=E*C,e[5]=(h*m*s-g*d*s+g*n*f-t*m*f-h*n*p+t*d*p)*C,e[6]=(g*l*s-a*m*s-g*n*c+t*m*c+a*n*p-t*l*p)*C,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*C,e[8]=y*C,e[9]=(g*u*s-h*_*s-g*i*f+t*_*f+h*i*p-t*u*p)*C,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*C,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*C,e[12]=A*C,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*m+t*u*m)*C,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*m-t*o*m)*C,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,b=l*c,E=l*h,y=l*u,A=i.x,R=i.y,C=i.z;return n[0]=(1-(_+p))*A,n[1]=(f+y)*A,n[2]=(g-E)*A,n[3]=0,n[4]=(f-y)*R,n[5]=(1-(d+p))*R,n[6]=(m+b)*R,n[7]=0,n[8]=(g+E)*C,n[9]=(m-b)*C,n[10]=(1-(d+_))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Cn.set(n[0],n[1],n[2]).length();const a=Cn.set(n[4],n[5],n[6]).length(),o=Cn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),li.copy(this);const c=1/s,h=1/a,u=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=bi,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===bi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Lr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=bi,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===bi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Lr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cn=new w,li=new Ee,Xu=new w(0,0,0),ju=new w(1,1,1),Yi=new w,Ks=new w,Yt=new w,yl=new Ee,bl=new Wi;class wi{constructor(e=0,t=0,i=0,n=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const El=new w,Rn=new Wi,Ii=new Ee,$s=new w,us=new w,Yu=new w,Ku=new Wi,Tl=new w(1,0,0),Al=new w(0,1,0),wl=new w(0,0,1),Cl={type:"added"},$u={type:"removed"},Pn={type:"childadded",child:null},ta={type:"childremoved",child:null};class qe extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const e=new w,t=new wi,i=new Wi,n=new w(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ke}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(us,$s,this.up):Ii.lookAt($s,us,this.up),this.quaternion.setFromRotationMatrix(Ii),n&&(Ii.extractRotation(n.matrixWorld),Rn.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cl),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($u),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cl),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}qe.DEFAULT_UP=new w(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new w,Ni=new w,ia=new w,Fi=new w,Ln=new w,Dn=new w,Rl=new w,na=new w,sa=new w,ra=new w,aa=new pt,oa=new pt,la=new pt;class si{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ci.subVectors(e,t),n.cross(ci);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ci.subVectors(n,t),Ni.subVectors(i,t),ia.subVectors(e,t);const a=ci.dot(ci),o=ci.dot(Ni),l=ci.dot(ia),c=Ni.dot(Ni),h=Ni.dot(ia),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return aa.setScalar(0),oa.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(e,t),oa.fromBufferAttribute(e,i),la.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(aa,s.x),a.addScaledVector(oa,s.y),a.addScaledVector(la,s.z),a}static isFrontFacing(e,t,i,n){return ci.subVectors(i,t),Ni.subVectors(e,t),ci.cross(Ni).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ci.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Ln.subVectors(n,i),Dn.subVectors(s,i),na.subVectors(e,i);const l=Ln.dot(na),c=Dn.dot(na);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,n);const h=Ln.dot(sa),u=Dn.dot(sa);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ln,a);ra.subVectors(e,s);const f=Ln.dot(ra),g=Dn.dot(ra);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Dn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rl.subVectors(s,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Rl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Ln,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ca(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=Ho(e,1),t=Ne(t,0,1),i=Ne(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ca(a,s,e+1/3),this.g=ca(a,s,e),this.b=ca(a,s,e-1/3)}return je.colorSpaceToWorking(this,n),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return je.workingToColorSpace(Nt.copy(this),e),Math.round(Ne(Nt.r*255,0,255))*65536+Math.round(Ne(Nt.g*255,0,255))*256+Math.round(Ne(Nt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,n=Nt.g,s=Nt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Dt){je.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,n=Nt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Zs);const i=As(Ki.h,Zs.h,t),n=As(Ki.s,Zs.s,t),s=As(Ki.l,Zs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Pe;Pe.NAMES=rh;let Zu=0;class mi extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Xn,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bn,this.stencilZFail=bn,this.stencilZPass=bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new w,Js=new De;let Ju=0;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yo,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class ah extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oh extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qu=0;const ti=new Ee,ha=new qe,In=new w,Kt=new dt,ds=new dt,Lt=new w;class Et extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?oh:ah)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Kt.min,ds.min),Kt.expandByPoint(Lt),Lt.addVectors(Kt.max,ds.max),Kt.expandByPoint(Lt)):(Kt.expandByPoint(ds.min),Kt.expandByPoint(ds.max))}Kt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(In.fromBufferAttribute(e,c),Lt.add(In)),n=Math.max(n,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new w,l[U]=new w;const c=new w,h=new w,u=new w,d=new De,f=new De,g=new De,_=new w,m=new w;function p(U,v,S){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);!isFinite(L)||(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[U].add(_),o[v].add(_),o[S].add(_),l[U].add(m),l[v].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,v=b.length;U<v;++U){const S=b[U],L=S.start,H=S.count;for(let k=L,q=L+H;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new w,y=new w,A=new w,R=new w;function C(U){A.fromBufferAttribute(n,U),R.copy(A);const v=o[U];E.copy(v),E.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(R,v);const L=y.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,v=b.length;U<v;++U){const S=b[U],L=S.start,H=S.count;for(let k=L,q=L+H;k<q;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new zt(d,h,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pl=new Ee,on=new Bs,Qs=new Qt,Ll=new w,er=new w,tr=new w,ir=new w,ua=new w,nr=new w,Dl=new w,sr=new w;class Xt extends qe{constructor(e=new Et,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ua.fromBufferAttribute(u,e),a?nr.addScaledVector(ua,h):nr.addScaledVector(ua.sub(t),h))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),on.copy(e.ray).recast(e.near),!(Qs.containsPoint(on.origin)===!1&&(on.intersectSphere(Qs,Ll)===null||on.origin.distanceToSquared(Ll)>(e.far-e.near)**2))&&(Pl.copy(s).invert(),on.copy(e.ray).applyMatrix4(Pl),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,on)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,A=E;y<A;y+=3){const R=o.getX(y),C=o.getX(y+1),U=o.getX(y+2);n=rr(this,p,e,i,c,h,u,R,C,U),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);n=rr(this,a,e,i,c,h,u,b,E,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,A=E;y<A;y+=3){const R=y,C=y+1,U=y+2;n=rr(this,p,e,i,c,h,u,R,C,U),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,y=m+2;n=rr(this,a,e,i,c,h,u,b,E,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ed(r,e,t,i,n,s,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Vi,o),l===null)return null;sr.copy(o),sr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:r}}function rr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,er),r.getVertexPosition(l,tr),r.getVertexPosition(c,ir);const h=ed(r,e,t,i,er,tr,ir,Dl);if(h){const u=new w;si.getBarycoord(Dl,er,tr,ir,u),n&&(h.uv=si.getInterpolatedAttribute(n,o,l,c,u,new De)),s&&(h.uv1=si.getInterpolatedAttribute(s,o,l,c,u,new De)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};si.getNormal(er,tr,ir,d.normal),h.face=d,h.barycoord=u}return h}class zs extends Et{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(_,m,p,b,E,y,A,R,C,U,v){const S=y/C,L=A/U,H=y/2,k=A/2,q=R/2,j=C+1,B=U+1;let N=0,W=0;const ie=new w;for(let te=0;te<B;te++){const ue=te*L-k;for(let Oe=0;Oe<j;Oe++){const Be=Oe*S-H;ie[_]=Be*b,ie[m]=ue*E,ie[p]=q,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=R>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Oe/C),u.push(1-te/U),N+=1}}for(let te=0;te<U;te++)for(let ue=0;ue<C;ue++){const Oe=d+ue+j*te,Be=d+ue+j*(te+1),mt=d+(ue+1)+j*(te+1),ft=d+(ue+1)+j*te;l.push(Oe,Be,ft),l.push(Be,mt,ft),W+=6}o.addGroup(f,W,v),f+=W,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const i=es(r[t]);for(const n in i)e[n]=i[n]}return e}function td(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const id={clone:es,merge:Bt};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ch extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new w,Il=new De,Nl=new De;class Ft extends ch{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qn*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Nl),t.subVectors(Nl,Il)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=-90,Fn=1;class rd extends qe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ft(Nn,Fn,e,t);n.layers=this.layers,this.add(n);const s=new Ft(Nn,Fn,e,t);s.layers=this.layers,this.add(s);const a=new Ft(Nn,Fn,e,t);a.layers=this.layers,this.add(a);const o=new Ft(Nn,Fn,e,t);o.layers=this.layers,this.add(o);const l=new Ft(Nn,Fn,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Nn,Fn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hh extends wt{constructor(e=[],t=Mn,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uh extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new hh(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zs(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:zi});s.uniforms.tEquirect.value=t;const a=new Xt(n,s),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=At),new rd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}class Qi extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ad={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class od extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new w;class Ns{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ns(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fh extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Un;const fs=new w,On=new w,Bn=new w,zn=new De,ps=new De,ph=new Ee,ar=new w,ms=new w,or=new w,Fl=new De,fa=new De,Ul=new De;class ld extends qe{constructor(e=new fh){if(super(),this.isSprite=!0,this.type="Sprite",Un===void 0){Un=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dh(t,5);Un.setIndex([0,1,2,0,2,3]),Un.setAttribute("position",new Ns(i,3,0,!1)),Un.setAttribute("uv",new Ns(i,2,3,!1))}this.geometry=Un,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),On.setFromMatrixScale(this.matrixWorld),ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&On.multiplyScalar(-Bn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;lr(ar.set(-.5,-.5,0),Bn,a,On,n,s),lr(ms.set(.5,-.5,0),Bn,a,On,n,s),lr(or.set(.5,.5,0),Bn,a,On,n,s),Fl.set(0,0),fa.set(1,0),Ul.set(1,1);let o=e.ray.intersectTriangle(ar,ms,or,!1,fs);if(o===null&&(lr(ms.set(-.5,.5,0),Bn,a,On,n,s),fa.set(0,1),o=e.ray.intersectTriangle(ar,or,ms,!1,fs),o===null))return;const l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||t.push({distance:l,point:fs.clone(),uv:si.getInterpolation(fs,ar,ms,or,Fl,fa,Ul,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lr(r,e,t,i,n,s){zn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ps.x=s*zn.x-n*zn.y,ps.y=n*zn.x+s*zn.y):ps.copy(zn),r.copy(e),r.x+=ps.x,r.y+=ps.y,r.applyMatrix4(ph)}const Ol=new w,Bl=new pt,zl=new pt,cd=new w,kl=new Ee,cr=new w,pa=new Qt,Vl=new Ee,ma=new Bs;class hd extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ul,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,cr),this.boundingSphere.expandByPoint(cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),e.ray.intersectsSphere(pa)!==!1&&(Vl.copy(n).invert(),ma.copy(e.ray).applyMatrix4(Vl),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lu?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Bl.fromBufferAttribute(n.attributes.skinIndex,e),zl.fromBufferAttribute(n.attributes.skinWeight,e),Ol.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=zl.getComponent(s);if(a!==0){const o=Bl.getComponent(s);kl.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(cd.copy(Ol).applyMatrix4(kl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mh extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xo extends wt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Tt,h=Tt,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=new Ee,ud=new Ee;class jo{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ud;Hl.multiplyMatrices(o,t[s]),Hl.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Xo(t,e,e,ai,ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(be("Skeleton: No bone found with UUID:",s),a=new mh),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class bo extends zt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kn=new Ee,Gl=new Ee,hr=[],Wl=new dt,dd=new Ee,gs=new Xt,_s=new Qt;class fd extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,dd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kn),Wl.copy(e.boundingBox).applyMatrix4(kn),this.boundingBox.union(Wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kn),_s.copy(e.boundingSphere).applyMatrix4(kn),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(i),e.ray.intersectsSphere(_s)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,kn),Gl.multiplyMatrices(i,kn),gs.matrixWorld=Gl,gs.raycast(e,hr);for(let a=0,o=hr.length;a<o;a++){const l=hr[a];l.instanceId=s,l.object=this,t.push(l)}hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xo(new Float32Array(n*this.count),n,this.count,Uo,ri));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ga=new w,pd=new w,md=new ke;class dn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ga.subVectors(i,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||md.getNormalMatrix(e),n=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ln=new Qt,gd=new De(.5,.5),ur=new w;class qo{constructor(e=new dn,t=new dn,i=new dn,n=new dn,s=new dn,a=new dn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){const n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],b=s[12],E=s[13],y=s[14],A=s[15];if(n[0].setComponents(c-a,f-h,p-g,A-b).normalize(),n[1].setComponents(c+a,f+h,p+g,A+b).normalize(),n[2].setComponents(c+o,f+u,p+_,A+E).normalize(),n[3].setComponents(c-o,f-u,p-_,A-E).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,p-m,A-y).normalize();else if(n[4].setComponents(c-l,f-d,p-m,A-y).normalize(),t===bi)n[5].setComponents(c+l,f+d,p+m,A+y).normalize();else if(t===Lr)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ln)}intersectsSprite(e){ln.center.set(0,0,0);const t=gd.distanceTo(e.center);return ln.radius=.7071067811865476+t,ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ur.x=n.normal.x>0?e.max.x:e.min.x,ur.y=n.normal.y>0?e.max.y:e.min.y,ur.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _n extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ir=new w,Nr=new w,Xl=new Ee,xs=new Bs,dr=new Qt,_a=new w,jl=new w;class qn extends qe{constructor(e=new Et,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Ir.fromBufferAttribute(t,n-1),Nr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ir.distanceTo(Nr);e.setAttribute("lineDistance",new kt(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(n),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;Xl.copy(n).invert(),xs.copy(e.ray).applyMatrix4(Xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),E=fr(this,e,xs,l,p,b,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=fr(this,e,xs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=fr(this,e,xs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=fr(this,e,xs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fr(r,e,t,i,n,s,a){const o=r.geometry.attributes.position;if(Ir.fromBufferAttribute(o,n),Nr.fromBufferAttribute(o,s),t.distanceSqToSegment(Ir,Nr,_a,jl)>i)return;_a.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(_a);if(!(c<e.near||c>e.far))return{distance:c,point:jl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const ql=new w,Yl=new w;class Yo extends qn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)ql.fromBufferAttribute(t,n),Yl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ql.distanceTo(Yl);e.setAttribute("lineDistance",new kt(i,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends qn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gh extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kl=new Ee,Eo=new Bs,pr=new Qt,mr=new w;class xd extends qe{constructor(e=new Et,t=new gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(n),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;Kl.copy(n).invert(),Eo.copy(e.ray).applyMatrix4(Kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);mr.fromBufferAttribute(u,m),$l(mr,m,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)mr.fromBufferAttribute(u,g),$l(mr,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $l(r,e,t,i,n,s,a){const o=Eo.distanceSqToPoint(r);if(o<t){const l=new w;Eo.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vd extends wt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends wt{constructor(e,t,i=Ai,n,s,a,o=Tt,l=Tt,c,h=Gi,u=1){if(h!==Gi&&h!==mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Md extends Fs{constructor(e,t=Ai,i=Mn,n,s,a=Tt,o=Tt,l,c=Gi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _h extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sd{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new De:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new w,n=[],s=[],a=[],o=new w,l=new Ee;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ne(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Ne(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wr extends Sd{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new De){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Or extends Et{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let E=0;E<c;E++){const y=E*u-s;g.push(y,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const E=b+c*p,y=b+c*(p+1),A=b+1+c*(p+1),R=b+1+c*p;f.push(E,y,R),f.push(y,A,R)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class yd extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends Us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bd extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ed extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Td(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Zl(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function xh(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class ks{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ad extends ks{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dl,endingEnd:dl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:s=e,o=2*t-i;break;case pl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fl:a=e,l=2*i-t;break;case pl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+b*a[c+A]+E*a[l+A]+y*a[u+A];return s}}class wd extends ks{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Cd extends ks{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ad(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Xr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Xr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Re("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&vu(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Xr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Ls;class ss extends gi{constructor(e,t,i){super(e,t,i)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ps;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends gi{constructor(e,t,i,n){super(e,t,i,n)}}vh.prototype.ValueTypeName="color";class ts extends gi{constructor(e,t,i,n){super(e,t,i,n)}}ts.prototype.ValueTypeName="number";class Rd extends ks{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Wi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class is extends gi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Rd(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends gi{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ps;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends gi{constructor(e,t,i,n){super(e,t,i,n)}}ns.prototype.ValueTypeName="vector";class Pd{constructor(e="",t=-1,i=[],n=cu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Dd(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(gi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Td(l);l=Zl(l,1,h),c=Zl(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ts(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];xh(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}n.push(new ts(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(ns,f+".position",d,"pos",n),i(is,f+".quaternion",d,"rot",n),i(ns,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ld(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return vh;case"quaternion":return is;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Dd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ld(r.type);if(r.times===void 0){const t=[],i=[];xh(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Id{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nd=new Id;class as{constructor(e){this.manager=e!==void 0?e:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}as.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class Fd extends Error{constructor(e,t){super(e),this.response=t}}class Mh extends as{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:n});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ui[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,C=h.length;R<C;R++){const U=h[R];U.onProgress&&U.onProgress(A)}p.enqueue(y),b()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Fd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bi.add(`file:${e}`,c);const h=Ui[e];delete Ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vn=new WeakMap;class Ud extends as{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Vn.get(a);u===void 0&&(u=[],Vn.set(a,u)),u.push({onLoad:t,onError:n})}return a}const o=Ds("img");function l(){h(),t&&t(this);const u=Vn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Vn.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),Bi.remove(`image:${e}`);const d=Vn.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Vn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Od extends as{constructor(e){super(e)}load(e,t,i,n){const s=new wt,a=new Ud(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Vs extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Jl extends Vs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xa=new Ee,Ql=new w,ec=new w;class Ko{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bd extends Ko{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Qn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zd extends Vs{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class kd extends Ko{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}}class Vd extends Vs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Br extends ch{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hd extends Ko{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class en extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class To extends Vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ws{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const va=new WeakMap;class Gd extends as{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(va.has(a)===!0)n&&n(va.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),va.set(l,c),Bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wd extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $o="\\[\\]\\.:\\/",Xd=new RegExp("["+$o+"]","g"),Zo="[^"+$o+"]",jd="[^"+$o.replace("\\.","")+"]",qd=/((?:WC+[\/:])*)/.source.replace("WC",Zo),Yd=/(WCOD+)?/.source.replace("WCOD",jd),Kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zo),$d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zo),Zd=new RegExp("^"+qd+Yd+Kd+$d+"$"),Jd=["material","materials","bones","map"];class Qd{constructor(e,t,i){const n=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xd,"")}static parseTrackName(e){const t=Zd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Jd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Qd;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tc=new Ee;class zr{constructor(e,t,i=0,n=1/0){this.ray=new Bs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tc),this}intersectObject(e,t=!0,i=[]){return Ao(e,this,i,t),i.sort(ic),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Ao(e[n],this,i,t);return i.sort(ic),i}}function ic(r,e){return r.distance-e.distance}function Ao(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Ao(s[a],e,t,!0)}}const nc=new w,_r=new w,Hn=new w,Gn=new w,Ma=new w,ef=new w,tf=new w;class nf{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nc.subVectors(e,this.start),_r.subVectors(this.end,this.start);const i=_r.dot(_r);let s=_r.dot(nc)/i;return t&&(s=Ne(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=ef,i=tf){const n=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,h=e.end;Hn.subVectors(c,o),Gn.subVectors(h,l),Ma.subVectors(o,l);const u=Hn.dot(Hn),d=Gn.dot(Gn),f=Gn.dot(Ma);if(u<=n&&d<=n)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(u<=n)s=0,a=f/d,a=Ne(a,0,1);else{const g=Hn.dot(Ma);if(d<=n)a=0,s=Ne(-g/u,0,1);else{const _=Hn.dot(Gn),m=u*d-_*_;m!==0?s=Ne((_*f-g*d)/m,0,1):s=0,a=(_*s+f)/d,a<0?(a=0,s=Ne(-g/u,0,1)):a>1&&(a=1,s=Ne((_-g)/u,0,1))}}return t.copy(o).add(Hn.multiplyScalar(s)),i.copy(l).add(Gn.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Sh extends Yo{constructor(e=10,t=10,i=4473924,n=8947848){i=new Pe(i),n=new Pe(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?i:n;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Et;h.setAttribute("position",new kt(l,3)),h.setAttribute("color",new kt(c,3));const u=new _n({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sf extends Yo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Et;n.setAttribute("position",new kt(t,3)),n.setAttribute("color",new kt(i,3));const s=new _n({vertexColors:!0,toneMapped:!1});super(n,s),this.type="AxesHelper"}setColors(e,t,i){const n=new Pe,s=this.geometry.attributes.color.array;return n.set(e),n.toArray(s,0),n.toArray(s,3),n.set(t),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class rf extends Sn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sc(r,e,t,i){const n=af(i);switch(t){case Qc:return r*e;case Uo:return r*e/n.components*n.byteLength;case Oo:return r*e/n.components*n.byteLength;case Jn:return r*e*2/n.components*n.byteLength;case Bo:return r*e*2/n.components*n.byteLength;case eh:return r*e*3/n.components*n.byteLength;case ai:return r*e*4/n.components*n.byteLength;case zo:return r*e*4/n.components*n.byteLength;case br:case Er:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Ar:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(r,16)*Math.max(e,8)/4;case Ha:case Wa:return Math.max(r,8)*Math.max(e,8)/2;case ja:case qa:case Ka:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Za:case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _o:case xo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vo:case Mo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function af(r){switch(r){case Zt:case Kc:return{byteLength:1,components:1};case Cs:case $c:case Hi:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Ai:case Io:case ri:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window!="undefined"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function of(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:vf,bsdfs:Mf,iridescence_fragment:Sf,bumpmap_pars_fragment:yf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Af,color_fragment:wf,color_pars_fragment:Cf,color_pars_vertex:Rf,color_vertex:Pf,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:If,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Uf,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:zf,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Hf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:jf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:$f,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:ip,lights_phong_fragment:np,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:Sp,morphnormal_vertex:yp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:wp,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Np,opaque_fragment:Fp,packing:Up,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:jp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Kp,skinnormal_vertex:$p,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:im,uv_pars_fragment:nm,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distance_vert:mm,distance_frag:gm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:ym,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:wm,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Im,meshtoon_frag:Nm,points_vert:Fm,points_frag:Um,shadow_vert:Om,shadow_frag:Bm,sprite_vert:zm,sprite_frag:km},le={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Mi={basic:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Bt([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Bt([le.lights,le.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Mi.physical={uniforms:Bt([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const xr={r:0,b:0,g:0},cn=new wi,Vm=new Ee;function Hm(r,e,t,i,n,s,a){const o=new Pe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?p(o,l):A&&A.isColor&&(p(A,1),y=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Ur)?(h===void 0&&(h=new Xt(new zs(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:es(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),cn.copy(y.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(cn)),h.material.toneMapped=je.getTransfer(A.colorSpace)!==tt,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Xt(new Or(2,2),new Ci({name:"BackgroundMaterial",uniforms:es(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(A.colorSpace)!==tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(xr,lh(r)),i.buffers.color.setClear(xr.r,xr.g,xr.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:b}}function Gm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(S,L,H,k,q){let j=!1;const B=u(k,H,L);s!==B&&(s=B,c(s.object)),j=f(S,k,H,q),j&&g(S,k,H,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(S,L,H,k),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,L,H){const k=H.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let j=q[L.id];j===void 0&&(j={},q[L.id]=j);let B=j[k];return B===void 0&&(B=d(l()),j[k]=B),B}function d(S){const L=[],H=[],k=[];for(let q=0;q<t;q++)L[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,L,H,k){const q=s.attributes,j=L.attributes;let B=0;const N=H.getAttributes();for(const W in N)if(N[W].location>=0){const te=q[W];let ue=j[W];if(ue===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(S,L,H,k){const q={},j=L.attributes;let B=0;const N=H.getAttributes();for(const W in N)if(N[W].location>=0){let te=j[W];te===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),q[W]=ue,B++}s.attributes=q,s.attributesNum=B,s.index=k}function _(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const H=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;H[S]=1,k[S]===0&&(r.enableVertexAttribArray(S),k[S]=1),q[S]!==L&&(r.vertexAttribDivisor(S,L),q[S]=L)}function b(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,k=L.length;H<k;H++)L[H]!==S[H]&&(r.disableVertexAttribArray(H),L[H]=0)}function E(S,L,H,k,q,j,B){B===!0?r.vertexAttribIPointer(S,L,H,q,j):r.vertexAttribPointer(S,L,H,k,q,j)}function y(S,L,H,k){_();const q=k.attributes,j=H.getAttributes(),B=L.defaultAttributeValues;for(const N in j){const W=j[N];if(W.location>=0){let ie=q[N];if(ie===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const te=ie.normalized,ue=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;const Be=Oe.buffer,mt=Oe.type,ft=Oe.bytesPerElement,Y=mt===r.INT||mt===r.UNSIGNED_INT||ie.gpuType===Io;if(ie.isInterleavedBufferAttribute){const Z=ie.data,pe=Z.stride,ze=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)p(W.location+_e,Z.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let _e=0;_e<W.locationSize;_e++)E(W.location+_e,ue/W.locationSize,mt,te,pe*ft,(ze+ue/W.locationSize*_e)*ft,Y)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)p(W.location+Z,ie.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Z=0;Z<W.locationSize;Z++)E(W.location+Z,ue/W.locationSize,mt,te,ue*ft,ue/W.locationSize*Z*ft,Y)}}else if(B!==void 0){const te=B[N];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(W.location,te);break;case 3:r.vertexAttrib3fv(W.location,te);break;case 4:r.vertexAttrib4fv(W.location,te);break;default:r.vertexAttrib1fv(W.location,te)}}}}b()}function A(){U();for(const S in i){const L=i[S];for(const H in L){const k=L[H];for(const q in k)h(k[q].object),delete k[q];delete L[H]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const k=L[H];for(const q in k)h(k[q].object),delete k[q];delete L[H]}delete i[S.id]}function C(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const k=H[S.id];for(const q in k)h(k[q].object),delete k[q];delete H[S.id]}}function U(){v(),a=!0,s!==n&&(s=n,c(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Wm(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==ai&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!U)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),R=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:R}}function jm(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new dn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:i,E=b*4;let y=p.clippingState||null;l.value=y,y=h(g,d,E,f);for(let A=0;A!==E;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function qm(r){let e=new WeakMap;function t(a,o){return o===ka?a.mapping=Mn:o===Va&&(a.mapping=$n),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ka||o===Va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uh(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tn=4,rc=[.125,.215,.35,.446,.526,.582],pn=20,Ym=256,vs=new Br,ac=new Pe;let Sa=null,ya=0,ba=0,Ea=!1;const Km=new w;class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:a=256,position:o=Km}=s;Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ya,ba),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Wn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Hi,format:ai,colorSpace:Vt,depthBuffer:!1},n=lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$m(s)),this._blurMaterial=Jm(s,e,t),this._ggxMaterial=Zm(s,e,t)}return n}_compileMaterial(e){const t=new Xt(new Et,e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,i,n,s){const l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ac),u.toneMapping=Ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new zs,new gn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(ac),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const A=this._cubeSize;Wn(n,y*A,E>2?A:0,A,A),u.setRenderTarget(n),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Mn||e.mapping===$n;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-tn?i-g+tn:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Wn(s,m,p,3*_,2*_),n.setRenderTarget(s),n.render(o,vs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Wn(e,m,p,3*_,2*_),n.setRenderTarget(e),n.render(o,vs)}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*pn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):pn;m>pn&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pn}`);const p=[];let b=0;for(let C=0;C<pn;++C){const U=C/_,v=Math.exp(-U*U/2);p.push(v),C===0?b+=v:C<m&&(b+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const y=this._sizeLods[n],A=3*y*(n>E-tn?n-E+tn:0),R=4*(this._cubeSize-y);Wn(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(u,vs)}}function $m(r){const e=[],t=[],i=[];let n=r;const s=r-tn+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-tn?l=rc[a-r+tn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,U=R>2?0:-1,v=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(v,_*g*R),E.set(d,m*g*R);const S=[R,R,R,R,R,R];y.set(S,p*g*R)}const A=new Et;A.setAttribute("position",new zt(b,_)),A.setAttribute("uv",new zt(E,m)),A.setAttribute("faceIndex",new zt(y,p)),i.push(new Xt(A,null)),n>tn&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function lc(r,e,t){const i=new Ti(r,e,t);return i.texture.mapping=Ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Zm(r,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Jm(r,e,t){const i=new Float32Array(pn),n=new w(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function cc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function hc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function kr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ka||l===Va,h=l===Mn||l===$n;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new oc(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new oc(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function eg(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Is("WebGLRenderer: "+i+" extension not supported."),n}}}function tg(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){const A=b[E+0],R=b[E+1],C=b[E+2];d.push(A,R,R,C,C,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const A=E+0,R=E+1,C=E+2;d.push(A,R,R,C,C,A)}}else return;const m=new(nh(d)?oh:ah)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ig(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ng(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Re("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function sg(r,e,t){const i=new WeakMap,n=new pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*u),U=new sh(C,A,R,u);U.type=ri,U.needsUpdate=!0;const v=y*4;for(let L=0;L<u;L++){const H=p[L],k=b[L],q=E[L],j=A*R*4*L;for(let B=0;B<H.count;B++){const N=B*v;g===!0&&(n.fromBufferAttribute(H,B),C[j+N+0]=n.x,C[j+N+1]=n.y,C[j+N+2]=n.z,C[j+N+3]=0),_===!0&&(n.fromBufferAttribute(k,B),C[j+N+4]=n.x,C[j+N+5]=n.y,C[j+N+6]=n.z,C[j+N+7]=0),m===!0&&(n.fromBufferAttribute(q,B),C[j+N+8]=n.x,C[j+N+9]=n.y,C[j+N+10]=n.z,C[j+N+11]=q.itemSize===4?n.w:1)}}d={count:u,texture:U,size:new De(A,R)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function rg(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ag={[Vc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function og(r,e,t,i,n){const s=new Ti(e,t,{type:r,depthBuffer:i,stencilBuffer:n}),a=new Ti(e,t,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),o=new Et;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new yd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(o,l),h=new Br(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(b,E){s.setSize(b,E),a.setSize(b,E);for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(b,E)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const E=s.width,y=s.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(E,y)}},this.begin=function(b,E){if(f||b.toneMapping===Ei&&m.length===0)return!1;if(_=E,E!==null){const y=E.width,A=E.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return p===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=Ei,!0},this.hasRenderPass=function(){return p},this.end=function(b,E){b.toneMapping=g,f=!0;let y=s,A=a;for(let R=0;R<m.length;R++){const C=m[R];if(C.enabled!==!1&&(C.render(b,A,y,E),C.needsSwap!==!1)){const U=y;y=A,A=U}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},je.getTransfer(u)===tt&&(l.defines.SRGB_TRANSFER="");const R=ag[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const bh=new wt,wo=new Fs(1,1),Eh=new sh,Th=new Gu,Ah=new hh,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function os(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=uc[n];if(s===void 0&&(s=new Float32Array(n),uc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Vr(r,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function lg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function dg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;mc.set(i),r.uniformMatrix2fv(this.addr,!1,mc),Rt(t,i)}}function fg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;pc.set(i),r.uniformMatrix3fv(this.addr,!1,pc),Rt(t,i)}}function pg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;fc.set(i),r.uniformMatrix4fv(this.addr,!1,fc),Rt(t,i)}}function mg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function _g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function vg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function bg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(wo.compareFunction=t.isReversedDepthBuffer()?Vo:ko,s=wo):s=bh,t.setTexture2D(e||s,n)}function Eg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Th,n)}function Tg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ah,n)}function Ag(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Eh,n)}function wg(r){switch(r){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(r,e){r.uniform1fv(this.addr,e)}function Rg(r,e){const t=os(e,this.size,2);r.uniform2fv(this.addr,t)}function Pg(r,e){const t=os(e,this.size,3);r.uniform3fv(this.addr,t)}function Lg(r,e){const t=os(e,this.size,4);r.uniform4fv(this.addr,t)}function Dg(r,e){const t=os(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ig(r,e){const t=os(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ng(r,e){const t=os(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fg(r,e){r.uniform1iv(this.addr,e)}function Ug(r,e){r.uniform2iv(this.addr,e)}function Og(r,e){r.uniform3iv(this.addr,e)}function Bg(r,e){r.uniform4iv(this.addr,e)}function zg(r,e){r.uniform1uiv(this.addr,e)}function kg(r,e){r.uniform2uiv(this.addr,e)}function Vg(r,e){r.uniform3uiv(this.addr,e)}function Hg(r,e){r.uniform4uiv(this.addr,e)}function Gg(r,e,t){const i=this.cache,n=e.length,s=Vr(t,n);Ct(i,s)||(r.uniform1iv(this.addr,s),Rt(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=wo:a=bh;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function Wg(r,e,t){const i=this.cache,n=e.length,s=Vr(t,n);Ct(i,s)||(r.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Th,s[a])}function Xg(r,e,t){const i=this.cache,n=e.length,s=Vr(t,n);Ct(i,s)||(r.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ah,s[a])}function jg(r,e,t){const i=this.cache,n=e.length,s=Vr(t,n);Ct(i,s)||(r.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Eh,s[a])}function qg(r){switch(r){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ig;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return jg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class Kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class $g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function gc(r,e){r.seq.push(e),r.map[e.id]=e}function Zg(r,e,t){const i=r.name,n=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),a=Ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){gc(t,c===void 0?new Yg(o,r,e):new Kg(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new $g(o),gc(t,u)),t=u}}}class Cr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Zg(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function _c(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Jg=37297;let Qg=0;function e_(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xc=new ke;function t_(r){je._getMatrix(xc,je.workingColorSpace,r);const e=`mat3( ${xc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case Pr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vc(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+e_(r.getShaderSource(e),o)}else return s}function i_(r,e){const t=t_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const n_={[Vc]:"Linear",[Hc]:"Reinhard",[Gc]:"Cineon",[Do]:"ACESFilmic",[Xc]:"AgX",[jc]:"Neutral",[Wc]:"Custom"};function s_(r,e){const t=n_[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new w;function r_(){je.getLuminanceCoefficients(vr);const r=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function o_(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function l_(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Es(r){return r!==""}function Mc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(r){return r.replace(c_,u_)}const h_=new Map;function u_(r,e){let t=Ve[e];if(t===void 0){const i=h_.get(e);if(i!==void 0)t=Ve[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(d_,f_)}function f_(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function bc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p_={[Sr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function m_(r){return p_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g_={[Mn]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function __(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":g_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const x_={[$n]:"ENVMAP_MODE_REFRACTION"};function v_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M_={[kc]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function S_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":M_[r.combine]||"ENVMAP_BLENDING_NONE"}function y_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function b_(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=m_(t),c=__(t),h=v_(t),u=S_(t),d=y_(t),f=a_(t),g=o_(s),_=n.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ei?s_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),r_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Co(a),a=Mc(a,t),a=Sc(a,t),o=Co(o),o=Mc(o,t),o=Sc(o,t),a=yc(a),o=yc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+a,y=b+p+o,A=_c(n,n.VERTEX_SHADER,E),R=_c(n,n.FRAGMENT_SHADER,y);n.attachShader(_,A),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function C(L){if(r.debug.checkShaderErrors){const H=n.getProgramInfoLog(_)||"",k=n.getShaderInfoLog(A)||"",q=n.getShaderInfoLog(R)||"",j=H.trim(),B=k.trim(),N=q.trim();let W=!0,ie=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,A,R);else{const te=vc(n,A,"vertex"),ue=vc(n,R,"fragment");Re("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+j+`
`+te+`
`+ue)}else j!==""?be("WebGLProgram: Program Info Log:",j):(B===""||N==="")&&(ie=!1);ie&&(L.diagnostics={runnable:W,programLog:j,vertexShader:{log:B,prefix:m},fragmentShader:{log:N,prefix:p}})}n.deleteShader(A),n.deleteShader(R),U=new Cr(n,_),v=l_(n,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Jg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let E_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A_(e),t.set(e,i)),i}}class A_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function w_(r,e,t,i,n,s,a){const o=new Wo,l=new T_,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,L,H,k){const q=H.fog,j=k.geometry,B=v.isMeshStandardMaterial?H.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),W=!!N&&N.mapping===Ur?N.image.height:null,ie=g[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&be("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=te!==void 0?te.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let Be,mt,ft,Y;if(ie){const Qe=Mi[ie];Be=Qe.vertexShader,mt=Qe.fragmentShader}else Be=v.vertexShader,mt=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const Z=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Ke=!!v.map,Pt=!!v.matcap,Ye=!!N,Je=!!v.aoMap,at=!!v.lightMap,He=!!v.bumpMap,Mt=!!v.normalMap,P=!!v.displacementMap,St=!!v.emissiveMap,Ze=!!v.metalnessMap,lt=!!v.roughnessMap,Me=v.anisotropy>0,T=v.clearcoat>0,x=v.dispersion>0,I=v.iridescence>0,X=v.sheen>0,$=v.transmission>0,G=Me&&!!v.anisotropyMap,ye=T&&!!v.clearcoatMap,se=T&&!!v.clearcoatNormalMap,xe=T&&!!v.clearcoatRoughnessMap,Ie=I&&!!v.iridescenceMap,Q=I&&!!v.iridescenceThicknessMap,ae=X&&!!v.sheenColorMap,ge=X&&!!v.sheenRoughnessMap,Se=!!v.specularMap,re=!!v.specularColorMap,Ge=!!v.specularIntensityMap,D=$&&!!v.transmissionMap,he=$&&!!v.thicknessMap,ee=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,K=!!v.alphaHash,ne=!!v.extensions;let Fe=Ei;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const ct={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:mt,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vt,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Pt,envMap:Ye,envMapMode:Ye&&N.mapping,envMapCubeUVHeight:W,aoMap:Je,lightMap:at,bumpMap:He,normalMap:Mt,displacementMap:P,emissiveMap:St,normalMapObjectSpace:Mt&&v.normalMapType===du,normalMapTangentSpace:Mt&&v.normalMapType===ih,metalnessMap:Ze,roughnessMap:lt,anisotropy:Me,anisotropyMap:G,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:x,iridescence:I,iridescenceMap:Ie,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:Se,specularColorMap:re,specularIntensityMap:Ge,transmission:$,transmissionMap:D,thicknessMap:he,gradientMap:ee,opaque:v.transparent===!1&&v.blending===Xn&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:K,combine:v.combine,mapUv:Ke&&_(v.map.channel),aoMapUv:Je&&_(v.aoMap.channel),lightMapUv:at&&_(v.lightMap.channel),bumpMapUv:He&&_(v.bumpMap.channel),normalMapUv:Mt&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:St&&_(v.emissiveMap.channel),metalnessMapUv:Ze&&_(v.metalnessMap.channel),roughnessMapUv:lt&&_(v.roughnessMap.channel),anisotropyMapUv:G&&_(v.anisotropyMap.channel),clearcoatMapUv:ye&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:Se&&_(v.specularMap.channel),specularColorMapUv:re&&_(v.specularColorMap.channel),specularIntensityMapUv:Ge&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:he&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Mt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Ke||de),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Si,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(b(S,v),E(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=g[v.type];let L;if(S){const H=Mi[S];L=id.clone(H.uniforms)}else L=v.uniforms;return L}function A(v,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new b_(r,S,v,s),h.push(L),u.set(S,L)),L}function R(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:U}}function C_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function R_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ec(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tc(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||R_),i.length>1&&i.sort(d||Ec),n.length>1&&n.sort(d||Ec)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function P_(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new Tc,r.set(i,[a])):n>=s.length?(a=new Tc,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function L_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Pe};break;case"SpotLight":t={position:new w,direction:new w,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function D_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let I_=0;function N_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function F_(r){const e=new L_,t=D_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const n=new w,s=new Ee,a=new Ee;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,E=0,y=0,A=0,R=0,C=0;c.sort(N_);for(let v=0,S=c.length;v<S;v++){const L=c[v],H=L.color,k=L.intensity,q=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Jn?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],k);C++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,W=t.get(L);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=L.shadow.matrix,b++}i.directional[f]=B,f++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(H).multiplyScalar(k),B.distance=q,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[_]=B;const N=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,N.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[_]=N.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=j,y++}_++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(H).multiplyScalar(k),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const N=L.shadow,W=t.get(L);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,W.shadowCameraNear=N.camera.near,W.shadowCameraFar=N.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=B,g++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(k),B.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=C,i.version=I_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ac(r){const e=new F_(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function U_(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new Ac(r),e.set(n,[o])):s>=a.length?(o=new Ac(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z_=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],k_=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],wc=new Ee,Ms=new w,Aa=new w;function V_(r,e,t){let i=new qo;const n=new De,s=new De,a=new pt,o=new bd,l=new Ed,c={},h=t.maxTextureSize,u={[Vi]:Wt,[Wt]:Vi,[Si]:Si},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:O_,fragmentShader:B_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(R,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===Vh&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Sr);const v=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),H=r.state;H.setBlending(zi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==this.type;k&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(j=>j.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,j=R.length;q<j;q++){const B=R[q],N=B.shadow;if(N===void 0){be("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;n.copy(N.mapSize);const W=N.getFrameExtents();if(n.multiply(W),s.copy(N.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/W.x),n.x=s.x*W.x,N.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/W.y),n.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ys){if(B.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ti(n.x,n.y,{format:Jn,type:Hi,minFilter:At,magFilter:At,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new Fs(n.x,n.y,ri),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=Gi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Tt,N.map.depthTexture.magFilter=Tt}else{B.isPointLight?(N.map=new uh(n.x),N.map.depthTexture=new Md(n.x,Ai)):(N.map=new Ti(n.x,n.y),N.map.depthTexture=new Fs(n.x,n.y,Ai)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=Gi;const te=r.state.buffers.depth.getReversed();this.type===Sr?(N.map.depthTexture.compareFunction=te?Vo:ko,N.map.depthTexture.minFilter=At,N.map.depthTexture.magFilter=At):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Tt,N.map.depthTexture.magFilter=Tt)}N.camera.updateProjectionMatrix()}const ie=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ie;te++){if(N.map.isWebGLCubeRenderTarget)r.setRenderTarget(N.map,te),r.clear();else{te===0&&(r.setRenderTarget(N.map),r.clear());const ue=N.getViewport(te);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(a)}if(B.isPointLight){const ue=N.camera,Oe=N.matrix,Be=B.distance||ue.far;Be!==ue.far&&(ue.far=Be,ue.updateProjectionMatrix()),Ms.setFromMatrixPosition(B.matrixWorld),ue.position.copy(Ms),Aa.copy(ue.position),Aa.add(z_[te]),ue.up.copy(k_[te]),ue.lookAt(Aa),ue.updateMatrixWorld(),Oe.makeTranslation(-Ms.x,-Ms.y,-Ms.z),wc.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),N._frustum.setFromProjectionMatrix(wc,ue.coordinateSystem,ue.reversedDepth)}else N.updateMatrices(B);i=N.getFrustum(),y(C,U,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ys&&b(N,U),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,L)};function b(R,C){const U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ti(n.x,n.y,{format:Jn,type:Hi})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(C,null,U,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(C,null,U,f,_,null)}function E(R,C,U,v){let S=null;const L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=S.uuid,k=C.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let j=q[k];j===void 0&&(j=S.clone(),q[k]=j,C.addEventListener("dispose",A)),S=j}if(S.visible=C.visible,S.wireframe=C.wireframe,v===ys?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=r.properties.get(S);H.light=U}return S}function y(R,C,U,v,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ys)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const k=e.update(R),q=R.material;if(Array.isArray(q)){const j=k.groups;for(let B=0,N=j.length;B<N;B++){const W=j[B],ie=q[W.materialIndex];if(ie&&ie.visible){const te=E(R,ie,v,S);R.onBeforeShadow(r,R,C,U,k,te,W),r.renderBufferDirect(U,null,k,te,R,W),R.onAfterShadow(r,R,C,U,k,te,W)}}}else if(q.visible){const j=E(R,q,v,S);R.onBeforeShadow(r,R,C,U,k,j,null),r.renderBufferDirect(U,null,k,j,R,null),R.onAfterShadow(r,R,C,U,k,j,null)}}const H=R.children;for(let k=0,q=H.length;k<q;k++)y(H[k],C,U,v,S)}function A(R){R.target.removeEventListener("dispose",A);for(const U in c){const v=c[U],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const H_={[Ia]:Na,[Fa]:Ba,[Ua]:za,[Kn]:Oa,[Na]:Ia,[Ba]:Fa,[za]:Ua,[Oa]:Kn};function G_(r,e){function t(){let D=!1;const he=new pt;let ee=null;const de=new pt(0,0,0,0);return{setMask:function(J){ee!==J&&!D&&(r.colorMask(J,J,J,J),ee=J)},setLocked:function(J){D=J},setClear:function(J,K,ne,Fe,ct){ct===!0&&(J*=Fe,K*=Fe,ne*=Fe),he.set(J,K,ne,Fe),de.equals(he)===!1&&(r.clearColor(J,K,ne,Fe),de.copy(he))},reset:function(){D=!1,ee=null,de.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,ee=null,de=null,J=null;return{setReversed:function(K){if(he!==K){const ne=e.get("EXT_clip_control");K?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Fe=J;J=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(K){K?Z(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(K){ee!==K&&!D&&(r.depthMask(K),ee=K)},setFunc:function(K){if(he&&(K=H_[K]),de!==K){switch(K){case Ia:r.depthFunc(r.NEVER);break;case Na:r.depthFunc(r.ALWAYS);break;case Fa:r.depthFunc(r.LESS);break;case Kn:r.depthFunc(r.LEQUAL);break;case Ua:r.depthFunc(r.EQUAL);break;case Oa:r.depthFunc(r.GEQUAL);break;case Ba:r.depthFunc(r.GREATER);break;case za:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=K}},setLocked:function(K){D=K},setClear:function(K){J!==K&&(he&&(K=1-K),r.clearDepth(K),J=K)},reset:function(){D=!1,ee=null,de=null,J=null,he=!1}}}function n(){let D=!1,he=null,ee=null,de=null,J=null,K=null,ne=null,Fe=null,ct=null;return{setTest:function(Qe){D||(Qe?Z(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!D&&(r.stencilMask(Qe),he=Qe)},setFunc:function(Qe,_i,Pi){(ee!==Qe||de!==_i||J!==Pi)&&(r.stencilFunc(Qe,_i,Pi),ee=Qe,de=_i,J=Pi)},setOp:function(Qe,_i,Pi){(K!==Qe||ne!==_i||Fe!==Pi)&&(r.stencilOp(Qe,_i,Pi),K=Qe,ne=_i,Fe=Pi)},setLocked:function(Qe){D=Qe},setClear:function(Qe){ct!==Qe&&(r.clearStencil(Qe),ct=Qe)},reset:function(){D=!1,he=null,ee=null,de=null,J=null,K=null,ne=null,Fe=null,ct=null}}}const s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,y=null,A=null,R=null,C=new Pe(0,0,0),U=0,v=!1,S=null,L=null,H=null,k=null,q=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,N=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=N>=2);let ie=null,te={};const ue=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Be=new pt().fromArray(ue),mt=new pt().fromArray(Oe);function ft(D,he,ee,de){const J=new Uint8Array(4),K=r.createTexture();r.bindTexture(D,K),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<ee;ne++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(he+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return K}const Y={};Y[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(Kn),He(!1),Mt(ol),Z(r.CULL_FACE),Je(zi);function Z(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function pe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function ze(D,he){return u[D]!==he?(r.bindFramebuffer(D,he),u[D]=he,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(D,he){let ee=f,de=!1;if(D){ee=d.get(he),ee===void 0&&(ee=[],d.set(he,ee));const J=D.textures;if(ee.length!==J.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let K=0,ne=J.length;K<ne;K++)ee[K]=r.COLOR_ATTACHMENT0+K;ee.length=J.length,de=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,de=!0);de&&r.drawBuffers(ee)}function Ke(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const Pt={[fn]:r.FUNC_ADD,[Gh]:r.FUNC_SUBTRACT,[Wh]:r.FUNC_REVERSE_SUBTRACT};Pt[Xh]=r.MIN,Pt[jh]=r.MAX;const Ye={[qh]:r.ZERO,[Yh]:r.ONE,[Kh]:r.SRC_COLOR,[La]:r.SRC_ALPHA,[tu]:r.SRC_ALPHA_SATURATE,[Qh]:r.DST_COLOR,[Zh]:r.DST_ALPHA,[$h]:r.ONE_MINUS_SRC_COLOR,[Da]:r.ONE_MINUS_SRC_ALPHA,[eu]:r.ONE_MINUS_DST_COLOR,[Jh]:r.ONE_MINUS_DST_ALPHA,[iu]:r.CONSTANT_COLOR,[nu]:r.ONE_MINUS_CONSTANT_COLOR,[su]:r.CONSTANT_ALPHA,[ru]:r.ONE_MINUS_CONSTANT_ALPHA};function Je(D,he,ee,de,J,K,ne,Fe,ct,Qe){if(D===zi){_===!0&&(pe(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),D!==Hh){if(D!==m||Qe!==v){if((p!==fn||y!==fn)&&(r.blendEquation(r.FUNC_ADD),p=fn,y=fn),Qe)switch(D){case Xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ll:r.blendFunc(r.ONE,r.ONE);break;case cl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",D);break}else switch(D){case Xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ll:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cl:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",D);break}b=null,E=null,A=null,R=null,C.set(0,0,0),U=0,m=D,v=Qe}return}J=J||he,K=K||ee,ne=ne||de,(he!==p||J!==y)&&(r.blendEquationSeparate(Pt[he],Pt[J]),p=he,y=J),(ee!==b||de!==E||K!==A||ne!==R)&&(r.blendFuncSeparate(Ye[ee],Ye[de],Ye[K],Ye[ne]),b=ee,E=de,A=K,R=ne),(Fe.equals(C)===!1||ct!==U)&&(r.blendColor(Fe.r,Fe.g,Fe.b,ct),C.copy(Fe),U=ct),m=D,v=!1}function at(D,he){D.side===Si?pe(r.CULL_FACE):Z(r.CULL_FACE);let ee=D.side===Wt;he&&(ee=!ee),He(ee),D.blending===Xn&&D.transparent===!1?Je(zi):Je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),St(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){S!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),S=D)}function Mt(D){D!==zh?(Z(r.CULL_FACE),D!==L&&(D===ol?r.cullFace(r.BACK):D===kh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),L=D}function P(D){D!==H&&(B&&r.lineWidth(D),H=D)}function St(D,he,ee){D?(Z(r.POLYGON_OFFSET_FILL),(k!==he||q!==ee)&&(r.polygonOffset(he,ee),k=he,q=ee)):pe(r.POLYGON_OFFSET_FILL)}function Ze(D){D?Z(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function lt(D){D===void 0&&(D=r.TEXTURE0+j-1),ie!==D&&(r.activeTexture(D),ie=D)}function Me(D,he,ee){ee===void 0&&(ie===null?ee=r.TEXTURE0+j-1:ee=ie);let de=te[ee];de===void 0&&(de={type:void 0,texture:void 0},te[ee]=de),(de.type!==D||de.texture!==he)&&(ie!==ee&&(r.activeTexture(ee),ie=ee),r.bindTexture(D,he||Y[D]),de.type=D,de.texture=he)}function T(){const D=te[ie];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function X(){try{r.texSubImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function $(){try{r.texSubImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function xe(){try{r.texStorage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function Ie(){try{r.texImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function ae(D){Be.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function ge(D){mt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),mt.copy(D))}function Se(D,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let de=ee.get(D);de===void 0&&(de=r.getUniformBlockIndex(he,D.name),ee.set(D,de))}function re(D,he){const de=c.get(he).get(D);l.get(he)!==de&&(r.uniformBlockBinding(he,de,D.__bindingPointIndex),l.set(he,de))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,te={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,y=null,A=null,R=null,C=new Pe(0,0,0),U=0,v=!1,S=null,L=null,H=null,k=null,q=null,Be.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:ze,drawBuffers:_e,useProgram:Ke,setBlending:Je,setMaterial:at,setFlipSided:He,setCullFace:Mt,setLineWidth:P,setPolygonOffset:St,setScissorTest:Ze,activeTexture:lt,bindTexture:Me,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Ie,texImage3D:Q,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:se,texStorage3D:xe,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ae,viewport:ge,reset:Ge}}function W_(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ds("canvas")}function _(T,x,I){let X=1;const $=Me(T);if(($.width>I||$.height>I)&&(X=I/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){const G=Math.floor(X*$.width),ye=Math.floor(X*$.height);u===void 0&&(u=g(G,ye));const se=x?g(G,ye):u;return se.width=G,se.height=ye,se.getContext("2d").drawImage(T,0,0,G,ye),be("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+ye+")."),se}else return"data"in T&&be("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){r.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(T,x,I,X,$=!1){if(T!==null){if(r[T]!==void 0)return r[T];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=x;if(x===r.RED&&(I===r.FLOAT&&(G=r.R32F),I===r.HALF_FLOAT&&(G=r.R16F),I===r.UNSIGNED_BYTE&&(G=r.R8)),x===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(G=r.R8UI),I===r.UNSIGNED_SHORT&&(G=r.R16UI),I===r.UNSIGNED_INT&&(G=r.R32UI),I===r.BYTE&&(G=r.R8I),I===r.SHORT&&(G=r.R16I),I===r.INT&&(G=r.R32I)),x===r.RG&&(I===r.FLOAT&&(G=r.RG32F),I===r.HALF_FLOAT&&(G=r.RG16F),I===r.UNSIGNED_BYTE&&(G=r.RG8)),x===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(G=r.RG8UI),I===r.UNSIGNED_SHORT&&(G=r.RG16UI),I===r.UNSIGNED_INT&&(G=r.RG32UI),I===r.BYTE&&(G=r.RG8I),I===r.SHORT&&(G=r.RG16I),I===r.INT&&(G=r.RG32I)),x===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(G=r.RGB8UI),I===r.UNSIGNED_SHORT&&(G=r.RGB16UI),I===r.UNSIGNED_INT&&(G=r.RGB32UI),I===r.BYTE&&(G=r.RGB8I),I===r.SHORT&&(G=r.RGB16I),I===r.INT&&(G=r.RGB32I)),x===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),I===r.UNSIGNED_INT&&(G=r.RGBA32UI),I===r.BYTE&&(G=r.RGBA8I),I===r.SHORT&&(G=r.RGBA16I),I===r.INT&&(G=r.RGBA32I)),x===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),x===r.RGBA){const ye=$?Pr:je.getTransfer(X);I===r.FLOAT&&(G=r.RGBA32F),I===r.HALF_FLOAT&&(G=r.RGBA16F),I===r.UNSIGNED_BYTE&&(G=ye===tt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(T,x){let I;return T?x===null||x===Ai||x===Rs?I=r.DEPTH24_STENCIL8:x===ri?I=r.DEPTH32F_STENCIL8:x===Cs&&(I=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===Rs?I=r.DEPTH_COMPONENT24:x===ri?I=r.DEPTH_COMPONENT32F:x===Cs&&(I=r.DEPTH_COMPONENT16),I}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tt&&T.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),S(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const I=T.source,X=d.get(I);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(T),Object.keys(X).length===0&&d.delete(I)}i.remove(T)}function v(T){const x=i.get(T);r.deleteTexture(x.__webglTexture);const I=T.source,X=d.get(I);delete X[x.__cacheKey],a.memory.textures--}function S(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[X][$]);else r.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)r.deleteFramebuffer(x.__webglFramebuffer[X]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=T.textures;for(let X=0,$=I.length;X<$;X++){const G=i.get(I[X]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(I[X])}i.remove(T)}let L=0;function H(){L=0}function k(){const T=L;return T>=n.maxTextures&&be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),L+=1,T}function q(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const I=i.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const X=T.image;if(X===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,T,x);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+x)}function B(T,x){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,x);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+x)}function N(T,x){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,x);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+x)}function W(T,x){const I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Z(I,T,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+x)}const ie={[Zn]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[Rr]:r.MIRRORED_REPEAT},te={[Tt]:r.NEAREST,[Yc]:r.NEAREST_MIPMAP_NEAREST,[bs]:r.NEAREST_MIPMAP_LINEAR,[At]:r.LINEAR,[yr]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},ue={[fu]:r.NEVER,[xu]:r.ALWAYS,[pu]:r.LESS,[ko]:r.LEQUAL,[mu]:r.EQUAL,[Vo]:r.GEQUAL,[gu]:r.GREATER,[_u]:r.NOTEQUAL};function Oe(T,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===yr||x.magFilter===bs||x.magFilter===Oi||x.minFilter===At||x.minFilter===yr||x.minFilter===bs||x.minFilter===Oi)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ie[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ie[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ie[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,te[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==bs&&x.minFilter!==Oi||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Be(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const G=q(x);if(G!==T.__cacheKey){$[G]===void 0&&($[G]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[G].usedTimes++;const ye=$[T.__cacheKey];ye!==void 0&&($[T.__cacheKey].usedTimes--,ye.usedTimes===0&&v(x)),T.__cacheKey=G,T.__webglTexture=$[G].texture}return I}function mt(T,x,I){return Math.floor(Math.floor(T/I)/x)}function ft(T,x,I,X){const G=T.updateRanges;if(G.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,I,X,x.data);else{G.sort((Q,ae)=>Q.start-ae.start);let ye=0;for(let Q=1;Q<G.length;Q++){const ae=G[ye],ge=G[Q],Se=ae.start+ae.count,re=mt(ge.start,x.width,4),Ge=mt(ae.start,x.width,4);ge.start<=Se+1&&re===Ge&&mt(ge.start+ge.count-1,x.width,4)===re?ae.count=Math.max(ae.count,ge.start+ge.count-ae.start):(++ye,G[ye]=ge)}G.length=ye+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ae=G.length;Q<ae;Q++){const ge=G[Q],Se=Math.floor(ge.start/4),re=Math.ceil(ge.count/4),Ge=Se%x.width,D=Math.floor(Se/x.width),he=re,ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ge,D,he,ee,I,X,x.data)}T.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function Y(T,x,I){let X=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=r.TEXTURE_3D);const $=Be(T,x),G=x.source;t.bindTexture(X,T.__webglTexture,r.TEXTURE0+I);const ye=i.get(G);if(G.version!==ye.__version||$===!0){t.activeTexture(r.TEXTURE0+I);const se=je.getPrimaries(je.workingColorSpace),xe=x.colorSpace===Ji?null:je.getPrimaries(x.colorSpace),Ie=x.colorSpace===Ji||se===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=_(x.image,!1,n.maxTextureSize);Q=lt(x,Q);const ae=s.convert(x.format,x.colorSpace),ge=s.convert(x.type);let Se=E(x.internalFormat,ae,ge,x.colorSpace,x.isVideoTexture);Oe(X,x);let re;const Ge=x.mipmaps,D=x.isVideoTexture!==!0,he=ye.__version===void 0||$===!0,ee=G.dataReady,de=A(x,Q);if(x.isDepthTexture)Se=y(x.format===mn,x.type),he&&(D?t.texStorage2D(r.TEXTURE_2D,1,Se,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Se,Q.width,Q.height,0,ae,ge,null));else if(x.isDataTexture)if(Ge.length>0){D&&he&&t.texStorage2D(r.TEXTURE_2D,de,Se,Ge[0].width,Ge[0].height);for(let J=0,K=Ge.length;J<K;J++)re=Ge[J],D?ee&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(r.TEXTURE_2D,J,Se,re.width,re.height,0,ae,ge,re.data);x.generateMipmaps=!1}else D?(he&&t.texStorage2D(r.TEXTURE_2D,de,Se,Q.width,Q.height),ee&&ft(x,Q,ae,ge)):t.texImage2D(r.TEXTURE_2D,0,Se,Q.width,Q.height,0,ae,ge,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Se,Ge[0].width,Ge[0].height,Q.depth);for(let J=0,K=Ge.length;J<K;J++)if(re=Ge[J],x.format!==ai)if(ae!==null)if(D){if(ee)if(x.layerUpdates.size>0){const ne=sc(re.width,re.height,x.format,x.type);for(const Fe of x.layerUpdates){const ct=re.data.subarray(Fe*ne/re.data.BYTES_PER_ELEMENT,(Fe+1)*ne/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Fe,re.width,re.height,1,ae,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Se,re.width,re.height,Q.depth,0,re.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,ge,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Se,re.width,re.height,Q.depth,0,ae,ge,re.data)}else{D&&he&&t.texStorage2D(r.TEXTURE_2D,de,Se,Ge[0].width,Ge[0].height);for(let J=0,K=Ge.length;J<K;J++)re=Ge[J],x.format!==ai?ae!==null?D?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Se,re.width,re.height,0,re.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ee&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(r.TEXTURE_2D,J,Se,re.width,re.height,0,ae,ge,re.data)}else if(x.isDataArrayTexture)if(D){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Se,Q.width,Q.height,Q.depth),ee)if(x.layerUpdates.size>0){const J=sc(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const ne=Q.data.subarray(K*J/Q.data.BYTES_PER_ELEMENT,(K+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ae,ge,ne)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(x.isData3DTexture)D?(he&&t.texStorage3D(r.TEXTURE_3D,de,Se,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(x.isFramebufferTexture){if(he)if(D)t.texStorage2D(r.TEXTURE_2D,de,Se,Q.width,Q.height);else{let J=Q.width,K=Q.height;for(let ne=0;ne<de;ne++)t.texImage2D(r.TEXTURE_2D,ne,Se,J,K,0,ae,ge,null),J>>=1,K>>=1}}else if(Ge.length>0){if(D&&he){const J=Me(Ge[0]);t.texStorage2D(r.TEXTURE_2D,de,Se,J.width,J.height)}for(let J=0,K=Ge.length;J<K;J++)re=Ge[J],D?ee&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ae,ge,re):t.texImage2D(r.TEXTURE_2D,J,Se,ae,ge,re);x.generateMipmaps=!1}else if(D){if(he){const J=Me(Q);t.texStorage2D(r.TEXTURE_2D,de,Se,J.width,J.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,ge,Q)}else t.texImage2D(r.TEXTURE_2D,0,Se,ae,ge,Q);m(x)&&p(X),ye.__version=G.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,I){if(x.image.length!==6)return;const X=Be(T,x),$=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+I);const G=i.get($);if($.version!==G.__version||X===!0){t.activeTexture(r.TEXTURE0+I);const ye=je.getPrimaries(je.workingColorSpace),se=x.colorSpace===Ji?null:je.getPrimaries(x.colorSpace),xe=x.colorSpace===Ji||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!Ie&&!Q?ae[K]=_(x.image[K],!0,n.maxCubemapSize):ae[K]=Q?x.image[K].image:x.image[K],ae[K]=lt(x,ae[K]);const ge=ae[0],Se=s.convert(x.format,x.colorSpace),re=s.convert(x.type),Ge=E(x.internalFormat,Se,re,x.colorSpace),D=x.isVideoTexture!==!0,he=G.__version===void 0||X===!0,ee=$.dataReady;let de=A(x,ge);Oe(r.TEXTURE_CUBE_MAP,x);let J;if(Ie){D&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ge,ge.width,ge.height);for(let K=0;K<6;K++){J=ae[K].mipmaps;for(let ne=0;ne<J.length;ne++){const Fe=J[ne];x.format!==ai?Se!==null?D?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne,0,0,Fe.width,Fe.height,Se,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne,Ge,Fe.width,Fe.height,0,Fe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne,0,0,Fe.width,Fe.height,Se,re,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne,Ge,Fe.width,Fe.height,0,Se,re,Fe.data)}}}else{if(J=x.mipmaps,D&&he){J.length>0&&de++;const K=Me(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(Q){D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,Se,re,ae[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ae[K].width,ae[K].height,0,Se,re,ae[K].data);for(let ne=0;ne<J.length;ne++){const ct=J[ne].image[K].image;D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne+1,0,0,ct.width,ct.height,Se,re,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne+1,Ge,ct.width,ct.height,0,Se,re,ct.data)}}else{D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,re,ae[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Se,re,ae[K]);for(let ne=0;ne<J.length;ne++){const Fe=J[ne];D?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne+1,0,0,Se,re,Fe.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne+1,Ge,Se,re,Fe.image[K])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),G.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,I,X,$,G){const ye=s.convert(I.format,I.colorSpace),se=s.convert(I.type),xe=E(I.internalFormat,ye,se,I.colorSpace),Ie=i.get(x),Q=i.get(I);if(Q.__renderTarget=x,!Ie.__hasExternalTextures){const ae=Math.max(1,x.width>>G),ge=Math.max(1,x.height>>G);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,G,xe,ae,ge,x.depth,0,ye,se,null):t.texImage2D($,G,xe,ae,ge,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,Q.__webglTexture,0,P(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,Q.__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(T,x,I){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,G=y(x.stencilBuffer,$),ye=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;St(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(x),G,x.width,x.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(x),G,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,G,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,T)}else{const X=x.textures;for(let $=0;$<X.length;$++){const G=X[$],ye=s.convert(G.format,G.colorSpace),se=s.convert(G.type),xe=E(G.internalFormat,ye,se,G.colorSpace);St(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(x),xe,x.width,x.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(x),xe,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,xe,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(T,x,I){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x.depthTexture);const Ie=s.convert(x.depthTexture.format),Q=s.convert(x.depthTexture.type);let ae;x.depthTexture.format===Gi?ae=r.DEPTH_COMPONENT24:x.depthTexture.format===mn&&(ae=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,x.width,x.height,0,Ie,Q,null)}}else j(x.depthTexture,0);const G=$.__webglTexture,ye=P(x),se=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,xe=x.depthTexture.format===mn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gi)St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,se,G,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,xe,se,G,0);else if(x.depthTexture.format===mn)St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,se,G,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,xe,se,G,0);else throw new Error("Unknown depthTexture format")}function Ke(T){const x=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)_e(x.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?_e(x.__webglFramebuffer[0],T,0):_e(x.__webglFramebuffer,T,0)}else if(I){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=r.createRenderbuffer(),ze(x.__webglDepthbuffer[X],T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,G)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ze(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,G)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(T,x,I){const X=i.get(T);x!==void 0&&pe(X.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&Ke(T)}function Ye(T){const x=T.texture,I=i.get(T),X=i.get(x);T.addEventListener("dispose",C);const $=T.textures,G=T.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=x.version,a.memory.textures++),G){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let xe=0;xe<x.mipmaps.length;xe++)I.__webglFramebuffer[se][xe]=r.createFramebuffer()}else I.__webglFramebuffer[se]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)I.__webglFramebuffer[se]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,xe=$.length;se<xe;se++){const Ie=i.get($[se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&St(T)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const xe=$[se];I.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[se]);const Ie=s.convert(xe.format,xe.colorSpace),Q=s.convert(xe.type),ae=E(xe.internalFormat,Ie,Q,xe.colorSpace,T.isXRRenderTarget===!0),ge=P(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ae,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,I.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(I.__webglFramebuffer[se][xe],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else pe(I.__webglFramebuffer[se],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,xe=$.length;se<xe;se++){const Ie=$[se],Q=i.get(Ie);let ae=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Oe(ae,Ie),pe(I.__webglFramebuffer,T,Ie,r.COLOR_ATTACHMENT0+se,ae,0),m(Ie)&&p(ae)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),Oe(se,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(I.__webglFramebuffer[xe],T,x,r.COLOR_ATTACHMENT0,se,xe);else pe(I.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),t.unbindTexture()}T.depthBuffer&&Ke(T)}function Je(T){const x=T.textures;for(let I=0,X=x.length;I<X;I++){const $=x[I];if(m($)){const G=b(T),ye=i.get($).__webglTexture;t.bindTexture(G,ye),p(G),t.unbindTexture()}}}const at=[],He=[];function Mt(T){if(T.samples>0){if(St(T)===!1){const x=T.textures,I=T.width,X=T.height;let $=r.COLOR_BUFFER_BIT;const G=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=i.get(T),se=x.length>1;if(se)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=T.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const Q=i.get(x[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,I,X,0,0,I,X,$,r.NEAREST),l===!0&&(at.length=0,He.length=0,at.push(r.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(at.push(G),He.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,He)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const Q=i.get(x[Ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function P(T){return Math.min(n.maxSamples,T.samples)}function St(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ze(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function lt(T,x){const I=T.colorSpace,X=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Vt&&I!==Ji&&(je.getTransfer(I)===tt?(X!==ai||$!==Zt)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",I)),x}function Me(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X_(r,e){function t(i,n=Ji){let s;const a=je.getTransfer(n);if(i===Zt)return r.UNSIGNED_BYTE;if(i===No)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return r.BYTE;if(i===$c)return r.SHORT;if(i===Cs)return r.UNSIGNED_SHORT;if(i===Io)return r.INT;if(i===Ai)return r.UNSIGNED_INT;if(i===ri)return r.FLOAT;if(i===Hi)return r.HALF_FLOAT;if(i===Qc)return r.ALPHA;if(i===eh)return r.RGB;if(i===ai)return r.RGBA;if(i===Gi)return r.DEPTH_COMPONENT;if(i===mn)return r.DEPTH_STENCIL;if(i===Uo)return r.RED;if(i===Oo)return r.RED_INTEGER;if(i===Jn)return r.RG;if(i===Bo)return r.RG_INTEGER;if(i===zo)return r.RGBA_INTEGER;if(i===br||i===Er||i===Tr||i===Ar)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Ga||i===Wa||i===Xa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===qa||i===Ya||i===Ka||i===$a||i===Za||i===Ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ja||i===qa)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return s.COMPRESSED_R11_EAC;if(i===$a)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Za)return s.COMPRESSED_RG11_EAC;if(i===Ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qa||i===eo||i===to||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===no)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ro)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===xo||i===vo||i===Mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:j_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends Sn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding!="undefined",m=new Y_,p={},b=t.getContextAttributes();let E=null,y=null;const A=[],R=[],C=new De;let U=null;const v=new Ft;v.viewport=new pt;const S=new Ft;S.viewport=new pt;const L=[v,S],H=new Wd;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=A[Y];return Z===void 0&&(Z=new da,A[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=A[Y];return Z===void 0&&(Z=new da,A[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=A[Y];return Z===void 0&&(Z=new da,A[Y]=Z),Z.getHandSpace()};function j(Y){const Z=R.indexOf(Y.inputSource);if(Z===-1)return;const pe=A[Z];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){n.removeEventListener("select",j),n.removeEventListener("selectstart",j),n.removeEventListener("selectend",j),n.removeEventListener("squeeze",j),n.removeEventListener("squeezestart",j),n.removeEventListener("squeezeend",j),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",N);for(let Y=0;Y<A.length;Y++){const Z=R[Y];Z!==null&&(R[Y]=null,A[Y].disconnect(Z))}k=null,q=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(E),f=null,d=null,u=null,n=null,y=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",j),n.addEventListener("selectstart",j),n.addEventListener("selectend",j),n.addEventListener("squeeze",j),n.addEventListener("squeezestart",j),n.addEventListener("squeezeend",j),n.addEventListener("end",B),n.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ze=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?mn:Gi,ze=b.stencil?Rs:Ai);const Ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ke),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ti(d.textureWidth,d.textureHeight,{format:ai,type:Zt,depthTexture:new Fs(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,pe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ti(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ft.setContext(n),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(Y){for(let Z=0;Z<Y.removed.length;Z++){const pe=Y.removed[Z],ze=R.indexOf(pe);ze>=0&&(R[ze]=null,A[ze].disconnect(pe))}for(let Z=0;Z<Y.added.length;Z++){const pe=Y.added[Z];let ze=R.indexOf(pe);if(ze===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=R.length){R.push(pe),ze=Ke;break}else if(R[Ke]===null){R[Ke]=pe,ze=Ke;break}if(ze===-1)break}const _e=A[ze];_e&&_e.connect(pe)}}const W=new w,ie=new w;function te(Y,Z,pe){W.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const ze=W.distanceTo(ie),_e=Z.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,Pt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],at=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],Mt=(Ke[8]+1)/Ke[0],P=Pt*He,St=Pt*Mt,Ze=ze/(-He+Mt),lt=Ze*-He;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Me=Pt+Ze,T=Ye+Ze,x=P-lt,I=St+(ze-lt),X=Je*Ye/T*Me,$=at*Ye/T*Me;Y.projectionMatrix.makePerspective(x,I,X,$,Me,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let Z=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),H.near=S.near=v.near=Z,H.far=S.far=v.far=pe,(k!==H.near||q!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,q=H.far),H.layers.mask=Y.layers.mask|6,v.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const ze=Y.parent,_e=H.cameras;ue(H,ze);for(let Ke=0;Ke<_e.length;Ke++)ue(_e[Ke],ze);_e.length===2?te(H,v,S):H.projectionMatrix.copy(v.projectionMatrix),Oe(Y,H,ze)};function Oe(Y,Z,pe){pe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Be=null;function mt(Y,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ze=!1;pe.length!==H.cameras.length&&(H.cameras.length=0,ze=!0);for(let Ye=0;Ye<pe.length;Ye++){const Je=pe[Ye];let at=null;if(f!==null)at=f.getViewport(Je);else{const Mt=u.getViewSubImage(d,Je);at=Mt.viewport,Ye===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let He=L[Ye];He===void 0&&(He=new Ft,He.layers.enable(Ye),He.viewport=new pt,L[Ye]=He),He.matrix.fromArray(Je.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Je.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(at.x,at.y,at.width,at.height),Ye===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ze===!0&&H.cameras.push(He)}const _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Ye=u.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,n.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const Je=pe[Ye].camera;if(Je){let at=p[Je];at||(at=new _h,p[Je]=at);const He=u.getCameraImage(Je);at.sourceTexture=He}}}}for(let pe=0;pe<A.length;pe++){const ze=R[pe],_e=A[pe];ze!==null&&_e!==void 0&&_e.update(ze,Z,c||a)}Be&&Be(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ft=new yh;ft.setAnimationLoop(mt),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const hn=new wi,$_=new Ee;function Z_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,b,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,y=b.envMapRotation;E&&(m.envMap.value=E,hn.copy(y),hn.x*=-1,hn.y*=-1,hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(hn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function J_(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;i.uniformBlockBinding(b,y)}function c(b,E){let y=n[b.id];y===void 0&&(g(b),y=h(b),n[b.id]=y,b.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function h(b){const E=u();b.__bindingPointIndex=E;const y=r.createBuffer(),A=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=n[b.id],y=b.uniforms,A=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let R=0,C=y.length;R<C;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,S=U.length;v<S;v++){const L=U[v];if(f(L,R,v,A)===!0){const H=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let j=0;j<k.length;j++){const B=k[j],N=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,H+q,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,q),q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,E,y,A){const R=b.value,C=E+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const U=A[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(b){const E=b.uniforms;let y=0;const A=16;for(let C=0,U=E.length;C<U;C++){const v=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,L=v.length;S<L;S++){const H=v[S],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,j=k.length;q<j;q++){const B=k[q],N=_(B),W=y%A,ie=W%N.boundary,te=W+ie;y+=ie,te!==0&&A-te<N.storage&&(y+=A-te),H.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=N.storage}}}const R=y%A;return R>0&&(y+=A-R),b.__size=y,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function p(){for(const b in n)r.deleteBuffer(n[b]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}const Q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function e0(){return xi===null&&(xi=new Xo(Q_,16,16,Jn,Hi),xi.name="DFG_LUT",xi.minFilter=At,xi.magFilter=At,xi.wrapS=yi,xi.wrapT=yi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class t0{constructor(e={}){const{canvas:t=Mu(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,m=new Set([zo,Bo,Oo]),p=new Set([Zt,Ai,Cs,Rs,No,Fo]),b=new Uint32Array(4),E=new Int32Array(4);let y=null,A=null;const R=[],C=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Dt;let L=0,H=0,k=null,q=-1,j=null;const B=new pt,N=new pt;let W=null;const ie=new Pe(0);let te=0,ue=t.width,Oe=t.height,Be=1,mt=null,ft=null;const Y=new pt(0,0,ue,Oe),Z=new pt(0,0,ue,Oe);let pe=!1;const ze=new qo;let _e=!1,Ke=!1;const Pt=new Ee,Ye=new w,Je=new pt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Mt(){return k===null?Be:1}let P=i;function St(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),P===null){const F="webgl2";if(P=St(F,M),P===null)throw St(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Re("WebGLRenderer: "+M.message),M}let Ze,lt,Me,T,x,I,X,$,G,ye,se,xe,Ie,Q,ae,ge,Se,re,Ge,D,he,ee,de,J;function K(){Ze=new eg(P),Ze.init(),ee=new X_(P,Ze),lt=new Xm(P,Ze,e,ee),Me=new G_(P,Ze),lt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),T=new ng(P),x=new C_,I=new W_(P,Ze,Me,x,lt,ee,T),X=new qm(v),$=new Qm(v),G=new of(P),de=new Gm(P,G),ye=new tg(P,G,T,de),se=new rg(P,ye,G,T),Ge=new sg(P,lt,I),ge=new jm(x),xe=new w_(v,X,$,Ze,lt,de,ge),Ie=new Z_(v,x),Q=new P_,ae=new U_(Ze),re=new Hm(v,X,$,Me,se,g,l),Se=new V_(v,se,lt),J=new J_(P,T,lt,Me),D=new Wm(P,Ze,T),he=new ig(P,Ze,T),T.programs=xe.programs,v.capabilities=lt,v.extensions=Ze,v.properties=x,v.renderLists=Q,v.shadowMap=Se,v.state=Me,v.info=T}K(),_!==Zt&&(U=new og(_,t.width,t.height,n,s));const ne=new K_(v,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(M){M!==void 0&&(Be=M,this.setSize(ue,Oe,!1))},this.getSize=function(M){return M.set(ue,Oe)},this.setSize=function(M,F,V=!0){if(ne.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=M,Oe=F,t.width=Math.floor(M*Be),t.height=Math.floor(F*Be),V===!0&&(t.style.width=M+"px",t.style.height=F+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ue*Be,Oe*Be).floor()},this.setDrawingBufferSize=function(M,F,V){ue=M,Oe=F,Be=V,t.width=Math.floor(M*V),t.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===Zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(B)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,F,V,z){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,F,V,z),Me.viewport(B.copy(Y).multiplyScalar(Be).round())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,F,V,z){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,F,V,z),Me.scissor(N.copy(Z).multiplyScalar(Be).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){Me.setScissorTest(pe=M)},this.setOpaqueSort=function(M){mt=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,V=!0){let z=0;if(M){let O=!1;if(k!==null){const oe=k.texture.format;O=m.has(oe)}if(O){const oe=k.texture.type,fe=p.has(oe),ce=re.getClearColor(),me=re.getClearAlpha(),Te=ce.r,Le=ce.g,we=ce.b;fe?(b[0]=Te,b[1]=Le,b[2]=we,b[3]=me,P.clearBufferuiv(P.COLOR,0,b)):(E[0]=Te,E[1]=Le,E[2]=we,E[3]=me,P.clearBufferiv(P.COLOR,0,E))}else z|=P.COLOR_BUFFER_BIT}F&&(z|=P.DEPTH_BUFFER_BIT),V&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),re.dispose(),Q.dispose(),ae.dispose(),x.dispose(),X.dispose(),$.dispose(),se.dispose(),de.dispose(),J.dispose(),xe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",el),ne.removeEventListener("sessionend",tl),nn.stop()};function Fe(M){M.preventDefault(),Dr("WebGLRenderer: Context Lost."),S=!0}function ct(){Dr("WebGLRenderer: Context Restored."),S=!1;const M=T.autoReset,F=Se.enabled,V=Se.autoUpdate,z=Se.needsUpdate,O=Se.type;K(),T.autoReset=M,Se.enabled=F,Se.autoUpdate=V,Se.needsUpdate=z,Se.type=O}function Qe(M){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _i(M){const F=M.target;F.removeEventListener("dispose",_i),Pi(F)}function Pi(M){Ph(M),x.remove(M)}function Ph(M){const F=x.get(M).programs;F!==void 0&&(F.forEach(function(V){xe.releaseProgram(V)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,z,O,oe){F===null&&(F=at);const fe=O.isMesh&&O.matrixWorld.determinant()<0,ce=Dh(M,F,V,z,O);Me.setMaterial(z,fe);let me=V.index,Te=1;if(z.wireframe===!0){if(me=ye.getWireframeAttribute(V),me===void 0)return;Te=2}const Le=V.drawRange,we=V.attributes.position;let We=Le.start*Te,rt=(Le.start+Le.count)*Te;oe!==null&&(We=Math.max(We,oe.start*Te),rt=Math.min(rt,(oe.start+oe.count)*Te)),me!==null?(We=Math.max(We,0),rt=Math.min(rt,me.count)):we!=null&&(We=Math.max(We,0),rt=Math.min(rt,we.count));const _t=rt-We;if(_t<0||_t===1/0)return;de.setup(O,z,ce,V,me);let xt,ot=D;if(me!==null&&(xt=G.get(me),ot=he,ot.setIndex(xt)),O.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*Mt()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(O.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Mt()),O.isLineSegments?ot.setMode(P.LINES):O.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else O.isPoints?ot.setMode(P.POINTS):O.isSprite&&ot.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,et=O._multiDrawCounts,$e=O._multiDrawCount,jt=me?G.get(me).bytesPerElement:1,yn=x.get(z).currentProgram.getUniforms();for(let qt=0;qt<$e;qt++)yn.setValue(P,"_gl_DrawID",qt),ot.render(Ce[qt]/jt,et[qt])}else if(O.isInstancedMesh)ot.renderInstances(We,_t,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,et=Math.min(V.instanceCount,Ce);ot.renderInstances(We,_t,et)}else ot.render(We,_t)};function Qo(M,F,V){M.transparent===!0&&M.side===Si&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,Gs(M,F,V),M.side=Vi,M.needsUpdate=!0,Gs(M,F,V),M.side=Si):Gs(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),A=ae.get(V),A.init(F),C.push(A),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ce=oe[fe];Qo(ce,V,O),z.add(ce)}else Qo(oe,V,O),z.add(oe)}),A=C.pop(),z},this.compileAsync=function(M,F,V=null){const z=this.compile(M,F,V);return new Promise(O=>{function oe(){if(z.forEach(function(fe){x.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){O(M);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Hr=null;function Lh(M){Hr&&Hr(M)}function el(){nn.stop()}function tl(){nn.start()}const nn=new yh;nn.setAnimationLoop(Lh),typeof self!="undefined"&&nn.setContext(self),this.setAnimationLoop=function(M){Hr=M,ne.setAnimationLoop(M),M===null?nn.stop():nn.start()},ne.addEventListener("sessionstart",el),ne.addEventListener("sessionend",tl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const V=ne.enabled===!0&&ne.isPresenting===!0,z=U!==null&&(k===null||V)&&U.begin(v,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,k),A=ae.get(M,C.length),A.init(F),C.push(A),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(Pt,bi,F.reversedDepth),Ke=this.localClippingEnabled,_e=ge.init(this.clippingPlanes,Ke),y=Q.get(M,R.length),y.init(),R.push(y),ne.enabled===!0&&ne.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Gr(fe,F,-1/0,v.sortObjects)}Gr(M,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(mt,ft),He=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,He&&re.addToRenderList(y,M),this.info.render.frame++,_e===!0&&ge.beginShadows();const O=A.state.shadowsArray;if(Se.render(O,M,F),_e===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&U.hasRenderPass())===!1){const fe=y.opaque,ce=y.transmissive;if(A.setupLights(),F.isArrayCamera){const me=F.cameras;if(ce.length>0)for(let Te=0,Le=me.length;Te<Le;Te++){const we=me[Te];nl(fe,ce,M,we)}He&&re.render(M);for(let Te=0,Le=me.length;Te<Le;Te++){const we=me[Te];il(y,M,we,we.viewport)}}else ce.length>0&&nl(fe,ce,M,F),He&&re.render(M),il(y,M,F)}k!==null&&H===0&&(I.updateMultisampleRenderTarget(k),I.updateRenderTargetMipmap(k)),z&&U.end(v),M.isScene===!0&&M.onAfterRender(v,M,F),de.resetDefaultState(),q=-1,j=null,C.pop(),C.length>0?(A=C[C.length-1],_e===!0&&ge.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Gr(M,F,V,z){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ze.intersectsSprite(M)){z&&Je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pt);const fe=se.update(M),ce=M.material;ce.visible&&y.push(M,fe,ce,V,Je.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ze.intersectsObject(M))){const fe=se.update(M),ce=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Je.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Je.copy(fe.boundingSphere.center)),Je.applyMatrix4(M.matrixWorld).applyMatrix4(Pt)),Array.isArray(ce)){const me=fe.groups;for(let Te=0,Le=me.length;Te<Le;Te++){const we=me[Te],We=ce[we.materialIndex];We&&We.visible&&y.push(M,fe,We,V,Je.z,we)}}else ce.visible&&y.push(M,fe,ce,V,Je.z,null)}}const oe=M.children;for(let fe=0,ce=oe.length;fe<ce;fe++)Gr(oe[fe],F,V,z)}function il(M,F,V,z){const{opaque:O,transmissive:oe,transparent:fe}=M;A.setupLightsView(V),_e===!0&&ge.setGlobalState(v.clippingPlanes,V),z&&Me.viewport(B.copy(z)),O.length>0&&Hs(O,F,V),oe.length>0&&Hs(oe,F,V),fe.length>0&&Hs(fe,F,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function nl(M,F,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const We=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Ti(1,1,{generateMipmaps:!0,type:We?Hi:Zt,minFilter:Oi,samples:lt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const oe=A.state.transmissionRenderTarget[z.id],fe=z.viewport||B;oe.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const ce=v.getRenderTarget(),me=v.getActiveCubeFace(),Te=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(ie),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),He&&re.render(V);const Le=v.toneMapping;v.toneMapping=Ei;const we=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),_e===!0&&ge.setGlobalState(v.clippingPlanes,z),Hs(M,V,z),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let rt=0,_t=F.length;rt<_t;rt++){const xt=F[rt],{object:ot,geometry:Ce,material:et,group:$e}=xt;if(et.side===Si&&ot.layers.test(z.layers)){const jt=et.side;et.side=Wt,et.needsUpdate=!0,sl(ot,V,z,Ce,et,$e),et.side=jt,et.needsUpdate=!0,We=!0}}We===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}v.setRenderTarget(ce,me,Te),v.setClearColor(ie,te),we!==void 0&&(z.viewport=we),v.toneMapping=Le}function Hs(M,F,V){const z=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=M.length;O<oe;O++){const fe=M[O],{object:ce,geometry:me,group:Te}=fe;let Le=fe.material;Le.allowOverride===!0&&z!==null&&(Le=z),ce.layers.test(V.layers)&&sl(ce,F,V,me,Le,Te)}}function sl(M,F,V,z,O,oe){M.onBeforeRender(v,F,V,z,O,oe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,F,V,z,M,oe),O.transparent===!0&&O.side===Si&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,v.renderBufferDirect(V,F,z,O,M,oe),O.side=Vi,O.needsUpdate=!0,v.renderBufferDirect(V,F,z,O,M,oe),O.side=Si):v.renderBufferDirect(V,F,z,O,M,oe),M.onAfterRender(v,F,V,z,O,oe)}function Gs(M,F,V){F.isScene!==!0&&(F=at);const z=x.get(M),O=A.state.lights,oe=A.state.shadowsArray,fe=O.state.version,ce=xe.getParameters(M,O.state,oe,F,V),me=xe.getProgramCacheKey(ce);let Te=z.programs;z.environment=M.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(M.isMeshStandardMaterial?$:X).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",_i),Te=new Map,z.programs=Te);let Le=Te.get(me);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===fe)return al(M,ce),Le}else ce.uniforms=xe.getUniforms(M),M.onBeforeCompile(ce,v),Le=xe.acquireProgram(ce,me),Te.set(me,Le),z.uniforms=ce.uniforms;const we=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=ge.uniform),al(M,ce),z.needsLights=Nh(M),z.lightsStateVersion=fe,z.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function rl(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Cr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function al(M,F){const V=x.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Dh(M,F,V,z,O){F.isScene!==!0&&(F=at),I.resetTextureUnits();const oe=F.fog,fe=z.isMeshStandardMaterial?F.environment:null,ce=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vt,me=(z.isMeshStandardMaterial?$:X).get(z.envMap||fe),Te=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!V.morphAttributes.position,We=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color;let _t=Ei;z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_t=v.toneMapping);const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=xt!==void 0?xt.length:0,Ce=x.get(z),et=A.state.lights;if(_e===!0&&(Ke===!0||M!==j)){const Ut=M===j&&z.id===q;ge.setState(z,M,Ut)}let $e=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==et.state.version||Ce.outputColorSpace!==ce||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==me||z.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ge.numPlanes||Ce.numIntersection!==ge.numIntersection)||Ce.vertexAlphas!==Te||Ce.vertexTangents!==Le||Ce.morphTargets!==we||Ce.morphNormals!==We||Ce.morphColors!==rt||Ce.toneMapping!==_t||Ce.morphTargetsCount!==ot)&&($e=!0):($e=!0,Ce.__version=z.version);let jt=Ce.currentProgram;$e===!0&&(jt=Gs(z,F,O));let yn=!1,qt=!1,ls=!1;const ht=jt.getUniforms(),Ht=Ce.uniforms;if(Me.useProgram(jt.program)&&(yn=!0,qt=!0,ls=!0),z.id!==q&&(q=z.id,qt=!0),yn||j!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",M.projectionMatrix),ht.setValue(P,"viewMatrix",M.matrixWorldInverse);const Gt=ht.map.cameraPosition;Gt!==void 0&&Gt.setValue(P,Ye.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,qt=!0,ls=!0)}if(Ce.needsLights&&(et.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",et.state.directionalShadowMap,I),et.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",et.state.spotShadowMap,I),et.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",et.state.pointShadowMap,I)),O.isSkinnedMesh){ht.setOptional(P,O,"bindMatrix"),ht.setOptional(P,O,"bindMatrixInverse");const Ut=O.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(P,"boneTexture",Ut.boneTexture,I))}O.isBatchedMesh&&(ht.setOptional(P,O,"batchingTexture"),ht.setValue(P,"batchingTexture",O._matricesTexture,I),ht.setOptional(P,O,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",O._indirectTexture,I),ht.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",O._colorsTexture,I));const ei=V.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Ge.update(O,V,jt),(qt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ht.setValue(P,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ht.envMap.value=me,Ht.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&F.environment!==null&&(Ht.envMapIntensity.value=F.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=e0()),qt&&(ht.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Ih(Ht,ls),oe&&z.fog===!0&&Ie.refreshFogUniforms(Ht,oe),Ie.refreshMaterialUniforms(Ht,z,Be,Oe,A.state.transmissionRenderTarget[M.id]),Cr.upload(P,rl(Ce),Ht,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cr.upload(P,rl(Ce),Ht,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(P,"center",O.center),ht.setValue(P,"modelViewMatrix",O.modelViewMatrix),ht.setValue(P,"normalMatrix",O.normalMatrix),ht.setValue(P,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Gt=0,Wr=Ut.length;Gt<Wr;Gt++){const sn=Ut[Gt];J.update(sn,jt),J.bind(sn,jt)}}return jt}function Ih(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Nh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,F,V){const z=x.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=F,x.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const V=x.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Fh=P.createFramebuffer();this.setRenderTarget=function(M,F=0,V=0){k=M,L=F,H=V;let z=null,O=!1,oe=!1;if(M){const ce=x.get(M);if(ce.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,ce.__webglFramebuffer),B.copy(M.viewport),N.copy(M.scissor),W=M.scissorTest,Me.viewport(B),Me.scissor(N),Me.setScissorTest(W),q=-1;return}else if(ce.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(ce.__hasExternalTextures)I.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(ce.__boundDepthTexture!==Le){if(Le!==null&&x.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const me=M.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(oe=!0);const Te=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?z=Te[F][V]:z=Te[F],O=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?z=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[V]:z=Te,B.copy(M.viewport),N.copy(M.scissor),W=M.scissorTest}else B.copy(Y).multiplyScalar(Be).floor(),N.copy(Z).multiplyScalar(Be).floor(),W=pe;if(V!==0&&(z=Fh),Me.bindFramebuffer(P.FRAMEBUFFER,z)&&Me.drawBuffers(M,z),Me.viewport(B),Me.scissor(N),Me.setScissorTest(W),O){const ce=x.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ce.__webglTexture,V)}else if(oe){const ce=F;for(let me=0;me<M.textures.length;me++){const Te=x.get(M.textures[me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+me,Te.__webglTexture,V,ce)}}else if(M!==null&&V!==0){const ce=x.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,V)}q=-1},this.readRenderTargetPixels=function(M,F,V,z,O,oe,fe,ce=0){if(!(M&&M.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){Me.bindFramebuffer(P.FRAMEBUFFER,me);try{const Te=M.textures[ce],Le=Te.format,we=Te.type;if(!lt.textureFormatReadable(Le)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(we)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-z&&V>=0&&V<=M.height-O&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),P.readPixels(F,V,z,O,ee.convert(Le),ee.convert(we),oe))}finally{const Te=k!==null?x.get(k).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,z,O,oe,fe,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=M.width-z&&V>=0&&V<=M.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,me);const Te=M.textures[ce],Le=Te.format,we=Te.type;if(!lt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),P.readPixels(F,V,z,O,ee.convert(Le),ee.convert(we),0);const rt=k!==null?x.get(k).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,rt);const _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Su(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(We),P.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,V=0){const z=Math.pow(2,-V),O=Math.floor(M.image.width*z),oe=Math.floor(M.image.height*z),fe=F!==null?F.x:0,ce=F!==null?F.y:0;I.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,fe,ce,O,oe),Me.unbindTexture()};const Uh=P.createFramebuffer(),Oh=P.createFramebuffer();this.copyTextureToTexture=function(M,F,V=null,z=null,O=0,oe=null){oe===null&&(O!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let fe,ce,me,Te,Le,we,We,rt,_t;const xt=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(V!==null)fe=V.max.x-V.min.x,ce=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Le=V.min.y,we=V.isBox3?V.min.z:0;else{const ei=Math.pow(2,-O);fe=Math.floor(xt.width*ei),ce=Math.floor(xt.height*ei),M.isDataArrayTexture?me=xt.depth:M.isData3DTexture?me=Math.floor(xt.depth*ei):me=1,Te=0,Le=0,we=0}z!==null?(We=z.x,rt=z.y,_t=z.z):(We=0,rt=0,_t=0);const ot=ee.convert(F.format),Ce=ee.convert(F.type);let et;F.isData3DTexture?(I.setTexture3D(F,0),et=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),et=P.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const $e=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),ls=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);const ht=M.isDataArrayTexture||M.isData3DTexture,Ht=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const ei=x.get(M),Ut=x.get(F),Gt=x.get(ei.__renderTarget),Wr=x.get(Ut.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let sn=0;sn<me;sn++)ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(M).__webglTexture,O,we+sn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(F).__webglTexture,oe,_t+sn)),P.blitFramebuffer(Te,Le,fe,ce,We,rt,fe,ce,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||x.has(M)){const ei=x.get(M),Ut=x.get(F);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Uh),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Oh);for(let Gt=0;Gt<me;Gt++)ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ei.__webglTexture,O,we+Gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ei.__webglTexture,O),Ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,_t+Gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,oe),O!==0?P.blitFramebuffer(Te,Le,fe,ce,We,rt,fe,ce,P.COLOR_BUFFER_BIT,P.NEAREST):Ht?P.copyTexSubImage3D(et,oe,We,rt,_t+Gt,Te,Le,fe,ce):P.copyTexSubImage2D(et,oe,We,rt,Te,Le,fe,ce);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ht?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(et,oe,We,rt,_t,fe,ce,me,ot,Ce,xt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(et,oe,We,rt,_t,fe,ce,me,ot,xt.data):P.texSubImage3D(et,oe,We,rt,_t,fe,ce,me,ot,Ce,xt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,We,rt,fe,ce,ot,Ce,xt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,We,rt,xt.width,xt.height,ot,xt.data):P.texSubImage2D(P.TEXTURE_2D,oe,We,rt,fe,ce,ot,Ce,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ls),oe===0&&F.generateMipmaps&&P.generateMipmap(et),Me.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){L=0,H=0,k=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function Cc(r,e){if(e===hu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===So||e===th){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===So)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Rc extends as{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new M0(t)})}load(e,t,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ws.extractUrlBase(e);a=ws.resolveURL(c,this.path)}else a=ws.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Mh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wh){try{a[Xe.KHR_BINARY_GLTF]=new S0(e)}catch(u){n&&n(u);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new N0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new s0;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new y0(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new b0;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new E0;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function i0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class n0{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new en(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vd(h),c.distance=u;break;case"spot":c=new zd(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class s0{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,i){const n=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(n)}}class r0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class a0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(s)}}class o0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class l0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class c0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class h0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class u0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Vt),Promise.all(s)}}class d0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class f0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(s)}}class p0{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class m0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class g0{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class _0{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class x0{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class v0{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class M0{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ee,m=new w,p=new Wi,b=new w(1,1,1),E=new fd(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,_.compose(m,p,b));for(const y in l)if(y==="_COLOR_0"){const A=l[y];E.instanceColor=new bo(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);qe.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const wh="glTF",Ss=12,Pc={JSON:1313821514,BIN:5130562};class S0{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ss),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ss,s=new DataView(e,Ss);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Pc.JSON){const c=new Uint8Array(e,Ss+a,o);this.content=i.decode(c)}else if(l===Pc.BIN){const c=Ss+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Ro[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Ro[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Yn[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,Vt,d)})})}}class b0{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class E0{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Ch extends ks{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,E=p-d+u;for(let y=0;y!==o;y++){const A=a[_+y+o],R=a[_+y+l]*h,C=a[g+y+o],U=a[g+y]*h;s[y]=b*A+E*R+m*C+p*U}return s}}const T0=new Wi;class A0 extends Ch{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return T0.fromArray(s).normalize().toArray(s),s}}const ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lc={9728:Tt,9729:At,9984:Yc,9985:yr,9986:bs,9987:Oi},Dc={33071:yi,33648:Rr,10497:Zn},wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ro={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w0={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Ps},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function C0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),r.DefaultMaterial}function un(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function vi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R0(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function P0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L0(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ra(t.attributes):e=r.indices+":"+Ra(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+Ra(r.targets[i]);return e}function Ra(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Po(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function D0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const I0=new Ee;class N0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator!="undefined"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||i&&n<17||s&&a<98?this.textureLoader=new Od(this.options.manager):this.textureLoader=new Gd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return un(s,o,n),vi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(ws.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=wa[n.type],o=Yn[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new zt(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=wa[n.type],c=Yn[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let E=t.cache.get(b);E||(_=new c(o,p*f,n.count*f/h),E=new dh(_,f/h),t.cache.add(b,E)),m=new Ns(E,l,d%f/h,g)}else o===null?_=new c(n.count*l):_=new c(o,d,n.count*l),m=new zt(_,l,g);if(n.sparse!==void 0){const p=wa.SCALAR,b=Yn[n.sparse.indices.componentType],E=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,A=new b(a[1],E,n.sparse.count*p),R=new c(a[2],y,n.sparse.count*l);o!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,U=A.length;C<U;C++){const v=A[C];if(m.setX(v,R[C*l]),l>=2&&m.setY(v,R[C*l+1]),l>=3&&m.setZ(v,R[C*l+2]),l>=4&&m.setW(v,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Lc[d.magFilter]||At,h.minFilter=Lc[d.minFilter]||Oi,h.wrapS=Dc[d.wrapS]||Zn,h.wrapT=Dc[d.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tt&&h.minFilter!==At,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new wt(_);m.needsUpdate=!0,d(m)}),t.load(ws.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),vi(u,a),u.userData.mimeType=a.mimeType||D0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new gh,mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new _n,mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Us}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=n[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Si);const h=s.alphaMode||Ca.OPAQUE;if(h===Ca.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ca.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==gn){const u=s.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],Vt)}return s.emissiveTexture!==void 0&&a!==gn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),vi(u,s),t.associations.set(u,{materials:e}),s.extensions&&un(n,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ic(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=L0(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ic(new Et,c,t),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?C0(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const b=c[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new hd(_,b):new Xt(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=Cc(p.geometry,th):m.mode===ni.TRIANGLE_FAN&&(p.geometry=Cc(p.geometry,So));else if(m.mode===ni.LINES)p=new Yo(_,b);else if(m.mode===ni.LINE_STRIP)p=new qn(_,b);else if(m.mode===ni.LINE_LOOP)p=new _d(_,b);else if(m.mode===ni.POINTS)p=new xd(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&P0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),vi(p,s),m.extensions&&un(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&un(n,u[0],s),u[0];const d=new Qi;s.extensions&&un(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(gt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Br(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),vi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ee;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jo(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],_=f.target,m=_.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,b=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let E=0,y=d.length;E<y;E++){const A=d[E],R=f[E],C=g[E],U=_[E],v=m[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=i._createAnimationTracks(A,R,C,U,v);if(S)for(let L=0;L<S.length;L++)p.push(S[L])}const b=new Pd(s,void 0,p);return vi(b,n),b})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){!f.isSkinnedMesh||f.bind(d,I0)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new mh:c.length>1?h=new Qi:c.length===1?h=c[0]:h=new qe,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),vi(h,s),s.extensions&&un(i,h,s),s.matrix!==void 0){const u=new Ee;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Qi;i.name&&(s.name=n.createUniqueName(i.name)),vi(s,i),i.extensions&&un(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof mi||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const a=[],o=e.name?e.name:e.uuid,l=[];Zi[s.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Zi[s.path]){case Zi.weights:c=ts;break;case Zi.rotation:c=is;break;case Zi.translation:case Zi.scale:c=ns;break;default:switch(i.itemSize){case 1:c=ts;break;case 2:case 3:default:c=ns;break}break}const h=n.interpolation!==void 0?w0[n.interpolation]:Ls,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Zi[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Po(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof is?A0:Ch;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function F0(r,e,t){const i=e.attributes,n=new dt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){const h=Po(Yn[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new w,l=new w;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Po(Yn[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new Qt;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Ic(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=Ro[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return je.workingColorSpace!==Vt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),vi(r,e),F0(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?R0(r,e.targets,t):r})}const Ae={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},st={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},Ue={x:0,y:0},$t={camera:new Ee,gizmos:new Ee},ut={type:"change"},ui={type:"start"},ii={type:"end"},U0=new zr,bt=new w,Nc=new Ee,Fc=new Ee,hi=new w,Mr=1e-6;class O0 extends rf{constructor(e,t=null,i=null){super(e,t),this.scene=i,this.target=new w,this._currentTarget=new w,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new De,this._v3_1=new w,this._v3_2=new w,this._m4_1=new Ee,this._m4_2=new Ee,this._quat=new Wi,this._translationMatrix=new Ee,this._rotationMatrix=new Ee,this._scaleMatrix=new Ee,this._rotationAxis=new w,this._cameraMatrixState=new Ee,this._cameraProjectionState=new Ee,this._fovState=1,this._upState=new w,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Ee,this._up0=new w,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Ee,this._gizmoMatrixState0=new Ee,this._target0=new w,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=st.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new w,this._startCursorPosition=new w,this._grid=null,this._gridPosition=new w,this._gizmos=new Qi,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new w,this._cursorPosCurr=new w,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.enableFocus=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=Ae.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.initializeMouseActions(),this._onContextMenu=z0.bind(this),this._onWheel=W0.bind(this),this._onPointerUp=G0.bind(this),this._onPointerMove=H0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerCancel=k0.bind(this),this._onWindowResize=B0.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel,{passive:!1}),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize)}onSinglePanStart(e,t){if(this.enabled)switch(this.dispatchEvent(ui),this.setCenter(e.clientX,e.clientY),t){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ut)),this.updateTbState(Ae.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(ut));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(Ae.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,Ue.x,Ue.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(ut);break;case"FOV":if(!this.object.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ut)),this.updateTbState(Ae.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ut)),this.updateTbState(Ae.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(e,t){if(this.enabled){const i=t!=this._state;switch(this.setCenter(e.clientX,e.clientY),t){case Ae.PAN:this.enablePan&&(i?(this.dispatchEvent(ii),this.dispatchEvent(ui),this.updateTbState(t,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case Ae.ROTATE:if(this.enableRotate)if(i)this.dispatchEvent(ii),this.dispatchEvent(ui),this.updateTbState(t,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,Ue.x,Ue.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.object,Ue.x,Ue.y,this.domElement,this._tbRadius));const n=this._startCursorPosition.distanceTo(this._currentCursorPosition),s=this._startCursorPosition.angleTo(this._currentCursorPosition),a=Math.max(n/this._tbRadius,s)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),a)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=a,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case Ae.SCALE:if(this.enableZoom)if(i)this.dispatchEvent(ii),this.dispatchEvent(ui),this.updateTbState(t,!0),this._startCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(a,this._v3_1))}break;case Ae.FOV:if(this.enableZoom&&this.object.isPerspectiveCamera)if(i)this.dispatchEvent(ii),this.dispatchEvent(ui),this.updateTbState(t,!0),this._startCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let l=o/a;l=gt.clamp(l,this.minDistance,this.maxDistance);const c=o*Math.tan(gt.DEG2RAD*this._fovState*.5);let h=gt.RAD2DEG*(Math.atan(c/l)*2);h=gt.clamp(h,this.minFov,this.maxFov);const u=c/Math.tan(gt.DEG2RAD*(h/2));a=o/u,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(h),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),bt.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(u/o),this._m4_1.makeTranslation(bt.x,bt.y,bt.z)}break}this.dispatchEvent(ut)}}onSinglePanEnd(){if(this._state==Ae.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const t=Math.abs((this._wPrev+this._wCurr)/2),i=this;this._animationId=window.requestAnimationFrame(function(n){i.updateTbState(Ae.ANIMATION_ROTATE,!0);const s=i.calculateRotationAxis(i._cursorPosPrev,i._cursorPosCurr);i.onRotationAnim(n,s,Math.min(t,i.wMax))})}else this.updateTbState(Ae.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ut);else this.updateTbState(Ae.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ut)}else(this._state==Ae.PAN||this._state==Ae.IDLE)&&(this.updateTbState(Ae.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(ut));this.dispatchEvent(ii)}onDoubleTap(e){if(this.enabled&&this.enablePan&&this.enableFocus&&this.scene!=null){this.dispatchEvent(ui),this.setCenter(e.clientX,e.clientY);const t=this.unprojectOnObj(this.getCursorNDC(Ue.x,Ue.y,this.domElement),this.object);if(t!=null&&this.enableAnimations){const i=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(n){i.updateTbState(Ae.ANIMATION_FOCUS,!0),i.onFocusAnim(n,t,i._cameraMatrixState,i._gizmoMatrixState)})}else t!=null&&!this.enableAnimations&&(this.updateTbState(Ae.FOCUS,!0),this.focus(t,this.scaleFactor),this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ut))}this.dispatchEvent(ii)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(ui),this.updateTbState(Ae.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=Ae.PAN&&(this.updateTbState(Ae.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(ut))}onDoublePanEnd(){this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ii)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(ui),this.updateTbState(Ae.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.object.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=Ae.ZROTATE&&(this.updateTbState(Ae.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._v3_2)):e=new w().setFromMatrixPosition(this._gizmoMatrixState);const t=gt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,t)),this.dispatchEvent(ut)}}onRotateEnd(){this.updateTbState(Ae.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ii)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(ui),this.updateTbState(Ae.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=Ae.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(Ae.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const t=this._currentFingerDistance/this._startFingerDistance;let i;this.enablePan?this.object.isOrthographicCamera?i=this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(i=this.unprojectOnTbPlane(this.object,Ue.x,Ue.y,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)):i=this._gizmos.position,this.applyTransformMatrix(this.scale(t,i)),this.dispatchEvent(ut)}}onPinchEnd(){this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ii)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(ui),this.updateTbState(Ae.SCALE,!0);let e=0,t=0;const i=this._touchCurrent.length;for(let n=0;n<i;n++)e+=this._touchCurrent[n].clientX,t+=this._touchCurrent[n].clientY;this.setCenter(e/i,t/i),this._startCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let e=0,t=0;const i=this._touchCurrent.length;for(let d=0;d<i;d++)e+=this._touchCurrent[d].clientX,t+=this._touchCurrent[d].clientY;this.setCenter(e/i,t/i);const n=8;this._currentCursorPosition.setY(this.getCursorNDC(Ue.x,Ue.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*n):s>0&&(a=Math.pow(this.scaleFactor,s*n)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let l=o/a;l=gt.clamp(l,this.minDistance,this.maxDistance);const c=o*Math.tan(gt.DEG2RAD*this._fovState*.5);let h=gt.RAD2DEG*(Math.atan(c/l)*2);h=gt.clamp(h,this.minFov,this.maxFov);const u=c/Math.tan(gt.DEG2RAD*(h/2));a=o/u,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(h),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),bt.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(u/o),this._m4_1.makeTranslation(bt.x,bt.y,bt.z),this.dispatchEvent(ut)}}onTriplePanEnd(){this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ii)}setCenter(e,t){Ue.x=e,Ue.y=t}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(e,t){return e.operation==t.operation?e.mouse==t.mouse&&e.key==t.key:!1}setMouseAction(e,t,i=null){const n=["PAN","ROTATE","ZOOM","FOV"],s=[0,1,2,"WHEEL"],a=["CTRL","SHIFT",null];let o;if(!n.includes(e)||!s.includes(t)||!a.includes(i)||t=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":o=Ae.PAN;break;case"ROTATE":o=Ae.ROTATE;break;case"ZOOM":o=Ae.SCALE;break;case"FOV":o=Ae.FOV;break}const l={operation:e,mouse:t,key:i,state:o};for(let c=0;c<this.mouseActions.length;c++)if(this.mouseActions[c].mouse==l.mouse&&this.mouseActions[c].key==l.key)return this.mouseActions.splice(c,1,l),!0;return this.mouseActions.push(l),!0}unsetMouseAction(e,t=null){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==e&&this.mouseActions[i].key==t)return this.mouseActions.splice(i,1),!0;return!1}getOpFromAction(e,t){let i;for(let n=0;n<this.mouseActions.length;n++)if(i=this.mouseActions[n],i.mouse==e&&i.key==t)return i.operation;if(t!=null){for(let n=0;n<this.mouseActions.length;n++)if(i=this.mouseActions[n],i.mouse==e&&i.key==null)return i.operation}return null}getOpStateFromAction(e,t){let i;for(let n=0;n<this.mouseActions.length;n++)if(i=this.mouseActions[n],i.mouse==e&&i.key==t)return i.state;if(t!=null){for(let n=0;n<this.mouseActions.length;n++)if(i=this.mouseActions[n],i.mouse==e&&i.key==null)return i.state}return null}getAngle(e,t){return Math.atan2(t.clientY-e.clientY,t.clientX-e.clientX)*180/Math.PI}updateTouchEvent(e){for(let t=0;t<this._touchCurrent.length;t++)if(this._touchCurrent[t].pointerId==e.pointerId){this._touchCurrent.splice(t,1,e);break}}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.updateMatrix(),(this._state==Ae.ROTATE||this._state==Ae.ZROTATE||this._state==Ae.ANIMATION_ROTATE)&&this.object.up.copy(this._upState).applyQuaternion(this.object.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==Ae.SCALE||this._state==Ae.FOCUS||this._state==Ae.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.object),this.adjustNearFar){const t=this.object.position.distanceTo(this._gizmos.position),i=new dt;i.setFromObject(this._gizmos);const n=new Qt;i.getBoundingSphere(n);const s=Math.max(this._nearPos0,n.radius+n.center.length()),a=t-this._initialNear,o=Math.min(s,a);this.object.near=t-o;const l=Math.min(this._farPos0,-n.radius+n.center.length()),c=t-this._initialFar,h=Math.min(l,c);this.object.far=t-h,this.object.updateProjectionMatrix()}else{let t=!1;this.object.near!=this._initialNear&&(this.object.near=this._initialNear,t=!0),this.object.far!=this._initialFar&&(this.object.far=this._initialFar,t=!0),t&&this.object.updateProjectionMatrix()}}calculateAngularSpeed(e,t,i,n){const s=t-e,a=(n-i)/1e3;return a==0?0:s/a}calculatePointersDistance(e,t){return Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2))}calculateRotationAxis(e,t){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,t).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(e){const t=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const i=gt.DEG2RAD*e.fov*.5,n=Math.atan(e.aspect*Math.tan(i));return Math.tan(Math.min(i,n))*t*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor}focus(e,t,i=1){bt.copy(e).sub(this._gizmos.position).multiplyScalar(i),this._translationMatrix.makeTranslation(bt.x,bt.y,bt.z),Nc.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Fc.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(t,this._gizmos.position)),this._gizmoMatrixState.copy(Nc),this._cameraMatrixState.copy(Fc)}drawGrid(){if(this.scene!=null){let i,n,s,a;if(this.object.isOrthographicCamera){const o=this.object.right-this.object.left,l=this.object.bottom-this.object.top;s=Math.max(o,l),a=s/20,i=s/this.object.zoom*3,n=i/a*this.object.zoom}else if(this.object.isPerspectiveCamera){const o=this.object.position.distanceTo(this._gizmos.position),l=gt.DEG2RAD*this.object.fov*.5,c=Math.atan(this.object.aspect*Math.tan(l));s=Math.tan(Math.max(l,c))*o*2,a=s/20,i=s*3,n=i/a}this._grid==null&&(this._grid=new Sh(i,n,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.object.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.disconnect(),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(e){return 1-Math.pow(1-e,3)}activateGizmos(e){const t=this._gizmos.children[0],i=this._gizmos.children[1],n=this._gizmos.children[2];e?(t.material.setValues({opacity:1}),i.material.setValues({opacity:1}),n.material.setValues({opacity:1})):(t.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}),n.material.setValues({opacity:.6}))}getCursorNDC(e,t,i){const n=i.getBoundingClientRect();return this._v2_1.setX((e-n.left)/n.width*2-1),this._v2_1.setY((n.bottom-t)/n.height*2-1),this._v2_1.clone()}getCursorPosition(e,t,i){return this._v2_1.copy(this.getCursorNDC(e,t,i)),this._v2_1.x*=(this.object.right-this.object.left)*.5,this._v2_1.y*=(this.object.top-this.object.bottom)*.5,this._v2_1.clone()}setCamera(e){e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.object=e,this.object.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(ut)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.object);const i=new wr(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),n=new Et().setFromPoints(i);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=n;this.dispatchEvent(ut)}makeGizmos(e,t){const n=new wr(0,0,t,t).getPoints(this._curvePts),s=new Et().setFromPoints(n),a=new _n({color:16744576,fog:!1,transparent:!0,opacity:.6}),o=new _n({color:8454016,fog:!1,transparent:!0,opacity:.6}),l=new _n({color:8421631,fog:!1,transparent:!0,opacity:.6}),c=new qn(s,a),h=new qn(s,o),u=new qn(s,l),d=Math.PI*.5;if(c.rotation.x=d,h.rotation.y=d,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.object.zoom!==1){const f=1/this.object.zoom;this._scaleMatrix.makeScale(f,f,f),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(f){f.isLine&&(f.geometry.dispose(),f.material.dispose())}),this._gizmos.clear(),this._gizmos.add(c),this._gizmos.add(h),this._gizmos.add(u)}onFocusAnim(e,t,i,n){if(this._timeStart==-1&&(this._timeStart=e),this._state==Ae.ANIMATION_FOCUS){const a=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(n),a>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(t,this.scaleFactor),this._timeStart=-1,this.updateTbState(Ae.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ut);else{const o=this.easeOutCubic(a),l=1-o+this.scaleFactor*o;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(t,l,o),this.dispatchEvent(ut);const c=this;this._animationId=window.requestAnimationFrame(function(h){c.onFocusAnim(h,t,i,n.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(e,t,i){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==Ae.ANIMATION_ROTATE){const n=(e-this._timeStart)/1e3;if(i+-this.dampingFactor*n>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(n,2)+i*n+0,this.applyTransformMatrix(this.rotate(t,this._angleCurrent)),this.dispatchEvent(ut);const a=this;this._animationId=window.requestAnimationFrame(function(o){a.onRotationAnim(o,t,i)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(Ae.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ut)}else this._animationId=-1,this._timeStart=-1,this._state!=Ae.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(ut))}pan(e,t,i=!1){const n=e.clone().sub(t);if(this.object.isOrthographicCamera)n.multiplyScalar(1/this.object.zoom);else if(this.object.isPerspectiveCamera&&i){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const s=this._v3_1.distanceTo(this._v3_2)/this.object.position.distanceTo(this._gizmos.position);n.multiplyScalar(1/s)}return this._v3_1.set(n.x,n.y,0).applyQuaternion(this.object.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),$t}reset(){this.target.copy(this._target0),this.object.zoom=this._zoom0,this.object.isPerspectiveCamera&&(this.object.fov=this._fov0),this.object.near=this._nearPos,this.object.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(this._up0),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this._gizmos.position,this._tbRadius),this.object.lookAt(this._gizmos.position),this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ut)}rotate(e,t){const i=this._gizmos.position;return this._translationMatrix.makeTranslation(-i.x,-i.y,-i.z),this._rotationMatrix.makeRotationAxis(e,-t),this._m4_1.makeTranslation(i.x,i.y,i.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),$t}copyState(){let e;this.object.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix,target:this.target}}):this.object.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraFov:this.object.fov,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix,target:this.target}})),navigator.clipboard.writeText(e)}pasteState(){const e=this;navigator.clipboard.readText().then(function(i){e.setStateFromJSON(i)})}saveState(){this.object.updateMatrix(),this._gizmos.updateMatrix(),this._target0.copy(this.target),this._cameraMatrixState0.copy(this.object.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.object.near,this._farPos=this.object.far,this._zoom0=this.object.zoom,this._up0.copy(this.object.up),this.object.isPerspectiveCamera&&(this._fov0=this.object.fov)}scale(e,t,i=!0){hi.copy(t);let n=1/e;if(this.object.isOrthographicCamera){this.object.zoom=this._zoomState,this.object.zoom*=e,this.object.zoom>this.maxZoom?(this.object.zoom=this.maxZoom,n=this._zoomState/this.maxZoom):this.object.zoom<this.minZoom&&(this.object.zoom=this.minZoom,n=this._zoomState/this.minZoom),this.object.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(n,n,n),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),hi.sub(this._v3_1);const s=hi.clone().multiplyScalar(n);return hi.sub(s),this._m4_1.makeTranslation(hi.x,hi.y,hi.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),$t}else if(this.object.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let s=this._v3_1.distanceTo(hi),a=s-s*n;const o=s-a;if(o<this.minDistance?(n=this.minDistance/s,a=s-s*n):o>this.maxDistance&&(n=this.maxDistance/s,a=s-s*n),bt.copy(hi).sub(this._v3_1).normalize().multiplyScalar(a),this._m4_1.makeTranslation(bt.x,bt.y,bt.z),i){const l=this._v3_2;s=l.distanceTo(hi),a=s-s*n,bt.copy(hi).sub(this._v3_2).normalize().multiplyScalar(a),this._translationMatrix.makeTranslation(l.x,l.y,l.z),this._scaleMatrix.makeScale(n,n,n),this._m4_2.makeTranslation(bt.x,bt.y,bt.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-l.x,-l.y,-l.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return $t}}setFov(e){this.object.isPerspectiveCamera&&(this.object.fov=gt.clamp(e,this.minFov,this.maxFov),this.object.updateProjectionMatrix())}setTransformationMatrices(e=null,t=null){e!=null?$t.camera!=null?$t.camera.copy(e):$t.camera=e.clone():$t.camera=null,t!=null?$t.gizmos!=null?$t.gizmos.copy(t):$t.gizmos=t.clone():$t.gizmos=null}zRotate(e,t){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,t),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,t),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),$t}getRaycaster(){return U0}unprojectOnObj(e,t){const i=this.getRaycaster();i.near=t.near,i.far=t.far,i.setFromCamera(e,t);const n=i.intersectObjects(this.scene.children,!0);for(let s=0;s<n.length;s++)if(n[s].object.uuid!=this._gizmos.uuid&&n[s].face!=null)return n[s].point.clone();return null}unprojectOnTbSurface(e,t,i,n,s){if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(t,i,n)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const a=Math.pow(this._v2_1.x,2),o=Math.pow(this._v2_1.y,2),l=Math.pow(this._tbRadius,2);return a+o<=l*.5?this._v3_1.setZ(Math.sqrt(l-(a+o))):this._v3_1.setZ(l*.5/Math.sqrt(a+o)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(t,i,n)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=e.position.distanceTo(this._gizmos.position),l=Math.pow(s,2),c=this._v3_1.z,h=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(h==0)return a.set(this._v3_1.x,this._v3_1.y,s),a;const u=c/h,d=o;let f=Math.pow(u,2)+1,g=2*u*d,_=Math.pow(d,2)-l,m=Math.pow(g,2)-4*f*_;if(m>=0&&(this._v2_1.setX((-g-Math.sqrt(m))/(2*f)),this._v2_1.setY(u*this._v2_1.x+d),gt.RAD2DEG*this._v2_1.angle()>=45)){const E=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(E),a.z+=o,a}f=u,g=d,_=-l*.5,m=Math.pow(g,2)-4*f*_,this._v2_1.setX((-g-Math.sqrt(m))/(2*f)),this._v2_1.setY(u*this._v2_1.x+d);const p=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(p),a.z+=o,a}}unprojectOnTbPlane(e,t,i,n,s=!1){if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(t,i,n)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(t,i,n)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=this._v3_1.z,l=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let c;if(s?c=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):c=e.position.distanceTo(this._gizmos.position),l==0)return a.set(0,0,0),a;const h=o/l,u=c,d=-u/h,f=Math.sqrt(Math.pow(u,2)+Math.pow(d,2));return a.multiplyScalar(f),a.z=0,a}}updateMatrixState(){this._cameraMatrixState.copy(this.object.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.object.isOrthographicCamera?(this._cameraProjectionState.copy(this.object.projectionMatrix),this.object.updateProjectionMatrix(),this._zoomState=this.object.zoom):this.object.isPerspectiveCamera&&(this._fovState=this.object.fov)}updateTbState(e,t){this._state=e,t&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.object.isOrthographicCamera){if(this.object.zoom>this.maxZoom||this.object.zoom<this.minZoom){const e=gt.clamp(this.object.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(e/this.object.zoom,this._gizmos.position,!0))}}else if(this.object.isPerspectiveCamera){const e=this.object.position.distanceTo(this._gizmos.position);if(e>this.maxDistance+Mr||e<this.minDistance-Mr){const i=gt.clamp(e,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(i/e,this._gizmos.position)),this.updateMatrixState()}(this.object.fov<this.minFov||this.object.fov>this.maxFov)&&(this.object.fov=gt.clamp(this.object.fov,this.minFov,this.maxFov),this.object.updateProjectionMatrix());const t=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.object),t<this._tbRadius-Mr||t>this._tbRadius+Mr){const i=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,n=this._tbRadius/i,a=new wr(0,0,n,n).getPoints(this._curvePts),o=new Et().setFromPoints(a);for(const l in this._gizmos.children)this._gizmos.children[l].geometry=o}}this.object.lookAt(this._gizmos.position)}setStateFromJSON(e){const t=JSON.parse(e);if(t.arcballState!=null){this.target.fromArray(t.arcballState.target),this._cameraMatrixState.fromArray(t.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(t.arcballState.cameraUp),this.object.near=t.arcballState.cameraNear,this.object.far=t.arcballState.cameraFar,this.object.zoom=t.arcballState.cameraZoom,this.object.isPerspectiveCamera&&(this.object.fov=t.arcballState.cameraFov),this._gizmoMatrixState.fromArray(t.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object);const i=new Ee().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(i),this.object.lookAt(this._gizmos.position),this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ut)}}}function B0(){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.object);const e=this._tbRadius/r,i=new wr(0,0,e,e).getPoints(this._curvePts),n=new Et().setFromPoints(i);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=n;this.dispatchEvent(ut)}function z0(r){if(!!this.enabled){for(let e=0;e<this.mouseActions.length;e++)if(this.mouseActions[e].mouse==2){r.preventDefault();break}}}function k0(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=st.NONE}function V0(r){if(r.button==0&&r.isPrimary?(this._downValid=!0,this._downEvents.push(r),this._downStart=performance.now()):this._downValid=!1,r.pointerType=="touch"&&this._input!=st.CURSOR)switch(this._touchStart.push(r),this._touchCurrent.push(r),this._input){case st.NONE:this._input=st.ONE_FINGER,this.onSinglePanStart(r,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case st.ONE_FINGER:case st.ONE_FINGER_SWITCHED:this._input=st.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case st.TWO_FINGER:this._input=st.MULT_FINGER,this.onTriplePanStart(r);break}else if(r.pointerType!="touch"&&this._input==st.NONE){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT"),this._mouseOp=this.getOpFromAction(r.button,e),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=st.CURSOR,this._button=r.button,this.onSinglePanStart(r,this._mouseOp))}}function H0(r){if(r.pointerType=="touch"&&this._input!=st.CURSOR)switch(this._input){case st.ONE_FINGER:this.updateTouchEvent(r),this.onSinglePanMove(r,Ae.ROTATE);break;case st.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],r)*this._devPxRatio>=this._switchSensibility){this._input=st.ONE_FINGER,this.updateTouchEvent(r),this.onSinglePanStart(r,"ROTATE");break}break;case st.TWO_FINGER:this.updateTouchEvent(r),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case st.MULT_FINGER:this.updateTouchEvent(r),this.onTriplePanMove(r);break}else if(r.pointerType!="touch"&&this._input==st.CURSOR){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT");const t=this.getOpStateFromAction(this._button,e);t!=null&&this.onSinglePanMove(r,t)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],r)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function G0(r){if(r.pointerType=="touch"&&this._input!=st.CURSOR){const e=this._touchCurrent.length;for(let t=0;t<e;t++)if(this._touchCurrent[t].pointerId==r.pointerId){this._touchCurrent.splice(t,1),this._touchStart.splice(t,1);break}switch(this._input){case st.ONE_FINGER:case st.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=st.NONE,this.onSinglePanEnd();break;case st.TWO_FINGER:this.onDoublePanEnd(r),this.onPinchEnd(r),this.onRotateEnd(r),this._input=st.ONE_FINGER_SWITCHED;break;case st.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=st.NONE,this.onTriplePanEnd());break}}else r.pointerType!="touch"&&this._input==st.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=st.NONE,this.onSinglePanEnd(),this._button=-1);if(r.isPrimary)if(this._downValid)if(r.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const t=r.timeStamp-this._clickStart,i=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;t<=this._maxInterval&&i<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(r)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function W0(r){if(this.enabled&&this.enableZoom){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT");const t=this.getOpFromAction("WHEEL",e);if(t!=null){r.preventDefault(),this.dispatchEvent(ui);const i=125;let n=r.deltaY/i,s=1;switch(n>0?s=1/this.scaleFactor:n<0&&(s=this.scaleFactor),t){case"ZOOM":if(this.updateTbState(Ae.SCALE,!0),n>0?s=1/Math.pow(this.scaleFactor,n):n<0&&(s=Math.pow(this.scaleFactor,-n)),this.cursorZoom&&this.enablePan){let a;this.object.isOrthographicCamera?a=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(a=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(s,a))}else this.applyTransformMatrix(this.scale(s,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ut),this.dispatchEvent(ii);break;case"FOV":if(this.object.isPerspectiveCamera){this.updateTbState(Ae.FOV,!0),r.deltaX!=0&&(n=r.deltaX/i,s=1,n>0?s=1/Math.pow(this.scaleFactor,n):n<0&&(s=Math.pow(this.scaleFactor,-n))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const a=this._v3_1.distanceTo(this._gizmos.position);let o=a/s;o=gt.clamp(o,this.minDistance,this.maxDistance);const l=a*Math.tan(gt.DEG2RAD*this.object.fov*.5);let c=gt.RAD2DEG*(Math.atan(l/o)*2);c>this.maxFov?c=this.maxFov:c<this.minFov&&(c=this.minFov);const h=l/Math.tan(gt.DEG2RAD*(c/2));s=a/h,this.setFov(c),this.applyTransformMatrix(this.scale(s,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ae.IDLE,!1),this.dispatchEvent(ut),this.dispatchEvent(ii);break}}}}var vt=(r=>(r.RADIAL="radial",r.AXIAL="axial",r.NORMALIZED_RADIAL="normalized_radial",r.SIZE_WEIGHTED="size_weighted",r.HIERARCHICAL="hierarchical",r.FORCE_FIELD="force_field",r))(vt||{});const ve={PROGRESS:{DEFAULT:0,MIN:0,MAX:1,STEP:.01},MULTIPLIER:{DEFAULT:1,MIN:.1,MAX:5,STEP:.1},EXPOSURE:{DEFAULT:1,MIN:.1,MAX:6,STEP:.1},DEFAULT_DURATION:1e3,DEFAULT_MAX_DISTANCE:2,DEFAULT_ADAPT_SIZE:5,WEIGHTS:{BASE:.5,SCALE:1.5,FORCE_FIELD_OFFSET:.2},LIGHTS:{SCENE:{AMBIENT:.2,HEMISPHERE:.3,MAIN_DIRECTIONAL:.5,BACK_DIRECTIONAL:.3,SIDE_DIRECTIONAL:.2},INTERNAL:{AMBIENT:.4,HEMISPHERE:.4,DIRECTIONAL:.8}},INTERACTION:{HIGHLIGHT_COLOR:6600182,HOVER_OPACITY:.8,SELECT_OPACITY:1,EMISSIVE_INTENSITY:.5},DIRECTION:{MIN_LENGTH:.001,ANGLE_FACTOR:.017453292519943295,Z_FACTOR:.5,INDEX_ANGLE:.7853981633974483,XY_OFFSET:.2,Z_OFFSET:.1}};function Pa(r,e="#2563EB"){const t=document.createElement("canvas"),i=128;t.width=i,t.height=i;const n=t.getContext("2d");n&&(n.beginPath(),n.arc(i/2,i/2,i/2.2,0,Math.PI*2),n.fillStyle=e,n.fill(),n.font="bold 72px Inter, system-ui, -apple-system, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#FFFFFF",n.fillText(r,i/2,i/2));const s=new vd(t),a=new fh({map:s,transparent:!0}),o=new ld(a);return o.scale.set(.4,.4,1),o}function X0(r,e){const t=new w;r.getWorldPosition(t);const i=new w().subVectors(t,e);if(i.length()<ve.DIRECTION.MIN_LENGTH){const n=r.uuid||"",s=j0(n);if(i.set(Math.cos(s*ve.DIRECTION.ANGLE_FACTOR),Math.sin(s*ve.DIRECTION.ANGLE_FACTOR),Math.cos(s*ve.DIRECTION.Z_FACTOR)),r.parent){const a=r.parent.children.indexOf(r);a>=0&&(i.x+=Math.cos(a*ve.DIRECTION.INDEX_ANGLE)*ve.DIRECTION.XY_OFFSET,i.y+=Math.sin(a*ve.DIRECTION.INDEX_ANGLE)*ve.DIRECTION.XY_OFFSET,i.z+=(a%3-1)*ve.DIRECTION.Z_OFFSET)}}return i.normalize()}function j0(r){let e=0;for(let t=0;t<r.length;t++)e=(e<<5)-e+r.charCodeAt(t),e|=0;return Math.abs(e%360)}function q0(r){if(typeof r=="string"){const e=document.querySelector(r);if(!e)throw new Error(`\u627E\u4E0D\u5230\u5BB9\u5668\u5143\u7D20: ${r}`);return e}return r}function Uc(r,e,t){return Math.max(e,Math.min(t,r))}function Oc(r){let e=0;return r.traverse(t=>{if(t.isMesh&&t.geometry){const i=t.geometry;i.index?e+=i.index.count/3:i.attributes.position&&(e+=i.attributes.position.count/3)}}),Math.floor(e)}function Y0(r){const e=new dt;return r.forEach(t=>{e.expandByObject(t)}),e}function Bc(r){if(!r)return"Unknown Model";const e=r.split("/");return e[e.length-1].split("?")[0]}function Fr(){return typeof window=="undefined"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768}class K0{constructor(e,t,i,n,s={}){var l,c,h,u,d,f,g,_,m,p,b,E,y,A,R,C,U;this.progress=ve.PROGRESS.DEFAULT,this.multiplier=ve.MULTIPLIER.DEFAULT,this.mode=vt.RADIAL,this.originalPositions=new Map,this.originalRotations=new Map,this.originalScales=new Map,this.explodeDirections=new Map,this.axialDistances=new Map,this.sizeWeights=new Map,this.hierarchicalDepths=new Map,this.modelRadius=1,this.visualScale=1,this.onProgressChangeCallback=null,this.explodableMeshes=[],this.internalLights=[],this.model=e,this.scene=t,this.camera=i,this.renderer=n,this.options={maxDistance:(l=s.maxDistance)!=null?l:ve.DEFAULT_MAX_DISTANCE,duration:(c=s.duration)!=null?c:ve.DEFAULT_DURATION,createUI:(h=s.createUI)!=null?h:!0,viewport:(u=s.viewport)!=null?u:document.body,uiStyle:(d=s.uiStyle)!=null?d:{width:"200px",height:"30px",position:"bottom"},directionStrategy:(f=s.directionStrategy)!=null?f:X0,mode:(g=s.mode)!=null?g:vt.RADIAL,axialVector:(_=s.axialVector)!=null?_:new w(0,1,0),adaptModel:(m=s.adaptModel)!=null?m:!0,model:(p=s.model)!=null?p:e,modelUrl:s.modelUrl||"",showUpload:(b=s.showUpload)!=null?b:!1,showHelpers:(E=s.showHelpers)!=null?E:!1,showPanel:(y=s.showPanel)!=null?y:!0,showProgress:(A=s.showProgress)!=null?A:!0,wheelControlExplosion:(R=s.wheelControlExplosion)!=null?R:!1,models:(C=s.models)!=null?C:[],initialModel:(U=s.initialModel)!=null?U:""},this.mode=this.options.mode,this.options.adaptModel&&this.adaptModelToScene();const a=new dt().setFromObject(this.model);this.modelCenter=a.getCenter(new w);const o=a.getBoundingSphere(new Qt);this.modelRadius=o.radius||1,this.saveOriginalTransforms(this.model),this.setupInternalLighting()}adaptModelToScene(){const t=new dt().setFromObject(this.model).getSize(new w),i=Math.max(t.x,t.y,t.z);if(i>0){const n=ve.DEFAULT_ADAPT_SIZE/i;this.visualScale=n,this.model.scale.multiplyScalar(n);const a=new dt().setFromObject(this.model).getCenter(new w);this.model.position.sub(a)}}setupInternalLighting(){const e=new To(16777215,ve.LIGHTS.INTERNAL.AMBIENT);this.scene.add(e),this.internalLights.push(e);const t=new Jl(16777215,4473924,ve.LIGHTS.INTERNAL.HEMISPHERE);this.scene.add(t),this.internalLights.push(t);const i=new qe;this.camera.add(i);const n=3,s=3;for(let c=0;c<n;c++){const h=c/n*Math.PI*2,u=Math.cos(h)*s,d=Math.sin(h)*s,f=new en(16777215,ve.LIGHTS.INTERNAL.DIRECTIONAL);f.position.set(u,d,1);const g=new qe;g.position.set(0,0,-5),i.add(g),f.target=g,i.add(f),this.internalLights.push(f)}const a=ve.LIGHTS.INTERNAL.DIRECTIONAL*.8,o=new en(16777215,a);o.position.set(5,5,2);const l=new qe;l.position.set(0,0,-5),i.add(l),o.target=l,i.add(o),this.internalLights.push(o)}setInternalLightingVisible(e){this.internalLights.forEach(t=>{t.visible=e}),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}setInternalLightingExposure(e){this.internalLights.forEach(t=>{t instanceof To?t.intensity=ve.LIGHTS.INTERNAL.AMBIENT*e:t instanceof Jl?t.intensity=ve.LIGHTS.INTERNAL.HEMISPHERE*e:t instanceof en&&(t.intensity=ve.LIGHTS.INTERNAL.DIRECTIONAL*e)}),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}calculateAxialDistances(){const e=this.options.axialVector.clone().normalize(),t=new dt().setFromObject(this.model),i=t.min.dot(e),n=t.max.dot(e),s=Math.abs(n-i),a=s>1e-4?1/s:1;for(const o of this.explodableMeshes){const l=this.originalPositions.get(o);if(l){const h=l.clone().sub(this.modelCenter).dot(e);this.axialDistances.set(o,h*a)}}}saveOriginalTransforms(e){this.traverseAndSave(e),this.calculateAxialDistances(),this.calculateSizeWeights(),this.calculateHierarchicalDepths()}calculateHierarchicalDepths(){let e=0;const t=new Map;for(const n of this.explodableMeshes){let s=0,a=n.parent;for(;a&&a!==this.model;)s++,a=a.parent;t.set(n,s),e=Math.max(e,s)}const i=e>0?1/e:1;for(const[n,s]of t)this.hierarchicalDepths.set(n,ve.WEIGHTS.BASE+s*i*ve.WEIGHTS.SCALE)}calculateSizeWeights(){let e=0;const t=new Map;for(const n of this.explodableMeshes)if(n instanceof Xt){const s=n.geometry;s.boundingBox||s.computeBoundingBox();const a=s.boundingBox;if(a){const o=new w;a.getSize(o);const l=o.x*o.y*o.z;t.set(n,l),e=Math.max(e,l)}}const i=e>0?1/e:1;for(const[n,s]of t)this.sizeWeights.set(n,ve.WEIGHTS.BASE+s*i*ve.WEIGHTS.SCALE)}traverseAndSave(e){if(!e.visible)return;const t=new w;if(e.getWorldPosition(t),this.originalPositions.set(e,t.clone()),e.rotation&&this.originalRotations.set(e,e.rotation.clone()),e.scale&&this.originalScales.set(e,e.scale.clone()),"isMesh"in e&&e.isMesh===!0){this.explodableMeshes.push(e);const i=this.options.directionStrategy(e,this.modelCenter);this.explodeDirections.set(e,i)}e.children.forEach(i=>{this.traverseAndSave(i)})}setModel(e){this.reset(),this.model=e,this.options.adaptModel?this.adaptModelToScene():this.visualScale=1;const t=new dt().setFromObject(this.model);this.modelCenter=t.getCenter(new w);const i=t.getBoundingSphere(new Qt);this.modelRadius=i.radius||1,this.originalPositions.clear(),this.originalRotations.clear(),this.originalScales.clear(),this.explodeDirections.clear(),this.sizeWeights.clear(),this.axialDistances.clear(),this.hierarchicalDepths.clear(),this.explodableMeshes=[],this.saveOriginalTransforms(this.model),this.updateInternalLighting(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}updateInternalLighting(){const e=this.modelRadius*3,t=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],i=this.internalLights.filter(n=>n instanceof en);i.length===t.length?i.forEach((n,s)=>{const[a,o,l]=t[s];n.position.set(this.modelCenter.x+a*e,this.modelCenter.y+o*e,this.modelCenter.z+l*e),n.target=this.model}):(this.internalLights.forEach(n=>{this.scene.remove(n),n.dispose&&n.dispose()}),this.internalLights=[],this.setupInternalLighting())}setProgress(e){this.progress=Uc(e,ve.PROGRESS.MIN,ve.PROGRESS.MAX),this.updateExplodedPositions(),this.onProgressChangeCallback&&this.onProgressChangeCallback(this.progress),this.renderer.render(this.scene,this.camera)}updateExplodedPositions(){for(const e of this.explodableMeshes){const t=this.originalPositions.get(e),i=this.explodeDirections.get(e);if(t&&i){const n=this.modelRadius*this.options.maxDistance*this.progress*this.multiplier,s=t.clone();switch(this.mode){case vt.RADIAL:s.add(i.clone().multiplyScalar(n));break;case vt.AXIAL:{const a=this.axialDistances.get(e)||0,o=this.options.axialVector.clone().normalize();s.add(o.multiplyScalar(a*this.modelRadius*this.options.maxDistance*this.progress*this.multiplier));break}case vt.NORMALIZED_RADIAL:{const a=t.clone().sub(this.modelCenter);s.add(a.multiplyScalar(this.options.maxDistance*this.progress*this.multiplier));break}case vt.SIZE_WEIGHTED:{const a=this.sizeWeights.get(e)||1;s.add(i.clone().multiplyScalar(n*a));break}case vt.HIERARCHICAL:{const a=this.hierarchicalDepths.get(e)||1;s.add(i.clone().multiplyScalar(n*a));break}case vt.FORCE_FIELD:{const a=this.originalPositions.get(e);if(a){const c=a.clone().sub(this.modelCenter).length()/this.modelRadius,h=1/(c+ve.WEIGHTS.FORCE_FIELD_OFFSET);s.add(i.clone().multiplyScalar(n*h))}break}}e.parent&&e.parent.worldToLocal(s),e.position.copy(s)}}}setMode(e){this.mode=e,this.updateExplodedPositions(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}getMode(){return this.mode}setAxialVector(e){this.options.axialVector.copy(e),this.calculateAxialDistances(),this.updateExplodedPositions(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}getAxialVector(){return this.options.axialVector}reset(){this.progress=0,this.resetToOriginalPositions(),this.onProgressChangeCallback&&this.onProgressChangeCallback(this.progress)}resetToOriginalPositions(){for(const e of this.explodableMeshes){const t=this.originalPositions.get(e),i=this.originalRotations.get(e),n=this.originalScales.get(e);if(t){const s=t.clone();e.parent&&e.parent.worldToLocal(s),e.position.copy(s)}i&&e.rotation&&e.rotation.set(i.x,i.y,i.z),n&&e.scale&&e.scale.set(n.x,n.y,n.z)}}setProgressChangeCallback(e){this.onProgressChangeCallback=e}setMultiplier(e){this.multiplier=Uc(e,ve.MULTIPLIER.MIN,ve.MULTIPLIER.MAX),this.updateExplodedPositions(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}getMultiplier(){return this.multiplier}getProgress(){return this.progress}getModelCenter(){return this.modelCenter.clone()}getOptions(){return this.options}getVisualScale(){return this.visualScale}dispose(){this.internalLights.forEach(e=>{this.scene.remove(e),e.dispose&&e.dispose()}),this.internalLights=[],this.reset(),this.originalPositions.clear(),this.originalRotations.clear(),this.originalScales.clear(),this.explodeDirections.clear(),this.sizeWeights.clear(),this.axialDistances.clear(),this.hierarchicalDepths.clear(),this.explodableMeshes=[],this.onProgressChangeCallback=null}}class $0{constructor(e,t,i){this.mouseDownPos=new De,this.dragThreshold=2,this.gridHelper=null,this.axesHelper=null,this.axisLabels=null,this.selectedMesh=null,this.isolatedMesh=null,this.enabled=!0,this.originalMaterialState=new Map,this.onSelect=null,this.onFitToView=null,this.onContextMenu=null,this.longPressTimer=null,this.longPressDuration=600,this.isLongPressTriggered=!1,this.lastTouchTime=0,this.scene=e,this.camera=t,this.renderer=i,this.raycaster=new zr,this.mouse=new De,this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onDoubleClick=this.onDoubleClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenuHandler=n=>{!this.enabled||(n.preventDefault(),!this.isLongPressTriggered&&this.onContextMenu&&this.onContextMenu(n,this.selectedMesh))},this.initEventListeners(),this.initHelpers()}setOnSelect(e){this.onSelect=e}setOnFitToView(e){this.onFitToView=e}setOnContextMenu(e){this.onContextMenu=e}setEnabled(e){this.enabled=e}initHelpers(){this.gridHelper=new Sh(10,20,12303291,15658734),this.scene.add(this.gridHelper),this.axesHelper=new sf(5),this.scene.add(this.axesHelper);const e=Pa("X","#FF4444"),t=Pa("Y","#44FF44"),i=Pa("Z","#4444FF");e.position.set(5.5,0,0),t.position.set(0,5.5,0),i.position.set(0,0,5.5),this.axisLabels={x:e,y:t,z:i},this.scene.add(e,t,i)}setHelperVisibility(e){this.gridHelper&&(this.gridHelper.visible=e),this.axesHelper&&(this.axesHelper.visible=e),this.axisLabels&&(this.axisLabels.x.visible=e,this.axisLabels.y.visible=e,this.axisLabels.z.visible=e)}initEventListeners(){const e=this.renderer.domElement;e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("click",this.onClick),e.addEventListener("dblclick",this.onDoubleClick),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("contextmenu",this.onContextMenuHandler),e.addEventListener("touchstart",this.onTouchStart,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1}),e.addEventListener("touchend",this.onTouchEnd,{passive:!1})}onMouseDown(e){Date.now()-this.lastTouchTime<500||this.mouseDownPos.set(e.clientX,e.clientY)}onTouchStart(e){if(!this.enabled||e.touches.length>1)return;this.lastTouchTime=Date.now(),e.cancelable&&e.preventDefault();const t=e.touches[0];this.mouseDownPos.set(t.clientX,t.clientY),this.isLongPressTriggered=!1,this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>{this.handleLongPress(e)},this.longPressDuration)}onTouchMove(e){if(!this.longPressTimer)return;const t=e.touches[0];Math.sqrt(Math.pow(t.clientX-this.mouseDownPos.x,2)+Math.pow(t.clientY-this.mouseDownPos.y,2))>this.dragThreshold*2&&this.clearLongPressTimer()}onTouchEnd(e){if(this.clearLongPressTimer(),this.lastTouchTime=Date.now(),this.isLongPressTriggered)return;const t=e.changedTouches[0];Math.sqrt(Math.pow(t.clientX-this.mouseDownPos.x,2)+Math.pow(t.clientY-this.mouseDownPos.y,2))<=this.dragThreshold*2&&this.handleSelectAt(t.clientX,t.clientY)}handleSelectAt(e,t){const i=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e-i.left)/i.width*2-1,this.mouse.y=-((t-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const s=this.raycaster.intersectObjects(this.scene.children,!0).find(a=>{const o=a.object;return o.isMesh&&this.isGloballyVisible(o)});s?this.selectMesh(s.object):this.deselectMesh()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handleLongPress(e){if(!this.enabled)return;this.isLongPressTriggered=!0;const t=e.touches[0],i=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-i.left)/i.width*2-1,this.mouse.y=-((t.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const s=this.raycaster.intersectObjects(this.scene.children,!0).find(a=>{const o=a.object;return o.isMesh&&this.isGloballyVisible(o)});if(this.onContextMenu){const a=s?s.object:null;a&&a!==this.selectedMesh&&this.selectMesh(a),this.onContextMenu(e,a||this.selectedMesh)}}onDoubleClick(e){if(!this.enabled)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.scene.children,!0).find(s=>s.object.isMesh);if(n){const s=n.object;this.isolateMesh(s)}}isolateMesh(e){if(this.isolatedMesh===e?(this.showAllMeshes(),this.isolatedMesh=null):(this.scene.traverse(t=>{t.isMesh&&(t.visible=t===e)}),this.isolatedMesh=e),this.onFitToView){const t=[];this.scene.traverse(i=>{i.isMesh&&i.visible&&t.push(i)}),this.onFitToView(t)}}toggleMeshVisibility(e){e.visible=!e.visible,!e.visible&&this.selectedMesh===e&&this.deselectMesh()}showAllMeshes(){const e=[];this.scene.traverse(t=>{t.isMesh&&(t.visible=!0,e.push(t))}),this.isolatedMesh=null,this.onFitToView&&this.onFitToView(e)}hideMesh(e){e.visible=!1,this.selectedMesh===e&&this.deselectMesh(),this.isolatedMesh===e&&(this.isolatedMesh=null)}hasHiddenMeshes(){let e=!1;return this.scene.traverse(t=>{t.isMesh&&!t.visible&&(e=!0)}),e}isGloballyVisible(e){let t=e;for(;t;){if(!t.visible)return!1;if(t===this.scene)break;t=t.parent}return!0}onMouseMove(e){const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1}onClick(e){!this.enabled||Date.now()-this.lastTouchTime<500||Math.sqrt(Math.pow(e.clientX-this.mouseDownPos.x,2)+Math.pow(e.clientY-this.mouseDownPos.y,2))>this.dragThreshold||this.handleSelectAt(e.clientX,e.clientY)}selectMesh(e){if(this.selectedMesh===e){this.deselectMesh();return}this.deselectMesh(),this.selectedMesh=e,this.highlightMesh(e),this.onSelect&&this.onSelect(e)}getSelectedMesh(){return this.selectedMesh}deselectMesh(){this.selectedMesh&&(this.restoreMesh(this.selectedMesh),this.selectedMesh=null,this.onSelect&&this.onSelect(null))}highlightMesh(e){if(!e.material)return;const t=`${e.uuid}_0`;this.originalMaterialState.has(t)||(Array.isArray(e.material)?e.material=e.material.map(n=>n.clone()):e.material=e.material.clone(),this.originalMaterialState.set(t,{emissive:new Pe,emissiveIntensity:0})),(Array.isArray(e.material)?e.material:[e.material]).forEach((n,s)=>{var a;if(n instanceof Us){const o=`${e.uuid}_${s}`;this.originalMaterialState.has(o)||this.originalMaterialState.set(o,{emissive:n.emissive.clone(),emissiveIntensity:n.emissiveIntensity,color:n.color.clone()}),n.color.set(0),n.emissive.set(((a=ve.INTERACTION)==null?void 0:a.HIGHLIGHT_COLOR)||6600182),n.emissiveIntensity=1}})}restoreMesh(e){if(!e.material)return;(Array.isArray(e.material)?e.material:[e.material]).forEach((i,n)=>{if(i instanceof Us){const s=`${e.uuid}_${n}`,a=this.originalMaterialState.get(s);a&&(i.emissive.copy(a.emissive),i.emissiveIntensity=a.emissiveIntensity,a.color&&i.color&&i.color.copy(a.color),this.originalMaterialState.delete(s))}})}dispose(){const e=this.renderer.domElement;if(e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("click",this.onClick),e.removeEventListener("dblclick",this.onDoubleClick),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("contextmenu",this.onContextMenuHandler),e.removeEventListener("touchstart",this.onTouchStart),e.removeEventListener("touchmove",this.onTouchMove),e.removeEventListener("touchend",this.onTouchEnd),this.clearLongPressTimer(),this.originalMaterialState.clear(),this.gridHelper&&(this.scene.remove(this.gridHelper),this.gridHelper.geometry.dispose(),Array.isArray(this.gridHelper.material)?this.gridHelper.material.forEach(t=>t.dispose()):this.gridHelper.material.dispose(),this.gridHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),Array.isArray(this.axesHelper.material)?this.axesHelper.material.forEach(t=>t.dispose()):this.axesHelper.material.dispose(),this.axesHelper=null),this.axisLabels){const{x:t,y:i,z:n}=this.axisLabels;[t,i,n].forEach(s=>{this.scene.remove(s),s.geometry.dispose(),Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose(),s.material.map&&s.material.map.dispose()}),this.axisLabels=null}}}function Rh(r={}){return{container:`
      position: absolute;
      top: 24px;
      right: 24px;
      width: 260px;
      max-height: calc(100vh - 48px);
      overflow-y: auto;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    `,section:`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `,sectionHeader:`
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    `,title:`
      font-family: 'General Sans', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: -0.01em;
      margin: 0;
      color: var(--exploder-text-main);
    `,labelContainer:`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,label:`
      font-size: 11px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,value:`
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--exploder-accent);
    `,slider:`
      width: 100%;
    `,hint:`
      font-size: 10px;
      color: var(--exploder-text-muted);
      margin-top: 4px;
    `,grid:`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    `,select:`
      width: 100%;
      padding: 10px 12px;
      background: var(--exploder-bg-sub);
      border: 1px solid var(--exploder-border);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--exploder-text-main);
      outline: none;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
    `,buttonReset:`
      width: 100%;
      padding: 12px;
      background: #111827;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `,buttonResetHover:`
      background: #000000;
      transform: translateY(-1px);
    `,buttonResetActive:`
      transform: scale(0.98);
    `,zoomContainer:`
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
      z-index: 1000;
    `,zoomButton:`
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: var(--exploder-text-main);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
      outline: none;
    `,zoomButtonHover:`
      background: rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      color: var(--exploder-accent);
    `,zoomButtonActive:`
      transform: translateY(0) scale(0.95);
      background: rgba(255, 255, 255, 0.2);
    `}}function zc(r,e,t){return t=Math.max(0,Math.min(1,(t-r)/(e-r))),t*t*(3-2*t)}function Z0(r,e){return Math.sqrt(r*r+e*e)}function J0(r,e,t,i,n){const s=Math.abs(r)-t+n,a=Math.abs(e)-i+n;return Math.min(Math.max(s,a),0)+Z0(Math.max(s,0),Math.max(a,0))-n}function Q0(r,e){return{type:"t",x:r,y:e}}function ex(){return"lg-"+Math.random().toString(36).substr(2,5)}class Os{constructor(e,t){this.mouse={x:0,y:0},this.mouseUsed=!1,this.canvasDPI=window.devicePixelRatio||1,this.id=ex(),this.width=t.width,this.height=t.height,this.onMouseMove=i=>{const n=this.targetElement.getBoundingClientRect();this.mouse.x=(i.clientX-n.left)/n.width,this.mouse.y=(i.clientY-n.top)/n.height,this.mouseUsed&&this.render()},this.fragment=t.fragment||(i=>{const n=i.x-.5,s=i.y-.5,a=J0(n,s,.3,.2,.6),o=zc(.8,0,a-.3),l=zc(0,1,o);return Q0(n*l+.5,s*l+.5)}),this.init(e)}init(e){this.targetElement=e,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("style","position:absolute; width:0; height:0; pointer-events:none;");const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","filter");i.setAttribute("id",`${this.id}_filter`),i.setAttribute("filterUnits","userSpaceOnUse"),i.setAttribute("colorInterpolationFilters","sRGB"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("width",this.width.toString()),i.setAttribute("height",this.height.toString()),this.feImage=document.createElementNS("http://www.w3.org/2000/svg","feImage"),this.feImage.setAttribute("id",`${this.id}_map`),this.feImage.setAttribute("result","map"),this.feImage.setAttribute("width",this.width.toString()),this.feImage.setAttribute("height",this.height.toString()),this.feDisplacementMap=document.createElementNS("http://www.w3.org/2000/svg","feDisplacementMap"),this.feDisplacementMap.setAttribute("in","SourceGraphic"),this.feDisplacementMap.setAttribute("in2","map"),this.feDisplacementMap.setAttribute("xChannelSelector","R"),this.feDisplacementMap.setAttribute("yChannelSelector","G"),i.appendChild(this.feImage),i.appendChild(this.feDisplacementMap),t.appendChild(i),this.svg.appendChild(t),document.body.appendChild(this.svg),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.updateSize(this.width,this.height),e.style.backdropFilter=`url(#${this.id}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,e.style.webkitBackdropFilter=`url(#${this.id}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,this.render(),e.addEventListener("mousemove",this.onMouseMove)}updateSize(e,t){this.width=e,this.height=t,this.canvas.width=e*this.canvasDPI,this.canvas.height=t*this.canvasDPI,this.render()}render(){const e=this.canvas.width,t=this.canvas.height;if(e<=0||t<=0)return;const i=new Proxy(this.mouse,{get:(l,c)=>(this.mouseUsed=!0,l[c])});this.mouseUsed=!1;const n=new Uint8ClampedArray(e*t*4);let s=0;const a=[];for(let l=0;l<n.length;l+=4){const c=l/4%e,h=Math.floor(l/4/e),u=this.fragment({x:c/e,y:h/t},i),d=u.x*e-c,f=u.y*t-h;s=Math.max(s,Math.abs(d),Math.abs(f)),a.push(d,f)}s*=.5,s<1&&(s=1);let o=0;for(let l=0;l<n.length;l+=4){const c=a[o++]/s+.5,h=a[o++]/s+.5;n[l]=c*255,n[l+1]=h*255,n[l+2]=0,n[l+3]=255}this.context.putImageData(new ImageData(n,e,t),0,0),this.feImage.setAttributeNS("http://www.w3.org/1999/xlink","href",this.canvas.toDataURL()),this.feDisplacementMap.setAttribute("scale",(s/this.canvasDPI).toString())}dispose(){this.targetElement&&(this.targetElement.removeEventListener("mousemove",this.onMouseMove),this.targetElement.style.backdropFilter="",this.targetElement.style.webkitBackdropFilter=""),this.svg.remove(),this.canvas.remove()}}class tx{constructor(e,t,i,n,s,a,o,l,c=ve.MULTIPLIER.DEFAULT,h=ve.EXPOSURE.DEFAULT,u=vt.RADIAL,d=new w(0,1,0),f=!1,g=[],_,m={},p=!1,b=!1){this.resizeObserver=null,this.modeButtons=new Map,this.onMultiplierChange=t,this.onExposureChange=i,this.onModeChange=n,this.onAxialChange=s,this.onModelChange=a,this.onHelperVisibilityChange=o,this.onReset=l,this.styles=Rh(m),this.element=document.createElement("aside"),this.element.className="exploder-ui-root exploder-card exploder-scrollbar",this.applyStyle(this.element,this.styles.container);const E=document.createElement("div");this.applyStyle(E,this.styles.sectionHeader),E.innerHTML=`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.72V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.17a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <h3 style="${this.styles.title}">\u53C2\u6570\u63A7\u5236\u9762\u677F</h3>
    `,this.element.appendChild(E);const y=document.createElement("div");this.applyStyle(y,"display: flex; flex-direction: column; gap: 20px; flex: 1;"),this.element.appendChild(y);const A=g&&g.length>0;if(A||p){const B=this.createSection("\u6A21\u578B\u8D44\u6E90",A?"\u9009\u62E9\u6216\u4E0A\u4F20 3D \u8D44\u4EA7":"\u4E0A\u4F20\u672C\u5730 3D \u8D44\u4EA7\u8FDB\u884C\u9884\u89C8");if(A){const N=document.createElement("select");this.modelSelect=N,N.className="exploder-select",this.applyStyle(N,this.styles.select),g.forEach(W=>{const ie=document.createElement("option"),te=typeof W=="string"?W:W.value;ie.value=te,ie.textContent=typeof W=="string"?W.split("/").pop()||W:W.label,te===_&&(ie.selected=!0),N.appendChild(ie)}),B.appendChild(N)}if(p){const N=document.createElement("div");this.applyStyle(N,`
          margin-top: ${A?"8px":"0"};
          padding: 8px;
          background: var(--exploder-bg-sub);
          border: 1px dashed var(--exploder-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.2s;
        `),N.innerHTML=`
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--exploder-text-sub)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
          <span style="font-size: 11px; font-weight: 600; color: var(--exploder-text-sub);">\u4E0A\u4F20\u672C\u5730 GLB</span>
          <input type="file" accept=".glb,.gltf" style="display: none;">
        `;const W=N.querySelector("input");N.onclick=()=>W.click(),W.onchange=ie=>{var ue,Oe;const te=(ue=ie.target.files)==null?void 0:ue[0];if(te){const Be=URL.createObjectURL(te);(Oe=this.onModelChange)==null||Oe.call(this,Be)}},B.appendChild(N)}y.appendChild(B)}const C=this.createSection("","\u8C03\u6574\u7EC4\u4EF6\u4E4B\u95F4\u5206\u79BB\u7684\u8DDD\u79BB\u500D\u6570"),U=this.createLabelWrapper("\u7206\u70B8\u7CFB\u6570(\u5206\u79BB\u500D\u6570)");this.multiplierDisplay=document.createElement("span"),this.multiplierDisplay.className="exploder-value",this.applyStyle(this.multiplierDisplay,this.styles.value),this.multiplierDisplay.textContent=`${c.toFixed(1)}x`,U.appendChild(this.multiplierDisplay),C.insertBefore(U,C.firstChild),this.multiplierSlider=document.createElement("input"),this.multiplierSlider.type="range",this.multiplierSlider.className="exploder-slider",this.multiplierSlider.min=ve.MULTIPLIER.MIN.toString(),this.multiplierSlider.max=ve.MULTIPLIER.MAX.toString(),this.multiplierSlider.step=ve.MULTIPLIER.STEP.toString(),this.multiplierSlider.value=c.toString(),this.applyStyle(this.multiplierSlider,this.styles.slider),C.appendChild(this.multiplierSlider),y.appendChild(C);const v=this.createSection("","\u8C03\u6574 3D \u573A\u666F\u7684\u5149\u7167\u8868\u73B0"),S=this.createLabelWrapper("\u73AF\u5883\u4EAE\u5EA6");this.exposureDisplay=document.createElement("span"),this.exposureDisplay.className="exploder-value",this.applyStyle(this.exposureDisplay,this.styles.value),this.exposureDisplay.textContent=h.toFixed(1),S.appendChild(this.exposureDisplay),v.insertBefore(S,v.firstChild),this.exposureSlider=document.createElement("input"),this.exposureSlider.type="range",this.exposureSlider.className="exploder-slider",this.exposureSlider.min=ve.EXPOSURE.MIN.toString(),this.exposureSlider.max=ve.EXPOSURE.MAX.toString(),this.exposureSlider.step=ve.EXPOSURE.STEP.toString(),this.exposureSlider.value=h.toString(),this.applyStyle(this.exposureSlider,this.styles.slider),v.appendChild(this.exposureSlider),y.appendChild(v);const L=this.createSection("\u7206\u70B8\u6A21\u5F0F","\u9009\u62E9\u4E0D\u540C\u7684\u7EC4\u4EF6\u5206\u79BB\u7B97\u6CD5"),H=document.createElement("div");if(this.applyStyle(H,this.styles.grid),[{id:vt.RADIAL,label:"\u5F84\u5411\u6A21\u5F0F",icon:"M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1"},{id:vt.NORMALIZED_RADIAL,label:"\u5F52\u4E00\u5316\u5F84\u5411",icon:"M21 3h-6M3 21h6M3 3v6M21 21v-6M3 3l7.5 7.5M21 21l-7.5-7.5"},{id:vt.AXIAL,label:"\u8F74\u5411\u6A21\u5F0F",icon:"M7 7h10M7 12h10M7 17h10"},{id:vt.FORCE_FIELD,label:"\u529B\u573A\u5F0F",icon:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"},{id:vt.SIZE_WEIGHTED,label:"\u5C3A\u5BF8\u52A0\u6743",icon:"M3 6h18M7 12h10M10 18h4"},{id:vt.HIERARCHICAL,label:"\u88C5\u914D\u6811\u7EA7",icon:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"}].forEach(B=>{const N=document.createElement("div");N.className=`exploder-mode-btn ${u===B.id?"active":""}`,N.innerHTML=`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${B.icon}"/></svg>
        <span>${B.label}</span>
      `,N.onclick=()=>this.handleModeClick(B.id),H.appendChild(N),this.modeButtons.set(B.id,N)}),L.appendChild(H),this.axialContainer=document.createElement("div"),this.applyStyle(this.axialContainer,`margin-top: 8px; display: ${u===vt.AXIAL?"block":"none"}`),this.axialSelect=document.createElement("select"),this.applyStyle(this.axialSelect,this.styles.select),[{v:"0,1,0",l:"Y \u8F74 (\u5782\u76F4)"},{v:"1,0,0",l:"X \u8F74 (\u6A2A\u5411)"},{v:"0,0,1",l:"Z \u8F74 (\u7EB5\u5411)"}].forEach(B=>{const N=document.createElement("option");N.value=B.v,N.textContent=B.l,B.v===`${d.x},${d.y},${d.z}`&&(N.selected=!0),this.axialSelect.appendChild(N)}),this.axialContainer.appendChild(this.axialSelect),L.appendChild(this.axialContainer),y.appendChild(L),b){const B=this.createSection("\u8F85\u52A9\u89C6\u56FE","\u63A7\u5236\u573A\u666F\u8F85\u52A9\u5143\u7D20\u7684\u663E\u793A"),N=document.createElement("label");this.applyStyle(N,"display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;"),this.helperToggle=document.createElement("input"),this.helperToggle.type="checkbox",this.helperToggle.checked=f,this.helperToggle.style.width="16px",this.helperToggle.style.height="16px",this.helperToggle.style.accentColor="var(--exploder-accent)",N.appendChild(this.helperToggle);const W=document.createElement("span");W.textContent="\u663E\u793A\u7F51\u683C\u4E0E\u5750\u6807\u8F74\u6807\u7B7E",this.applyStyle(W,"font-size: 12px; font-weight: 500; color: var(--exploder-text-sub);"),N.appendChild(W),B.appendChild(N),y.appendChild(B)}const q=document.createElement("div");this.applyStyle(q,"padding-top: 8px; margin-top: auto;"),this.resetButton=document.createElement("button"),this.resetButton.className="exploder-button-reset",this.applyStyle(this.resetButton,this.styles.buttonReset),this.resetButton.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
      <span>\u91CD\u7F6E\u89C6\u56FE\u4E0E\u53C2\u6570</span>
    `,this.resetButton.onmouseenter=()=>this.applyStyle(this.resetButton,this.styles.buttonReset+this.styles.buttonResetHover),this.resetButton.onmouseleave=()=>this.applyStyle(this.resetButton,this.styles.buttonReset),this.resetButton.onmousedown=()=>this.applyStyle(this.resetButton,this.styles.buttonReset+this.styles.buttonResetActive),this.resetButton.onmouseup=()=>this.applyStyle(this.resetButton,this.styles.buttonReset+this.styles.buttonResetHover),q.appendChild(this.resetButton),this.element.appendChild(q),this.multiplierSlider.oninput=B=>{const N=parseFloat(B.target.value);this.updateMultiplier(N),this.onMultiplierChange(N)},this.exposureSlider.oninput=B=>{var W;const N=parseFloat(B.target.value);this.updateExposure(N),(W=this.onExposureChange)==null||W.call(this,N)},this.modelSelect&&(this.modelSelect.onchange=B=>{var N;return(N=this.onModelChange)==null?void 0:N.call(this,B.target.value)}),this.axialSelect.onchange=B=>{var te;const[N,W,ie]=B.target.value.split(",").map(Number);(te=this.onAxialChange)==null||te.call(this,new w(N,W,ie))},this.helperToggle&&(this.helperToggle.onchange=B=>{var N;return(N=this.onHelperVisibilityChange)==null?void 0:N.call(this,B.target.checked)}),this.resetButton.onclick=()=>{var B;(B=this.onReset)==null||B.call(this)},((typeof e=="string"?document.querySelector(e):e)||document.body).appendChild(this.element),this.liquidGlass=new Os(this.element,{width:260,height:this.element.offsetHeight||600}),window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(()=>{this.liquidGlass&&this.liquidGlass.updateSize(260,this.element.offsetHeight)}),this.resizeObserver.observe(this.element))}createSection(e,t){const i=document.createElement("section");if(this.applyStyle(i,this.styles.section),e){const n=document.createElement("label");this.applyStyle(n,this.styles.label),n.textContent=e,i.appendChild(n)}if(t){const n=document.createElement("p");this.applyStyle(n,this.styles.hint),n.textContent=t,i.appendChild(n)}return i}createLabelWrapper(e){const t=document.createElement("div");this.applyStyle(t,this.styles.labelContainer);const i=document.createElement("span");return this.applyStyle(i,this.styles.label),i.textContent=e,t.appendChild(i),t}handleModeClick(e){var t;this.updateMode(e),(t=this.onModeChange)==null||t.call(this,e)}applyStyle(e,t){const i=e.getAttribute("style")||"";e.setAttribute("style",i+t)}show(){this.element.style.display="flex"}hide(){this.element.style.display="none"}update(e){}updateMultiplier(e){this.multiplierSlider.value=e.toString(),this.multiplierDisplay.textContent=`${e.toFixed(1)}x`}updateExposure(e){this.exposureSlider.value=e.toString(),this.exposureDisplay.textContent=e.toFixed(1)}updateMode(e){this.modeButtons.forEach((t,i)=>{i===e?t.classList.add("active"):t.classList.remove("active")}),this.axialContainer&&(this.axialContainer.style.display=e===vt.AXIAL?"block":"none")}updateHelperVisibility(e){this.helperToggle&&(this.helperToggle.checked=e)}updateAxialVector(e){this.axialSelect&&(this.axialSelect.value=`${e.x},${e.y},${e.z}`)}dispose(){var e,t;(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,(t=this.liquidGlass)==null||t.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}class ix{constructor(e,t,i=ve.PROGRESS.DEFAULT,n){this.isMeasureActive=!1,this.onProgressChange=t,this.onMeasureToggle=n,this.element=document.createElement("div"),this.element.className="exploder-hud-root",this.applyStyle(this.element,`
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 72%;
      max-width: 600px;
      z-index: 100;
      pointer-events: auto;
    `);const s=document.createElement("div");s.className="exploder-card",this.applyStyle(s,`
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 12px 24px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `),this.element.appendChild(s);const a=document.createElement("div");this.applyStyle(a,`
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
    `),s.appendChild(a);const o=document.createElement("div");this.applyStyle(o,`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `);const l=document.createElement("span");l.textContent="\u5F53\u524D\u7206\u70B8\u8FDB\u5EA6",this.applyStyle(l,`
      font-size: 10px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `),this.valueDisplay=document.createElement("span"),this.valueDisplay.textContent=`${Math.round(i*100)}%`,this.applyStyle(this.valueDisplay,`
      font-size: 11px;
      font-weight: 700;
      color: var(--exploder-accent);
    `),o.appendChild(l),o.appendChild(this.valueDisplay),a.appendChild(o),this.slider=document.createElement("input"),this.slider.type="range",this.slider.className="exploder-slider",this.slider.min=ve.PROGRESS.MIN.toString(),this.slider.max=ve.PROGRESS.MAX.toString(),this.slider.step=ve.PROGRESS.STEP.toString(),this.slider.value=i.toString(),this.applyStyle(this.slider,`
      width: 100%;
      height: 4px;
      cursor: pointer;
    `),a.appendChild(this.slider);const c=document.createElement("div");this.applyStyle(c,`
      height: 32px;
      width: 1px;
      background: rgba(229, 231, 235, 0.6);
      display: none;
    `),window.matchMedia("(min-width: 640px)").matches&&(c.style.display="block"),s.appendChild(c),this.measureButton=document.createElement("button"),this.measureButton.className="exploder-measure-button",this.measureButton.title="\u6D4B\u91CF",this.applyStyle(this.measureButton,`
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      background: #2563EB;
      color: white;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(229, 231, 235, 0.5);
    `),this.updateMeasureButtonStyle(),this.measureButton.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.2s;">
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
        <path d="m14.5 12.5 2-2"></path>
        <path d="m11.5 9.5 2-2"></path>
        <path d="m8.5 6.5 2-2"></path>
        <path d="m17.5 15.5 2-2"></path>
      </svg>
    `,this.measureButton.addEventListener("mouseenter",()=>{this.measureButton.style.transform="scale(1.08)",this.isMeasureActive||(this.measureButton.style.background="rgba(243, 244, 246, 1)",this.measureButton.style.color="#3B82F6");const u=this.measureButton.querySelector("svg");u&&(u.style.transform="rotate(12deg)")}),this.measureButton.addEventListener("mouseleave",()=>{this.measureButton.style.transform="scale(1)",this.isMeasureActive||(this.measureButton.style.background="rgba(255, 255, 255, 0.6)",this.measureButton.style.color="#6B7280");const u=this.measureButton.querySelector("svg");u&&(u.style.transform="rotate(0deg)")}),this.measureButton.addEventListener("mousedown",()=>{this.measureButton.style.transform="scale(0.95)"}),this.measureButton.addEventListener("mouseup",()=>{this.measureButton.style.transform="scale(1.05)"}),this.measureButton.addEventListener("click",()=>{this.onMeasureToggle&&this.onMeasureToggle()}),s.appendChild(this.measureButton),this.slider.oninput=u=>{const d=parseFloat(u.target.value);this.update(d),this.onProgressChange(d)},((typeof e=="string"?document.querySelector(e):e)||document.body).appendChild(this.element),this.liquidGlass=new Os(s,{width:600,height:80})}setMeasureActive(e){this.isMeasureActive=e,this.updateMeasureButtonStyle()}updateMeasureButtonStyle(){this.isMeasureActive?this.applyStyle(this.measureButton,`
        background: #2563EB;
        color: white;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      `):this.applyStyle(this.measureButton,`
        background: rgba(255, 255, 255, 0.6);
        color: #6B7280;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `)}update(e){this.slider.value=e.toString(),this.valueDisplay.textContent=`${Math.round(e*100)}%`}show(){this.element.style.display="block"}hide(){this.element.style.display="none"}dispose(){var e;(e=this.liquidGlass)==null||e.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}applyStyle(e,t){const i=e.getAttribute("style")||"";e.setAttribute("style",i+t)}}class nx{constructor(e,t="\u52A0\u8F7D\u4E2D...",i=0){this.element=document.createElement("div"),this.element.className="exploder-info-hud",this.applyStyle(this.element,`
      position: absolute;
      top: 24px;
      left: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
      z-index: 100;
    `);const n=document.createElement("div");n.className="exploder-card",this.applyStyle(n,`
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `);const s=document.createElement("div");this.applyStyle(s,`
      width: 40px;
      height: 40px;
      background: var(--exploder-accent);
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    `),s.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>';const a=document.createElement("div");this.applyStyle(a,`
      display: flex;
      flex-direction: column;
    `),this.modelNameDisplay=document.createElement("span"),this.modelNameDisplay.textContent=t,this.applyStyle(this.modelNameDisplay,`
      font-size: 13px;
      font-weight: 700;
      color: var(--exploder-text-main);
      line-height: 1.2;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `),this.faceCountDisplay=document.createElement("span"),this.faceCountDisplay.textContent=`\u9762\u6570: ${i.toLocaleString()}`,this.applyStyle(this.faceCountDisplay,`
      font-size: 10px;
      color: var(--exploder-text-muted);
      font-weight: 700;
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `),a.appendChild(this.modelNameDisplay),a.appendChild(this.faceCountDisplay),n.appendChild(s),n.appendChild(a),this.element.appendChild(n);const o=document.createElement("div");this.applyStyle(o,`
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      width: fit-content;
      pointer-events: auto;
    `);const l=document.createElement("span");l.className="exploder-status-dot exploder-animate-pulse";const c=document.createElement("span");c.textContent="WebGL 2.0 \u6E32\u67D3\u5F15\u64CE\u5DF2\u542F\u52A8",this.applyStyle(c,`
      font-size: 10px;
      font-weight: 700;
      color: var(--exploder-text-sub);
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `),o.appendChild(l),o.appendChild(c),this.element.appendChild(o),((typeof e=="string"?document.querySelector(e):e)||document.body).appendChild(this.element),this.liquidGlass1=new Os(n,{width:300,height:80}),this.liquidGlass2=new Os(o,{width:300,height:40})}update(e,t){this.modelNameDisplay.textContent=e,this.faceCountDisplay.textContent=`\u9762\u6570: ${t.toLocaleString()}`}setModelName(e){this.modelNameDisplay.textContent=e}setFaceCount(e){this.faceCountDisplay.textContent=`\u9762\u6570: ${e.toLocaleString()}`}show(){this.element.style.display="flex"}hide(){this.element.style.display="none"}dispose(){var e,t;(e=this.liquidGlass1)==null||e.dispose(),(t=this.liquidGlass2)==null||t.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}applyStyle(e,t){const i=e.getAttribute("style")||"";e.setAttribute("style",i+t)}}class di{constructor(e,t){this.children=null,this.points=[],this.bounds=e,this.depth=t}isLeaf(){return this.children===null}subdivide(){const e=new w;this.bounds.getCenter(e);const t=this.bounds.min,i=this.bounds.max;this.children=[new di(new dt(new w(t.x,t.y,t.z),new w(e.x,e.y,e.z)),this.depth+1),new di(new dt(new w(e.x,t.y,t.z),new w(i.x,e.y,e.z)),this.depth+1),new di(new dt(new w(t.x,e.y,t.z),new w(e.x,i.y,e.z)),this.depth+1),new di(new dt(new w(e.x,e.y,t.z),new w(i.x,i.y,e.z)),this.depth+1),new di(new dt(new w(t.x,t.y,e.z),new w(e.x,e.y,i.z)),this.depth+1),new di(new dt(new w(e.x,t.y,e.z),new w(i.x,e.y,i.z)),this.depth+1),new di(new dt(new w(t.x,e.y,e.z),new w(e.x,i.y,i.z)),this.depth+1),new di(new dt(new w(e.x,e.y,e.z),new w(i.x,i.y,i.z)),this.depth+1)]}}class Jo{constructor(e,t=8,i=8){this.root=new di(e,0),this.maxDepth=t,this.maxPointsPerNode=i}insert(e,t){this.insertIntoNode(this.root,{position:e,data:t})}insertIntoNode(e,t){if(!!e.bounds.containsPoint(t.position))if(e.isLeaf()){if(e.points.push(t),e.points.length>this.maxPointsPerNode&&e.depth<this.maxDepth){e.subdivide();const i=e.points;e.points=[];for(const n of i)for(const s of e.children)this.insertIntoNode(s,n)}}else for(const i of e.children)this.insertIntoNode(i,t)}findNearest(e,t){const i=[],n=t*t;return this.searchNode(this.root,e,n,i),i.sort((s,a)=>{const o=s.position.distanceToSquared(e),l=a.position.distanceToSquared(e);return o-l}),i}searchNode(e,t,i,n){const s=new w;if(e.bounds.clampPoint(t,s),!(s.distanceToSquared(t)>i))if(e.isLeaf())for(const o of e.points)o.position.distanceToSquared(t)<=i&&n.push(o);else for(const o of e.children)this.searchNode(o,t,i,n)}clear(){this.root=new di(this.root.bounds,0)}static fromPositions(e){const t=new dt;for(let a=0;a<e.length;a+=3){const o=new w(e[a],e[a+1],e[a+2]);t.expandByPoint(o)}const i=new w;t.getSize(i);const n=Math.max(i.x,i.y,i.z)*.01;t.expandByScalar(n);const s=new Jo(t);for(let a=0;a<e.length;a+=3){const o=new w(e[a],e[a+1],e[a+2]);s.insert(o,a/3)}return s}getStats(){const e={totalNodes:0,leafNodes:0,maxDepth:0,totalPoints:0},t=i=>{if(e.totalNodes++,e.maxDepth=Math.max(e.maxDepth,i.depth),i.isLeaf())e.leafNodes++,e.totalPoints+=i.points.length;else for(const n of i.children)t(n)};return t(this.root),e}}var Jt=(r=>(r.VERTEX="vertex",r.EDGE="edge",r.FACE="face",r.HOLE_EDGE="hole_edge",r))(Jt||{}),xn=(r=>(r.LINEAR="linear",r.DIAMETER="diameter",r.RADIUS="radius",r.ANGLE="angle",r))(xn||{});const sx={snapRadius:15,edgeThreshold:8,unit:"mm",snapModes:["vertex","edge","face"],pinColor:"#2563EB",lineWidth:2,lineColor:"rgba(37, 99, 235, 0.4)",labelBgColor:"rgba(255, 255, 255, 0.7)",modelScale:1};class rx{constructor(e){this.camera=e,this.raycaster=new zr}snapToVertex(e,t,i,n=10){var c;this.raycaster.setFromCamera(e,this.camera);const s=this.raycaster.ray.origin.clone(),a=t.findNearest(s,i);if(a.length===0)return null;let o=null,l=n;for(const h of a){const u=(c=h.data)==null?void 0:c.mesh;if(u&&!u.visible)continue;const d=this.getScreenDistance(h.position,e);d<l&&(l=d,o=h)}return o?{position:o.position.clone(),type:Jt.VERTEX,target:o.data,distance:o.position.distanceTo(s)}:null}snapToEdge(e,t,i=5){this.raycaster.setFromCamera(e,this.camera);const n=this.raycaster.ray;let s=null,a=1/0,o=null;for(const l of t){if(l.mesh&&!l.mesh.visible)continue;const c=new nf(l.start,l.end),h=new w;c.closestPointToPoint(n.origin,!0,h);const u=h.distanceTo(n.origin);this.getScreenDistance(h,e)<i&&u<a&&(a=u,s=h,o=l)}return s&&o?{position:s,type:Jt.EDGE,target:o,distance:a}:null}snapToFace(e){const t=this.raycaster.intersectObjects(e,!0);if(t.length>0){const i=t[0];return{position:i.point,type:Jt.FACE,target:{object:i.object,faceIndex:i.faceIndex},distance:i.distance}}return null}detectHoles(e){const t=[];if(!e.index)return t;const i=e.attributes.position,n=e.index.array,s=new Map;for(let a=0;a<n.length;a+=3){const o=n[a],l=n[a+1],c=n[a+2],h=[[o,l],[l,c],[c,o]];for(const[u,d]of h){const f=u<d?`${u}-${d}`:`${d}-${u}`;s.set(f,(s.get(f)||0)+1)}}for(const[a,o]of s.entries())if(o===1){const[l,c]=a.split("-").map(Number),h=new w(i.getX(l),i.getY(l),i.getZ(l)),u=new w(i.getX(c),i.getY(c),i.getZ(c));t.push({start:h,end:u,index:t.length})}return t}extractEdges(e){const t=[];if(!e.index)return t;const i=e.attributes.position,n=e.index.array,s=new Set;for(let a=0;a<n.length;a+=3){const o=n[a],l=n[a+1],c=n[a+2],h=[[o,l],[l,c],[c,o]];for(const[u,d]of h){const f=u<d?`${u}-${d}`:`${d}-${u}`;if(!s.has(f)){s.add(f);const g=new w(i.getX(u),i.getY(u),i.getZ(u)),_=new w(i.getX(d),i.getY(d),i.getZ(d));t.push({start:g,end:_,index:t.length})}}}return t}getScreenDistance(e,t){const i=e.clone().project(this.camera),n=i.x-t.x,s=i.y-t.y;return Math.sqrt(n*n+s*s)*(window.innerWidth/2)}setCamera(e){this.camera=e}}class vn{static formatLength(e,t="mm",i=xn.LINEAR,n=!1){const s=e*1e3;let a=t;t==="mm"&&s>this.MM_TO_M_THRESHOLD?a="m":t==="m"&&s<this.M_TO_MM_THRESHOLD&&(a="mm");let o,l;a==="mm"?(o=s,o<1?l=3:o<10?l=2:o<100?l=1:l=0):(o=e,o<1?l=3:l=2);let c=n?"\u2248 ":"";return i===xn.DIAMETER?c+="\xD8":i===xn.RADIUS&&(c+="R"),{value:o.toFixed(l),unit:a,prefix:c}}static formatAngle(e){return`${e.toFixed(1)}\xB0`}}vn.MM_TO_M_THRESHOLD=1200;vn.M_TO_MM_THRESHOLD=800;class ax{constructor(e,t,i={}){this.enabled=!1,this.octree=null,this.edges=[],this.holeEdges=[],this.targetMeshes=[],this.point1=null,this.point2=null,this.camera=e,this.config={...sx,...i},this.raycaster=new zr,this.snapDetector=new rx(e)}enableMeasurement(){this.enabled=!0,this.reset(),this.onMeasureStartCallback&&this.onMeasureStartCallback()}disableMeasurement(){this.enabled=!1,this.reset()}isEnabled(){return this.enabled}setSnapMode(e){this.config.snapModes=e}setUnit(e){this.config.unit=e}getConfig(){return this.config}updateConfig(e){this.config={...this.config,...e}}getDistance(e,t){return e.distanceTo(t)}formatDistance(e,t){const i=e/this.config.modelScale,n=vn.formatLength(i,t||this.config.unit);return`${n.prefix}${n.value} ${n.unit}`}setPoint1(e){this.point1=e.clone()}setPoint2(e){if(this.point2=e.clone(),this.point1&&this.point2){const i=this.getDistance(this.point1,this.point2)/this.config.modelScale,n=vn.formatLength(i,this.config.unit),s={point1:this.point1,point2:this.point2,distance:i,formattedDistance:`${n.prefix}${n.value} ${n.unit}`,unit:n.unit,isApproximate:!1,type:xn.LINEAR};this.onMeasureCompleteCallback&&this.onMeasureCompleteCallback(s)}}getPoints(){return{point1:this.point1?this.point1.clone():null,point2:this.point2?this.point2.clone():null}}reset(){this.point1=null,this.point2=null}detectSnap(e){this.raycaster.setFromCamera(e,this.camera);for(const t of this.config.snapModes){let i=null;switch(t){case Jt.VERTEX:i=this.snapToVertex(e);break;case Jt.EDGE:i=this.snapToEdge(e);break;case Jt.FACE:i=this.snapToFace();break;case Jt.HOLE_EDGE:i=this.snapToHoleEdge(e);break}if(i)return this.onSnapDetectedCallback&&this.onSnapDetectedCallback(i),i}return null}snapToVertex(e){if(!this.octree)return null;const i=this.camera.position.length()*.1;return this.snapDetector.snapToVertex(e,this.octree,i,this.config.snapRadius)}snapToEdge(e){return this.edges.length===0?null:this.snapDetector.snapToEdge(e,this.edges,this.config.edgeThreshold)}snapToFace(){if(this.targetMeshes.length===0)return null;const e=this.raycaster.intersectObjects(this.targetMeshes,!1);if(e.length>0){const t=e[0];return{position:t.point,type:Jt.FACE,target:t.object,distance:t.distance}}return null}snapToHoleEdge(e){return this.holeEdges.length===0?null:this.snapDetector.snapToEdge(e,this.holeEdges,this.config.edgeThreshold)}onMeasureStart(e){this.onMeasureStartCallback=e}onMeasureComplete(e){this.onMeasureCompleteCallback=e}onSnapDetected(e){this.onSnapDetectedCallback=e}buildSnapStructures(e){var i;this.targetMeshes=[],this.edges=[],this.holeEdges=[];const t=[];if(e.updateMatrixWorld(!0),e.traverse(n=>{if(n.isMesh){const s=n;if(this.targetMeshes.push(s),s.geometry instanceof Et){const a=s.geometry,o=a.attributes.position;if(o){for(let h=0;h<o.count;h++){const u=new w(o.getX(h),o.getY(h),o.getZ(h));u.applyMatrix4(s.matrixWorld),t.push({pos:u,mesh:s,index:h})}const l=this.snapDetector.extractEdges(a);for(const h of l){const u=h.start.clone().applyMatrix4(s.matrixWorld),d=h.end.clone().applyMatrix4(s.matrixWorld);this.edges.push({start:u,end:d,mesh:s,index:this.edges.length})}const c=this.snapDetector.detectHoles(a);for(const h of c){const u=h.start.clone().applyMatrix4(s.matrixWorld),d=h.end.clone().applyMatrix4(s.matrixWorld);this.holeEdges.push({start:u,end:d,mesh:s,index:this.holeEdges.length})}}}}}),t.length===0){this.octree=null;return}this.octree=new Jo(this.calculateBoundingBox(t.map(n=>n.pos)));for(const n of t)this.octree.insert(n.pos,{mesh:n.mesh,index:n.index});console.log("[MeasurementTool] Built snap structures:"),console.log(`  - Target meshes: ${this.targetMeshes.length}`),console.log(`  - Total vertices: ${t.length}`),console.log(`  - Octree nodes: ${((i=this.octree)==null?void 0:i.getStats().totalNodes)||0}`),console.log(`  - Edges: ${this.edges.length}`),console.log(`  - Hole edges: ${this.holeEdges.length}`)}calculateBoundingBox(e){const t=new dt;if(e.length===0)return t;for(const i of e)t.expandByPoint(i);return t.expandByScalar(.1),t}renderMeasurement(e){}dispose(){this.reset(),this.enabled=!1,this.onMeasureStartCallback=void 0,this.onMeasureCompleteCallback=void 0,this.onSnapDetectedCallback=void 0,this.octree=null,this.edges=[],this.holeEdges=[],this.targetMeshes=[]}}class ox{constructor(e,t,i,n){this.visible=!1,this.measurements=[],this.currentPinA=null,this.currentPoint1=null,this.isActive=!1,this.clickCount=0,this.currentSnap=null,this.mouseDownPos=new De,this.dragThreshold=3,this.lastMouseMoveUpdateTime=0,this.lastStaticUpdateTime=0,this.THROTTLE_MS=100,this.previewLabel=null,this.currentPreviewUnit="mm",this.camera=t,this.onActiveChange=n,this.measurementTool=new ax(t,i),this.element=document.createElement("div"),this.element.className="exploder-measurement-root",this.applyStyle(this.element,`
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      display: none;
    `),this.previewDot=this.createPreviewDot(),this.element.appendChild(this.previewDot),this.previewLine=document.createElement("div"),this.applyStyle(this.previewLine,`
      position: absolute;
      height: 2px;
      border-top: 2px dashed rgba(37, 99, 235, 0.5);
      pointer-events: none;
      display: none;
    `),this.element.appendChild(this.previewLine);const s=typeof e=="string"?document.querySelector(e):e;this.container=s||document.body,this.container.appendChild(this.element),this.previewLabel=this.createPreviewLabel(),this.element.appendChild(this.previewLabel),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseClick=this.handleMouseClick.bind(this),this.setupMeasurementCallbacks()}setupMeasurementCallbacks(){this.measurementTool.onMeasureStart(()=>{console.log("[ExploderMeasurement] Measurement started")}),this.measurementTool.onMeasureComplete(e=>{console.log("[ExploderMeasurement] Measurement complete:",e)}),this.measurementTool.onSnapDetected(e=>{this.currentSnap=e})}handleMouseMove(e){if(!this.isActive)return;const t=this.container.getBoundingClientRect(),i=(e.clientX-t.left)/t.width*2-1,n=-((e.clientY-t.top)/t.height)*2+1,s=new De(i,n),a=e.target;if(a.tagName!=="CANVAS"&&!a.classList.contains("exploder-measurement-root")){this.previewDot.style.display="none",this.previewLine.style.display="none",this.previewLabel.style.display="none",this.currentSnap=null;return}const o=this.measurementTool.detectSnap(s);if(o){this.currentSnap=o,this.updatePreviewDotPosition(o.position),this.previewDot.style.display="block";const l=Date.now(),c=l-this.lastMouseMoveUpdateTime>this.THROTTLE_MS;if(this.clickCount===1&&this.currentPoint1){if(this.updateLineElement(this.previewLine,this.currentPoint1,o.position),this.previewLine.style.display="block",c){const h=this.currentPoint1.distanceTo(o.position),u=this.measurementTool.getConfig().modelScale,d=h/u;console.log(`[ExploderMeasurement] Move - WorldDist: ${h.toFixed(4)}, Scale: ${u.toFixed(4)}, Physical: ${d.toFixed(4)}`);const f=o.type===Jt.FACE||o.type===Jt.HOLE_EDGE,g=vn.formatLength(d,this.currentPreviewUnit,xn.LINEAR,f);this.currentPreviewUnit=g.unit,this.updateLabelContent(this.previewLabel,g.value,g.unit,g.prefix),this.lastMouseMoveUpdateTime=l}this.updateLabelPosition(this.previewLabel,this.currentPoint1,o.position),this.previewLabel.style.display="flex"}else this.previewLabel.style.display="none"}else this.previewDot.style.display="none",this.currentSnap=null,this.previewLabel.style.display="none",this.clickCount===1&&(this.previewLine.style.display="none")}handleMouseDown(e){this.mouseDownPos.set(e.clientX,e.clientY)}handleMouseClick(e){if(!this.isActive||e.target.tagName!=="CANVAS"||Math.sqrt(Math.pow(e.clientX-this.mouseDownPos.x,2)+Math.pow(e.clientY-this.mouseDownPos.y,2))>this.dragThreshold||!this.currentSnap)return;const n=this.currentSnap;if(this.clickCount===0)this.currentPoint1=n.position.clone(),this.currentPinA=this.createPin(),this.updatePinPosition3D(this.currentPinA,n.position),this.currentPinA.style.display="flex",this.element.appendChild(this.currentPinA),this.previewDot.style.display="none",this.clickCount=1,this.currentPreviewUnit=this.measurementTool.getConfig().unit;else if(this.clickCount===1&&this.currentPoint1&&this.currentPinA){const s=n.position.clone(),a=this.currentPoint1.distanceTo(s),o=this.measurementTool.getConfig().modelScale,l=a/o,c=n.type===Jt.FACE||n.type===Jt.HOLE_EDGE,h=xn.LINEAR,u=vn.formatLength(l,this.currentPreviewUnit,h,c),d=this.createPin();this.updatePinPosition3D(d,s),d.style.display="flex",this.element.appendChild(d);const f=document.createElement("div");this.applyStyle(f,`
        position: absolute;
        height: 2px;
        border-top: 2px dashed rgba(37, 99, 235, 0.8);
        pointer-events: none;
      `),this.updateLineElement(f,this.currentPoint1,s),this.element.appendChild(f);const g=this.createCompactLabel(u.value,u.unit,u.prefix,this.measurements.length);this.updateLabelPosition(g,this.currentPoint1,s),this.element.appendChild(g);const _={pinA:this.currentPinA,pinB:d,line:f,label:g,point1:this.currentPoint1,point2:s,worldDistance:a,unit:u.unit,type:h};this.measurements.push(_),this.previewDot.style.display="none",this.previewLine.style.display="none",this.previewLabel.style.display="none",this.currentPinA=null,this.currentPoint1=null,this.clickCount=0,console.log(`[ExploderMeasurement] Measurement #${this.measurements.length} complete: ${u.value} ${u.unit}`)}}createPreviewDot(){const e=document.createElement("div");return e.className="exploder-preview-pin",this.applyStyle(e,`
      position: absolute;
      transform: translate(-50%, -100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      display: none;
      z-index: 100;
      opacity: 0.6;
    `),e.innerHTML=`
      <svg width="21" height="27" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3)); display: block;">
        <path d="M14 36L8 22H20L14 36Z" fill="#2563EB"/>
        <circle cx="14" cy="14" r="10" fill="#2563EB" stroke="white" stroke-width="2.5"/>
        <circle cx="14" cy="14" r="3.5" fill="white" opacity="0.9"/>
      </svg>
    `,e}setModelScale(e){console.log(`[ExploderMeasurement] Received model scale: ${e}`),this.measurementTool.updateConfig({modelScale:e}),this.update()}createPin(){const e=document.createElement("div");return e.className="exploder-measure-pin",this.applyStyle(e,`
      position: absolute;
      transform: translate(-50%, -100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      z-index: 1;
    `),e.innerHTML=`
      <svg width="21" height="27" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3)); display: block;">
        <path d="M14 36L8 22H20L14 36Z" fill="#2563EB"/>
        <circle cx="14" cy="14" r="10" fill="#2563EB" stroke="white" stroke-width="2.5"/>
        <circle cx="14" cy="14" r="3.5" fill="white" opacity="0.9"/>
      </svg>
    `,e}createPreviewLabel(){const e=document.createElement("div");return e.className="exploder-measure-preview-label",this.applyStyle(e,`
      position: absolute;
      z-index: 90;
      pointer-events: none;
      background: rgba(37, 99, 235, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 3px 8px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      color: white;
      display: none;
    `),e.innerHTML=`
      <span class="exploder-measure-prefix" style="font-weight: 700;"></span>
      <span class="exploder-measure-value" style="font-weight: 700; font-family: 'Courier New', monospace;">0.00</span>
      <span class="exploder-measure-unit" style="font-size: 9px; opacity: 0.9;">mm</span>
    `,e}createCompactLabel(e,t,i,n){const s=document.createElement("div");s.className="exploder-measure-label",this.applyStyle(s,`
      position: absolute;
      z-index: 2;
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 4px 10px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      transition: all 0.2s;
    `);const a=document.createElement("div");this.applyStyle(a,"display: flex; align-items: center; gap: 2px;");const o=document.createElement("span");o.className="exploder-measure-prefix",o.textContent=i,this.applyStyle(o,`font-weight: 700; color: #2563EB; display: ${i?"inline":"none"};`),a.appendChild(o);const l=document.createElement("span");l.className="exploder-measure-value",l.textContent=e,this.applyStyle(l,`
      font-weight: 700;
      color: #1F2937;
      font-family: 'Courier New', monospace;
    `),a.appendChild(l);const c=document.createElement("span");c.className="exploder-measure-unit",c.textContent=t,this.applyStyle(c,`
      font-weight: 600;
      color: #2563EB;
      font-size: 10px;
    `);const h=document.createElement("button");return h.title="\u5220\u9664",this.applyStyle(h,`
      width: 16px;
      height: 16px;
      border: none;
      background: transparent;
      color: #9CA3AF;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-left: 2px;
      border-radius: 4px;
      transition: all 0.15s;
    `),h.innerHTML=`
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6L6 18"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    `,s.addEventListener("mouseenter",()=>{h.style.display="flex",s.style.paddingRight="6px"}),s.addEventListener("mouseleave",()=>{h.style.display="none",s.style.paddingRight="10px"}),s.addEventListener("click",u=>{u.stopPropagation(),h.style.display==="flex"?(h.style.display="none",s.style.paddingRight="10px"):(h.style.display="flex",s.style.paddingRight="6px")}),s.addEventListener("mousedown",u=>u.stopPropagation()),h.addEventListener("mouseenter",()=>{h.style.color="#EF4444",h.style.background="rgba(239, 68, 68, 0.1)"}),h.addEventListener("mouseleave",()=>{h.style.color="#9CA3AF",h.style.background="transparent"}),h.addEventListener("click",u=>{u.stopPropagation(),this.deleteMeasurement(n)}),s.appendChild(a),s.appendChild(c),s.appendChild(h),s}updateLabelContent(e,t,i,n){const s=e.querySelector(".exploder-measure-value"),a=e.querySelector(".exploder-measure-unit"),o=e.querySelector(".exploder-measure-prefix");s&&(s.textContent=t),a&&(a.textContent=i),o&&(o.textContent=n,o.style.display=n?"inline":"none")}deleteMeasurement(e){const t=this.measurements[e];!t||(t.pinA.remove(),t.pinB.remove(),t.line.remove(),t.label.remove(),this.measurements.splice(e,1),this.measurements.forEach((i,n)=>{const s=i.label.querySelector("button");s&&(s.onclick=a=>{a.stopPropagation(),this.deleteMeasurement(n)})}),console.log(`[ExploderMeasurement] Deleted measurement, ${this.measurements.length} remaining`))}updatePreviewDotPosition(e){const t=e.clone().project(this.camera),i=this.container.getBoundingClientRect(),n=(t.x*.5+.5)*i.width,s=(-t.y*.5+.5)*i.height;this.previewDot.style.left=`${n}px`,this.previewDot.style.top=`${s}px`}updatePinPosition3D(e,t){const i=t.clone().project(this.camera),n=this.container.getBoundingClientRect(),s=(i.x*.5+.5)*n.width,a=(-i.y*.5+.5)*n.height;e.style.left=`${s}px`,e.style.top=`${a}px`}updateLineElement(e,t,i){const n=t.clone().project(this.camera),s=i.clone().project(this.camera),a=this.container.getBoundingClientRect(),o=(n.x*.5+.5)*a.width,l=(-n.y*.5+.5)*a.height,c=(s.x*.5+.5)*a.width,h=(-s.y*.5+.5)*a.height,u=Math.sqrt((c-o)**2+(h-l)**2),d=Math.atan2(h-l,c-o)*(180/Math.PI);e.style.left=`${o}px`,e.style.top=`${l}px`,e.style.width=`${u}px`,e.style.transform=`rotate(${d}deg)`,e.style.transformOrigin="left"}update(){this.isActive&&this.clickCount===1&&this.currentPoint1?(this.updatePinPosition3D(this.currentPinA,this.currentPoint1),this.currentSnap&&(this.updatePreviewDotPosition(this.currentSnap.position),this.updateLineElement(this.previewLine,this.currentPoint1,this.currentSnap.position))):this.isActive&&this.currentSnap&&this.updatePreviewDotPosition(this.currentSnap.position);const e=Date.now(),t=e-this.lastStaticUpdateTime>this.THROTTLE_MS;for(const i of this.measurements){if(t){const n=this.measurementTool.getConfig().modelScale,s=i.worldDistance/n,a=vn.formatLength(s,i.unit,i.type,!1);i.unit=a.unit,this.updateLabelContent(i.label,a.value,a.unit,a.prefix)}this.updatePinPosition3D(i.pinA,i.point1),this.updatePinPosition3D(i.pinB,i.point2),this.updateLineElement(i.line,i.point1,i.point2),this.updateLabelPosition(i.label,i.point1,i.point2)}t&&(this.lastStaticUpdateTime=e)}updateLabelPosition(e,t,i){const n=t.clone().project(this.camera),s=i.clone().project(this.camera),a=this.container.getBoundingClientRect(),o=(n.x*.5+.5)*a.width,l=(-n.y*.5+.5)*a.height,c=(s.x*.5+.5)*a.width,h=(-s.y*.5+.5)*a.height,u=(o+c)/2,d=(l+h)/2,f=Math.sqrt((c-o)**2+(h-l)**2);let g=0;f<80&&(g=-40),e.style.left=`${u}px`,e.style.top=`${d+g}px`,e.style.transform="translate(-50%, -50%)"}buildSnapStructures(e){this.measurementTool.buildSnapStructures(e)}show(){this.visible=!0,this.isActive=!0,this.element.style.display="block",this.measurementTool.enableMeasurement(),this.container.addEventListener("mousemove",this.boundMouseMove),this.container.addEventListener("mousedown",this.boundMouseDown),this.container.addEventListener("click",this.boundMouseClick),this.onActiveChange&&this.onActiveChange(!0),console.log("[ExploderMeasurement] Measurement mode activated")}hide(){this.visible=!1,this.isActive=!1,this.element.style.display="none",this.measurementTool.disableMeasurement(),this.container.removeEventListener("mousemove",this.boundMouseMove),this.container.removeEventListener("mousedown",this.boundMouseDown),this.container.removeEventListener("click",this.boundMouseClick),this.resetCurrentMeasurement(),this.onActiveChange&&this.onActiveChange(!1),console.log("[ExploderMeasurement] Measurement mode deactivated")}toggle(){this.visible?this.hide():this.show()}resetCurrentMeasurement(){this.currentPinA&&(this.currentPinA.remove(),this.currentPinA=null),this.currentPoint1=null,this.clickCount=0,this.currentSnap=null,this.previewDot.style.display="none",this.previewLine.style.display="none"}clearAll(){for(const e of this.measurements)e.pinA.remove(),e.pinB.remove(),e.line.remove(),e.label.remove();this.measurements=[],this.resetCurrentMeasurement(),console.log("[ExploderMeasurement] All measurements cleared")}dispose(){this.hide(),this.clearAll(),this.measurementTool.dispose(),this.element.parentNode&&this.element.parentNode.removeChild(this.element)}applyStyle(e,t){const i=e.getAttribute("style")||"";e.setAttribute("style",i+t)}}class lx{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,g=ve.PROGRESS.DEFAULT,_=ve.MULTIPLIER.DEFAULT,m=ve.EXPOSURE.DEFAULT,p=vt.RADIAL,b=new w(0,1,0),E=!1,y,A,R,C=!1,U=!1,v="\u793A\u4F8B\u6A21\u578B",S=0,L=!0,H=!0){this.element=e,L&&(this.panel=new tx(e,a,o,l,c,h,u,f,_,m,p,b,E,y,A,R,C,U)),H&&(this.hud=new ix(e,s,g,()=>this.toggleMeasurement())),this.measurement=new ox(e,t,i,k=>{this.hud&&this.hud.setMeasureActive(k),d&&d(k)}),this.measurement&&n&&this.measurement.buildSnapStructures(n),L&&(this.infoHUD=new nx(e,v,S)),this.createScrollGuide(e),this.updateResponsiveState(),this.resizeHandler=this.updateResponsiveState.bind(this),window.addEventListener("resize",this.resizeHandler)}createScrollGuide(e){this.scrollGuide=document.createElement("div"),this.scrollGuide.className="exploder-scroll-guide";const t=document.createElement("div");t.className="exploder-scroll-texture";for(let n=0;n<10;n++){const s=document.createElement("div");s.className="exploder-scroll-dot",t.appendChild(s)}const i=document.createElement("div");i.className="exploder-scroll-guide-label",i.innerText="\u6ED1\u52A8\u533A\u57DF",this.scrollGuide.appendChild(t),this.scrollGuide.appendChild(i),e.appendChild(this.scrollGuide),this.scrollGuide.addEventListener("touchstart",n=>{n.stopPropagation()},{passive:!0}),this.scrollGuide.addEventListener("touchmove",n=>{n.stopPropagation()},{passive:!0})}updateResponsiveState(){var t,i,n,s;Fr()?((t=this.panel)==null||t.hide(),(i=this.infoHUD)==null||i.hide()):((n=this.panel)==null||n.show(),(s=this.infoHUD)==null||s.show())}show(){var e,t,i;Fr()||((e=this.panel)==null||e.show(),(t=this.infoHUD)==null||t.show()),(i=this.hud)==null||i.show()}hide(){var e,t,i;(e=this.panel)==null||e.hide(),(t=this.hud)==null||t.hide(),(i=this.infoHUD)==null||i.hide()}update(e){var t,i;(t=this.panel)==null||t.update(e),(i=this.hud)==null||i.update(e)}updateMultiplier(e){var t;(t=this.panel)==null||t.updateMultiplier(e)}updateExposure(e){var t;(t=this.panel)==null||t.updateExposure(e)}updateMode(e){var t;(t=this.panel)==null||t.updateMode(e)}updateAxialVector(e){var t;(t=this.panel)==null||t.updateAxialVector(e)}updateHelperVisibility(e){var t;(t=this.panel)==null||t.updateHelperVisibility(e)}updateModelScale(e){var t;(t=this.measurement)==null||t.setModelScale(e)}updateModel(e){this.panel&&this.panel.updateModel&&this.panel.updateModel(e)}updateInfo(e,t){var i;(i=this.infoHUD)==null||i.update(e,t)}reset(){var e,t,i,n,s,a;(e=this.panel)==null||e.updateMultiplier(ve.MULTIPLIER.DEFAULT),(t=this.panel)==null||t.updateExposure(ve.EXPOSURE.DEFAULT),(i=this.panel)==null||i.updateMode(vt.RADIAL),(n=this.panel)==null||n.updateAxialVector(new w(0,1,0)),(s=this.panel)==null||s.updateHelperVisibility(!0),(a=this.hud)==null||a.update(ve.PROGRESS.DEFAULT)}render(){this.measurement&&this.measurement.update()}toggleMeasurement(){var e;(e=this.measurement)==null||e.toggle()}rebuildSnapStructures(e){var t;(t=this.measurement)==null||t.buildSnapStructures(e)}dispose(){var e,t,i,n,s;window.removeEventListener("resize",this.resizeHandler),(e=this.scrollGuide)==null||e.remove(),this.scrollGuide=void 0,(t=this.panel)==null||t.dispose(),(i=this.hud)==null||i.dispose(),(n=this.infoHUD)==null||n.dispose(),(s=this.measurement)==null||s.dispose()}}function cx(r,e,t,i,n,s,a,o,l,c,h,u,d,f=ve.PROGRESS.DEFAULT,g=ve.MULTIPLIER.DEFAULT,_=ve.EXPOSURE.DEFAULT,m=vt.RADIAL,p=new w(0,1,0),b=!1,E="\u793A\u4F8B\u6A21\u578B",y=0){var C,U;if(r.createUI===!1)return null;const R=(r.viewport?q0(r.viewport):null)||document.body;return R instanceof HTMLElement&&window.getComputedStyle(R).position==="static"&&(R.style.position="relative"),new lx(R,e,t,i,n,s,a,o,l,c,h,u,d,f,g,_,m,p,b,r.models,r.initialModel||(typeof r.model=="string"?r.model:""),r.uiStyle,r.showUpload,r.showHelpers,E,y,(C=r.showPanel)!=null?C:!0,(U=r.showProgress)!=null?U:!0)}class hx{constructor(e,t,i){this.liquidGlass=null,this.zoomStep=.9,this.controls=t,this.container=document.createElement("div"),this.container.className="exploder-zoom-controls",this.container.setAttribute("style",i.zoomContainer);const n=document.createElement("button");n.className="exploder-zoom-button",n.setAttribute("style",i.zoomButton),n.innerHTML=`
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `,n.onclick=()=>this.zoom(this.zoomStep);const s=document.createElement("button");s.className="exploder-zoom-button",s.setAttribute("style",i.zoomButton),s.innerHTML=`
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `,s.onclick=()=>this.zoom(1/this.zoomStep),this.container.appendChild(n),this.container.appendChild(s),e.appendChild(this.container),this.applyLiquidGlass(),this.addHoverEffects(n,i),this.addHoverEffects(s,i)}zoom(e){const t=this.controls.object,i=this.controls.target,s=t.position.distanceTo(i)*e;if(s<.1)return;const a=t.position.clone().sub(i).normalize();t.position.copy(i).add(a.multiplyScalar(s)),this.controls.update()}addHoverEffects(e,t){e.onmouseenter=()=>{const i=e.getAttribute("style")||"";e.setAttribute("style",i+t.zoomButtonHover)},e.onmouseleave=()=>{e.setAttribute("style",t.zoomButton)},e.onmousedown=()=>{const i=e.getAttribute("style")||"";e.setAttribute("style",i+t.zoomButtonActive)},e.onmouseup=()=>{const i=e.getAttribute("style")||"";e.setAttribute("style",i.replace(t.zoomButtonActive,""))}}applyLiquidGlass(){this.liquidGlass=new Os(this.container,{width:100,height:52})}dispose(){this.liquidGlass&&this.liquidGlass.dispose(),this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class ux{constructor(e){this.onHide=null,this.onShowAll=null,this.hideTimer=null,this.onDocumentMouseDown=t=>{this.menu.contains(t.target)||this.hide()},this.onWindowResize=()=>this.hide(),this.menu=this.createMenu(),this.hide(),document.addEventListener("mousedown",this.onDocumentMouseDown),window.addEventListener("resize",this.onWindowResize)}createMenu(){const e=document.createElement("div");e.className="exploder-context-menu";const t=Fr();return Object.assign(e.style,{position:"fixed",zIndex:"10000",backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter:"blur(16px) saturate(180%) brightness(1.1)",WebkitBackdropFilter:"blur(16px) saturate(180%) brightness(1.1)",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:t?"16px":"12px",padding:"6px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(255, 255, 255, 0.2) inset",display:"none",minWidth:t?"160px":"140px",fontSize:t?"16px":"14px",color:"#1F2937",userSelect:"none",overflow:"hidden",transition:"opacity 0.2s, transform 0.2s",opacity:"0",transform:"scale(0.95)",transformOrigin:"top left"}),document.body.appendChild(e),e}show(e,t,i){if(this.menu.innerHTML="",i.showHide&&this.menu.appendChild(this.createItem("\u9690\u85CF",()=>{this.onHide&&this.onHide(),this.hide()})),i.showShowAll&&this.menu.appendChild(this.createItem("\u663E\u793A\u6240\u6709",()=>{this.onShowAll&&this.onShowAll(),this.hide()})),this.menu.children.length===0)return;const n=window.innerWidth,s=window.innerHeight;this.menu.style.display="block",requestAnimationFrame(()=>{this.menu.style.opacity="1",this.menu.style.transform="scale(1)"});const a=this.menu.getBoundingClientRect();let o=e,l=t;o+a.width>n?(o=n-a.width-12,this.menu.style.transformOrigin="top right"):this.menu.style.transformOrigin="top left",l+a.height>s&&(l=s-a.height-12,this.menu.style.transformOrigin=o+a.width>n?"bottom right":"bottom left"),this.menu.style.left=`${o}px`,this.menu.style.top=`${l}px`}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.menu.style.opacity="0",this.menu.style.transform="scale(0.95)",this.hideTimer=setTimeout(()=>{this.hideTimer=null,this.menu.style.opacity==="0"&&(this.menu.style.display="none")},200)}createItem(e,t){const i=document.createElement("div");i.className="exploder-context-menu-item";const n=Fr(),s=e==="\u9690\u85CF"?"\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F":"\u2728";return i.innerHTML=`<span style="margin-right: 12px; font-size: ${n?"18px":"16px"}">${s}</span><span>${e}</span>`,Object.assign(i.style,{padding:n?"14px 24px":"10px 20px",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",alignItems:"center",borderRadius:"8px",margin:"2px",fontWeight:"500"}),i.onmouseenter=()=>{i.style.backgroundColor="rgba(255, 255, 255, 0.3)",i.style.color="#2563EB",i.style.transform="translateX(4px)"},i.onmouseleave=()=>{i.style.backgroundColor="transparent",i.style.color="#1F2937",i.style.transform="translateX(0)"},i.onclick=t,i}setOnHide(e){this.onHide=e}setOnShowAll(e){this.onShowAll=e}dispose(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),document.removeEventListener("mousedown",this.onDocumentMouseDown),window.removeEventListener("resize",this.onWindowResize),this.menu.parentElement&&this.menu.parentElement.removeChild(this.menu)}}class dx{constructor(e,t,i,n,s={}){this.core=null,this.ui=null,this.renderer=null,this.scene=null,this.camera=null,this.controls=null,this.container=null,this.zoomControls=null,this.interactionManager=null,this.contextMenu=null,this.boundOnWheel=null,this.isAutoMode=!1,this.disposed=!1,this.animationFrameId=null,this.boundAnimate=this.animate.bind(this),this.boundOnResize=this.onResize.bind(this),e instanceof qe&&t&&i&&n?(this.isAutoMode=!1,this.options=s,this.renderer=n,this.scene=t,this.camera=i,this.initCore(e,t,i,n,s)):(this.isAutoMode=!0,this.options=e,this.initializeAutoMode())}async initializeAutoMode(){const{viewport:e,model:t,modelUrl:i}=this.options,n=typeof e=="string"?document.querySelector(e):e;this.container=n,this.container||(console.warn("GLTFExploder: \u672A\u627E\u5230\u89C6\u53E3\u5BB9\u5668 (viewport)\uFF0C\u5C06\u4F7F\u7528 body \u4F5C\u4E3A\u9ED8\u8BA4\u5BB9\u5668"),this.container=document.body),this.applyContainerStyles(this.container),this.scene=new od,this.scene.background=new Pe(16777215),this.camera=new Ft(45,this.container.clientWidth/this.container.clientHeight,.1,1e3),this.camera.position.set(5,5,5),this.camera.lookAt(0,0,0),this.renderer=new t0({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.toneMapping=Do,this.renderer.toneMappingExposure=ve.EXPOSURE.DEFAULT,this.renderer.shadowMap.enabled=!1,this.container.appendChild(this.renderer.domElement),this.controls=new O0(this.camera,this.renderer.domElement,this.scene),this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.setGizmosVisible(!1),this.controls.cursorZoom=!0,this.options.wheelControlExplosion&&(this.controls.enableZoom=!1),this.scene.add(new To(16777215,.4));const s=new qe;this.camera.add(s),this.scene.add(this.camera);const a=new en(16777215,.8);a.position.set(2,5,5),a.castShadow=!1;const o=new qe;o.position.set(0,0,-5),s.add(o),a.target=o,s.add(a);const l=3,c=5;for(let f=0;f<l;f++){const g=f/l*Math.PI*2,_=new en(16777215,.4);_.position.set(Math.cos(g)*c,Math.sin(g)*c,2);const m=new qe;m.position.set(0,0,-5),s.add(m),_.target=m,s.add(_)}const h=new en(16777215,.64);h.position.set(5,5,2);const u=new qe;u.position.set(0,0,-5),s.add(u),h.target=u,s.add(h);const d=i||(typeof t=="string"?t:null);d?new Rc().load(d,g=>{var m;const _=g.scene;_.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),(m=this.scene)==null||m.add(_),this.initCore(_,this.scene,this.camera,this.renderer,this.options)}):t instanceof qe&&(t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),this.scene.add(t),this.initCore(t,this.scene,this.camera,this.renderer,this.options)),this.animate(),window.addEventListener("resize",this.boundOnResize)}onResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera instanceof Ft&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.renderer.setSize(e,t)}animate(){this.disposed||(this.animationFrameId=requestAnimationFrame(this.boundAnimate),this.controls&&this.controls.update(),this.ui&&this.ui.render&&this.ui.render(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera))}initCore(e,t,i,n,s){var l,c,h,u;this.core&&this.core.dispose(),this.core=new K0(e,t,i,n,s);const a=Oc(e);let o="Unknown Model";if(this.options.modelUrl?o=Bc(this.options.modelUrl):typeof s.model=="string"?o=Bc(s.model):e.name&&(o=e.name),!this.interactionManager){this.container&&this.applyContainerStyles(this.container),this.interactionManager=new $0(t,i,n);const d=(l=s.showHelpers)!=null?l:!1;this.handleHelperVisibilityChange(d),this.interactionManager.setOnSelect(f=>{var g,_,m,p;if(f){const b=f.name||"\u672A\u547D\u540D\u7EC4\u4EF6";(_=(g=this.ui)==null?void 0:g.updateInfo)==null||_.call(g,b,Oc(f))}else(p=(m=this.ui)==null?void 0:m.updateInfo)==null||p.call(m,o,a)}),this.interactionManager.setOnFitToView(f=>{this.fitToView(f)}),this.interactionManager.setOnContextMenu((f,g)=>{var b;if(!this.contextMenu)return;let _=0,m=0;"clientX"in f?(_=f.clientX,m=f.clientY):"touches"in f&&f.touches.length>0&&(_=f.touches[0].clientX,m=f.touches[0].clientY);const p=((b=this.interactionManager)==null?void 0:b.hasHiddenMeshes())||!1;this.contextMenu.show(_,m,{showHide:!!g,showShowAll:p})})}if(this.container&&!this.contextMenu&&(this.contextMenu=new ux(this.container),this.contextMenu.setOnHide(()=>{var f,g;const d=(f=this.interactionManager)==null?void 0:f.getSelectedMesh();d&&((g=this.interactionManager)==null||g.hideMesh(d))}),this.contextMenu.setOnShowAll(()=>{var d;(d=this.interactionManager)==null||d.showAllMeshes()})),s.createUI!==!1&&!this.ui?(this.ui=cx(s,i,t,e,this.setProgress.bind(this),this.setMultiplier.bind(this),this.setExposure.bind(this),this.setMode.bind(this),this.setAxialVector.bind(this),this.handleModelChange.bind(this),this.handleHelperVisibilityChange.bind(this),d=>{this.interactionManager&&this.interactionManager.setEnabled(!d)},this.reset.bind(this),ve.PROGRESS.DEFAULT,ve.MULTIPLIER.DEFAULT,n.toneMappingExposure,this.core.getMode(),this.core.getAxialVector(),(c=s.showHelpers)!=null?c:!1,o,a),this.ui&&this.ui.updateModelScale&&this.ui.updateModelScale(this.core.getVisualScale())):this.ui&&(this.ui.update(ve.PROGRESS.DEFAULT),this.ui.updateInfo&&this.ui.updateInfo(o,a),this.ui.updateModelScale&&this.ui.updateModelScale(this.core.getVisualScale()),(u=(h=this.ui).rebuildSnapStructures)==null||u.call(h,e)),this.container&&this.controls&&!this.zoomControls){const d=Rh(s.uiStyle);this.zoomControls=new hx(this.container,this.controls,d)}this.options.wheelControlExplosion&&this.renderer&&(this.boundOnWheel||(this.boundOnWheel=this.onWheel.bind(this)),this.renderer.domElement.removeEventListener("wheel",this.boundOnWheel),this.renderer.domElement.addEventListener("wheel",this.boundOnWheel,{passive:!1}))}onWheel(e){if(!this.core)return;e.preventDefault();const t=e.deltaY>0?.05:-.05,i=this.core.getProgress(),n=Math.min(1,Math.max(0,i+t));this.setProgress(n)}handleModelChange(e){this.onModelChangeCallback?this.onModelChangeCallback(e):this.container&&this.scene&&this.loadModelAuto(e)}loadModelAuto(e){if(!this.scene)return;new Rc().load(e,i=>{var s,a;if(this.core){const o=this.core.model;o&&((s=this.scene)==null||s.remove(o)),this.core.dispose()}const n=i.scene;(a=this.scene)==null||a.add(n),this.initCore(n,this.scene,this.camera,this.renderer,this.options),this.ui&&this.ui.updateModel&&this.ui.updateModel(e),e.startsWith("blob:")&&setTimeout(()=>URL.revokeObjectURL(e),1e3)})}handleHelperVisibilityChange(e){this.onHelperVisibilityChangeCallback&&this.onHelperVisibilityChangeCallback(e),this.interactionManager&&this.interactionManager.setHelperVisibility(e)}setModelChangeCallback(e){this.onModelChangeCallback=e}setHelperVisibilityChangeCallback(e){this.onHelperVisibilityChangeCallback=e}setModel(e){var t;(t=this.core)==null||t.setModel(e)}setHelperVisibility(e){this.handleHelperVisibilityChange(e),this.ui&&this.ui.updateHelperVisibility&&this.ui.updateHelperVisibility(e)}setInternalLightingVisible(e){var t;(t=this.core)==null||t.setInternalLightingVisible(e),this.ui&&this.ui.updateHelperVisibility&&this.ui.updateHelperVisibility(e)}setProgress(e){var t;(t=this.core)==null||t.setProgress(e),this.ui&&this.ui.update(e)}setMultiplier(e){var t;(t=this.core)==null||t.setMultiplier(e),this.ui&&this.ui.updateMultiplier&&this.ui.updateMultiplier(e)}setExposure(e){var t;this.renderer&&(this.renderer.toneMapping===0&&(this.renderer.toneMapping=3),this.renderer.toneMappingExposure=e,(t=this.core)==null||t.setInternalLightingExposure(e),this.ui&&this.ui.updateExposure&&this.ui.updateExposure(e))}setMode(e){var t;(t=this.core)==null||t.setMode(e),this.ui&&this.ui.updateMode&&this.ui.updateMode(e)}setAxialVector(e){var t;(t=this.core)==null||t.setAxialVector(e),this.ui&&this.ui.updateAxialVector&&this.ui.updateAxialVector(e)}reset(){var e,t,i,n,s,a,o,l,c,h,u,d,f,g;if((e=this.core)==null||e.reset(),this.controls&&this.camera&&this.options.adaptModel&&(this.controls.reset(),this.core&&this.core.model&&(this.camera.position.set(5,5,5),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update())),this.setExposure(ve.EXPOSURE.DEFAULT),this.ui){(i=(t=this.ui).reset)==null||i.call(t),this.ui.update(ve.PROGRESS.DEFAULT),(s=(n=this.ui).updateMultiplier)==null||s.call(n,ve.MULTIPLIER.DEFAULT),(o=(a=this.ui).updateExposure)==null||o.call(a,ve.EXPOSURE.DEFAULT),(c=(l=this.ui).updateMode)==null||c.call(l,vt.RADIAL),(u=(h=this.ui).updateAxialVector)==null||u.call(h,new w(0,1,0));const _=(d=this.options.showHelpers)!=null?d:!1;(g=(f=this.ui).updateHelperVisibility)==null||g.call(f,_),this.handleHelperVisibilityChange(_)}this.interactionManager&&(this.interactionManager.showAllMeshes(),this.interactionManager.deselectMesh())}fitToView(e){var f;if(!this.camera||!this.controls||!this.core)return;let t=[];if(e&&e.length>0?t=e:(f=this.scene)==null||f.traverse(g=>{g.isMesh&&g.visible&&t.push(g)}),t.length===0)return;const i=Y0(t),n=i.getCenter(new w),s=i.getSize(new w);this.controls.target.copy(n);const a=Math.max(s.x,s.y,s.z),o=this.camera.fov,l=this.camera.aspect,c=o*Math.PI/180;let h=a/(2*Math.tan(c/2));const u=a/l/(2*Math.tan(c/2));h=Math.max(h,u),h*=1.2;const d=new w().subVectors(this.camera.position,n).normalize();this.camera.position.copy(n).add(d.multiplyScalar(h)),this.camera.lookAt(n),this.controls.update()}getInteractionManager(){return this.interactionManager}setProgressChangeCallback(e){var t;(t=this.core)==null||t.setProgressChangeCallback(e)}getProgress(){var e;return((e=this.core)==null?void 0:e.getProgress())||0}showUI(){this.ui&&this.ui.show()}hideUI(){this.ui&&this.ui.hide()}applyContainerStyles(e){Object.assign(e.style,{userSelect:"none",webkitUserSelect:"none",msUserSelect:"none",webkitTouchCallout:"none",webkitTapHighlightColor:"transparent",touchAction:"none"}),e.oncontextmenu=t=>t.preventDefault()}dispose(){var e;this.disposed||(this.disposed=!0,this.ui&&(this.ui.dispose(),this.ui=null),this.zoomControls&&(this.zoomControls.dispose(),this.zoomControls=null),this.interactionManager&&(this.interactionManager.dispose(),this.interactionManager=null),this.contextMenu&&(this.contextMenu.dispose(),this.contextMenu=null),this.boundOnWheel&&this.renderer&&(this.renderer.domElement.removeEventListener("wheel",this.boundOnWheel),this.boundOnWheel=null),this.container&&(this.container.oncontextmenu=null),this.isAutoMode&&(this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),window.removeEventListener("resize",this.boundOnResize),this.controls&&(this.controls.dispose(),this.controls=null),this.renderer&&(this.container&&this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.scene&&this.camera&&this.scene.remove(this.camera),this.scene=null,this.camera=null,this.container=null),(e=this.core)==null||e.dispose(),this.core=null)}}new dx({viewport:"#scene-container",model:"models/example.glb",adaptModel:!0,showUpload:!0,showHelpers:!0,models:[]});
