var e=Object.assign;import{r as t,M as l,al as n,b as a,ag as c}from"./index.e23bfa0a.js";import{q as o}from"./styled-components.browser.esm.9bbc5b35.js";const r=[{key:"0-0",label:"0-0",children:[{key:"0-0-0",label:"0-0-0",children:[{key:"0-0-0-0",label:"0-0-0-0",children:[{key:"0-0-0-0-0",label:"0-0-0-0-0"}]},{key:"0-0-0-1",label:"0-0-0-1"}]},{key:"0-0-1",label:"0-0-1",children:[{key:"0-0-1-0",label:"0-0-1-0"},{key:"0-0-1-1",label:"0-0-1-1"}]}]}];class s extends t.Component{constructor(e){super(e),this.state={selectedKeys:[],multiple:!1},this.handleSelect=this.handleSelect.bind(this),this.handleCheck=this.handleCheck.bind(this)}handleSelect(e,t){console.log(e,t),this.setState({selectedKeys:e})}handleCheck(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}render(){const{multiple:e,selectedKeys:a}=this.state;return t.createElement("div",{className:"control-select-demo"},t.createElement("label",{className:"multiple-check"},t.createElement(l,{checked:e,onChange:this.handleCheck}),t.createElement("span",{className:"multiple-text"},"Enable multiple")),t.createElement(n,{defaultExpandAll:!0,multiple:e,selectedKeys:a,onSelect:this.handleSelect,dataSource:r}))}}const i=o.div`
  .control-select-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-select-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(s,null);return t.createElement(i,null,e)}});const h=[{key:"0-0",label:"0-0",children:[{key:"0-0-0",label:"0-0-0",children:[{key:"0-0-0-0",label:"0-0-0-0",children:[{key:"0-0-0-0-0",label:"0-0-0-0-0"}]},{key:"0-0-0-1",label:"0-0-0-1"}]},{key:"0-0-1",label:"0-0-1",children:[{key:"0-0-1-0",label:"0-0-1-0"},{key:"0-0-1-1",label:"0-0-1-1"}]}]}];class u extends t.Component{constructor(e){super(e),this.state={checkedKeys:[],checkStrictly:!1},this.handleCheck=this.handleCheck.bind(this),this.handleCheckStrictly=this.handleCheckStrictly.bind(this)}handleCheck(e,t){console.log(e,t),this.setState({checkedKeys:e})}handleCheckStrictly(){this.setState({checkStrictly:!this.state.checkStrictly,checkedKeys:[]})}render(){const{checkedKeys:e,checkStrictly:a}=this.state;return t.createElement("div",{className:"control-check-demo"},t.createElement("label",{className:"strictly-check"},t.createElement(l,{checked:a,onChange:this.handleCheckStrictly}),t.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),t.createElement(n,{defaultExpandAll:!0,checkable:!0,checkStrictly:a,checkedKeys:e,onCheck:this.handleCheck,dataSource:h}))}}const m=o.div`
  .control-check-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-check-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(u,null);return t.createElement(m,null,e)}});const y=Object.freeze([{label:"Component",key:"1",children:[Object.freeze({label:"Form",key:"2",selectable:!1,children:[{label:"Input",key:"4"},{label:"Select",key:"5",disabled:!0}]}),{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}]);class b extends t.Component{onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}onEditFinish(e,t,l){console.log("onEditFinish",e,t,l)}onRightClick(e){console.log("onRightClick",e)}render(){return t.createElement(n,{checkable:!0,editable:!0,defaultExpandedKeys:["2"],defaultCheckedKeys:["2","4","5"],onSelect:this.onSelect,onCheck:this.onCheck,onEditFinish:this.onEditFinish,onRightClick:this.onRightClick,dataSource:y})}}const k=o.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(b,null);return t.createElement(k,null,e)}});const f=n.Node;class g extends t.Component{onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}onEditFinish(e,t,l){console.log("onEditFinish",e,t,l)}onRightClick(e){console.log("onRightClick",e)}render(){return t.createElement(n,{checkable:!0,editable:!0,defaultExpandedKeys:["2"],defaultCheckedKeys:["2","4","5"],onSelect:this.onSelect,onCheck:this.onCheck,onEditFinish:this.onEditFinish,onRightClick:this.onRightClick},t.createElement(f,{key:"1",label:"Component",icon:t.createElement(a,{type:"smile"})},t.createElement(f,{key:"2",label:"Form",selectable:!1,icon:"smile"},t.createElement(f,{key:"4",label:"Input",icon:"smile"}),t.createElement(f,{key:"5",label:"Select",disabled:!0,icon:"cry"})),t.createElement(f,{key:"3",label:"Display",icon:"smile"},t.createElement(f,{key:"6",label:"Table",icon:"smile"}))))}}const S=o.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(g,null);return t.createElement(S,null,e)}});class C extends t.Component{constructor(e){super(e),this.state={data:[{label:"Expand to load",key:"0"},{label:"Expand to load",key:"1"},{label:"Leaf",key:"2",isLeaf:!0}]},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return new Promise((t=>{if(e.props.children)return t();const{eventKey:l,pos:n}=e.props,a=this.getItemByPos(n);setTimeout((()=>{a.children=[{label:"Child Tree",key:`${l}-0`},{label:"Child Tree",key:`${l}-1`}],this.setState({data:[...this.state.data]}),t()}),1e3)}))}getItemByPos(e){return e.split("-").slice(1).reduce(((e,t)=>e.children[t]),{children:this.state.data})}render(){return t.createElement(n,{dataSource:this.state.data,loadData:this.onLoadData})}}const _=o.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(C,null);return t.createElement(_,null,e)}});const K=n.Node;const T=o.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{defaultExpandAll:!0,isNodeBlock:{defaultPaddingLeft:50},defaultSelectedKeys:["1"],style:{width:"300px"}},t.createElement(K,{label:"Component",key:"0"},t.createElement(K,{label:"Form",key:"1",disabled:!0},t.createElement(K,{label:"Select",key:"2"},t.createElement(K,{label:"TreeSelect",key:"3"})),t.createElement(K,{label:"Input",key:"4"})),t.createElement(K,{label:"Display",key:"5"},t.createElement(K,{label:"Card",key:"6"}),t.createElement(K,{label:"Table",key:"7"}))));return t.createElement(T,null,e)}});const j=n.Node;const O=o.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{defaultExpandAll:!0,showLine:!0},t.createElement(j,{label:"Trunk"},t.createElement(j,{label:"Branch"},t.createElement(j,{label:"Branch"},t.createElement(j,{label:"Leaf"})),t.createElement(j,{label:"Leaf"})),t.createElement(j,{label:"Branch"},t.createElement(j,{label:"Leaf"}),t.createElement(j,{label:"Leaf"}))));return t.createElement(O,null,e)}});const F=n.Node,N=[],L=(e,t,l)=>{const n=t||"0",a=l||N,c=[];for(let r=0;r<3;r++){const e=`${n}-${r}`;a.push({label:e,key:e}),r<2&&c.push(e)}if(e<0)return a;const o=e-1;c.forEach(((e,t)=>(a[t].children=[],L(o,e,a[t].children))))};L(1);class M extends t.Component{constructor(e){super(e),this.state={gData:N}}onDrop(e){if(!e.dragNode)return;const t=e.dragNode.props.eventKey,l=e.node.props.eventKey,n=e.dropPosition,a=(e,t,l)=>{e.forEach(((e,n,c)=>e.key===t?l(e,n,c):e.children?a(e.children,t,l):void 0))},c=[...this.state.gData];let o;if(a(c,t,((e,t,l)=>{l.splice(t,1),o=e})),0===e.dropPosition)a(c,l,(e=>{e.children=e.children||[],e.children.push(o)}));else{let e,t;a(c,l,((l,n,a)=>{e=a,t=n})),-1===n?e.splice(t,0,o):e.splice(t+1,0,o)}this.setState({gData:c})}render(){const e=l=>l.map((l=>l.children?t.createElement(F,{key:l.key,label:l.key},e(l.children)):t.createElement(F,{key:l.key,label:l.key})));return t.createElement(n,{draggable:!0,selectable:!1,isLabelBlock:!0,defaultExpandedKeys:["0-0","0-0-0","0-0-0-0"],onDrop:this.onDrop.bind(this)},e(this.state.gData))}}const w=o.div``;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(M,null);return t.createElement(w,null,e)}});function P(e=3,t=5){const l=[];let n=0;const a=(e,l,c)=>{e.forEach(((e,o)=>{e.children=new Array(c).fill(null).map(((t,l)=>{const a=`${e.key}-${l}`;return n++,{key:a,label:a}})),l>0&&a(e.children,l-1,t)}))};return l.push({label:"0-0",key:"0-0"}),a(l,e,t),console.log("node num:",n+1),l}class A extends t.Component{constructor(){super(),this.state={dataSource:[]}}onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}onEditFinish(e,t,l){console.log("onEditFinish",e,t,l)}onRightClick(e){console.log("onRightClick",e)}componentDidMount(){this.setState({dataSource:P()})}render(){const e=this.state.dataSource;return e.length&&t.createElement(n,{checkable:!0,editable:!0,focusable:!0,showLine:!0,useVirtual:!0,animation:!0,style:{maxHeight:"480px",overflow:"auto"},defaultExpandAll:!0,defaultCheckedKeys:["0-0-1","0-0-2"],onSelect:this.onSelect,onCheck:this.onCheck,dataSource:e,onEditFinish:this.onEditFinish,onRightClick:this.onRightClick})}}const B=o.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(A,null);return t.createElement(B,null,e)}});n.Node;const $=t=>t.map((t=>e(e({},t),{key:t.value,children:$(t.children||[])})));class q extends t.Component{constructor(e){super(e),this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:$([e[0]])}))).catch((e=>console.log(e)))}render(){return t.createElement(n,{checkable:!0,renderChildNodes:e=>(e.find((e=>e.props.children&&e.props.children.length)),t.createElement("ul",{role:"group",className:"next-tree-child-tree custom-leaf-tree"},e)),defaultExpandAll:!0,dataSource:this.state.data})}}const H=o.div`
  .custom-leaf-tree {
    padding-left: 20px;
    display: block;
    font-size: 0;
    white-space: normal;
  }
  .custom-leaf-tree .next-tree-switcher {
    display: none;
  }

  .custom-leaf-tree .next-tree-node {
    margin-left: 0 !important;
    margin-right: 8px;
    width: 68px;
    display: inline-block;
  }
`;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(q,null);return t.createElement(H,null,e)}});const W=[{label:"Component",key:"1",children:[{label:"Form",key:"2",children:[{label:"Input",key:"4"},{label:"Select",key:"5"}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];class X extends t.Component{constructor(e){super(e),this.state={expandedKeys:["2"],autoExpandParent:!0},this.matchedKeys=[],this.handleSearch=this.handleSearch.bind(this),this.handleExpand=this.handleExpand.bind(this)}handleSearch(e){if(!(e=e.trim()))return void(this.matchedKeys=null);const t=[],l=n=>n.forEach((n=>{n.label.indexOf(e)>-1&&t.push(n.key),n.children&&n.children.length&&l(n.children)}));l(W),this.setState({expandedKeys:[...t],autoExpandParent:!0}),this.matchedKeys=t}handleExpand(e){this.setState({expandedKeys:e,autoExpandParent:!1})}render(){const{expandedKeys:e,autoExpandParent:l}=this.state;return t.createElement("div",null,t.createElement(c,{shape:"simple",size:"medium",style:{width:"200px",marginBottom:"10px"},onChange:this.handleSearch}),t.createElement(n,{expandedKeys:e,autoExpandParent:l,filterTreeNode:e=>this.matchedKeys&&this.matchedKeys.indexOf(e.props.eventKey)>-1,onExpand:this.handleExpand,dataSource:W}))}}const G=o.div``;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(X,null);return t.createElement(G,null,e)}});const Q={};Q["_control-select"]=d,Q["_control-check"]=p,Q._data=E,Q._basic=x,Q._dynamic=v,Q["_node-block"]=D,Q._line=z,Q._draggable=R,Q["_virtual-tree"]=I,Q["_render-child-nodes"]=V,Q["_search-tree"]=J;export default Q;
