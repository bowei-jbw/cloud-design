import{r as e,S as t,D as l,B as n}from"./index.16a07d60.js";import{q as r}from"./styled-components.browser.esm.d6068967.js";const o=r.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{key:"3",placeholder:"Please enter the search content",onSearch:e=>console.log(e),searchText:e.exports.createElement("span",null,"search"),style:{width:"400px"}}));return e.exports.createElement(o,null,l)}});function s(e){console.log(e)}const c=()=>[e.exports.createElement("p",{key:"1"},"simple"),e.exports.createElement(t,{key:"2",shape:"simple",hasClear:!0,onSearch:s,style:{width:"400px"}}),e.exports.createElement("p",{key:"3"},"default"),e.exports.createElement(t,{key:"4",onSearch:s,style:{width:"400px"}}),e.exports.createElement("p",{key:"5"},"custom text "),e.exports.createElement(t,{key:"6",searchText:"search",onSearch:s,style:{width:"400px"}}),e.exports.createElement("p",{key:"7"},"custom text widthout icon"),e.exports.createElement(t,{key:"8",hasIcon:!1,searchText:e.exports.createElement("span",{style:{color:"blue"}},"search"),onSearch:s,style:{width:"400px"}})];const i=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(i,null,t)}});const p=[{label:"Recent",value:"Recent"},{label:"dress",value:"dress"},{label:"sunglasses",value:"sunglasses"},{label:"t-shirt",value:"t-shirt"}];class h extends e.exports.Component{onSearch(e,t){console.log("onSearch",e,t)}onChange(e,t,l){console.log("onChange",e,t,l),this.setState({value:e})}render(){return e.exports.createElement("div",null,"auto highlight first item",e.exports.createElement("br",null),e.exports.createElement(t,{dataSource:p,onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this)}),e.exports.createElement("br",null),e.exports.createElement("br",null),"no default highlight item, should use UP/DOWN",e.exports.createElement("br",null),e.exports.createElement(t,{autoHighlightFirstItem:!1,dataSource:p,onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this)}))}}const d=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(h,null);return e.exports.createElement(d,null,t)}});const x=[{label:"Option 1",value:"Option 1 Value",index:"1"},{label:"Option 2",value:"Option 2 Value",index:"2"},{label:"Option 3",value:"Option 3 Value",index:"3"},{label:"Option 4",value:"Option 4 Value",index:"4"}];class b extends e.exports.Component{constructor(e){super(e),this.state={visible:!1,value:"111222",menuData:x},this.onVisibleChange=this.onVisibleChange.bind(this),this.onSearch=this.onSearch.bind(this),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this)}renderMenu(){const t=this.state.menuData;return e.exports.createElement(l,{onSelect:this.onSelect.bind(this),rtl:!0,className:"diy-menu",selectMode:"single"},e.exports.createElement(l.Group,{label:"Recent",key:"xxx"},t.map((t=>e.exports.createElement(l.Item,{key:t.value},t.label,e.exports.createElement(n,{className:"diy-menu-button",onClick:this.onDelete.bind(this,t.index),text:!0},"Delete"))))))}onSearch(e){console.log(e)}onChange(e){this.setState({visible:e.length>0,value:e})}onSelect(e){this.setState({visible:!1,value:e[0]})}onDelete(e,t){t.stopPropagation();const l=this.state.menuData,n=[];l.forEach((function(t){t.index!==e&&n.push(t)})),this.setState({menuData:n})}onFocus(){this.setState({visible:!0})}onVisibleChange(){this.setState({visible:!1})}render(){const{visible:l,value:n}=this.state;return e.exports.createElement("div",{style:{width:700}},e.exports.createElement(t,{onVisibleChange:this.onVisibleChange,popupContent:this.renderMenu(),visible:l,value:n,onSearch:this.onSearch,onChange:this.onChange,onFocus:this.onFocus}))}}const g=r.div`
  .diy-menu {
    /*width: 275px*/
  }

  .diy-menu .next-menu-item a {
    display: none;
    float: right;
    cursor: pointer;
  }
  .diy-menu .next-menu-item:hover a {
    display: inline-block;
  }
  .diy-menu .diy-menu-button {
    float: right;
  }
  .diy-menu[dir='rtl'] .diy-menu-button {
    float: left;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(b,null);return e.exports.createElement(g,null,t)}});class v extends e.exports.Component{constructor(e){super(e),this.state={filter:[{label:"Products",value:"Products"},{label:"Products1",value:"Products1"},{label:"Products2",value:"Products2"},{label:"Products3",value:"Products3"},{label:"Products4",value:"Products4"},{label:"Products5",value:"Products5"},{label:"Products6",value:"Products6"},{label:"Products7",value:"Products7"},{label:"Products8",value:"Products8"},{label:"Products9",value:"Products9"},{label:"Products10",value:"Products10"},{label:"Suppliers",value:"Suppliers"}],value:""}}onSearch(e,t){console.log(e,t)}onChange(e){this.setState({value:e})}onFilterChange(e){console.log(e)}render(){return e.exports.createElement("div",null,e.exports.createElement(t,{onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this),filterProps:{autoWidth:!1},defaultFilterValue:"Suppliers",filter:this.state.filter,onFilterChange:this.onFilterChange.bind(this)}))}}const y=r.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(v,null);return e.exports.createElement(y,null,t)}});const f=r.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{size:"large",defaultValue:"large",searchText:"Search",placeholder:"What are you looking for..."}),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(t,{size:"medium",defaultValue:"medium",searchText:"Search",placeholder:"What are you looking for..."}));return e.exports.createElement(f,null,l)}});const C=r.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement("h2",null,"Normal"),e.exports.createElement(t,{type:"primary",placeholder:"primary"}),e.exports.createElement("br",null)," ",e.exports.createElement("br",null),e.exports.createElement(t,{type:"secondary",placeholder:"Secondary"}),e.exports.createElement("br",null)," ",e.exports.createElement("br",null),e.exports.createElement(t,{type:"normal",placeholder:"normal"}),e.exports.createElement("br",null)," ",e.exports.createElement("br",null),e.exports.createElement("div",{style:{background:"#333",padding:20}},e.exports.createElement(t,{type:"dark",placeholder:"dark"})),e.exports.createElement("h2",null,"Simple"),e.exports.createElement(t,{type:"normal",shape:"simple",placeholder:"normal"}),e.exports.createElement("br",null)," ",e.exports.createElement("br",null),e.exports.createElement("div",{style:{background:"#333",padding:20}},e.exports.createElement(t,{shape:"simple",type:"dark",placeholder:"dark"})));return e.exports.createElement(C,null,l)}});const k={};k._accessibility=a,k._base=u,k._combobox=m,k._custom=E,k._filter=S,k._size=_,k._type=P;export default k;
