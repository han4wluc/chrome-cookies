
$( document ).ready(function() {
  var lastname = localStorage.getItem("keyword");
  console.log('ready', lastname);
  if(!lastname){
    return;
  }

  localStorage.removeItem("keyword");

  setTimeout(function(){
    $('input#q').val('Hello Kitty')
    setTimeout(function(){
      $('button.btn-search.seahd-iconfont').click()
    },2000)
  },2000)

});
