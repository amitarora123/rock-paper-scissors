console.log("running script")
const choice=document.querySelectorAll(".box")
const choices=["Rock","Paper","Scissors"]
const msgbox=document.getElementById("msgbox")
const userScore=document.getElementById("user-score")
const comScore=document.getElementById("com-score")
const resetButton=document.querySelector(".reset")
let userCount=0
let comCount=0

const increaseScore=(winner)=>{
    if(winner=="You"){
        userCount++
        userScore.innerText=userCount
        msgbox.style.backgroundColor="green"
    }
    else if(winner="Com"){
        comCount++
        comScore.innerText=comCount
        msgbox.style.backgroundColor="red"
    }
}
const printWinner=(winner)=>{
    msgbox.innerText=`Winner is ${winner}` 

}
const comChoice=()=>{
    const index=Math.floor(Math.random()*3)
    return choices[index]
}
const printDraw=()=>{
    msgbox.innerText=`The game is Draw` 
    msgbox.style.backgroundColor="black"
}
const chkwin=(user)=>{
    const com=comChoice()
    console.log(user)
    console.log(com)

if(user==com){
    console.log("draw")
    printDraw()
}
else{
    let winner
    if(user=="Rock"){
        winner=(com=="Scissors")?"You":"Com"
    }
    else if(user=="Paper"){
        winner=(com=="Rock")?"You":"Com"
    }
    else{
        winner=(com=="Paper")?"You":"Com"
    }
    console.log("winner is "+winner )
    printWinner(winner)
    increaseScore(winner)
 
}
}
const reset=()=>{
    userCount=0
     comCount=0
     msgbox.innerText=`It's Your Turn Now` 
     userScore.innerText=userCount
     comScore.innerText=comCount
}
resetButton.addEventListener("click",()=>{
    reset();
})
choice.forEach((box)=>{
box.addEventListener("click",()=>
{
   const userChoice=box.getAttribute("id")
    chkwin(userChoice)
})
});
