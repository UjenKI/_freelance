function forMenu() {
    var check = document.querySelector('#burger');
    var block = document.querySelector('.banner_item');

    if (check.checked == true) {
        block.style.display = "none";
    } else {
        block.style.display = "block";
    }
}


