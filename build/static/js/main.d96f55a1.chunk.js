(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),o=a.n(c),s=(a(29),a(2)),r=a(3),l=a(6),u=a(4),p=a(5),d=(a(30),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{class:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement("a",{class:"navbar-item",href:"/"},"Dupli"),i.a.createElement("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))))}}]),t}(n.Component)),m=a(12),b=a(1),h=a(20),v=a.n(h),f=a(10),O=a.n(f),E=a(7),j=function(e){for(var t={},a=0;a<e.length;a++)if(""!==e[a].text){for(var n=e[a].text.split(","),i="",c=0;c<n.length;c++)i=i+"_"+n[c];void 0===t[i]?t[i]=0:(t[i]=t[i]++,e[a]={text:e[a].text,isDuplicate:!0})}return e},D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={text:"",isDuplicate:!1},e.onChange=e.onChange.bind(Object(b.a)(Object(b.a)(e))),e.onClick=e.onClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"onChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"onClick",value:function(e){console.log("UPDATE CLICKED"),e.preventDefault(),console.log(this.state.text),console.log(this.props.id);var t=this.props.items.products;t[this.props.id]={text:this.state.text,isDuplicate:!1},this.props.updateProduct(t)}},{key:"componentDidMount",value:function(){this.setState({text:this.props.value.text,isDuplicate:this.props.value.isDuplicate})}},{key:"componentWillReceiveProps",value:function(e){this.setState({text:e.value.text,isDuplicate:e.value.isDuplicate})}},{key:"render",value:function(){return i.a.createElement("div",{className:"column is-one-quarter"},i.a.createElement("article",{class:v()("media notification",{"is-info":!this.state.isDuplicate,"is-primary":this.state.isDuplicate})},i.a.createElement("div",{class:"media-content"},i.a.createElement("div",{class:"content"},i.a.createElement("p",{class:"is-size-5"},i.a.createElement("input",{class:"input",type:"text",name:"text",placeholder:"Ball,1,2,2,1,ball",value:this.state.text,onChange:this.onChange})),i.a.createElement("button",{onClick:this.onClick,className:"button is-danger"},"update")))))}}]),t}(n.Component);D.propType={updateProduct:O.a.func.isRequired,items:O.a.object.isRequired};var y=Object(E.b)(function(e){return{items:e.items}},{updateProduct:function(e){return function(t){console.log("FINAL LIST"),console.log(e),t({type:"UPDATE_PRODUCT",payload:j(e)})}}})(D),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={products:[]},e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({products:this.props.items.products})}},{key:"componentWillReceiveProps",value:function(e){e.items&&this.setState({products:e.items.products})}},{key:"render",value:function(){this.props.items;return console.log("this.props"),console.log(this.props),i.a.createElement("section",{class:"section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{className:"columns is-multiline"},this.state.products.map(function(e,t){return i.a.createElement(y,{value:e,key:t,id:t})}))))}}]),t}(n.Component),k=Object(E.b)(function(e){return{items:e.items}},{})(g),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onClick=e.onClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(e){e.preventDefault(),console.log("ADD CLICKED"),this.props.addProduct()}},{key:"render",value:function(){return i.a.createElement("div",{className:"hero-foot"},i.a.createElement("nav",{className:"tabs"},i.a.createElement("div",{className:"container"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("button",{class:"sticky button is-rounded is-primary",onClick:this.onClick},i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-plus"}))))))))}}]),t}(n.Component);C.propType={addProduct:O.a.func.isRequired,items:O.a.object.isRequired};var x=Object(E.b)(function(e){return{items:e.items}},{addProduct:function(){return function(e){e({type:"ADD_PRODUCT",payload:{}})}}})(C),w=a(8),_=a(22),P=a(23),T=a(16),N={products:[]},R=Object(w.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return Object(T.a)({},e,{products:[].concat(Object(P.a)(e.products),[{text:"",isDuplicate:!1}])});case"UPDATE_PRODUCT":return console.log(t.payload),Object(T.a)({},e,{products:t.payload});default:return e}}}),S=[_.a],U=Object(w.e)(R,{},Object(w.d)(w.a.apply(void 0,S),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(E.a,{store:U},i.a.createElement("div",{className:"hero is-fullheight"},i.a.createElement(d,null),i.a.createElement(k,null),i.a.createElement(x,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.d96f55a1.chunk.js.map