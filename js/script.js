// navbar

const menuBtn = document.getElementById('menu')
const navbar = document.querySelector('.navbar')

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-close')
  navbar.classList.toggle('active')
}

// intersection observer
const elHidden = document.querySelectorAll('.hidden')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('hidden-left', entry.isIntersecting)
    entry.target.classList.toggle('hidden-right', entry.isIntersecting)
  }) 
}, {
  threshold: .8,
})

elHidden.forEach(el => {
  observer.observe(el)
})

// email forms
const sendEmail = async (event) => {
  const templateParams = {
    name: event.target.elements.name.value,
    email: event.target.elements.email.value,
    message: event.target.elements.message.value
  }

  const userId = 'vK_5ongzvUVkkbnHx'
  const serviceId = 'service_9bddbcc'
  const templateId = 'template_70htpa9'

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    template_params: templateParams
  }

  try{
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    alert('Email success!!!')
  }catch(error){
    alert('Email failed!!!')
    console.error(error)
  } 

  //   alert('Success!', response.status, response.text)
  // })
  // .catch((error) => {
  //   alert('Failed...', error)
  // })
}

const formsEmail = document.forms['form-email']
formsEmail.onsubmit = (event) => {
  event.preventDefault()

  sendEmail(event)
}


window.onscroll = () => {
  // sticky header
  const header = document.querySelector('.header')
  header.classList.toggle('sticky', window.scrollY > 50)

  // scroll spy
  const section = document.querySelectorAll('section')
  const navbarList = document.querySelectorAll('.navbar a')
  section.forEach((el)=> {
    const scrollY = window.scrollY
    const offsetTop = el.offsetTop - 50
    const height = el.offsetHeight
    const id = el.getAttribute('id')

    if(scrollY >= offsetTop && scrollY <= offsetTop + height){
      navbarList.forEach((list) => {
        list.classList.remove('active')
      })
      document.querySelector('.navbar a[href*='+id+']').classList.add('active')
    }
  })
  
}