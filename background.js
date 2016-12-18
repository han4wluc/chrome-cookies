var doStep2 = function(){
  console.log('doing step 2');
  var i=0;
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
  console.log('scrollDown');
  var scrollSpeed = $(document).height()/2; 
  $('html, body').animate({
    scrollTop: jQuery('.footer-bd').offset().top
  }, 8000);
}

var scrollDownTM = function(){
  console.log('scrollDowntm');
  jQuery('html, body').animate({
    // scrollTop: jQuery('div#tmall-copyright').offset().top
     scrollTop: jQuery('document').height().offset().top
  }, 8000);
}

var scrollToTop = function(){
  console.log('scrollToTop');
  jQuery(window).scrollTop(jQuery("body").offset().top) 
}

var clickRecomItem = function(){
  console.log('clickRecomItem');
  var scrollSpeed = $(document).height()/2; 
  $('html,body').animate({
    scrollTop: $('.related-items').offset().top-100
  }, 2000);
  setTimeout(function(){
    window.open($('.related-items').find('.desc a')[0].href,'_self')
  },2000) 
}


// var clickRecomItemtm = function(){
//   console.log('clickRecomItem');
//   jQuery('html,body').animate({
//     scrollTop: jQuery('div#J_Tjwrap').offset().top-100
//   }, 2000);
//   setTimeout(function(){
//     window.open(jQuery('a.item-name')[0].href,'_self')
//   },2000) 
// }


var searchAgain = function(randomKeyword){
  console.log('searchAgain');
  setTimeout(function(){
    scrollToTop();
    $('input.search-combobox-input').val(randomKeyword);
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

    var keywords = items.keywords;

    var randomKeyword = keywords[Math.floor(keywords.length*Math.random())];

    // // step 2
    // if(window.location.href.indexOf('https://s.taobao.com') >= 0){
    //   doStep2();
    //   return;
    // }

    // // step 3 taobao
    // if(window.location.href.indexOf("https://item.taobao.com") >= 0){
    //   console.log('doing step3 taobao')
      
    //   setTimeout(function(){
    //     scrollDown();
    //   },2000); 

    //   if(Math.random() > 0.5){
    //     setTimeout(function(){
    //       console.log("No. of related-items：", $('.related-items').length);          
    //       if($('.related-items').length){ 
    //       //case 1 recommendation item
    //         clickRecomItem();
    //       }else{
    //       //case 2 search again if no recommendation item
    //         searchAgain(randomKeyword);
    //       }
    //     },12000); 
    //   }else{
    //     setTimeout(function(){
    //       searchAgain(randomKeyword);
    //     },12000);
    //   }
    //   return;
    // }


    //step 3 tmall
    if(window.location.href.indexOf("https://detail.tmall.com") >= 0){
      console.log("doing step 3 tmall");
    // Scroll down to recommendation item(random)
    // Open the window of recommendation item   
    // Repeat this step 
    setTimeout(function(){
      scrollDownTM();
      console.log('scroll down finish');
    },10000); 

    // if(Math.random() > 0.5){
    setTimeout(function(){   
    //       if($('.related-items').length){ 
    //       //case 1 recommendation item
    //  clickRecomItemtm();
     console.log('scroll down finish');
    //       }else{
    //       //case 2 search again if no recommendation item
    //         searchAgain();
    //       }
    },15000); 
    //   }else{
    //     setTimeout(function(){
    //       searchAgain();
    //     },12000);
    //   }
      return;
    }
     
  });
});
