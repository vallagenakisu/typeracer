    let words = document.querySelector('.text p');
    let given = words.innerHTML;
    let i = 0;
    let correct = 0 ; 
    let wrong = 0 ;
    let Finished = document.querySelector('.finished');
    let Wrong = document.querySelector('.wrong');
    let Correct = document.querySelector('.correct');
    let newHtml = "";
    for(i = 0 ; i < given.length ; i++)
    {
        newHtml += '<span class = "span">'+given[i] +'</span>';
    }
    words.innerHTML = newHtml;
    let spanArray = document.querySelectorAll(".span");
    i = 0 ;
    document.addEventListener("keydown",function(event){
        console.log(i);
        console.log(event.key);
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
                Finished.innerHTML = "Finished Correct : "+ correct + " Wrong : "+ wrong;
                Correct.innerHTML = "Correct : "+ i;
                Wrong.innerHTML = "Wrong : "+ i;
                correct = 0;   
                wrong = 0;
            }

        })