(window.webpackJsonptest2=window.webpackJsonptest2||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),s=(n(13),n(14),n(1)),l=n(2),r=n(4),u=n(3),d=n(5),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={title:"Statistics",stat1:"Times caught slouching",stat2:"Time spent slouching",stat3:"test"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"stats"},o.a.createElement("h2",null,this.state.title),o.a.createElement("p",null,this.state.stat1),o.a.createElement("p",null,this.state.stat2),o.a.createElement("p",null,this.state.stat3))}}]),t}(o.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"establishWebcam",value:function(){var e=document.querySelector("#videoElement");document.createElement("canvas");if(navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia({video:{width:426,height:240}}).then((function(t){e.srcObject=t})).catch((function(e){console.error(e)}));var t="ws://localhost:3001",n=new WebSocket(t);n.onopen=function(){console.log("Connected to ".concat(t)),setInterval((function(){var t=document.createElement("canvas");t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob((function(e){n.send(e)}))}),3e3)},n.onmessage=function(e){console.log(e);var t=document.querySelector("#slouch"),n=JSON.parse(e.data);console.log(n),t.textContent=n.predictions[0].tagName}}}},{key:"componentDidMount",value:function(){this.establishWebcam()}},{key:"render",value:function(){return o.a.createElement("div",{class:"webcam"},o.a.createElement("video",{autoplay:"true",id:"videoElement"}),o.a.createElement("div",{id:"info"},o.a.createElement("p",{id:"slouch"})))}}]),t}(o.a.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(m,null)),o.a.createElement("div",null,o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4f1e515b.chunk.js.map