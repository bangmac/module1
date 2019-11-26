function add() {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let x = a +b;
    document.getElementById('result').innerHTML = 'Result Addition :' + x
}
function sub() {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let x = a - b;
    document.getElementById('result').innerHTML = 'Result Addition :' + x
}
function mul() {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let x = a * b;
    document.getElementById('result').innerHTML = 'Result Addition :' + x
}
function div() {
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let x = a / b;
    document.getElementById('result').innerHTML = 'Result Addition :' + x
}
