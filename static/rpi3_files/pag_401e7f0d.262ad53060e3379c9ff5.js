(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[665],{1012:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"Cell",{enumerable:true,get:function e(){return n.default}});Object.defineProperty(t,"Cellify",{enumerable:true,get:function e(){return s.default}});Object.defineProperty(t,"Hide",{enumerable:true,get:function e(){return l.default}});Object.defineProperty(t,"Show",{enumerable:true,get:function e(){return i.default}});Object.defineProperty(t,"Grid",{enumerable:true,get:function e(){return o.default}});Object.defineProperty(t,"Content",{enumerable:true,get:function e(){return u.default}});Object.defineProperty(t,"Rail",{enumerable:true,get:function e(){return c.default}});var n=r(a(1013));var s=r(a(1015));var l=r(a(991));var i=r(a(1016));var o=r(a(1017));var u=r(a(1018));var c=r(a(1019))},1013:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(311));var s=a(1014);var l=r(a(436));var i=r(a(281));var o=n.default.div.withConfig({displayName:"Cell",componentId:"sc-1abjmm4-0"})(["",";",";width:-moz-available;"],s.cellMixin,l.default);o.defaultProps={grow:true,padded:true};o.propTypes={grow:i.default.bool,padded:i.default.bool,wide:i.default.bool};var u=o;t.default=u;e.exports=t.default},1014:function(e,t,a){"use strict";var r=a(189);a(422);Object.defineProperty(t,"__esModule",{value:true});t.cellMixin=t.directionMixin=t.wideGridPadding=t.gridPadding=t.noPadding=void 0;var n=r(a(323));var s=a(311);var l=r(a(421));var i=r(a(429));function o(){var e=(0,n.default)(["\n        ","\n\n        ",";\n    "]);o=function t(){return e};return e}function u(){var e=(0,n.default)(["\n        ","\n\n        ",";\n    "]);u=function t(){return e};return e}function c(){var e=(0,n.default)(["\n        ",";\n\n        ",";\n    "]);c=function t(){return e};return e}function d(){var e=(0,n.default)(["\n        ",";\n\n        ",";\n    "]);d=function t(){return e};return e}var m=100/12;var f="0rem";t.noPadding=f;var w=".5rem";t.gridPadding=w;var p="1rem";t.wideGridPadding=p;var g=(0,s.css)(["",""],function(e){return e.vertical?"height":"width"});t.directionMixin=g;var v=(0,s.css)([""," "," ",";box-sizing:border-box;",";",";",";",";",";",";",";"],i.default,function(e){return e.grow&&"flex-grow: 1;"},function(e){return e.padded&&(0,s.css)(["margin-left:",";margin-right:",";"],w,w)},function(e){return e.order&&"\n        order: "+e.order+";\n    "},function(e){return e.padded&&e.wide&&(0,s.css)(["margin-left:",";margin-right:",";"],p,p)},function(e){if(!e.small)return;var t="calc("+m*e.small+"% - (2 * "+(e.padded?e.wide?p:w:f)+"))";return(0,s.css)(["flex:0 0;flex-basis:",";max-",":",";"],t,g,t)},l.default.medium(d(),function(e){if(!e.medium)return;var t="calc("+m*e.medium+"% - (2 * "+(e.padded?e.wide?p:w:f)+"))";return(0,s.css)(["flex:0 0;flex-basis:",";max-",":",";"],t,g,t)},function(e){return e.orderMedium&&"\n            order: "+e.orderMedium+";\n        "}),l.default.mediumLarge(c(),function(e){if(!e.mediumLarge)return;var t="calc("+m*e.mediumLarge+"% - (2 * "+(e.padded?e.wide?p:w:f)+"))";return(0,s.css)(["flex:0 0;flex-basis:",";max-",":",";"],t,g,t)},function(e){return e.orderMediumLarge&&"\n            order: "+e.orderMediumLarge+";\n        "}),l.default.large(u(),function(e){if(!e.large)return;var t="calc("+m*e.large+"% - (2 * "+(e.padded?e.wide?p:w:f)+"))";return(0,s.css)(["flex:0 0;flex-basis:",";max-",":",";"],t,g,t)},function(e){return e.orderLarge&&"\n            order: "+e.orderLarge+";\n        "}),l.default.extraLarge(o(),function(e){if(!e.extraLarge)return;var t="calc("+m*e.extraLarge+"% - (2 * "+(e.padded?e.wide?p:w:f)+"))";return(0,s.css)(["flex:0 0;flex-basis:",";max-",":",";"],t,g,t)},function(e){return e.orderExtraLarge&&"\n            order: "+e.orderExtraLarge+";\n        "}));t.cellMixin=v},1015:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(271));var s=r(a(303));var l=r(a(272));var i=r(a(281));var o=r(a(1013));var u=function e(t){var a=t.children,r=(0,s.default)(t,["children"]);var i=l.default.Children.only(a);var u=o.default.withComponent(i.type);var c=i.props,d=c.children,m=(0,s.default)(c,["children"]);return l.default.createElement(u,(0,n.default)({},m,r),d)};u.propTypes={children:i.default.object};var c=u;t.default=c;e.exports=t.default},1016:function(e,t,a){"use strict";var r=a(189);a(262);a(247);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(303));var s=r(a(272));var l=r(a(281));var i=a(421);var o=r(a(311));var u=(0,o.default)(function(e){var t=e.children,a=e.className,r=(0,n.default)(e,["children","className"]);if(!t)return null;var l=s.default.Children.only(t);var i=l.props.className?[l.props.className,a].join(" "):a;delete r.onSmall;delete r.onMedium;delete r.onLarge;delete r.onExtraLarge;return s.default.cloneElement(l,Object.assign({},l.props,r,{className:i}))}).withConfig({displayName:"Show",componentId:"oz18v2-0"})(["display:none;",";",";",";",";"],function(e){return e.onSmall&&"\n        @media (min-width: 0) and (max-width: "+i.TO_MEDIUM+") {\n            display: block;\n        }\n    "},function(e){return e.onMedium&&"\n        @media (min-width: "+i.MEDIUM+") and (max-width: "+i.TO_LARGE+") {\n            display: block;\n        }\n    "},function(e){return e.onLarge&&"\n        @media (min-width: "+i.LARGE+") and (max-width: "+i.TO_EXTRA_LARGE+") {\n            display: block;\n        }\n    "},function(e){return e.onExtraLarge&&"\n        @media (min-width: "+i.EXTRA_LARGE+") {\n            display: block;\n        }\n    "});u.defaultProps={onSmall:false,onMedium:false,onLarge:false,onExtraLarge:false};u.propTypes={children:l.default.any,onSmall:l.default.bool,onMedium:l.default.bool,onLarge:l.default.bool,onExtraLarge:l.default.bool};var c=u;t.default=c;e.exports=t.default},1017:function(e,t,a){"use strict";var r=a(345);var n=a(189);a(302);a(247);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=n(a(272));var l=n(a(281));var i=r(a(311));var o=a(1014);var u=n(a(429));var c=(0,i.default)(function(e){var t=e.children,a=e.style,r=e.className,n=e.vertical,l=e.wide,i=e.centered,o=e.padded,u=e.id,c=e.tag,d=void 0===c?"div":c;var m=""+d;return s.default.createElement(m,{className:r,style:a,id:u},s.default.Children.map(t,function(e){return e&&s.default.cloneElement(e,Object.assign({},e.props,{vertical:n,wide:l,centered:i,padded:o}))}))}).withConfig({displayName:"Grid",componentId:"lx2f3i-0"})(["display:flex;",";flex-wrap:wrap;",";",";",";",";"],function(e){return e.padded&&(0,i.css)(["margin:0 -",";"],o.gridPadding)},function(e){return e.vertical&&"flex-direction: column;"},function(e){return e.centered&&"justify-content: center;"},function(e){return e.padded&&e.wide&&(0,i.css)(["margin:0 -",";"],o.wideGridPadding)},u.default);c.defaultProps={padded:true};c.propTypes={padded:l.default.bool};var d=c;t.default=d;e.exports=t.default},1019:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(323));var s=r(a(311));var l=a(322);var i=r(a(421));var o=a(1018);function u(){var e=(0,n.default)(["\n        background: ",";\n        border-top: solid 1px ",";\n        margin: -",";\n        padding: ",";\n    "]);u=function t(){return e};return e}var c=s.default.div.withConfig({displayName:"Rail",componentId:"b9eau-0"})(["",""],i.default.toLarge(u(),l.gray05,l.gray15,o.contentPadding,o.contentPadding));c.defaultProps={grow:true};var d=c;t.default=d;e.exports=t.default},1285:function(e,t,a){"use strict";(function(r){var n=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=n(a(271));var l=n(a(303));var i=n(a(272));var o=a(903);var u=n(a(281));var c=n(a(1286));var d=n(a(1291));var m=n(a(1292));var f=n(a(1297));var w=n(a(1299));var p=n(a(1301));var g=n(a(1302));var v=n(a(1293));var b=n(a(1304));var h=n(a(1305));var y=n(a(1307));var _=n(a(1311));var x=function e(t){var a=t.data,r=(0,l.default)(t,["data"]);if(a.footer){var n=a.footer.template;if("healthiestcommunities"===n)return i.default.createElement(m.default,r);if("health"===n)return i.default.createElement(g.default,r);if("bestcountries"===n)return i.default.createElement(f.default,r);if("beststates"===n)return i.default.createElement(w.default,r);if("leaders"===n)return i.default.createElement(p.default,r);if("civic"===n)return i.default.createElement(v.default,r);if("education"===n)return i.default.createElement(c.default,(0,s.default)({},r,{items:b.default.footerItems}));if("money"===n)return i.default.createElement(h.default,r);if("travel"===n)return i.default.createElement(y.default,r);if("threesixty"===n)return i.default.createElement(_.default,r)}return i.default.createElement(c.default,r)};x.propTypes={data:u.default.object};var S=(0,o.withPageContextQuery)(x,d.default,{},r);t.default=S;e.exports=t.default}).call(this,"src/containers/organisms/Footer/index.js")},1291:function(e,t){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"alert_configuration"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alerts"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"permalink"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:111}};a.loc.source={body:"query {\n    footer {\n        template\n    }\n    alert_configuration {\n        alerts\n        permalink\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function n(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return true;var t=e.name.value;if(r[t])return false;r[t]=true;return true})}function s(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&t.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){s(e,t)});e.variableDefinitions&&e.variableDefinitions.forEach(function(e){s(e,t)});e.definitions&&e.definitions.forEach(function(e){s(e,t)})}var l={};(function e(){a.definitions.forEach(function(e){if(e.name){var t=new Set;s(e,t);l[e.name.value]=t}})})();function i(e,t){for(var a=0;a<e.definitions.length;a++){var r=e.definitions[a];if(r.name&&r.name.value==t)return r}}function o(e,t){var a={kind:e.kind,definitions:[i(e,t)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=l[t]||new Set;var n=new Set;var s=new Set;r.forEach(function(e){s.add(e)});while(s.size>0){var o=s;s=new Set;o.forEach(function(e){if(!n.has(e)){n.add(e);var t=l[e]||new Set;t.forEach(function(e){s.add(e)})}})}n.forEach(function(t){var r=i(e,t);r&&a.definitions.push(r)});return a}e.exports=a},1292:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1293));var l=r(a(1295));var i=function e(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.default,null),n.default.createElement(s.default,null))};var o=i;t.default=o;e.exports=t.default},1293:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(323));var s=r(a(272));var l=r(a(311));var i=r(a(421));var o=a(355);var u=a(343);var c=r(a(1286));var d=r(a(1294));function m(){var e=(0,n.default)(["\n        .footer-link-container {\n            margin-bottom: ",";\n        }\n    "]);m=function t(){return e};return e}var f=(0,l.default)(u.Box).withConfig({displayName:"CivicFooter__CivicFooterWrapper",componentId:"sc-1aznrzh-0"})(["",""],i.default.large(m(),(0,o.margin)(4)));var w=function e(){return s.default.createElement(f,null,s.default.createElement(c.default,{items:d.default.footerItems}))};var p=w;t.default=p;e.exports=t.default},1294:function(e,t){e.exports={footerItems:[[{label:"Best Countries",url:"/news/best-countries",subItems:[{label:"Overall Rankings",url:"/news/best-countries/overall-rankings"},{label:"Rankings Index",url:"/news/best-countries/rankings-index"},{label:"Countries Index",url:"/news/best-countries/countries-index"},{label:"Data Explorer",url:"/news/best-countries/data-explorer"},{label:"Countries News",url:"/topics/subjects/best-countries"},{label:"Methodology",url:"/news/best-countries/articles/methodology"},{label:"Rankings Download",url:"/media/best-countries/overall-rankings-2019.pdf"},{label:"Countries FAQ",url:"/news/best-countries/articles/frequently-asked-questions"}]}],[{label:"Best States",url:"/news/best-states",subItems:[{label:"Overall Rankings",url:"/news/best-states/rankings"},{label:"Rankings Index",url:"/news/best-states/rankings-index"},{label:"States Index",url:"/news/best-states/states-index"},{label:"Data Explorer",url:"/news/best-states/data-explorer"},{label:"States News",url:"/news/best-states/news"},{label:"Methodology",url:"/news/best-states/articles/methodology"},{label:"Rankings Download",url:"/media/best-states/overall-rankings-2019.pdf"},{label:"States FAQ",url:"/news/best-states/articles/frequently-asked-questions"}]}],[{label:"Healthiest Communities",url:"/news/healthiest-communities",subItems:[{label:"Overall Rankings",url:"/news/healthiest-communities/rankings"},{label:"Urban, High-Performing",url:"/news/healthiest-communities/rankings/urban-high-performing"},{label:"Urban, Up-and-Coming",url:"/news/healthiest-communities/rankings/urban-up-and-coming"},{label:"Rural, High-Performing",url:"/news/healthiest-communities/rankings/rural-high-performing"},{label:"Rural, Up-and-Coming",url:"/news/healthiest-communities/rankings/rural-up-and-coming"},{label:"Data Explorer",url:"/news/healthiest-communities/data-explorer"},{label:"Methodology",url:"/news/healthiest-communities/articles/methodology"},{label:"Communities FAQ",url:"/news/healthiest-communities/articles/frequently-asked-questions"}]}],[{label:"News",url:"/news",subItems:[{label:"The Run",url:"/news/the-run"},{label:"Politics",url:"/news/politics-news"},{label:"World",url:"/news/world-news"},{label:"Business",url:"/news/business"},{label:"Science",url:"/science/news"},{label:"Health News",url:"/news/health-news"},{label:"Cartoons",url:"/cartoons"}]}],[{label:"Cities",url:"/news/cities"},{label:"Leaders",url:"/news/leaders"},{label:"The Report",url:"/news/the-report"},{label:"Photos",url:"/photos"},{label:"America 2020",url:"/news/elections"},{label:"Events",url:"/news/live-events"}]]}},1295:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=a(343);var l=r(a(1296));var i=function e(){return n.default.createElement(l.default,{logo:n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"lg-hide"},n.default.createElement(s.Image,{src:"/static-atlas/assets/img/news/healthiest-communities/circle-logo.svg",height:"93px",width:"93px"})),n.default.createElement("div",{className:"sm-hide md-hide"},n.default.createElement(s.Image,{src:"/static-atlas/assets/img/news/healthiest-communities/circle-logo.svg",height:"135px"}))),product:"Healthiest Communities",sponsorLogo:"/static-atlas/assets/img/news/healthiest-communities/aetna-white.svg",sponsorText:"in collaboration with",text:"Healthiest Communities is an interactive destination for consumers and policymakers,\n        developed by U.S. News & World Report in collaboration with the Aetna Foundation, an\n        independent charitable and philanthropic affiliate of CVS Health. Backed by in-depth\n        research and accompanied by news and analysis, the site features comprehensive rankings\n        drawn from an examination of nearly 3,000 counties and county equivalents on 84 metrics\n        across 10 categories, informing residents, health care leaders and officials about local\n        policies and practices that drive better health outcomes for all. Data was gathered and\n        analyzed by the University of Missouri Center for Applied Research and Engagement Systems (CARES)."})};var o=i;t.default=o;e.exports=t.default},1296:function(e,t,a){"use strict";var r=a(345);var n=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=n(a(323));var l=n(a(272));var i=n(a(281));var o=r(a(311));var u=a(343);var c=a(1012);var d=a(322);var m=a(355);var f=n(a(421));function w(){var e=(0,s.default)(["\n        text-align: center;\n    "]);w=function t(){return e};return e}function p(){var e=(0,s.default)(["\n        margin: "," ",";\n    "]);p=function t(){return e};return e}function g(){var e=(0,s.default)(["\n        text-align: center;\n        margin: "," ",";\n    "]);g=function t(){return e};return e}function v(){var e=(0,s.default)(["\n                width: 93px;\n                height: 93px;\n            "]);v=function t(){return e};return e}function b(){var e=(0,s.default)(["\n        margin-bottom: ",";\n        margin-left: ",";\n        order: 2;\n    "]);b=function t(){return e};return e}function h(){var e=(0,s.default)(["\n            margin-left: ",";\n        "]);h=function t(){return e};return e}function y(){var e=(0,s.default)(["\n            flex-direction: column;\n        "]);y=function t(){return e};return e}function _(){var e=(0,s.default)(["\n            text-align: center;\n        "]);_=function t(){return e};return e}function x(){var e=(0,s.default)(["\n        flex-direction: column;\n    "]);x=function t(){return e};return e}function S(){var e=(0,s.default)(["\n            padding: ",";\n            flex-direction: row;\n        "]);S=function t(){return e};return e}var E=(0,o.default)(u.Box).withConfig({displayName:"ProductSubFooter__Container",componentId:"sc-1hshi8x-0"})(["background:",";","{display:flex;align-items:center;padding:"," ",";flex-direction:column;justify-content:center;","}"],d.black70,c.Content,(0,m.padding)(3),(0,m.padding)(2),f.default.large(S(),(0,m.padding)(3)));var C=(0,o.default)(u.Box).withConfig({displayName:"ProductSubFooter__FlexBox",componentId:"sc-1hshi8x-1"})(["display:flex;align-items:center;"," ","{","}","{display:flex;align-items:center;","}","{margin:"," auto;","}"],f.default.toLarge(x()),u.Heading,f.default.toMedium(_()),u.Box,f.default.toMedium(y()),u.Image,(0,m.margin)(0),f.default.mediumOnly(h(),(0,m.margin)(3)));var k=(0,o.default)(u.Box).withConfig({displayName:"ProductSubFooter__LogoWrapper",componentId:"sc-1hshi8x-2"})([""," ",""],f.default.large(b(),(0,m.margin)(0),(0,m.margin)(6)),function(e){var t=e.logo;return t&&"string"===typeof t&&(0,o.css)(["","{","}"],u.Image,f.default.toLarge(v()))});var I=(0,o.default)(u.Span).withConfig({displayName:"ProductSubFooter__Span",componentId:"sc-1hshi8x-3"})([""," ",""],f.default.toLarge(g(),(0,m.margin)(3),(0,m.margin)(0)),f.default.large(p(),(0,m.margin)(0),(0,m.margin)(3)));var P=(0,o.default)(u.Raw).withConfig({displayName:"ProductSubFooter__Paragraph",componentId:"sc-1hshi8x-4"})(["color:",";line-height:1.65;",""],d.white00,f.default.toLarge(w()));var N=function e(t){var a=t.logo,r=t.product,n=t.sponsorLogo,s=t.sponsorText,i=t.text;return l.default.createElement(E,null,l.default.createElement(c.Content,null,l.default.createElement(k,{spacing:4,logo:a},"string"===typeof a?l.default.createElement(u.Image,{height:100,src:a}):a),l.default.createElement(u.Box,null,l.default.createElement(C,{spacing:4},r&&(l.default.isValidElement(r)?r:l.default.createElement(u.Heading,{level:3,size:4,color:d.white00,caps:true},r)),l.default.createElement(u.Box,null,s&&l.default.createElement(I,{roboto:false,size:6,color:d.gray15,caps:true,bold:true},s),"string"===typeof n?l.default.createElement(u.Image,{height:30,src:n}):n)),l.default.createElement(P,{spacing:0,dangerouslySetInnerHTML:{__html:i}}))))};N.propTypes={logo:i.default.oneOfType([i.default.string,i.default.node]),product:i.default.oneOfType([i.default.string,i.default.node]),sponsorLogo:i.default.oneOfType([i.default.string,i.default.node]),sponsorText:i.default.string,text:i.default.string};var M=N;t.default=M;e.exports=t.default},1297:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1298));var l=r(a(1293));var i=function e(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.default,null),n.default.createElement(l.default,null))};var o=i;t.default=o;e.exports=t.default},1298:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(311));var l=a(343);var i=a(322);var o=r(a(1296));var u=s.default.img.attrs(function(){return{src:"/static-atlas/assets/img/news/best-countries/logos/yr-bav-white.svg"}}).withConfig({displayName:"BCProductSubFooter__BavLogo",componentId:"sc-5qrfwu-0"})(["display:inline;margin-bottom:0rem;margin-right:0.5rem;margin-left:1rem;height:25px;width:127px;"]);var c=s.default.img.attrs(function(){return{src:"/static-atlas/assets/img/news/best-countries/logos/wharton-white.svg"}}).withConfig({displayName:"BCProductSubFooter__WhartonLogo",componentId:"sc-5qrfwu-1"})(["display:inline;margin-bottom:-0.275rem;margin-left:0.6rem;height:25px;width:102px;"]);var d=function e(){return n.default.createElement(o.default,{logo:n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"lg-hide"},n.default.createElement(l.Image,{src:"/static-atlas/assets/img/news/best-countries/logos/best-countries.svg",width:"93px",height:"93px"})),n.default.createElement("div",{className:"sm-hide md-hide"},n.default.createElement(l.Image,{src:"/static-atlas/assets/img/news/best-countries/logos/best-countries.svg",height:"136px"}))),product:"Best Countries",sponsorLogo:n.default.createElement(l.Span,{style:{display:"flex",alignItems:"center",marginLeft:"-0.75rem"},color:i.gray15,size:6,caps:true,bold:true},n.default.createElement(u,null),"&",n.default.createElement(c,null)),sponsorText:"in partnership with",text:"Best Countries is a rankings, news and analysis project created             to capture how countries are perceived on a global scale. The             rankings evaluate 73 countries across 24 rankings drawn from a             survey of more than 20,000 global citizens, measuring 75 dimensions             that have the potential to drive trade, travel and investment and             directly affect national economies."})};var m=d;t.default=m;e.exports=t.default},1299:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1300));var l=r(a(1293));var i=function e(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.default,null),n.default.createElement(l.default,null))};var o=i;t.default=o;e.exports=t.default},1300:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=a(343);var l=a(322);var i=r(a(1296));var o=function e(){return n.default.createElement(i.default,{logo:n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"lg-hide"},n.default.createElement(s.Image,{height:"70px",src:"/static-atlas/assets/img/news/best-states/logos/best_states_logo_2.svg",spacing:4})),n.default.createElement("div",{className:"sm-hide md-hide"},n.default.createElement(s.Image,{height:"80px",src:"/static-atlas/assets/img/news/best-states/logos/best_states_logo_2.svg"}))),product:n.default.createElement(s.Heading,{level:3,size:4,color:l.white00,caps:true},"Best States"),text:"Best States is an interactive platform developed by U.S.             News for ranking the 50 U.S. states, alongside news             analysis and daily reporting. The platform is designed to             engage citizens and government leaders in a discussion             about what needs improvement across the country."})};var u=o;t.default=u;e.exports=t.default},1301:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1296));var l=r(a(1293));var i=a(343);var o=a(1012);var u=function e(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.default,{logo:n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Show,{onSmall:true,onMedium:true},n.default.createElement(i.Image,{src:"/static-atlas/assets/img/news/leaders/logo-white.svg",height:"93px",width:"93px"})),n.default.createElement(o.Show,{onLarge:true,onExtraLarge:true},n.default.createElement(i.Image,{src:"/static-atlas/assets/img/news/leaders/logo-white.svg",height:"135px"}))),product:"Leaders",text:"U.S. News Leaders is a rankings, news and analysis project created to capture how leaders are perceived on a local and global scale."}),n.default.createElement(l.default,null))};var c=u;t.default=c;e.exports=t.default},1302:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1286));var l=r(a(1303));var i=function e(){return n.default.createElement(s.default,{items:l.default.footerItems})};var o=i;t.default=o;e.exports=t.default},1304:function(e,t){e.exports={default:{alertBar:{headline:"College Compass",mobileHeadline:"Unlock College Compass",url:"/usnews/store/college_compass.htm?src=web%3Acol_compass%3Ana%3Aalertbar%3A20180131",description:"Get instant access to full rankings and complete school data.",premiumText:"Complete Compass Access Enabled"},international:{alertBar:{headline:"International Students",url:"https://www.usnewsglobaleducation.com/international-students-parents/why-study-in-the-united-states?utm_source=usnews&utm_medium=unpaid-promotion&utm_campaign=global_usnge_learn-more_unpaid-promotion&utm_content=usnews_acquisition_skinny_en_global&h_region=global",description:"Get a jumpstart with information and resources just for you from U.S. News Global Education",sponsored:true,eventName:"USNGE-banner-other",cookieName:"usn_grad_show_alert_bar"},china:{alertBar:{headline:"Chinese Students",url:"http://usnewsglobaleducation.cn/?utm_source=usnews&utm_medium=unpaid-promotion&utm_campaign=global_usnge_learn-more_unpaid-promotion&utm_content=usnews_acquisition_skinny_en_cn&h_region=global",description:"Get localized information in Chinese to help improve your search effort",sponsored:true,eventName:"USNGE-banner-china",cookieName:"usn_grad_show_alert_bar"}},india:{alertBar:{headline:"Indian Students",url:"https://www.usnewsglobaleducation.com/virtual-counselor?utm_source=usnews&utm_medium=unpaid-promotion&utm_campaign=global_usnge_learn-more_unpaid-promotion&utm_content=usnews_acquisition_skinny_en_in&h_region=global",description:"Get free expert counseling in the comfort of your home from a U.S. News Global Education trained education counselor",sponsored:true,eventName:"USNGE-banner-india",cookieName:"usn_grad_show_alert_bar"}}}},colleges:{alertBar:{headline:"College Compass",mobileHeadline:"Unlock College Compass",url:"https://www.usnews.com/usnews/store/college_compass?src=web:col_compass:na:alertbar:20180131.htm",description:"Get instant online access to full rankings and complete school data.",premiumText:"Complete Compass Access Enabled",premiumUrl:"https://premium.usnews.com/best-colleges/compass/dashboard",cookieName:"usn_colleges_show_alert_bar"},compass:{label:"U.S. News College Compass",url:"https://www.usnews.com/usnews/store/college_compass.htm"}},globalUniversities:{alertBar:{headline:"College Compass",mobileHeadline:"Unlock College Compass",url:"https://www.usnews.com/usnews/store/college_compass?src=web:col_compass:na:alertbar:20180131.htm",description:"Get instant online access to full rankings and complete school data.",premiumText:"Complete Compass Access Enabled",premiumUrl:"https://premium.usnews.com/best-colleges/compass/dashboard",cookieName:"usn_global_show_alert_bar"}},grad:{alertBar:{headline:"Grad Compass",mobileHeadline:"Unlock Grad Compass",url:"https://www.usnews.com/usnews/store/grad_school_compass?src=web:col_compass:na:alertbar:20180131",description:"Get instant online access to full rankings and complete school data.",premiumText:"Complete Compass Access Enabled",cookieName:"usn_grad_show_alert_bar"},compass:{items:[{programUrlName:"top-business-schools",label:"U.S. News Business School Compass",url:"http://www.usnews.com/usnews/store/business_school_compass.htm",description:"GMAT scores and employment data"},{programUrlName:"top-education-schools",label:"U.S. News Education School Compass",url:"http://www.usnews.com/usnews/store/education_compass.htm",description:"GRE scores and student debt data"},{programUrlName:"top-engineering-schools",label:"U.S. News Engineering School Compass",url:"http://www.usnews.com/usnews/store/engineering_compass.htm",description:"GRE scores and student debt data"},{programUrlName:"top-law-schools",label:"U.S. News Law School Compass",url:"http://www.usnews.com/usnews/store/law_school_compass.htm",description:"LSAT scores and employment statistics"},{programUrlName:"top-medical-schools",label:"U.S. News Medical School Compass",url:"http://www.usnews.com/usnews/store/medical_school_compass.htm",description:"MCAT scores and student debt data"},{programUrlName:"top-nursing-schools",label:"U.S. News Nursing School Compass",url:"http://www.usnews.com/usnews/store/nursing_compass.htm",description:"acceptance rates and student debt data"}]}},footerItems:[[{label:"Best Colleges",url:"https://www.usnews.com/best-colleges",subItems:[{label:"National Universities",url:"https://www.usnews.com/best-colleges/rankings/national-universities"},{label:"Liberal Arts Colleges",url:"https://www.usnews.com/best-colleges/rankings/national-liberal-arts-colleges"},{label:"Regional Universities",url:"https://www.usnews.com/best-colleges/rankings/regional-universities"},{label:"Regional Colleges",url:"https://www.usnews.com/best-colleges/rankings/regional-colleges"},{label:"Business Programs",url:"https://www.usnews.com/best-colleges/rankings/business"},{label:"Engineering Programs",url:"https://www.usnews.com/best-colleges/rankings/engineering-doctorate"}]}],[{label:"Grad Schools",url:"https://www.usnews.com/best-graduate-schools",subItems:[{label:"MBA Programs",url:"https://www.usnews.com/best-graduate-schools/top-business-schools"},{label:"Law Schools",url:"https://www.usnews.com/best-graduate-schools/top-law-schools"},{label:"Medical Schools",url:"https://www.usnews.com/best-graduate-schools/top-medical-schools"},{label:"Engineering Schools",url:"https://www.usnews.com/best-graduate-schools/top-engineering-schools"},{label:"Education Schools",url:"https://www.usnews.com/best-graduate-schools/top-education-schools"},{label:"Nursing Schools",url:"https://www.usnews.com/best-graduate-schools/top-nursing-schools"}]}],[{label:"Online Colleges",url:"https://www.usnews.com/education/online-education",subItems:[{label:"Bachelor's Programs",url:"https://www.usnews.com/education/online-education/bachelors"},{label:"Master's Programs",url:"https://www.usnews.com/education/online-education/graduate"},{label:"MBA & Grad Business",url:"https://www.usnews.com/education/online-education/mba"},{label:"Grad Nursing",url:"https://www.usnews.com/education/online-education/nursing"},{label:"Grad Education",url:"https://www.usnews.com/education/online-education/education"},{label:"Grad Engineering",url:"https://www.usnews.com/education/online-education/engineering"}]}],[{label:"Global",url:"https://www.usnews.com/education/best-global-universities",subItems:[{label:"Global Universities",url:"https://www.usnews.com/education/best-global-universities/rankings"},{label:"Africa",url:"https://www.usnews.com/education/best-global-universities/africa"},{label:"Asia",url:"https://www.usnews.com/education/best-global-universities/asia"},{label:"Australia/New Zealand",url:"https://www.usnews.com/education/best-global-universities/australia-new-zealand"},{label:"Europe",url:"https://www.usnews.com/education/best-global-universities/europe"},{label:"Latin America",url:"https://www.usnews.com/education/best-global-universities/latin-america"}]}],[{label:"High Schools",url:"https://www.usnews.com/education/best-high-schools",subItems:[{label:"National Rankings",url:"https://www.usnews.com/education/best-high-schools/national-rankings"},{label:"Charter Schools",url:"https://www.usnews.com/education/best-high-schools/national-rankings/charter-school-rankings"},{label:"Magnet Schools",url:"https://www.usnews.com/education/best-high-schools/national-rankings/magnet-school-rankings"},{label:"STEM Schools",url:"https://www.usnews.com/education/best-high-schools/national-rankings/stem"},{label:"State Rankings",url:"https://www.usnews.com/education/best-high-schools/rankings-overview"}]},{label:"Community Colleges",url:"https://www.usnews.com/education/community-colleges",subItems:[]}],[{label:"Premium Tools",url:" https://www.usnews.com/usnews/store/college_compass.htm",subItems:[{label:"Log In to Compass",url:"https://secure.usnews.com/member/login?src=peel",hasPremiumVersion:true},{label:"My Fit Custom Ranking",url:"https://premium.usnews.com/best-colleges/myfit"},{label:"My Schools",isPremium:true,url:"https://premium.usnews.com/best-colleges/compass/myschools",loggedOutUrl:"https://www.usnews.com/usnews/store/college_compass.htm"},{label:"My Notes",isPremium:true,url:"https://premium.usnews.com/best-colleges/compass/notes",loggedOutUrl:"https://www.usnews.com/usnews/store/college_compass.htm"},{label:"Unlock more with Compass »",url:"https://www.usnews.com/usnews/store/college_compass.htm?src=peel",caps:true,trackingId:"col_compass_footer"}]}]]}},1305:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1286));var l=r(a(1306));var i=function e(){return n.default.createElement(s.default,{items:l.default})};var o=i;t.default=o;e.exports=t.default},1311:function(e,t,a){"use strict";var r=a(189);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(272));var s=r(a(1286));var l=r(a(1312));var i=function e(){return n.default.createElement(s.default,{items:l.default})};var o=i;t.default=o;e.exports=t.default},1312:function(e,t){e.exports=[[{label:"Home Security",url:"/360-reviews/home-security",subItems:[{label:"Best Home Security Systems",url:"/360-reviews/home-security"},{label:"Cheapest Home Security",url:"/360-reviews/home-security/cheap-home-security-systems"},{label:"Pro Installed Home Security",url:"/360-reviews/home-security/best-pro-installed-systems"},{label:"DIY Home Security",url:"/360-reviews/home-security/best-diy-systems"},{label:"Home Security with Cameras",url:"/360-reviews/home-security/best-systems-with-cameras"}]},{label:"Home Security Cameras",url:"/360-reviews/security-cameras",subItems:[{label:"Best Home Security Cameras",url:"/360-reviews/security-cameras/best-home-security-cameras"}]},{label:"Antivirus Software",url:"/360-reviews/antivirus",subItems:[{label:"Best Antivirus Software",url:"/360-reviews/antivirus/best-antivirus-software"},{label:"Best Antivirus for Mac",url:"/360-reviews/antivirus/best-antivirus-software-for-mac"},{label:"Cheapest Antivirus Software",url:"/360-reviews/antivirus/cheapest-antivirus-software"},{label:"Cheapest Antivirus for Mac",url:"/360-reviews/antivirus/cheapest-antivirus-software-for-mac"}]},{label:"Point-of-Sale Systems",url:"/360-reviews/point-of-sale",subItems:[{label:"Best Point-of-Sale Systems",url:"/360-reviews/point-of-sale/best-pos-systems"},{label:"Best Restaurant Point-of-Sale Systems",url:"/360-reviews/point-of-sale/best-restaurant-pos-systems"},{label:"Best Retail Point-of-Sale Systems",url:"/360-reviews/point-of-sale/best-retail-pos-systems"}]}],[{label:"Mattress",url:"/360-reviews/mattress",subItems:[{label:"Best Mattress",url:"/360-reviews/mattress/best-mattress"},{label:"Cheapest Mattress",url:"/360-reviews/mattress/cheap-mattress"},{label:"Best Foam Mattress",url:"/360-reviews/mattress/foam-mattress"},{label:"Best Hybrid Mattress",url:"/360-reviews/mattress/hybrid-mattress"}]},{label:"Life Insurance",url:"/360-reviews/life-insurance",subItems:[{label:"Best Life Insurance",url:"/360-reviews/life-insurance/best-life-insurance-companies"},{label:"Cheapest Life Insurance",url:"/360-reviews/life-insurance/cheap-life-insurance"}]},{label:"VPNs",url:"/360-reviews/vpn",subItems:[{label:"Best VPNs",url:"/360-reviews/vpn/best-vpn"},{label:"Best Free VPNs",url:"/360-reviews/vpn/best-free-vpn"}]},{label:"CRM Software",url:"/360-reviews/crm",subItems:[{label:"Best CRM Software",url:"/360-reviews/crm/best-crm-software"},{label:"Best Free CRM Software",url:"/360-reviews/crm/best-free-crm"}]}],[{label:"Homeowners Insurance",url:"/360-reviews/homeowners-insurance",subItems:[{label:"Best Homeowners Insurance",url:"/360-reviews/homeowners-insurance/best-homeowners-insurance-companies"}]},{label:"Renters Insurance",url:"/360-reviews/renters-insurance",subItems:[{label:"Best Renters Insurance",url:"/360-reviews/renters-insurance/best-renters-insurance-companies"},{label:"Cheapest Renters Insurance",url:"/360-reviews/renters-insurance/cheapest-renters-insurance-companies"}]},{label:"Business Phone Systems",url:"/360-reviews/business-phone-services",subItems:[{label:"Best Business Phone Systems",url:"/360-reviews/business-phone-services/best-business-phone-systems"},{label:"Best Small Business Phone Systems",url:"/360-reviews/business-phone-services/best-small-business-phone-systems"}]},{label:"Identity Theft Protection",url:"/360-reviews/identity-theft-protection",subItems:[{label:"Best Identity Theft Protection Services",url:"/360-reviews/identity-theft-protection/best-identity-theft-protection-services"}]},{label:"Credit Card Processing",url:"/360-reviews/credit-card-processing"},{label:"Home Warranty",url:"/360-reviews/home-warranty",subItems:[{label:"Best Home Warranty",url:"/360-reviews/home-warranty/best-home-warranty-companies"}]},{label:"Tax Software",url:"/360-reviews/tax-software",subItems:[{label:"Best Tax Software",url:"/360-reviews/tax-software/best-tax-software"}]}],[{label:"Internet Providers",url:"/360-reviews/internet-providers",subItems:[{label:"Best Internet Providers",url:"/360-reviews/internet-providers/best-internet-providers"},{label:"Best Fiber Internet",url:"/360-reviews/internet-providers/fiber-internet"},{label:"Best Cable Internet",url:"/360-reviews/internet-providers/cable-internet"},{label:"Best DSL Internet",url:"/360-reviews/internet-providers/dsl-internet"},{label:"Best Satellite Internet",url:"/360-reviews/internet-providers/satellite-internet"},{label:"Cheap Internet Providers",url:"/360-reviews/internet-providers/cheap-internet-providers"}]},{label:"Streaming Services",url:"/360-reviews/streaming-services",subItems:[{label:"Best On-Demand Streaming Services",url:"/360-reviews/streaming-services/best-streaming-service"},{label:"Best Live TV Streaming Services",url:"/360-reviews/streaming-services/best-live-streaming-tv"}]},{label:"Stay at Home Guide",url:"/360-reviews/working-from-home"},{label:"Video Conferencing Guide",url:"/360-reviews/video-conferencing"}]]}}]);