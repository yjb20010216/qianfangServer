"use strict";(self["webpackChunkqianfang"]=self["webpackChunkqianfang"]||[]).push([[128],{4128:function(t,i,s){s.r(i),s.d(i,{default:function(){return y}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"city_body"},[i("div",{staticClass:"city_list"},[t.isLoading?i("MyLoading"):i("div",{staticClass:"city_hot"},[i("h2",[t._v("热门城市")]),i("ul",{staticClass:"clearfix"},t._l(t.hotList,(function(s){return i("li",{key:s.id,on:{click:function(i){return t.handleToCity(s.name,s.cityId)}}},[t._v(" "+t._s(s.name)+" ")])})),0)]),i("div",{ref:"city_sort",staticClass:"city_sort"},t._l(t.cityList,(function(s){return i("div",{key:s.type},[i("h2",[t._v(t._s(s.type))]),i("ul",t._l(s.list,(function(s){return i("li",{key:s.cityId,on:{click:function(i){return t.handleToCity(s.name,s.cityId)}}},[t._v(" "+t._s(s.name)+" ")])})),0)])})),0)],1),i("div",{staticClass:"city_index"},[i("ul",t._l(t.cityList,(function(s,e){return i("li",{key:s.type,on:{touchstart:function(i){return t.handleToIndex(e)}}},[t._v(" "+t._s(s.type)+" ")])})),0)])])},n=[],o=(s(7658),s(8430)),a={name:"MyCity",data(){return{cityList:[],indexList:[],hotList:[],isLoading:!0}},mounted(){const t=window.localStorage.getItem("cityList"),i=window.localStorage.getItem("hotList");t&&i?(this.cityList=JSON.parse(t),this.hotList=JSON.parse(i),this.isLoading=!1):(0,o.Z)({url:"/gateway?k=1132003",headers:{"X-Host":"mall.film-ticket.city.list"}}).then((t=>{this.renderCity(t.data.data.cities),this.isLoading=!1}))},methods:{renderCity(t){const i=[];for(let s=65;s<91;s++)i.push(String.fromCharCode(s));i.forEach((i=>{const s=t.filter((t=>t.pinyin[0].toUpperCase()===i));s.length>0&&(this.cityList.push({type:i,list:s}),this.indexList.push(i))}));for(let s=0;s<t.length;s++)1===t[s].isHot&&this.hotList.push(t[s]);window.localStorage.setItem("cityList",JSON.stringify(this.cityList)),window.localStorage.setItem("hotList",JSON.stringify(this.hotList))},handleToIndex(t){const i=this.$refs.city_sort.getElementsByTagName("h2");console.log(i[t].offsetTop+20),this.$refs.city_sort.parentNode.scrollTop=i[t].offsetTop-20},handleToCity(t,i){this.$store.commit("city/CITY_INFO",{name:t,cityId:i}),window.localStorage.setItem("nowCityName",t),window.localStorage.setItem("nowCityCityId",i),this.$router.push("/film/nowplaying")}}},c=a,l=s(1001),r=(0,l.Z)(c,e,n,!1,null,"84cd411c",null),y=r.exports}}]);
//# sourceMappingURL=128.bed32918.js.map