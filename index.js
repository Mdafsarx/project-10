

const sDisplay=document.getElementById('sDisplay')
const splusButton=document.getElementById('splusButton')
const sMinusButton=document.getElementById('sMinusButton');

const aDisplay=document.getElementById('aDisplay')
const aplusButton=document.getElementById('aplusButton')
const aMinusButton=document.getElementById('aMinusButton')

const ADisplay=document.getElementById('ADisplay');
const AplusButton=document.getElementById('AplusButton');
const AMinusButton=document.getElementById('AMinusButton');



let SValue=0;
let AValue=0;
let AValue2=0;



splusButton.addEventListener('click',function(){
    
if(SValue===33){
    return alert('Complect')
}

SValue+=1;
sDisplay.innerText=SValue;


})
sMinusButton.addEventListener('click',function(){
  
if(SValue===0){
    return alert('Invalid')
}


    SValue-=1;
    sDisplay.innerText=SValue;

})


aplusButton.addEventListener('click',function(){
    
if(AValue===33){
    return alert('Complect')
}

AValue+=1;
aDisplay.innerText=AValue;


})
aMinusButton.addEventListener('click',function(){
  
if(AValue===0){
    return alert('Invalid')
}


    AValue-=1;
    aDisplay.innerText=AValue;

})


AplusButton.addEventListener('click',function(){
    
if(AValue2===33){
    return alert('Complect')
}

AValue2+=1;
ADisplay.innerText=AValue2;


})
AMinusButton.addEventListener('click',function(){
  
if(AValue2===0){
    return alert('Invalid')
}


    AValue2-=1;
    ADisplay.innerText=AValue2;

})

document.getElementById('reset').addEventListener('click',function(){

aDisplay.innerText=0;
sDisplay.innerText=0;
ADisplay.innerText=0;

AValue=0;
SValue=0;
AValue2=0;

})