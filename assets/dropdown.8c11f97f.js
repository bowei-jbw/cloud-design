import{r as e,F as t,B as l,a1 as n}from"./index.85ae9c06.js";import{q as r}from"./styled-components.browser.esm.1d25448f.js";const o=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));class i extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisible=()=>{this.setState({visible:!this.state.visible})},this.onVisibleChange=e=>{this.setState({visible:e})}}render(){return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement(l,{onClick:this.toggleVisible,ref:"button"},"Toggle Overlay")),e.createElement(n,{trigger:e.createElement("span",null,"Hello dropdown"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange,safeNode:()=>this.refs.button},o))}}const a=r.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(a,null,t)}});const s=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const m=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{trigger:e.createElement("a",null,"Click me"),triggerType:"click"},s);return e.createElement(m,null,t)}});const g=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const p=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{trigger:e.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},g));return e.createElement(p,null,t)}});const d={};d._controlled=c,d["_trigger-type"]=u,d._basic=E;export default d;
