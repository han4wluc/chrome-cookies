
document.getElementById("activate-automation").addEventListener('click', function() {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {

      chrome.storage.local.set({
        "doStartAutomation": true,
      }, function(){
        console.log('Storage successful 1')
      });

      // step 1 
      console.log('doing step 1')
      $('input#q').val('Hello Kitty');
      $('form[action*="/search"] [type=submit]').click();


    }

       // setTimeout(function(){
       //    w1.close();
       //  }, 6000);
      // var scrollDown = function(){
      //   $('html,body').animate({ scrollTop: 500 }, 'slow');
      // }

      // var openPageAndClose= function(){
      //   var link = $('.item').find('.title a').attr('href');      
      //   console.log("new page");
  
     

      // setTimeout(function(){
      //   window.open($('.related-items').find('.desc a')[0].href);
      // },2000); 

      // console.log("button test");

      // //scroll down,open product page and close  it
      // sessionStorage.setItem("doStartAutomatioin","yes");
      // scrollDown();
      // setTimeout(openPageAndClose,2000);
      
    

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});

document.getElementById("stop-automation").addEventListener('click', function() {

    var modifyDOM = function(){
      chrome.storage.local.set({
        "doStartAutomation": false,
      }, function(){
        console.log('Storage successful 2')
      });
    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });

})


    // localStorage.setItem("keyword", "Hello Kitty");         

    //       setTimeout(function(){
    //       $('input#q').val('Hello Kitty')
    //       setTimeout(function(){
    //         $('form[action*="/search"] [type=submit]').click()
    //       },1000)
    //       },1000)

    //       //scoll to the product position  
    //       setTimeout(function(){
    //         $('html,body').animate({ scrollTop: 500 }, 'slow')
    //         console.log("scoll to the poduct position")
    //       },3000)

    //       //click the first product 
    //       setTimeout(function(){
    //         var link = $('.item').find('.title a').attr('href')
    //         link = link + "&close=true"

    //         window.open(link, "_self");
    //         console.log("click the first product")
    //       },3000)

  //    //click the first product 
  // setTimeout(function(){
  //   window.open($('.item').find('.title a').attr('href'),"_self");
  //   console.log("click the first product")
  // },6000)

  
  // //scroll to recommendation product
  // setTimeout(function(){
  //   $('html,body').animate({ scrollTop: 7000 }, 'slow')
  //   console.log("scoll to the end of product position")
  // },10000)

// document.getElementById("test").addEventListener('click', () => {
//   console.log("Popup DOM fully loaded and parsed");

//   function modifyDOM() {
//     var jQuery = $;
    
//     //type key word
//     console.log("type key word")
//     $('input#q').val('Hello Kitty')
    
//     //search product
//     console.log("search product")
//     setTimeout(function(){
//       $('form[action*="/search"] [type=submit]').click()
//     },2000)
 

//     // //click the first product
//     // console.log("click the first product")
//     // setTimeout(function(){
//     //   //var itemURL = 
//     //   window.open($('.item').find('.title a').attr('href'),"_self");
//     // },10000)



//     //go back to the search page
//     // console.log("go back to the main page")
//     // setTimeout(function(){
//     //   window.back();
//     // },10000)

//   }    

//     //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
//   chrome.tabs.executeScript({
//     code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
//   }, (results) => {
//         //Here we have just the innerHTML and not DOM structure
//         console.log('Popup script:')
//         console.log(results[0]);
//   });
// });