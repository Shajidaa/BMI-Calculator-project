// all input js a anbo


let btn=document.getElementById('submit-btn');

let height=document.getElementById('input-height');

let noteOfTheBmi=document.getElementById('note');
let inputSection=document.getElementById('input-section');
    let outputSection=document.getElementById('output-section');
// function

btn.addEventListener('click',function () {
     height=document.getElementById('input-height').value;

    let weight=document.getElementById('input-weight').value;
    
 
    const finalBMI=document.getElementById('result');

    // if ( typeof height=== "string" ||typeof height=== "null"|| 
    //     typeof weight=== "string"||typeof weight=== "null" ) {
         
          
    // }
    
    
    const calculationValue=Number(weight)/(Number(height*.3048)*Number(height*0.3048));
    
    finalBMI.value=calculationValue.toFixed(2);
   

    //BMi chart 

 if (finalBMI.value<16) {
      noteOfTheBmi.innerText='Severe Thinness '
   }else if(finalBMI.value<17 ){
        noteOfTheBmi.innerText='Moderate Thinness'
   }else if(finalBMI.value<25){
       noteOfTheBmi.innerText='Normal'
   }else if(finalBMI.value<30 ){
          noteOfTheBmi.innerText='Overweight'
   }else {
         noteOfTheBmi.innerText='Obese '
   }
  
   
   //toggle
   
   inputSection.style.display='none'
   outputSection.style.display='flex'
   
    
}
)

const resetBtn=document.querySelector('#reset');

resetBtn.addEventListener('click',function () {

    window.location.reload(true); 
    inputSection.style.display='flex';

    
   outputSection.style.display='none'

})
