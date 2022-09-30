$(function() {
    $(document).scroll(function () {
      var $nav = $(".nav");
      var $navlink = $(".navLink");
      $nav.toggleClass("navScrolled", $(this).scrollTop() > $nav.height());
      $navlink.toggleClass("changed", $(this).scrollTop() > $nav.height());
    });
  
    $(document).ready(function () {
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
  
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            20,
            function () {
              window.location.hash = hash;
            }
          );
        }
      });
    });
  });

  $(function() {
    var navMenu = document.getElementById("navMenu");
    var navItems = navMenu.getElementsByClassName("navLink");
  
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
  
        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
  
        // Add the active class to the current/clicked button
        this.className += " active";
      });
    }
  });

  // change active link on scroll
$(function() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            // console.log(sectionId);
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('nav ul li a[href*="' + "#" + sectionId + '"]')
                .classList.add('active');
            } else {
                document.querySelector('nav ul li a[href*="' + "#" + sectionId + '"]')
                .classList.remove('active');
            }
        })
    })
});