(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2:function(t,s,n){t.exports=n("6rBZ")},"6rBZ":function(t,s,n){"use strict";n.r(s);var i=n("+2Rf"),e=n.n(i);e.a.fn.mobileNavigation=function(t){var s=this;this.settings=e.a.extend({},{toggleClass:"menu-toggle",wrapperClass:"shell",subMenuClass:"dropdown",directionFrom:"left",overlayCss:{display:"none",background:"#000000",bottom:"0%",height:"100%",left:"0%",opacity:".4",position:"fixed",right:"0%",top:"0%",width:"100%"}},t),this.closeAll=function(){a()};var n=function(t){return"."+t},i=function(){e()(this).hasClass("init")||e()(this).addClass("init"),e()(this).toggleClass("open")},a=function(){var t=n(s.settings.toggleClass),a=n(s.settings.subMenuClass);e()(n(s.settings.wrapperClass)).find(".mobile-overlay").toggle(),o(),e()(t).find("i").toggleClass("fa-bars fa-times"),e()(s[0].parentNode).find(a).each(function(){e()(this).hasClass("open")&&i.call(this)}),i.call(s[0])},l=function(){var t=n(s.settings.subMenuClass);e()(this).find("nav ul li").each(function(){(function(){var t=n(s.settings.subMenuClass),i=e()(this).find("> a").text();if(0==e()(this).find(t).length)return!0;e()(this).append('<button class="sub-menu-toggle" data-menu="'+i+'"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'),e()(this).find(t+" ul").first().prepend('<li><button class="sub-menu-toggle" data-menu="'+i+'"><i class="fa fa-angle-left" aria-hidden="true"></i> '+i+"</button></li>")}).call(this),function(){var t=n(s.settings.subMenuClass),a=e()(s[0].parentNode);e()(this).find(".sub-menu-toggle").on("click",a,function(){var s=e()(this).data("menu");i.call(e()(t+'[data-menu="'+s+'"]'))})}.call(this)}),e()(this).find(t).each(function(t){(function(){var t=n(s.settings.subMenuClass),i=e()(this).siblings("a").text();e()(this).find(t).each(function(){var t=e()(this).siblings("a").text();e()(this).attr("data-menu",t).addClass("sub-menu")}).end().attr("data-menu",i)}).call(this,t),function t(){var i=n(s.settings.subMenuClass),a=e()(this).clone(!0,!0),l=s[0].parentNode;e()(a).find(i).remove(),e()(this).find(i).length>0&&t.call(e()(this).find(i)),e()(this).closest(l).append(a).end().remove()}.call(this)})},o=function(){var t={height:"100%",overflow:"hidden"};e()(s[0]).hasClass("open")&&(t.overflow="auto"),e()("html").css(t)},r=function(){var t,i;t=new RegExp(/^\./),e.a.each(s.settings,function(s,n){if("directionFrom"===s)return"left"!==n&&"right"!==n&&e.a.error('Wrong direction. Choose  "left" or "right".'),!0;t.test(n)&&e.a.error("The value "+n+" for "+s+" just needs the class name not css selector.")}),i='<div class="mobile-overlay"></div>',i=e()(i).css(s.settings.overlayCss),e()(n(s.settings.wrapperClass)).append(e()(i)),e()(i).on("click",function(){a()}),function(){var t=n(s.settings.subMenuClass);e()(this).addClass(s.settings.directionFrom).find(t).addClass(s.settings.directionFrom)}.call(this),function(){e()(n(s.settings.toggleClass)).on("click",a)}.call(this)};return this.each(function(){r.call(this),l.call(this)})}}},[[2,0,1]]]);
//# sourceMappingURL=mobileNavigation.plugin.js.map