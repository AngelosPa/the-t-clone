(this["webpackJsonpsocial-network-app"]=this["webpackJsonpsocial-network-app"]||[]).push([[0],{48:function(e,c,t){},5:function(e){e.exports=JSON.parse('[{"name":"User","age":"25","img":"https://source.unsplash.com/450x800/?woman/","msges":["hi","its Hamza","loremm"],"location":"Leipzig","occupation":"Web Developer","education":"Bachelor in Computer Science","profileImg":["https://source.unsplash.com/450x800/?man/","https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/120081545_3800438799984115_1206977758169876918_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=PiTopPbGxKwAX_7k7f7&tn=rj_wWWmnOC0-IPXy&_nc_ht=scontent.ftun2-1.fna&oh=14185ff167684795b7368506afdb69a7&oe=60E3397B","https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80","https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"],"id":9},{"name":"Nancy","age":66,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":8},{"name":"Olga","age":27,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":7},{"name":"Meriam","age":26,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":6},{"name":"Angelica","age":18,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":5},{"name":"Sirin","age":50,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":4},{"name":"Anna","age":28,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","im Olga","lorem"],"location":"Berlin","occupation":"Web Developer","education":"Bachelor in Computer Science","id":3},{"name":"Julia","age":26,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hallo","it\'s Nancy here","lorem"],"location":"Munique","occupation":"Web Developer","education":"Bachelor in Computer Science","id":2},{"name":"Zain","age":31,"img":"https://source.unsplash.com/450x800/?woman/","msges":["hi","how are you","lorem"],"location":"Dusseldorf","occupation":"Web Developer","education":"Bachelor in Computer Science","id":1}]')},62:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(22),i=t.n(n),o=(t(48),t(16)),r=t(6),l=t(20),j=t(14),m=t(5),u=t(76),d=t(36),h=t.n(d),b=t(8),p=t(38),x=t(2);var O=function(){var e=function(e){console.log(e),console.log("You swiped: "+e)},c=Object(s.useState)(!1),t=Object(j.a)(c,2),a=t[0],n=t[1],i=Object(s.useState)(!1),o=Object(j.a)(i,2),r=o[0],d=o[1],O=Object(s.useState)(!1),f=Object(j.a)(O,2),g=f[0],v=f[1],N=Object(s.useState)(m),w=Object(j.a)(N,2),S=w[0],y=w[1];function M(e,c,t){y(c.filter((function(c){return c.id!==e})))}function D(e,c,t){y(c.filter((function(c){return c.id!==e}))),n(!0),setTimeout((function(){n(!1)}),500)}function k(e,c){y(c.filter((function(c){return c.id!==e}))),v(!0),setTimeout((function(){v(!1)}),500)}function B(e,c){y(c.filter((function(c){return c.id!==e}))),d(!0),setTimeout((function(){d(!1)}),500)}return S.map((function(c){var t,s=c.img,n=c.name,i=c.age,o=c.id;console.log(o);var j="url(".concat(m[1].img,"/").concat(Math.floor(1e3*Math.random()),")");return Object(x.jsx)(h.a,{className:"card-wrapper",children:Object(x.jsxs)("div",(t={className:"swipe",onSwipe:e,onCardLeftScreen:function(){return e="fooBar",void console.log(e+" left the screen");var e},preventSwipe:["right","left"]},Object(l.a)(t,"preventSwipe",["up","down"]),Object(l.a)(t,"children",[Object(x.jsx)("div",{className:a?"profil-img mytranslatex":r?"profil-img myhearttranslatex":g?"profil-img mystartranslatex":"profil-img",style:"Hamza"!==n?{backgroundImage:"".concat(j)}:{backgroundImage:"url(".concat(s,")")},children:Object(x.jsx)("h1",{children:"".concat(n," ").concat(i)})}),Object(x.jsxs)("div",{className:"buttons-swipe",children:[Object(x.jsx)(u.a,{className:"swipe-redo",children:Object(x.jsx)(b.g,{onClick:function(){return M(1,S)},onTouchStart:function(){return M(1,S)}})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(p.a,{onClick:function(){return D(o,S)},onTouchStart:function(){return D(o,S)},className:"swipe-close"})}),Object(x.jsx)(u.a,{onClick:function(){return k(o,S)},onTouchStart:function(){return k(o,S)},className:"swipe-star",children:Object(x.jsx)(b.i,{})}),Object(x.jsx)(u.a,{className:"swipe-heart",children:Object(x.jsx)(b.f,{onClick:function(){return B(o,S)},onTouchStart:function(){return B(o,S)},className:"swipe-close"})}),Object(x.jsx)(u.a,{className:"swipe-bolt",children:Object(x.jsx)(b.c,{})})]})]),t))})}))},f=t(77);var g=function(e){return Object(x.jsx)(o.b,{to:"/messages/".concat(e.name),children:Object(x.jsxs)("div",{className:"message",children:[Object(x.jsx)(f.a,{className:"message_image",alt:e.name,src:e.pic}),Object(x.jsxs)("div",{className:"message-details",children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("p",{children:e.message})]}),Object(x.jsx)("p",{className:"timestamp",children:e.timestamp})]})})};var v=function(){return Object(x.jsxs)("div",{className:"messages",children:[Object(x.jsx)(g,{name:m[0].name,message:"hi",timestamp:"60 seconds ago",pic:m[0].img}),Object(x.jsx)(g,{name:m[1].name,message:"hello",timestamp:"30 seconds ago",pic:"".concat(m[1].img,"/").concat(Math.floor(1e3*Math.random()))}),Object(x.jsx)(g,{name:m[2].name,message:"hiii",timestamp:"70 seconds ago",pic:"".concat(m[1].img,"/").concat(Math.floor(1e3*Math.random()))}),Object(x.jsx)(g,{name:m[3].name,message:"heei",timestamp:"90 seconds ago",pic:"".concat(m[1].img,"/").concat(Math.floor(1e3*Math.random()))})]})};var N=function(e){var c=e.backButton,t=Object(r.f)();return Object(x.jsxs)("div",{className:"header-menu",children:[c?Object(x.jsx)(u.a,{onClick:function(){return t.replace(c)},children:Object(x.jsx)(b.d,{})}):Object(x.jsx)("div",{onClick:function(){return t.push("/profile")},children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.j,{})})}),Object(x.jsx)(o.b,{to:"/cards",children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.e,{id:"tinder-icon"})})}),Object(x.jsx)(o.b,{to:"/messages",children:Object(x.jsx)(u.a,{children:Object(x.jsx)(b.h,{})})})]})},w=t(19);var S=function(e){var c=window.location.pathname.split("/"),t=c[c.length-1],a=e.Data.find((function(e){return e.name=="".concat(t)})).msges,n=Object(s.useState)([]),i=Object(j.a)(n,2),o=i[0],r=i[1],l=Object(s.useState)(""),m=Object(j.a)(l,2),u=m[0],d=m[1];return Object(x.jsxs)("div",{className:"message-context",children:[Object(x.jsxs)("p",{className:"chatscreen-intro",children:["YOU MATCHED WITH \xa0",t.toUpperCase(),"\xa0 on"," ".concat((new Date).getDate(),"/ ").concat((new Date).getMonth()," / ").concat((new Date).getFullYear())]}),a.map((function(e){return t?Object(x.jsxs)("div",{className:"chatscreen-message",children:[Object(x.jsx)(f.a,{className:"chatscreen-avatar",alt:"".concat(t)}),Object(x.jsx)("p",{className:"chatscreen-text",children:e})]}):Object(x.jsx)("div",{className:"chatscreen-user-message",children:Object(x.jsx)("p",{className:"chatscreen-user-text",children:e})})})),Object(x.jsx)("div",{className:"chatscreen-user-message",children:o.map((function(e){return Object(x.jsx)("p",{className:"chatscreen-user-text",children:e})}))}),Object(x.jsxs)("form",{className:"user-input",onSubmit:function(e){e.preventDefault(),r((function(e){return[].concat(Object(w.a)(e),[u.trim()])})),console.log(o),d("")},children:[Object(x.jsx)("input",{value:u,onChange:function(e){d(e.target.value)},className:"user-input-field",placeholder:"Type ur message",type:"text"}),Object(x.jsx)("button",{type:"submit",className:"user-input-button",children:"SEND"})]})]})},y=t(39),M=t(33);var D=function(e){var c=e.slides,t=Object(s.useState)(0),a=Object(j.a)(t,2),n=a[0],i=a[1],o=c.length;return Object(x.jsxs)("div",{className:"slider",children:[Object(x.jsx)(b.a,{className:"slider-left",onClick:function(){i(0===n?o-1:n-1)}}),Object(x.jsx)(b.b,{className:"slider-right",onClick:function(){i(n===o-1?0:n+1)}}),m[0].profileImg.map((function(e,c){return Object(x.jsx)("div",{children:c===n&&Object(x.jsx)("img",{className:"profile-img",src:e,alt:"Profile Image"})})}))]})};var k=function(){return Object(x.jsxs)("div",{className:"profile-wrapper",children:[Object(x.jsxs)("div",{className:"profile-information-wrapper",children:[Object(x.jsx)(o.b,{to:"/cards",children:Object(x.jsx)(b.d,{className:"profile-back"})}),Object(x.jsx)("button",{className:"profile-edit",children:"Edit Info"}),Object(x.jsx)(D,{slides:m[0].profileImg}),Object(x.jsxs)("div",{class:"profile-main-information",children:[Object(x.jsxs)("h2",{className:"profile-name",children:[m[0].name,", ",m[0].age," years old"]}),Object(x.jsxs)("h5",{className:"profile-info",children:[Object(x.jsx)(y.a,{}),Object(x.jsx)("p",{children:m[0].location})]}),Object(x.jsxs)("h5",{className:"profile-info",children:[Object(x.jsx)(M.b,{}),Object(x.jsx)("p",{children:m[0].occupation})]}),Object(x.jsxs)("h5",{className:"profile-info",children:[Object(x.jsx)(M.a,{}),Object(x.jsx)("p",{children:m[0].education})]})]})]}),Object(x.jsx)("hr",{className:"divider"}),Object(x.jsxs)("div",{className:"profile-text",children:[Object(x.jsx)("h3",{className:"profile-text-title",children:"About me"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, rem?"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate doloribus nobis similique quibusdam perspiciatis dolorem ipsam mollitia eius asperiores. Ea facere at aliquid omnis."}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vel deserunt magnam consequatur officiis eos."})]})]})},B=t(27);var C=function(){return Object(x.jsxs)("div",{class:"login-page-wrapper",children:[Object(x.jsxs)("div",{class:"login-page-logo",children:[Object(x.jsx)(b.e,{id:"tinder-icon"}),Object(x.jsx)("h1",{children:"Welcome to OUR Tinder-Clone"}),Object(x.jsx)("p",{children:"Please follow these house rules"})]}),Object(x.jsxs)("div",{className:"login-page-messages",children:[Object(x.jsxs)("h2",{children:[Object(x.jsx)(B.a,{className:"check-icon"})," Be yourself"]}),Object(x.jsx)("p",{children:"Mak sure your photos, age, and bio are true to who you are."}),Object(x.jsxs)("h2",{children:[Object(x.jsx)(B.a,{className:"check-icon"})," Stay Safe"]}),Object(x.jsxs)("p",{children:["Don't be too quick to give out personal information."," ",Object(x.jsx)("span",{children:"Date Safely"})]}),Object(x.jsxs)("h2",{children:[Object(x.jsx)(B.a,{className:"check-icon"})," Play it cool"]}),Object(x.jsx)("p",{children:"Respect others and treat them as you would like to be treated."}),Object(x.jsxs)("h2",{children:[Object(x.jsx)(B.a,{})," Be proactive"]}),Object(x.jsx)("p",{children:"Always report bad behavior."})]}),Object(x.jsx)("div",{class:"button-wrapper",children:Object(x.jsx)(o.b,{to:"/cards",exact:!0,children:Object(x.jsx)("button",{children:"LOG IN"})})})]})};var W=function(){return Object(x.jsx)("div",{className:"body-container",children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{path:"/",exact:!0,children:Object(x.jsx)(C,{})}),Object(x.jsxs)(r.a,{path:"/cards",exact:!0,children:[Object(x.jsx)(N,{}),Object(x.jsx)(O,{})]}),Object(x.jsxs)(r.a,{path:"/messages/:person",exact:!0,children:[Object(x.jsx)(N,{backButton:"/messages"})," ",Object(x.jsx)(S,{Data:m})]}),Object(x.jsx)(r.a,{path:"/profile",exact:!0,children:Object(x.jsx)(k,{})}),Object(x.jsxs)(r.a,{path:"/messages",children:[Object(x.jsx)(N,{backButton:"/cards"}),Object(x.jsx)(v,{})]})]})})})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0e568cdf.chunk.js.map