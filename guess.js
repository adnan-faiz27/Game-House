const up=document.getElementById(`up`);
const down=document.getElementById(`down`);
const input=document.getElementById(`input`);
const S=document.getElementById(`score`);
const hint=document.getElementById(`hint`);
const button=document.getElementById(`buttonDiv`);

let num = Math.random()*100;
let score = 10;
num=Number(num.toFixed(0))
function calculate()
{
    if(score!=0)
    {
        let userinput = Number(input.value);
        
        if(userinput>num && userinput>num+10)
        {
            down.style.visibility=`visible`;
            up.style.visibility=`hidden`;
            hint.innerText=`TRY AGAIN`
            score--;
            S.innerText=`SCORE ${score}`;
        }
        if(userinput>num && userinput<num+10)
        {
            down.style.visibility=`visible`;
            up.style.visibility=`hidden`;
            hint.innerText=`YOU ARE CLOSE`
            score--;
            S.innerText=`SCORE ${score}`;
        }
        if(userinput<num && userinput<num-10)
        {
            up.style.visibility=`visible`;
            down.style.visibility=`hidden`;
            hint.innerText=`TRY AGAIN`
            score--;
            S.innerText=`SCORE ${score}`;
        }
        if(userinput<num && userinput>num-10)
        {
            up.style.visibility=`visible`;
            down.style.visibility=`hidden`;
            hint.innerText=`YOU ARE CLOSE`
            score--;
            S.innerText=`SCORE ${score}`;
        }
        if(userinput==num)
        {
            up.style.visibility=`visible`;
            up.style.visibility=`hidden`;
            down.style.visibility=`hidden`;
            hint.innerText=`YOU FOUND THE NUMBER.SCORE-${score}`
            button.innerHTML=`<button onclick = "location.reload() " id = "reset">RESET</button>`
        }
    }
    if(score==0)
    {
        hint.innerText=`Your lose number was ${num}`;
        button.innerHTML=`<button onclick = "location.reload() " id = "reset">RESET</button>`
    }
    
}
