import{r as e,ai as t}from"./index.3d842b9a.js";import{q as l}from"./styled-components.browser.esm.b64bc59a.js";const{Item:n}=t,o=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.createElement(n,{key:t},t)));const a=l.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{label:"Edit Document",type:"primary",triggerProps:{"aria-label":"click to see more menu option"}},o));return e.createElement(a,null,l)}});const{Item:c}=t,i=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.createElement(c,{key:t},t)));class s extends e.Component{constructor(){super(...arguments),this.state={visible:!1,label:"Choose Action"},this.onSelect=e=>{this.setState({visible:!1,label:e})},this.changeVisible=e=>{this.setState({visible:e})}}render(){const{visible:l,label:n}=this.state;return e.createElement(t,{label:n,visible:l,onVisibleChange:this.changeVisible,onItemClick:this.onSelect},i)}}const m=l.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(m,null,t)}});const{Item:d}=t,b=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.createElement(d,{key:t},t)));const E=l.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{label:"Edit Document",size:"small"},b)," ","   ",e.createElement(t,{label:"Edit Document",size:"medium"},b)," ","   ",e.createElement(t,{label:"Edit Document",size:"large"},b));return e.createElement(E,null,l)}});const{Item:_}=t,y=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.createElement(_,{key:t},t)));const v=l.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{label:"Edit Document",disabled:!0},y),"    ",e.createElement(t,{label:"Edit Document",disabled:!0,type:"primary"},y),"  ",e.createElement(t,{label:"Edit Document",type:"secondary"},y),e.createElement("br",null),e.createElement("br",null));return e.createElement(v,null,l)}});const{Item:f,Group:g,Divider:h}=t;const S=l.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(t,{label:"Edit Document",onItemClick:e=>console.log(e)},e.createElement(f,null,"Undo"),e.createElement(f,null,"Redo"),e.createElement(h,null),e.createElement(g,null,e.createElement(f,{helper:"CTRL + X"},"Cut"),e.createElement(f,{helper:"CTRL + C"},"Copy"),e.createElement(f,{helper:"CTRL + V"},"Paste")));return e.createElement(S,null,l)}});const D={};D._accessibility=r,D._composite=u,D._size=p,D._basic=C,D._menu=z;export default D;
