import{r as e,a2 as t,a7 as l,b as a,a6 as n}from"./index.9ecd65a8.js";import{q as s}from"./styled-components.browser.esm.fe3a3df0.js";const r={marginBottom:"15px"};const i=s.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("h4",null,"single slider - from left to right"),e.createElement(t,{defaultValue:30,style:r,hasTip:!1}),e.createElement("h4",null,"single slider - from right to left"),e.createElement(t,{defaultValue:30,style:r,reverse:!0,hasTip:!1}));return e.createElement(i,null,l)}});const c={marginBottom:"15px"};const u=s.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("h4",null,"single slider - from left to right"),e.createElement(t,{defaultValue:30,style:c,hasTip:!1}),e.createElement("h4",null,"single slider - from right to left"),e.createElement(t,{defaultValue:30,style:c,reverse:!0,hasTip:!1}),e.createElement("h4",null,"double slider - from outside to inside"),e.createElement(t,{slider:"double",defaultValue:[20,40],style:c}),e.createElement("h4",null,"double slider - from inside to outside"),e.createElement(t,{slider:"double",defaultValue:[20,40],style:c,reverse:!0}),e.createElement("h4",null,"Disabled"),e.createElement(t,{defaultValue:30,disabled:!0,style:c}),e.createElement("h4",null,"Disabled"),e.createElement(t,{slider:"double",defaultValue:[20,40],disabled:!0,style:c}),e.createElement("h4",null,"tooltipVisible disabled"),e.createElement(t,{disabled:!0,tooltipVisible:!0,defaultValue:60,style:c}),e.createElement("h4",null,"tooltipVisible"),e.createElement(t,{tooltipVisible:!0,defaultValue:60,style:c}),e.createElement("h4",null,"tooltipVisible disabled"),e.createElement(t,{disabled:!0,tooltipVisible:!0,slider:"double",defaultValue:[57,77],style:c}),e.createElement("h4",null,"tooltipVisible"),e.createElement(t,{tooltipVisible:!0,slider:"double",defaultValue:[57,77],style:c}));return e.createElement(u,null,l)}});const d={marginBottom:"15px"},h={marginBottom:"45px"};class p extends e.Component{constructor(e){super(e),this.state={value:[10,300]}}onChange(e){console.log("onChange value:",e),this.setState({value:e})}onProcess(e){console.log("onProcess: ",e)}render(){return e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("h4",null,"fixedWidth basic"),e.createElement(t,{fixedWidth:!0,defaultValue:[20,40],style:d}),e.createElement("h4",null,"fixedWidth basic with tooltipVisible"),e.createElement(t,{tooltipVisible:!0,fixedWidth:!0,defaultValue:[70,90],style:h}),e.createElement(t,{disabled:!0,tooltipVisible:!0,fixedWidth:!0,defaultValue:[70,90],style:d}),e.createElement("h4",null,"fixedWidth with marks"),e.createElement(t,{fixedWidth:!0,step:10,defaultValue:[20,40],marks:10,style:h}),e.createElement(t,{fixedWidth:!0,step:2,defaultValue:[60,80],marks:[0,30,100],style:d,marksPosition:"below"}),e.createElement("h4",null,"fixedWidth with 0.01 step"),e.createElement(t,{fixedWidth:!0,defaultValue:[.6,.7],min:.5,max:1,step:.01}),e.createElement("div",{style:{width:"400px",marginTop:"50px"}},e.createElement("p",null,"range 0 ~ 1024"),e.createElement(t,{fixedWidth:!0,value:this.state.value,onChange:this.onChange.bind(this),onProcess:this.onProcess.bind(this),min:0,max:1024,marks:[0,1024]})))}}const E=s.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(E,null,t)}});const f={marginBottom:"20px",marginTop:"20px"};const b=s.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("p",null,"With minimal and maximal value"),e.createElement(t,{defaultValue:0,marks:[0,100],style:f}),e.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,100],style:f}),e.createElement(t,{defaultValue:30,style:f}),e.createElement("p",null,"Below"),e.createElement(t,{defaultValue:0,marks:[0,100],style:f,marksPosition:"below"}),e.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,100],style:f,marksPosition:"below"}),e.createElement(t,{defaultValue:30,marks:[0,100],style:f,marksPosition:"below"}),e.createElement("p",null,"Equal division"),e.createElement(t,{defaultValue:30,marks:5,style:f}),e.createElement(t,{slider:"double",defaultValue:[20,40],marks:10,style:f}),e.createElement(t,{disabled:!0,slider:"double",defaultValue:[20,40],marks:10,style:f}),e.createElement("p",null,"Free"),e.createElement(t,{defaultValue:30,marks:[0,26,37,100],style:f}),e.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,26,37,100],style:f,hasTip:!1}),e.createElement(t,{defaultValue:30,marks:{0:"0°C",26:"26°C",37:"37°C",100:"100°C"},style:f}));return e.createElement(b,null,l)}});const y={marginBottom:"40px",marginTop:"40px"};const x=s.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("p",null,"Range 0 ~ 1024"),e.createElement(t,{defaultValue:128,min:0,max:1024,marks:[0,1024],style:y}),e.createElement("p",null,"Range 0 ~ 1024，step 128"),e.createElement(t,{defaultValue:512,min:0,max:1024,step:128,marks:[0,1024],style:y}));return e.createElement(x,null,l)}});const _={marginBottom:"15px"};const C=s.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement(t,{defaultValue:30,style:_,hasTip:!1}),e.createElement(t,{defaultValue:30,style:_,reverse:!0,hasTip:!1}),e.createElement(t,{slider:"double",defaultValue:[20,40],style:_}),e.createElement(t,{slider:"double",defaultValue:[20,40],style:_,reverse:!0}),e.createElement(t,{defaultValue:30,disabled:!0,style:_}),e.createElement(t,{defaultValue:30,disabled:!0,style:_,reverse:!0}),e.createElement(t,{slider:"double",defaultValue:[20,40],disabled:!0,style:_}),e.createElement(t,{slider:"double",defaultValue:[20,40],disabled:!0,style:_,reverse:!0}));return e.createElement(C,null,l)}});class k extends e.Component{constructor(e){super(e),this.state={value:128,value2:300,doubleValue:[200,300]}}onChange(e){console.log("onChange value:",e),this.setState({value:e})}onProcess(e){console.log("onProcess: ",e)}onChangeDouble(e){console.log("onChange doubleValue:",e),this.setState({doubleValue:e})}onProcessDouble(e){console.log("onProcess: ",e)}render(){return e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("p",null,"range 0 ~ 1024"),e.createElement("div",{style:{width:"400px",marginTop:"50px"}},e.createElement(t,{value:this.state.value,onChange:this.onChange.bind(this),onProcess:this.onProcess.bind(this),min:0,max:1024,marks:[0,1024]})),e.createElement("p",null,"with value and without onChange"),e.createElement("div",{style:{width:"400px",marginTop:"50px"}},e.createElement(t,{value:this.state.value2,onProcess:this.onProcess.bind(this),min:0,max:1024,marks:[0,1024]})),e.createElement("p",null,"double slider controlled"),e.createElement("div",{style:{width:"400px",marginTop:"50px"}},e.createElement(t,{slider:"double",value:this.state.doubleValue,onChange:this.onChangeDouble.bind(this),onProcess:this.onProcessDouble.bind(this),min:0,max:1024,marks:[0,1024]})))}}const P=s.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(k,null);return e.createElement(P,null,t)}});const{Row:T,Col:I}=n;class W extends e.Component{constructor(e,t){super(e,t),this.state={valueInt:3,valueDec:.05,valueIcon:1,preIconClass:"",afterIconClass:""}}onChangeInt(e){console.log(e),this.setState(Object.assign({},this.state,{valueInt:e}))}onChangeDec(e){this.setState(Object.assign({},this.state,{valueDec:e}))}onIconRangeProcess(e){this.setState(Object.assign({},this.state,{valueIcon:e,preIconClass:e<50?"myicon-highlight":"",afterIconClass:e>=50?"myicon-highlight":""}))}render(){return e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("h2",null,"Used with numberPicker"),e.createElement(T,null,e.createElement(I,{span:"12",style:{marginTop:"10px"}},e.createElement(t,{value:this.state.valueInt,min:0,max:20,step:1,onChange:this.onChangeInt.bind(this)})),e.createElement(I,{span:"12"},e.createElement(l,{value:this.state.valueInt,min:0,max:1024,step:1,onChange:this.onChangeInt.bind(this),style:{marginLeft:"10px"}}))),e.createElement("br",null),e.createElement(T,null,e.createElement(I,{span:"12",style:{marginTop:"10px"}},e.createElement(t,{value:this.state.valueDec,min:0,max:1,step:.01,onChange:this.onChangeDec.bind(this)})),e.createElement(I,{span:"12"},e.createElement(l,{value:this.state.valueDec,min:0,max:1,step:.01,onChange:this.onChangeDec.bind(this),style:{marginLeft:"10px"}}))),e.createElement("h2",null,"Used with Icon"),e.createElement("div",{className:"iconWrapper"},e.createElement(a,{className:`myicon ${this.state.preIconClass}`,type:"cry"}),e.createElement(t,{min:1,max:100,onChange:this.onIconRangeProcess.bind(this),value:this.state.valueIcon}),e.createElement(a,{className:`myicon ${this.state.afterIconClass}`,type:"smile"})))}}const j=s.div`
  .iconWrapper {
    position: relative;
    padding: 0px 40px;
  }

  .iconWrapper .myicon {
    position: absolute;
    top: -3px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 16px;
    color: #ccc;
  }

  .iconWrapper .myicon:first-child {
    left: 0;
  }

  .iconWrapper .myicon:last-child {
    right: 0;
  }

  .myicon.myicon-highlight {
    color: #666;
  }
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(W,null);return e.createElement(j,null,t)}});class O extends e.Component{constructor(e){super(e),this.state={value:128}}onChange(e){console.log("onChange value:",e)}onProcess(e){console.log("onProcess"),this.setState({value:e})}formatter(e){return`$${e}`}render(){return e.createElement("div",{style:{width:"400px",margin:"50px"}},e.createElement("p",null,"Range 0 ~ 1024"),e.createElement("div",{style:{width:"400px",marginTop:"50px"}},e.createElement(t,{defaultValue:256,tipRender:this.formatter.bind(this),value:this.state.value,onChange:this.onChange.bind(this),onProcess:this.onProcess.bind(this),min:0,max:1024,marks:[0,1024]})))}}const z=s.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(O,null);return e.createElement(z,null,t)}});const B={};B._accessibility=o,B._basic=m,B._fixedWidth=g,B._marks=v,B._range=V,B._reverse=w,B._change=S,B._control=D,B._tipRender=M;export default B;
