(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),l=(t(17),t(5)),c=t(1),u=t(2);function s(){var e=Object(c.a)(["\n  margin:0.5em;\n  padding: 0.75em 1.5em;\n  border:none;\n  font-weight:550;\n  border-radius:0.3em;\n  :hover{\n    filter:brightness(90%);\n  }\n  ","\n\n"]);return s=function(){return e},e}function m(){var e=Object(c.a)(["\n  display:grid;\n  grid-template-columns: repeat(auto-fit, 15em);\n  justify-content: center\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  text-align:center;\n  vertical-align: middle;\n  // align-items: center;\n  // justify-content: center;\n  font-size:1.4em;\n  padding:1em;\n"]);return d=function(){return e},e}var f=u.a.div(d()),g=u.a.div(m()),h=u.a.button(s(),(function(e){return e.prim?"background-color: #0084ff;color:white;":"background-color: #e0e1e2;color:rgba(0,0,0,0.8)"})),b={Western:["East Side Mario's","Williams","Harvey's","Subway","Mel's Diner"],"Middle Eastern":["Kabob Hut","Lazeez Shawarma","Aunty's Kitchen"],Chinese:["Chen's","Morals Village","Mr Panino's","Baba Grill","Gol's Noodle","Foodie Fruitie","Mr. Yin"],"Korean/Japanese":["Izna Japanese Noodle","Asakusa","Sowon","Nori village"]},p=Object.keys(b);var E=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),u=c[0],s=c[1],m=b[t];return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Choose a ",t," restaurant"),r.a.createElement(g,null,m.map((function(e){return r.a.createElement(h,{key:e,onClick:function(){return s(e)}},e)})),r.a.createElement(h,{prim:!0,onClick:function(){return s(m[m.length*Math.random()<<0])}},"Random")),u&&r.a.createElement(f,null,r.a.createElement("span",null,"Your restaurant is ",u," ! "),r.a.createElement(h,{onClick:function(){o(""),s("")}},"Retry"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Choose a category"),r.a.createElement(g,null,p.map((function(e){return r.a.createElement(h,{key:e,onClick:function(){return o(e)}},e)})),r.a.createElement(h,{prim:!0,onClick:function(){return o(p[p.length*Math.random()<<0])}},"Random"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.76e62292.chunk.js.map