"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{7422:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=t(7876),u=t(4232),i=t(7167),o=t(9099),l=t(4287),c=function(e){return e.NODE="NODE",e.EDGE="EDGE",e}(c||{}),d=function(e){return e[e.Home=1]="Home",e[e.Posts=2]="Posts",e[e.About=3]="About",e[e.Tags=4]="Tags",e}(d||{});function s(e){let{nodes:r,edges:t,options:c,loadNote:s,ref:a}=e,f=(0,u.useRef)(null),p=(0,u.useRef)(null),h=(0,u.useRef)(null),v=(0,u.useRef)(null),y=(0,u.useRef)(null),w=(0,u.useRef)(null),b=(0,u.useRef)(null),m=(0,u.useRef)(null),E=(0,o.useRouter)(),x=(0,u.useRef)(null),D=(0,u.useRef)(null);return(0,u.useEffect)(()=>{var e,n;let u=[{id:0,label:"",opacity:0,widthConstraint:0,level:2,physics:!0,chosen:!1,shape:"text"},{id:999,label:"<b><i>访问</i></b>",opacity:.7,color:{border:"#FF6B6B",background:"#ffffff"},font:{color:"#FF6B6B",multi:!0},shapeProperties:{borderDashes:[5,10]},borderWidth:2,widthConstraint:{minimum:130},fixed:!0,x:1e3,y:0,level:2,physics:!1,chosen:!1}],o=[{from:0,to:999,length:400,label:"拖拽放入节点前往",color:"#45B7D1",font:{size:20,vadjust:-20},chosen:!1,width:2,physics:!0,arrows:{to:{enabled:!0,scaleFactor:1,type:"arrow"}},dashes:!0}];if(x.current=new l.DataSet(r),D.current=new l.DataSet(t),f.current){if(x.current.add(u),D.current.add(o),p.current=new i.Network(f.current,{nodes:x.current,edges:D.current},c||{}),null===(e=p.current)||void 0===e||e.on("dragStart",e=>{var r;let t=null===(r=x.current)||void 0===r?void 0:r.get(e.nodes[0]);Array.isArray(t)||999===t.id||(y.current=t,v.current=!0)}),null===(n=p.current)||void 0===n||n.on("dragEnd",e=>{var r;let t=null===(r=x.current)||void 0===r?void 0:r.get(e.nodes[0]);if(!Array.isArray(t)&&999!==t.id&&(v.current=!1,h.current)){if(b.current)b.current=!1,1===t.id?g():R(t);else{if(1===t.id){g();return}R(t)}}}),p.current.on("hoverNode",e=>{if(999===e.node&&(h.current=!0,y.current&&v.current)){var r;null===(r=x.current)||void 0===r||r.update([{id:999,label:y.current.label,color:y.current.color,font:y.current.font,shapeProperties:{borderDashes:!1},opacity:1}])}}),p.current.on("blurNode",e=>{if(999===e.node){if(h.current=!1,v.current){var r;null===(r=x.current)||void 0===r||r.update([{id:999,label:b.current?"<b><i>返回\n<b><i>切换</i></b>":u[1].label,color:u[1].color,font:u[1].font,widthConstraint:u[1].widthConstraint,shapeProperties:u[1].shapeProperties,opacity:.7}])}else y.current=null}}),a.current={add:(e,r)=>{let t="NODE"===e?x.current:D.current;null==t||t.add(r)},update:(e,r)=>{let t="NODE"===e?x.current:D.current;null==t||t.update(r)},remove:(e,r)=>{let t="NODE"===e?x.current:D.current;null==t||t.remove(r)}},E.query.type){if(m.current)return;m.current=!0;let e=E.query.type;r.filter(r=>{r.id===Number(e)&&(m.current=!1,R(r))})}return()=>{p.current&&p.current.destroy()}}function N(e){if(1===e.id){window.history.replaceState({...window.history.state,as:window.location.pathname},"",window.location.pathname);return}if(e.id&&e.id in d){let r="".concat(window.location.pathname,"?type=").concat(e.id);window.history.replaceState({...window.history.state,as:r},"",r)}}function R(e){var r,t,n,i,l;N(e),s(e),(null===(r=w.current)||void 0===r?void 0:r.id)&&(null===(l=x.current)||void 0===l||l.update({id:w.current.id,mass:1,widthConstraint:!1,fixed:!1})),w.current=e,b.current=!0,null===(t=x.current)||void 0===t||t.update([{...e,fixed:!0,widthConstraint:{minimum:100},mass:.1,x:-510,y:-350},{id:0,physics:!1,x:-720,y:-40},{...u[1],label:"<b><i>返回\n<b><i>切换</i></b>",physics:!1,mass:.1,x:-500,y:200}]),null===(n=D.current)||void 0===n||n.update(Object.assign(o[0],{label:"拖拽放入节点"})),null===(i=p.current)||void 0===i||i.setOptions({physics:{wind:{x:-.3,y:.2}}})}function g(){var e,n,i,l,c,d;null===(e=p.current)||void 0===e||e.setOptions({physics:{wind:{x:0,y:0}}}),w.current&&w.current.id&&(null===(d=x.current)||void 0===d||d.remove(w.current.id),w.current=null),null===(n=x.current)||void 0===n||n.update([...r,...u]),null===(i=D.current)||void 0===i||i.update([...t,...o]),null===(l=p.current)||void 0===l||l.moveNode(1,310,-60),null===(c=p.current)||void 0===c||c.moveTo({position:{x:200,y:0}}),N({id:1})}},[r,t,c,s,E.query,E.isReady,D,x,a]),(0,n.jsx)("div",{ref:f,style:{width:"100%",height:"100%"}})}}}]);