(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86c417f0"],{"04c6":function(t,e,a){"use strict";var n=a("5467"),i=a.n(n);i.a},"1b33":function(t,e,a){"use strict";var n=a("83dc"),i=a.n(n);i.a},5467:function(t,e,a){},"83dc":function(t,e,a){},"8d28":function(t,e,a){"use strict";var n=a("ede7"),i=a.n(n);i.a},"91df":function(t,e,a){},a48e:function(t,e,a){"use strict";var n=a("91df"),i=a.n(n);i.a},c84b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("detail-banner",{attrs:{bannerImg:t.bannerImg,sightName:t.sightName}}),a("detail-header"),a("detail-list",{attrs:{categoryList:t.categoryList}}),a("div",{staticClass:"height"})],1)},i=[],s=(a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"banner-img"},[a("img",{attrs:{src:t.bannerImg,alt:""}})]),a("div",{staticClass:"banner-title"},[a("p",[t._v(t._s(t.sightName))])]),t._m(0)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-icon"},[a("span",{staticClass:"iconfont icon-search"}),a("span",{staticClass:"number"},[t._v("36")])])}],o={name:"DetailBanner",props:{sightName:String,bannerImg:String}},l=o,u=(a("a48e"),a("2877")),d=Object(u["a"])(l,r,c,!1,null,"c1197014",null),h=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-header"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"iconfont icon-leftarrow go-back",on:{click:t.handleBackClick}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"detail-header-content",style:t.opactiy},[a("span",{staticClass:"iconfont icon-leftarrow",on:{click:t.handleBackClick}}),a("p",{staticClass:"header-title"},[t._v("查看详情")])])])},f=[],v={name:"DetailHeader",data:function(){return{isShow:!0,opactiy:{opactiy:""}}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{handleBackClick:function(){this.$router.push("/")},scroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;if(t>30){this.isShow=!1;var e=t/100;this.opactiy={opacity:e}}else this.isShow=!0}}},w=v,g=(a("04c6"),Object(u["a"])(w,m,f,!1,null,"4b06b59a",null)),p=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-list"},t._l(t.categoryList,(function(e,n){return a("div",{key:n},[a("div",{staticClass:"ticket border-bottom",on:{click:function(a){return t.handleIsShow(e)}}},[a("span",{staticClass:"icon"}),a("div",[t._v(t._s(e.title))])]),a("transition",[e.children?a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"chirdren"},[a("detail-list",{attrs:{categoryList:e.children}})],1):t._e()])],1)})),0)},y=[],C={name:"DetailList",props:{categoryList:Array},data:function(){return{isShow:!1}},methods:{handleIsShow:function(t){t.children&&(this.isShow=!this.isShow)}}},_=C,k=(a("1b33"),Object(u["a"])(_,b,y,!1,null,"e56f33ca",null)),S=k.exports,I=(a("d3b7"),a("751a"));function L(){return new Promise((function(t,e){Object(I["a"])({url:"/api/mock/detail.json",success:function(e){t(e)},error:function(t){e(t)}})}))}var D={name:"Detail",components:{DetailBanner:h,DetailHeader:p,DetailList:S},mounted:function(){this.getDetailData()},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},methods:{getDetailData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent,n=a.data,n.ret&&n.data&&(n=n.data,t.sightName=n.sightName,t.bannerImg=n.bannerImg,t.gallaryImgs=n.gallaryImgs,t.categoryList=n.categoryList);case 5:case"end":return e.stop()}}),e)})))()}}},N=D,x=(a("8d28"),Object(u["a"])(N,n,i,!1,null,"5c554e31",null));e["default"]=x.exports},ede7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-86c417f0.de6bf080.js.map