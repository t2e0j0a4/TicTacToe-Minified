let detail = document.querySelector('.gameDetail');
let boxes = Array.from(document.querySelectorAll('.box'));
let resetBtn = document.querySelector(".gameResetButton");

// All possible Crosses
let possibleX = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]

// Initial Start Token : X
let gameToken = 'X';

// Function executes when the box is clicked.
function handleBoxClick() {
    this.innerHTML = gameToken;
    boxes.forEach((box) => {
        if (box.innerHTML) {
            box.style.pointerEvents = 'none';
        }
    })
    possibleX.forEach((possible) => {
        let ele1 = document.querySelector(`.box${possible[0]}`);
        let ele2 = document.querySelector(`.box${possible[1]}`);
        let ele3 = document.querySelector(`.box${possible[2]}`);
        if (ele1.innerHTML && ele2.innerHTML && ele3.innerHTML) {
            if (ele1.innerHTML === ele2.innerHTML && ele2.innerHTML === ele3.innerHTML && ele3.innerHTML === ele1.innerHTML) {
                ele1.classList.add('win');
                ele2.classList.add('win');
                ele3.classList.add('win');
                detail.innerHTML = `'${gameToken}' Won The Game!`;
                boxes.forEach((box) => {
                    if (!box.classList.contains('win')) {
                        box.classList.add('loss');
                        box.disabled = true;
                    }
                    box.style.pointerEvents = 'none';
                })
            }
        }        
    })
    gameToken = gameToken === "X" ? "O" : "X";
}

boxes.forEach((box) => {
    box.addEventListener('click', handleBoxClick) 
})

resetBtn.addEventListener('click', function() {
    detail.innerHTML = ''
    gameToken = 'X';
    boxes.forEach((box) => {
        box.innerHTML = ''
        box.classList.remove('win', 'loss');
        box.style.pointerEvents = 'all';
    })
})