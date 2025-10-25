const inputValue=document.querySelector('#inputVal');
const subValue = document.querySelector('#subVal');
const historyDiv=document.querySelector('#hisDiv');
const modeBtn=document.querySelector('#mode');
let currMode = "light";


function getVal(val){
    
    if(inputValue.value === '0' && !isNaN(val) && val !== '.') {
        inputValue.value = val;
    }
    else{
        inputValue.value += val;
    }
}

function clearAll(){
    subValue.value="";
    inputValue.value='0';
    historyDiv.innerHTML = "";
}
function showHistory(equation,ans){
    historyDiv.innerHTML += `<div class="his">
   <p>${subValue.value}</p>
   <p>${inputValue.value}</p>
   </div>
   `;
}
function C(){
  subValue.value='';
  inputValue.value="0";
}

// modeBtn.onclick = () => {
//     if(currMode === 'light'){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
       
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// }
function removeLastDigit(){
    if(inputValue.value.length > 1){
         inputValue.value = inputValue.value.slice(0,-1);
    }
    else{
        inputValue.value = inputValue.value.slice(0,-1);
        inputValue.value= "0" ;
    }

}



function modulus(){
    var equation = inputValue.value;
    subValue.value = equation + '%'; 

    try {
        
        var result = eval(equation + "/100");
        inputValue.value = result;
        showHistory(equation + "%", result); 
    } catch (err) {
        inputValue.value = "Error";
    }
}
function toggleHistory(){
    const hisSection = document.querySelector(".History");
    if (hisSection.style.display === "none" || hisSection.style.display === "") {
        hisSection.style.display = "block";
    } else {
        hisSection.style.display = "none";
    }
}

function solve(){
    try {
        var equation = inputValue.value;
        subValue.value = equation + '=';
        var ans = eval(equation);
        inputValue.value = ans;
        showHistory(equation, ans);
    } catch (error) {
        inputValue.value = "Error";
    }
}


