(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(90)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),o=a.n(l),r=(a(42),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=(a(43),a(44),a(34)),v=a.n(d),p=a(35),E=a.n(p);var b=function(e){var t=e.loading;return c.a.createElement("div",{className:"spinner-wrapper"},c.a.createElement("div",{className:"spinner ".concat(t?"":"spinner--hide")},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))},f=a(14),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleMenu",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"handleLinkClick",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.data,a=this.state.isOpen;return c.a.createElement("div",{className:"nav",id:"navbar"},c.a.createElement("div",{className:"nav-content"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"/mono-clone/"},c.a.createElement("img",{src:"".concat("https://mono-clone.s3.ap-northeast-2.amazonaws.com/","images/mono-logo-horizontal.png"),className:"nav-logo",alt:"logo"})),c.a.createElement("div",{id:"mobile-btn",onClick:function(){return e.toggleMenu()}},c.a.createElement("i",{className:"fa fa-bars hanmurger"}))),c.a.createElement("div",{className:"collapse ".concat(a?"open":"")},c.a.createElement("ul",{className:"nav-items"},t.map(function(t,a){var n=t.title;return c.a.createElement(O,{key:a,title:n,index:a,onClick:function(){e.handleLinkClick()}})})))))}}]),t}(n.Component),O=function(e){return c.a.createElement("li",{className:"nav-item"},"blog"===e.title?c.a.createElement("a",{href:"http://monolabs.io/blog",target:"_blank",rel:"noopener noreferrer"},e.title):c.a.createElement(f.Link,{activeClass:"active",to:"section".concat(e.index),spy:!0,smooth:!0,offset:-70,duration:1e3,onClick:e.onClick},e.title))},j=h,g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{id:"menu-top",onClick:this.scrollToTop},c.a.createElement("div",{id:"menu-top_inside",style:{backgroundImage:"url(".concat("https://mono-clone.s3.ap-northeast-2.amazonaws.com/","images/menu_bottom_top_bg.png)")}})),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://fb.me/monolabs.io",className:"icon",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-facebook-f"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://twitter.com/monolabs1",className:"icon",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-twitter"})))),c.a.createElement("p",null,"\xa9 mono labs corp. ",(new Date).getFullYear()))}}]),t}(n.Component),N=a(36),k=a.n(N);function y(e){var t=e.text,a=e.fadeIn;return c.a.createElement(k.a,{top:!0},c.a.createElement("h1",{className:a,dangerouslySetInnerHTML:{__html:t}}))}var w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onNextText=function(){e.state.activeIndex<2?e.setState({activeIndex:e.state.activeIndex+1}):e.setState({activeIndex:0})},e.state={activeIndex:0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.onNextText,5e3)}},{key:"render",value:function(){var e=this.state.activeIndex;return c.a.createElement("div",{className:"home-content"},["\uadc0\uc0ac\uc758 <em>\ub370\uc774\ud130</em>\ub294 <em>\uc548\ub155</em>\ud558\uc2ed\ub2c8\uae4c?","<em>\ube14\ub85d\uccb4\uc778</em> \uae30\ubc18 <em>\ube45\ub370\uc774\ud130</em> \ubd84\uc11d\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c <em>\uc194\ub8e8\uc158</em>\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.","<em>\uace0\uac1d \ub370\uc774\ud130</em>\ub294 \uae30\uc5c5\uc758 <em>\ubbf8\ub798\ub97c \ubcf4\uc7a5</em>\ud558\ub294 \ub9e4\uc6b0 \uc911\uc694\ud55c <em>\uc790\uc0b0</em>\uc785\ub2c8\ub2e4."].map(function(t,a){return c.a.createElement(y,{key:a,text:t,fadeIn:e===a?"fadeIn":""})}),c.a.createElement("p",null,"\ub370\uc774\ud130 \uad00\ub9ac",c.a.createElement("span",null,"\u2022"),"CM \ucd5c\uc801\ud654",c.a.createElement("span",null,"\u2022"),"CRM \uc194\ub8e8\uc158",c.a.createElement("span",null,"\u2022"),"\ube0c\ub79c\ub4dc \ubcf4\ud638",c.a.createElement("span",null,"\u2022"),"\ud06c\ub9bd\ud1a0 \ucf54\ub4dc \uc815\ud488 \ub77c\ubca8"),c.a.createElement(f.Link,{className:"mission-btn",activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:-70,duration:1e3},"OUR MISSION"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"_onReady",value:function(e){}},{key:"_onEnd",value:function(e){e.target.playVideo()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w,null),c.a.createElement("div",{className:"video-background",id:"section0"},c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,title:"background-video"},c.a.createElement("source",{src:"".concat("https://mono-clone.s3.ap-northeast-2.amazonaws.com/","videos/background_vid_dark.mp4"),type:"video/mp4"}))))}}]),t}(n.Component);var x=function(e){var t=e.title,a=e.subtitle;return c.a.createElement("div",{className:"section-title"},c.a.createElement("h1",null,t),c.a.createElement("span",{className:"border"}),c.a.createElement("p",null,a))},I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e)))._onReady=function(e){e.target.currentTime=2},a.state={active:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(t){var a=document.querySelector("#section1").getBoundingClientRect().top;window.scrollY>=a?e.setState({active:!0}):e.setState({active:!1})})}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.subtitle,l=this.state.active;return c.a.createElement("div",{className:"section mission"},c.a.createElement("div",{className:"section-content",id:"section".concat(t)},c.a.createElement(x,{title:a,subtitle:n}),c.a.createElement("div",{className:"video-container ".concat(l?"fadeIn":"")},c.a.createElement("video",{id:"introVideo",controls:"controls",preload:"auto",muted:!0,title:"background-video",onLoadedMetadata:this._onReady},c.a.createElement("source",{src:"".concat("https://mono-clone.s3.ap-northeast-2.amazonaws.com/","videos/introduce_monolabs.mp4"),type:"video/mp4"})))))}}]),t}(n.Component);function _(e){var t=e.text,a=e.active;return c.a.createElement("div",{className:"card ".concat(a?"fadeIn":"")},c.a.createElement("p",null,t))}var S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(t){var a=document.querySelector("#section2").getBoundingClientRect().top;window.scrollY>=a?e.setState({active:!0}):e.setState({active:!1})})}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.subtitle,l=e.content,o=this.state.active;return c.a.createElement("div",{className:"section problem"},c.a.createElement("div",{className:"section-content",id:"section".concat(t)},c.a.createElement(x,{title:a,subtitle:n}),c.a.createElement("div",{className:"card-content"},l.map(function(e,t){return c.a.createElement(_,{key:t,text:e,active:o})}))))}}]),t}(n.Component);var M=function(e){var t=e.icon,a=e.title,n=e.text;return c.a.createElement("div",{className:"card"},c.a.createElement("i",{className:t}),c.a.createElement("h5",null,a),c.a.createElement("p",null,n))},T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.subtitle,l=e.content;return c.a.createElement("div",{className:"section solution"},c.a.createElement("div",{className:"section-content",id:"section".concat(t)},c.a.createElement(x,{title:a,subtitle:n}),c.a.createElement("div",{className:"technology"},l.map(function(e,t){return c.a.createElement(M,Object.assign({key:t},e))}))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.subtitle;return c.a.createElement("div",{className:"section partner"},c.a.createElement("div",{className:"section-content",id:"section".concat(t)},c.a.createElement(x,{title:a,subtitle:n})),c.a.createElement("div",{className:"blog-content"},c.a.createElement("div",{className:"section-content"},c.a.createElement("p",null,"\ube14\ub85c\uadf8\uc5d0\uc11c \ucd5c\uc2e0 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694."),c.a.createElement("p",null,c.a.createElement("a",{className:"blog-btn",href:"http://monolabs.io/blog",target:"_blank",rel:"noopener noreferrer"},"BLOG")))))}}]),t}(n.Component),z=a(15),R=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(z.Map,{className:"map",google:this.props.google,zoom:15,style:{width:"100%",height:"100%"},initialCenter:{lat:37.498965,lng:127.0351}},c.a.createElement(z.Marker,{position:{lat:37.498965,lng:127.0351}}))}}]),t}(n.Component),A=Object(z.GoogleApiWrapper)({apiKey:"AIzaSyCQABejeP321EA1U-_Zc4wX67atI3ubjg8"})(R),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=e.subtitle;return c.a.createElement("div",{className:"section contact"},c.a.createElement("div",{className:"section-content",id:"section".concat(t)},c.a.createElement(x,{title:a,subtitle:n}),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("i",{className:"far fa-envelope fa-2x"}),c.a.createElement("h5",{className:"company-mail"},"contact@monolabs.io")),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"}),c.a.createElement("h5",{className:"company-address"},"\uc11c\uc6b8 \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 26\uae38 14 06236"))),c.a.createElement("div",{className:"map-container"},c.a.createElement(A,null))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[],loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://ec2-52-78-82-143.ap-northeast-2.compute.amazonaws.com:5000","/api/data"),{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then(function(t){e.setState(function(){return{data:t.data,loading:!1}})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading;return a?c.a.createElement(b,{loading:a}):c.a.createElement("div",{className:"body"},c.a.createElement(E.a,null,c.a.createElement("title",null,"Monolabs"),c.a.createElement("meta",{name:"description",content:""})),c.a.createElement(C,null),c.a.createElement("div",{id:"wrapper"},c.a.createElement(j,{data:t}),c.a.createElement("main",null,c.a.createElement(I,{item:t[1]}),c.a.createElement(S,{item:t[2]}),c.a.createElement(T,{item:t[3]}),c.a.createElement(L,{item:t[4]}),c.a.createElement(B,{item:t[5]})),c.a.createElement(g,null)))}}]),t}(n.Component);o.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f0c55e27.chunk.js.map