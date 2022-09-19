const choices = document.querySelectorAll(`.choices`);
const chance  = document.getElementById(`chance`);
const mainDiv = document.getElementById(`mainDiv`);

let score1= 0;
let score2= 0;
let a=1;
let selected = ['','']

Game();

function Game()
{
    choices.forEach(choices =>
    {
    choices.onclick =()=>
    {
        
        a=choose(choices.value , a)+1;
        if(score1==2 || score2==2)
        {
            a=1;
            
            mainDiv.innerHTML=`<h1>Score is ${score1} / ${score2} </h1><button onclick = "location.reload() " id = "reset">RESET</button>`
            chance.style.visibility="hidden";
            score1=0;
            score2=0;
            selected=['' , ''];
        }
        if(choices.value=="reset")
        {
            onclick = location.reload();

        }
    }
    })
}

function choose(option , b)
{
    if(b===1)
    {

        selected[0]=option;
        chance.innerText=`PLAYER ${b+1} CHANCE`;

        return 1;
    }
    else if(b===2)
    {
        selected[1]=option;

        if(selected[0]==`scissor` && selected[1]==`rock`)
        {
            score2=score2+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
            
        } 
        else if(selected[0]==`scissor` && selected[1]==`paper`)
        {
            score1=score1+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`scissor` && selected[1]==`scissor`)
        {
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`rock` && selected[1]==`scissor`)
        {
            score1=score1+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`rock` && selected[1]==`rock`)
        {
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`rock` && selected[1]==`paper`)
        {
            score2=score2+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`paper` && selected[1]==`paper`)
        {
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`paper` && selected[1]==`rock`)
        {
            score1=score1+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        else if(selected[0]==`paper` && selected[1]==`scissor`)
        {
            score2=score2+1;
            chance.innerText=`PLAYER ${b-1} CHANCE`
        } 
        return 0;
    }
    

}