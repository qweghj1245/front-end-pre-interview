(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3e3d"],{"29ff":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}}),a("div",{staticClass:"wrap"},[a("nav",{staticClass:"Content__P"},[a("div",{staticClass:"back",on:{click:t.backData}},[t._v("Back")]),a("div",{staticClass:"Content__title",staticStyle:{"text-overflow":"ellipsis"}},[t._v(t._s(t.author.title))]),a("router-link",{staticClass:"edit",attrs:{to:{path:"/edit",query:{to:""+t.pid}}}},[t._v("Edit")])],1),a("section",[a("div",{staticClass:"Content__info"},[a("div",{staticClass:"Content__Author"},[t._v("Author: "),a("span",[t._v(t._s(t.author.author))])]),a("div",{staticClass:"Content__Time"},[t._v(t._s(t.author.publicationDate))])]),a("div",{staticClass:"Content__text"},[a("p",[t._v(t._s(t.author.description))])])])])],1)},e=[],n={data:function(){return{}},methods:{getSingleData:function(){this.$store.dispatch("getSingleData")},backData:function(){var t=this;this.$store.state.isLoading=!0,this.$router.go(-1),setTimeout(function(){t.$store.state.isLoading=!1},600)}},computed:{author:function(){return this.$store.state.author},pid:function(){return this.$store.state.pid},isLoading:function(){return this.$store.state.isLoading}},created:function(){this.$store.state.pid=this.$route.params.id,this.getSingleData()},watch:{pid:"getSingleData"}},o=n,r=a("2877"),c=Object(r["a"])(o,s,e,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b3e3d.5224f8f0.js.map