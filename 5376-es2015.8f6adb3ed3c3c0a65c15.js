(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[5376],{5376:function(o,t,e){"use strict";e.r(t),e.d(t,{AuthPageModule:function(){return m}});var n=e(1116),i=e(1462),s=e(8809),r=e(9185),a=e(5614),c=e(2101),l=e(749);const u=[{path:"",component:(()=>{class o{constructor(o,t,e){this.webService=o,this.alerts=t,this.navCtrl=e}ngOnInit(){this.authForm=new i.cw({email:new i.NI("",{updateOn:"change",validators:[i.kI.required]}),password:new i.NI("",{updateOn:"change",validators:[i.kI.required]})})}loginFunction(){this.alerts.presentLoadingController(),this.webService.calling_Post_From_Api("authenticate/login",this.authForm.value).then(o=>{console.log(o),o&&(o.userRole=o.user.accessToken.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],this.webService.setUserData(o),this.navCtrl.navigateRoot("Admin"==o.user.accessToken.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?"admin/tabs/tab1-clubs":"club/tabs/tab2")),this.alerts.dismissLoadingController()}).catch(o=>{this.alerts.dismissLoadingController(),console.log(o)})}}return o.\u0275fac=function(t){return new(t||o)(a.Y36(c.Q),a.Y36(l.m),a.Y36(s.SH))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-auth"]],decls:22,vars:1,consts:[[2,"margin-top","10%"],["src","/assets/icon/KFRLogo.jpg",2,"width","150px","margin","auto"],["size-xs","12","offset-xs","0","size-lg","5","offset-lg","3.5"],[1,"ion-text-center"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","email","type","email"],["formControlName","password","type","password"],["type","submit",2,"margin-top","15px"]],template:function(o,t){1&o&&(a.TgZ(0,"ion-content"),a.TgZ(1,"ion-grid",0),a._UZ(2,"ion-img",1),a.TgZ(3,"ion-row"),a.TgZ(4,"ion-col",2),a.TgZ(5,"ion-card"),a.TgZ(6,"ion-card-header"),a.TgZ(7,"ion-card-title",3),a._uU(8,"Kosovo Rugby Federation E-Platform"),a.qZA(),a.qZA(),a.TgZ(9,"ion-card-content"),a.TgZ(10,"form",4),a.NdJ("ngSubmit",function(){return t.loginFunction()}),a.TgZ(11,"ion-item"),a.TgZ(12,"ion-label",5),a._uU(13," Username: "),a.qZA(),a._UZ(14,"ion-input",6),a.qZA(),a.TgZ(15,"ion-item"),a.TgZ(16,"ion-label",5),a._uU(17," Password: "),a.qZA(),a._UZ(18,"ion-input",7),a.qZA(),a.TgZ(19,"ion-grid",3),a.TgZ(20,"ion-button",8),a._uU(21," Login "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(10),a.Q6J("formGroup",t.authForm))},directives:[s.W2,s.jY,s.Xz,s.Nd,s.wI,s.PM,s.Zi,s.gZ,s.FN,i._Y,i.JL,i.sg,s.Ie,s.Q$,s.pK,s.j9,i.JJ,i.u,s.YG],styles:[""]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[n.ez,i.u5,s.Pc,g,i.UX]]}),o})()}}]);