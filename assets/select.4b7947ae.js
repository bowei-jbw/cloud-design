var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&r(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{L as c,r as u,f as d,B as p,d as m,v as h,a5 as g,af as v}from"./index.16a07d60.js";import{q as f}from"./styled-components.browser.esm.d6068967.js";import{N as b}from"./index.54d81467.js";const x=c.Option;class y extends u.exports.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this)}onChange(e){console.log(e)}render(){return u.exports.createElement("div",null,u.exports.createElement("span",{id:"select-a11y"},"Select: "),u.exports.createElement(c,{onChange:this.onChange,defaultValue:"jack","aria-labelledby":"select-a11y"},u.exports.createElement(x,{value:"jack"},"Jack"),u.exports.createElement(x,{value:"frank"},"Frank"),u.exports.createElement(x,{value:"hugo"},"Hugo")))}}const E=f.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(y,null);return u.exports.createElement(E,null,e)}});const C=c.Option,_=function(e){console.log(e)},w=function(e,t){console.log(e,t)},k=()=>{console.log("focus")},T=()=>{console.log("blur")};const O=f.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",null,u.exports.createElement(c,{id:"basic-demo",onChange:_,onToggleHighlightItem:w,defaultValue:"jack",onFocus:k,onBlur:T,"aria-label":"name is",style:{marginRight:8}},u.exports.createElement(C,{value:"jack"},"Jack"),u.exports.createElement(C,{value:"frank"},"Frank"),u.exports.createElement(C,{value:"hugo"},"Hugo")),u.exports.createElement(c,{defaultValue:"clear",hasClear:!0,style:{marginRight:8}},u.exports.createElement(C,{value:"jack"},"Jack"),u.exports.createElement(C,{value:"frank"},"Frank"),u.exports.createElement(C,{value:"clear"},"clear")),u.exports.createElement(c,{placeholder:"show search",showSearch:!0,hasClear:!0,style:{marginRight:8}},u.exports.createElement(C,{value:"jack"},"Jack"),u.exports.createElement(C,{value:"frank"},"Frank"),u.exports.createElement(C,{value:"hugo"},"Hugo")),u.exports.createElement(c,{disabled:!0,defaultValue:"frank",style:{marginRight:8}},u.exports.createElement(C,{value:"jack"},"Jack"),u.exports.createElement(C,{value:"frank"},"Frank"),u.exports.createElement(C,{value:"hugo"},"Hugo")));return u.exports.createElement(O,null,e)}});const{AutoComplete:M}=c,z=["Lucy King","Lily King","Jim Green",{label:"Chinese",children:[{value:"Hang Meimei",label:"Hang Meimei"},"Li Lei",{value:"Gao Hui",label:"Gao Hui",disabled:!0},"Zhang San","Li Si","Wang Wu",{value:"Zhao Benshan",label:"Zhao Benshan",disabled:!0},"Sun Yang","Song Shuying"]},{label:"Pets",children:["Poly","Kitty"]}],L={size:["small","medium","large"],disabled:[!0,!1],hasClear:[!0,!1]};class A extends u.exports.Component{constructor(e){super(e),this.state={value:null,size:void 0,disabled:void 0,hasClear:void 0},this.handleChange=this.handleChange.bind(this),this.handleCtrlChange=this.handleCtrlChange.bind(this)}handleCtrlChange(e,t){this.setState({[e]:t}),"mode"===e&&this.setState({value:null})}handleChange(e){console.log("handleChange: value: ",e),this.setState({value:e})}renderCtrlNodes(e){const t=[];let a;for(a in L)L.hasOwnProperty(a)&&t.push(u.exports.createElement(c,{key:a,label:`${a}: `,value:e[a],dataSource:L[a],onChange:this.handleCtrlChange.bind(this,a)}));return t}render(){return u.exports.createElement("div",{className:"demo-container"},u.exports.createElement("div",{className:"demo-controller"},this.renderCtrlNodes(this.state)),u.exports.createElement(M,i(s({},this.state),{style:{maxWidth:300},onChange:this.handleChange,dataSource:z})))}}const N=f.div`
  .demo-container {
    padding: 16px;
    background-color: #f8f8f8;
  }

  .demo-controller {
    padding: 12px 12px 4px;
    margin-bottom: 16px;
    border: 2px dashed #ddd;
  }

  .next-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(A,null);return u.exports.createElement(N,null,e)}}),R={exports:{}},$={exports:{}},F=1e3,H=60*F,K=60*H,V=24*K,B=365.25*V,G=function(e,t){t=t||{};var a,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*B;case"days":case"day":case"d":return a*V;case"hours":case"hour":case"hrs":case"hr":case"h":return a*K;case"minutes":case"minute":case"mins":case"min":case"m":return a*H;case"seconds":case"second":case"secs":case"sec":case"s":return a*F;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?Z(a=e,V,"day")||Z(a,K,"hour")||Z(a,H,"minute")||Z(a,F,"second")||a+" ms":function(e){if(e>=V)return Math.round(e/V)+"d";if(e>=K)return Math.round(e/K)+"h";if(e>=H)return Math.round(e/H)+"m";if(e>=F)return Math.round(e/F)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function Z(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}!function(e,t){var a;function l(e){function l(){if(l.enabled){var e=l,n=+new Date,o=n-(a||n);e.diff=o,e.prev=a,e.curr=n,a=n;for(var r=new Array(arguments.length),s=0;s<r.length;s++)r[s]=arguments[s];r[0]=t.coerce(r[0]),"string"!=typeof r[0]&&r.unshift("%O");var i=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,(function(a,l){if("%%"===a)return a;i++;var n=t.formatters[l];if("function"==typeof n){var o=r[i];a=n.call(e,o),r.splice(i,1),i--}return a})),t.formatArgs.call(e,r);var c=l.log||t.log||console.log.bind(console);c.apply(e,r)}}return l.namespace=e,l.enabled=t.enabled(e),l.useColors=t.useColors(),l.color=function(e){var a,l=0;for(a in e)l=(l<<5)-l+e.charCodeAt(a),l|=0;return t.colors[Math.abs(l)%t.colors.length]}(e),"function"==typeof t.init&&t.init(l),l}(t=$.exports=l.debug=l.default=l).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),l=a.length,n=0;n<l;n++)a[n]&&("-"===(e=a[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,l;for(a=0,l=t.skips.length;a<l;a++)if(t.skips[a].test(e))return!1;for(a=0,l=t.names.length;a<l;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=G,t.names=[],t.skips=[],t.formatters={}}(0,$.exports),function(e,t){function a(){var e;try{e=t.storage.debug}catch(a){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=$.exports).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var l="color: "+this.color;e.splice(1,0,l,"color: inherit");var n=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),e.splice(o,0,l)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}(R,R.exports);var J=R.exports("jsonp"),I=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var l,n,o=t.prefix||"__jp",r=t.name||o+D++,s=t.param||"callback",i=null!=t.timeout?t.timeout:6e4,c=encodeURIComponent,u=document.getElementsByTagName("script")[0]||document.head;i&&(n=setTimeout((function(){d(),a&&a(new Error("Timeout"))}),i));function d(){l.parentNode&&l.parentNode.removeChild(l),window[r]=W,n&&clearTimeout(n)}return window[r]=function(e){J("jsonp got",e),d(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+s+"="+c(r)).replace("?&","?"),J('jsonp req "%s"',e),(l=document.createElement("script")).src=e,u.parentNode.insertBefore(l,u),function(){window[r]&&d()}},D=0;function W(){}const{AutoComplete:q}=c;class U extends u.exports.Component{constructor(){super(...arguments),this.state={dataSource:[]},this.handleChange=e=>{clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{I(`https://suggest.taobao.com/sug?code=utf-8&q=${e}`,((e,t)=>{const a=t.result.map((e=>e[0]));this.setState({dataSource:a})}))}),100)}}render(){return u.exports.createElement("div",{className:"demo-container"},u.exports.createElement(q,{filterLocal:!1,placeholder:"search from taobao",onChange:this.handleChange,dataSource:this.state.dataSource}))}}const Y=f.div`
  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }
`;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(U,null);return u.exports.createElement(Y,null,e)}});const X=["Lucy King","Lily King","Jim Green",{label:"Chinese",children:[{value:"Hang Meimei",label:"Hang Meimei"},"Li Lei",{value:"Gao Hui",label:"Gao Hui",disabled:!0},"Zhang San","Li Si","Wang Wu",{value:"Zhao Benshan",label:"Zhao Benshan",disabled:!0},"Sun Yang","Song Shuying"]},{label:"Pets",children:["Poly","Kitty"]}],ee=e=>{console.log(e)};const te=f.div``;var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(c.AutoComplete,{autoHighlightFirstItem:!1,style:{width:300},onChange:ee,dataSource:X});return u.exports.createElement(te,null,e)}});c.Option;const le=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0}],ne=(e,t)=>{const a=[];for(let l=0;l<t;l++)a.push(`extra-${e+l}`);return a};class oe extends u.exports.Component{constructor(){super(...arguments),this.state={dataSource:le},this.loadMore=()=>{const e=this.state.dataSource;this.setState({dataSource:[...e,...ne(e.length,5)]})}}render(){const e={focusable:!1,header:u.exports.createElement("div",{style:{padding:"0 4px",textAlign:"center"}},u.exports.createElement("div",{style:{paddingBottom:4}},u.exports.createElement(d,{style:{width:"100%"},ref:e=>this.inputRef=e,onClick:e=>console.log(/onclick/),onMouseDown:e=>{console.log(/onMouseDown/),this.inputRef.focus()}})),u.exports.createElement(b,{style:{marginTop:0,marginBottom:4}})),footer:u.exports.createElement("div",{style:{padding:"0 4px",textAlign:"center"}},u.exports.createElement(b,{style:{marginBottom:0,marginTop:4}}),u.exports.createElement(p,{text:!0,type:"primary",onClick:this.loadMore},"Load More..."))};return u.exports.createElement(c,{hasSelectAll:!0,mode:"multiple",dataSource:this.state.dataSource,style:{width:200},menuProps:e,popupAutoFocus:!0})}}const re=f.div``;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(oe,null);return u.exports.createElement(re,null,e)}});const ie=[{value:"#FF0000",label:"red",title:"red"},{value:"#00AA00",label:"green",title:"green"},{value:"#B482DB",label:"purple",title:"purple"},{value:"#F17334",label:"orange",title:"orange"},{value:"#66CCFF",label:"blue",title:"blue"}],ce=e=>u.exports.createElement("span",null,u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}}),u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}}),u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}}),u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}}),u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}})),ue=e=>u.exports.createElement("span",null,u.exports.createElement(m,{type:"account",size:"xs",style:{color:e.value}})," ",e.label),de=["Lorem ipsum dolor sit amet","consectetur adipisicing elit","sed do eiusmod tempor incididunt","ut labore et dolore magna aliqua.","Ut enim ad minim veniam","quis nostrud exercitation","ullamco laboris nisi ut","aliquip ex ea commodo consequat","Duis aute irure dolor in","reprehenderit in voluptate","velit esse cillum dolore eu","Fugiat nulla pariatur excepteur sint","occaecat cupidatat non proident","sunt in culpa qui officia","deserunt mollit anim id est laborum"],pe=(e,t)=>{let a=e.label;if(t&&t.length){const e=t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),l=new RegExp(`(${e})`,"ig");a=a.replace(l,(e=>`<span class="next-select-highlight">${e}</span>`))}return u.exports.createElement("span",{dangerouslySetInnerHTML:{__html:a}})};const me=f.div``;var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",{className:"demo-container"},u.exports.createElement(c,{dataSource:ie,itemRender:ce,valueRender:ue,placeholder:"pick your color"}),u.exports.createElement(c,{showSearch:!0,dataSource:de,itemRender:pe,placeholder:"highlight keywords",style:{minWidth:200}}));return u.exports.createElement(me,null,e)}});function ge(e){e.preventDefault()}class ve extends u.exports.Component{constructor(){super(...arguments),this.data=[{label:"value1",value:1},{label:"value2",value:2}]}onClick(e){this.props.onChange(e)}renderItems(){return this.data.map((e=>u.exports.createElement("li",{onClick:this.onClick.bind(this,e),key:e.value},e.label)))}render(){const e=this.props,{className:t}=e,a=((e,t)=>{var a={};for(var r in e)n.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a})(e,["className"]),r=h("overlay-content",t);return u.exports.createElement("ul",s({className:r},a),this.renderItems())}}class fe extends u.exports.Component{constructor(e){super(e),this.handleSelect=e=>{this.setState({value:e,visible:!1})},this.onVisibleChange=e=>{this.setState({visible:e})},this.state={value:null}}render(){const e=u.exports.createElement("div",{style:{border:"1px solid",background:"white"}},u.exports.createElement("div",{style:{borderBottom:"1px solid",background:"white",padding:10,fontSize:"12px"}},"custom header"),u.exports.createElement(ve,{onChange:this.handleSelect,onMouseDown:ge}),u.exports.createElement("div",{style:{borderTop:"1px solid",background:"white",padding:10,fontSize:"12px"}},"custom footer"));return u.exports.createElement("div",{className:"demo-container"},u.exports.createElement(c,{placeholder:"custom popupContent",visible:this.state.visible,onVisibleChange:this.onVisibleChange,value:this.state.value,popupProps:{triggerClickKeycode:[13,32,40]},popupContent:e,style:{width:200}}))}}const be=f.div`
  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }

  .demo-container p {
    margin-top: 0;
  }

  .overlay-content {
    border: 1px solid #dddddd;
    padding: 10px;
    background: #ffffff;
    margin: 0;
    font-size: 12px;
    font-family: Arial;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .overlay-content li {
    list-style: none;
    line-height: 30px;
    padding: 0 5px;
    cursor: pointer;
  }

  .overlay-content li:hover {
    background: #f8f8f8;
  }

  .overlay-content li:last-child {
    border-width: 0;
  }
`;var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(fe,null);return u.exports.createElement(be,null,e)}});class ye extends u.exports.Component{constructor(){super(...arguments),this.state={value:"",fillProps:"value",placeholder:"Fill with value"},this.handleCtrlChange=e=>{this.setState({fillProps:e,value:"",placeholder:`Fill with ${e}`})},this.handleChange=e=>{this.setState({value:e})}}render(){return u.exports.createElement("div",{style:{marginBottom:20}},u.exports.createElement(g.Group,{style:{marginRight:10},shape:"button",value:this.state.fillProps,onChange:this.handleCtrlChange},u.exports.createElement(g,{value:"value"},"value"),u.exports.createElement(g,{value:"label"},"label")),u.exports.createElement(c,{placeholder:this.state.placeholder,value:this.state.value,fillProps:this.state.fillProps,style:{width:300},onChange:this.handleChange,dataSource:[{value:"Hang Meimei",label:"韩梅梅"},{value:"Gao Hui",label:"高辉"},{value:"Zhang San",label:"张三"},{value:"Li Si",label:"李四"},{value:"Wang Wu",label:"王五"},{value:"Sun Yang",label:"孙杨"}]}))}}const Ee=()=>u.exports.createElement(c,{mode:"multiple",placeholder:"Custom with valueRender",valueRender:e=>`${e.value} / ${e.gender} / ${e.age}`,dataSource:[{value:"Lilith",age:22,gender:"F"},{value:"Tom Cat",age:28,gender:"M"},{value:"Jim Green",age:18,gender:"M"},{value:"Monkey King",age:999,gender:"M"}]});const Se=f.div``;var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",null,u.exports.createElement(ye,null),u.exports.createElement(Ee,null));return u.exports.createElement(Se,null,e)}});const{Tooltip:_e}=v,we=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0},{label:"Special Group",children:[{value:-1,label:"FALSE"},{value:0,label:"ZERO"}]}];function ke(e){console.log(e)}const Te=(e,t)=>{const a=u.exports.createElement("span",null,`${e.length}/${t.length}`),l=e.map((e=>e.label));return u.exports.createElement(_e,{trigger:a},l.join(", "))},Oe={width:200,marginRight:8};const je=f.div``;var Me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},u.exports.createElement(c,{placeholder:"select all",hasSelectAll:!0,mode:"multiple",onChange:ke,dataSource:we,style:Oe}),u.exports.createElement(c,{maxTagCount:2,defaultValue:["10001","10002","-1"],mode:"multiple",onChange:ke,dataSource:we,style:Oe}),u.exports.createElement(c,{maxTagCount:2,maxTagPlaceholder:Te,defaultValue:["10001","10002","-1"],mode:"multiple",onChange:ke,dataSource:we,style:Oe}),u.exports.createElement(c,{maxTagCount:2,tagInline:!0,mode:"multiple",defaultValue:["10001","10002","-1"],onChange:ke,dataSource:we,style:Oe}),u.exports.createElement("br",null),u.exports.createElement("br",null));return u.exports.createElement(je,null,e)}});const ze=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0},{label:"Special Group",children:[{value:-1,label:"FALSE"},{value:0,label:"ZERO"}]}];function Le(e){console.log(e)}const Ae=f.div``;var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",null,u.exports.createElement(c,{mode:"multiple",showSearch:!0,defaultValue:["10001"],onChange:Le,dataSource:ze,style:{width:300,marginRight:8}}));return u.exports.createElement(Ae,null,e)}});const Pe=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0},{label:"Special Group",children:[{value:-1,label:"FALSE"},{value:0,label:"ZERO"}]}],Re={mode:["single","multiple","tag"],size:["small","medium","large"],showSearch:[!0,!1],hasArrow:[!0,!1],hasBorder:[!0,!1],hasClear:[!0,!1]};class $e extends u.exports.Component{constructor(e){super(e),this.state={value:null,size:void 0,mode:void 0,hasArrow:void 0,hasBorder:void 0,showSearch:void 0,hasClear:void 0},this.handleChange=this.handleChange.bind(this),this.handleCtrlChange=this.handleCtrlChange.bind(this)}handleCtrlChange(e,t){this.setState({[e]:t}),"mode"===e&&this.setState({value:null})}handleChange(e,t){console.log("handleChange: value: ",e,t),this.setState({value:e})}renderCtrlNodes(e){const t=[];let a;for(a in Re)Re.hasOwnProperty(a)&&t.push(u.exports.createElement(c,{key:a,label:`${a}: `,value:e[a],id:a,dataSource:Re[a],onChange:this.handleCtrlChange.bind(this,a)}));return t}render(){return u.exports.createElement("div",{className:"demo-container"},u.exports.createElement("div",{className:"demo-controller"},this.renderCtrlNodes(this.state)),u.exports.createElement(c,i(s({},this.state),{onChange:this.handleChange,dataSource:Pe})))}}const Fe=f.div`
  .demo-container {
    padding: 16px;
    background-color: #f8f8f8;
  }

  .demo-controller {
    padding: 12px 12px 4px;
    margin-bottom: 16px;
    border: 2px dashed #ddd;
  }

  .next-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;var He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement($e,null);return u.exports.createElement(Fe,null,e)}});const Ke=["Zhejiang","Hubei","Jiangsu"],Ve={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Hubei:["Wuhan","Yichang","Jingzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]};class Be extends u.exports.Component{constructor(e){super(e),this.state={data:[],disabled:!0},this.handleProvinceChange=this.handleProvinceChange.bind(this),this.handleCityChange=this.handleCityChange.bind(this)}handleProvinceChange(e){const t=Ve[e];this.setState({data:t,province:e,city:"",disabled:!t})}handleCityChange(e){this.setState({city:e}),console.log(this.state.province,e)}render(){const{data:e,disabled:t,province:a,city:l}=this.state;return u.exports.createElement("div",null,u.exports.createElement(c,{placeholder:"Select Province",dataSource:Ke,value:a,onChange:this.handleProvinceChange,style:{marginRight:8}}),u.exports.createElement(c,{placeholder:"Select City",dataSource:e,value:l,onChange:this.handleCityChange,disabled:t}))}}const Ge=f.div``;var Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(Be,null);return u.exports.createElement(Ge,null,e)}});const Je=[{label:"1",value:1},{label:"10",value:10},{label:"50",value:50},{label:"100",value:100}],Ie=e=>{console.log("handleChange: ",e)};const De=f.div``;var We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(c,{label:"size:",innerAfter:u.exports.createElement("span",{style:{color:"#999",marginRight:4}},"GB"),dataSource:Je,onChange:Ie});return u.exports.createElement(De,null,e)}});const{Option:qe,OptionGroup:Ue}=c,Ye=[{label:"label1",children:[{label:"label1-1",value:"text1-1"}]},{label:"label2",children:[{label:"label2-1",value:"text2-1"}]}];const Qe=f.div``;var Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",null,u.exports.createElement(c,{placeholder:"OptionGroup",style:{marginRight:8}},u.exports.createElement(Ue,{label:"group1"},u.exports.createElement(qe,{value:"small"},"Small"),u.exports.createElement(qe,{value:"medium"},"Medium"),u.exports.createElement(qe,{value:"large"},"Large")),u.exports.createElement(Ue,{label:"group2"},u.exports.createElement(qe,{value:"small2"},"Small2"),u.exports.createElement(qe,{value:"medium2"},"Medium2"),u.exports.createElement(qe,{value:"large2"},"Large2"))),u.exports.createElement(c,{placeholder:"use dataSource",dataSource:Ye}));return u.exports.createElement(Qe,null,e)}});function et(e,t){const a=[];for(let l=e;l<t;l++)a.push({label:`option${l}`,value:`option${l}`});return a}c.Option;class tt extends u.exports.Component{constructor(){super(...arguments),this.state={dataSource:et(0,10)},this.onScroll=e=>{const t=e.target.scrollHeight,a=e.target.clientHeight,l=e.target.scrollTop;if(console.log(l,a,t),l+a===t){const e=this.state.dataSource,t=et(e.length,e.length+10);console.log(e,t),this.setState({dataSource:e.concat(t)})}}}render(){return u.exports.createElement(c,{style:{width:200},dataSource:this.state.dataSource,menuProps:{onScroll:this.onScroll},autoHighlightFirstItem:!1})}}const at=f.div``;var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(tt,null);return u.exports.createElement(at,null,e)}});let nt=Date.now();class ot extends u.exports.Component{constructor(){super(...arguments),this.state={dataSource:[]},this.handleSearch=e=>{this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{e?I(`https://suggest.taobao.com/sug?code=utf-8&q=${e}`,((e,t)=>{const a=t.result.map((e=>({label:e[0],value:(nt++).toString(36)})));this.setState({dataSource:a})})):this.setState({dataSource:[]})}),100)}}render(){return u.exports.createElement(c,{showSearch:!0,placeholder:"input to search",filterLocal:!1,dataSource:this.state.dataSource,onSearch:this.handleSearch,style:{width:200}})}}const rt=f.div``;var st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(ot,null);return u.exports.createElement(rt,null,e)}});const it=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0},{label:"Special Group",children:[{value:-1,label:"FALSE"},{value:0,label:"ZERO"}]}];function ct(e){console.log(e)}const ut=f.div``;var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(c,{"aria-label":"tag mode",mode:"tag",defaultValue:["10001"],onChange:ct,dataSource:it,style:{width:300}});return u.exports.createElement(ut,null,e)}});const pt=[{value:"10001",label:"Lucy King"},{value:10002,label:"Lily King"},{value:10003,label:"Tom Cat",disabled:!0}];function mt(e){console.log(e)}const ht=f.div``;var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement(c,{useDetailValue:!0,defaultValue:{value:"10001",label:"Lucy King"},onChange:mt,dataSource:pt,style:{width:150}});return u.exports.createElement(ht,null,e)}});const vt=c.Option,ft=function(e){console.log(e)};function bt(e){return{label:`option${e}`,value:`option${e}`}}function xt(e,t){const a=[];for(let n=0;n<e;n++)t?a.push((l=n,u.exports.createElement(vt,{key:`option${l}`,value:`option${l}`},`option${l}`))):a.push(bt(n));var l;return a}const yt=f.div``;var Et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=u.exports.createElement("div",null,u.exports.createElement(c,{dataSource:xt(100),useVirtual:!0,onChange:ft,defaultValue:"option0"}),u.exports.createElement("br",null),u.exports.createElement("br",null),u.exports.createElement(c,{useVirtual:!0,onChange:ft,defaultValue:"option50"},xt(100,!0)),u.exports.createElement("br",null),u.exports.createElement("br",null),u.exports.createElement(c,{style:{width:300},hasSelectAll:!0,tagInline:!0,mode:"multiple",dataSource:xt(100),useVirtual:!0,onChange:ft,defaultValue:["option0"]}));return u.exports.createElement(yt,null,e)}});const St={};St._accessibility=S,St._basic=j,St["_combobox-basic"]=P,St["_combobox-remote"]=Q,St._combobox=ae,St["_custom-menu-props"]=se,St["_custom-menu"]=he,St["_custom-overlay"]=xe,St["_custom-value"]=Ce,St["_max-count"]=Me,St._multiple=Ne,St["_select-basic"]=He,St["_select-cascader"]=Ze,St["_select-label"]=We,St["_select-options-group"]=Xe,St["_select-scroll-load"]=lt,St["_select-search"]=st,St._tag=dt,St["_use-detail-value"]=gt,St["_virtual-select"]=Et;export default St;
