var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=Object.assign;import{r as a,B as o,al as r,U as s}from"./index.54491fbe.js";import{q as c}from"./styled-components.browser.esm.6105e56a.js";import{T as u}from"./transfer.315aadd2.js";const d=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`});return e})(),h={items:"项",item:"项",moveAll:"移动全部",searchPlaceholder:"请输入",moveToLeft:"撤销选中元素",moveToRight:"提交选中元素"};class i extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{id:"a11y-transfer",defaultValue:["2"],dataSource:d,defaultLeftChecked:["1"],locale:h,onChange:this.handleChange,titles:["Title","Title"]})}}const m=c.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(i,null);return a.createElement(m,null,e)}});const f=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class b extends a.Component{constructor(e){super(e),this.state={value:["3"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l),this.setState({value:e})}render(){return a.createElement(u,{value:this.state.value,dataSource:f,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Title","Title"]})}}const p=c.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(b,null);return a.createElement(p,null,e)}});const S=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class v extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{defaultValue:["3"],dataSource:S,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Title","Title"]})}}const _=c.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(v,null);return a.createElement(_,null,e)}});const E=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:t%3==0?`content${t}contentcontentcontentcontentcontent`:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class T extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{defaultValue:["3"],dataSource:E,listStyle:{width:"200px",height:"192px"},defaultLeftChecked:["1"],onChange:this.handleChange,titles:[a.createElement(o,{key:"left",type:"primary"},"Source"),"Target"],operations:[">>","<<"]})}}const w=c.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(T,null);return a.createElement(w,null,e)}});const k=r.Node,$=[{label:"Form",key:"2",value:"2",children:[{label:"Input",key:"4",value:"4"},{label:"Field",key:"7",value:"7"},{label:"Select",key:"5",value:"5"}]},{label:"Display",key:"3",value:"3",children:[{label:"Table",key:"6",value:"6"}]},{label:"Data",key:"8",value:"8"}],j=[];!function e(t=[]){t.forEach((t=>{j.push(t),e(t.children)}))}($);class O extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this),this.state={selected:[]}}handleChange(e,t,l){this.setState({selected:e})}onCheck(e,t){}getTreeDataSource(o=[],r){return o.map((o=>{var{children:s}=o,c=((n,a)=>{var o={};for(var r in n)e.call(n,r)&&a.indexOf(r)<0&&(o[r]=n[r]);if(null!=n&&t)for(var r of t(n))a.indexOf(r)<0&&l.call(n,r)&&(o[r]=n[r]);return o})(o,["children"]);return a.createElement(k,n(n({},c),{disabled:c.disabled||r.includes(c.value),key:c.value}),this.getTreeDataSource(s,r))}))}render(){const{onChange:e}=this.props,{selected:t}=this.state;return a.createElement(u,{dataSource:j,listStyle:{width:"200px",height:"192px"},onChange:this.handleChange,titles:[a.createElement(o,{key:"left",type:"primary"},"Source"),"Target"]},(({position:e,onChange:l,value:n})=>{if("left"===e)return a.createElement(r,{checkable:!0,editable:!0,style:{padding:"10px"},checkedKeys:n,onCheck:(t,n)=>{const a=n.checkedNodes.map((e=>e.props.value));l(e,a)}},this.getTreeDataSource($,t))}))}}const M=c.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(O,null);return a.createElement(M,null,e)}});const R=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class K extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{mode:"simple",defaultValue:["3"],dataSource:R,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Simple Mode","Simple Mode"]})}}const z=c.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(K,null);return a.createElement(z,null,e)}});const V=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class I extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{showSearch:!0,defaultValue:["3"],dataSource:V,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Searchable","Searchable"]})}}const N=c.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(I,null);return a.createElement(N,null,e)}});const A=(()=>{const e=[];for(let t=0;t<1e3;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class F extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{mode:"simple",useVirtual:!0,defaultValue:["3"],dataSource:A,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Simple Mode","Simple Mode"]})}}const q=c.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(F,null);return a.createElement(q,null,e)}});const Q=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class U extends a.Component{constructor(e){super(e),this.handleSort=this.handleSort.bind(this)}handleSort(e,t){console.log(e,t)}render(){return a.createElement(u,{sortable:!0,defaultValue:["3"],dataSource:Q,onSort:this.handleSort,titles:["Sortable","Sortable"]})}}const G=c.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(U,null);return a.createElement(G,null,e)}});const J=((e,t)=>{const l=[];for(let n=e;n<t;n++)l.push({label:`Quotation Nano ${3+e}`,value:`${100306660940+n}`});return l})(0,3),W=e=>e.map((e=>({label:e.label,id:e.value}))),X=W(J),Y=(e,t,l)=>a.createElement("a",{href:"javascript:;"},"Remove(",l.id,")");class Z extends a.Component{constructor(){super(...arguments),this.state={selectedValue:[],leftTableDataSource:X,rightTableDataSource:[],rselectedRowKeys:[],lselectedRowKeys:[]},this.handleChange=(e,t,l)=>{console.log("handleChange",e,t,l),this.setState({leftTableDataSource:W(l.leftData),rightTableDataSource:W(t),rselectedRowKeys:[],lselectedRowKeys:[]})}}render(){const{selectedValue:e,leftTableDataSource:t,rightTableDataSource:l,rselectedRowKeys:n,lselectedRowKeys:o}=this.state;return a.createElement(u,{dataSource:J,titles:["Source","Target"],onChange:this.handleChange,showCheckAll:!1,className:"table-transfer-demo"},(({position:e,onChange:r,value:c,dataSource:u})=>"left"===e?a.createElement(s,{dataSource:t,rowSelection:{onChange:(t,l)=>{console.log(t,l),this.setState({lselectedRowKeys:t},(()=>{r(e,t)}))},selectedRowKeys:o}},a.createElement(s.Column,{title:"Label",dataIndex:"label",width:150}),a.createElement(s.Column,{title:"Id",dataIndex:"id",width:150}),a.createElement(s.Column,{cell:Y,width:200})):a.createElement(s,{dataSource:l,rowSelection:{onChange:(t,l)=>{console.log(t,l),this.setState({rselectedRowKeys:t},(()=>{r(e,t)}))},selectedRowKeys:n}},a.createElement(s.Column,{title:"Label",dataIndex:"label",width:150}))))}}const ee=c.div`
  .table-transfer-demo.next-transfer .next-transfer-panel-list {
    width: auto;
  }
`;var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(Z,null);return a.createElement(ee,null,e)}});const le={};le._accessibility=g,le._control=C,le._basic=y,le._custom=x,le["_custom-panel"]=D,le._simple=L,le._search=P,le["_virtual-list"]=B,le._sortable=H,le["_table-transfer"]=te;export default le;
