(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{255:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("0925a2e8",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n(255)},261:function(t,e,n){var r=n(79)((function(i){return i[1]}));r.push([t.i,'body[data-v-3ddea60f]{background:#11042c;background:linear-gradient(180deg,#11042c,#3f1040);height:100%;font-family:"Libre Franklin",sans-serif}.app[data-v-3ddea60f]{max-width:100%;overflow:hidden}.nuxt-content h2[data-v-3ddea60f]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-3ddea60f]{font-weight:700;font-size:22px}.nuxt-content p[data-v-3ddea60f]{margin-bottom:20px}',""]),r.locals={},t.exports=r},374:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(38),{methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(260),n(48)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",{staticClass:"app container"},[n("div",{staticClass:"max-w-xl mx-auto"},[n("div",{staticClass:"h-40 lg:h-60"}),t._v(" "),n("article",{staticClass:"nuxt-content h-screen text-white"},[n("p",{staticClass:"text-xs"},[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),n("h1",{staticClass:"text-2xl"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",{staticClass:"text-base font-light"},[t._v(t._s(t.article.description))]),t._v(" "),n("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1)])])])}),[],!1,null,"3ddea60f",null);e.default=component.exports}}]);