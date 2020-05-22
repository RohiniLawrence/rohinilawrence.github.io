let tablink;
function showProject(event, language) {
    var i, langContainer, tablinks;
    // langContainer = document.getElementsByClassName("langcontainer");
    // for (i = 0; i < langContainer.length; i++) {
    //     langContainer[i].style.display = "none";
    // }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // document.getElementById(language).style.display = "block";
   
    $('html, body').animate({
        scrollTop: $("#"+language).offset().top-100
    }, 700);

    event.currentTarget.className += " active";
    AOS.refreshHard();

}

//   $(function(){




// })


//     // console.log("and",androidOffset);
//     // console.log("cpp",cppOffset);
//   })


$(document).ready(function () {

    window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset;

        let htmlOffset = $('#html').offset().top;
        let androidOffset = $('#android').offset().top;
        let cppOffset = $('#cpp').offset().top;
        let reactOffset = $('#react').offset().top;
        let jsOffset = $('#js').offset().top;

        var active;
        if (scroll > htmlOffset-300) {
            active = "Html";
        }
        if (scroll > androidOffset-300) {

            active = "Android";
        }
        if (scroll > cppOffset-300) {
            active = "Cpp";

        }
        if (scroll > reactOffset-300) {

            active = "React";
        }
        if (scroll > jsOffset-300) {
            active = "Js";

        }
if(active!=null){
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.querySelector("#btn"+active).className += " active";
    }
        // console.log( $("#btn"+active));

    })
    const parallax = document.querySelector(".landing-text h1");
    const mountains = document.querySelector("ice-mountains");


    // window.addEventListener("scroll", function()
    // {
    //     let offset = window.pageYOffset;
    //     parallax.style.backgroundPositionY = offset * 200 +"px";
    //     // mountains.style.backgroundPositionY = offset  * 10000 +"px";

    // })


    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');

        $('.top-nav').toggleClass('open');

    });
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });



    $('#up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1300,
        once: true
    });




});
