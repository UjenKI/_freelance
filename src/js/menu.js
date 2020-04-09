function forMenu() {
    var check = document.querySelector('#burger');
    var block = document.querySelector('.banner_item');

    if (check.checked == true) {
        block.style.opacity = 0;
    } else {
        block.style.opacity = 1;
    }
}


