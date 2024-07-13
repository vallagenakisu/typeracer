let words = document.querySelector(".text p");
let given = words.innerHTML;
let i = 0;
let correct = 0;
let wrong = 0;
let Finished = document.querySelector(".finished");
let Wrong = document.querySelector(".wrong");
let Correct = document.querySelector(".correct");
let newHtml = "";

let wordCount = given.split(" ").length;
let Second = document.querySelector(".second");
let milSecond = document.querySelector(".milSecond");
let timerStarted = false;
let elapsedSecond = 0;
let interval;

function startTimer() {
  let sec = 0;
  let mili = 0;
  interval = setInterval(function () {
    mili++;
    if (mili == 100) {
      sec++;
      elapsedSecond++;
      mili = 0;
    }
    Second.innerHTML = ` ${sec}`;
    milSecond.innerHTML = ` : ${mili}`;
  }, 10);
}

// Create popup element
let popup = document.createElement("div");
popup.className = "popup";
document.body.appendChild(popup);

for (i = 0; i < given.length; i++) {
  newHtml += `<span class="span">${given[i]}</span>`;
}
words.innerHTML = newHtml;
let spanArray = document.querySelectorAll(".span");
i = 0;
spanArray[i].classList.add("cursor");

document.addEventListener("keydown", function (event) {
  if (!timerStarted) {
    timerStarted = true;
    startTimer();
  }

  if (i >= 0 && i < spanArray.length) {
    if (event.key === "Backspace") {
      spanArray[i].classList.remove("cursor");
      if (i > 0) {
        i--;
        spanArray[i].style.color = "#EEEEEE";
        spanArray[i].classList.add("cursor");
        spanArray[i].style.opacity = 0.3;
      }
    } else if (event.key !== "Shift") {
      spanArray[i].classList.remove("cursor");
      if (event.key === given[i]) {
        correct++;
        spanArray[i].style.color = "#10ac84";
      } else {
        wrong++;
        spanArray[i].style.color = "#ee5253";
      }
      spanArray[i].style.opacity = 1;
      i++;
      if (i < spanArray.length) {
        spanArray[i].classList.add("cursor");
      }
    }
    Correct.innerHTML = `${correct} <i class='bx bx-check'></i>`;
    Wrong.innerHTML = `${wrong} <i class='bx bx-x'></i>`;
  }

  if (i === given.length) {
    clearInterval(interval);

    let WPM = ((wordCount / (elapsedSecond / 60)).toFixed(2));
    // Finished.innerHTML = `Finished! Correct: ${correct}, Wrong: ${wrong}, WPM: ${WPM}`;

    popup.innerHTML = `
      <div class="typewriter">
        <div class="slide"><i></i></div>
        <div class="paper"></div>
        <div class="keyboard"></div>
        <div class="last-result">
          <p class="last-correct">Correct: ${correct}</p>
          <p class="last-wrong">Wrong: ${wrong}</p>
          <p class="last-wpm">WPM: ${WPM}</p>
        </div>  
      </div>
    `;

    // Show popup
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

    // Reset state
    correct = 0;
    wrong = 0;
    elapsedSecond = 0;
    i = 0;
    timerStarted = false;
    spanArray.forEach((span) => {
      span.style.color = "#EEEEEE";
      span.style.opacity = 0.3;
    });
    spanArray[i].classList.add("cursor");

    // Correct.innerHTML = "Correct: 0";
    // Wrong.innerHTML = "Wrong: 0";
    Second.innerHTML = " 00";
    milSecond.innerHTML = " : 00";
  }
});
