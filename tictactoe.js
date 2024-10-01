let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg") 
let turnO =true;// player x , player O
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>{
box.addEventListener("click", () =>{
if(turnO){
    //player  O turn
    box.innerText="O";
 box.style.color = '#ffc8dd';
    turnO=false;
}else{
//player x turn
box.innerText="X";
box.style.color ='#cdb4db'
turnO = true;
}
box.disabled =true;
checkwinner();
});
});

const resetgame=()=>{
turnO=true;
enableboxes();
msgcontainer.classList.add("hide");
};

const disableboxes=()=>{
for(let box of boxes){
box.disabled=true;
}};
const enableboxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }};



const showwinner=(winner)=>{
msg.innerText=`Congraculations , The Winner is ${winner}`;
msg.style.color='#000000'
msgcontainer.classList.remove("hide");
disableboxes();
};
const checkDraw = () => {
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false; // Found an empty box
        }
    });

    if (allFilled) {
        msg.innerText = "It's a Draw!";
        msg.style.color = '#000000';
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
};


const checkwinner = () =>{
    let filledboxes = true;
for( let pattern of winpattern){
    let pos1val= boxes[pattern[0]].innerText;
    let pos2val= boxes[pattern[1]].innerText;
    let pos3val= boxes[pattern[2]].innerText;
  
if(pos1val != "" && pos2val !=="" && pos3val !== ""){
if(pos1val === pos2val && pos2val === pos3val){
console.log("winner",pos1val);
showwinner(pos1val);
}}}
checkDraw();
};

newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);

