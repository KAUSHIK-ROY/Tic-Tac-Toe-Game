let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let theme_btn = document.querySelector("#theme-btn");

let mode = true;

const combination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(mode){
            box.innerText = "O";
            mode = false;
        }
        else{
            box.innerText = "X";
            mode = true;
        }
        box.disabled = true;

        checkWinner(); 
    })
});


const diasbleBox = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};


const anableBox =() => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for(let pattern of combination){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 &&position2 === position3){
                document.querySelector(".show").style.display = "flex";                 //classList.remove("show");
                msg.innerText = `Congrats! Winner is ${position1}`;
                diasbleBox();
            }
        }
    }
};



reset_btn.addEventListener("click", () => {
    mode = true;
    anableBox();
    
});

new_btn.addEventListener("click", () => {
    mode = true;
    anableBox();
    document.querySelector(".show").style.display = "none";
});

let theme = "light" ;
theme_btn.addEventListener("click", () =>{

    if( theme === "light"){
        theme = "dark";
        document.body.style.background = "rgb(25, 25, 25)";
        document.querySelector("h1").style.color = "cyan";
        document.querySelector("h1").style.textShadow = "0 0 5px #fe01b1, 0 0 25px #fe01b1, 0 0 05px #fe01b1, 0 0 75px #fe01b1";
        document.querySelector("#reset-btn").style.color = "cyan";
        document.querySelector("#reset-btn").style.boxShadow = "0 0 15px cyan";
        document.querySelector("h2").style.color = "white";
        document.querySelector("h2").style.textShadow = "0 0 5px #fe01b1, 0 0 25px #fe01b1, 0 0 05px #fe01b1, 0 0 75px #fe01b1";
        document.querySelector(".container").style.background = "radial-gradient(circle, rgba(73,22,94,1) 25%, rgba(25,25,25,1) 85%";
        document.querySelector(".show").style.background = "rgba(0, 255, 255, 0.492)";

        document.querySelector(".new-btn").style.color = "cyan";
        document.querySelector(".new-btn").style.boxShadow = "0 0 15px #fe01b1";
        document.querySelector("#msg").style.color = "red";


        boxes.forEach(function(ele){       //for multiple classes always use forEach functions
            ele.style.background = "white";
            ele.style.color = "red";
            ele.style.textShadow = "0 0 5px #fe01b1,  0 0 25px #fe01b1"; 
            ele.style.boxShadow = "0 0 5px #fe01b1, 0 0 25px #fe01b1, 0 0 05px #fe01b1";
        })
    }
    else{
        theme = "light";

        document.body.style.background = "";
        document.querySelector("h1").style.color = "";
        document.querySelector("h1").style.textShadow = "";
        document.querySelector("#reset-btn").style.color = "";
        document.querySelector("#reset-btn").style.boxShadow = "";
        document.querySelector("h2").style.color = "";
        document.querySelector("h2").style.textShadow = "";
        document.querySelector(".container").style.background = "";
        document.querySelector(".show").style.background = "";

        document.querySelector(".new-btn").style.color = "";
        document.querySelector(".new-btn").style.boxShadow = "";
        document.querySelector("#msg").style.color = "";


        boxes.forEach(function(ele){       //for multiple classes always use foeEach functions
            ele.style.background = "rgb(255, 194, 247)";
            ele.style.color = "red";
            ele.style.textShadow = "0 0 5px #fe01b1,  0 0 25px #fe01b1"; 
            ele.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.447)";
        })   
    }
});
