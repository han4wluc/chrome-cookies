console.log('run script')

document.getElementById("activate-automation").addEventListener('click', function() {
  console.log("Popup DOM fully loaded and parsed");

  function modifyDOM() {

    chrome.storage.local.set({
      "doStartAutomation": true,
    }, function(){
      console.log('Storage successful 1')
    });

    //step 1 
    console.log('doing step 1')

    $('input#q').val('hello kitty');
    $('form[action*="/search"] [type=submit]').click();

  }
/*
no action:
https://item.taobao.com/item.htm?spm=a230r.1.14.62.igW0dN&id=35514881355&ns=1&abbucket=8#detail
*/
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
