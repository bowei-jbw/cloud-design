import{r as e,D as t,at as l,B as n}from"./index.16a07d60.js";import{q as r}from"./styled-components.browser.esm.d6068967.js";const o=e.exports.createElement(t,null,e.exports.createElement(t.Item,null,"Option 1"),e.exports.createElement(t.Item,null,"Option 2"),e.exports.createElement(t.Item,null,"Option 3"),e.exports.createElement(t.Item,null,"Option 4"));const s=r.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(l,{trigger:e.exports.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},o));return e.exports.createElement(s,null,t)}});const c=e.exports.createElement(t,null,e.exports.createElement(t.Item,null,"Option 1"),e.exports.createElement(t.Item,null,"Option 2"),e.exports.createElement(t.Item,null,"Option 3"),e.exports.createElement(t.Item,null,"Option 4"));const p=r.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(l,{trigger:e.exports.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},c));return e.exports.createElement(p,null,t)}});const m=e.exports.createElement(t,null,e.exports.createElement(t.Item,null,"Option 1"),e.exports.createElement(t.Item,null,"Option 2"),e.exports.createElement(t.Item,null,"Option 3"),e.exports.createElement(t.Item,null,"Option 4"));class u extends e.exports.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisible=()=>{this.setState({visible:!this.state.visible})},this.onVisibleChange=e=>{this.setState({visible:e})}}render(){return e.exports.createElement("div",null,e.exports.createElement("div",{style:{marginBottom:"20px"}},e.exports.createElement(n,{onClick:this.toggleVisible,ref:"button"},"Toggle Overlay")),e.exports.createElement(l,{trigger:e.exports.createElement("span",null,"Hello dropdown"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange,safeNode:()=>this.refs.button},m))}}const x=r.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(u,null);return e.exports.createElement(x,null,t)}});const E=e.exports.createElement(t,null,e.exports.createElement(t.Item,null,"Option 1"),e.exports.createElement(t.Item,null,"Option 2"),e.exports.createElement(t.Item,null,"Option 3"),e.exports.createElement(t.Item,null,"Option 4"));const d=r.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(l,{trigger:e.exports.createElement("a",null,"Click me"),triggerType:"click"},E);return e.exports.createElement(d,null,t)}});const O={};O._accessibility=i,O._basic=a,O._controlled=g,O["_trigger-type"]=b;export default O;
