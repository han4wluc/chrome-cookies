//random keyword
// function getvalues(){
//   var keywords=['hello kitty','非洲']
//   var index = Math.floor(keywords.length*Math.random());
//   var keyword = keywords[index];
//   console.log(keyword);
//   return keyword;
// }
// var keywordCode = getvalues();
// var keyword = encodeURI(keywordCode);


//for updated URL
var getDate = function(){
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate(); 
  var date = d.getFullYear() + '' +(month<10 ? '0' : '') + month + '' +(day<10 ? '0' : '') + day;
  return date;
};

var openItem = function(i){
    var link = $('.item').find('.title a')[i].href;
    window.open(link, '_self');  
}

var doStep2 = function(){
  console.log('doing step 2')
  var i= Math.floor(35*Math.random()); //35
  console.log('product No.'+i);
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
  var scrollSpeed = jQuery(document).height()/2; 
  jQuery('html,body').animate({ 
    scrollTop: 60000 }, scrollSpeed);
}

var scrollDownTM = function(){
  console.log('scrollDown');
  var scrollSpeed = jQuery(document).height()/2; 
  jQuery('html,body').animate({ 
    scrollTop: 60000 }, scrollSpeed);
}

var scrollToTop = function(){
  console.log('scrollToTop');
  jQuery(window).scrollTop(0); 
}

var scrollToTopTM = function(){
  console.log('scrollToTop');
  jQuery(window).scrollTop(0);
}

var clickRecomItem = function(){
  console.log('clickRecomItem taobao');
  var i= Math.floor(3*Math.random());
  $('html,body').animate({
    scrollTop: $('.related-items').offset().top-100
  }, 2000);
  setTimeout(function(){
    window.open($('.related-items').find('.desc a')[i].href,'_self')
  },4000); 
}

var clickRecomItemTM = function(){
  console.log('clickRecomItem tmall'); 
  jQuery('html,body').animate({
    scrollTop: jQuery('#J_TabRecommends').offset().top
  },2000);

  setTimeout(function(){
    window.open(jQuery('#J_TabRecommends').find('li a')[0].href,'_self')
  },4000) 
}

var searchAgain = function(keyword){
  console.log('searchAgain');
  setTimeout(function(){
    scrollToTop();
    $('input.search-combobox-input').val(keyword);
  },3000);

  setTimeout(function(){    
    $('form[action*="/search"] [type=submit]')[0].click();       
  },5000);
}

var searchAgainTM = function(keyword){
  console.log('searchAgain');
  setTimeout(function(){
    scrollToTopTM();
    var date = getDate();
    jQuery('input#mq').val(keyword);
    var link = 'https://s.taobao.com/search?q='+encodeURI(keyword)+'&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_'+date+'&ie=utf8';
    window.open(link, '_self');
  },3000);

  // setTimeout(function(){    
  //   $('form[action*="/search"] [type=submit]')[0].click();       
  // },5000);
}


$( document ).ready(function() {

  chrome.storage.local.get(['keywords', 'doStartAutomation'],function(items){
    // console.log('local.get', items.doStartAutomation)
    if(!items.doStartAutomation || !items.keywords){
      console.log('itesm', items)
      console.log('returned', items.doStartAutomation, items.keywords)
      return;
    }
    var keywords = items.keywords;
    var index = Math.floor(keywords.length*Math.random());
    var keyword = keywords[index]; 
       

    // step 2
    if(window.location.href.indexOf('https://s.taobao.com') >= 0){
      doStep2();
      return;
    }

    // step 3 taobao
    if(window.location.href.indexOf("https://item.taobao.com") >= 0){
      console.log('doing step3 taobao')
      
      setTimeout(function(){
        scrollDown();
      },2000); 

      if(Math.random() > 0.5){
        setTimeout(function(){
          console.log("No. of related-items：", $('.related-items').length);          
          if($('.related-items').length){ 
          //case 1 recommendation item
            clickRecomItem();
          }else{
          //case 2 search again if no recommendation item
            searchAgain(keyword);
          }
        },12000); 
      }else{
        setTimeout(function(){
          searchAgain(keyword);
        },12000);
      }
      return;
    }


    //step 3 tmall
    if(window.location.href.indexOf("https://detail.tmall.com") >= 0){
      console.log("doing step 3 tmall");
    
// Case 1
// Scroll down to recommendation item(random)
// Open the window of recommendation item   
// Repeat this step 

      setTimeout(function(){
          scrollDownTM();
      },2000); 

    //if(Math.random() > 0.5){
      setTimeout(function(){
        console.log("if related-items exist：", $('#J_TabRecommends.J_DetailSection').length);          
        //if($('#J_TabRecommends.J_DetailSection').length){ 
        ////case 1 recommendation item
          // clickRecomItemTM();
        //}else{
        ////case 2 search again if no recommendation item
           searchAgainTM(keyword);
        // }
      },3000); 
    // }else{
    //   setTimeout(function(){
    //     searchAgain();
    //   },12000);
    // }





      return;
    }


  });
 
});
