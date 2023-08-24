function display(val){
    document.getElementById("result").value += val;
}

function calculation(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clearCal(){
    document.getElementById("result").value = "";
}