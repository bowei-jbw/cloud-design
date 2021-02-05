import{R as e,r as t,a6 as a}from"./index.3c24fdbb.js";import{q as n}from"./styled-components.browser.esm.1222bcc8.js";const l=e.Group,r=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class o extends t.Component{constructor(e){super(e),this.state={value1:"apple",value2:"apple",value3:""},this.onNestChange=this.onNestChange.bind(this),this.onSmallChange=this.onSmallChange.bind(this),this.onMediumChange=this.onMediumChange.bind(this)}onSmallChange(e){this.setState({value1:e})}onMediumChange(e){this.setState({value2:e})}onNestChange(e){this.setState({value3:e})}render(){return t.createElement("div",null,t.createElement("h4",null,"Small size"),t.createElement(l,{dataSource:r,shape:"button",size:"small",value:this.state.value1,onChange:this.onSmallChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Medium size (default)"),t.createElement(l,{dataSource:r,shape:"button",size:"medium",value:this.state.value2,onChange:this.onMediumChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Large size"),t.createElement(l,{shape:"button",size:"large",value:this.state.value3,onChange:this.onNestChange},t.createElement(e,{id:"banana",value:"banana"},"Banana"),t.createElement(e,{id:"watermelon",value:"watermelon"},"Watermelon"),t.createElement(e,{id:"peach",value:"peach"},"Peach")),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Disabled and Selected-Disabled status"),t.createElement(l,{shape:"button",value:"banana",onChange:this.onNestChange},t.createElement(e,{id:"peach",disabled:!0,value:"peach"},"Peach"),t.createElement(e,{id:"banana",disabled:!0,value:"banana"},"Banana")))}}const c=n.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(o,null);return t.createElement(c,null,e)}});const u=n.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=t.createElement("div",null,t.createElement("h4",null,"Without Label"),t.createElement(e,{defaultChecked:!0})," ",t.createElement(e,{checked:!0})," ",t.createElement(e,{disabled:!0})," ",t.createElement(e,{checked:!0,disabled:!0})," ",t.createElement(e,null),t.createElement("br",null),t.createElement("h4",null,"With Label"),t.createElement(e,{id:"apple"},"Apple")," ",t.createElement(e,{id:"banana"}),t.createElement("label",{htmlFor:"banana",className:"next-radio-label"},"Banana")," ",t.createElement(e,{id:"apple2",label:"Apple",className:"testClassname"}));return t.createElement(u,null,a)}});const m=e.Group,h=[{value:"appale",label:"Appale"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class d extends t.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return t.createElement("div",null,"normal:"," ",t.createElement(m,{dataSource:h,value:this.state.value,onChange:this.onChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),"disabled:"," ",t.createElement(m,{disabled:!0,dataSource:h,value:this.state.value,onChange:this.onChange}))}}const p=n.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(d,null);return t.createElement(p,null,e)}});const v="normal",b="button",g="hoz",C="ver";class _ extends t.Component{constructor(){super(...arguments),this.state={shape:v,itemDirection:g},this.onShapeChange=e=>{this.setState({shape:e})},this.onItemDirectionChange=e=>{this.setState({itemDirection:e})}}render(){return t.createElement("div",null,t.createElement("h5",null,"Choose a shape"),t.createElement("div",null,t.createElement(e.Group,{shape:"button",value:this.state.shape,onChange:this.onShapeChange},t.createElement(e,{value:v},"Normal"),t.createElement(e,{value:b},"Button"))),t.createElement("h5",null,"Choose an align-type of the item"),t.createElement("div",null,t.createElement(e.Group,{shape:"button",value:this.state.itemDirection,onChange:this.onItemDirectionChange},t.createElement(e,{value:g},"Horizon"),t.createElement(e,{value:C,disabled:this.state.shape===b},"Vertical"))),t.createElement("div",{className:"rendered-container"},t.createElement("h3",null,"Rendered Result"),t.createElement(e.Group,{shape:this.state.shape,itemDirection:this.state.itemDirection},t.createElement(e,{value:"react"},"React"),t.createElement(e,{value:"vue"},"Vue"),t.createElement(e,{value:"angular"},"Angular"))))}}const S=n.div`
  .rendered-container {
    margin: 32px 0 0;
    padding: 0 24px 24px;
    border: 3px dashed #aaa;
    border-radius: 11px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(_,null);return t.createElement(S,null,e)}});const y=e.Group;const k=n.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=t.createElement("div",null,t.createElement("span",{id:"radio-a11y"},"Programming language ："),t.createElement(y,{"aria-labelledby":"radio-a11y"},t.createElement(e,{id:"python",value:"python"},"python"),t.createElement(e,{id:"java",value:"java"},"java"),t.createElement(e,{id:"c",value:"c"},"c")));return t.createElement(k,null,a)}});const x=e.Group,j=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear",disabled:!0},{value:"orange",label:"Orange"}],M=()=>t.createElement("div",null,t.createElement(x,{dataSource:j,defaultValue:"apple"}));const O=n.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(M,null);return t.createElement(O,null,e)}});const{Row:w,Col:D}=a,N=e.Group;class A extends t.Component{constructor(e){super(e),this.state={value:"orange",other:0},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return t.createElement("div",null,t.createElement("h4",null,"Grid Layout"),t.createElement(N,{onChange:this.onChange,style:{width:"1000px"}},t.createElement(w,null,t.createElement(D,{span:"8"},t.createElement(e,{value:"apple1",onClick:this.onClick},"Apple")),t.createElement(D,{span:"8"},t.createElement(e,{value:"pear1",onClick:this.onClick},"Pear")),t.createElement(D,{span:"8"},t.createElement(e,{value:"banana1",onClick:this.onClick},"Banana"))),t.createElement(w,null,t.createElement(D,{span:"8"},t.createElement(e,{value:"peach",onClick:this.onClick},"Peach")),t.createElement(D,{span:"8"},t.createElement(e,{value:"watermelon",onClick:this.onClick},"Watermelon")),t.createElement(D,{span:"8"},t.createElement(e,{value:"strawberry",onClick:this.onClick},"Strawberry"))),t.createElement(w,null,"Just simple context")))}}const P=n.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(A,null);return t.createElement(P,null,e)}});const W=e.Group;class B extends t.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return t.createElement("div",null,t.createElement("label",{id:"groupId"},"Choose fruit"),t.createElement("br",null),t.createElement(W,{value:this.state.value,onChange:this.onChange,"aria-labelledby":"groupId"},t.createElement(e,{id:"apple",value:"apple"},"Apple"),t.createElement(e,{id:"watermelon",value:"watermelon"},"Watermelon"),t.createElement(e,{id:"orange",value:"orange"},"Orange")))}}const R=n.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(B,null);return t.createElement(R,null,e)}});const L={};L._button=s,L._basic=i,L._control=E,L._group=f,L._accessibility=z,L._uncontrol=G,L._useWithGrid=T,L._nest=I;export default L;
