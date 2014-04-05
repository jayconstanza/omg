"use strict";angular.module("Filters",[]).filter("durationFilter",[function(){return function(a){var b=a.substring(a.lastIndexOf("T")+1,a.lastIndexOf("M"));return b}}]),angular.module("Services",[]).factory("YoutubeService",["$http","$q",function(a,b){return{getVideoList:function(){var c=b.defer(),d="https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUtL3CrHPV6qHBaK1IUBoBIg&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&part=snippet&fields=items(snippet(description,thumbnails,title,resourceId))",e=[];return a.jsonp(d).success(function(a){angular.forEach(a.items,function(a){e.push(a)}),c.resolve(e)}).error(function(a){c.reject(new Error(a))}),c.promise},getVideoStatistics:function(c){var d=b.defer(),e="https://www.googleapis.com/youtube/v3/videos?id="+c+"&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&part=statistics,contentDetails,snippet&fields=items(statistics, contentDetails(duration),snippet(categoryId))",f=[];return a.jsonp(e).success(function(a){angular.forEach(a.items,function(a){f.push(a)}),d.resolve(f)}).error(function(a){d.reject(new Error(a))}),d.promise},getVideoCategory:function(c){var d=b.defer(),e="https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&id="+c+"&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&hl=es_ES",f=[];return a.jsonp(e).success(function(a){angular.forEach(a.items,function(a){f.push(a.snippet.title),console.log(f)}),d.resolve(f)}).error(function(a){d.reject(new Error(a))}),d.promise}}}]),angular.module("Directives",[]).directive("ngAdapt",["$window","$rootScope",function(a,b){return{scope:{num:"=px"},link:function(c,d){function e(){var a=document.createElement("div");a.style.visibility="hidden",a.style.width="100px",a.style.msOverflowStyle="scrollbar",document.body.appendChild(a);var b=a.offsetWidth;a.style.overflow="scroll";var c=document.createElement("div");c.style.width="100%",a.appendChild(c);var d=c.offsetWidth;return a.parentNode.removeChild(a),b-d}var f=angular.element(a);b.$watch("windowSize.width",function(a){a>767?(c.num=128,angular.element(d).css("width",a-c.num-e())):(c.num=0,angular.element(d).css("width","100%"))}),f.bind("resize",function(){b.$apply(function(){b.windowSize.width=f.width()+e(),b.windowSize.height=f.height()})})}}}]).directive("twitterTimeline",[function(){return{restrict:"A",scope:{cssUrl:"@",autoResize:"="},link:function(a,b,c){function d(){function b(){0===c.find(".stream").length?setTimeout(b,100):(c.find(".stream").addClass("stream-new").removeClass("stream").css("height","auto"),angular.element(".twitter-timeline").css("height",c.height()+20+"px"))}var c=angular.element(".twitter-timeline").contents().find("body");a.cssUrl&&c.prepend(angular.element("<link/>",{rel:"stylesheet",href:a.cssUrl,type:"text/css"})),a.autoResize&&b()}angular.element("body").removeAttr("data-twttr-rendered"),b.attr("id","twitter-feed").attr("width","100%").attr("data-chrome","noheader transparent").attr("data-widget-id",c.twitterTimeline).addClass("twitter-timeline"),angular.element("#twitter-wjs").length||angular.element.getScript((/^http:/.test(document.location)?"http":"https")+"://platform.twitter.com/widgets.js",function(){d(),angular.element(".twitter-timeline").load(d)})}}}]).directive("ngShowNext",["$document",function(a){return{restrict:"A",scope:{start:"=start",step:"&step",limit:"&limit",first:"=first"},link:function(b,c){function d(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b}c.bind("click",function(){var c=a[0].getElementById("instafeed"),e=c.children,f=d(e),g=f.slice(b.start,b.start+b.step());b.start=b.start+b.step();var h=f.slice(b.start,b.start+b.step());angular.forEach(h,function(a){angular.element(a).removeClass("hidden")}),angular.forEach(g,function(a){angular.element(a).addClass("hidden")}),b.$apply(function(){console.log(c)})})}}}]).directive("ngAboutAnimate",["$document","$interval","$compile",function(a,b,c){return{controller:"AboutMeCtrl",restrict:"A",scope:{steps:"&steps",section:"&section",chapters:"=chapters",setChapters:"&setChapters"},link:function(a,d){var e,f=a.steps(),g=0,h=2500,i=function j(){if(g<f.length){console.log(f[g]);var i=c(f[g].content)(a);f[g].clear===!1?d.append(i):(angular.element(d).empty(),d.append(i)),b.cancel(e),h=f[g].interval,e=b(j,h),g++}};e=b(i,h)}}}]),angular.module("HomeModule",[]).controller("HomeCtrl",["$scope",function(a){a.num=128,a.section="home"}]),angular.module("VideosModule",[]).controller("VideosCtrl",["$scope","$sce","$animate","YoutubeService",function(a,b,c,d){var e="http://www.youtube.com/embed/",f="_Ah2nTHgMCI";a.section="videos",a.videoTitle='"Putas Asesinas" de Roberto Bolaño',a.videoURL=b.trustAsResourceUrl(e+f),a.videoDesc='Vídeo promocional de l\'adaptació teatral del conte "Putas Asesinas" de Roberto Bolaño.',a.videoList=d.getVideoList,a.videoList().then(function(b){a.videoList=b}),a.videoStatistics=d.getVideoStatistics,a.videoStatistics(f).then(function(b){a.videoStatistics=b}),a.videoCat=["Entretenimiento"],a.nowplaying="http://twitter.com/home?status=¡Hey!%20Echa%20un%20vistazo%20a%20"+a.videoTitle+"%20de%20OMartinGual+"+a.videoURL+"%20#nowplaying",a.videoChange=function(c,f,g){a.videoTitle=c,a.videoURL=b.trustAsResourceUrl(e+f),a.videoDesc=g,a.videoStatistics=d.getVideoStatistics,a.videoCat=d.getVideoCategory,a.videoStatistics(f).then(function(b){a.videoStatistics=b,a.videoCat(b[0].snippet.categoryId).then(function(b){a.videoCat=b})})}}]),angular.module("FotosModule",[]).controller("FotosCtrl",["$scope",function(a){a.section="fotos",a.start=1,a.step=6,a.limit=18,a.first=!0}]),angular.module("SocialModule",[]).controller("SocialCtrl",["$scope",function(a){a.section="social",a.title="¡Charla comigo!",a.subtitle="Encuéntrame en las redes sociales",a.redesSociales=[{name:"Twitter",logo:"",url:"https://twitter.com/omartingual"},{name:"LinkedIn",logo:"",url:"http://www.linkedin.com/in/oriolmartingual"},{name:"Facebook",logo:"",url:"https://www.facebook.com/OMartinGual?fref=ts"}]}]),angular.module("AboutMeModule",[]).controller("AboutMeCtrl",["$scope",function(a){a.section="OMartinGual",a.saludo="¡HOLA!",a.chapters={historia:!1,clientes:!1,trabajos:!1},a.stepsHeader=[{content:"<h1>Soy Oriol Martín Gual</h1>",clear:!0,interval:1e3},{content:"<h2>¡Encantado de conocerte!</h2>",clear:!1,interval:1500}],a.stepsThird=[{content:"",clear:!1,interval:2500},{content:"<h3>¿Qué te gustaría saber sobre mí?</h3>",clear:!1,interval:500},{content:'<figure class="arrow"><img src="/images/finger.png" alt="Observa las opciones a la derecha"></figure>',clear:!1,interval:2e3}],a.stepsFourth=[{content:"",clear:!1,interval:4e3},{content:'<li class="fadeIn" ng-click="setChapters(true, false, false)" >1. Mi historia</li>',clear:!1,interval:1e3},{content:'<li class="fadeIn" ng-click="setChapters(false, true, false)">2. ¿Para quién he trabajado?</li>',clear:!1,interval:1e3},{content:'<li class="fadeIn" ng-click="setChapters(false, false, true)">3. ¿Qué he hecho?</li>',clear:!1,interval:1e3}],a.setChapters=function(b,c,d){a.chapters.historia=b,a.chapters.clientes=c,a.chapters.trabajos=d}}]),angular.module("codeApp",["ngResource","ngRoute","ngAnimate","ngTouch","angular-blocks","Filters","Directives","Services","HomeModule","VideosModule","FotosModule","SocialModule","AboutMeModule"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"/views/partials/home.html",controller:"HomeCtrl"}).when("/videos",{templateUrl:"/views/partials/videos.html",controller:"VideosCtrl"}).when("/fotos",{templateUrl:"/views/partials/fotos.html",controller:"FotosCtrl"}).when("/social",{templateUrl:"/views/partials/social.html",controller:"SocialCtrl"}).when("/sobre-mi",{templateUrl:"/views/partials/about_me.html",controller:"AboutMeCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]).run(["$rootScope","$window",function(a,b){a.menuItems=[{name:"Home",href:"/home",img:"/images/icons/nav/logo.png",id:"menu-icon-logo"},{name:"Videos",href:"/videos",img:"/images/icons/nav/videos.png",id:"menu-icon-videos"},{name:"LIKES",href:"",img:"images/icons/nav/likes.png",click:!0,id:"menu-icon-likes"},{name:"Fotos",href:"/fotos",img:"/images/icons/nav/fotos.png",id:"menu-icon-fotos"},{name:"Sobre mí",href:"/sobre-mi",img:"/images/icons/nav/sobre-mi.png",id:"menu-icon-sobre"},{name:"Social",href:"/social",img:"/images/icons/nav/social.png",id:"menu-icon-social"},{name:"Comparte",href:"",img:"/images/icons/nav/comparte.png",click:!0,id:"menu-icon-comparte"}],a.windowSize={width:angular.element(b).width(),height:angular.element(b).height()},a.socialIcons=[{klass:"icon-fb",url:"http://www.facebook.com/share.php?u="+document.URL+"&title=OMartinGual%20Portfolio"},{klass:"icon-tw",url:"http://twitter.com/home?status=¡Hey!%20Echa%20un%20vistazo%20a%20los%20videos%20de%20OMartinGual+"+document.URL},{klass:"icon-gplus",url:"https://plus.google.com/share?url="+document.URL}],a.log=function(a){console.log(a)},a.likes=!1,a.comparte=!1}]);