const menu = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')

hamburger.onclick = ()=>{
     menu.classList.toggle('hide')
}

const showForm = (tab,name)=>{
     const forms = document.querySelectorAll('.bookingForms>div')
     const newForm = document.querySelector('.'+name)
     document.querySelectorAll('.item').forEach(item=>{
          item.classList.remove('active')
     })
     document.querySelectorAll('.item')[tab].classList.add('active')
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
     const selectedDocument = document.getElementById("reference_doc_type").value;
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

// Signin Signup

     $('.signin form').submit((e)=>{
          e.preventDefault()
          showPopUp('spinner')
          let user = new FormData($('.signin form')[0]);
          const url = `http://18.206.147.162/api/v1/api-auth/login/`
          fetch(url, {
              method: 'POST',
              body: user,
              contentType: 'multipart/form-data'
          }).then(async (response)=>{
               let result = await response.json();
                showPopUp('signin')
               localStorage.setItem('gokyo_key', result.key);
               if(response.status == 200){
                    fetch(`http://18.206.147.162/api/v1/api-auth/user/`, {
                         method: 'GET',
                         headers: {
                              'Authorization': `Token ${result.key}`
                         }
                    }).then(res=>res.json()).then(user=>{
                         console.log(user)
                         localStorage.setItem('gokyo_user_id', user.pk);
                         window.location.href = `./profile.html?id=${user.pk}`
                    })
               } else{
                    $('.signin .message.error')[0].innerHTML="Please Check Your Ceredentials"
                    $('.signin .message.error').show()
                    setTimeout(()=>{
                         $('.sign .message.error').hide()
                    },3000)
                    console.log(result)
               }
          })
     })

     $('.signup form').submit((e)=>{
          e.preventDefault()
          showPopUp('spinner')
          let formData = new FormData($('.signup form')[0]);
          const url = `http://18.206.147.162/api/v1/users/`
          fetch(url, {
              method: 'POST',
              body: formData,
              contentType: 'multipart/form-data'
          }).then(async (response)=>{
               let result = await response.json();
               showPopUp('signup')
                hidePopUp('spinner')
               console.log(result)     

               if(response.status == 201){
                  showPopUp('registered')
               } else{
                 $('.signup .message.error')[0].innerHTML="Invalid Fields. Check Again."
                  $('.signup .message.error').show()
                  setTimeout(()=>{
                       $('.signup .message.error').hide()
                  },3000)
               }
          })
     })