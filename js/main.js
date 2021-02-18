const menu = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')

hamburger.onclick = ()=>{
     menu.classList.toggle('hide')
}

const showForm = (name)=>{
     const forms = document.querySelectorAll('.bookingForms>div')
     const newForm = document.querySelector('.'+name)
     forms.forEach(element => {
          element.classList.remove('show')
     });
     newForm.classList.add('show')
}

function showTab (event,name){
     const tab = event.target
     document.querySelectorAll('.tab').forEach(item=>{
          item.classList.remove('active')
     })
     tab.classList.add('active')
     const tabs = document.querySelectorAll('.tabContent>div')
     const newTab = document.querySelector('.'+name)
     tabs.forEach(element => {
          element.classList.remove('show')
     });
     newTab.classList.add('show')
}

 function showFormStep (event,name){
          let processStep = event.currentTarget;
          document.querySelectorAll('.process-step').forEach(item=>{
             item.classList.remove('active')
         })
          processStep.classList.add('active')
         document.querySelectorAll('.form-steps').forEach(item=>{
             item.classList.remove('active')
         })
         const formSteps = document.querySelectorAll('.form-steps .form-step')
         const showStep = document.querySelector('.'+name)
         formSteps.forEach(element => {
             element.classList.remove('show')
         });
             showStep.classList.add('show')

     }

function showPopUp(name){
     let popUp = document.querySelector(`.pop-up.${name}`)
     document.querySelectorAll(`.pop-up`).forEach(element=>{
          element.classList.remove('show')

     })
     popUp.classList.add('show')
}

const hidePopUp = (name)=>{
     let popUp = document.querySelector(`.pop-up.${name}`)
     popUp.classList.remove('show')
}

const uploadDocument = ()=>{
     const selectedDocument = document.getElementById("document").value;
     const documentForm = document.querySelectorAll('.upload-document')
     
     if(selectedDocument=="none"){
          documentForm[0].classList.remove('show')
          documentForm[1].classList.remove('show')
     }
     if(selectedDocument=="citizenship"){
          documentForm[0].classList.add('show')
          documentForm[1].classList.remove('show')
     }
     if(selectedDocument=="passport"){
          documentForm[1].classList.add('show')
          documentForm[0].classList.remove('show')
     }
}
uploadDocument()
