$(window).on("load",function(){$("#preloader").delay(1e3).fadeOut("slow")}),$(function(){$(window).scroll(function(){0!=$(this).scrollTop()?$("#top").fadeIn():$("#top").fadeOut()}),$("#top").on("click",function(){$("body, html").animate({scrollTop:0},800)})}),$(document).ready(function(){function a(){window.addEventListener("scroll",function(a){a.preventDefault();for(var d,e,b=this.pageYOffset,c=document.getElementsByClassName("parallax"),f=0;f<c.length;f++){d=c[f],e=d.getAttribute("data-speed");var g=-(b*e/100);d.setAttribute("style","transform: translate3d(0px, "+g+"px, 0px)")}})}a();var b,c=$("#top-menu"),d=c.outerHeight()+15,e=c.find("a"),f=e.map(function(){var a=$($(this).attr("href"));return a.length?a:void 0});e.click(function(a){var b=$(this).attr("href"),c="#"===b?0:$(b).offset().top-d+1;$("html, body").stop().animate({scrollTop:c},300),a.preventDefault()}),$(window).scroll(function(){var a=$(this).scrollTop()+d,c=f.map(function(){return $(this).offset().top<a?this:void 0});c=c[c.length-1];var g=c&&c.length?c[0].id:"";b!==g&&(b=g,e.parent().removeClass("active").end().filter("[href='#"+g+"']").parent().addClass("active"))})});