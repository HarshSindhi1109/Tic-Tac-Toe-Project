let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgdiv = document.querySelector(".msgdiv");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgdiv.classList.add("hide");
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0= true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posi1val = boxes[pattern[0]].innerText;
        let posi2val = boxes[pattern[1]].innerText;
        let posi3val = boxes[pattern[2]].innerText;

        if (posi1val != "" && posi2val != "" && posi3val != "") {
            if (posi1val === posi2val && posi2val === posi3val) {
                if (posi1val == "O") {
                    posi1val = "Player 1";
                    showWinner(posi1val);
                }
                else {
                    posi1val = "Player 2";
                    showWinner(posi1val);
                }
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = "Congratulation, winner is "+ winner;
    msgdiv.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
