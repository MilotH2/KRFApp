!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[5334],{5334:function(t,i,o){"use strict";o.r(i),o.d(i,{Tab2PageModule:function(){return h}});var a=o(8809),r=o(1116),l=o(1462),u=o(940),c=o(9185),s=o(529),f=o(5614),d=o(2101);function p(n,e){if(1&n){var t=f.EpF();f.TgZ(0,"ion-card"),f.TgZ(1,"ion-item",5),f.NdJ("click",function(){var n=f.CHM(t).$implicit;return f.oxw().viewPlayerDetails(n)}),f.TgZ(2,"ion-thumbnail",6),f._UZ(3,"ion-img",7),f.qZA(),f.TgZ(4,"div"),f.TgZ(5,"h3",8),f._uU(6),f.ALo(7,"date"),f.qZA(),f.TgZ(8,"p",8),f._uU(9),f.qZA(),f.TgZ(10,"p",9),f._uU(11),f.qZA(),f.qZA(),f.TgZ(12,"ion-buttons",10),f.TgZ(13,"ion-button",1),f.NdJ("click",function(n){var e=f.CHM(t).$implicit,i=f.oxw();return n.stopPropagation(),i.editPlayer(e)}),f._UZ(14,"ion-icon",11),f.qZA(),f.qZA(),f.qZA(),f.qZA()}if(2&n){var i=e.$implicit,o=f.oxw();f.xp6(3),f.Q6J("src",i.profilePicture?o.environmenti.apiBase+"Files/"+i.profilePicture:o.environmenti.defaultProfilePicture),f.xp6(3),f.lnq("",null==i?null:i.firstName," ",null==i?null:i.lastName," | ",f.xi3(7,10,null==i?null:i.birthDate,"dd.MM.yyyy")," "),f.xp6(3),f.HOy("",null!=i&&i.ageGroup?"Senior":"Junior"," - ",null==i?null:i.playingPosition,", ",null==i?null:i.nationality,", ",null==i?null:i.birthTown,""),f.xp6(2),f.AsE("",null==i?null:i.id," | ",null==i?null:i.krfId,"")}}var g,y,Z=[{path:"",component:(g=function(){function t(e,i){n(this,t),this.navCtrl=e,this.webService=i,this.environmenti=s.N,this.playersList=[]}var i,o,a;return i=t,(o=[{key:"viewPlayerDetails",value:function(n){this.navCtrl.navigateForward("tabs/tab2/player-details/".concat(n.id),{state:{player:n}})}},{key:"createPlayer",value:function(){this.navCtrl.navigateForward("tabs/tab2/create-and-edit")}},{key:"editPlayer",value:function(n){this.navCtrl.navigateForward("tabs/tab2/create-and-edit",{state:{playerDetails:n}})}},{key:"ionViewWillEnter",value:function(){this.getPLayersList()}},{key:"getPLayersList",value:function(){var n=this;this.webService.calling_GET_From_Api("players").then(function(e){console.log(e),e.values.length&&(n.playersList=e.values)}).catch(function(n){console.log(n)})}}])&&e(i.prototype,o),a&&e(i,a),t}(),g.\u0275fac=function(n){return new(n||g)(f.Y36(a.SH),f.Y36(d.Q))},g.\u0275cmp=f.Xpm({type:g,selectors:[["app-tab2"]],decls:13,vars:1,consts:[["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["size-xs","12","size-lg","8","offset-lg","2"],[4,"ngFor","ngForOf"],["lines","none","detail","true","button","true",3,"click"],["slot","start",2,"zoom","1.4"],[3,"src"],[2,"margin","0"],[2,"margin","0","font-size","10px"],["slot","end"],["name","create-outline","slot","icon-only"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-header"),f.TgZ(1,"ion-toolbar"),f.TgZ(2,"ion-title"),f._uU(3," Players List "),f.qZA(),f.qZA(),f.qZA(),f.TgZ(4,"ion-content"),f.TgZ(5,"ion-fab",0),f.TgZ(6,"ion-fab-button",1),f.NdJ("click",function(){return e.createPlayer()}),f._UZ(7,"ion-icon",2),f.qZA(),f.qZA(),f.TgZ(8,"ion-grid"),f.TgZ(9,"ion-row"),f.TgZ(10,"ion-col",3),f.TgZ(11,"ion-list"),f.YNc(12,p,15,13,"ion-card",4),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&n&&(f.xp6(12),f.Q6J("ngForOf",e.playersList))},directives:[a.Gu,a.sr,a.wd,a.W2,a.IJ,a.W4,a.gu,a.jY,a.Nd,a.wI,a.q_,r.sg,a.PM,a.Ie,a.Bs,a.Xz,a.Sm,a.YG],pipes:[r.uU],styles:[""]}),g)},{path:"player-details",loadChildren:function(){return o.e(3719).then(o.bind(o,3719)).then(function(n){return n.PlayerDetailsPageModule})}},{path:"create-and-edit",loadChildren:function(){return Promise.all([o.e(8592),o.e(2924)]).then(o.bind(o,2924)).then(function(n){return n.CreateAndEditPageModule})}}],v=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),e}(),h=((y=function e(){n(this,e)}).\u0275fac=function(n){return new(n||y)},y.\u0275mod=f.oAB({type:y}),y.\u0275inj=f.cJS({imports:[[a.Pc,r.ez,l.u5,u.e,v]]}),y)}}])}();