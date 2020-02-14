(this.webpackJsonpskincare_ml_ator=this.webpackJsonpskincare_ml_ator||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/generated_press.84624c65.txt"},function(t,e,n){t.exports=n.p+"static/media/generated_descriptions.7cbafdb5.txt"},function(t,e,n){t.exports=n.p+"static/media/generated_products.504adff4.txt"},function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(8),o=n.n(i),r=(n(17),n(18),n(19),n(1)),c=n(2),l=n(5),u=n(3),h=n(6),d=n(4);var m=function(){return s.a.createElement("div",{className:"all-container"},s.a.createElement("p",null,"A text generation project",s.a.createElement("a",{href:"https://siwinlo.github.io"}," Siwin Lo")),s.a.createElement("p",null,"This application displays text generated using textgenrnn, a text generation machine learning library, trained on art exhibition press releases drawn from Artforum's Art Guide listings, and skincare product names and descriptions from Soko Glam. However, the samples shown on this UI are drawn from a static bank that is sporadically updated, since hosting the computation of these models is not somthing I have figured out how to do for free at this time."))},f=n(9),g=n.n(f),p=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).getDescriptions=function(){return fetch(g.a).then((function(t){return t.text()})).then((function(e){return t.setState({t:e.split("\n")})})),null},t.shuffle=function(t){var e,n,a;for(a=t.length-1;a>0;a--)e=Math.floor(Math.random()*(a+1)),n=t[a],t[a]=t[e],t[e]=n;return t},t.showMore=function(){t.setState({count:1})},t.state={t:[],count:1},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getDescriptions()}},{key:"render",value:function(){var t=this.shuffle(this.state.t).slice(0,this.state.count);return this.state.t.length>0?s.a.createElement("div",{className:"all-container"},s.a.createElement("h2",null,"Generated Art Exhibition Press Releases"),t.map((function(t){return s.a.createElement("ul",null,s.a.createElement("p",null,t))})),s.a.createElement("div",{className:"show-more",onClick:this.showMore},"Regenerate!*")):null}}]),e}(s.a.Component),v=n(10),b=n.n(v),E=n(11),k=n.n(E),x=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).getTitles=function(){return fetch(k.a).then((function(t){return t.text()})).then((function(e){return t.setState({titles:e.split("\n")})})),null},t.getDescriptions=function(){return fetch(b.a).then((function(t){return t.text()})).then((function(e){return t.setState({descriptions:e.split("\n")})})),null},t.shuffle=function(t){var e,n,a;for(a=t.length-1;a>0;a--)e=Math.floor(Math.random()*(a+1)),n=t[a],t[a]=t[e],t[e]=n;return t},t.showMore=function(){t.setState({count:5})},t.state={count:5,titles:[],descriptions:[]},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getDescriptions(),this.getTitles()}},{key:"render",value:function(){var t=this.shuffle(this.state.titles).slice(0,this.state.count),e=this.shuffle(this.state.descriptions).slice(0,this.state.count);return this.state.titles.length>0?s.a.createElement("div",{className:"all-container synth"},s.a.createElement("h2",null,"Generated Skincare Products"),e.map((function(e,n){return s.a.createElement("div",null,s.a.createElement("h3",null,t[n]),s.a.createElement("p",null,e))})),s.a.createElement("div",{className:"show-more",onClick:this.showMore},"Regenerate!*")):null}}]),e}(s.a.Component),w=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={about:!1,products:!1,exhs:!1},t.toggleAbout=t.toggleAbout.bind(Object(h.a)(t)),t.toggleProducts=t.toggleProducts.bind(Object(h.a)(t)),t.toggleExhs=t.toggleExhs.bind(Object(h.a)(t)),t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"toggleAbout",value:function(t){this.setState({about:!this.state.about})}},{key:"toggleProducts",value:function(t){this.setState({products:!this.state.products})}},{key:"toggleExhs",value:function(t){this.setState({exhs:!this.state.exhs})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"nav"},s.a.createElement("div",{className:"nav-link",onClick:this.toggleAbout},"About"),s.a.createElement("div",{className:"nav-link",onClick:this.toggleProducts},"Skincare Products"),s.a.createElement("div",{className:"nav-link",onClick:this.toggleExhs},"Exhibition Press Releases")),s.a.createElement("div",{className:"main"},this.state.about?s.a.createElement(m,null):null,this.state.products?s.a.createElement(x,null):null,this.state.exhs?s.a.createElement(p,null):null))}}]),e}(s.a.Component);var j=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.4dfc4961.chunk.js.map