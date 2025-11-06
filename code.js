let score1= document.getElementById("score-1")
let score2= document.getElementById("score-2")
let qtn= document.getElementById("quantity")
//let btn1= document.querySelector(".button1")
let scoref= document.getElementById("score-f")
let targetf= document.getElementById("target-f")
let commentf= document.getElementById("comment")
let sum = 0, x=0
let sum2 = 0, sum1 = 0, k, p

scoref.textContent = "Score" + "  :  -" 
targetf.textContent = "Target" + " :  -"

function btn22(){
    if(x === 0){ 
       document.querySelector(".new").textContent = "You have choosen bat to first"
       x++
       k = 0
    }
}

function btn23(){
    if(x === 0){
        document.querySelector(".new").textContent = "You have choosen bowl to first"
        x++
        p = 0
    }
}

function btn0(){
    if(k === 0 || k === 1 || p === 0 || p === 1){
        sc1 = 0
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn1(){
    if(k === 0 || k === 1 || p === 0 || p === 1){
        sc1 = 1
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn2(){
    if(k === 0 || k === 1 || p === 0 || p === 1){
        sc1 = 2
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn3(){
    if(k === 1 || k === 0 || p === 0 || p === 1){
        sc1 = 3
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn4(){
    if(k === 1 || k === 0 || p === 0 || p === 1){
        sc1 = 4
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn5(){
    if(k === 0 || k === 1 || p === 0 || p === 1){
        sc1 = 5
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function btn6(){
    if(k === 0 || k === 1 || p === 0 || p === 1){
        sc1 = 6
        sc2 = Math.floor(Math.random()*7)
        score1.textContent = sc1
        score2.textContent = sc2
    }
    if(k === 0){
       firstgame()
    }
    else if(k ===1){
        secondgame()
    }
    else if(p === 0){
        thirdgame()
    }
    else if(p === 1){
        fourthgame()
    }
}

function firstgame()
{
        if(sc1 != sc2)
        {
            if(sc1 === 0)
            {
                sum += sc2
                scoref.textContent = "Your Score" + "  :  " + sum
            }
            else{
                sum += sc1
                scoref.textContent = "Your Score" + "  :  " + sum
            }
        }
        else
        {
            k++
            sum1 = sum
            scoref.textContent = "Your Score" + "  :  " + sum 
            sum += 1
            commentf.innerText = "You are out.... Now it's computer time for batting"
            targetf.textContent = "Computer Target" + " :  " + sum
            sum = 0
        }
}

function secondgame()
{
    if(sc1 != sc2 && ((sum1 > sum2 && sum1 != 0) || sum1 === 0))
    {
        if(sc2 === 0)
        {
            sum += sc1
            sum2 = sum
            scoref.textContent = "Computer Score" + "  :  " + sum2
            if(sum2 > sum1){
                commentf.textContent = "Computer has won the match"
            }
        }
        else{
            sum += sc2
            sum2 = sum
            scoref.textContent = "Computer Score" + "  :  " + sum2
            if(sum2 > sum1){
                commentf.textContent = "Computer has won the match"
            }
        }
    }
    else
    {
        k++
        scoref.textContent = "Computer Score" + "  :  " + sum2
        if(sum2 > sum1){
            commentf.textContent = "Computer has won the match"
          }
        else if(sum1 > sum2){
              commentf.textContent = "Yahooo!! You won the match"
          }
        else{
              commentf.textContent = "The match was tied"
          }
    }
}

function thirdgame()
{
    if(sc1 != sc2)
    {
        if(sc2 === 0)
        {
            sum += sc1
            sum2 = sum
            scoref.textContent = "Computer Score" + "  :  " + sum2
        }
        else{
            sum += sc2
            sum2 = sum
            scoref.textContent = "Computer Score" + "  :  " + sum2
        }
    }
    else
    {
        p++
        scoref.textContent = "Computer Score" + "  :  " + sum
        sum += 1
        commentf.innerText = "Computer is out.... Now it's your time for batting"
        targetf.textContent = "Your Target" + " :  " + sum
        sum = 0
    }
}
 
function fourthgame()
{
    if(sc1 != sc2 && ((sum2 > sum1 && sum2 != 0) || sum2 === 0))
        {
            if(sc1 === 0)
            {
                sum += sc2
                sum1 = sum
                scoref.textContent = "Your Score" + "  :  " + sum
                if(sum1 > sum2){
                    commentf.textContent = "Yahooo!! You won the match"
                }
            }
            else{
                sum += sc1
                sum1 = sum
                scoref.textContent = "Your Score" + "  :  " + sum
                if(sum1 > sum2){
                    commentf.textContent = "Yahooo!! You won the match"
                }
            }
        }
        else
        {
            p++
            scoref.textContent = "Your Score" + "  :  " + sum1
            if(sum2 > sum1){
                commentf.textContent = "Computer has won the match"
              }
            else if(sum1 > sum2){
                  commentf.textContent = "Yahooo!! You won the match"
              }
            else{
                  commentf.textContent = "The match was tied"
          }
        }
}