var e=Object.assign;import{r as t,ak as l,b as a}from"./index.9ecd65a8.js";import{q as n}from"./styled-components.browser.esm.fe3a3df0.js";const{Group:r,Closeable:c}=l,m=e=>(console.log(`close from ${e}`),!1);class o extends t.Component{renderTagList(e){return[t.createElement(c,{key:"tag-1",type:e.type,size:"large"},e.type),t.createElement(c,{key:"tag-1",type:e.type},e.type),t.createElement(c,{key:"tag-1",type:e.type,size:"small"},e.type),t.createElement(c,{key:"tag-2",type:e.type,disabled:!0},e.type," "," disabled ")]}renderCloseAreaTags(){return["tag","tail"].reduce(((e,l)=>e.concat([t.createElement(c,{key:`tag-${l}-1`,closeArea:l},"closeArea ",l),t.createElement(c,{key:`tag-${l}-2`,type:"primary",closeArea:l},"closeArea ",l)])),[])}render(){return t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"type: 'normal'"),t.createElement(r,null,this.renderTagList({type:"normal"})),t.createElement("h4",null,"type: 'primary'"),t.createElement(r,null,this.renderTagList({type:"primary"})),t.createElement("h4",null,"closeArea: ['tag', 'tail']"),t.createElement(r,null,this.renderCloseAreaTags()),t.createElement("h4",null,"close handler"),t.createElement(r,null,t.createElement(c,{onClose:()=>!0}," onClose allow close"),t.createElement(c,{onClose:()=>!1}," ","onClose prevent close"),t.createElement(c,{onClose:m}," onClose from "),t.createElement(c,{afterClose:()=>console.log("after close")},"after Close")),t.createElement("h4",null,"closeable link tag"),t.createElement(r,null,t.createElement(c,{type:"primary"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"Primary Link Tag")),t.createElement(c,{type:"normal"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"normal Link Tag"))))}}const s=n.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(o,null);return t.createElement(s,null,e)}});const{Group:u}=l;const g=n.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"large size"),t.createElement(u,null,t.createElement(l,{type:"normal",size:"large"},"Normal large Tag"),t.createElement(l,{type:"primary",size:"large"},"Primary large Tag"),t.createElement(l,{size:"large"},t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"medium(default) size"),t.createElement(u,null,t.createElement(l,{type:"normal",size:"medium"},"Normal Tag"),t.createElement(l,{type:"primary"},"Primary Tag"),t.createElement(l,null,t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"small size"),t.createElement(u,null,t.createElement(l,{type:"normal",size:"small"},"Normal Small Tag"),t.createElement(l,{type:"primary",size:"small"},"Primary Small Tag"),t.createElement(l,{size:"small"},t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"link tag"),t.createElement(u,null,t.createElement(l,{type:"normal"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"normal Link Tag")),t.createElement(l,{type:"primary"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"primary Link Tag")),t.createElement(l,{size:"small"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},t.createElement(a,{type:"smile"})," Link Tag With Icon"))));return t.createElement(g,null,e)}});const{Group:p}=l,y=["全部","衣服","手机","化妆品"];class d extends t.Component{constructor(e){super(e),this.state={name:""},this.onclick=this.onclick.bind(this)}onclick(e){this.setState({name:e.item})}render(){return t.createElement("div",null,t.createElement(p,null,y.map((e=>t.createElement(l,{type:"normal",key:e,size:"medium",onClick:()=>this.onclick({item:e})},e)))),this.state.name)}}const h=n.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(d,null);return t.createElement(h,null,e)}});const{Group:_}=l,f=["blue","green","orange","red","turquoise","yellow"],k=["#f50","#2db7f5","#87d068","#108ee9"];const T=n.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"presets"),t.createElement(_,null,f.map((e=>t.createElement(l,{key:`p_n_${e}`,size:"large",type:"normal",color:e},"标签文字")))),t.createElement(_,null,f.map((e=>t.createElement(l,{key:`p_n_${e}`,type:"normal",color:e},"标签文字")))),t.createElement(_,null,f.map((e=>t.createElement(l,{key:`p_p_${e}`,type:"primary",color:e},e)))),t.createElement("h4",null,"custom colors"),t.createElement(_,null,k.map((e=>t.createElement(l,{key:`c_${e}`,color:e},e)))));return t.createElement(T,null,e)}});const{Group:S,Selectable:w}=l,C=["selectable tag","I like orange","small tag","disabled","disabled & checked"];class z extends t.Component{constructor(){super(...arguments),this.state={value:["I like orange","disabled & checked"],singleValue:"selectable tag"}}handleChange(e,t){const{value:l}=this.state,a=t?[...l,e]:l.filter((t=>t!==e));this.setState({value:a})}handleChangeSingle(e,t){const{singleValue:l}=this.state,a=t?e:"";this.setState({singleValue:a})}renderTagList(l){const{value:a}=this.state;return C.map(((n,r)=>t.createElement(w,e({key:n,checked:a.indexOf(n)>-1,disabled:r>2,size:2===r?"small":void 0,onChange:this.handleChange.bind(this,n)},l),n)))}renderTagListSingle(l){const{singleValue:a}=this.state;return C.map(((n,r)=>t.createElement(w,e({key:n,checked:a===n,disabled:r>2,size:2===r?"large":void 0,onChange:this.handleChangeSingle.bind(this,n)},l),n)))}render(){return t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"type: 'default'"),t.createElement(S,null,this.renderTagList({type:"normal"})),t.createElement("h4",null,"type: 'primary'"),t.createElement(S,null,this.renderTagList({type:"primary"})),t.createElement("h4",null,"Controlled Tags: Only one selected at a time"),t.createElement(S,null,this.renderTagListSingle({type:"normal"})))}}const L=n.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(z,null);return t.createElement(L,null,e)}});const{Group:P,Colored:M,ColoredGroup:j}=l;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"Use single Tag"),t.createElement("div",null,t.createElement(M,{type:"light-steel-blue"},"Light Steel Blue"),t.createElement(M,{type:"plum"},"Plum"),t.createElement(M,{type:"misty-rose"},"Misty Rose"),t.createElement(M,{type:"light-goldenrod-yellow"},"Light Goldenrod Yellow"),t.createElement(M,{type:"pale-green"},"Pale Green"),t.createElement(M,{type:"silver"},"Silver"),t.createElement(M,{type:"gray"},"Gray")),t.createElement("h4",null,"Use normal group"),t.createElement(P,null,t.createElement(M,{type:"light-steel-blue"},"Light Steel Blue"),t.createElement(M,{type:"plum"},"Plum"),t.createElement(M,{type:"misty-rose"},"Misty Rose"),t.createElement(M,{type:"light-goldenrod-yellow"},"Light Goldenrod Yellow"),t.createElement(M,{type:"pale-green"},"Pale Green")),t.createElement("h4",null,"Use colored group"),t.createElement(j,null,t.createElement(l,null,"Light Steel Blue"),t.createElement(l,null,"Plum"),t.createElement(l,null,"Misty Rose"),t.createElement(l,null,"Light Goldenrod Yellow"),t.createElement(l,null,"Pale Green"),t.createElement(M,null,"Light Steel Blue"),t.createElement(M,null,"Plum"),t.createElement(M,null,"Misty Rose")))});const N={};N._closable=i,N._basic=E,N._accessibility=b,N["_colorful-tag"]=v,N._selectable=G,N["_wind-colored-tag"]=O;export default N;
