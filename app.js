
var data=0
function Increment() {
    data++
    document.getElementById('display').innerText=data;
    // console.log(data);
}
 function Reset() {
     data = 0
    document.getElementById('display').innerText=data;
    console.log(data, Math.random());

}
function Decrement() {
    data--
    document.getElementById('display').innerText=data;
    // console.log(data);

}