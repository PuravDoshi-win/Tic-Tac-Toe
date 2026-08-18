let boxes = document.querySelectorAll(".box");
let win_msg = document.querySelector("#winner");
let reset_btn = document.querySelector("#reset");
let turn_msg = document.querySelector("#turn");

let arr2 = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turno = false;
reset_btn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turno = false;
    win_msg.innerText = "";
    turn_msg.innerText = "X's Turn";
});
boxes.forEach((box) => {
   box.addEventListener("click", () => {

    if (turno) {
        box.innerText = "O";
        turno = false;
        turn_msg.innerText = "X's Turn";
    }
    else {
        box.innerText = "X";
        turno = true;
        turn_msg.innerText = "O's Turn";
    }

    box.disabled = true;

    checkwinner();
});
});

const checkwinner = () => {
    for (let pattern of arr2) {

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {

            if (posval1 === posval2 && posval2 === posval3) {

                show_winner(posval1);

                boxes.forEach((box) => {
                    box.disabled = true;
                });
            }
        }
    }
};

const show_winner = (winner) => {
    win_msg.innerText = `Winner is : ${winner}`;
};


