(this["webpackJsonpp5-react-example"]=this["webpackJsonpp5-react-example"]||[]).push([[2],{141:function(e){e.exports=JSON.parse('{"Background":{"description":"todo","displayName":"Background","methods":[],"props":{"color":{"type":{"name":"union","value":[{"name":"func"},{"name":"number"},{"name":"array"}]},"required":false,"description":"todo"}}},"Body":{"description":"The `<Body>` component allows you to easily render a moving object, by providing a constructor function via the `model` prop that contains an `update()` method.\\r\\nThe update method will be called on every draw cycle by the P5 Instance.","displayName":"Body","methods":[],"props":{"model":{"type":{"name":"func"},"required":true,"description":"a constructor function that takes the p5 instance as a parameter. It must return an object containing the `update()"}}},"Canvas":{"description":"The <Canvas> component will create a new canvas for you to draw things on.\\r\\nIt is the equivalent of calling [p5.createCanvas()](https://p5js.org/reference/#/p5/createCanvas)","displayName":"Canvas","methods":[],"props":{"width":{"type":{"name":"union","value":[{"name":"func"},{"name":"number"}]},"required":true,"description":"The width of the canvas"},"height":{"type":{"name":"union","value":[{"name":"func"},{"name":"number"}]},"required":true,"description":"The height of the canvas"},"renderer":{"type":{"name":"enum","value":[{"value":"\'P2D\'","computed":false},{"value":"\'WEBGL\'","computed":false}]},"required":false,"description":"The renderer to use. Defaults to `P2D`","defaultValue":{"value":"\'P2D\'","computed":false}},"canvasClassName":{"type":{"name":"string"},"required":false,"description":"todo"},"canvasStyle":{"type":{"name":"object"},"required":false,"description":"todo"}}},"Debug":{"description":"","displayName":"Debug","methods":[]},"Layer":{"description":"Todo","displayName":"Layer","methods":[],"props":{"autoClear":{"type":{"name":"bool"},"required":false,"description":"todo","defaultValue":{"value":"true","computed":false}},"blendMode":{"type":{"name":"union","value":[{"name":"func"},{"name":"string"}]},"required":false,"description":"todo","defaultValue":{"value":"\'BLEND\'","computed":false}},"opacity":{"type":{"name":"number"},"required":false,"description":"todo"},"filters":{"type":{"name":"array"},"required":false,"description":"todo","defaultValue":{"value":"Object.freeze([])","computed":true}},"isStatic":{"type":{"name":"bool"},"required":false,"description":"todo","defaultValue":{"value":"false","computed":false}},"applyFunction":{"type":{"name":"func"},"required":false,"description":"todo"},"id":{"type":{"name":"string"},"required":false,"description":"todo"},"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The x-coordinate of the layer","defaultValue":{"value":"0","computed":false}},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The y-coordinate of the layer","defaultValue":{"value":"0","computed":false}},"width":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The width of the layer","defaultValue":{"value":"p => p.width","computed":false}},"height":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The height of the layer","defaultValue":{"value":"p => p.height","computed":false}},"size":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The size of the shape in pixels"},"children":{"defaultValue":{"value":"null","computed":false},"required":false}}},"LinearGradient":{"description":"Todo","displayName":"LinearGradient","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The x-coordinate of the shape","defaultValue":{"value":"0","computed":false}},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":false,"description":"The Y-coordinate of the shape","defaultValue":{"value":"0","computed":false}},"width":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The width of the shape in pixels"},"height":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The height of the shape in pixels"},"colors":{"type":{"name":"union","value":[{"name":"func"},{"name":"array"}]},"required":false,"description":"Todo","defaultValue":{"value":"[\'black\', \'white\']","computed":false}},"angle":{"type":{"name":"union","value":[{"name":"func"},{"name":"number"}]},"required":false,"description":"Todo"}},"composes":["./utils/handleCommonProps"]},"Mask":{"description":"Todo","displayName":"Mask","methods":[],"composes":["./Layer"]},"P5":{"description":"Todo","displayName":"P5","methods":[],"props":{"options":{"type":{"name":"shape","value":{"clearOnDraw":{"name":"bool","description":"todo","required":false},"frameRate":{"name":"number","description":"todo","required":false},"debug":{"name":"bool","description":"todo","required":false},"pixelDensity":{"name":"number","description":"todo","required":false}}},"required":false,"description":"todo"}}},"PushPop":{"description":"Todo","displayName":"PushPop","methods":[],"composes":["./utils/handleCommonProps"]},"Arc":{"description":"The `<Arc>` component allows you to draw a arc to the screen.\\r\\nIt is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/arc).`;","displayName":"Arc","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The Y-coordinate of the shape"},"width":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The width of the shape in pixels"},"height":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The height of the shape in pixels"},"start":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The angle to start the arc"},"stop":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The angle to stop the arc"}},"composes":["../utils/handleCommonProps"]},"Circle":{"description":"The `<Circle>` component allows you to draw a circle to the screen.\\r\\nIt is the equivalent of calling [p5.circle()](https://p5js.org/reference/#/p5/circle).`;","displayName":"Circle","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The y-coordinate of the shape"},"size":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The size of the shape in pixels"}},"composes":["../utils/handleCommonProps"]},"Ellipse":{"description":"The `<Ellipse>` component allows you to draw a ellipse to the screen.\\r\\nIt is the equivalent of calling [p5.ellipse()](https://p5js.org/reference/#/p5/ellipse).`;","displayName":"Ellipse","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The Y-coordinate of the shape"},"width":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The width of the shape in pixels"},"height":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The height of the shape in pixels"}},"composes":["../utils/handleCommonProps"]},"Line":{"description":"The `<Line>` component allows you to draw a line to the screen.\\r\\nIt is the equivalent of calling [p5.line()](https://p5js.org/reference/#/p5/line).`;","displayName":"Line","methods":[],"props":{"from":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"An array of two numbers contaiing the x and y coordinates for the start of the line"},"to":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"An array of two numbers contaiing the x and y coordinates for the end of the line"}},"composes":["../utils/handleCommonProps"]},"Point":{"description":"The `<Point>` component allows you to draw a point to the screen.\\r\\nIt is the equivalent of calling [p5.point()](https://p5js.org/reference/#/p5/point).`;","displayName":"Point","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The y-coordinate of the shape"}},"composes":["../utils/handleCommonProps"]},"Rectangle":{"description":"The `<Rectangle>` component allows you to draw a rectangle to the screen.\\r\\nIt is the equivalent of calling [p5.rectangle()](https://p5js.org/reference/#/p5/rectangle).`;","displayName":"Rectangle","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The Y-coordinate of the shape"},"width":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The width of the shape in pixels"},"height":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The height of the shape in pixels"}},"composes":["../utils/handleCommonProps"]},"Square":{"description":"The `<Square>` component allows you to draw a square to the screen.\\r\\nIt is the equivalent of calling [p5.square()](https://p5js.org/reference/#/p5/square).`;","displayName":"Square","methods":[],"props":{"x":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The x-coordinate of the shape"},"y":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The y-coordinate of the shape"},"size":{"type":{"name":"union","value":[{"name":"number"},{"name":"func"}]},"required":true,"description":"The size of the shape in pixels"}},"composes":["../utils/handleCommonProps"]}}')},83:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var a=t(28),o=t(141),i=t(0),r=t.n(i),u=t(167),s=t(168),p=function(){function e(n,t){Object(u.a)(this,e),this.position=t||n.createVector(n.width/2,n.height/2),this.vel=n.createVector(0,0),this.gravity=n.createVector(0,1)}return Object(s.a)(e,[{key:"applyForce",value:function(){this.vel.add(this.gravity),this.position.add(this.vel)}},{key:"update",value:function(e){this.applyForce(),this.position.y>e.height&&(this.position.y=e.height,this.vel=this.vel.mult(-1))}}]),e}(),l=function(){function e(n,t){Object(u.a)(this,e),this.position=t||n.createVector(n.width/2,n.height/2)}return Object(s.a)(e,[{key:"update",value:function(e){this.position.x+=e.random(-3,3),this.position.y+=e.random(-3,3),this.position.x<0?this.position.x+=e.width:this.position.x>e.width?this.position.x-=e.width:this.position.y<0?this.position.y+=e.height:this.position.y>e.height&&(this.position.y-=e.height)}}]),e}(),d=t(145),c=t(272),m=t(273),h=t(274),f=t(266),y=t(270),v=t(142),b=t(23);function g(){var e=Object(b.a)(),n=Object(i.useState)("bouncing"),t=Object(a.a)(n,2),u=t[0],s=t[1],g=Object(i.useMemo)((function(){return{bouncing:function(e,n){return new p(e,n&&n.position)},random:function(e,n){return new l(e,n&&n.position)}}}),[]);return r.a.createElement(d.a,{title:"Body",description:o.Body,githubLink:"https://github.com/loicpennequin/react-p5/blob/master/src/Body.jsx",draw:r.a.createElement(v.c,{model:g[u]},(function(n){var t=n.position;return r.a.createElement(v.e,{x:t.x,y:t.y,size:50,fill:e.palette.primary.main,noStroke:!0})}))},r.a.createElement(c.a,{component:"fieldset"},r.a.createElement(m.a,{component:"legend"},"Model"),r.a.createElement(h.a,{name:"model",value:u,onChange:function(e){s(e.target.value)}},r.a.createElement(f.a,{value:"bouncing",control:r.a.createElement(y.a,null),label:"Bouncing ball"}),r.a.createElement(f.a,{value:"random",control:r.a.createElement(y.a,null),label:"Ball moving randomly"}))))}}}]);
//# sourceMappingURL=Body.44430a86.chunk.js.map