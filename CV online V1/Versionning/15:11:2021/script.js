
$(document).ready(function(){

// Project Box --------
// TopArrow 

$(".containerproup i").click(function(){
  console.log('up');
  $(".containerprodown").css({
    "height":"300px",
    "transition": "0.2s ease-in-out",
    "visibility":"visible"
  })
  $(".containerproup .toparrow i").css({
    "display":"none"
  })
  $(".containerprodown .toparrow i").css({
    "display":"block"
  })
})
$(".containerprodown i").click(function(){
  console.log('down');
  $(".containerprodown").css({
    "height":"0px",
    "transition": "0.2s ease-in-out",
    "visibility":"hidden"
  })
  $(".containerproup .toparrow i").css({
    "display":"block"
  })
  $(".containerprodown .toparrow i").css({
    "display":"none"
  })
})



// ContactBox ----------

$(".contactme").click(function(){
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