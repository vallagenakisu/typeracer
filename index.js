let words = document.querySelector('.text p');
let given = words.innerHTML;
let i = 0;
let correct = 0 ; 
let wrong = 0 ;
let Finished = document.querySelector('.finished');
let Wrong = document.querySelector('.wrong');
let Correct = document.querySelector('.correct');
let newHtml = "";
let wordCount = 0 ;
let Second = document.querySelector('.second');
let milSecond = document.querySelector('.milSecond');
let time = false;
let timerStarted = false;
let elapsedSecond = 0;
for(i = 0 ; i < given.length ; i++)
{
    newHtml += '<span class = "span">'+given[i] +'</span>';
}
words.innerHTML = newHtml;
let spanArray = document.querySelectorAll(".span");
i = 0 ;

function start(time)
{
    console.log(time);
    if(time)
    {
        let sec = 0;
        let mili = 0;
        console.log(time);
        setInterval(function(){
            mili++;
            if(mili == 100)
            {
                sec++;
                elapsedSecond++;
                mili = 0;
            }
            Second.innerHTML = " "+ sec;
            milSecond.innerHTML = " : "+ mili;
        },10)
    }
}
document.addEventListener("keydown",function(event){
    console.log(i);
    console.log(event.key);
    
    if(!timerStarted)
    {
        time = true;
        timerStarted = true;
        start(time);

    }
        if(event.key === "Backspace"  )
        {
            console.log("yaay");
            i--;
            spanArray[i].style.color = "black";   
        }
        else if(event.key === "Shift")
        {
            
        }
        else if(event.key === given[i])
        {
            correct++;
            spanArray[i].style.color = "green";
            i++;
            Correct.innerHTML = "Correct : "+ correct;
          
        }
        else if(event.key === " ")
        {
            if(given[i] === " ")
            {
                correct++;
                wordCount++;
            }
            else 
            {
                wrong++;
            }
            i++;

        }
        else 
        {
            console.log("wrong");
            wrong++;
            spanArray[i].style.color = "red";
            i++;
            Wrong.innerHTML = "Wrong : "+ wrong;
        }
        if(i == given.length)
        {
            i = 0;
            Finished.innerHTML = "Finished Correct : "+ correct + " Wrong : "+ wrong +"WPM" + (wordCount/elapsedSecond)*60;
            Correct.innerHTML = "Correct : "+ i;
            Wrong.innerHTML = "Wrong : "+ i;
            Second.innerHTML = " "+ sec;
            milSecond.innerHTML = " : "+ mili;
            correct = 0;   
            wrong = 0;
            time = false;
            start(time);
            timerStarted = true;   
        }

    })

