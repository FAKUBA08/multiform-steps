const submitBtn=document.querySelector('.next-step')
let userName=document.getElementById('name')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
const required1=document.querySelector('.required1')
const required2=document.querySelector('.required2')
const required3=document.querySelector('.required3')
let correctInput=document.querySelector('.correctInput')
submitBtn.addEventListener('click',function(){
     
      if ( userName.value==='') {
           userName.style.borderColor='red'
               required1.innerHTML='This field is required'
      }

      else if(userName.value !==''){
          userName.style.borderColor='black'
              required1.innerHTML=''
      }

      if (email.value === '') {
      email.style.borderColor = 'red';
           required2.innerHTML = 'This field is required';
      }

       else if (!email.value.endsWith('@gmail.com')) {
                email.style.borderColor = 'red';
      required2.innerHTML = 'Invalid email';
      } 
      
      else {
      email.style.borderColor = 'black';
            required2.innerHTML = '';
      }

    if(phone.value===''){
       phone.style.borderColor='red'
          required3.innerHTML='This field is required'
   }
   else if(phone.value !==''){
    phone.style.borderColor='black'
        required3.innerHTML=''
     }
   

})
let  lastItems = document.querySelectorAll('.selection ul .userSelect');
function seenBtn() {
  
  lastItems.forEach(li => {
    li.addEventListener('click', function() {
  
      lastItems.forEach(items => {
        items.classList.remove('clicked');
       
      });
      this.classList.add('clicked');
    });
  });
}


const next=document.querySelector('.next-step')
const step2=document.querySelector('.step2')
const step1=document.querySelector('.step1')
const containerBtn1=document.querySelector('.form-input')
const containerBtn2=document.querySelector('.form-input2')
const choiceHome=document.querySelector('.choiceHome')
const containerBtn3=document.querySelector('.form-input3')
const containerBtn4=document.querySelector('.form-input4')
next.addEventListener('click',function(){
  if (userName.value!=='' && email.value!=='' && phone.value!==''  && email.value.endsWith("@gmail.com") ) {
    containerBtn2.removeAttribute('hidden')
    containerBtn1.setAttribute('hidden',true)
    lastItems[1].classList.add('clicked')
    lastItems[0].classList.remove('clicked')
    seenBtn()
  }
})
step2.addEventListener('click',function(){
 if (userName.value!=='' && email.value.endsWith("@gmail.com") && phone.value!=='' ) {
  containerBtn2.removeAttribute('hidden')
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  containerBtn4.setAttribute('hidden',true)
  congratulation.setAttribute('hidden',true)
   
 }
 
 else{
   userName.style.borderColor='red'
   email.style.borderColor='red'
   phone.style.borderColor='red'
 }
})
step1.addEventListener('click',function(){
  containerBtn2.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  containerBtn1.removeAttribute('hidden')
  containerBtn4.setAttribute('hidden',true)
  congratulation.setAttribute('hidden',true)

})
choiceHome.addEventListener('click',function(){
  lastItems[0].classList.add('clicked')
    lastItems[1].classList.remove('clicked')
    lastItems[2].classList.remove('clicked')
    lastItems[3].classList.remove('clicked')
    containerBtn2.setAttribute('hidden',true)
    containerBtn1.removeAttribute('hidden')
})
const choiceBtn=document.querySelectorAll('.form-input2 .boxBox')
choiceBtn.forEach(items=>{
 items.addEventListener('click',function(){
  choiceBtn.forEach(li=>{
    li.classList.remove('move')
  })
 this.classList.add('move')
 })
})
let arc=document.querySelector('.smallAmount')
let ard=document.querySelector('.largeAmount')
let pro=document.querySelector('.largerAmount')
let checkBox=document.querySelector('.checkBtn')
let month=document.querySelector('.month')
let year=document.querySelector('.year')
const first=document.querySelector('.first')
const second=document.querySelector('.second')
const third=document.querySelector('.third')
const calculate=document.querySelector('.calculate')
checkBox.addEventListener('click',function(){
  if (checkBox.checked) {
    arc.innerHTML='$90/yr'
       ard.innerHTML='$120/yr'
          pro.innerHTML='$150/yr'
          first.innerHTML='+$10/yr'
                 second.innerHTML='+$20/yr'
                        third.innerHTML='+$20/yr'
          year.style.color=" #03295a8e"
          month.style.color="#03295A"
          calculate.innerHTML='Total(per year)'
  }else {
    arc.innerHTML='$9/mo'
       ard.innerHTML='$12/mo'
          pro.innerHTML='$15/mo'
           month.style.color="#03295a8e"
          year.style.color="#03295A"
                first.innerHTML='+$1/mo'
                  second.innerHTML='+$2/mo'
                        third.innerHTML='+$2/mo'
                           calculate.innerHTML='Total(per month)'
      
  }
})


const enhanceBoxes = document.querySelectorAll('.enhanceBox');

enhanceBoxes.forEach((box) => {
  box.addEventListener('click', function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
      return;
    }

    const checkbox = this.querySelector('.checkBox');
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }

    if (checkbox.checked) {
      this.classList.add('checked');
    } else {
      this.classList.remove('checked');
    }

    this.classList.toggle('move');
  });
});

document.querySelectorAll('.checkBox').forEach((checkbox) => {
  checkbox.addEventListener('click', function(event) {
    event.stopPropagation();
    
    const box = this.closest('.enhanceBox');
    if (this.checked) {
      box.classList.add('checked');
    } else {
      box.classList.remove('checked');
    }

    box.classList.toggle('move');
  });
});


document.querySelectorAll('.checkBox').forEach((checkbox) => {
  checkbox.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

const nextTwo=document.querySelector('.next-step2')
const step3=document.querySelector('.step3')
const step4=document.querySelector('.step4')
nextTwo.addEventListener('click',function(){
  // alert('helo')
  containerBtn2.setAttribute('hidden',true)
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.removeAttribute('hidden')
  lastItems[2].classList.add('clicked')
  lastItems[1].classList.remove('clicked')
  congratulation.setAttribute('hidden',true)
})
step3.addEventListener('click',function(){
  if (step3 && userName.value!=='' && email.value.endsWith("@gmail.com") && phone.value!=='') {
   containerBtn2.setAttribute('hidden',true)
   containerBtn1.setAttribute('hidden',true)
   containerBtn3.removeAttribute('hidden')
   containerBtn4.setAttribute('hidden',true)
   congratulation.setAttribute('hidden',true)
   
  }
  
  else{
    userName.style.borderColor='red'
    email.style.borderColor='red'
    phone.style.borderColor='red'
  }
 })
 step4.addEventListener('click',function(){
  // if (step4 && userName.value!=='' && email.value.endsWith("@gmail.com") && phone.value!=='')
  if (step4 && userName.value!=='' && email.value.endsWith("@gmail.com") && phone.value!=='') {
   containerBtn2.setAttribute('hidden',true)
   containerBtn1.setAttribute('hidden',true)
   containerBtn3.setAttribute('hidden',true)
   containerBtn4.removeAttribute('hidden')
   
  }
  
  else{
    userName.style.borderColor='red'
    email.style.borderColor='red'
    phone.style.borderColor='red'
  }
 })
 const goBck3=document.querySelector('.goBck3')
 goBck3.addEventListener('click',function(){
  containerBtn2.removeAttribute('hidden')
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  lastItems[2].classList.remove('clicked')
  lastItems[1].classList.add('clicked')
  
 })
 const enhanceBox=document.querySelector('.enhanceBox')
 const nextLast=document.querySelector('.next3-step')
 const online=document.getElementById('online')
 const larger=document.getElementById('larger')
 const customize=document.getElementById('customize')
 const addsAdd=document.querySelector('.adds-month')
 const addsSwitch=document.querySelector('.addsSwitch-month')
 const largerSwitch=document.querySelector('.larger-month')
 const largerAdds=document.querySelector('.largerSwitch-month')
 const customizeSwitch=document.querySelector('.customize-month')
 const customizeAdds=document.querySelector('.customizeSwitch-month')
 nextLast.addEventListener('click',function(){
  containerBtn2.setAttribute('hidden',true)
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  containerBtn4.removeAttribute('hidden')
  lastItems[2].classList.remove('clicked')
  lastItems[1].classList.remove('clicked')
  lastItems[3].classList.add('clicked')
  arcadeBtn()
  advanceBtn()
  proBtn()
  onlineBtn()
  largerBtn()
  customizeBtn()
 })
//  const emptyResult=fasle
 const result=document.querySelector('.result')
 const arcade=document.getElementById('arcade')
 const advance=document.getElementById('advance')
 let proB=document.getElementById('pro')
 const monthPrice=document.querySelector('.price-month')
 const monthends=document.querySelector('.finish-month')
 const finishPart=document.querySelector('.finish-ends')
 const navigate=document.querySelector('.navigate')
 navigate.addEventListener('click',function(){
  containerBtn2.removeAttribute('hidden')
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  containerBtn4.setAttribute('hidden',true)
  lastItems[1].classList.add('clicked')
  lastItems[3].classList.remove('clicked')

  
 })

function arcadeBtn() {
  if (arcade.classList.contains("move")) {

  
  
  if (arcade.classList.contains("move") && checkBox.checked) {
monthPrice.innerHTML='$90/yr'
monthends.innerHTML='Arcade(Yearly)'
     result.innerHTML=`+$${90}/yr`
  }
  if (arcade.classList.contains("move") && !checkBox.checked) {
         monthPrice.innerHTML='$9/mo'
    monthends.innerHTML='Arcade(Monthly)'
      result.innerHTML=`+$${9}/mo`
  }
 if(arcade.classList.contains("move") && online.classList.contains("move"))  {
   result.innerHTML=`+$${9+1}/mo`
}
 if(arcade.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
     result.innerHTML=`+$${90+10}/yr`
}
 if(arcade.classList.contains("move") && larger.classList.contains("move"))  {
  result.innerHTML=`+$${9+2}/mo`
}
 if(arcade.classList.contains("move") && larger.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+10}/yr`
}
if(arcade.classList.contains("move") && customize.classList.contains("move"))  {
  result.innerHTML=`+$${9+2}/mo`
}
if(arcade.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+10}/yr`
}
  if(arcade.classList.contains("move") && online.classList.contains("move") && larger.classList.contains("move")){
    result.innerHTML=`+$${9+1+2}/mo`
  }
  if(arcade.classList.contains("move")  && larger.classList.contains("move") && customize.classList.contains("move")){
    result.innerHTML=`+$${9+2+2}/mo`
  }
  if(arcade.classList.contains("move")  && online.classList.contains("move") && customize.classList.contains("move")){
    result.innerHTML=`+$${9+1+2}/mo`
  }
  if(arcade.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+10+20+20}/yr`
  }
 else  if(arcade.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+10+20}/yr`
  }
 else if(arcade.classList.contains("move") && larger.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+20+20}/yr`
  }
  else if(arcade.classList.contains("move") && online.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
    result.innerHTML=`+$${90+10+20}/yr`
  }
 else  if(arcade.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move")  && !checkBox.checked){
    result.innerHTML=`+$${9+1+2+2}/mo`
  }
}}

  // Advance
  function advanceBtn() {
  if (advance.classList.contains("move")) {
  // alert('hello a  dvance')
 
  if (advance.classList.contains("move") && checkBox.checked) {
    monthPrice.innerHTML='$120/yr'
    monthends.innerHTML='Advance(Yearly)'
         result.innerHTML=`+$${120}/yr`
      }
      if (advance.classList.contains("move") && !checkBox.checked) {
        monthPrice.innerHTML='$12/mo'
        monthends.innerHTML='Advance(Monthly)'
          result.innerHTML=`+$${12}/mo`
          }
          if(advance.classList.contains("move") && online.classList.contains("move"))  {
            result.innerHTML=`+$${12+1}/mo`
         }
          if(advance.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
              result.innerHTML=`+$${120+10}/yr`
         }
          if(advance.classList.contains("move") && larger.classList.contains("move"))  {
           result.innerHTML=`+$${12+2}/mo`
         }
          if(advance.classList.contains("move") && larger.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+20}/yr`
         }
         if(advance.classList.contains("move") && customize.classList.contains("move"))  {
           result.innerHTML=`+$${12+2}/mo`
         }
         if(advance.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+20}/yr`
         }
           if(advance.classList.contains("move") && online.classList.contains("move") && larger.classList.contains("move")){
             result.innerHTML=`+$${12+1+2}/mo`
           }
           if(advance.classList.contains("move")  && larger.classList.contains("move") && customize.classList.contains("move")){
             result.innerHTML=`+$${12+2+2}/mo`
           }
           if(advance.classList.contains("move")  && online.classList.contains("move") && customize.classList.contains("move")){
             result.innerHTML=`+$${12+1+2}/mo`
           }
           if(advance.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+10+20+20}/yr`
           }
          else  if(advance.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+10+20}/yr`
           }
          else if(advance.classList.contains("move") && larger.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+20+20}/yr`
           }
           else if(advance.classList.contains("move") && online.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
             result.innerHTML=`+$${120+10+20}/yr`
           }
          else  if(advance.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move")  && !checkBox.checked){
             result.innerHTML=`+$${12+1+2+2}/mo`
           }
         }

  }
  
//  Pro
  function proBtn() {
    if (proB.classList.contains("move")) {
    // alert('hello a  dvance')
   
    if (proB.classList.contains("move") && checkBox.checked) {
      monthPrice.innerHTML='$150/yr'
      monthends.innerHTML='Pro(Yearly)'
              result.innerHTML=`+$${150}/yr`
        }
        if (proB.classList.contains("move") && !checkBox.checked) {
          monthPrice.innerHTML='$15/mo'
          monthends.innerHTML='Pro(Monthly)'
                  result.innerHTML=`+$${15}/mo`
            }
            if(proB.classList.contains("move") && online.classList.contains("move"))  {
              result.innerHTML=`+$${15+1}/mo`
           }
            if(proB.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
                result.innerHTML=`+$${150+10}/yr`
           }
            if(proB.classList.contains("move") && larger.classList.contains("move"))  {
             result.innerHTML=`+$${15+2}/mo`
           }
            if(proB.classList.contains("move") && larger.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+20}/yr`
           }
           if(proB.classList.contains("move") && customize.classList.contains("move"))  {
             result.innerHTML=`+$${15+2}/mo`
           }
           if(proB.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+20}/yr`
           }
             if(proB.classList.contains("move") && online.classList.contains("move") && larger.classList.contains("move")){
               result.innerHTML=`+$${15+1+2}/mo`
             }
             if(proB.classList.contains("move")  && larger.classList.contains("move") && customize.classList.contains("move")){
               result.innerHTML=`+$${15+2+2}/mo`
             }
             if(proB.classList.contains("move")  && online.classList.contains("move") && customize.classList.contains("move")){
               result.innerHTML=`+$${15+1+2}/mo`
             }
             if(proB.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+10+20+20}/yr`
             }
            else  if(proB.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+10+20}/yr`
             }
            else if(proB.classList.contains("move") && larger.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+20+20}/yr`
             }
             else if(proB.classList.contains("move") && online.classList.contains("move") && customize.classList.contains("move") && checkBox.checked){
               result.innerHTML=`+$${150+10+20}/yr`
             }
            else  if(proB.classList.contains("move") && customize.classList.contains("move") && larger.classList.contains("move") && online.classList.contains("move")  && !checkBox.checked){
               result.innerHTML=`+$${15+1+2+2}/mo`
             }
      }

  
    }
  
  function onlineBtn(){
    if (online.classList.contains("move")) {
   
     if (online.classList.contains("move") && checkBox.checked) {
        addsAdd.innerHTML='Online Service'
       addsSwitch.innerHTML='+$10/yr'
  
    }
    else if(online.classList.contains("move")){
         addsAdd.innerHTML='Online Service'
       addsSwitch.innerHTML='+$1/mo'
       
    }}
    else{
        addsAdd.innerHTML=''
       addsSwitch.innerHTML=''
    }
      
  }
   
  function largerBtn(){
    if (larger.classList.contains("move")) {
   
      if (larger.classList.contains("move") && checkBox.checked) {
         largerAdds.innerHTML='+$20/yr'
        largerSwitch.innerHTML='Larger storage'
     }
     else if(larger.classList.contains("move")){
      largerAdds.innerHTML='+$2/mo'
      largerSwitch.innerHTML='Larger storage'
     }}
     else{
       largerAdds.innerHTML=''
        largerSwitch.innerHTML=''
     }
  }
  function customizeBtn(){
    if (customize.classList.contains("move")) {
   
      if (customize.classList.contains("move") && checkBox.checked) {
        customizeAdds.innerHTML='+$20/yr'
       customizeSwitch.innerHTML='Customizable profile'
     }
     else if(customize.classList.contains("move")){
      customizeAdds.innerHTML='+$2/mo'
      customizeSwitch.innerHTML='Customizable profile'
     }}
     else{
     customizeAdds.innerHTML=''
    customizeSwitch.innerHTML=''
     }
  }
const lastBck3=document.querySelector('.lastBck3')
lastBck3.addEventListener('click',function(){
  containerBtn2.setAttribute('hidden',true)
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.removeAttribute('hidden')
  containerBtn4.setAttribute('hidden',true)
  
  lastItems[3].classList.remove("clicked")
  lastItems[2].classList.add("clicked")
})
const congrat=document.querySelector('.last-step')
const congratulation=document.querySelector('.congratulation')
congrat.addEventListener('click',function(){
  containerBtn2.setAttribute('hidden',true)
  containerBtn1.setAttribute('hidden',true)
  containerBtn3.setAttribute('hidden',true)
  containerBtn4.setAttribute('hidden',true)
  congratulation.removeAttribute('hidden')
   if (congratulation) {
 let newB= setInterval(() => {
      window.location.href='index.html'
      clearInterval(newB)
  },900000);
   }
})