import{r as e,Z as t,b as r,B as n}from"./index.353b20bd.js";import{q as l}from"./styled-components.browser.esm.78ec4042.js";const c=l.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{percent:30,shape:"circle"}),"   ",e.createElement(t,{percent:50,shape:"circle"}),"   ",e.createElement(t,{percent:80,shape:"circle",textRender:()=>""}),"  ",e.createElement(t,{percent:100,shape:"circle",textRender:()=>e.createElement(r,{type:"select",size:"xl"})}));return e.createElement(c,null,n)}});const s=l.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,e.createElement(t,{percent:30,textRender:()=>""}),e.createElement(t,{percent:50}),e.createElement(t,{percent:90}),e.createElement(t,{percent:40}),e.createElement(t,{percent:40,hasBorder:!0,size:"large"}));return e.createElement(s,null,r)}});const m=l.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{percent:30,shape:"circle",color:"#AF5F3C"})," ","    ",e.createElement(t,{percent:40,shape:"circle"}),"    ",e.createElement(t,{percent:50,shape:"circle",color:"#E91E63",backgroundColor:"#00BCD4"}),"    ",e.createElement(t,{percent:90,shape:"circle",color:"rgba(119,66,141, 0.9)",textRender:()=>e.createElement(r,{type:"select",size:"xl"})}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{percent:30,shape:"line",color:"rgb(208,16,76)"}),e.createElement(t,{percent:40,shape:"line"}),e.createElement(t,{percent:50,shape:"line",color:"#E91E63",backgroundColor:"#00BCD4"}),e.createElement(t,{percent:90,shape:"line",color:"blue",textRender:()=>e.createElement(r,{type:"select",size:"medium"})}));return e.createElement(m,null,n)}});class i extends e.Component{constructor(e){super(e),this.addProgress=()=>{this.setState((e=>({percent:e.percent+10})))},this.minusProgress=()=>{this.setState((e=>({percent:e.percent-10})))},this.state={percent:0}}render(){const l=this.state;return e.createElement("div",null,e.createElement("div",{className:"progress-panel"},e.createElement(n.Group,null,e.createElement(n,{onClick:this.minusProgress,disabled:0===l.percent},e.createElement(r,{type:"minus"})),e.createElement(n,{onClick:this.addProgress,disabled:100===l.percent},e.createElement(r,{type:"add"})))),e.createElement(t,{percent:l.percent,progressive:!0,size:"large"}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{percent:l.percent,progressive:!0,shape:"circle",size:"large"}))}}const u=l.div`
  .progress-panel {
    display: flex;
    margin-bottom: 14px;
  }

  .custom-select {
    margin-right: 20px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(u,null,t)}});const d=l.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,e.createElement(t,{percent:30,size:"small"}),e.createElement(t,{percent:50,size:"medium"}),e.createElement(t,{percent:90,size:"large"}),e.createElement("br",null),e.createElement(t,{percent:30,size:"small",shape:"circle"}),"   ",e.createElement(t,{percent:50,size:"medium",shape:"circle"}),"   ",e.createElement(t,{percent:90,size:"large",shape:"circle"}));return e.createElement(d,null,r)}});const _=l.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,e.createElement(t,{percent:20,progressive:!0}),e.createElement(t,{percent:60,progressive:!0}),e.createElement(t,{percent:90,progressive:!0}));return e.createElement(_,null,r)}});const h=t=>100===t?e.createElement(r,{type:"select",size:"medium"}):`${t.toFixed(2)}%`;const v=l.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,[1,2,3,4,5,6].map(((r,n)=>e.createElement(t,{key:n,percent:r/6*100,shape:"circle",color:`hsl(${60*n+60}, 90%, 50%)`,textRender:h}))),[1,2,3,4,5,6].map(((r,n)=>e.createElement(t,{key:n,percent:r/6*100,shape:"line",color:`hsl(${60*n+60}, 90%, 50%)`,textRender:h}))));return e.createElement(v,null,r)}});const z=l.div`
  .custom-progress {
    margin: 0 20px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{className:""},e.createElement(t,{percent:20,shape:"circle",state:"normal",className:"custom-progress"}),e.createElement(t,{percent:95,shape:"circle",state:"success",className:"custom-progress"}),e.createElement(t,{percent:95,shape:"circle",state:"error",className:"custom-progress"}));return e.createElement(z,null,r)}});const S={};S._circle=a,S._basic=o,S._color=p,S._controlled=E,S._size=g,S._progressive=b,S._percentrender=f,S._state=y;export default S;
