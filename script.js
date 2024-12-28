const scrollHeader =()=>{
    const header = document.getElementById("header");
 
    this.scrollY>=50? header.classList.add("scroll-header")
    :header.classList.remove("scroll-header");

}
window.addEventListener('scroll',scrollHeader);

let swiperProducts = new Swiper(".products__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPreview:'auto',
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

///when u need to select evey page u are in nav bar 


const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight; // Changed variable name from 'sectionsHeight' to 'sectionHeight'
    const sectionTop = current.offsetTop - 58; // Changed variable name from 'sectionsTop' to 'sectionTop'
    const sectionId = current.getAttribute('id'); // Changed variable name from 'sectionsId' to 'sectionId'
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); // Changed variable name from 'sectionsClass' to 'sectionClass'
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener('scroll', scrollActive);


//  scroll up section
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)







/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-buttom')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//storage
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


//stored itemka ayey check gareynaysaa
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selecte-theme', getCurrentTheme())
  localStorage.setItem('selecte-icon', getCurrentIcon())
})