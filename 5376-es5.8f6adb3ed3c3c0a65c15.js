!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[5376],{5376:function(t,e,i){"use strict";i.r(e),i.d(e,{AuthPageModule:function(){return Z}});var r,a,s=i(1116),c=i(1462),u=i(8809),l=i(9185),g=i(5614),m=i(2101),p=i(749),f=[{path:"",component:(r=function(){function t(o,e,i){n(this,t),this.webService=o,this.alerts=e,this.navCtrl=i}var e,i,r;return e=t,(i=[{key:"ngOnInit",value:function(){this.authForm=new c.cw({email:new c.NI("",{updateOn:"change",validators:[c.kI.required]}),password:new c.NI("",{updateOn:"change",validators:[c.kI.required]})})}},{key:"loginFunction",value:function(){var n=this;this.alerts.presentLoadingController(),this.webService.calling_Post_From_Api("authenticate/login",this.authForm.value).then(function(o){console.log(o),o&&(o.userRole=o.user.accessToken.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],n.webService.setUserData(o),n.navCtrl.navigateRoot("Admin"==o.user.accessToken.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?"admin/tabs/tab1-clubs":"club/tabs/tab2")),n.alerts.dismissLoadingController()}).catch(function(o){n.alerts.dismissLoadingController(),console.log(o)})}}])&&o(e.prototype,i),r&&o(e,r),t}(),r.\u0275fac=function(n){return new(n||r)(g.Y36(m.Q),g.Y36(p.m),g.Y36(u.SH))},r.\u0275cmp=g.Xpm({type:r,selectors:[["app-auth"]],decls:22,vars:1,consts:[[2,"margin-top","10%"],["src","/assets/icon/KFRLogo.jpg",2,"width","150px","margin","auto"],["size-xs","12","offset-xs","0","size-lg","5","offset-lg","3.5"],[1,"ion-text-center"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","email","type","email"],["formControlName","password","type","password"],["type","submit",2,"margin-top","15px"]],template:function(n,o){1&n&&(g.TgZ(0,"ion-content"),g.TgZ(1,"ion-grid",0),g._UZ(2,"ion-img",1),g.TgZ(3,"ion-row"),g.TgZ(4,"ion-col",2),g.TgZ(5,"ion-card"),g.TgZ(6,"ion-card-header"),g.TgZ(7,"ion-card-title",3),g._uU(8,"Kosovo Rugby Federation E-Platform"),g.qZA(),g.qZA(),g.TgZ(9,"ion-card-content"),g.TgZ(10,"form",4),g.NdJ("ngSubmit",function(){return o.loginFunction()}),g.TgZ(11,"ion-item"),g.TgZ(12,"ion-label",5),g._uU(13," Username: "),g.qZA(),g._UZ(14,"ion-input",6),g.qZA(),g.TgZ(15,"ion-item"),g.TgZ(16,"ion-label",5),g._uU(17," Password: "),g.qZA(),g._UZ(18,"ion-input",7),g.qZA(),g.TgZ(19,"ion-grid",3),g.TgZ(20,"ion-button",8),g._uU(21," Login "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(10),g.Q6J("formGroup",o.authForm))},directives:[u.W2,u.jY,u.Xz,u.Nd,u.wI,u.PM,u.Zi,u.gZ,u.FN,c._Y,c.JL,c.sg,u.Ie,u.Q$,u.pK,u.j9,c.JJ,c.u,u.YG],styles:[""]}),r)}],d=function(){var o=function o(){n(this,o)};return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),o}(),Z=((a=function o(){n(this,o)}).\u0275fac=function(n){return new(n||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[s.ez,c.u5,u.Pc,d,c.UX]]}),a)}}])}();