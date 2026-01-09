let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let msg=document.querySelector("#msg");

let turn0 = true; //playerx, player0

const winpatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("box was clicked"); 
       if (turn0) {
        box.innerText = "0";
        turn0 = false;
       } else {
        box.innerText = "x";
        turn0 = true;
     }
     box.disabled=true;
     checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
     box.disabled=true;   
    }
};

const enableBoxes = () => {
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";   
    }
};


const showWinner = (winner) => {
msg.innerText=`congratulations, winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};





const checkWinner = () => {
 for(let pattern of winpatterns) {
    
        let post1val= boxes[pattern[0]].innerText;
        let post2val= boxes[pattern[1]].innerText;
        let post3val= boxes[pattern[2]].innerText;

        if (post1val !== "" && post2val !== "" && post3val !=="") { 
            if (post1val ===post2val && post2val ===post3val) {
                console.log("winner" ,post1val);
                showWinner(post1val);

                return;
            }
        }
 }   
};


newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

