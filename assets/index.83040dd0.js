import{z as e,n as t,k as a,l as i,m as r,q as n,v as s,R as o,o as l,r as c,P as d,y as u,K as h,d as p,u as v,_ as f}from"./index.16a07d60.js";var m,y,g=t.noop,b=t.bindCtx,k=h.ENTER,w=h.LEFT,N=h.UP,C=h.RIGHT,S=h.DOWN,V=[k,w,N,C,S],E={small:"xs",medium:"small",large:"medium"},R=(y=m=function(e){function t(a){i(this,t);var n=r(this,e.call(this,a));return n.saveRef=function(e,t){n["refs-rating-icon-"+t]=e},n.state={value:"value"in a?a.value:a.defaultValue,hoverValue:0,iconSpace:0,iconSize:0,clicked:!1},n.timer=null,b(n,["handleClick","handleHover","handleLeave","onKeyDown"]),n}return a(t,e),t.currentValue=function(e,t,a,i){var r=a||i;return(r=(r=r>=t?t:r)<=e?e:r)||0},t.getDerivedStateFromProps=function(e,t){var a={};return"value"in e&&(a.value=e.value||0),("disabled"in e||"readOnly"in e||"isPreview"in e||"renderPreview"in e)&&(a.disabled=e.disabled||e.readOnly||e.isPreview&&!("renderPreview"in e)),a},t.prototype.componentDidMount=function(){this.getRenderResult()},t.prototype.componentWillUnmount=function(){this.clearTimer()},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.getRenderResult=function(){var e=this.props.count,t=this.state,a=t.iconSpace,i=t.iconSize,r=this["refs-rating-icon-0"];if(r&&this.underlayNode){var n=r.offsetWidth,s=(this.underlayNode.offsetWidth-e*n)/(e+1);n===i&&s===a||this.setState({iconSpace:s,iconSize:n})}},t.prototype.getValue=function(e){this.getRenderResult();var t=this.props,a=t.allowHalf,i=t.count,r=t.rtl,n=this.state,s=n.iconSpace,o=n.iconSize,l=e.pageX-this.underlayNode.getBoundingClientRect().left,c=Math.floor(l/(s+o)),d=(l-c*(s+o)-s)/o,u=Number(c)+Number(d.toFixed(1));if(u>=i)u=i;else if(a){var h=Math.floor(u);u=r?u-.5>=h?h+1.5:h+1:u-.5>=h?h+1:h+.5}else u=Math.floor(u)+1;return r?i-u+1:u},t.prototype.handleHover=function(e){var t=this;if(!this.state.disabled){var a=this.getValue(e),i=this.props.onHoverChange;a!==this.state.hoverValue&&(this.clearTimer(),this.timer=setTimeout((function(){t.setState({hoverValue:a},(function(){i(a)}))}),0))}},t.prototype.handleLeave=function(){this.state.disabled||(this.clearTimer(),this.setState({hoverValue:0}))},t.prototype.onKeyDown=function(e){if(!this.state.disabled){var t=this.props,a=t.onKeyDown,i=t.count;if(this.state.disabled||V.indexOf(e.keyCode)<0)return!a||a(e);var r=this.state,n=r.hoverValue,s=r.value,o=n;switch(0===o&&(o=s),e.keyCode){case S:case C:o<i?o+=1:o=1,this.handleChecked(o);break;case N:case w:o>1?o-=1:o=i,this.handleChecked(o);break;case k:this.props.onChange(o),this.setState({value:o,hoverValue:o})}return!a||a(e)}},t.prototype.handleChecked=function(e){this.state.disabled||this.setState({hoverValue:e})},t.prototype.handleClick=function(e){var t=this;if(!this.state.disabled){var a=this.getValue(e);a<0||("value"in this.props||this.setState({value:a,clicked:!0}),this.props.onChange(a),setTimeout((function(){t.setState({clicked:!1})}),100))}},t.prototype.getOverlayWidth=function(){var e=this.state,a=e.hoverValue,i=e.iconSpace,r=e.iconSize;if(!i||!r)return"auto";var n=t.currentValue(0,this.props.count,a,this.state.value);return r*n+(Math.floor(n)+1)*i},t.prototype.getInfoLeft=function(){var e=this.state,t=e.value,a=e.hoverValue,i=e.iconSpace,r=e.iconSize,n=a||t,s=Math.ceil(n);return r*(s-1)+s*i},t.prototype.render=function(){for(var e,a,i,r=this,c=this.props,d=c.id,u=c.prefix,h=c.className,v=c.showGrade,f=c.count,m=c.size,y=c.iconType,g=c.strokeMode,b=c.readAs,k=c.rtl,w=c.isPreview,N=c.renderPreview,C=c.locale,S=this.state.disabled,V=n.pickOthers(t.propTypes,this.props),R=this.state,P=R.hoverValue,T=R.clicked,M=[],x=[],z=!!d,O=t.currentValue(0,f,P,this.state.value),H=E[m],D=function(e){var t,a=Math.ceil(O-1)===e,i=s(((t={hover:P>0&&a,clicked:T&&a})[u+"rating-symbol-icon"]=!y,t)),n=y?o.createElement(p,{type:y,size:H,className:i}):o.createElement(p,{type:"favorites-filling",size:H,className:i});M.push(o.createElement("span",{ref:function(t){r.saveRef(t,e)},key:"underlay-"+e,className:u+"rating-icon"},n)),z&&x.push(o.createElement("input",{id:d+"-"+u+"star"+(e+1),key:"input-"+e,className:u+"sr-only","aria-checked":e+1===parseInt(P),checked:e+1===parseInt(P),onChange:r.handleChecked.bind(r,e+1),type:"radio",name:"rating"})),x.push(o.createElement("label",{key:"overlay-"+e,htmlFor:z?d+"-"+u+"star"+(e+1):null,className:u+"rating-icon"},n,z?o.createElement("span",{className:u+"sr-only"},b(e+1)):null))},L=0;L<f;L++)D(L);var G=s([u+"rating",u+"rating-"+m],((e={})[u+"rating-grade-low"]=O<=.4*f,e[u+"rating-grade-high"]=O>.4*f,e[u+"rating-stroke-mode"]=g,e.hover=P>0,e),h),I=s(u+"rating-base",((a={})[u+"rating-base-disabled"]=S,a)),K=s(((i={})[u+"form-preview"]=!0,i[h]=!!h,i)),W={width:this.getOverlayWidth()},F={left:this.getInfoLeft(),display:P?"block":"none"},A=S?{}:{onClick:this.handleClick,onMouseOver:this.handleHover,onMouseMove:this.handleHover,onMouseLeave:this.handleLeave};return k&&(V.dir="rtl"),w&&"renderPreview"in this.props?o.createElement("div",l({id:d},V,{className:K}),N(O,this.props)):o.createElement("div",l({id:d},V,{className:G,onKeyDown:this.onKeyDown,tabIndex:"0",role:"group","aria-label":C.description}),o.createElement("div",l({className:I},A),o.createElement("div",{className:u+"rating-underlay",ref:function(e){return r.underlayNode=e},"aria-hidden":!0},M),o.createElement("div",{className:u+"rating-overlay",style:W},x)),v?o.createElement("div",{className:u+"rating-info",style:F},b(O)):null)},t}(c.exports.Component),m.propTypes={prefix:d.string,defaultValue:d.number,value:d.number,count:d.number,showGrade:d.bool,size:d.oneOf(["small","medium","large"]),allowHalf:d.bool,onChange:d.func,onHoverChange:d.func,disabled:d.bool,readAs:d.func,iconType:d.string,strokeMode:d.bool,className:d.string,id:d.string,rtl:d.bool,locale:d.object,isPreview:d.bool,renderPreview:d.func,readOnly:d.bool},m.defaultProps={prefix:"next-",size:"medium",disabled:!1,readOnly:!1,isPreview:!1,count:5,showGrade:!1,defaultValue:0,readAs:function(e){return e},allowHalf:!1,onChange:g,onHoverChange:g,locale:u.Rating},y);R.displayName="Rating";var P=e(R),T=v.config(P,{transform:function(e,t){if("type"in e){t("type","showGrade","Rating");var a=e,i=a.type,r=f(a,["type"]);e=l({showGrade:"grade"===i},r)}var n=e,s=n.disabled,o=n.readOnly;return e.disabled=s||o,e}});export{T as N};
