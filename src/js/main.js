var buttons = document.querySelector("#buttons").children;
var items = document.querySelector(".gallery_item").children;
var father = document.querySelector(".gallery_item");
// console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-target"));
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
        var target = this.getAttribute("data-target");

        for (var k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (items[k].getAttribute("data-id") == target) {
                items[k].style.display = "block";
            }
        }
    })
}

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

