import{u as e,z as o,k as t,l as r,m as a,o as l,_ as n,R as i,r as s,v as d,q as f,P as p,y as c}from"./index.d204dc79.js";var m,u,h=(u=m=function(e){function o(t,l){r(this,o);var n=a(this,e.call(this,t,l));return n.state={fold:t.fold},n}return t(o,e),o.getDerivedStateFromProps=function(e,o){var t=o.innerUpdate,r=o.fold;return t?{fold:r,innerUpdate:!1}:"fold"in e?{fold:e.fold}:null},o.prototype.toggleFold=function(e,o){var t=this.state.fold.map((function(e){return l({},e)}));if(e){for(var r=0;r<t.length;r++){var a=t[r],n=a.foldArea,i=a.foldShow;(n[1]&&e===n[1]||!n[1]&&e===o-1)&&(t[r].foldShow=!i)}this.setState({fold:t,innerUpdate:!0})}},o.prototype.render=function(){var e,t=this,r=this.props,a=r.prefix,p=r.rtl,c=r.className,m=r.children,u=r.locale,h=r.animation,v=n(r,["prefix","rtl","className","children","locale","animation"]),x=this.state.fold,g=i.Children.count(m),y=s.exports.Children.map(m,(function(e,o){var r=null,l=!1;return x.forEach((function(e){var t=e.foldArea,a=e.foldShow;t[0]&&o>=t[0]&&(o<=t[1]||!t[1])&&(r=t[1]||g-1,l=a)})),i.cloneElement(e,{prefix:a,locale:u,total:g,index:o,folderIndex:r,foldShow:l,toggleFold:r===o?t.toggleFold.bind(t,r,g):function(){},animation:h})})),S=d(((e={})[a+"timeline"]=!0,e),c);return p&&(v.dir="rtl"),i.createElement("ul",l({},f.pickOthers(o.propTypes,v),{className:S}),y)},o}(s.exports.Component),m.propTypes=l({},e.propTypes,{prefix:p.string,rtl:p.bool,fold:p.array,className:p.string,children:p.any,locale:p.object,animation:p.bool}),m.defaultProps={prefix:"next-",rtl:!1,fold:[],locale:c.Timeline,animation:!0},u);h.displayName="Timeline";var v=e.config(o(h));export{v as T};
