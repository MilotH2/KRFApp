(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[3719],{3719:function(n,e,o){"use strict";o.r(e),o.d(e,{PlayerDetailsPageModule:function(){return A}});var l=o(1116),i=o(1462),r=o(8809),t=o(9185),a=o(529),Z=o(5614),u=o(749),g=o(2101);function s(n,e){if(1&n){const n=Z.EpF();Z.TgZ(0,"ion-button",14),Z.NdJ("click",function(){return Z.CHM(n),Z.oxw().declineReqOrNew()}),Z._UZ(1,"ion-icon",15),Z.qZA()}}function p(n,e){if(1&n){const n=Z.EpF();Z.TgZ(0,"ion-button",16),Z.NdJ("click",function(){return Z.CHM(n),Z.oxw().submitForm()}),Z._UZ(1,"ion-icon",17),Z.qZA()}}const c=[{path:":playerId",component:(()=>{class n{constructor(n,e,o,l,i){this.route=n,this.router=e,this.alerts=o,this.webService=l,this.navCtrl=i,this.player=null,this.environmenti=a.N,this.isNewPlayer=!1,this.route.queryParams.subscribe(n=>{if(this.router.getCurrentNavigation().extras.state){let n=this.router.getCurrentNavigation().extras.state;this.player=n.player,this.isNewPlayer=n.isNewPlayer,console.log(n)}else this.router.navigateByUrl("tabs/tab2")})}ngOnInit(){}downloadFile(n){window.open(this.environmenti.apiBase+"Files/"+n,"_blank")}submitForm(){let n="";this.alerts.presentLoadingController();let e={};this.isNewPlayer&&(n="admin/confirmplayer",e.playerStatus=2,e.playerId=this.player.id),this.webService.calling_Post_From_Api(n,e).then(n=>{if(console.log(n),n.status){this.alerts.presentToast("Player created successfully!","success");let n="club/tabs/tab2";this.isNewPlayer&&(n="admin/tabs/new-players"),this.navCtrl.navigateBack(n)}else this.alerts.presentToast("Something happend, please try again later!","danger");this.alerts.dismissLoadingController()}).catch(n=>{this.alerts.dismissLoadingController(),console.log(n)})}declineReqOrNew(){this.alerts.presentCancelOrConfirm("Confirmation!","Are you sure you want to decline this request?","Cancel","DECLINE").then(n=>{n&&this.declineReqOrNewAPI()})}declineReqOrNewAPI(){let n={playerId:this.player.id},e="";this.isNewPlayer&&(e="admin/confirmplayer",n.playerStatus=3,n.playerId=this.player.id),this.webService.calling_Post_From_Api(e,n).then(n=>{console.log(n),n.status?(this.alerts.presentToast("Player not accepted!","success"),this.navCtrl.navigateBack("admin/tabs/"+(this.isNewPlayer?"new-players":"update-requests"))):this.alerts.presentToast("Something happend, please try again later!","danger"),this.alerts.dismissLoadingController()}).catch(n=>{this.alerts.dismissLoadingController(),console.log(n)})}}return n.\u0275fac=function(e){return new(e||n)(Z.Y36(t.gz),Z.Y36(t.F0),Z.Y36(u.m),Z.Y36(g.Q),Z.Y36(r.SH))},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-player-details"]],decls:206,vars:42,consts:[["slot","start"],["defaultHref","tabs/tab2"],["slot","end"],["color","danger",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],["size-xs","12","size-lg","3"],[2,"margin","auto","zoom","3"],[3,"src"],[1,"ion-text-center"],["size-xs","12","size-lg","9"],[1,"styleRows",2,"padding","0"],[1,"ion-no-padding"],["size","6",2,"padding","0"],[1,"hoverStyle",3,"click"],["color","danger",3,"click"],["name","close-outline","slot","icon-only"],[3,"click"],["slot","icon-only","name","checkmark"]],template:function(n,e){1&n&&(Z.TgZ(0,"ion-header"),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-buttons",0),Z._UZ(3,"ion-back-button",1),Z.qZA(),Z.TgZ(4,"ion-title"),Z._uU(5),Z.qZA(),Z.TgZ(6,"ion-buttons",2),Z.YNc(7,s,2,0,"ion-button",3),Z.YNc(8,p,2,0,"ion-button",4),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"ion-content"),Z.TgZ(10,"ion-grid"),Z.TgZ(11,"ion-row"),Z.TgZ(12,"ion-col",5),Z.TgZ(13,"ion-card"),Z.TgZ(14,"ion-card-header"),Z.TgZ(15,"ion-thumbnail",6),Z._UZ(16,"ion-img",7),Z.qZA(),Z.qZA(),Z.TgZ(17,"ion-card-content"),Z.TgZ(18,"ion-grid",8),Z.TgZ(19,"h1"),Z._uU(20),Z.qZA(),Z.TgZ(21,"p"),Z._uU(22),Z.qZA(),Z.TgZ(23,"p"),Z._uU(24),Z.ALo(25,"date"),Z.qZA(),Z.TgZ(26,"p"),Z.TgZ(27,"strong"),Z._uU(28),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"ion-col",9),Z.TgZ(30,"ion-grid",10),Z.TgZ(31,"ion-card"),Z.TgZ(32,"ion-card-header"),Z.TgZ(33,"ion-card-title"),Z._uU(34,"Personal Information"),Z.qZA(),Z.qZA(),Z.TgZ(35,"ion-card-content"),Z.TgZ(36,"ion-grid",11),Z.TgZ(37,"ion-row"),Z.TgZ(38,"ion-col",12),Z.TgZ(39,"p"),Z._uU(40,"Age Group"),Z.qZA(),Z.qZA(),Z.TgZ(41,"ion-col",12),Z.TgZ(42,"p"),Z._uU(43),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(44,"ion-row"),Z.TgZ(45,"ion-col",12),Z.TgZ(46,"p"),Z._uU(47,"City"),Z.qZA(),Z.qZA(),Z.TgZ(48,"ion-col",12),Z.TgZ(49,"p"),Z._uU(50),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(51,"ion-row"),Z.TgZ(52,"ion-col",12),Z.TgZ(53,"p"),Z._uU(54,"Country"),Z.qZA(),Z.qZA(),Z.TgZ(55,"ion-col",12),Z.TgZ(56,"p"),Z._uU(57),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(58,"ion-row"),Z.TgZ(59,"ion-col",12),Z.TgZ(60,"p"),Z._uU(61,"Postal Code"),Z.qZA(),Z.qZA(),Z.TgZ(62,"ion-col",12),Z.TgZ(63,"p"),Z._uU(64),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(65,"ion-row"),Z.TgZ(66,"ion-col",12),Z.TgZ(67,"p"),Z._uU(68,"Street Address"),Z.qZA(),Z.qZA(),Z.TgZ(69,"ion-col",12),Z.TgZ(70,"p"),Z._uU(71),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(72,"ion-row"),Z.TgZ(73,"ion-col",12),Z.TgZ(74,"p"),Z._uU(75,"Address"),Z.qZA(),Z.qZA(),Z.TgZ(76,"ion-col",12),Z.TgZ(77,"p"),Z._uU(78),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(79,"ion-row"),Z.TgZ(80,"ion-col",12),Z.TgZ(81,"p"),Z._uU(82,"Birth Town"),Z.qZA(),Z.qZA(),Z.TgZ(83,"ion-col",12),Z.TgZ(84,"p"),Z._uU(85),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(86,"ion-row"),Z.TgZ(87,"ion-col",12),Z.TgZ(88,"p"),Z._uU(89,"Birth Country"),Z.qZA(),Z.qZA(),Z.TgZ(90,"ion-col",12),Z.TgZ(91,"p"),Z._uU(92),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(93,"ion-row"),Z.TgZ(94,"ion-col",12),Z.TgZ(95,"p"),Z._uU(96,"Citizenship"),Z.qZA(),Z.qZA(),Z.TgZ(97,"ion-col",12),Z.TgZ(98,"p"),Z._uU(99),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(100,"ion-row"),Z.TgZ(101,"ion-col",12),Z.TgZ(102,"p"),Z._uU(103,"Phone Number"),Z.qZA(),Z.qZA(),Z.TgZ(104,"ion-col",12),Z.TgZ(105,"p"),Z._uU(106),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(107,"ion-row"),Z.TgZ(108,"ion-col",12),Z.TgZ(109,"p"),Z._uU(110,"Can Represent Kosovo"),Z.qZA(),Z.qZA(),Z.TgZ(111,"ion-col",12),Z.TgZ(112,"p"),Z._uU(113),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(114,"ion-grid",10),Z.TgZ(115,"ion-card"),Z.TgZ(116,"ion-card-header"),Z.TgZ(117,"ion-card-title"),Z._uU(118,"Team Information"),Z.qZA(),Z.qZA(),Z.TgZ(119,"ion-card-content"),Z.TgZ(120,"ion-row"),Z.TgZ(121,"ion-col",12),Z.TgZ(122,"p"),Z._uU(123,"Is Player coming from the Juridiction of another Union?"),Z.qZA(),Z.qZA(),Z.TgZ(124,"ion-col",12),Z.TgZ(125,"p"),Z._uU(126),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(127,"ion-row"),Z.TgZ(128,"ion-col",12),Z.TgZ(129,"p"),Z._uU(130,"Previous Club Name"),Z.qZA(),Z.qZA(),Z.TgZ(131,"ion-col",12),Z.TgZ(132,"p"),Z._uU(133),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(134,"ion-row"),Z.TgZ(135,"ion-col",12),Z.TgZ(136,"p"),Z._uU(137,"Previous Club Union"),Z.qZA(),Z.qZA(),Z.TgZ(138,"ion-col",12),Z.TgZ(139,"p"),Z._uU(140),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(141,"ion-row"),Z.TgZ(142,"ion-col",12),Z.TgZ(143,"p"),Z._uU(144,"Previous Club Registered"),Z.qZA(),Z.qZA(),Z.TgZ(145,"ion-col",12),Z.TgZ(146,"p"),Z._uU(147),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(148,"ion-row"),Z.TgZ(149,"ion-col",12),Z.TgZ(150,"p"),Z._uU(151,"Previous Club Leaving Date"),Z.qZA(),Z.qZA(),Z.TgZ(152,"ion-col",12),Z.TgZ(153,"p"),Z._uU(154),Z.ALo(155,"date"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(156,"ion-row",13),Z.NdJ("click",function(){return e.downloadFile(null==e.player?null:e.player.transferFormNotification)}),Z.TgZ(157,"ion-col",12),Z.TgZ(158,"p"),Z._uU(159,"Transfer Form Notification"),Z.qZA(),Z.qZA(),Z.TgZ(160,"ion-col",12),Z.TgZ(161,"p"),Z._uU(162),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(163,"ion-row",13),Z.NdJ("click",function(){return e.downloadFile(null==e.player?null:e.player.worldRugbyInternationalClearenceForm)}),Z.TgZ(164,"ion-col",12),Z.TgZ(165,"p"),Z._uU(166,"World Rugby International Clearence Form"),Z.qZA(),Z.qZA(),Z.TgZ(167,"ion-col",12),Z.TgZ(168,"p"),Z._uU(169),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(170,"ion-row",13),Z.NdJ("click",function(){return e.downloadFile(null==e.player?null:e.player.medicalStatement)}),Z.TgZ(171,"ion-col",12),Z.TgZ(172,"p"),Z._uU(173,"Health Document"),Z.qZA(),Z.qZA(),Z.TgZ(174,"ion-col",12),Z.TgZ(175,"p"),Z._uU(176),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(177,"ion-row"),Z.TgZ(178,"ion-col",12),Z.TgZ(179,"p"),Z._uU(180,"Player Declaration Signed"),Z.qZA(),Z.qZA(),Z.TgZ(181,"ion-col",12),Z.TgZ(182,"p"),Z._uU(183),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(184,"ion-row"),Z.TgZ(185,"ion-col",12),Z.TgZ(186,"p"),Z._uU(187,"Signed Date"),Z.qZA(),Z.qZA(),Z.TgZ(188,"ion-col",12),Z.TgZ(189,"p"),Z._uU(190),Z.ALo(191,"date"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(192,"ion-row"),Z.TgZ(193,"ion-col",12),Z.TgZ(194,"p"),Z._uU(195,"Allow KRF To use Personal Data"),Z.qZA(),Z.qZA(),Z.TgZ(196,"ion-col",12),Z.TgZ(197,"p"),Z._uU(198),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(199,"ion-row"),Z.TgZ(200,"ion-col",12),Z.TgZ(201,"p"),Z._uU(202,"Can KFR Use Data?"),Z.qZA(),Z.qZA(),Z.TgZ(203,"ion-col",12),Z.TgZ(204,"p"),Z._uU(205),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&n&&(Z.xp6(5),Z.hij("Player ID: ",null==e.player?null:e.player.id,""),Z.xp6(2),Z.Q6J("ngIf",e.isNewPlayer),Z.xp6(1),Z.Q6J("ngIf",e.isNewPlayer),Z.xp6(8),Z.Q6J("src",e.player.profilePictureFullPath?e.player.profilePictureFullPath:e.environmenti.defaultProfilePicture),Z.xp6(4),Z.lnq("",null==e.player?null:e.player.firstName," ",null==e.player?null:e.player.fatherName," ",null==e.player?null:e.player.lastName,""),Z.xp6(2),Z.Oqu(null==e.player?null:e.player.personalNumber),Z.xp6(2),Z.Oqu(Z.xi3(25,33,null==e.player?null:e.player.birthDate,"dd.MM.yyyy")),Z.xp6(4),Z.Oqu(null!=e.player&&e.player.ageGroup?"Senior":"Junior"),Z.xp6(15),Z.Oqu(null!=e.player&&e.player.ageGroup?"Senior":"Junior"),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.city),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.country),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.postalCode),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.streetAddress),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.address),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.birthTown),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.birthCountry),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.nationality),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.phoneNumber),Z.xp6(7),Z.Oqu(null!=e.player&&e.player.canRepresanteKosovo?"Yes":"No"),Z.xp6(13),Z.Oqu(null!=e.player&&e.player.isPlayerCommingFromTheJuridictionOfAnOtherUnion?"Yes":"No"),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.previousClubName),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.previousClubUnion),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.previousClubRegistered),Z.xp6(7),Z.Oqu(Z.xi3(155,36,null==e.player?null:e.player.previousClubLeavingDate,"dd.MM.yyyy")),Z.xp6(8),Z.Oqu(null==e.player?null:e.player.transferFormNotification),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.worldRugbyInternationalClearenceForm),Z.xp6(7),Z.Oqu(null==e.player?null:e.player.medicalStatement),Z.xp6(7),Z.Oqu(null!=e.player&&e.player.playerDeclarationSigned?"Yes":"No"),Z.xp6(7),Z.Oqu(Z.xi3(191,39,null==e.player?null:e.player.playerSignedDeclaration,"dd.MM.yyyy")),Z.xp6(8),Z.Oqu(null!=e.player&&e.player.allowKRFToUsePersonalData?"Yes":"No"),Z.xp6(7),Z.Oqu(null!=e.player&&e.player.canKRFUseData?"Yes":"No"))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,l.O5,r.W2,r.jY,r.Nd,r.wI,r.PM,r.Zi,r.Bs,r.Xz,r.FN,r.gZ,r.YG,r.gu],pipes:[l.uU],styles:[".hoverStyle[_ngcontent-%COMP%]:hover{cursor:pointer}.hoverStyle[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2), .hoverStyle[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%]{color:blue!important}.styleRows[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:nth-child(2n){background:rgba(173,216,230,.2)}.styleRows[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-weight:700}.styleRows[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2){text-align:right}.styleRows[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}"]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[t.Bz.forChild(c)],t.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[l.ez,i.u5,r.Pc,q]]}),n})()}}]);