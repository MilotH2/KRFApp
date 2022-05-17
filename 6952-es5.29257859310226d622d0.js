!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,i,o){return i&&t(n.prototype,i),o&&t(n,o),n}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[6952],{6952:function(t,o,e){"use strict";e.r(o),e.d(o,{Tab2PageModule:function(){return Y}});var l=e(8809),r=e(1116),a=e(1462),u=e(940),c=e(9185),s=e(4762),p=e(529),d=e(5614);function g(n,t){if(1&n&&(d.TgZ(0,"ion-item"),d._UZ(1,"ion-icon",2),d.TgZ(2,"div"),d.TgZ(3,"p"),d._uU(4),d.qZA(),d.qZA(),d.qZA()),2&n){var i=t.$implicit;d.xp6(1),d.s9C("color",i.color),d.xp6(3),d.Oqu(i.text)}}var f=function(){var t=function(){function t(){n(this,t),this.statusColors=[{color:"success",text:"Approved"},{color:"warning",text:"Pending"},{color:"danger",text:"Rejected"},{color:"secondary",text:"Update Request Pending"}]}return i(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-information"]],decls:5,vars:1,consts:[[1,"ion-padding"],[4,"ngFor","ngForOf"],["slot","start","name","ellipse",2,"margin","5px",3,"color"]],template:function(n,t){1&n&&(d.TgZ(0,"ion-grid",0),d.TgZ(1,"h6"),d._uU(2,"Player Statuses"),d.qZA(),d.qZA(),d.TgZ(3,"ion-list"),d.YNc(4,g,5,2,"ion-item",1),d.qZA()),2&n&&(d.xp6(4),d.Q6J("ngForOf",t.statusColors))},directives:[l.jY,l.q_,r.sg,l.Ie,l.gu],styles:[""]}),t}(),Z=e(5417),v=e(2101),y=e(7203),b=e(749);function h(n,t){1&n&&(d.TgZ(0,"ion-buttons",10),d._UZ(1,"ion-back-button",11),d.qZA())}function m(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",12),d.NdJ("click",function(){return d.CHM(i),d.oxw().logout()}),d._UZ(1,"ion-icon",13),d.qZA()}}function x(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-fab",14),d.TgZ(1,"ion-fab-button",2),d.NdJ("click",function(){return d.CHM(i),d.oxw().createPlayer()}),d._UZ(2,"ion-icon",15),d.qZA(),d.qZA()}}function A(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",12),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw(2).$implicit,o=d.oxw();return n.stopPropagation(),o.deletePlayer(t.id)}),d._UZ(1,"ion-icon",23),d.qZA()}}function T(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",2),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw(2).$implicit,o=d.oxw();return n.stopPropagation(),o.editPlayer(t)}),d._UZ(1,"ion-icon",24),d.qZA()}}function q(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-card"),d.TgZ(1,"ion-item",17),d.NdJ("click",function(){d.CHM(i);var n=d.oxw().$implicit;return d.oxw().viewPlayerDetails(n)}),d.TgZ(2,"ion-avatar",10),d._UZ(3,"ion-img",18),d.qZA(),d.TgZ(4,"div",19),d.TgZ(5,"p"),d._uU(6),d.ALo(7,"date"),d.qZA(),d.TgZ(8,"p"),d._uU(9),d.qZA(),d.TgZ(10,"p"),d._uU(11),d.qZA(),d.qZA(),d._UZ(12,"ion-icon",20),d.TgZ(13,"ion-buttons",21),d.YNc(14,A,2,0,"ion-button",4),d.YNc(15,T,2,0,"ion-button",22),d.qZA(),d.qZA(),d.qZA()}if(2&n){var o=d.oxw().$implicit,e=d.oxw();d.xp6(3),d.Q6J("src",o.profilePictureFullPath?o.profilePictureFullPath:e.environmenti.defaultProfilePicture),d.xp6(3),d.lnq("",null==o?null:o.firstName," ",null==o?null:o.lastName," | ",d.xi3(7,13,null==o?null:o.birthDate,"dd.MM.yyyy")," "),d.xp6(3),d.HOy("",null!=o&&o.ageGroup?"Senior":"Junior"," - ",null==o?null:o.playingPosition,", ",null==o?null:o.nationality,", ",null==o?null:o.birthTown,""),d.xp6(2),d.AsE("",null==o?null:o.id," | ",null==o?null:o.krfId,""),d.xp6(1),d.s9C("color",e.publicServices.getClassForCardStatusTyle(o.status)),d.xp6(2),d.Q6J("ngIf",o.status==e.playerStatusesENUMS.pending),d.xp6(1),d.Q6J("ngIf",!e.clubId)}}function w(n,t){if(1&n&&(d.TgZ(0,"div"),d.YNc(1,q,16,16,"ion-card",16),d.qZA()),2&n){var i=t.$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngIf",0==i.ageGroup&&i.status!=o.playerStatusesENUMS.rejected)}}function P(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",12),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw(3).$implicit,o=d.oxw();return n.stopPropagation(),o.deletePlayer(t.id)}),d._UZ(1,"ion-icon",23),d.qZA()}}function I(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",2),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw(3).$implicit,o=d.oxw();return n.stopPropagation(),o.editPlayer(t)}),d._UZ(1,"ion-icon",24),d.qZA()}}function N(n,t){if(1&n&&(d.TgZ(0,"ion-buttons",21),d.YNc(1,P,2,0,"ion-button",4),d.YNc(2,I,2,0,"ion-button",22),d.qZA()),2&n){var i=d.oxw(2).$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngIf",i.status==o.playerStatusesENUMS.pending),d.xp6(1),d.Q6J("ngIf",!o.clubId)}}function C(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-card"),d.TgZ(1,"ion-item",17),d.NdJ("click",function(){d.CHM(i);var n=d.oxw().$implicit;return d.oxw().viewPlayerDetails(n)}),d.TgZ(2,"ion-avatar",10),d._UZ(3,"ion-img",18),d.qZA(),d.TgZ(4,"div"),d.TgZ(5,"div",19),d.TgZ(6,"p"),d._uU(7),d.ALo(8,"date"),d.qZA(),d.TgZ(9,"p"),d._uU(10),d.qZA(),d.TgZ(11,"p"),d._uU(12),d.qZA(),d.qZA(),d.qZA(),d._UZ(13,"ion-icon",20),d.YNc(14,N,3,2,"ion-buttons",25),d.qZA(),d.qZA()}if(2&n){var o=d.oxw().$implicit,e=d.oxw();d.xp6(3),d.Q6J("src",o.profilePictureFullPath?o.profilePictureFullPath:e.environmenti.defaultProfilePicture),d.xp6(4),d.lnq("",null==o?null:o.firstName," ",null==o?null:o.lastName," | ",d.xi3(8,12,null==o?null:o.birthDate,"dd.MM.yyyy")," "),d.xp6(3),d.HOy("",null!=o&&o.ageGroup?"Senior":"Junior"," - ",null==o?null:o.playingPosition,", ",null==o?null:o.nationality,", ",null==o?null:o.birthTown,""),d.xp6(2),d.AsE("",null==o?null:o.id," | ",null==o?null:o.krfId,""),d.xp6(1),d.s9C("color",e.publicServices.getClassForCardStatusTyle(o.status)),d.xp6(1),d.Q6J("ngIf",!e.clubId)}}function U(n,t){if(1&n&&(d.TgZ(0,"div"),d.YNc(1,C,15,15,"ion-card",16),d.qZA()),2&n){var i=t.$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngIf",1==i.ageGroup&&i.status!=o.playerStatusesENUMS.rejected)}}function J(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-button",2),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw(2).$implicit,o=d.oxw();return n.stopPropagation(),o.editPlayer(t)}),d._UZ(1,"ion-icon",24),d.qZA()}}function _(n,t){if(1&n){var i=d.EpF();d.TgZ(0,"ion-card"),d.TgZ(1,"ion-item",17),d.NdJ("click",function(){d.CHM(i);var n=d.oxw().$implicit;return d.oxw().viewPlayerDetails(n)}),d.TgZ(2,"ion-avatar",10),d._UZ(3,"ion-img",18),d.qZA(),d.TgZ(4,"div"),d.TgZ(5,"div",19),d.TgZ(6,"p"),d._uU(7),d.ALo(8,"date"),d.qZA(),d.TgZ(9,"p"),d._uU(10),d.qZA(),d.TgZ(11,"p"),d._uU(12),d.qZA(),d.qZA(),d.qZA(),d._UZ(13,"ion-icon",20),d.TgZ(14,"ion-buttons",21),d.TgZ(15,"ion-button",12),d.NdJ("click",function(n){d.CHM(i);var t=d.oxw().$implicit,o=d.oxw();return n.stopPropagation(),o.deletePlayer(t.id)}),d._UZ(16,"ion-icon",23),d.qZA(),d.YNc(17,J,2,0,"ion-button",22),d.qZA(),d.qZA(),d.qZA()}if(2&n){var o=d.oxw().$implicit,e=d.oxw();d.xp6(3),d.Q6J("src",o.profilePictureFullPath?o.profilePictureFullPath:e.environmenti.defaultProfilePicture),d.xp6(4),d.lnq("",null==o?null:o.firstName," ",null==o?null:o.lastName," | ",d.xi3(8,12,null==o?null:o.birthDate,"dd.MM.yyyy")," "),d.xp6(3),d.HOy("",null!=o&&o.ageGroup?"Senior":"Junior"," - ",null==o?null:o.playingPosition,", ",null==o?null:o.nationality,", ",null==o?null:o.birthTown,""),d.xp6(2),d.AsE("",null==o?null:o.id," | ",null==o?null:o.krfId,""),d.xp6(1),d.s9C("color",e.publicServices.getClassForCardStatusTyle(o.status)),d.xp6(4),d.Q6J("ngIf",!e.clubId)}}function k(n,t){if(1&n&&(d.TgZ(0,"div"),d.YNc(1,_,18,15,"ion-card",16),d.qZA()),2&n){var i=t.$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngIf",i.status==o.playerStatusesENUMS.rejected)}}var E,F,S=[{path:"",component:(E=function(){function t(i,o,e,l,r,a,u){var c=this;n(this,t),this.navCtrl=i,this.webService=o,this.alertController=e,this.activatedRoute=l,this.publicServices=r,this.popoverController=a,this.alerts=u,this.environmenti=p.N,this.playersList=[],this.clubId=null,this.playerStatusesENUMS=Z.RQ,l.params.subscribe(function(n){console.log(n),c.clubId=n.clubId})}return i(t,[{key:"showInformations",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.popoverController.create({component:f,translucent:!1});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"ionViewWillEnter",value:function(){this.getPLayersList()}},{key:"deletePlayer",value:function(n){var t=this;this.alerts.presentCancelOrConfirm("WARNING!","Are you sure you want to delete this player? Thre is no returning back!!!!","CANCEL","DELETE").then(function(i){i&&t.webService.calling_DELETE_from_API("players/delete/".concat(n)).then(function(n){n.status?(t.alerts.presentToast("Player deleted successfully!","success"),t.getPLayersList()):t.alerts.presentToast(n.message,"danger")}).catch(function(n){console.log(n)})})}},{key:"viewPlayerDetails",value:function(n){this.navCtrl.navigateForward(this.clubId?"admin/tabs/tab1-clubs/".concat(this.clubId,"/players/").concat(n.id):"club/tabs/tab2/player-details/".concat(n.id),{state:{player:n}})}},{key:"createPlayer",value:function(){this.navCtrl.navigateForward("club/tabs/tab2/create-and-edit")}},{key:"editPlayer",value:function(n){this.navCtrl.navigateForward(this.clubId?"admin/tabs/tab1-clubs/".concat(this.clubId,"/edit-player/").concat(n.id):"club/tabs/tab2/create-and-edit/".concat(n.id),{state:{playerDetails:n}})}},{key:"getPLayersList",value:function(){var n=this;this.webService.calling_GET_From_Api(this.clubId?"admin/clubs/".concat(this.clubId,"/players"):"players").then(function(t){console.log(t),t.values.length&&(n.playersList=t.values)}).catch(function(n){console.log(n)})}},{key:"logout",value:function(){this.webService.logoutAlert()}}]),t}(),E.\u0275fac=function(n){return new(n||E)(d.Y36(l.SH),d.Y36(v.Q),d.Y36(l.Br),d.Y36(c.gz),d.Y36(y.O),d.Y36(l.Dh),d.Y36(b.m))},E.\u0275cmp=d.Xpm({type:E,selectors:[["app-tab2"]],decls:28,vars:6,consts:[["slot","start",4,"ngIf"],["slot","end"],[3,"click"],["name","information-circle-outline","color","primary"],["color","danger",3,"click",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],["size-lg","6"],[1,"ion-padding","ion-text-center"],[4,"ngFor","ngForOf"],["size-lg","6","offset-lg","3"],["slot","start"],["defaultHref","admin/tabs/tab1-clubs"],["color","danger",3,"click"],["slot","icon-only","name","log-out-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add"],[4,"ngIf"],["lines","none","detail","true","button","true",3,"click"],[3,"src"],[1,"playerDetailsOnLists"],["slot","end","name","ellipse",1,"iconDotStyle",3,"color"],["slot","end",2,"margin","0"],[3,"click",4,"ngIf"],["slot","icon-only","name","trash"],["name","create-outline","slot","icon-only"],["style","margin: 0","slot","end",4,"ngIf"]],template:function(n,t){1&n&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar"),d.YNc(2,h,2,0,"ion-buttons",0),d.TgZ(3,"ion-title"),d._uU(4," Players List "),d.qZA(),d.TgZ(5,"ion-buttons",1),d.TgZ(6,"ion-button",2),d.NdJ("click",function(){return t.showInformations()}),d._UZ(7,"ion-icon",3),d.qZA(),d.YNc(8,m,2,0,"ion-button",4),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"ion-content"),d.YNc(10,x,3,0,"ion-fab",5),d.TgZ(11,"ion-grid"),d.TgZ(12,"ion-row"),d.TgZ(13,"ion-col",6),d.TgZ(14,"ion-grid",7),d.TgZ(15,"h3"),d._uU(16,"Juniors"),d.qZA(),d.qZA(),d.YNc(17,w,2,1,"div",8),d.qZA(),d.TgZ(18,"ion-col",6),d.TgZ(19,"ion-grid",7),d.TgZ(20,"h3"),d._uU(21,"Seniors"),d.qZA(),d.qZA(),d.YNc(22,U,2,1,"div",8),d.qZA(),d.qZA(),d.TgZ(23,"ion-col",9),d.TgZ(24,"ion-grid",7),d.TgZ(25,"h3"),d._uU(26,"REJECTED"),d.qZA(),d.qZA(),d.YNc(27,k,2,1,"div",8),d.qZA(),d.qZA(),d.qZA()),2&n&&(d.xp6(2),d.Q6J("ngIf",t.clubId),d.xp6(6),d.Q6J("ngIf",!t.clubId),d.xp6(2),d.Q6J("ngIf",!t.clubId),d.xp6(7),d.Q6J("ngForOf",t.playersList),d.xp6(5),d.Q6J("ngForOf",t.playersList),d.xp6(5),d.Q6J("ngForOf",t.playersList))},directives:[l.Gu,l.sr,r.O5,l.wd,l.Sm,l.YG,l.gu,l.W2,l.jY,l.Nd,l.wI,r.sg,l.oU,l.cs,l.IJ,l.W4,l.PM,l.Ie,l.BJ,l.Xz],pipes:[r.uU],styles:[""]}),E)},{path:"player-details",loadChildren:function(){return e.e(3719).then(e.bind(e,3719)).then(function(n){return n.PlayerDetailsPageModule})}},{path:"create-and-edit",loadChildren:function(){return e.e(2924).then(e.bind(e,2924)).then(function(n){return n.CreateAndEditPageModule})}}],M=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[c.Bz.forChild(S)],c.Bz]}),t}(),Y=((F=function t(){n(this,t)}).\u0275fac=function(n){return new(n||F)},F.\u0275mod=d.oAB({type:F}),F.\u0275inj=d.cJS({imports:[[l.Pc,r.ez,a.u5,u.e,M]]}),F)}}])}();