function showProject(event, language) {
    var i, langContainer, tablinks;
    langContainer = document.getElementsByClassName("langcontainer");
    for (i = 0; i < langContainer.length; i++) {
      langContainer[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(language).style.display = "block";

   
    event.currentTarget.className += " active";
    AOS.refreshHard(); 
   
  }

  

  $(document).ready(function(){

    // const parallax= document.querySelector(".landing-text ");
    // const mountains= document.querySelector("ice-mountains");

   
    // window.addEventListener("scroll", function()
    // {
    //     let offset = window.pageYOffset;
    //     parallax.style.backgroundPositionY = offset *1+"px";
    //     mountains.style.backgroundPositionY = offset  * 10000 +"px";

    // })
  
    
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        
        $('.top-nav').toggleClass('open');
      
    });
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function(){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100 
        }, 2000);
    });
    


    $('#up').on('click', function(){
        $('html,body').animate({
            scrollTop: 0},2000);
    });

    AOS.init({
        easing:'ease',
        duration:1300,
         once:true
    });

    
   
  
});
