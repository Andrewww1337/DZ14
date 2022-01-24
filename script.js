const inp1 = document.getElementById('inp1');
const button = document.getElementById('button');
const div = document.getElementById('div');

button.addEventListener('click', function(){
let arr=[];
let n = Number(inp1.value);
let i;
let check;


while (arr.length < n) {
  do {
    check = true;
    num = Math.floor(Math.random() * n);        
    console.log(arr.length)
    for (i = 0; i < arr.length; i++) {           
      if (num == arr[i]) {                     
        check = false;
      }
    }
  } 
  while (!check);
  arr.push(num);
  
}
console.log(arr);
div.innerHTML=arr;
});