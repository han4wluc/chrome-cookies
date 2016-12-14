$( document ).ready(function() {

  chrome.storage.local.get('doStartAutomation',function(items){
    // console.log('local.get', items.doStartAutomation)
    if(!items.doStartAutomation){
      return;
    }

    // step 2
    if(window.location.href.indexOf('https://s.taobao.com') >= 0){
      console.log('doing step 2')
      $('html,body').animate({ scrollTop: 500 }, 'slow');
      setTimeout(function(){
        var link = $('.item').find('.title a')[6].href;
        window.open(link, '_self');
      },2000)
      return;
    }

    // step 3 taobao
    if(window.location.href.indexOf("https://item.taobao.com") >= 0){
      console.log('doing step3')
      var scrollSpeed = $(document).height()/2; 
      if($('.related-items').length){     
          jQuery('html,body').animate({
          scrollTop: jQuery('.related-items').offset().top-100}, scrollSpeed);
      }else{
        $('html, body').animate({
          scrollTop: $(document).height()
        }, scrollSpeed);
      }
      return;
    }

    //step 3 tmall
    if(window.location.href.indexOf("https://detail.tmall.com") >= 0){
      console.log("doing step 3 tmall");
      window.close();
      return
    }


  });


 
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


