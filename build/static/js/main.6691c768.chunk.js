(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),o=t.n(c),r=(t(63),t(40),t(25)),i=t(49),s=t.n(i),u=t(128),m=t(132),p=t(133),v=t(134),g=t(35),d=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDxeQW0YiShwDz1ireJ8e3hwM5EZ0M6CTE"})((function(e){var a=e.hospitals.map((function(e,a){return l.a.createElement(g.Marker,{key:a,id:a,position:{lat:e.location.lat,lng:e.location.lng},title:e.name,name:e.name,onClick:console.log(e.name)})}));console.log(a);return l.a.createElement("div",null,l.a.createElement(g.Map,{google:window.google,zoom:11,style:{width:"100%",height:"100%",display:"relative",top:"1rem"},initialCenter:{lat:6.5244,lng:3.3792}},a))})),h=function(){var e=Object(n.useState)("10000"),a=Object(r.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)("Lagos"),i=Object(r.a)(o,2),g=i[0],h=i[1],E=Object(n.useState)([{location:{lat:6.5244,lng:3.3792},name:"Ikeja General hospital"}]),f=Object(r.a)(E,2),y=f[0],b=f[1],j=Object(n.useState)("hospitals"),k=Object(r.a)(j,2),O=k[0],C=k[1],w=Object(n.useState)([]),S=Object(r.a)(w,1)[0];Object(n.useEffect)((function(){var e="".concat(O,"+in+").concat(g),a="https://maps.googleapis.com/maps/api/place/textsearch/json?query=".concat(e,"&key=AIzaSyBjuNlidxM3Hf3eMRI24CTCyOf8_EK82IM&radius=").concat(t);s()({url:a,method:"get",headers:{"content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){var a=e.data.results.map((function(e){var a=e.name,t=e.geometry,n={};return n.name=a,n.location=t.location,n}));b(a)})).catch(console.error)}),[t,b,g,O]);var I=function(e){var a=document.querySelectorAll(".active");e.target.classList.contains("active")?e.target.classList.remove("active"):(console.log(e.target),C(e.target.innerText),a.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"))};return l.a.createElement("div",null,l.a.createElement("div",{className:"search"},l.a.createElement("h1",null,"Finder"),l.a.createElement("div",null," ",l.a.createElement(u.a,{color:"primary",onClick:I,value:"hsp"},"Hospitals"),l.a.createElement(u.a,{color:"primary",onClick:I},"Pharmacies"),l.a.createElement(u.a,{className:"tag",color:"primary",onClick:I},"Clinics")),l.a.createElement(m.a,{placeholder:"search",onChange:function(e){h(e.target.value)}}),l.a.createElement(p.a,{labelId:"radius",id:"select",value:"10000",onChange:function(e){"Select radius"!==e.target.value&&(c(+e.target.value),S.push(e.target.value),console.log(S))}},l.a.createElement(v.a,{value:"select radius"},"Select radius"),l.a.createElement(v.a,{value:"10000"},"10km"),l.a.createElement(v.a,{value:"20000"},"20km"),l.a.createElement(v.a,{value:"30000"},"30km"),l.a.createElement(v.a,{value:"40000"},"40km"),l.a.createElement(v.a,{value:"50000"},"50km"))),l.a.createElement(d,{hospitals:y}))};var E=function(){return l.a.createElement("div",null,l.a.createElement(h,null))};o.a.render(l.a.createElement(E,null),document.getElementById("root"))},40:function(e,a,t){},58:function(e,a,t){e.exports=t(100)},63:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.6691c768.chunk.js.map