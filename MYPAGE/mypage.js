function setNew(menu) {
  var pages = document.querySelectorAll('.container > div');
  var sideBarItems = document.querySelectorAll('.side_bar > ul > li');

  pages.forEach(function(page) {
      page.style.display = 'none';
  });

  sideBarItems.forEach(function(item) {
      item.classList.remove('on');
  });

  document.getElementById(menu).style.display = 'block';
  document.querySelector('.side_bar > ul > li.' + menu).classList.add('on');

  // Store the active menu in localStorage
  localStorage.setItem('activeMenu', menu);
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the active menu from localStorage
    var activeMenu = localStorage.getItem('activeMenu');
    
    // Set the active menu if it exists in localStorage, otherwise default to 'mystudy'
    setNew(activeMenu ? activeMenu : 'mystudy');
});
