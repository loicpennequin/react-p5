(this["webpackJsonpp5-react-example"]=this["webpackJsonpp5-react-example"]||[]).push([[2],{83:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return f}));var n=i(28),o=i(0),a=i.n(o),c=i(166),r=i(167),s=function(){function t(e,i){Object(c.a)(this,t),this.position=i||e.createVector(e.width/2,e.height/2),this.vel=e.createVector(0,0),this.gravity=e.createVector(0,1)}return Object(r.a)(t,[{key:"applyForce",value:function(){this.vel.add(this.gravity),this.position.add(this.vel)}},{key:"update",value:function(t){this.applyForce(),this.position.y>t.height&&(this.position.y=t.height,this.vel=this.vel.mult(-1))}}]),t}(),l=function(){function t(e,i){Object(c.a)(this,t),this.position=i||e.createVector(e.width/2,e.height/2)}return Object(r.a)(t,[{key:"update",value:function(t){this.position.x+=t.random(-3,3),this.position.y+=t.random(-3,3),this.position.x<0?this.position.x+=t.width:this.position.x>t.width?this.position.x-=t.width:this.position.y<0?this.position.y+=t.height:this.position.y>t.height&&(this.position.y-=t.height)}}]),t}(),h=i(144),u=i(268),p=i(269),m=i(270),d=i(262),b=i(266),y=i(141),g=i(23);function f(){var t=Object(g.a)(),e=Object(o.useState)("bouncing"),i=Object(n.a)(e,2),c=i[0],r=i[1],f=Object(o.useMemo)((function(){return{bouncing:function(t,e){return new s(t,e&&e.position)},random:function(t,e){return new l(t,e&&e.position)}}}),[]);return a.a.createElement(h.a,{title:"Body",description:y.c.toMarkdown(),githubLink:"https://github.com/loicpennequin/react-p5/blob/master/src/Body.jsx",draw:a.a.createElement(y.c,{model:f[c]},(function(e){var i=e.position;return a.a.createElement(y.e,{x:i.x,y:i.y,size:50,fill:t.palette.primary.main,noStroke:!0})}))},a.a.createElement(u.a,{component:"fieldset"},a.a.createElement(p.a,{component:"legend"},"Model"),a.a.createElement(m.a,{name:"model",value:c,onChange:function(t){r(t.target.value)}},a.a.createElement(d.a,{value:"bouncing",control:a.a.createElement(b.a,null),label:"Bouncing ball"}),a.a.createElement(d.a,{value:"random",control:a.a.createElement(b.a,null),label:"Ball moving randomly"}))))}}}]);
//# sourceMappingURL=Body.daf68da6.chunk.js.map