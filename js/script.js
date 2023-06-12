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
  rootMargin: '50px',
})

elHidden.forEach(el => {
  observer.observe(el)
})


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