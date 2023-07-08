function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 560) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

function switchForm() {
  if (document.getElementID('unit_info_base')) {

    if (document.getElementID('unit_info_base').style.display == "block") {
      document.getElementID('unit_info_base').style.display = "none";
      document.getElementID('unit_info_transform').style.display = "block";
    } else {
      document.getElementID('unit_info_base').style.display = "block";
      document.getElementID('unit_info_transform').style.display = "none";
    }
  }
}

function toggleStrikeText() {
  var strikeLevel = document.getElementById("strikeLevel");
  var button = document.getElementById("showCardLevel");
  if (strikeLevel.style.display === "none") {
    strikeLevel.style.display = "block";
    button.textContent = "Hide Level";
  } else {
    strikeLevel.style.display = "none";
    button.textContent = "Show Level";
  }
}

function toggleBlastText() {
  var blastLevel = document.getElementById("blastLevel");
  var button = document.getElementById("showCardLevel");
  if (blastLevel.style.display === "none") {
    blastLevel.style.display = "block";
    button.textContent = "Hide Level";
  } else {
   blastLevel.style.display = "none";
    button.textContent = "Show Level";
  }
}

function toggleBlueText() {
  var blueLevel = document.getElementById("blueLevel");
  var button = document.getElementById("showCardLevel");
  if (blueLevel.style.display === "none") {
    blueLevel.style.display = "block";
    button.textContent = "Hide Level";
  } else {
   blueLevel.style.display = "none";
    button.textContent = "Show Level";
  }
}

function toggleGreenText() {
  var greenLevel = document.getElementById("greenLevel");
  var button = document.getElementById("showCardLevel");
  if (greenLevel.style.display === "none") {
    greenLevel.style.display = "block";
    button.textContent = "Hide Level";
  } else {
   greenLevel.style.display = "none";
    button.textContent = "Show Level";
  }
}

function toggleUltText() {
  var ultLevel = document.getElementById("ultLevel");
  var button = document.getElementById("showCardLevel");
  if (ultLevel.style.display === "none") {
    ultLevel.style.display = "block";
    button.textContent = "Hide Level";
  } else {
   ultLevel.style.display = "none";
    button.textContent = "Show Level";
  }
}

function toggleZAbility(zIndex) {
  var zAbilities = document.querySelectorAll(".zAbility");
  var buttons = document.querySelectorAll(".za_button");
  
  zAbilities.forEach(function(zAbility, index) {
    if (index === zIndex - 1) {
      zAbility.style.display = "block";
      buttons[index].classList.add("active");
    } else {
      zAbility.style.display = "none";
      buttons[index].classList.remove("active");
    }
  });
}

function toggleZKAbility(zIndex) {
  var zkAbilities = document.querySelectorAll(".zkAbility");
  var buttons = document.querySelectorAll(".zka_button");
  
  zkAbilities.forEach(function(zkAbility, index) {
    if (index === zIndex - 1) {
      zkAbility.style.display = "block";
      buttons[index].classList.add("active");
    } else {
      zkAbility.style.display = "none";
      buttons[index].classList.remove("active");
    }
  });
}
