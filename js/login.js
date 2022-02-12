$(function(){
  //給註冊綁定單擊事件
  $("#btn").click(function(){
    //驗證用戶名 : 必須由字母、數字下滑線組成，並且長度為5-12位
    //1.獲取用戶名輸入框里的內容
    let $usernameText = $("#user-id").val();
    //2.創建正規表達式對象
    let usernamePatt = /^\w{5,12}$/;
    //3.使用test方法驗證--僅判斷不符合條件的時候提示用戶結果
    if($usernameText == ""){
      $(".errorMsg").text("username cannot be empty!");
      $("#username").addClass("error-style");
      return false;
    }else if(!usernamePatt.test($usernameText)){
      //4.提示用戶結果
      $(".errorMsg").text("Sorry , we couldn't find an account with that username.");
      $("#username").addClass("error-style");
      return false;
    }
    //驗證密碼 : 必須由字母、數字下滑線組成，並且長度為8-12位
    //1.獲取用密碼輸入框里的內容
    let $passwordText = $("#user-password").val();
    //2.創建正規表達式對象
    let passwordPatt = /^\w{8,12}$/;
    //3.使用test方法驗證--僅判斷不符合條件的時候提示用戶結果
    if($passwordText == ""){
      $(".errorMsg").text("password cannot be empty!");
      $("#password").addClass("error-style");
      return false;
    }else if(!passwordPatt.test($passwordText)){
      //4.提示用戶結果
      $(".errorMsg").text("Your password is incorrect.")
      $("#password").addClass("error-style");
      return false;
    }
     //只要用戶名合法，提示訊息與警告框就要刪掉，不要再顯示
     $(".errorMsg").text("");
     $("#username, #password").removeClass("error-style");
  
  }) 
  
  let oldColor = "";
  $(".btn").mouseover(function(){
    //將原本的背景色賦值給oldColor
    oldColor = $(this).css("background");
    // 滑鼠移入改背景色
    $(this).css("background","linear-gradient(to right, #ed4264, #ffedbc)");
  }).mouseout(function(){
    //滑鼠移出將背景色改為原本的oldColor
    $(this).css("background",oldColor);
  });
});
(function($){
})($)