function opTab(tabName) {
    var i;
    var j;
    var x = document.getElementsByClassName("about_txt_item");
    var y = document.getElementsByClassName("txt_item");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        for (j = 0; j < y.length; j++) {
            y[i].style.display = "none";
        }
    }
    document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " click_btn";
}