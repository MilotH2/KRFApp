(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[5334],{5334:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab2PageModule:function(){return Z}});var i=n(8809),l=n(1116),o=n(1462),a=n(940),r=n(9185),s=n(529),c=n(5614),u=n(2101);function d(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-card"),c.TgZ(1,"ion-item",5),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().viewPlayerDetails(t)}),c.TgZ(2,"ion-avatar",6),c._UZ(3,"ion-img",7),c.qZA(),c.TgZ(4,"div"),c.TgZ(5,"h3",8),c._uU(6),c.ALo(7,"date"),c.qZA(),c.TgZ(8,"p",8),c._uU(9),c.qZA(),c.TgZ(10,"p",9),c._uU(11),c.qZA(),c.qZA(),c.TgZ(12,"ion-buttons",10),c.TgZ(13,"ion-button",1),c.NdJ("click",function(t){const n=c.CHM(e).$implicit,i=c.oxw();return t.stopPropagation(),i.editPlayer(n)}),c._UZ(14,"ion-icon",11),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw();c.xp6(3),c.Q6J("src",e.profilePicture?n.environmenti.apiBase+"Files/"+e.profilePicture:n.environmenti.defaultProfilePicture),c.xp6(3),c.lnq("",null==e?null:e.firstName," ",null==e?null:e.lastName," | ",c.xi3(7,10,null==e?null:e.birthDate,"dd.MM.yyyy")," "),c.xp6(3),c.HOy("",null!=e&&e.ageGroup?"Senior":"Junior"," - ",null==e?null:e.playingPosition,", ",null==e?null:e.nationality,", ",null==e?null:e.birthTown,""),c.xp6(2),c.AsE("",null==e?null:e.id," | ",null==e?null:e.krfId,"")}}const g=[{path:"",component:(()=>{class e{constructor(e,t){this.navCtrl=e,this.webService=t,this.environmenti=s.N,this.playersList=[]}viewPlayerDetails(e){this.navCtrl.navigateForward(`tabs/tab2/player-details/${e.id}`,{state:{player:e}})}createPlayer(){this.navCtrl.navigateForward("tabs/tab2/create-and-edit")}editPlayer(e){this.navCtrl.navigateForward("tabs/tab2/create-and-edit",{state:{playerDetails:e}})}ionViewWillEnter(){this.getPLayersList()}getPLayersList(){this.webService.calling_GET_From_Api("players").then(e=>{console.log(e),e.values.length&&(this.playersList=e.values)}).catch(e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(i.SH),c.Y36(u.Q))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-tab2"]],decls:13,vars:1,consts:[["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["size-xs","12","size-lg","8","offset-lg","2"],[4,"ngFor","ngForOf"],["lines","none","detail","true","button","true",3,"click"],["slot","start",2,"zoom","1.4"],[3,"src"],[2,"margin","0"],[2,"margin","0","font-size","10px"],["slot","end"],["name","create-outline","slot","icon-only"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3," Players List "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content"),c.TgZ(5,"ion-fab",0),c.TgZ(6,"ion-fab-button",1),c.NdJ("click",function(){return t.createPlayer()}),c._UZ(7,"ion-icon",2),c.qZA(),c.qZA(),c.TgZ(8,"ion-grid"),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col",3),c.TgZ(11,"ion-list"),c.YNc(12,d,15,13,"ion-card",4),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(12),c.Q6J("ngForOf",t.playersList))},directives:[i.Gu,i.sr,i.wd,i.W2,i.IJ,i.W4,i.gu,i.jY,i.Nd,i.wI,i.q_,l.sg,i.PM,i.Ie,i.Bs,i.Xz,i.Sm,i.YG],pipes:[l.uU],styles:[""]}),e})()},{path:"player-details",loadChildren:()=>n.e(3719).then(n.bind(n,3719)).then(e=>e.PlayerDetailsPageModule)},{path:"create-and-edit",loadChildren:()=>Promise.all([n.e(8592),n.e(2924)]).then(n.bind(n,2924)).then(e=>e.CreateAndEditPageModule)}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Pc,l.ez,o.u5,a.e,p]]}),e})()}}]);