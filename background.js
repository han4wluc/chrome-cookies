$( document ).ready(function() {
  // var lastname = localStorage.getItem("keyword");
  // console.log('ready', lastname);
  // if(!lastname){
  //   return;
  // }

  // localStorage.removeItem("keyword");
  // if(!window.doStartAutomation){
  //   return;
  // }

  //step 3 taobao
  if(window.doStartStep3 == 'yes'){

    setTimeout(function(){
      var scrollSpeed = $(document).height()/2; 
      if($('.related-items').length){     
          jQuery('html,body').animate({
          scrollTop: jQuery('.related-items').offset().top-100}, scrollSpeed);
      }else{
        $('html, body').animate({
          scrollTop: $(document).height()
        }, scrollSpeed);
      }
      // window.close();
    },5000)
        
    return
  }

  //step 3 tmall
  if(window.location.href.indexOf("https://detail.tmall.com") >= 0){
    console.log("tmall");
    window.close();
    return
  }


    //step 2
  console.log("startstep2", sessionStorage.getItem('doStartStep2'))
  if(sessionStorage.getItem('doStartStep2') == "yes"){

    sessionStorage.removeItem('doStartStep2')
    $('html,body').animate({ scrollTop: 500 }, 'slow');

    setTimeout(function(){
      var link = $('.item').find('.title a')[5].href;
      var w1 = window.open(link);
      w1.doStartStep3='yes';
    },2000)
  }


 
  // w1.doStartAutomation=true;  

  // var scrollSpeed = $(document).height()/2; 
  // if($('.related-items').length){     
  //     jQuery('html,body').animate({
  //     scrollTop: jQuery('.related-items').offset().top-100}, scrollSpeed);
  // }else{
  //   $('html, body').animate({
  //     scrollTop: $(document).height()
  //   }, scrollSpeed);
  // }
      
  // window.close(link);
 
});



  // if(window.location.href.indexOf("https://detail.tmall.com") >= 0){
  //   console.log("tmall");
  //   window.close();
  // }
  // if(sessionStorage.getItem("doStartAutomation") == "yes"){
  //   console.log("start automation");
  //   setTimeout(function(){
  //     console.log("success")
  //   }, 5000)
  // }   


 

 //  var pathname = window.location.pathname
 //  console.log(pathname)

 //  if(pathname.indexOf("&close=true") >= 0){

 //  }


