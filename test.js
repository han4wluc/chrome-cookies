document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex

          console.log($('input#q'))
          $('input#q').val('Hello Kitty')
          
          // setTimeout(function(){
          //    $('form[action*="/search"] [type=submit]').click()
          // },2000)

          $('form[action*="/search"] [type=submit]').click()

          

          //scoll to the product position
          setTimeout(function(){
            $('html,body').animate({ scrollTop: 500 }, 'slow')
            console.log("scoll to the product position")
          },5000)
       
         
   
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});





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