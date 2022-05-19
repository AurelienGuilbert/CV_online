
$(document).ready(function(){


// Project Box --------
// TopArrow 

$(".folder").click(function(){
  $(".containerprodown").css({
    "margin-top":"0px",
    "transition": "0.5s ease-in-out",
  });
  
  $(window).scrollTop(0);

})
$("#closecross").click(function(){
  $(".containerprodown").css({
    "margin-top":"-700px",
    "transition": "0.5s ease-in-out",
  });
  $(window).scrollTop(0);

})

// ContactBox ----------

$(".contactme").click(function(){
  $(".containercontact").css({
    "left":"50%",
    "transition": "0.3s ease-in-out"
  })
})
$(".mail").click(function(){
  $(".containercontact").css({
    "left":"50%",
    "transition": "0.3s ease-in-out"
  })
})
$(".telephone").click(function(){
  $(".containercontact").css({
    "left":"50%",
    "transition": "0.3s ease-in-out"
  })
})
$(".containercontact").click(function(){
  $(".containercontact").css({
    "left":"-50%",
    "transition": "0.3s ease-in-out"
  })
})



// ASIDE hover ---------

  // menu

  $(".aside .menu ").mouseenter(function(){
    $(this).find("a").css({
      "color": "#FF6F61",
      "transition": "0.2s ease-in-out"
    });
    $(this).find("i").css({
      "color": "#FF6F61",
      "transition": "0.2s ease-in-out"
    });
  })

  $(".aside .menu ").mouseleave(function(){
    $(this).find("a").css({
      "color": "white",
      "transition": "0.2s ease-in-out"
    });
    $(this).find("i").css({
      "color": "white",
      "transition": "0.2s ease-in-out"
    });
  })

  // reseaux

  $(".social").mouseenter(function(){
    $(this).find("i").css({
      "color": "#FF6F61",
    })
    $(this).css({
      "background": "#ffe8e6",
    })
  })
  $(".social").mouseleave(function(){
    $(this).find("i").css({
      "color": "white",
    })
    $(this).css({
      "background": "#FF6F61",
    })
  })
  

  

 

 














  // END

})