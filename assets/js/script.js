console.log("Connected Successfully.");

const slideMenu = document.querySelector('.slideMenu');
const dropdownContent = document.querySelector('.dropdownContent');

slideMenu.addEventListener('click', () => {

    if(dropdownContent.style.visibility == 'visible' && dropdownContent.style.opacity == 1){
      slideMenu.style
        dropdownContent.style.visibility = 'hidden';
        dropdownContent.style.opacity = 0;
        dropdownContent.style.transform = 'translateX(100%)';
        dropdownContent.style.userSelect = 'none';
        slideMenu.style.transform = 'rotate(0deg)';
    } else{
        dropdownContent.style.visibility = 'visible';
        dropdownContent.style.opacity = 1;
        dropdownContent.style.transform = 'translateX(0)';
        dropdownContent.style.userSelect = 'auto';
        slideMenu.style.transform = 'rotate(180deg)';
    }
});

  document.addEventListener('click', (event) => {
    if (!slideMenu.contains(event.target) && !dropdownContent.contains(event.target)) {
        slideMenu.classList.remove("active");
        dropdownContent.style.visibility = 'hidden';
        dropdownContent.style.opacity = 0;
        dropdownContent.style.transform = 'translateX(100%)';
        dropdownContent.style.userSelect = 'none';
        slideMenu.style.transform = 'rotate(0deg)';
    }
  });


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}