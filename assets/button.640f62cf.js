var e=Object.assign;import{r as t,B as l,b as n}from"./index.3d842b9a.js";import{q as r}from"./styled-components.browser.esm.b64bc59a.js";const a={component:"a",href:"http://www.alibaba.com",target:"_blank"};const o=r.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=t.createElement("div",null,t.createElement(l,e(e({},a),{type:"primary"}),"alibaba.com")," ","  ",t.createElement(l,e(e({},a),{type:"secondary"}),"alibaba.com")," ","  ",t.createElement(l,e(e({},a),{type:"normal"}),"alibaba.com"));return t.createElement(o,null,n)}});const i=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l.Group,null,t.createElement(l,{type:"primary","aria-label":"prompt button"},t.createElement(n,{type:"prompt"})),t.createElement(l,{type:"primary","aria-label":"clock button"},t.createElement(n,{type:"clock"})),t.createElement(l,{type:"primary","aria-label":"set button"},t.createElement(n,{type:"set"}))));return t.createElement(i,null,e)}});const d=r.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{type:"normal"},"Normal"),"   ",t.createElement(l,{type:"primary"},"Prirmary"),"   ",t.createElement(l,{type:"secondary"},"Secondary"),t.createElement("br",null),t.createElement("br",null),t.createElement(l,{type:"normal",text:!0},"Normal")," ","  ",t.createElement(l,{type:"primary",text:!0},"Primary")," ","  ",t.createElement(l,{type:"secondary",text:!0},"Secondary"),t.createElement("br",null),t.createElement("br",null),t.createElement(l,{type:"normal",warning:!0},"Normal")," ","  ",t.createElement(l,{type:"primary",warning:!0},"Primary")," ","  ");return t.createElement(d,null,e)}});class u extends t.Component{constructor(e,t){super(e,t),this.setLoading=()=>{this.setState({loading:!0})},this.state={loading:!1}}render(){return t.createElement("div",null,t.createElement(l,{type:"secondary",iconSize:"xs",loading:!0,icons:{loading:t.createElement(n,{type:"loading",style:{color:"#1b58f4"}})}},"Custom loading icon"),"  ",t.createElement(l,{type:"primary",loading:this.state.loading,onClick:this.setLoading,icons:{loading:t.createElement(n,{type:"loading",style:{color:"#1b58f4"}})}},"Click to loading and show loading icon"))}}const p=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(u,null);return t.createElement(p,null,e)}});const g=r.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l.Group,null,t.createElement(l,{type:"primary"},"OK"),t.createElement(l,{type:"secondary"},"Cancel")),"  ",t.createElement(l.Group,null,t.createElement(l,{disabled:!0},"Left"),t.createElement(l,{disabled:!0},"Middle"),t.createElement(l,{disabled:!0},"Right")),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Group,null,t.createElement(l,{type:"primary"},t.createElement(n,{type:"arrow-left"})," Backward"),t.createElement(l,{type:"primary"},"Forward ",t.createElement(n,{type:"arrow-right"}))),"  ",t.createElement(l.Group,null,t.createElement(l,{type:"primary"},t.createElement(n,{type:"prompt"})),t.createElement(l,{type:"primary"},t.createElement(n,{type:"clock"})),t.createElement(l,{type:"primary"},t.createElement(n,{type:"set"}))));return t.createElement(g,null,e)}});const b=r.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,null,t.createElement(n,{type:"atm"})," ATM")," ","  ",t.createElement(l,{text:!0},t.createElement(n,{type:"atm"})," ATM")," ","  ",t.createElement(l,{warning:!0},t.createElement(n,{type:"atm"})," ATM")," ","  ",t.createElement(l,{iconSize:"xxs"},t.createElement(n,{type:"arrow-left"})," ARROW")," ","  ");return t.createElement(b,null,e)}});const _=r.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{type:"primary"},"Primary"),"  ",t.createElement(l,{component:"a",type:"primary",disabled:!0},"Primary"),t.createElement("br",null),t.createElement("br",null),t.createElement(l,{type:"secondary"},"Secondary"),"  ",t.createElement(l,{type:"secondary",disabled:!0},"Secondary"),t.createElement("br",null),t.createElement("br",null),t.createElement(l,{type:"normal"},"Normal"),"  ",t.createElement(l,{type:"normal",disabled:!0},"Normal"),t.createElement("br",null),t.createElement("br",null),t.createElement("div",null,t.createElement("div",{className:"ghost-light-background"},t.createElement(l,{ghost:"light",disabled:!0},"Ghost Light")),t.createElement("div",{className:"ghost-dark-background"},t.createElement(l,{ghost:"dark",disabled:!0},"Ghost Dark"))));return t.createElement(_,null,e)}});class v extends t.Component{constructor(e,t){super(e,t),this.setLoading=()=>{this.setState({loading:!0})},this.state={loading:!1}}render(){return t.createElement("div",null,t.createElement(l,{type:"secondary",loading:!0},"Loading"),"  ",t.createElement(l,{type:"primary",loading:this.state.loading,onClick:this.setLoading},"Click to loading"))}}const x=r.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(v,null);return t.createElement(x,null,e)}});const S=r.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{warning:!0},t.createElement(n,{type:"atm"})));return t.createElement(S,null,e)}});const w=r.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{style:{clear:"both"}},t.createElement("div",{className:"ghost-light-background"},t.createElement(l,{ghost:"light"},"Ghost light")),t.createElement("div",{className:"ghost-dark-background"},t.createElement(l,{ghost:"dark"},"Ghost dark")));return t.createElement(w,null,e)}});const j=r.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{type:"primary",size:"large"},t.createElement(n,{type:"atm"}),"Large"),"  ",t.createElement(l,{type:"primary"},t.createElement(n,{type:"atm"}),"Medium"),"  ",t.createElement(l,{type:"primary",size:"small"},t.createElement(n,{type:"atm"}),"Small"),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Group,{size:"large"},t.createElement(l,null,"Button"),t.createElement(l,null,"Button"),t.createElement(l,null,"Button")));return t.createElement(j,null,e)}});const T={};T._component=c,T._accessibility=m,T._basic=s,T["_custom-icons"]=E,T._group=y,T._icon=h,T._disabled=f,T._loading=k,T["_only-icon"]=z,T._ghost=M,T._size=O;export default T;
