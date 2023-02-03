debugger;
let tempCal = () => {
  let inputNum = document.querySelector("#temp").value;
  console.log(inputNum);
  let result = document.querySelector("#result");
  result.innerText = inputNum;
  const selectTemp = document.querySelector(" #temp_diff ");
  const value = temp_diff.options[selectTemp.selectedIndex].value;
  let tempFah;
  if (value == "cel") {
    tempFah = inputNum * 1.8 + 32;
    result.innerHTML = `= ${tempFah.toFixed(2)} Fahrenheit degree`;
  }
  else{
    tempFah = Math.round((inputNum - 32)*5/9);
    result.innerHTML = `= ${tempFah.toFixed(2)} Celsius degree`;
  }
};
