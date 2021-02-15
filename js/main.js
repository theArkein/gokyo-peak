console.log("working")

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

