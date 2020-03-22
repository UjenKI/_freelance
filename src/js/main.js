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
