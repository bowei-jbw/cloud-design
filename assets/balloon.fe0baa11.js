import{r as e,k as t,B as l,m as r,S as n,D as i,l as a}from"./index.db891132.js";import{q as g}from"./styled-components.browser.esm.2d3384e1.js";const c=e.createElement(l,{className:"btrigger",style:{margin:"5px"}},"default style"),m=e.createElement(l,{disabled:!0,className:"btrigger",style:{margin:"5px"}},"default style"),o=e.createElement(l,{className:"btrigger",style:{margin:"5px"}},"primary style"),s=()=>e.createElement("div",{className:"container"},e.createElement(t,{trigger:c,closable:!1},"default"),e.createElement(t,{type:"primary",trigger:o,triggerType:"click"},"primary"),e.createElement(t,{trigger:m,closable:!1},"disabeled default"));const p=g.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(p,null,t)}});const d=e.createElement(l,{id:"top",style:{margin:"5px"},className:"btrigger"},"top"),u=e.createElement(l,{id:"right",style:{margin:"5px"},className:"btrigger"},"right"),y=e.createElement(l,{id:"bottom",style:{margin:"5px"},className:"btrigger"},"bottom"),b=e.createElement(l,{id:"left",style:{margin:"5px"},className:"btrigger"},"left"),h=e.createElement(l,{id:"topLeft",style:{margin:"5px"},className:"btrigger"},"top left"),f=e.createElement(l,{id:"topRight",style:{margin:"5px"},className:"btrigger"},"top right"),x=e.createElement(l,{id:"rightTop",style:{margin:"5px"},className:"btrigger"},"right top"),v=e.createElement(l,{id:"rightBottom",style:{margin:"5px"},className:"btrigger"},"right bottom"),T=e.createElement(l,{id:"bottomLeft",style:{margin:"5px"},className:"btrigger"},"bottom left"),_=e.createElement(l,{id:"bottomRight",style:{margin:"5px"},className:"btrigger"},"bottom right"),k=e.createElement(l,{id:"leftTop",style:{margin:"5px"},className:"btrigger"},"left top"),N=e.createElement(l,{id:"leftBottom",style:{margin:"5px"},className:"btrigger"},"left bottom"),C=()=>e.createElement("div",null,e.createElement("h4",{style:{marginTop:0}},"balloon title"),e.createElement("hr",null),e.createElement("p",null,"balloon content")),S=()=>e.createElement("div",{style:{paddingLeft:320}},e.createElement("div",{style:{marginLeft:75}},e.createElement(t,{trigger:h,align:"tl",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:d,align:"t",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:f,align:"tr",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null))),e.createElement("div",{style:{width:80,float:"left"}},e.createElement(t,{trigger:k,align:"lt",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:b,align:"l",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:N,align:"lb",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null))),e.createElement("div",{style:{width:80,marginLeft:290}},e.createElement(t,{trigger:x,align:"rt",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:u,align:"r",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:v,align:"rb",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null))),e.createElement("div",{style:{marginLeft:80,clear:"both"}},e.createElement(t,{trigger:T,align:"bl",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:y,align:"b",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null)),e.createElement(t,{trigger:_,align:"br",alignEdge:!0,triggerType:"click",style:{width:300}},e.createElement(C,null))));const w=g.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(w,null,t)}});class z extends e.Component{constructor(e){super(e),this.state={visible:!1}}hide(){this.setState({visible:!1})}handleVisibleChange(e){this.setState({visible:e})}onClose(){console.log("onClose doing!")}afterClose(){console.log("afterClose doing!")}render(){const r=e.createElement(l,{type:"primary",style:{margin:"5px"}},"click to popup the card"),n=e.createElement(l,{type:"primary",style:{margin:"5px"}},"hover to popup the card"),i=e.createElement("div",null,"click the button",e.createElement("br",null),e.createElement("a",{style:{right:0},id:"confirmBtn",onClick:this.hide.bind(this)},"confirm"),e.createElement("a",{style:{marginLeft:"4px"},id:"cancelBtn",onClick:this.hide.bind(this)},"cancel"));return e.createElement("div",null,e.createElement(t,{trigger:r,triggerType:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange.bind(this)},i),e.createElement(t,{trigger:n,triggerType:"hover",onClose:this.onClose.bind(this),afterClose:this.afterClose.bind(this)},i))}}const j=g.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(j,null,t)}});const R=e.createElement(l,{className:"btrigger"},"Show Select"),F=e.createElement(l,{className:"btrigger"},"Show DatePicker"),B=e.createElement(l,{className:"btrigger"},"Show Inner Balloon"),O=r("2018-01-01","YYYY-MM-DD",!0),A=()=>e.createElement("div",null,e.createElement(t,{type:"primary",autoFocus:!0,trigger:R,closable:!1,triggerType:"click"},e.createElement(n,{dataSource:["apple","banana","orange"],followTrigger:!0})),e.createElement("span",{style:{marginRight:20}}),e.createElement(t,{type:"primary",autoFocus:!0,trigger:F,closable:!1,triggerType:"click"},e.createElement(i,{defaultValue:O,followTrigger:!0})),e.createElement("span",{style:{marginRight:20}}),e.createElement(t,{type:"primary",autoFocus:!0,trigger:B,closable:!1,triggerType:"click"},e.createElement(t,{trigger:e.createElement(l,{type:"primary"},"please click"),followTrigger:!0,triggerType:"click"},"nesting balloon content")));const D=g.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(A,null);return e.createElement(D,null,t)}});const{Tooltip:Y}=t,q=e.createElement(l,{className:"btrigger"},"Fill in form"),I=e.createElement(l,{style:{margin:"5px"}},"show tooltip"),P=()=>e.createElement("div",{className:"container nested"},e.createElement(t,{id:"inner-a11y-balloon-1",autoFocus:!0,trigger:e.createElement(l,{type:"primary"},"Fill in sub-form"),popupContainer:e=>e.parentNode,triggerType:"click"},"please input your age:",e.createElement(a,{placeholder:"Age",size:"small",label:"Age :",id:"balloon-input-1"}),e.createElement("br",null),e.createElement("br",null)),e.createElement("span",{style:{marginRight:20}}),e.createElement(t,{id:"a11y-balloon",type:"primary",autoFocus:!0,trigger:q,triggerType:"click"},e.createElement(t,{id:"inner-a11y-balloon",autoFocus:!0,trigger:e.createElement(l,{type:"primary"},"Fill in sub-form"),popupContainer:e=>e.parentNode,triggerType:"click"},"please input your age:",e.createElement(a,{placeholder:"Age",size:"small",label:"Age :",id:"balloon-input-2"}),e.createElement("br",null),e.createElement("br",null)),e.createElement("br",null),"please input your name:",e.createElement(a,{placeholder:"Name",size:"small",label:"Name :",id:"balloon-input-3"}),e.createElement("br",null),e.createElement("br",null)),e.createElement("span",{style:{marginRight:20}}),e.createElement(Y,{trigger:I,id:"aria-tooltip"},e.createElement("p",null,"This is content for tooltip.")));const G=g.div`
  .container.nested {
    margin-left: 30px;
  }
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(G,null,t)}});class J extends e.Component{constructor(e){super(e),this.state={visible:!1}}onClose(){console.log("onClose doing!")}onClick(){this.setState({visible:!0})}render(){const r=e.createElement(l,{onClick:this.onClick.bind(this),type:"primary"},"click to pupup the card"),n=e.createElement("div",null,"content");return e.createElement("div",null,e.createElement(t,{trigger:r,triggerType:"click",visible:this.state.visible,onClose:this.onClose.bind(this)},n))}}const K=g.div``;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(J,null);return e.createElement(K,null,t)}});const U=t.Tooltip,W=e.createElement(l,{style:{margin:"5px"},id:"top",className:"btrigger"},"top"),X=e.createElement(l,{style:{margin:"5px"},id:"right",className:"btrigger"},"right"),Z=e.createElement(l,{style:{margin:"5px"},id:"bottom",className:"btrigger"},"bottom"),$=e.createElement(l,{style:{margin:"5px"},id:"left",className:"btrigger"},"left"),ee=e.createElement(l,{style:{margin:"5px"},id:"topLeft",className:"btrigger"},"top left"),te=e.createElement(l,{style:{margin:"5px"},id:"topRight",className:"btrigger"},"top right"),le=e.createElement(l,{style:{margin:"5px"},id:"rightTop",className:"btrigger"},"right top"),re=e.createElement(l,{style:{margin:"5px"},id:"rightBottom",className:"btrigger"},"right bottom"),ne=e.createElement(l,{style:{margin:"5px"},id:"bottomLeft",className:"btrigger"},"bottom left"),ie=e.createElement(l,{style:{margin:"5px"},id:"bottomRight",className:"btrigger"},"bottom right"),ae=e.createElement(l,{style:{margin:"5px"},id:"leftTop",className:"btrigger"},"left top"),ge=e.createElement(l,{style:{margin:"5px"},id:"leftBottom",className:"btrigger"},"left bottom"),ce=()=>e.createElement("div",{style:{paddingLeft:220}},e.createElement("div",{style:{marginLeft:75}},e.createElement(U,{trigger:ee,align:"tl"},"text text"),e.createElement(U,{trigger:W,align:"t"},"text text"),e.createElement(U,{trigger:te,align:"tr"},"text text")),e.createElement("div",{style:{width:80,float:"left"}},e.createElement(U,{trigger:ae,align:"lt"},"text text"),e.createElement(U,{trigger:$,align:"l"},"text text"),e.createElement(U,{trigger:ge,align:"lb"},"text text")),e.createElement("div",{style:{width:80,marginLeft:290}},e.createElement(U,{trigger:le,align:"rt"},"text text"),e.createElement(U,{trigger:X,align:"r"},"text text"),e.createElement(U,{trigger:re,align:"rb"},"text text")),e.createElement("div",{style:{marginLeft:80,clear:"both"}},e.createElement(U,{trigger:ne,align:"bl"},"text text"),e.createElement(U,{trigger:Z,align:"b"},"text text"),e.createElement(U,{trigger:ie,align:"br"},"text text")));const me=g.div`
  .code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(ce,null);return e.createElement(me,null,t)}});const se=e.createElement("div",null,e.createElement("p",null,"content")),pe=e.createElement(l,{style:{margin:"5px"}},"hover"),Ee=e.createElement(l,{style:{margin:"5px"}},"click"),de=e.createElement(l,{style:{margin:"5px"}},"focus"),ue=e.createElement(a,{placeholder:"hover",style:{marginRight:"20px"}}),ye=e.createElement(a,{placeholder:"click",style:{marginRight:"20px"}}),be=e.createElement(a,{placeholder:"focus"}),he=()=>e.createElement("div",null,e.createElement(t,{trigger:pe,triggerType:"hover"},se),e.createElement(t,{trigger:Ee,triggerType:"click"},se),e.createElement(t,{trigger:de,triggerType:"focus"},se),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{trigger:ue,triggerType:"hover"},se),e.createElement(t,{trigger:ye,triggerType:"click"},se),e.createElement(t,{trigger:be,triggerType:"focus"},se));const fe=g.div``;var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(he,null);return e.createElement(fe,null,t)}});const ve={};ve._basic=E,ve._alignment=L,ve._control=M,ve._nested=V,ve._accessibility=H,ve._onCloseClick=Q,ve._tooltip=oe,ve._triggerType=xe;export default ve;
