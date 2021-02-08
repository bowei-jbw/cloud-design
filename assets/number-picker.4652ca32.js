import{r as e,a7 as t,R as n,B as l}from"./index.9ecd65a8.js";import{q as a}from"./styled-components.browser.esm.fe3a3df0.js";class r extends e.Component{constructor(e){super(e),this.state={value:0,tip:""},this.onChange=this.onChange.bind(this)}onChange(e,t){let n="";n=e>=0?e:"negative "+-1*e,this.setState({value:e,tip:`${n}`})}render(){const{value:n,tip:l}=this.state;return e.createElement("div",null,e.createElement("span",{id:"a11y-number-picker","aria-live":"assertive","aria-label":l}),e.createElement(t,{type:"inline",value:n,onChange:this.onChange,upBtnProps:{"aria-label":"\b\bincreasing button"},downBtnProps:{"aria-label":"decreasing button"},"aria-labelledby":"a11y-number-picker"}))}}const o=a.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(o,null,t)}});function u(e,t){console.log(e,t.type,t.triggerType)}const i=a.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{max:3,onChange:u}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,max:3,type:"inline",onChange:u}));return e.createElement(i,null,n)}});const d=a.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,disabled:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,type:"inline",disabled:!0}));return e.createElement(d,null,n)}});function b(e,t){console.log("onChange",e,t)}function g(e){console.log("onCorrect",e)}const E=a.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{type:"inline",step:3,min:6,max:30,defaultValue:6,onChange:b,onCorrect:g}));return e.createElement(E,null,n)}});const p=e=>Intl.NumberFormat("en-US").format(e);const _=a.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{format:p,defaultValue:5e3}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{label:"p:",format:e=>`${e}%`,defaultValue:85}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{innerAfter:"%"}));return e.createElement(_,null,n)}});class h extends e.Component{constructor(){super(...arguments),this.state={device:"desktop"},this.handleDeviceChange=e=>{this.setState({device:e})}}render(){return e.createElement("div",null,e.createElement(n.Group,{shape:"button",value:this.state.device,onChange:this.handleDeviceChange},e.createElement(n,{value:"desktop"},"desktop"),e.createElement(n,{value:"phone"},"phone")),e.createElement("hr",null),e.createElement(t,{device:this.state.device}))}}const S=a.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(h,null);return e.createElement(S,null,t)}});class C extends e.Component{constructor(e){super(e),this.state={editable:!1,value:0}}toogle(){this.setState({editable:!this.state.editable})}onChange(e){console.log("changed",e),this.setState({value:e})}render(){return e.createElement("div",null,e.createElement(t,{onChange:this.onChange.bind(this),value:this.state.value,editable:this.state.editable}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{onClick:this.toogle.bind(this)},"Toggle to ",this.state.editable?"uneditable":"editable"))}}const z=a.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(z,null,t)}});const V=a.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{alwaysShowTrigger:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{hasTrigger:!1}));return e.createElement(V,null,n)}});function M(e){console.log("changed",e)}function O(e){console.log(e)}const x=a.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:-3.99,onChange:M,onCorrect:O,step:2,precision:2}));return e.createElement(x,null,n)}});function w(e){console.log("changed",e)}function B(e){console.log(e)}const D=a.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,onChange:w,onCorrect:B,step:.01}));return e.createElement(D,null,n)}});const $=a.div`
  .next-number-picker {
    margin-right: 10px;
  }
`;var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,size:"small"}),e.createElement(t,{defaultValue:0}),e.createElement(t,{defaultValue:0,size:"large"}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,size:"small",type:"inline"}),e.createElement(t,{defaultValue:0,type:"inline"}),e.createElement(t,{defaultValue:0,size:"large",type:"inline"}));return e.createElement($,null,n)}});const A={};A._accessibility=c,A._basic=s,A._disabled=m,A._limit=f,A._format=v,A._mobile=y,A._editable=T,A._trigger=j,A._precision=k,A._step=P,A._size=q;export default A;
