(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{33:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(4),i=n.n(o),s=(n(33),n(6)),u=n.n(s),l=n(12),j=n(9),b=n(5),d=n(10),h=(n(13),n(22)),f=n.n(h),m=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=19614355-51590948188acde31377fd3a2&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=(n(53),function(e){var t=e.children;return Object(a.jsx)("div",{className:"container",children:t})});n(54);var p=function(e){var t=e.onHandleSubmit,n=Object(r.useState)(""),c=Object(b.a)(n,2),o=c[0],i=c[1];return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return d.b.info("Please enter a value for search images");t(o),i("")},children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm__button",children:Object(a.jsx)("span",{className:"SearchForm__button__label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm__input",type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return i(t.value)}})]})})};n(57);var O=function(e){var t=e.webformatURL,n=e.largeImageURL,r=e.tags,c=e.onOpenModal;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:t,alt:r,"data-source":n,className:"ImageGalleryItem_image",onClick:c})})};n(58);var v=function(e){var t=e.images,n=e.onOpenModal;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(a.jsx)(O,{webformatURL:r,largeImageURL:c,tags:o,onOpenModal:n},t)}))})};n(59);var x=function(e){var t=e.onLoadMore;return Object(a.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},w=n(23),y=n.n(w);n(79);var S=function(){return Object(a.jsx)("div",{className:"Loader",children:Object(a.jsx)(y.a,{type:"Grid",color:"#00BFFF",height:100,width:100,timeout:0})})},k=n(24),L=n(25),N=n(27),C=n(26),F=(n(80),document.querySelector("#modalPortal")),I=function(e){Object(N.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:e,alt:""})})}),F)}}]),n}(r.Component);var M=function(e){var t=e.error;return Object(a.jsx)("div",{role:"alert",children:Object(a.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})};var _=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),i=Object(b.a)(o,2),s=i[0],h=i[1],f=Object(r.useState)(""),O=Object(b.a)(f,2),w=O[0],y=O[1],k=Object(r.useState)(1),L=Object(b.a)(k,2),N=L[0],C=L[1],F=Object(r.useState)(null),_=Object(b.a)(F,2),U=_[0],R=_[1],T=Object(r.useState)(!1),B=Object(b.a)(T,2),D=B[0],E=B[1],P=Object(r.useState)(!1),G=Object(b.a)(P,2),H=G[0],K=G[1];Object(r.useEffect)((function(){n&&function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(n,N);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",R("No results were found for ".concat(n,"!")));case 6:h((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R("Something went wrong. Try again.");case 12:return e.prev=12,E(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[N,n]);var q=function(){K(!H)},J=function(){setTimeout((function(){window.scrollBy(0,window.innerHeight+150)}),1e3)};return Object(a.jsxs)(g,{children:[Object(a.jsx)(p,{onHandleSubmit:function(e){c(e),h([]),C(1),R(null),E(!0)}}),U&&Object(a.jsx)(M,{texterror:U}),s.length>0&&Object(a.jsx)(v,{images:s,onOpenModal:function(e){y(e.target.dataset.source),q()}}),D&&Object(a.jsx)(S,{}),!D&&s.length>0&&Object(a.jsx)(x,{onLoadMore:function(){E(!0),C((function(e){return e+1})),J()}}),H&&Object(a.jsx)(I,{onToggleModal:q,largeImageURL:w}),Object(a.jsx)(d.a,{autoClose:3700})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),U()}},[[81,1,2]]]);
//# sourceMappingURL=main.be764883.chunk.js.map