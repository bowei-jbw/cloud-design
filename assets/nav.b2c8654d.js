import{r as e,ae as t,R as n}from"./index.3c24fdbb.js";import{q as l}from"./styled-components.browser.esm.1222bcc8.js";const{Item:a,SubNav:o}=t,r=e.createElement("span",{className:"fusion"},"FUSION"),c=e.createElement("a",{className:"login-in",href:"javascript:;"},"Login in");const m=l.div`
  .basic-nav .fusion {
    margin: 8px 20px;
    width: 100px;
    color: #ffffff;
    font-size: 20px;
  }
  .basic-nav .login-in {
    margin: 0 20px;
    color: #ffffff;
  }
  .basic-nav .next-nav-item {
    width: 120px;
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{className:"basic-nav",direction:"hoz",type:"primary",header:r,footer:c,defaultSelectedKeys:["home"],triggerType:"hover"},e.createElement(a,{key:"home"},"Home"),e.createElement(o,{label:"Component"},e.createElement(a,{key:"next"},"Next"),e.createElement(a,{key:"mext"},"Mext")),e.createElement(a,{key:"document"},"Document"));return e.createElement(m,null,n)}});const u=l.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,"请查看"," ",e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/aboutblank/pen/JjdNKrm"},"https://codepen.io/aboutblank/pen/JjdNKrm"));return e.createElement(u,null,t)}});const{Item:p,SubNav:d}=t;class E extends e.Component{constructor(){super(...arguments),this.state={iconOnly:!1,hasTooltip:!0,hasArrow:!0}}setValue(e,t){this.setState({[e]:"true"===t})}render(){const{iconOnly:l,hasTooltip:a,hasArrow:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l?"true":"false",onChange:this.setValue.bind(this,"iconOnly")},e.createElement(n,{value:"true"},"iconOnly=true"),e.createElement(n,{value:"false"},"iconOnly=false")),l?e.createElement(n.Group,{shape:"button",size:"medium",value:o?"true":"false",onChange:this.setValue.bind(this,"hasArrow")},e.createElement(n,{value:"true"},"hasArrow=true"),e.createElement(n,{value:"false"},"hasArrow=false")):null,l?e.createElement(n.Group,{shape:"button",size:"medium",value:a?"true":"false",onChange:this.setValue.bind(this,"hasTooltip")},e.createElement(n,{value:"true"},"hasTooltip=true"),e.createElement(n,{value:"false"},"hasTooltip=false")):null),e.createElement(t,{style:{width:"200px"},iconOnly:l,hasArrow:o,hasTooltip:a},e.createElement(p,{icon:"account"},"Navigation One"),e.createElement(p,{icon:"account"},"Navigation Two"),e.createElement(p,{icon:"account"},"Navigation Three"),e.createElement(p,{icon:"account"},"Navigation Four"),e.createElement(p,{icon:"account"},"Navigation Five"),e.createElement(d,{icon:"account",label:"Sub Nav"},e.createElement(p,{icon:"account"},"Item 1"),e.createElement(p,{icon:"account"},"Item 2"),e.createElement(p,{icon:"account"},"Item 3"),e.createElement(p,{icon:"account"},"Item 4"))))}}const v=l.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(v,null,t)}});const{Item:h,SubNav:g}=t;class f extends e.Component{constructor(){super(...arguments),this.state={type:"normal",direction:"hoz",activeDirection:null,triggerType:"click",mode:"inline"}}setValue(e,t){this.setState({[e]:""===t?null:t})}setTriggerType(e){this.setState({triggerType:e})}setModeType(e){this.setState({mode:e})}render(){const{type:l,direction:a,activeDirection:o,triggerType:r,mode:c}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this,"type")},e.createElement(n,{value:"normal"},'type="normal"'),e.createElement(n,{value:"primary"},'type="primary"'),e.createElement(n,{value:"secondary"},'type="secondary"'),e.createElement(n,{value:"line"},'type="line"')),e.createElement(n.Group,{shape:"button",size:"medium",value:a,onChange:this.setValue.bind(this,"direction")},e.createElement(n,{value:"hoz"},'direction="hoz"'),e.createElement(n,{value:"ver"},'direction="ver"')),e.createElement(n.Group,{shape:"button",size:"medium",value:null===o?"":o,onChange:this.setValue.bind(this,"activeDirection")},e.createElement(n,{value:""},"activeDirection=null"),"hoz"===a?e.createElement(n,{value:"top"},'activeDirection="top"'):null,"hoz"===a?e.createElement(n,{value:"bottom"},'activeDirection="bottom"'):null,"ver"===a?e.createElement(n,{value:"left"},'activeDirection="left"'):null,"ver"===a?e.createElement(n,{value:"right"},'activeDirection="right"'):null),e.createElement(n.Group,{shape:"button",size:"medium",value:r,onChange:this.setTriggerType.bind(this)},e.createElement(n,{value:"click"},'triggerType="click"'),e.createElement(n,{value:"hover"},'triggerType="hover"')),e.createElement(n.Group,{shape:"button",size:"medium",value:c,onChange:this.setModeType.bind(this)},e.createElement(n,{value:"inline"},'mode="inline"'),e.createElement(n,{value:"popup"},'mode="popup"'))),e.createElement(t,{className:"custom-nav",mode:c,type:l,direction:a,activeDirection:o,triggerType:r},e.createElement(h,null,"Item 1"),e.createElement(h,null,"Item 2"),e.createElement(g,{label:"Sub Nav"},e.createElement(h,null,"Item 3"),e.createElement(h,null,"Item 4"),e.createElement(g,{label:"Sub Nav"},e.createElement(h,null,"Item 5"),e.createElement(h,null,"Item 6"))),e.createElement(h,{icon:"account"},e.createElement("a",{href:"http://www.taobao.com",target:"_blank"},"Taobao"))))}}const y=l.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
  }
  .custom-nav.next-hoz .next-nav-item {
    width: 100px;
  }
  .custom-nav.next-ver {
    width: 200px;
  }
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(f,null);return e.createElement(y,null,t)}});const{Item:x,SubNav:N}=t;class S extends e.Component{constructor(){super(...arguments),this.state={openMode:"single"}}setValue(e){this.setState({openMode:e})}render(){const{openMode:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(n,{value:"single"},'openMode="single"'),e.createElement(n,{value:"multiple"},'openMode="multiple"'))),e.createElement(t,{style:{width:240},openMode:l},e.createElement(N,{label:"Sub Nav 1"},e.createElement(x,null,"Item 1")),e.createElement(N,{label:"Sub Nav 2"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"),e.createElement(N,{label:"Sub Nav 1"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2")),e.createElement(N,{label:"Sub Nav 2"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"))),e.createElement(N,{label:"Sub Nav 3"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"),e.createElement(x,null,"Item 3"),e.createElement(N,{label:"Sub Nav 1"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"),e.createElement(x,null,"Item 3")),e.createElement(N,{label:"Sub Nav 2"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"),e.createElement(x,null,"Item 3")),e.createElement(N,{label:"Sub Nav 3"},e.createElement(x,null,"Item 1"),e.createElement(x,null,"Item 2"),e.createElement(x,null,"Item 3"))),e.createElement(x,null,"Item")))}}const _=l.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(_,null,t)}});const{Item:k,SubNav:z}=t;class w extends e.Component{constructor(){super(...arguments),this.state={popupAlign:"follow"}}setValue(e){this.setState({popupAlign:e})}render(){const{popupAlign:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(n,{value:"follow"},'popupAlign="follow"'),e.createElement(n,{value:"outside"},'popupAlign="outside"'))),e.createElement(t,{style:{height:400,width:240},mode:"popup",popupAlign:l,defaultOpenKeys:["sub-nav-2"]},e.createElement(z,{key:"sub-nav-1",label:"Sub Nav 1"},e.createElement(k,{key:"1"},"Item 1")),e.createElement(z,{key:"sub-nav-2",label:"Sub Nav 2"},e.createElement(k,{key:"1"},"Item 1"),e.createElement(k,{key:"2"},"Item 2")),e.createElement(z,{key:"sub-nav-3",label:"Sub Nav 3"},e.createElement(k,{key:"1"},"Item 1"),e.createElement(k,{key:"2"},"Item 2"),e.createElement(k,{key:"3"},"Item 3")),e.createElement(z,{key:"sub-nav-4",label:"Sub Nav 4"},e.createElement(k,{key:"1"},"Item 1"),e.createElement(k,{key:"2"},"Item 2"),e.createElement(k,{key:"3"},"Item 3"),e.createElement(k,{key:"4"},"Item 4"))))}}const O=l.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(O,null,t)}});const{Item:C,Group:G}=t;const j=l.div``;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{style:{width:240}},e.createElement(G,{label:"Group Label 1"},e.createElement(C,{icon:"account"},"Navigation One"),e.createElement(C,{icon:"account"},"Navigation Two"),e.createElement(C,{icon:"account"},"Navigation Three")),e.createElement(G,{label:"Group Label 2"},e.createElement(C,{icon:"account"},"Navigation Four"),e.createElement(C,{icon:"account"},"Navigation Five"),e.createElement(C,{icon:"account"},"Navigation Six")));return e.createElement(j,null,n)}});const V={};V._basic=i,V._fixed=s,V["_icon-only"]=b,V._custom=I,V["_open-mode"]=T,V["_popup-align"]=M,V._group=A;export default V;
