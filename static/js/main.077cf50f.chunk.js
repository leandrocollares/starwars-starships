(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(41)},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),c=t.n(r),s=t(10),i=t(11),m=t(14),o=t(12),d=t(15),p=t(13),h=t.n(p),v=function(e){var a=e.list;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"intro"},n.a.createElement("h1",null,"Starwars Starships"),n.a.createElement("p",null,"Data fetched from"," ",n.a.createElement("a",{className:"App-link",href:"https://swapi.co/",target:"_blank",rel:"noopener noreferrer"},"SWAPI"))),n.a.createElement("div",{className:"rtable rtable--collapse"},n.a.createElement("div",{className:"rtable-row rtable-row--head"},n.a.createElement("div",{className:"rtable-cell name-cell column-heading"},"name"),n.a.createElement("div",{className:"rtable-cell crew-cell column-heading"},"crew"),n.a.createElement("div",{className:"rtable-cell passengers-cell column-heading"},"passengers"),n.a.createElement("div",{className:"rtable-cell hyperdrive-cell column-heading"},"hyperdrive rating")),a.map(function(e,a){return n.a.createElement("div",{key:e.url.match(/[0-9]+/),className:"rtable-row ".concat(a%2?"is-striped":"")},n.a.createElement("div",{className:"rtable-cell name-cell"},n.a.createElement("div",{className:"rtable-cell--content   "},e.name)),n.a.createElement("div",{className:"rtable-cell crew-cell"},n.a.createElement("div",{className:"rtable-cell--heading"},"crew"),n.a.createElement("div",{className:"rtable-cell--content crew-content"},e.crew)),n.a.createElement("div",{className:"rtable-cell passengers-cell"},n.a.createElement("div",{className:"rtable-cell--heading"},"passengers"),n.a.createElement("div",{className:"rtable-cell--content passengers-content"},e.passengers)),n.a.createElement("div",{className:"rtable-cell hyperdrive-cell"},n.a.createElement("div",{className:"rtable-cell--heading"},"hyperdrive rating"),n.a.createElement("div",{className:"rtable-cell--content hyperdrive-content"},e.hyperdrive_rating)))})))},u=(t(40),function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={starshipInfo:[],isLoaded:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getStarshipInfo()}},{key:"getStarshipInfo",value:function(){var e=this;return h.a.get("https://swapi.co/api/starships/").then(function(a){var t=a.data.results;e.setState({starshipInfo:t,isLoaded:!0})})}},{key:"render",value:function(){var e=this.state,a=e.starshipInfo;return e.isLoaded?n.a.createElement(v,{list:a}):n.a.createElement("p",{className:"info"},"Obtaining data... ")}}]),a}(l.Component));c.a.render(n.a.createElement(u,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.077cf50f.chunk.js.map