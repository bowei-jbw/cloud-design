import{r as e,B as t,Q as o,R as n,a0 as l,G as s,P as i}from"./index.3c24fdbb.js";import{q as r}from"./styled-components.browser.esm.1222bcc8.js";class a extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,autoFocus:!0,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,cancelProps:{"aria-label":"cancel"},okProps:{"aria-label":"ok"}},e.createElement("p",{tabIndex:"0"}," ","Start your business here by searching a popular product")))}}const c=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(a,null);return e.createElement(c,null,t)}});class m extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=e=>{console.log(e),this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose},e.createElement("div",{style:{width:"520px",height:"252px",background:"#D9D9D9"}})))}}const h=r.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(h,null,t)}});var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:n=>{const[l,s]=e.useState(!1);return e.createElement("div",null,e.createElement(t,{onClick:()=>{s(!0)},type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:l,onOk:()=>{s(!1)},onCancel:()=>{s(!1)},onClose:()=>{s(!1)},footer:[e.createElement(t,{type:"primary",loading:!0},"custom ok"),e.createElement(t,null,"custom cancle")]},"Start your business here by searching a popular product"))}});class C extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpenFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!0})},this.onCloseFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!1})},this.onOpenTextCustomized=()=>{this.setState({textCustomizedVisible:!0})},this.onCloseTextCustomized=()=>{this.setState({textCustomizedVisible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpenFullyCustomized,type:"primary"},"Fully Customized Footer")," "," ",e.createElement(o,{title:"Welcome to Alibaba.com",footer:e.createElement(t,{warning:!0,type:"primary",onClick:this.onCloseFullyCustomized},"Customize footer"),visible:this.state.fullyCustomizedVisible,onOk:this.onCloseFullyCustomized,onCancel:this.onCloseFullyCustomized,onClose:this.onCloseFullyCustomized},"Start your business here by searching a popular product"),e.createElement(t,{onClick:this.onOpenTextCustomized,type:"primary"},"Text Only Customize"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.textCustomizedVisible,onOk:this.onCloseTextCustomized,onCancel:this.onCloseTextCustomized,onClose:this.onCloseTextCustomized,okProps:{children:"Custom OK",className:"asdf"},cancelProps:{children:"Custom Cancel"}},"Start your business here by searching a popular product"))}}const g=r.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(g,null,t)}});class y extends e.Component{constructor(){super(...arguments),this.state={visible:!1,footerActions:["ok","cancel"],footerAlign:"right",loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleFooterActions=e=>{this.setState({footerActions:e.split(",")})},this.toggleFooterAlign=e=>{this.setState({footerAlign:e})},this.toggleOkLoader=e=>{this.setState({loading:e})}}render(){const{visible:l,footerActions:s,footerAlign:i,loading:r}=this.state,a={loading:r};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Customize buttons of footer",visible:l,footerActions:s,footerAlign:i,onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose,okProps:a},e.createElement("div",{className:"demo-content"},e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:s.join(","),onChange:this.toggleFooterActions},e.createElement(n,{value:"ok,cancel"},"ok is left"),e.createElement(n,{value:"cancel,ok"},"ok is right"),e.createElement(n,{value:"ok"},"only ok"),e.createElement(n,{value:"cancel"},"only cancel")),e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:i,onChange:this.toggleFooterAlign},e.createElement(n,{value:"left"},"left"),e.createElement(n,{value:"center"},"center"),e.createElement(n,{value:"right"},"right")),e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:r,onChange:this.toggleOkLoader},e.createElement(n,{value:!1},"Loading Off"),e.createElement(n,{value:!0},"Loading On")))))}}const k=r.div`
  .demo-content {
    padding: 10px;
    border: 2px dashed #ddd;
    background: #f8f8f8;
  }

  .demo-radio-group {
    display: block;
  }

  .demo-radio-group + .demo-radio-group {
    margin-top: 10px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(y,null);return e.createElement(k,null,t)}});class v extends e.Component{constructor(){super(...arguments),this.state={visible:!1,loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onOk=()=>new Promise((e=>{this.setState({loading:!0}),setTimeout(e,2e3)})).then((()=>{l.success("Deleted successfully!"),this.setState({loading:!1,visible:!1})})),this.onClose=()=>{this.setState({visible:!1})}}render(){const n={loading:this.state.loading};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Dialog Promise"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,okProps:n,onOk:this.onOk,onCancel:this.onClose,onClose:this.onClose},"Start your business here by searching a popular product"))}}const f=()=>{o.confirm({title:"Confirm",content:"Do you confirm deleting this content?",onOk:()=>new Promise((e=>{setTimeout(e,2e3)})).then((()=>{l.success("Deleted successfully!")}))})};const S=r.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement("div",null,e.createElement(v,null),e.createElement(t,{type:"primary",warning:!0,onClick:f},"Quick Confirm Promise"));return e.createElement(S,null,o)}});const _=e.createElement("p",null,"Start your business here by searching a popular product"),x=[e.createElement("p",{key:"0"},"Start your business here by searching a popular product"),e.createElement("p",{key:"1"},"Start your business here by searching a popular product"),e.createElement("p",{key:"2"},"Start your business here by searching a popular product"),e.createElement("p",{key:"3"},"Start your business here by searching a popular product")];class z extends e.Component{constructor(){super(...arguments),this.state={visible:!1,short:!0,shouldUpdatePosition:!0},this.onOpen=()=>{this.setState({visible:!0,short:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleShouldUpdatePosition=()=>{this.setState({shouldUpdatePosition:!this.state.shouldUpdatePosition})},this.modifyContent=()=>{this.setState({short:!this.state.short})}}render(){const{visible:n,short:l,shouldUpdatePosition:i}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Whether to update the dialog position when the dialog height changes:"),e.createElement(s,{style:{display:"block",marginBottom:"10px"},checked:i,onChange:this.toggleShouldUpdatePosition}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,shouldUpdatePosition:i},e.createElement(t,{type:"primary",onClick:this.modifyContent},"Change content"),l?_:x))}}const A=r.div``;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(A,null,t)}});const w=()=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.confirm 命令式弹窗"})}},"使用 Dialog.confirm")),P=o.withContext((({contextDialog:o})=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.withContext 命令式弹窗"})}},"使用 Dialog.withContext"))));class T extends e.Component{render(){return e.createElement("div",null,e.createElement(i,{locale:{Dialog:{close:"关闭（根组件文案）",ok:"确认（根组件文案）",cancel:"取消（根组件文案）"}}},e.createElement(i,{locale:{Dialog:{close:"关闭（局部文案）",ok:"确认（局部文案）",cancel:"取消（局部文案）"}}},e.createElement("div",null,e.createElement(w,null),e.createElement(P,null)))))}}const M=r.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(T,null);return e.createElement(M,null,t)}});class j extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){const{visible:n}=this.state;return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Fixed Height",visible:n,height:"400px",onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},"Small Content in a fixed size Dialog"))}}const W=r.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(W,null,t)}});const U=new Array(30).fill(e.createElement("p",null,"Start your business here by searching a popular product"));class V extends e.Component{constructor(){super(...arguments),this.state={visible:!1,isFullScreen:!1,closeOnMaskClick:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleIsFullScreen=()=>{this.setState({isFullScreen:!this.state.isFullScreen})},this.toggleCloseOnMaskClick=()=>{this.setState({closeOnMaskClick:!this.state.closeOnMaskClick})}}render(){const{visible:n,isFullScreen:l,closeOnMaskClick:i}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:"),e.createElement(s,{style:{display:"block",marginBottom:"10px"},checked:l,onChange:this.toggleIsFullScreen}),e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Close on mask click:"),e.createElement(s,{style:{display:"block",marginBottom:"10px"},checked:i,onChange:this.toggleCloseOnMaskClick}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,isFullScreen:l,closeMode:i?["close","esc","mask"]:["close","esc"],onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},U))}}const N=r.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(V,null);return e.createElement(N,null,t)}});const I=()=>{o.alert({title:"Alert",content:"alert content alert content...",okProps:{children:"Custom OK"},onOk:()=>console.log("ok")})},L=()=>{o.confirm({title:"Confirm",content:"confirm content confirm content...",onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel"),closeable:!1})},K=()=>{const n=o.show({title:"Custom",content:"custom content custom content...",footer:e.createElement(t,{warning:!0,type:"primary",onClick:()=>n.hide()},"Custom button"),closeable:!1})},q=()=>{o.confirm({title:"Confirm",content:'set icon as "warning" ',messageProps:{type:"warning"},onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel"),closeable:!1})};const Q=r.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement(i,{locale:{Dialog:{ok:"OK",cancel:"Cancel"}}},e.createElement("span",null,e.createElement(t,{onClick:I},"Alert"),"  ",e.createElement(t,{onClick:L},"Confirm"),"  ",e.createElement(t,{onClick:K},"Show"),"  ",e.createElement(t,{onClick:q},"Custom Icon")));return e.createElement(Q,null,o)}});const R={};R._accessibility=u,R._basic=d,R["_footer-button-margin"]=p,R["_customize-footer"]=b,R._footer=E,R._promise=O,R["_should-update-position"]=F,R._withContext=D,R["_fixed-height"]=B,R["_large-content"]=G,R._quick=H;export default R;
