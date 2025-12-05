console.log("Connected Successfully.");

const dropDownBtn = document.querySelector('.dropBtn');
const dropdownContent = document.querySelector('.dropdownContent');


dropDownBtn.addEventListener('change', function(){
  if(dropdownContent.style.opacity == 1 && dropdownContent.style.zIndex == 1){
        dropdownContent.style.zIndex = -1;
        dropdownContent.style.opacity = 0;
        dropdownContent.style.transform = 'translateY(0)';
        dropdownContent.style.userSelect = 'none';
  } else{
        dropdownContent.style.zIndex = 1;
        dropdownContent.style.opacity = 1;
        dropdownContent.style.transform = 'translateY(10px)';
        dropdownContent.style.userSelect = 'auto';
  }
});


var myButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.opacity = "1";
  } else {
    myButton.style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  document.addEventListener('click', (event) => {
    if (!dropDownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.zIndex = -1;
        dropdownContent.style.opacity = 0;
        dropdownContent.style.transform = 'translateY(0)';
        dropdownContent.style.userSelect = 'none';
      dropDownBtn.checked = false;
    }
  });