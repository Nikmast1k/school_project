const spaceForBtnsContentCalc = '<div style="text-align: center">\
            <div><input type="number" min="1" max="5" style="width: 50px; height: 50px; font-size: 20px;"></div><br>\
            <div><p style="font-size: 15px">Желаемая оценка(число)</p></div> \
            <br>\
            <div><a href="#" class="bn3637 bn36" id="1001">Рассчитать оценки</a></div>\
            </div>\
            <div id="space_for_result"></div>';

let btnsSpaceCalc = document.getElementById('space_for_btns');

let clickCalc = document.querySelector('.click');
let listCalc = document.querySelector('.list');
clickCalc.addEventListener("click", () => {
    btnsSpaceCalc.innerHTML = '';
    listCalc.classList.toggle('newlist');
});

let buttonsCalc = document.querySelectorAll('.links');
buttonsCalc.forEach(button => {
    button.removeEventListener("click", updateButton);
});

function updateButton() {
    listCalc.classList.toggle('newlist');
    btnsSpaceCalc.innerHTML = spaceForBtnsContentCalc;
    console.log(`Button ${this.textContent} clicked!`);
}

buttonsCalc = document.querySelectorAll('.links');
buttonsCalc.forEach(button => {
    button.addEventListener("click", updateButton);
});