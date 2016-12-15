var openItem = function(i){
    var link = $('.item').find('.title a')[i].href;
    window.open(link, '_self');  
}

var doStep2 = function(){
  console.log('doing step 2')
  var i=5;
  $('html,body').animate({
    scrollTop: $('#mainsrp-spucombo').offset().top + Math.ceil((i-3)/4)*345 
  }, 'slow');
  setTimeout(function(){
    var link = $('.item').find('.title a')[i].href;
    window.open(link, '_self');
  },2000)
  // setTimeout(openItem.bind(null,i), 2000)  
}

var scrollDown = function(){
  var scrollSpeed = $(document).height()/2; 
  $('html, body').animate({
    scrollTop: jQuery('.footer-bd').offset().top
  }, 8000);
}

var scrollToTop = function(){
  jQuery(window).scrollTop(jQuery("body").offset().top) 
}

var clickRecomItem = function(){
  var scrollSpeed = $(document).height()/2; 
  console.log('run case 1:recommendation items');    
  $('html,body').animate({
    scrollTop: $('.related-items').offset().top-100
  }, 2000);
  setTimeout(function(){
    window.open($('.related-items').find('.desc a')[0].href,'_self')
  },2000) 
}

var searchAgain = function(){
  setTimeout(function(){
    $('input.search-combobox-input').val('hello kitty');
  },3000);

  setTimeout(function(){    
    $('form[action*="/search"] [type=submit]')[0].click();       
  },5000);
}

$( document ).ready(function() {

  chrome.storage.local.get('doStartAutomation',function(items){
    // console.log('local.get', items.doStartAutomation)
    if(!items.doStartAutomation){
      return;
    }

    // step 2
    if(window.location.href.indexOf('https://s.taobao.com') >= 0){
      doStep2();
      return;
    }

    // step 3 taobao
    if(window.location.href.indexOf("https://item.taobao.com") >= 0){
      console.log('doing step3')
      
      setTimeout(function(){
        scrollDown();
      },2000); 

      // if(Math.random() > 0.5){

      setTimeout(function(){
        console.log("No. of related-items：", $('.related-items').length);          
        if($('.related-items').length){ 
        //case 1 recommendation item
          clickRecomItem();
        }else{
        //case 2 search again if no recommendation item
          searchAgain();
        }
      },12000); 
      // }else{
      //   researchAgain();
      // }
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
