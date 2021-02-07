(this["webpackJsonpgenshin-gacha-analyzer"]=this["webpackJsonpgenshin-gacha-analyzer"]||[]).push([[9],{367:function(e,t,n){"use strict";var a=n(3),r=n(7),o=n(9),i=n(10),c=n(11),l=n(0),s=n(64),u=n(57),f=n(36),d=n(28),b=n(66),v=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target,o=r.getBoundingClientRect(),i=o.width,c=o.height,l=r.offsetWidth,s=r.offsetHeight,u=Math.floor(i),f=Math.floor(c);if(e.state.width!==u||e.state.height!==f||e.state.offsetWidth!==l||e.state.offsetHeight!==s){var d={width:u,height:f,offsetWidth:l,offsetHeight:s};e.setState(d),n&&Promise.resolve().then((function(){n(Object(a.a)(Object(a.a)({},d),{},{offsetWidth:l,offsetHeight:s}),r)}))}},e.setChildNode=function(t){e.childNode=t},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=Object(s.a)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new b.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=Object(u.a)(e);if(t.length>1)Object(f.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return Object(f.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(l.isValidElement(n)&&Object(d.c)(n)){var a=n.ref;t[0]=l.cloneElement(n,{ref:Object(d.a)(a,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!l.isValidElement(e)||"key"in e&&null!==e.key?e:l.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(l.Component);v.displayName="ResizeObserver",t.a=v},376:function(e,t,n){"use strict";var a=n(2),r=n(1),o=n(0),i=n(5),c=n(14),l=n(19),s=n(3),u=n(4),f=n.n(u),d=n(57),b=n(98),v=n(324),h=n(29),p=n(18),m=n(367);function O(e){var t=Object(o.useRef)(),n=Object(o.useRef)(!1);return Object(o.useEffect)((function(){return function(){n.current=!0,p.a.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(p.a.cancel(t.current),t.current=Object(p.a)((function(){e.apply(void 0,r)})))}}var j=n(25);function y(e,t){var n,a=e.prefixCls,i=e.id,c=e.active,l=e.rtl,s=e.tab,u=s.key,d=s.tab,b=s.disabled,v=s.closeIcon,h=e.tabBarGutter,p=e.tabPosition,m=e.closable,O=e.renderWrapper,y=e.removeAriaLabel,g=e.editable,E=e.onClick,w=e.onRemove,k=e.onFocus,C="".concat(a,"-tab");o.useEffect((function(){return w}),[]);var x={};"top"===p||"bottom"===p?x[l?"marginLeft":"marginRight"]=h:x.marginBottom=h;var N=g&&!1!==m&&!b;function P(e){b||E(e)}var R=o.createElement("div",{key:u,ref:t,className:f()(C,(n={},Object(r.a)(n,"".concat(C,"-with-remove"),N),Object(r.a)(n,"".concat(C,"-active"),c),Object(r.a)(n,"".concat(C,"-disabled"),b),n)),style:x,onClick:P},o.createElement("div",{role:"tab","aria-selected":c,id:i&&"".concat(i,"-tab-").concat(u),className:"".concat(C,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(u),"aria-disabled":b,tabIndex:b?null:0,onClick:function(e){e.stopPropagation(),P(e)},onKeyDown:function(e){[j.a.SPACE,j.a.ENTER].includes(e.which)&&(e.preventDefault(),P(e))},onFocus:k},d),N&&o.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),g.onEdit("remove",{key:u,event:t})}},v||g.removeIcon||"\xd7"));return O&&(R=O(R)),R}var g=o.forwardRef(y),E={width:0,height:0,left:0,top:0};var w={width:0,height:0,left:0,top:0,right:0};var k=n(33),C=n(68),x={adjustX:1,adjustY:1},N=[0,0],P={topLeft:{points:["bl","tl"],overflow:x,offset:[0,-4],targetOffset:N},topCenter:{points:["bc","tc"],overflow:x,offset:[0,-4],targetOffset:N},topRight:{points:["br","tr"],overflow:x,offset:[0,-4],targetOffset:N},bottomLeft:{points:["tl","bl"],overflow:x,offset:[0,4],targetOffset:N},bottomCenter:{points:["tc","bc"],overflow:x,offset:[0,4],targetOffset:N},bottomRight:{points:["tr","br"],overflow:x,offset:[0,4],targetOffset:N}};var R=o.forwardRef((function(e,t){var n=e.arrow,a=void 0!==n&&n,c=e.prefixCls,s=void 0===c?"rc-dropdown":c,u=e.transitionName,d=e.animation,b=e.align,v=e.placement,h=void 0===v?"bottomLeft":v,p=e.placements,m=void 0===p?P:p,O=e.getPopupContainer,j=e.showAction,y=e.hideAction,g=e.overlayClassName,E=e.overlayStyle,w=e.visible,k=e.trigger,x=void 0===k?["hover"]:k,N=Object(l.a)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),R=o.useState(),S=Object(i.a)(R,2),T=S[0],I=S[1],M="visible"in e?w:T,z=o.useRef(null);o.useImperativeHandle(t,(function(){return z.current}));var A=function(){var t=e.overlay;return"function"===typeof t?t():t},B=function(t){var n=e.onOverlayClick,a=A().props;I(!1),n&&n(t),a.onClick&&a.onClick(t)},W=function(){var e=A(),t={prefixCls:"".concat(s,"-menu"),onClick:B};return"string"===typeof e.type&&delete t.prefixCls,o.createElement(o.Fragment,null,a&&o.createElement("div",{className:"".concat(s,"-arrow")}),o.cloneElement(e,t))},L=y;return L||-1===x.indexOf("contextMenu")||(L=["click"]),o.createElement(C.a,Object.assign({},N,{prefixCls:s,ref:z,popupClassName:f()(g,Object(r.a)({},"".concat(s,"-show-arrow"),a)),popupStyle:E,builtinPlacements:m,action:x,showAction:j,hideAction:L||[],popupPlacement:h,popupAlign:b,popupTransitionName:u,popupAnimation:d,popupVisible:M,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?W:W(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;I(t),"function"===typeof n&&n(t)},getPopupContainer:O}),function(){var t=e.children,n=t.props?t.props:{},a=f()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(s,"-open")}());return T&&t?o.cloneElement(t,{className:a}):t}())}));function S(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,i=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var T=o.forwardRef(S);function I(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,s=e.mobile,u=e.moreIcon,d=void 0===u?"More":u,b=e.moreTransitionName,v=e.style,h=e.className,p=e.editable,m=e.tabBarGutter,O=e.rtl,y=e.onTabClick,g=Object(o.useState)(!1),E=Object(i.a)(g,2),w=E[0],C=E[1],x=Object(o.useState)(null),N=Object(i.a)(x,2),P=N[0],S=N[1],I="".concat(a,"-more-popup"),M="".concat(n,"-dropdown"),z=null!==P?"".concat(I,"-").concat(P):null,A=null===l||void 0===l?void 0:l.dropdownAriaLabel,B=o.createElement(k.f,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),C(!1)},id:I,tabIndex:-1,role:"listbox","aria-activedescendant":z,selectedKeys:[P],"aria-label":void 0!==A?A:"expanded dropdown"},c.map((function(e){return o.createElement(k.d,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function W(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===P}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void S(o.key)}}Object(o.useEffect)((function(){var e=document.getElementById(z);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[P]),Object(o.useEffect)((function(){w||S(null)}),[w]);var L=Object(r.a)({},O?"marginLeft":"marginRight",m);c.length||(L.visibility="hidden",L.order=1);var D=f()(Object(r.a)({},"".concat(M,"-rtl"),O)),K=s?null:o.createElement(R,{prefixCls:M,overlay:B,trigger:["hover"],visible:w,transitionName:b,onVisibleChange:C,overlayClassName:D,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:L,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case j.a.UP:W(-1),e.preventDefault();break;case j.a.DOWN:W(1),e.preventDefault();break;case j.a.ESC:C(!1);break;case j.a.SPACE:case j.a.ENTER:null!==P&&y(P,e)}else[j.a.DOWN,j.a.SPACE,j.a.ENTER].includes(t)&&(C(!0),e.preventDefault())}},d));return o.createElement("div",{className:f()("".concat(n,"-nav-operations"),h),style:v,ref:t},K,o.createElement(T,{prefixCls:n,locale:l,editable:p}))}var M=o.forwardRef(I),z=Object(o.createContext)(null),A=Math.pow(.995,20);function B(e,t){var n=o.useRef(e),a=o.useState({}),r=Object(i.a)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var W=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var i=r;return"right"===n&&(t=i.right||!i.left&&i||null),"left"===n&&(t=i.left||null),t?o.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function L(e,t){var n,c=o.useContext(z),l=c.prefixCls,u=c.tabs,d=e.className,b=e.style,v=e.id,j=e.animated,y=e.activeKey,k=e.rtl,C=e.extra,x=e.editable,N=e.locale,P=e.tabPosition,R=e.tabBarGutter,S=e.children,I=e.onTabClick,L=e.onTabScroll,D=Object(o.useRef)(),K=Object(o.useRef)(),H=Object(o.useRef)(),V=Object(o.useRef)(),q=function(){var e=Object(o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),G=Object(i.a)(q,2),U=G[0],F=G[1],Y="top"===P||"bottom"===P,X=B(0,(function(e,t){Y&&L&&L({direction:e>t?"left":"right"})})),_=Object(i.a)(X,2),J=_[0],Q=_[1],Z=B(0,(function(e,t){!Y&&L&&L({direction:e>t?"top":"bottom"})})),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useState)(0),ae=Object(i.a)(ne,2),re=ae[0],oe=ae[1],ie=Object(o.useState)(0),ce=Object(i.a)(ie,2),le=ce[0],se=ce[1],ue=Object(o.useState)(0),fe=Object(i.a)(ue,2),de=fe[0],be=fe[1],ve=Object(o.useState)(0),he=Object(i.a)(ve,2),pe=he[0],me=he[1],Oe=Object(o.useState)(null),je=Object(i.a)(Oe,2),ye=je[0],ge=je[1],Ee=Object(o.useState)(null),we=Object(i.a)(Ee,2),ke=we[0],Ce=we[1],xe=Object(o.useState)(0),Ne=Object(i.a)(xe,2),Pe=Ne[0],Re=Ne[1],Se=Object(o.useState)(0),Te=Object(i.a)(Se,2),Ie=Te[0],Me=Te[1],ze=function(e){var t=Object(o.useRef)([]),n=Object(o.useState)({}),a=Object(i.a)(n,2)[1],r=Object(o.useRef)("function"===typeof e?e():e),c=O((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Ae=Object(i.a)(ze,2),Be=Ae[0],We=Ae[1],Le=function(e,t,n){return Object(o.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||E,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,u=t.get(l);u||(u=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||E);var f=a.get(l)||Object(s.a)({},u);f.right=o-f.left-f.width,a.set(l,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Be,re),De="".concat(l,"-nav-operations-hidden"),Ke=0,He=0;function Ve(e){return e<Ke?Ke:e>He?He:e}Y?k?(Ke=0,He=Math.max(0,re-ye)):(Ke=Math.min(0,ye-re),He=0):(Ke=Math.min(0,ke-le),He=0);var qe=Object(o.useRef)(),Ge=Object(o.useState)(),Ue=Object(i.a)(Ge,2),Fe=Ue[0],Ye=Ue[1];function Xe(){Ye(Date.now())}function _e(){window.clearTimeout(qe.current)}function Je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=Le.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=J;k?t.right<J?n=t.right:t.right+t.width>J+ye&&(n=t.right+t.width-ye):t.left<-J?n=-t.left:t.left+t.width>-J+ye&&(n=-(t.left+t.width-ye)),te(0),Q(Ve(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+ke&&(a=-(t.top+t.height-ke)),Q(0),te(Ve(a))}}!function(e,t){var n=Object(o.useState)(),a=Object(i.a)(n,2),r=a[0],c=a[1],l=Object(o.useState)(0),s=Object(i.a)(l,2),u=s[0],f=s[1],d=Object(o.useState)(0),b=Object(i.a)(d,2),v=b[0],h=b[1],p=Object(o.useState)(),m=Object(i.a)(p,2),O=m[0],j=m[1],y=Object(o.useRef)(),g=Object(o.useRef)(),E=Object(o.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var s=Date.now();f(s),h(s-u),j({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),j(null),O)){var e=O.x/v,n=O.y/v,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;y.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(i*=A),20*(l*=A))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===g.current?n:a:o>i?(r=n,g.current="x"):(r=a,g.current="y"),t(-r,-r)&&e.preventDefault()}},o.useEffect((function(){function t(e){E.current.onTouchMove(e)}function n(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(D,(function(e,t){function n(e,t){e((function(e){return Ve(e+t)}))}if(Y){if(ye>=re)return!1;n(Q,e)}else{if(ke>=le)return!1;n(te,t)}return _e(),Xe(),!0})),Object(o.useEffect)((function(){return _e(),Fe&&(qe.current=window.setTimeout((function(){Ye(0)}),100)),_e}),[Fe]);var Qe=function(e,t,n,a,r){var i,c,l,s=r.tabs,u=r.tabPosition,f=r.rtl;["top","bottom"].includes(u)?(i="width",c=f?"right":"left",l=Math.abs(t.left)):(i="height",c="top",l=-t.top);var d=t[i],b=n[i],v=a[i],h=d;return b+v>d&&(h=d-v),Object(o.useMemo)((function(){if(!s.length)return[0,0];for(var t=s.length,n=t,a=0;a<t;a+=1){var r=e.get(s[a].key)||w;if(r[c]+r[i]>l+h){n=a-1;break}}for(var o=0,u=t-1;u>=0;u-=1)if((e.get(s[u].key)||w)[c]<l){o=u+1;break}return[o,n]}),[e,l,h,u,s.map((function(e){return e.key})).join("_"),f])}(Le,{width:ye,height:ke,left:J,top:ee},{width:de,height:pe},{width:Pe,height:Ie},Object(s.a)(Object(s.a)({},e),{},{tabs:u})),Ze=Object(i.a)(Qe,2),$e=Ze[0],et=Ze[1],tt=u.map((function(e){var t=e.key;return o.createElement(g,{id:v,prefixCls:l,key:t,rtl:k,tab:e,closable:e.closable,editable:x,active:t===y,tabPosition:P,tabBarGutter:R,renderWrapper:S,removeAriaLabel:null===N||void 0===N?void 0:N.removeAriaLabel,ref:U(t),onClick:function(e){I(t,e)},onRemove:function(){F(t)},onFocus:function(){Je(t),Xe(),k||(D.current.scrollLeft=0),D.current.scrollTop=0}})})),nt=O((function(){var e,t,n,a,r,o,i,c,l,s=(null===(e=D.current)||void 0===e?void 0:e.offsetWidth)||0,f=(null===(t=D.current)||void 0===t?void 0:t.offsetHeight)||0,d=(null===(n=V.current)||void 0===n?void 0:n.offsetWidth)||0,b=(null===(a=V.current)||void 0===a?void 0:a.offsetHeight)||0,v=(null===(r=H.current)||void 0===r?void 0:r.offsetWidth)||0,h=(null===(o=H.current)||void 0===o?void 0:o.offsetHeight)||0;ge(s),Ce(f),Re(d),Me(b);var p=((null===(i=K.current)||void 0===i?void 0:i.offsetWidth)||0)-d,m=((null===(c=K.current)||void 0===c?void 0:c.offsetHeight)||0)-b;oe(p),se(m);var O=null===(l=H.current)||void 0===l?void 0:l.className.includes(De);be(p-(O?0:v)),me(m-(O?0:h)),We((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=U(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),at=u.slice(0,$e),rt=u.slice(et+1),ot=[].concat(Object(h.a)(at),Object(h.a)(rt)),it=Object(o.useState)(),ct=Object(i.a)(it,2),lt=ct[0],st=ct[1],ut=Le.get(y),ft=Object(o.useRef)();function dt(){p.a.cancel(ft.current)}Object(o.useEffect)((function(){var e={};return ut&&(Y?(k?e.right=ut.right:e.left=ut.left,e.width=ut.width):(e.top=ut.top,e.height=ut.height)),dt(),ft.current=Object(p.a)((function(){st(e)})),dt}),[ut,Y,k]),Object(o.useEffect)((function(){Je()}),[y,ut,Le,Y]),Object(o.useEffect)((function(){nt()}),[k,R,y,u.map((function(e){return e.key})).join("_")]);var bt,vt,ht,pt,mt=!!ot.length,Ot="".concat(l,"-nav-wrap");return Y?k?(vt=J>0,bt=J+ye<re):(bt=J<0,vt=-J+ye<re):(ht=ee<0,pt=-ee+ke<le),o.createElement("div",{ref:t,role:"tablist",className:f()("".concat(l,"-nav"),d),style:b,onKeyDown:function(){Xe()}},o.createElement(W,{position:"left",extra:C,prefixCls:l}),o.createElement(m.a,{onResize:nt},o.createElement("div",{className:f()(Ot,(n={},Object(r.a)(n,"".concat(Ot,"-ping-left"),bt),Object(r.a)(n,"".concat(Ot,"-ping-right"),vt),Object(r.a)(n,"".concat(Ot,"-ping-top"),ht),Object(r.a)(n,"".concat(Ot,"-ping-bottom"),pt),n)),ref:D},o.createElement(m.a,{onResize:nt},o.createElement("div",{ref:K,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat(ee,"px)"),transition:Fe?"none":void 0}},tt,o.createElement(T,{ref:V,prefixCls:l,locale:N,editable:x,style:{visibility:mt?"hidden":null}}),o.createElement("div",{className:f()("".concat(l,"-ink-bar"),Object(r.a)({},"".concat(l,"-ink-bar-animated"),j.inkBar)),style:lt}))))),o.createElement(M,Object(a.a)({},e,{ref:H,prefixCls:l,tabs:ot,className:!mt&&De})),o.createElement(W,{position:"right",extra:C,prefixCls:l}))}var D=o.forwardRef(L);function K(e){var t=e.id,n=e.activeKey,a=e.animated,i=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,s=o.useContext(z),u=s.prefixCls,d=s.tabs,b=a.tabPane,v=d.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:f()("".concat(u,"-content-holder"))},o.createElement("div",{className:f()("".concat(u,"-content"),"".concat(u,"-content-").concat(i),Object(r.a)({},"".concat(u,"-content-animated"),b)),style:v&&b?Object(r.a)({},c?"marginRight":"marginLeft","-".concat(v,"00%")):null},d.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:u,tabKey:e.key,id:t,animated:b,active:e.key===n,destroyInactiveTabPane:l})}))))}function H(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,u=e.animated,d=e.destroyInactiveTabPane,b=e.tabKey,v=e.children,h=o.useState(n),p=Object(i.a)(h,2),m=p[0],O=p[1];o.useEffect((function(){l?O(!0):d&&O(!1)}),[l,d]);var j={};return l||(u?(j.visibility="hidden",j.height=0,j.overflowY="hidden"):j.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(b),"aria-hidden":!l,style:Object(s.a)(Object(s.a)({},j),r),className:f()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||m||n)&&v)}var V=0;function q(e,t){var n,u,h=e.id,p=e.prefixCls,m=void 0===p?"rc-tabs":p,O=e.className,j=e.children,y=e.direction,g=e.activeKey,E=e.defaultActiveKey,w=e.editable,k=e.animated,C=void 0===k?{inkBar:!0,tabPane:!1}:k,x=e.tabPosition,N=void 0===x?"top":x,P=e.tabBarGutter,R=e.tabBarStyle,S=e.tabBarExtraContent,T=e.locale,I=e.moreIcon,M=e.moreTransitionName,A=e.destroyInactiveTabPane,B=e.renderTabBar,W=e.onChange,L=e.onTabClick,H=e.onTabScroll,q=Object(l.a)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=function(e){return Object(d.a)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return Object(s.a)(Object(s.a)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(j),U="rtl"===y;u=!1===C?{inkBar:!1,tabPane:!1}:!0===C?{inkBar:!0,tabPane:!0}:Object(s.a)({inkBar:!0,tabPane:!1},"object"===Object(c.a)(C)?C:{});var F=Object(o.useState)(!1),Y=Object(i.a)(F,2),X=Y[0],_=Y[1];Object(o.useEffect)((function(){_(Object(b.a)())}),[]);var J=Object(v.a)((function(){var e;return null===(e=G[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),Q=Object(i.a)(J,2),Z=Q[0],$=Q[1],ee=Object(o.useState)((function(){return G.findIndex((function(e){return e.key===Z}))})),te=Object(i.a)(ee,2),ne=te[0],ae=te[1];Object(o.useEffect)((function(){var e,t=G.findIndex((function(e){return e.key===Z}));-1===t&&(t=Math.max(0,Math.min(ne,G.length-1)),$(null===(e=G[t])||void 0===e?void 0:e.key));ae(t)}),[G.map((function(e){return e.key})).join("_"),Z,ne]);var re=Object(v.a)(null,{value:h}),oe=Object(i.a)(re,2),ie=oe[0],ce=oe[1],le=N;X&&!["left","right"].includes(N)&&(le="top"),Object(o.useEffect)((function(){h||(ce("rc-tabs-".concat(V)),V+=1)}),[]);var se,ue={id:ie,activeKey:Z,animated:u,tabPosition:le,rtl:U,mobile:X},fe=Object(s.a)(Object(s.a)({},ue),{},{editable:w,locale:T,moreIcon:I,moreTransitionName:M,tabBarGutter:P,onTabClick:function(e,t){null===L||void 0===L||L(e,t),$(e),null===W||void 0===W||W(e)},onTabScroll:H,extra:S,style:R,panes:j});return se=B?B(fe,D):o.createElement(D,fe),o.createElement(z.Provider,{value:{tabs:G,prefixCls:m}},o.createElement("div",Object(a.a)({ref:t,id:h,className:f()(m,"".concat(m,"-").concat(le),(n={},Object(r.a)(n,"".concat(m,"-mobile"),X),Object(r.a)(n,"".concat(m,"-editable"),w),Object(r.a)(n,"".concat(m,"-rtl"),U),n),O)},q),se,o.createElement(K,Object(a.a)({destroyInactiveTabPane:A},ue,{animated:u}))))}var G=o.forwardRef(q);G.TabPane=H;var U=G,F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Y=n(8),X=function(e,t){return o.createElement(Y.a,Object.assign({},e,{ref:t,icon:F}))};X.displayName="EllipsisOutlined";var _=o.forwardRef(X),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Q=function(e,t){return o.createElement(Y.a,Object.assign({},e,{ref:t,icon:J}))};Q.displayName="PlusOutlined";var Z=o.forwardRef(Q),$=n(70),ee=n(23),te=n(94),ne=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ae(e){var t,n,i=e.type,c=e.className,l=e.size,s=e.onEdit,u=e.hideAdd,d=e.centered,b=e.addIcon,v=ne(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),h=v.prefixCls,p=o.useContext(te.b),m=p.getPrefixCls,O=p.direction,j=m("tabs",h);return"editable-card"===i&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null===s||void 0===s||s("add"===e?a:n,e)},removeIcon:o.createElement($.a,null),addIcon:b||o.createElement(Z,null),showAdd:!0!==u}),Object(ee.a)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(U,Object(a.a)({direction:O},v,{moreTransitionName:"slide-up",className:f()((t={},Object(r.a)(t,"".concat(j,"-").concat(l),l),Object(r.a)(t,"".concat(j,"-card"),["card","editable-card"].includes(i)),Object(r.a)(t,"".concat(j,"-editable-card"),"editable-card"===i),Object(r.a)(t,"".concat(j,"-centered"),d),t),c),editable:n,moreIcon:o.createElement(_,null),prefixCls:j}))}ae.TabPane=H;t.a=ae}}]);