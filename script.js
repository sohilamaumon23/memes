const mydiv =document.querySelector(".data1");
const myinput =document.querySelector(".input ");
const mybtn =document.querySelector(".btn-danger");



const getData = async()=>{
    
const fetching = await fetch("https://api.imgflip.com/get_memes");
const res = await fetching.json();

// console.log(res);

mybtn.addEventListener("click" , () =>{
       
if (isNaN(myinput.value)) {
  mydiv.innerHTML = `<h1> Not a number </h1>`;
}else if ((myinput.value >= 100) || (myinput.value <0 )  || (myinput.value =="")){
  mydiv.innerHTML = `<h1> please write number from 0 to 99 </h1>`;
}else{
  mydiv.innerHTML = `<div class="d-flex flex-column align-items-center justify-contect-center"> 
  <h1> ${res.data.memes[myinput.value].name}</h1>
<img  class="w-50" src=${res.data.memes[myinput.value].url}>
  </div>`;
}
});
};
getData();

