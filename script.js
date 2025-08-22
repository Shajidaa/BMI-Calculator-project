// all input js a anbo


let btn=document.getElementById('submit-btn');

let height=document.getElementById('input-height');

let noteOfTheBmi=document.getElementById('note');

// function

btn.addEventListener('click',function () {
     height=document.getElementById('input-height').value;

    let weight=document.getElementById('input-weight').value;
    let inputSection=document.getElementById('input-section')
    let outputSection=document.getElementById('output-section')
 
    const finalBMI=document.getElementById('result');

    
    
    const calculationValue=Number(weight)/(Number(height)*Number(height));
    
    finalBMI.value=calculationValue.toFixed(2);

    //BMi chart 

 if (finalBMI.value<16) {
      noteOfTheBmi.innerText='Severe Thinness'
   }else if(finalBMI.value<17 ){
        noteOfTheBmi.innerText='Moderate Thinness'
   }else if(finalBMI.value<25){
       noteOfTheBmi.innerText='Normal'
   }else if(finalBMI.value<30 ){
          noteOfTheBmi.innerText='Overweight'
   }else {
         noteOfTheBmi.innerText='Obese '
   }
  
   
   //togol
   inputSection.style.display='none'
   outputSection.style.display='flex'
   
    
}
)


