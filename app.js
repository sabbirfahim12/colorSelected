const buttons=document.querySelectorAll(".btnamr")//ALLclass btnamr;
const body=document.querySelector('body');//tag selected

//btnamr is a class Name currentValue which takes full tag but not tag value i mean leka tag or bitore
buttons.forEach(function(btnamr){
btnamr.addEventListener("click",function(btnamr){
//target can be tagName idName which shown 
console.log(btnamr.target);
if(btnamr.target.id ==='grey'){
    body.style.backgroundColor='grey' ; 
} if(btnamr.target.id==='white'){
    body.style.backgroundColor='white';
}
 if(btnamr.target.id==='blue'){
    body.style.backgroundColor='blue';
}
 if(btnamr.target.id==='yellow'){
    body.style.backgroundColor='yellow';
}

})


})