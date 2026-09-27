const allButtonEls = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < allButtonEls.length; i++) {

  allButtonEls[i].addEventListener("click", () => {
    const buttonValue = allButtonEls[i].textContent;
    if (buttonValue === "") {
      clearResult();
    } else if (buttonValue === "Del"){
      deletelastcharacter();
    }
    
    else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function deletelastcharacter(){
  const currentValue = inputFieldEl.value + "";

    inputFieldEl.value = currentValue.substring(0, currentValue.length - 1)
}


function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
