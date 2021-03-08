import{R as e,r as t,a6 as a}from"./index.e23bfa0a.js";import{q as n}from"./styled-components.browser.esm.9bbc5b35.js";const l=e.Group;const r=n.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=t.createElement("div",null,t.createElement("span",{id:"radio-a11y"},"Programming language ："),t.createElement(l,{"aria-labelledby":"radio-a11y"},t.createElement(e,{id:"python",value:"python"},"python"),t.createElement(e,{id:"java",value:"java"},"java"),t.createElement(e,{id:"c",value:"c"},"c")));return t.createElement(r,null,a)}});const c=n.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=t.createElement("div",null,t.createElement("h4",null,"Without Label"),t.createElement(e,{defaultChecked:!0})," ",t.createElement(e,{checked:!0})," ",t.createElement(e,{disabled:!0})," ",t.createElement(e,{checked:!0,disabled:!0})," ",t.createElement(e,null),t.createElement("br",null),t.createElement("h4",null,"With Label"),t.createElement(e,{id:"apple"},"Apple")," ",t.createElement(e,{id:"banana"}),t.createElement("label",{htmlFor:"banana",className:"next-radio-label"},"Banana")," ",t.createElement(e,{id:"apple2",label:"Apple",className:"testClassname"}));return t.createElement(c,null,a)}});const u=e.Group,i=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class m extends t.Component{constructor(e){super(e),this.state={value1:"apple",value2:"apple",value3:""},this.onNestChange=this.onNestChange.bind(this),this.onSmallChange=this.onSmallChange.bind(this),this.onMediumChange=this.onMediumChange.bind(this)}onSmallChange(e){this.setState({value1:e})}onMediumChange(e){this.setState({value2:e})}onNestChange(e){this.setState({value3:e})}render(){return t.createElement("div",null,t.createElement("h4",null,"Small size"),t.createElement(u,{dataSource:i,shape:"button",size:"small",value:this.state.value1,onChange:this.onSmallChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Medium size (default)"),t.createElement(u,{dataSource:i,shape:"button",size:"medium",value:this.state.value2,onChange:this.onMediumChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Large size"),t.createElement(u,{shape:"button",size:"large",value:this.state.value3,onChange:this.onNestChange},t.createElement(e,{id:"banana",value:"banana"},"Banana"),t.createElement(e,{id:"watermelon",value:"watermelon"},"Watermelon"),t.createElement(e,{id:"peach",value:"peach"},"Peach")),t.createElement("br",null),t.createElement("br",null),t.createElement("h4",null,"Disabled and Selected-Disabled status"),t.createElement(u,{shape:"button",value:"banana",onChange:this.onNestChange},t.createElement(e,{id:"peach",disabled:!0,value:"peach"},"Peach"),t.createElement(e,{id:"banana",disabled:!0,value:"banana"},"Banana")))}}const h=n.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(m,null);return t.createElement(h,null,e)}});const p=e.Group,E=[{value:"appale",label:"Appale"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class b extends t.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return t.createElement("div",null,"normal:"," ",t.createElement(p,{dataSource:E,value:this.state.value,onChange:this.onChange}),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),"disabled:"," ",t.createElement(p,{disabled:!0,dataSource:E,value:this.state.value,onChange:this.onChange}))}}const v=n.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(b,null);return t.createElement(v,null,e)}});const C="normal",_="button",S="hoz",f="ver";class y extends t.Component{constructor(){super(...arguments),this.state={shape:C,itemDirection:S},this.onShapeChange=e=>{this.setState({shape:e})},this.onItemDirectionChange=e=>{this.setState({itemDirection:e})}}render(){return t.createElement("div",null,t.createElement("h5",null,"Choose a shape"),t.createElement("div",null,t.createElement(e.Group,{shape:"button",value:this.state.shape,onChange:this.onShapeChange},t.createElement(e,{value:C},"Normal"),t.createElement(e,{value:_},"Button"))),t.createElement("h5",null,"Choose an align-type of the item"),t.createElement("div",null,t.createElement(e.Group,{shape:"button",value:this.state.itemDirection,onChange:this.onItemDirectionChange},t.createElement(e,{value:S},"Horizon"),t.createElement(e,{value:f,disabled:this.state.shape===_},"Vertical"))),t.createElement("div",{className:"rendered-container"},t.createElement("h3",null,"Rendered Result"),t.createElement(e.Group,{shape:this.state.shape,itemDirection:this.state.itemDirection},t.createElement(e,{value:"react"},"React"),t.createElement(e,{value:"vue"},"Vue"),t.createElement(e,{value:"angular"},"Angular"))))}}const k=n.div`
  .rendered-container {
    margin: 32px 0 0;
    padding: 0 24px 24px;
    border: 3px dashed #aaa;
    border-radius: 11px;
  }
`;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(y,null);return t.createElement(k,null,e)}});const{Row:x,Col:j}=a,M=e.Group;class O extends t.Component{constructor(e){super(e),this.state={value:"orange",other:0},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return t.createElement("div",null,t.createElement("h4",null,"Grid Layout"),t.createElement(M,{onChange:this.onChange,style:{width:"1000px"}},t.createElement(x,null,t.createElement(j,{span:"8"},t.createElement(e,{value:"apple1",onClick:this.onClick},"Apple")),t.createElement(j,{span:"8"},t.createElement(e,{value:"pear1",onClick:this.onClick},"Pear")),t.createElement(j,{span:"8"},t.createElement(e,{value:"banana1",onClick:this.onClick},"Banana"))),t.createElement(x,null,t.createElement(j,{span:"8"},t.createElement(e,{value:"peach",onClick:this.onClick},"Peach")),t.createElement(j,{span:"8"},t.createElement(e,{value:"watermelon",onClick:this.onClick},"Watermelon")),t.createElement(j,{span:"8"},t.createElement(e,{value:"strawberry",onClick:this.onClick},"Strawberry"))),t.createElement(x,null,"Just simple context")))}}const G=n.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(O,null);return t.createElement(G,null,e)}});const D=e.Group;class N extends t.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return t.createElement("div",null,t.createElement("label",{id:"groupId"},"Choose fruit"),t.createElement("br",null),t.createElement(D,{value:this.state.value,onChange:this.onChange,"aria-labelledby":"groupId"},t.createElement(e,{id:"apple",value:"apple"},"Apple"),t.createElement(e,{id:"watermelon",value:"watermelon"},"Watermelon"),t.createElement(e,{id:"orange",value:"orange"},"Orange")))}}const A=n.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(N,null);return t.createElement(A,null,e)}});const T=e.Group,W=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear",disabled:!0},{value:"orange",label:"Orange"}],B=()=>t.createElement("div",null,t.createElement(T,{dataSource:W,defaultValue:"apple"}));const R=n.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(B,null);return t.createElement(R,null,e)}});const L={};L._accessibility=o,L._basic=s,L._button=d,L._control=g,L._group=z,L._useWithGrid=w,L._nest=P,L._uncontrol=I;export default L;
