(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[865],{1178:function(e,t,n){"use strict";var a=n(189);n(302);n(246);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(n(271));var l=a(n(303));var o=a(n(327));var i=a(n(309));var u=a(n(272));var d=a(n(281));var f=a(n(311));var s=a(n(1179));var c=a(n(456));var p=n(343);var v=n(421);var g=n(355);var h=a(n(429));var m=a(n(1180));var x=a(n(1181));var b=a(n(1185));var y=a(n(1186));var w=(0,f.default)(p.Box).withConfig({displayName:"NuggetSelector__NuggetContainer",componentId:"sc-13cms8c-0"})(["display:block;",";"],h.default);var C=(0,f.default)(p.Box).withConfig({displayName:"NuggetSelector__LabelBox",componentId:"sc-13cms8c-1"})(["white-space:nowrap;padding:0 "," "," 0;> label{letter-spacing:1.25px;text-transform:uppercase;font-weight:700;}"],(0,g.margin)(3),(0,g.margin)(3));var z=(0,f.default)(p.Box).withConfig({displayName:"NuggetSelector__NuggetBox",componentId:"sc-13cms8c-2"})(["> div{margin:0 "," "," 0;}"],(0,g.margin)(3),(0,g.margin)(3));var k=v.values.large;var E=function(e){(0,i.default)(t,e);function t(t){var n;n=e.call(this,t)||this;n.state={isLarge:false};n.updateWindowSize=(0,c.default)(n.updateWindowSize.bind((0,o.default)(n)),500,{leading:true,trailing:true});return n}var n=t.prototype;n.componentDidMount=function e(){this.updateWindowSize();window.addEventListener("resize",this.updateWindowSize)};n.componentWillUnmount=function e(){window.removeEventListener("resize",this.updateWindowSize)};n.updateWindowSize=function e(){var t=window.innerWidth>=k;this.setState({isLarge:t})};n.render=function e(){var t=this;var n=this.props,a=n.nuggets,o=n.label,i=n.onClick,d=n.onKeyDown,f=n.openNewTab,c=n.labelColor,v=n.animate,h=n.toggle,k=n.expandToggleText,E=n.collapseToggleText,T=n.sliceOn,S=void 0===T?5:T,_=(0,l.default)(n,["nuggets","label","onClick","onKeyDown","openNewTab","labelColor","animate","toggle","expandToggleText","collapseToggleText","sliceOn"]);var P=u.default.isValidElement(a)?a:a.map(function(e,n){var a={};t.state.isLarge||(a["small"]=true);return u.default.createElement(m.default,(0,r.default)({tabIndex:0,key:(0,s.default)(e.key)?n:e.key,onClick:e.onClick||i||null,onKeyDown:e.onKeyDown||d||null},a,{href:e.url,target:f?"_blank":null,active:e.selected,animate:v,"data-tracking-id":e.dataTrackingID,"data-tracking-campaign":e.dataTrackingCampaign,"data-tracking-placement":e.dataTrackingPlacement}),u.default.createElement("span",null,e.text))});var L=h&&Array.isArray(P)&&P.length>4;return u.default.createElement(w,_,u.default.createElement(C,null,u.default.createElement(p.Label,{size:3,color:c},o)),u.default.createElement(z,null,L?P.slice(0,S):P),L&&u.default.createElement(x.default,{numInitShown:0,ExpandToggler:function e(t){var n=t.onClick;return u.default.createElement(b.default,{text:k||"Read More",onClick:n,size:3,roboto:true,caps:true,chevronProperties:{size:"0.625rem",top:"1px"},textLineHeight:(0,g.lineHeight)(7),textSize:(0,g.fontSize)(2)})},CollapseToggler:function e(t){var n=t.onClick;return u.default.createElement(y.default,{text:E||"Read Less",onClick:n,size:3,roboto:true,caps:true,chevronProperties:{size:"0.625rem",top:"1px"},textLineHeight:(0,g.lineHeight)(7),textSize:(0,g.fontSize)(2)})}},u.default.createElement(z,null,h&&P.slice(S))))};return t}(u.default.Component);E.defaultProps={openNewTab:false,spacing:0,sliceOn:5};E.propTypes={label:d.default.string,labelColor:d.default.string,nuggets:d.default.oneOfType([d.default.element,d.default.arrayOf(d.default.shape({key:d.default.any,text:d.default.string.isRequired,url:d.default.string.isRequired}))]).isRequired,onClick:d.default.func,onKeyDown:d.default.func,openNewTab:d.default.bool,spacing:d.default.number,sliceOn:d.default.number.isRequired,animate:d.default.bool,toggle:d.default.bool,expandToggleText:d.default.string,collapseToggleText:d.default.string};var T=E;t.default=T;e.exports=t.default},1179:function(e,t){function n(e){return null==e}e.exports=n},1180:function(e,t,n){"use strict";var a=n(345);var r=n(189);n(422);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=r(n(271));var o=r(n(303));var i=r(n(309));var u=a(n(311));var d=r(n(272));var f=r(n(281));var s=n(343);var c=n(322);var p=(0,u.keyframes)(["from{transform:scale(0);opacity:0;}to{transform:scale(1);opacity:1;}"]);var v=(0,u.default)(s.Box).withConfig({displayName:"Nugget__Content",componentId:"sc-1vlwdtd-0"})(["margin:0px;display:inline-block;cursor:pointer;align-items:center;line-height:20px;border-radius:5px;transition:.25s all;color:",";background-color:",";"," @media (prefers-reduced-motion:reduce){animation:none;}",";&:hover{box-shadow:0px 0px 3px rgba(17,17,17,.3);color:",";","}a{display:inline-block;padding:8px 16px;",";",";}a:hover{color:",";","}"],function(e){return e.active?c.white00:c.black90},function(e){return e.active?c.blue50:c.white00},function(e){return e.animate?(0,u.css)(["animation:"," 300ms ease-in-out;"],p):""},function(e){return e.active&&"\n        border-color: "+c.blue50+";\n    "},c.black90,function(e){return e.active&&"\n            box-shadow: 0px 0px 5px rgba(9, 9, 9,.5);\n            color: "+c.white00+";\n        "},function(e){return e.large&&"\n            padding: 0.75rem 1rem;\n        "},function(e){return e.small&&"\n            padding: 0.25rem 0.5rem;\n        "},c.black90,function(e){return e.active&&"\n            color: "+c.white00+";\n        "});var g=function(e){(0,i.default)(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.handleClick=function e(t,n){if("function"!==typeof this.props.onClick)return;this.props.onClick(t,n)};n.render=function e(){var t=this.props,n=t.children,a=t.className,r=t.href,i=t.target,u=t.active,f=(0,o.default)(t,["children","className","href","target","active"]);return d.default.createElement(v,(0,l.default)({},f,{border:true,active:u,className:a,onClick:function e(){}}),d.default.createElement(s.Anchor,{size:3,href:r,onClick:this.handleClick.bind(this,r),target:i},n))};return t}(d.default.Component);g.defaultProps={border:c.gray15};g.propTypes={onClick:f.default.func,border:f.default.string,children:f.default.node,className:f.default.string,large:f.default.bool,small:f.default.bool,href:f.default.string,target:f.default.string,active:f.default.bool,animate:f.default.bool};var h=g;t.default=h;e.exports=t.default},1181:function(e,t,n){"use strict";var a=n(189);n(246);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(n(327));var l=a(n(309));var o=a(n(296));var i=a(n(272));var u=a(n(281));var d=a(n(311));var f=a(n(1182));var s=a(n(1185));var c=a(n(1186));var p=function e(t){var n=t.children;return i.default.createElement("div",null,n)};p.propTypes={children:u.default.node};var v=d.default.div.withConfig({displayName:"VisibleChildrenToggler__OuterWrapper",componentId:"sc-1xc6cor-0"})([""]);var g=d.default.div.withConfig({displayName:"VisibleChildrenToggler__Shown",componentId:"sc-1xc6cor-1"})(["display:initial;"]);var h=d.default.div.withConfig({displayName:"VisibleChildrenToggler__Hidden",componentId:"sc-1xc6cor-2"})(["display:none;"]);var m=function(e){(0,l.default)(t,e);function t(t){var n;n=e.call(this,t)||this;(0,o.default)((0,r.default)(n),"keyPressedExpand",function(e){13===e.keyCode&&n.handleExpand()});(0,o.default)((0,r.default)(n),"keyPressedCollapse",function(e){13===e.keyCode&&n.handleCollapse()});n.state={expanded:false};n.handleExpand=n.handleExpand.bind((0,r.default)(n));n.handleCollapse=n.handleCollapse.bind((0,r.default)(n));n.outerWrapperRef=i.default.createRef();return n}var n=t.prototype;n.handleExpand=function e(){this.setState({expanded:true});(0,f.default)(this.props,"onToggle");(0,f.default)(this.props,"onExpand")};n.handleCollapse=function e(){this.setState({expanded:false});this.outerWrapperRef.current.scrollIntoView();(0,f.default)(this.props,"onToggle");(0,f.default)(this.props,"onCollapse")};n.render=function e(){var t=this.props,n=t.children,a=t.numInitShown,r=t.VisibleChildrenWrapper,l=t.ExpandToggler,o=t.CollapseToggler,u=t.collapseText,d=t.expandText;var f=this.state.expanded;if(f)return i.default.createElement(v,{ref:this.outerWrapperRef},i.default.createElement(r,null,n),i.default.createElement("div",{className:"visible-children-toggler-wrapper"},o&&i.default.createElement(o,{onClick:this.handleCollapse,onKeyDown:this.keyPressedCollapse,text:u})));var s=i.default.Children.toArray(n);return i.default.createElement(v,{ref:this.outerWrapperRef},i.default.createElement(g,null,i.default.createElement(r,null,s.slice(0,a))),i.default.createElement(h,null,s.slice(a-1,s.length)),i.default.createElement("div",{className:"visible-children-toggler-wrapper"},l&&i.default.createElement(l,{onClick:this.handleExpand,onKeyDown:this.keyPressedExpand,text:d})))};return t}(i.default.Component);m.defaultProps={numInitShown:5,VisibleChildrenWrapper:p,ExpandToggler:s.default,CollapseToggler:c.default};m.propTypes={numInitShown:u.default.number,children:u.default.node,VisibleChildrenWrapper:u.default.func,ExpandToggler:u.default.func,CollapseToggler:u.default.func,expandText:u.default.string,collapseText:u.default.string,onToggle:u.default.func,onCollapse:u.default.func,onExpand:u.default.func};var x=m;t.default=x;e.exports=t.default},1182:function(e,t,n){var a=n(1183),r=n(1184);var l=r(a);e.exports=l},1183:function(e,t,n){var a=n(488),r=n(613),l=n(910),o=n(911),i=n(620);function u(e,t,n){t=r(t,e);e=o(e,t);var u=null==e?e:e[i(l(t))];return null==u?void 0:a(u,e,n)}e.exports=u},1184:function(e,t,n){var a=n(481),r=n(632),l=n(511);function o(e,t){return l(r(e,t,a),e+"")}e.exports=o},1185:function(e,t,n){"use strict";var a=n(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(n(271));var l=a(n(303));var o=a(n(323));var i=a(n(272));var u=a(n(281));var d=a(n(311));var f=a(n(611));var s=a(n(324));var c=a(n(421));var p=n(322);var v=n(343);function g(){var e=(0,o.default)(["\n            color: ",";\n            svg {\n                fill: ",";\n            }\n        "]);g=function t(){return e};return e}function h(){var e=(0,o.default)(["\n        ","\n    "]);h=function t(){return e};return e}var m=(0,d.default)(v.Span).attrs(function(){return{tabIndex:"0"}}).withConfig({displayName:"ExpandToggler__PointerSpan",componentId:"sc-17zbrnn-0"})(["cursor:pointer;outline:none !important;"," ",";",";"],(0,s.default)(h(),c.default.medium(g(),p.gray50,p.gray50)),function(e){var t=e.textSize;return t&&"font-size: "+t+" !important"},function(e){var t=e.textLineHeight;return t&&"line-height: "+t+" !important"});var x=(0,d.default)(v.Icon).attrs(function(){return{name:"chevron"}}).withConfig({displayName:"ExpandToggler__Chevron",componentId:"sc-17zbrnn-1"})(["position:relative;top:3px;height:1rem;width:1rem;",""],function(e){var t=e.chevronProperties;return t&&"width: "+(0,f.default)(t,"size","1rem")+";\n         height: "+(0,f.default)(t,"size","1rem")+"\n         top: "+function(e){var t=e.chevronProperties;return(0,f.default)(t,"top","3px")}+";\n         "});var b=function e(t){var n=t.chevronProperties,a=t.textLineHeight,o=t.textSize,u=t.text,d=t.onClick,f=t.onKeyDown,s=t.roboto,c=t.size,p=t.sizeLarge,v=(0,l.default)(t,["chevronProperties","textLineHeight","textSize","text","onClick","onKeyDown","roboto","size","sizeLarge"]);return i.default.createElement(m,(0,r.default)({textLineHeight:a,textSize:o,roboto:s,weight:7,size:c,sizeLarge:p,onClick:d,onKeyDown:f},v),u," ",i.default.createElement(x,{chevronProperties:n}))};b.defaultProps={text:"READ MORE",roboto:true,size:3,sizeLarge:4};b.propTypes={text:u.default.string,onClick:u.default.func,onKeyDown:u.default.func,roboto:u.default.bool,size:u.default.number,sizeLarge:u.default.number,chevronProperties:u.default.object,textSize:u.default.number,textLineHeight:u.default.number};var y=b;t.default=y;e.exports=t.default},1186:function(e,t,n){"use strict";var a=n(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(n(271));var l=a(n(303));var o=a(n(323));var i=a(n(272));var u=a(n(281));var d=a(n(311));var f=a(n(611));var s=a(n(324));var c=a(n(421));var p=n(322);var v=n(343);function g(){var e=(0,o.default)(["\n            color: ",";\n            svg {\n                fill: ",";\n            }\n        "]);g=function t(){return e};return e}function h(){var e=(0,o.default)(["\n        ","\n    "]);h=function t(){return e};return e}var m=(0,d.default)(v.Span).attrs(function(){return{tabIndex:"0"}}).withConfig({displayName:"CollapseToggler__PointerSpan",componentId:"sc-1fp64bg-0"})(["cursor:pointer;outline:none !important;"," ",";",";"],(0,s.default)(h(),c.default.medium(g(),p.gray50,p.gray50)),function(e){var t=e.textSize;return t&&"font-size: "+t+" !important"},function(e){var t=e.textLineHeight;return t&&"line-height: "+t+" !important"});var x=(0,d.default)(v.Icon).attrs(function(){return{name:"chevron"}}).withConfig({displayName:"CollapseToggler__Chevron",componentId:"sc-1fp64bg-1"})(["position:relative;top:3px;height:1rem;width:1rem;",""],function(e){var t=e.chevronProperties;return t&&"width: "+(0,f.default)(t,"size","1rem")+";\n         height: "+(0,f.default)(t,"size","1rem")+"\n         top: "+function(e){var t=e.chevronProperties;return(0,f.default)(t,"top","3px")}+";\n         "});var b=function e(t){var n=t.chevronProperties,a=t.textSize,o=t.textLineHeight,u=t.text,d=t.onClick,f=t.onKeyDown,s=t.roboto,c=t.size,p=t.sizeLarge,v=(0,l.default)(t,["chevronProperties","textSize","textLineHeight","text","onClick","onKeyDown","roboto","size","sizeLarge"]);return i.default.createElement(m,(0,r.default)({textSize:a,textLineHeight:o,roboto:s,weight:7,size:c,sizeLarge:p,onClick:d,onKeyDown:f},v),u," ",i.default.createElement(x,{chevronProperties:n,rotate:"180"}))};b.defaultProps={text:"READ LESS",roboto:true,size:3,sizeLarge:4};b.propTypes={text:u.default.string,onClick:u.default.func,onKeyDown:u.default.func,roboto:u.default.bool,size:u.default.number,sizeLarge:u.default.number,chevronProperties:u.default.object,textSize:u.default.number,textLineHeight:u.default.number};var y=b;t.default=y;e.exports=t.default},8339:function(e,t,n){"use strict";var a=n(189);n(894);n(302);n(298);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(n(272));var l=a(n(281));var o=n(3637);var i=a(n(1178));var u=function e(t){var n=t.filter(function(e){return!e.active}).map(function(e){return{text:e.name,url:e.url}});return n};var d=function e(t){var n=t.displayName,a=t.subnav;return r.default.createElement(r.default.Fragment,null,r.default.createElement(o.Subheading,{spacing:3},"Explore ",n),r.default.createElement(i.default,{nuggets:u(a),spacing:5}))};d.propTypes={displayName:l.default.any,subnav:l.default.any};var f=d;t.default=f;e.exports=t.default}}]);