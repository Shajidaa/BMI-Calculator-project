// all input js a anbo


let btn=document.getElementById('submit-btn')
// function

btn.addEventListener('click',function () {
    let height=document.getElementById('input-height').value;

    let weight=document.getElementById('input-weight').value;

    const finalBMI=document.getElementById('result');

    // console.log(height,weight);
    
    const calculationValue=Number(weight)/(Number(height)*Number(height));
    // return calculationValue;
     
    // console.log(calculationValue.toFixed(2));
    finalBMI.value=calculationValue.toFixed(2);
   
    
}
)

// function bmiCalculator(height,weight) {
//     console.log(height,weight);
    
//     let calculationValue=weight/(height*height);
//     return calculationValue;
// }

// console.log(bmiCalculator(1.75,70 ));
