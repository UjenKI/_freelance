function openTab(e,l){var t,r,s;for(r=document.getElementsByClassName("tab"),t=0;t<r.length;t++)r[t].style.display="none";for(s=document.getElementsByClassName("tablink"),t=0;t<r.length;t++)s[t].className=s[t].className.replace(" click_btn","");document.getElementById(l).style.display="block",e.currentTarget.className+=" click_btn"}$(".second.circle").circleProgress({value:.75,startAngle:4.72,size:120,reverse:!0,fill:{color:"#19bd9a"},emptyFill:"rgba(50, 115, 119, 1)"}).on("circle-animation-progress",function(e,l){$(this).find("strong").html(Math.round(75*l)+"<i>%</i>")}),$(".first.circle").circleProgress({value:.8,startAngle:4.72,size:120,reverse:!0,fill:{color:"#19bd9a"},emptyFill:"rgba(50, 115, 119, 1)"}).on("circle-animation-progress",function(e,l){$(this).find("strong").html(Math.round(80*l)+"<i>%</i>")}),$(".third.circle").circleProgress({value:.6,startAngle:4.72,size:120,reverse:!0,fill:{color:"#19bd9a"},emptyFill:"rgba(50, 115, 119, 1)"}).on("circle-animation-progress",function(e,l){$(this).find("strong").html(Math.round(60*l)+"<i>%</i>")}),$(".sl").slick({autoplay:!0,autoplaySpeed:3e3,speed:1e3,cssEase:"ease-in",centerPadding:"25px",dots:!0,arrows:!1,adaptiveHeight:!0});
//# sourceMappingURL=main.js.map
