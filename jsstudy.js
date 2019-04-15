window.onload = function () {
    let h2Divs = document.querySelectorAll('.header-bg');

    let colors = ['74d2e7', 'a51890', '008eaa', '84bd00', 'efdf00', 'e4002b', '003666'];

    for (let i = 0; i < h2Divs.length; i++ ) {
        let bgDiv = document.createElement('div');
        
        bgDiv.style.height = h2Divs[i].offsetHeight + 'px';
        bgDiv.style.width = h2Divs[i].querySelector("h2").offsetWidth + 'px';
        bgDiv.style.transform = ' rotate(' + randomInteger(-10, 10) + 'deg)';
        bgDiv.style.backgroundColor = '#' + colors[randomInteger(0, colors.length - 1)];

        bgDiv.classList.add('square-bg');
        h2Divs[i].appendChild(bgDiv);
    }
};

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
  }