import{u as e,k as t,l as o,m as a,K as r,_ as i,v as n,R as s,o as l,d as c,P as u,n as d,z as m,q as p,r as h,a5 as y}from"./index.d204dc79.js";import{q as g}from"./styled-components.browser.esm.b206912e.js";var b,v,x=(v=b=function(e){function u(){var t,i;o(this,u);for(var n=arguments.length,s=Array(n),l=0;l<n;l++)s[l]=arguments[l];return t=i=a(this,e.call.apply(e,[this].concat(s))),i.onKeyDown=function(e){if(e.keyCode===r.SPACE){var t=i.props.onClick;e.preventDefault(),t&&t(e)}},a(i,t)}return t(u,e),u.prototype.render=function(){var e,t,o=this.props,a=o.title,r=o.children,u=o.className,d=o.isExpanded,m=o.disabled,p=o.style,h=o.prefix,y=o.onClick,g=o.id,b=i(o,["title","children","className","isExpanded","disabled","style","prefix","onClick","id"]),v=n(((e={})[h+"collapse-panel"]=!0,e[h+"collapse-panel-hidden"]=!d,e[h+"collapse-panel-expanded"]=d,e[h+"collapse-panel-disabled"]=m,e[u]=u,e)),x=n(((t={})[h+"collapse-panel-icon"]=!0,t[h+"collapse-panel-icon-expanded"]=d,t)),f=g?g+"-heading":void 0,P=g?g+"-region":void 0;return s.createElement("div",l({className:v,style:p,id:g},b),s.createElement("div",{id:f,className:h+"collapse-panel-title",onClick:y,onKeyDown:this.onKeyDown,tabIndex:"0","aria-disabled":m,"aria-expanded":d,"aria-controls":P,role:"button"},s.createElement(c,{type:"arrow-right",className:x,"aria-hidden":"true"}),a),s.createElement("div",{className:h+"collapse-panel-content",role:"region",id:P},r))},u}(s.Component),b.propTypes={prefix:u.string,style:u.object,children:u.any,isExpanded:u.bool,disabled:u.bool,title:u.node,className:u.string,onClick:u.func,id:u.string},b.defaultProps={prefix:"next-",isExpanded:!1,onClick:d.noop},b.isNextPanel=!0,v);x.displayName="Panel";var f,P,k=e.config(x),E=(P=f=function(e){function r(t){o(this,r);var i=a(this,e.call(this,t)),n=void 0;return n="expandedKeys"in t?t.expandedKeys:t.defaultExpandedKeys,i.state={expandedKeys:void 0===n?[]:n},i}return t(r,e),r.getDerivedStateFromProps=function(e){return"expandedKeys"in e?{expandedKeys:void 0===e.expandedKeys?[]:e.expandedKeys}:null},r.prototype.onItemClick=function(e){var t=this.state.expandedKeys;if(this.props.accordion)t=String(t[0])===String(e)?[]:[e];else{t=[].concat(t);var o=String(e),a=t.findIndex((function(e){return String(e)===o}));a>-1?t.splice(a,1):t.push(e)}this.setExpandedKey(t)},r.prototype.genratePanelId=function(e,t){var o=this.props.id,a=void 0;return e?a=e:o&&(a=o+"-panel-"+t),a},r.prototype.getProps=function(e,t,o){var a=this,r=this.state.expandedKeys,i=e.title,n=this.props.disabled;n||(n=e.disabled);var s=!1;s=this.props.accordion?String(r[0])===String(o):r.some((function(e){return null!=e&&null!=o&&(e===o||e.toString()===o.toString())}));var l=this.genratePanelId(e.id,t);return{key:o,title:i,isExpanded:s,disabled:n,id:l,onClick:n?null:function(){a.onItemClick(o),"onClick"in e&&e.onClick(o)}}},r.prototype.getItemsByDataSource=function(){var e=this,t=this.props.dataSource,o=t.some((function(e){return"key"in e}));return t.map((function(t,a){var r=o?t.key:""+a;return s.createElement(k,l({},e.getProps(t,a,r),{key:r}),t.content)}))},r.prototype.getItemsByChildren=function(){var e=this,t=s.Children.map(this.props.children,(function(e){return e&&e.key})),o=Boolean(t.length);return s.Children.map(this.props.children,(function(t,a){if(t&&"function"==typeof t.type&&t.type.isNextPanel){var r=o?t.key:""+a;return s.cloneElement(t,e.getProps(t.props,a,r))}return t}))},r.prototype.setExpandedKey=function(e){"expandedKeys"in this.props||this.setState({expandedKeys:e}),this.props.onExpand(this.props.accordion?e[0]:e)},r.prototype.render=function(){var e,t=this.props,o=t.prefix,a=t.className,i=t.style,c=t.disabled,u=t.dataSource,d=t.id,m=t.rtl,h=n(((e={})[o+"collapse"]=!0,e[o+"collapse-disabled"]=c,e[a]=Boolean(a),e)),y=p.pickOthers(r.propTypes,this.props);return s.createElement("div",l({id:d,className:h,style:i},y,{role:"presentation",dir:m?"rtl":void 0}),u?this.getItemsByDataSource():this.getItemsByChildren())},r}(s.Component),f.propTypes={prefix:u.string,style:u.object,dataSource:u.array,defaultExpandedKeys:u.array,expandedKeys:u.array,onExpand:u.func,disabled:u.bool,className:u.string,accordion:u.bool,children:u.node,id:u.string,rtl:u.bool},f.defaultProps={accordion:!1,prefix:"next-",onExpand:d.noop},f.contextTypes={prefix:u.string},P);E.displayName="Collapse";var S=m(e.config(E));S.Panel=k;const w=S.Panel;const _=g.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(S,{id:"collapse-accessibility"},h.exports.createElement(w,{id:"panel-accessibility",title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},h.exports.createElement("ul",null,h.exports.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),h.exports.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),h.exports.createElement(w,{title:"What are Promotion Products?"},h.exports.createElement("ul",null,h.exports.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),h.exports.createElement("li",null,"You can choose which products should be available for the promotion"),h.exports.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))));return h.exports.createElement(_,null,e)}});const C=S.Panel;const K=g.div``;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(S,{accordion:!0},h.exports.createElement(C,{title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),h.exports.createElement(C,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),h.exports.createElement(C,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),h.exports.createElement(C,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return h.exports.createElement(K,null,e)}});const T=S.Panel;y.Group;const M=g.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(S,null,h.exports.createElement(T,{title:"simple tile"},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),h.exports.createElement(T,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),h.exports.createElement(T,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),h.exports.createElement(T,{title:"What is Promo Stock?",disabled:!0},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return h.exports.createElement(M,null,e)}});const L=[{title:"Well, hello there",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",disabled:!0},{title:"Gigantomaniac Monster Text, very long, much width, wow",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Generic Title",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Login Infomation",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}];const q=g.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(S,{dataSource:L});return h.exports.createElement(q,null,e)}});const A=S.Panel;const z=g.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(S,{disabled:!0},h.exports.createElement(A,{title:"simple tile"},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),h.exports.createElement(A,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),h.exports.createElement(A,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),h.exports.createElement(A,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return h.exports.createElement(z,null,e)}});const D=S.Panel;class Y extends h.exports.Component{constructor(e,t){super(e,t),this.state={expandedKeys:[]}}onExpand(e){this.setState({expandedKeys:e})}onClick(e){console.log("clicked",e)}render(){return h.exports.createElement(S,{onExpand:this.onExpand.bind(this),expandedKeys:this.state.expandedKeys},h.exports.createElement(D,{title:"simple tile",onClick:this.onClick},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),h.exports.createElement(D,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),h.exports.createElement(D,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),h.exports.createElement(D,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))}}const B=g.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement(Y,null);return h.exports.createElement(B,null,e)}});const F=S.Panel;const R=g.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=h.exports.createElement("div",null,h.exports.createElement(S,null,h.exports.createElement(F,{title:"simple tile"},h.exports.createElement(S,null,h.exports.createElement(F,{title:"simple tile"},h.exports.createElement("ul",null,h.exports.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),h.exports.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),h.exports.createElement(F,{title:"What are Promotion Products?"},h.exports.createElement("ul",null,h.exports.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),h.exports.createElement("li",null,"You can choose which products should be available for the promotion"),h.exports.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),h.exports.createElement(F,{title:"Why can i not submit a higher price?"},h.exports.createElement("ul",null,h.exports.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),h.exports.createElement(F,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))),h.exports.createElement(F,{title:"What are Promotion Products?"},h.exports.createElement("ul",null,h.exports.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),h.exports.createElement("li",null,"You can choose which products should be available for the promotion"),h.exports.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas")))));return h.exports.createElement(R,null,e)}});const J={};J._accessibility=j,J._accordion=W,J._basic=N,J._datasource=I,J._disabled=O,J._event=G,J._nested=H;export default J;