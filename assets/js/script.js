console.log("Connected Successfully.");

const dropDownBtn = document.querySelector('.slideMenu');
const dropdownContent = document.querySelector('.dropdownContent');


dropDownBtn.addEventListener('click', function(){
  if(dropdownContent.style.opacity == 1 && dropdownContent.style.zIndex == 1){
        dropdownContent.style.zIndex = -1;
        dropdownContent.style.opacity = 0;
        dropdownContent.style.display = 'none';
        dropdownContent.style.transform = 'translateY(0)';
        dropdownContent.style.userSelect = 'none';
  } else{
        dropdownContent.style.zIndex = 1;
        dropdownContent.style.opacity = 1;
        dropdownContent.style.display = 'block';
        dropdownContent.style.transform = 'translateY(10px)';
        dropdownContent.style.userSelect = 'auto';
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('click', function(event) {
  const isClickInside = dropDownBtn.contains(event.target) || dropdownContent.contains(event.target);
  if (!isClickInside) {
        dropdownContent.style.zIndex = -1;
        dropdownContent.style.opacity = 0;
        dropdownContent.style.display = 'none';
        dropdownContent.style.transform = 'translateY(0)';
        dropdownContent.style.userSelect = 'none';
  }
});