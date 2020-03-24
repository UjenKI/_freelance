// ----------------------------------------
function openTab(evt, tabNumber) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" click_btn", "");
    }
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " click_btn";
}
// 
$('.second.circle').circleProgress({
    value: 0.75,
    startAngle: 4.72,
    size: 120,
    reverse: true,
    fill: { color: "#19bd9a" },
    emptyFill: "rgba(50, 115, 119, 1)"
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});
$('.first.circle').circleProgress({
    value: 0.8,
    startAngle: 4.72,
    size: 120,
    reverse: true,
    fill: { color: "#19bd9a" },
    emptyFill: "rgba(50, 115, 119, 1)"
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
});
$('.third.circle').circleProgress({
    value: 0.6,
    startAngle: 4.72,
    size: 120,
    reverse: true,
    fill: { color: "#19bd9a" },
    emptyFill: "rgba(50, 115, 119, 1)"
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
});
// 
$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'ease-in',
    centerPadding: '25px',
    dots: true,
    arrows: false,
    adaptiveHeight: true
});
// 4$$$$$$$$$$$$

