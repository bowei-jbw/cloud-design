import{r as e,k as t,B as l,l as r,S as n}from"./index.54491fbe.js";import{q as i}from"./styled-components.browser.esm.6105e56a.js";import{m as a}from"./moment.06e24de2.js";import{N as g}from"./index.92e1dc40.js";import"./index.b1418289.js";import"./index.b35febee.js";const c=e.createElement(l,{className:"btrigger",style:{margin:"5px"}},"default style"),o=e.createElement(l,{disabled:!0,className:"btrigger",style:{margin:"5px"}},"default style"),m=e.createElement(l,{className:"btrigger",style:{margin:"5px"}},"primary style"),s=()=>e.createElement("div",{className:"container"},e.createElement(t,{trigger:c,closable:!1},"default"),e.createElement(t,{type:"primary",trigger:m,triggerType:"click"},"primary"),e.createElement(t,{trigger:o,closable:!1},"disabeled default"));const p=i.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(p,null,t)}});const{Tooltip:E}=t,u=e.createElement(l,{className:"btrigger"},"Fill in form"),y=e.createElement(l,{style:{margin:"5px"}},"show tooltip"),b=()=>e.createElement("div",{className:"container nested"},e.createElement(t,{id:"inner-a11y-balloon-1",autoFocus:!0,trigger:e.createElement(l,{type:"primary"},"Fill in sub-form"),popupContainer:e=>e.parentNode,triggerType:"click"},"please input your age:",e.createElement(r,{placeholder:"Age",size:"small",label:"Age :",id:"balloon-input-1"})),"        ",e.createElement(t,{id:"a11y-balloon",type:"primary",autoFocus:!0,trigger:u,triggerType:"click"},e.createElement(t,{id:"inner-a11y-balloon",autoFocus:!0,trigger:e.createElement(l,{type:"primary"},"Fill in sub-form"),popupContainer:e=>e.parentNode,triggerType:"click"},"please input your age:",e.createElement(r,{placeholder:"Age",size:"small",label:"Age :",id:"balloon-input-2"})),e.createElement("br",null),"please input your name:",e.createElement(r,{placeholder:"Name",size:"small",label:"Name :",id:"balloon-input-3"})),"        ",e.createElement(E,{trigger:y,id:"aria-tooltip"},e.createElement("p",null,"This is content for tooltip.")));const h=i.div`
  .container.nested {
    margin-left: 100px;
    margin-bottom: 50px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(h,null,t)}});const x=e.createElement(l,{id:"top",style:{margin:"5px"},className:"btrigger"},"top"),v=e.createElement(l,{id:"right",style:{margin:"5px"},className:"btrigger"},"right"),T=e.createElement(l,{id:"bottom",style:{margin:"5px"},className:"btrigger"},"bottom"),_=e.createElement(l,{id:"left",style:{margin:"5px"},className:"btrigger"},"left"),N=e.createElement(l,{id:"topLeft",style:{margin:"5px"},className:"btrigger"},"top left"),k=e.createElement(l,{id:"topRight",style:{margin:"5px"},className:"btrigger"},"top right"),C=e.createElement(l,{id:"rightTop",style:{margin:"5px"},className:"btrigger"},"right top"),S=e.createElement(l,{id:"rightBottom",style:{margin:"5px"},className:"btrigger"},"right bottom"),w=e.createElement(l,{id:"bottomLeft",style:{margin:"5px"},className:"btrigger"},"bottom left"),j=e.createElement(l,{id:"bottomRight",style:{margin:"5px"},className:"btrigger"},"bottom right"),L=e.createElement(l,{id:"leftTop",style:{margin:"5px"},className:"btrigger"},"left top"),z=e.createElement(l,{id:"leftBottom",style:{margin:"5px"},className:"btrigger"},"left bottom"),M=()=>e.createElement("div",null,e.createElement("h4",{style:{marginTop:0}},"标题"),e.createElement("p",null,"balloon content")),B=()=>e.createElement("div",{style:{paddingLeft:320,paddingTop:100}},e.createElement("div",{style:{marginLeft:75}},e.createElement(t,{trigger:N,align:"tl",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:x,align:"t",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:k,align:"tr",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null))),e.createElement("div",{style:{width:80,float:"left"}},e.createElement(t,{trigger:L,align:"lt",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:_,align:"l",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:z,align:"lb",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null))),e.createElement("div",{style:{width:80,marginLeft:290}},e.createElement(t,{trigger:C,align:"rt",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:v,align:"r",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:S,align:"rb",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null))),e.createElement("div",{style:{marginLeft:80,clear:"both"}},e.createElement(t,{trigger:w,align:"bl",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:T,align:"b",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null)),e.createElement(t,{trigger:j,align:"br",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(M,null))));const F=i.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(B,null);return e.createElement(F,null,t)}});const A=e.createElement(l,{className:"btrigger",style:{margin:"5px"}},"default style"),R=()=>e.createElement("div",null,e.createElement("h4",{style:{marginTop:0}},"balloon title"),e.createElement("p",null,"balloon content"),e.createElement("p",null,"多段落的内容悬浮出现的气泡，相关的内容复杂，可以是一行，也可以是多行"),e.createElement("div",{style:{marginTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",{style:{color:"#A6A6A6",cursor:"pointer"}},"查看更多"),e.createElement(l,{type:"normal"},"主要按钮"))),V=()=>e.createElement("div",{className:"container"},e.createElement(t,{trigger:A,closable:!1,align:"r"},e.createElement(R,null)));const Y=i.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(V,null);return e.createElement(Y,null,t)}});class I extends e.Component{constructor(e){super(e),this.state={visible:!1}}hide(){this.setState({visible:!1})}handleVisibleChange(e){this.setState({visible:e})}onClose(){console.log("onClose doing!")}afterClose(){console.log("afterClose doing!")}render(){const r=e.createElement(l,{type:"primary",style:{margin:"5px"}},"click to popup the card"),n=e.createElement(l,{type:"primary",style:{margin:"5px"}},"hover to popup the card"),i=e.createElement("div",null,"click the button",e.createElement("br",null),e.createElement("a",{style:{right:0},id:"confirmBtn",onClick:this.hide.bind(this)},"confirm"),e.createElement("a",{style:{marginLeft:"4px"},id:"cancelBtn",onClick:this.hide.bind(this)},"cancel"));return e.createElement("div",null,e.createElement(t,{trigger:r,triggerType:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange.bind(this)},i),e.createElement(t,{trigger:n,triggerType:"hover",onClose:this.onClose.bind(this),afterClose:this.afterClose.bind(this)},i))}}const q=i.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(I,null);return e.createElement(q,null,t)}});const G=e.createElement(l,{className:"btrigger"},"Show Select"),H=e.createElement(l,{className:"btrigger"},"Show DatePicker"),J=e.createElement(l,{className:"btrigger"},"Show Inner Balloon"),K=a("2018-01-01","YYYY-MM-DD",!0),Q=()=>e.createElement("div",{className:"container nested"},e.createElement(t,{type:"primary",autoFocus:!0,trigger:G,closable:!1,triggerType:"click"},e.createElement(n,{dataSource:["apple","banana","orange"],followTrigger:!0})),"         ",e.createElement(t,{type:"primary",autoFocus:!0,trigger:H,closable:!1,triggerType:"click"},e.createElement(g,{defaultValue:K,followTrigger:!0})),"         ",e.createElement(t,{type:"primary",autoFocus:!0,trigger:J,closable:!1,triggerType:"click"},e.createElement(t,{trigger:e.createElement(l,{type:"primary"},"please click"),followTrigger:!0,triggerType:"click"},"nesting balloon content")));const U=i.div`
  .container.nested {
    margin-bottom: 50px;
  }
`;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(Q,null);return e.createElement(U,null,t)}});const X=t.Tooltip,Z=e.createElement(l,{style:{margin:"5px"},id:"top",className:"btrigger"},"top"),$=e.createElement(l,{style:{margin:"5px"},id:"right",className:"btrigger"},"right"),ee=e.createElement(l,{style:{margin:"5px"},id:"bottom",className:"btrigger"},"bottom"),te=e.createElement(l,{style:{margin:"5px"},id:"left",className:"btrigger"},"left"),le=e.createElement(l,{style:{margin:"5px"},id:"topLeft",className:"btrigger"},"top left"),re=e.createElement(l,{style:{margin:"5px"},id:"topRight",className:"btrigger"},"top right"),ne=e.createElement(l,{style:{margin:"5px"},id:"rightTop",className:"btrigger"},"right top"),ie=e.createElement(l,{style:{margin:"5px"},id:"rightBottom",className:"btrigger"},"right bottom"),ae=e.createElement(l,{style:{margin:"5px"},id:"bottomLeft",className:"btrigger"},"bottom left"),ge=e.createElement(l,{style:{margin:"5px"},id:"bottomRight",className:"btrigger"},"bottom right"),ce=e.createElement(l,{style:{margin:"5px"},id:"leftTop",className:"btrigger"},"left top"),oe=e.createElement(l,{style:{margin:"5px"},id:"leftBottom",className:"btrigger"},"left bottom"),me=()=>e.createElement("div",{style:{paddingLeft:220,paddingTop:100}},e.createElement("div",{style:{marginLeft:75}},e.createElement(X,{trigger:le,align:"tl"},"text text"),e.createElement(X,{trigger:Z,align:"t",triggerType:"click"},"text text"),e.createElement(X,{trigger:re,align:"tr"},"text text")),e.createElement("div",{style:{width:80,float:"left"}},e.createElement(X,{trigger:ce,align:"lt"},"text text"),e.createElement(X,{trigger:te,align:"l"},"text text"),e.createElement(X,{trigger:oe,align:"lb"},"text text")),e.createElement("div",{style:{width:80,marginLeft:290}},e.createElement(X,{trigger:ne,align:"rt"},"text text"),e.createElement(X,{trigger:$,align:"r"},"text text"),e.createElement(X,{trigger:ie,align:"rb"},"text text")),e.createElement("div",{style:{marginLeft:80,clear:"both"}},e.createElement(X,{trigger:ae,align:"bl"},"text text"),e.createElement(X,{trigger:ee,align:"b"},"text text"),e.createElement(X,{trigger:ge,align:"br"},"text text")));const se=i.div`
  .code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(me,null);return e.createElement(se,null,t)}});class de extends e.Component{constructor(e){super(e),this.state={visible:!1}}onClose(){console.log("onClose doing!")}onClick(){this.setState({visible:!0})}render(){const r=e.createElement(l,{onClick:this.onClick.bind(this),type:"primary"},"click to pupup the card"),n=e.createElement("div",null,"content");return e.createElement("div",{style:{marginBottom:"100px"}},e.createElement(t,{trigger:r,triggerType:"click",visible:this.state.visible,onClose:this.onClose.bind(this)},n))}}const Ee=i.div``;var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(de,null);return e.createElement(Ee,null,t)}});const ye=e.createElement("div",null,e.createElement("p",null,"content")),be=e.createElement(l,{style:{margin:"5px"}},"hover"),he=e.createElement(l,{style:{margin:"5px"}},"click"),fe=e.createElement(l,{style:{margin:"5px"}},"focus"),xe=e.createElement(r,{placeholder:"hover",style:{marginRight:"20px"}}),ve=e.createElement(r,{placeholder:"click",style:{marginRight:"20px"}}),Te=e.createElement(r,{placeholder:"focus"}),_e=()=>e.createElement("div",null,e.createElement(t,{trigger:be,triggerType:"hover"},ye),e.createElement(t,{trigger:he,triggerType:"click"},ye),e.createElement(t,{trigger:fe,triggerType:"focus"},ye),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{trigger:xe,triggerType:"hover"},ye),e.createElement(t,{trigger:ve,triggerType:"click"},ye),e.createElement(t,{trigger:Te,triggerType:"focus"},ye));const Ne=i.div``;var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(_e,null);return e.createElement(Ne,null,t)}});const Ce={};Ce._basic=d,Ce._accessibility=f,Ce._alignment=O,Ce._button=D,Ce._control=P,Ce._nested=W,Ce._tooltip=pe,Ce._onCloseClick=ue,Ce._triggerType=ke;export default Ce;
