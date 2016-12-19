//plug-in html interface

$(document).ready(function(){
  $(document).on('click','#add',function(){
    $('.list').append(
        '<div>'+
        '<input type="text" name="keyWord[]" placeholder="输入关键字">'+ ' '+ 
        '<button class="btn" id="add">+</button>'+' '+
        '<button class="btn" id="delete">-</button>'+'</br>'+ 
        '</div>'
      );
  });

  $(document).on('click','#delete',function(){
    if($('.list').children().length > 1){ 
      $(this).parent().remove();
    };
  });

  $("input").focus(function(){
    $('(this).parent').css('outline-color','#FF0000');
  });


  chrome.storage.local.get('keywords',function(items){
    if(Array.isArray(items.keywords)){
      items.keywords.forEach(function(keyword){
        $('.list').append(
          '<div>'+
          '<input type="text" name="keyWord[]" placeholder="输入关键字" value="' + keyword + '">'+ ' '+ 
          '<button class="btn" id="add">+</button>'+' '+
          '<button class="btn" id="delete">-</button>'+'</br>'+ 
          '</div>'
        );
      })

    }
    // alert('keywrods')
  })

  chrome.storage.local.set({
    "doStartAutomation": false,
    // "keywords": keywords,
  }, function(){
    // console.log('Storage successful 1')
  });

}); 


//js
document.getElementById("activate-automation").addEventListener('click', function() {
  console.log("Popup DOM fully loaded and parsed");


    function getvalues(){
      var keyWords = document.getElementsByName('keyWord[]');
      console.log(keyWords);
      var arr=[];
      
        for (var i = 0; i <keyWords.length; i++) {
         var keyWord = keyWords[i];
         arr.push(keyWord.value);
         // alert("keyWord["+i+"].value="+keyWord.value);
         // var randomKeyWords= keyWords[Math.floor(keyWords.length*Math.random())];
         // alert(randomKeyWords); 
        }
      // alert(arr);
      return arr;
     }
     var keywordsInString = JSON.stringify(getvalues())

     // console.log(getvalues());

  function modifyDOM(keywords) {

    keywords = keywords.filter(function(keyword){
      return keyword !== '';
    })
    console.log("keywords3", keywords)


    chrome.storage.local.set({
      "doStartAutomation": true,
      "keywords": keywords,
    }, function(){
      console.log('Storage successful 1')
    });

    var randomKeyword = keywords[Math.floor(keywords.length*Math.random())];



     //step 1 
    console.log('doing step 1')

    if(window.location.href.indexOf("https://s.taobao.com") >= 0 ||
       window.location.href.indexOf("https://www.taobao.com") >= 0){
      $('input#q').val(randomKeyword);
      $('form[action*="/search"] [type=submit]').click();
    } else {
      var getDate = function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate(); 
        var date = d.getFullYear() + '' +(month<10 ? '0' : '') + month + '' +(day<10 ? '0' : '') + day;
        return date;
      };
      var date = getDate();
      var link = 'https://s.taobao.com/search?q='+encodeURI(randomKeyword)+'&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_'+date+'&ie=utf8';
      window.open(link, '_self');
    }

  }
/*
no action:
https://item.taobao.com/item.htm?spm=a230r.1.14.62.igW0dN&id=35514881355&ns=1&abbucket=8#detail
*/
    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
    // code: "console.log(" + JSON.stringify(mykeywords) + ")"
      code: '(' + modifyDOM + ')(' + keywordsInString + ');' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      //Here we have just the innerHTML and not DOM structure
      console.log('Popup script:')
      console.log(results[0]);
  });
  chrome.browserAction.setBadgeText({text:"开"});
  window.close()

});

document.getElementById("stop-automation").addEventListener('click', function() {
  chrome.storage.local.set({
    "doStartAutomation": false,
  }, function(){
    console.log('Storage successful 2')
  });
  chrome.browserAction.setBadgeText({text:"关"});
  window.close()
})
