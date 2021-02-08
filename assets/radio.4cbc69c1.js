import{r as e,R as t,a6 as a}from"./index.9ecd65a8.js";import{q as n}from"./styled-components.browser.esm.fe3a3df0.js";const l=n.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement("h4",null,"Without Label"),e.createElement(t,{defaultChecked:!0})," ",e.createElement(t,{checked:!0})," ",e.createElement(t,{disabled:!0})," ",e.createElement(t,{checked:!0,disabled:!0})," ",e.createElement(t,null),e.createElement("br",null),e.createElement("h4",null,"With Label"),e.createElement(t,{id:"apple"},"Apple")," ",e.createElement(t,{id:"banana"}),e.createElement("label",{htmlFor:"banana",className:"next-radio-label"},"Banana")," ",e.createElement(t,{id:"apple2",label:"Apple",className:"testClassname"}));return e.createElement(l,null,a)}});const o=t.Group,c=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class s extends e.Component{constructor(e){super(e),this.state={value1:"apple",value2:"apple",value3:""},this.onNestChange=this.onNestChange.bind(this),this.onSmallChange=this.onSmallChange.bind(this),this.onMediumChange=this.onMediumChange.bind(this)}onSmallChange(e){this.setState({value1:e})}onMediumChange(e){this.setState({value2:e})}onNestChange(e){this.setState({value3:e})}render(){return e.createElement("div",null,e.createElement("h4",null,"Small size"),e.createElement(o,{dataSource:c,shape:"button",size:"small",value:this.state.value1,onChange:this.onSmallChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("h4",null,"Medium size (default)"),e.createElement(o,{dataSource:c,shape:"button",size:"medium",value:this.state.value2,onChange:this.onMediumChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("h4",null,"Large size"),e.createElement(o,{shape:"button",size:"large",value:this.state.value3,onChange:this.onNestChange},e.createElement(t,{id:"banana",value:"banana"},"Banana"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"peach",value:"peach"},"Peach")),e.createElement("br",null),e.createElement("br",null),e.createElement("h4",null,"Disabled and Selected-Disabled status"),e.createElement(o,{shape:"button",value:"banana",onChange:this.onNestChange},e.createElement(t,{id:"peach",disabled:!0,value:"peach"},"Peach"),e.createElement(t,{id:"banana",disabled:!0,value:"banana"},"Banana")))}}const u=n.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(u,null,t)}});const m="normal",h="button",d="hoz",p="ver";class E extends e.Component{constructor(){super(...arguments),this.state={shape:m,itemDirection:d},this.onShapeChange=e=>{this.setState({shape:e})},this.onItemDirectionChange=e=>{this.setState({itemDirection:e})}}render(){return e.createElement("div",null,e.createElement("h5",null,"Choose a shape"),e.createElement("div",null,e.createElement(t.Group,{shape:"button",value:this.state.shape,onChange:this.onShapeChange},e.createElement(t,{value:m},"Normal"),e.createElement(t,{value:h},"Button"))),e.createElement("h5",null,"Choose an align-type of the item"),e.createElement("div",null,e.createElement(t.Group,{shape:"button",value:this.state.itemDirection,onChange:this.onItemDirectionChange},e.createElement(t,{value:d},"Horizon"),e.createElement(t,{value:p,disabled:this.state.shape===h},"Vertical"))),e.createElement("div",{className:"rendered-container"},e.createElement("h3",null,"Rendered Result"),e.createElement(t.Group,{shape:this.state.shape,itemDirection:this.state.itemDirection},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular"))))}}const v=n.div`
  .rendered-container {
    margin: 32px 0 0;
    padding: 0 24px 24px;
    border: 3px dashed #aaa;
    border-radius: 11px;
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(v,null,t)}});const g=t.Group;class C extends e.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return e.createElement("div",null,e.createElement("label",{id:"groupId"},"Choose fruit"),e.createElement("br",null),e.createElement(g,{value:this.state.value,onChange:this.onChange,"aria-labelledby":"groupId"},e.createElement(t,{id:"apple",value:"apple"},"Apple"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"orange",value:"orange"},"Orange")))}}const _=n.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(_,null,t)}});const{Row:f,Col:y}=a,k=t.Group;class z extends e.Component{constructor(e){super(e),this.state={value:"orange",other:0},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return e.createElement("div",null,e.createElement("h4",null,"Grid Layout"),e.createElement(k,{onChange:this.onChange,style:{width:"1000px"}},e.createElement(f,null,e.createElement(y,{span:"8"},e.createElement(t,{value:"apple1",onClick:this.onClick},"Apple")),e.createElement(y,{span:"8"},e.createElement(t,{value:"pear1",onClick:this.onClick},"Pear")),e.createElement(y,{span:"8"},e.createElement(t,{value:"banana1",onClick:this.onClick},"Banana"))),e.createElement(f,null,e.createElement(y,{span:"8"},e.createElement(t,{value:"peach",onClick:this.onClick},"Peach")),e.createElement(y,{span:"8"},e.createElement(t,{value:"watermelon",onClick:this.onClick},"Watermelon")),e.createElement(y,{span:"8"},e.createElement(t,{value:"strawberry",onClick:this.onClick},"Strawberry"))),e.createElement(f,null,"Just simple context")))}}const x=n.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(x,null,t)}});const M=t.Group,O=[{value:"appale",label:"Appale"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class G extends e.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return e.createElement("div",null,"normal:"," ",e.createElement(M,{dataSource:O,value:this.state.value,onChange:this.onChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),"disabled:"," ",e.createElement(M,{disabled:!0,dataSource:O,value:this.state.value,onChange:this.onChange}))}}const w=n.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(G,null);return e.createElement(w,null,t)}});const N=t.Group,A=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear",disabled:!0},{value:"orange",label:"Orange"}],P=()=>e.createElement("div",null,e.createElement(N,{dataSource:A,defaultValue:"apple"}));const T=n.div``;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(T,null,t)}});const B=t.Group;const R=n.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement("span",{id:"radio-a11y"},"Programming language ："),e.createElement(B,{"aria-labelledby":"radio-a11y"},e.createElement(t,{id:"python",value:"python"},"python"),e.createElement(t,{id:"java",value:"java"},"java"),e.createElement(t,{id:"c",value:"c"},"c")));return e.createElement(R,null,a)}});const L={};L._basic=r,L._button=i,L._group=b,L._nest=S,L._useWithGrid=j,L._control=D,L._uncontrol=W,L._accessibility=I;export default L;
