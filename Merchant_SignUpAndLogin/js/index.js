$(window).on("load", function () {

  // 按下登入按鈕跳置登入頁面
  $(".login").on("click", function () {
    let a = $(".a")
    let b = $(".b")

    if (!a.hasClass("-none")) {
      a.fadeOut(500), function () {
        a.addClass("-none");
      }
      b.removeClass("-none").fadeIn(500);
    }

    // 返回頁面頂端
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  })

  // 按下註冊按鈕跳置登入頁面
  $(".register").on("click", function () {
    let a = $(".a")
    let b = $(".b")

    if (!b.hasClass("-none")) {
      b.fadeOut(500), function () {
        b.addClass("-none");
      }
      a.removeClass("-none").fadeIn(500);
    }

    // 返回頁面頂端
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  })


  // 按下重置鍵清除所有資料
  $(".ResetBtn").on("click", function () {
    $(".ReForm input").empty();

  })


  // 餐廳地址對應

  $("#City").on("change", function (e) {

    var cityName = $(this).val();
    var zipcode = $("#zipcode");
    var zipcodeOption = $("#zipcode option");

    if (cityName == "城市") {
      alert("請選擇餐廳所在的城市")
      e.preventDeafult();

    } else {

      switch (cityName) {
        case "A":
          zipcodeOption.remove();
          zipcode.append(
            `
            <option value="A.100">中正區</option>
          <option value="A.108">萬華區</option>
          <option value="A.115">南港區</option>
          <option value="A.103">大同區</option>
          <option value="A.110">信義區</option>
          <option value="A.116">文山區</option>
          <option value="A.104">中山區</option>
          <option value="A.111">士林區</option>
          <option value="A.106">大安區</option>
          <option value="A.114">內湖區</option>
          <option value="A.105">松山區</option>
          <option value="A.112">北投區</option>
          `
          );
          break;

        case "B":
          zipcodeOption.remove();
          zipcode.append(
            `
            <option value"B.207">萬里區</option>
          <option value="B.223">石碇區</option>
          <option value="B.231">新店區</option>
          <option value="B.236">土城區</option>
          <option value="B.242">新莊區</option>
          <option value="B.249">八里區</option>
          <option value="B.208">金山區</option>
          <option value="B.224">瑞芳區</option>
          <option value="B.232">坪林區</option>
          <option value="B.237">三峽區</option>
          <option value="B.243">泰山區</option>
          <option value="B.251">淡水區</option>
          <option value="B.220">板橋區</option>
          <option value="B.226">平溪區</option>
          <option value="B.233">烏來區</option>
          <option value="B.238">樹林區</option>
          <option value="B.244">林口區</option>
          <option value="B.252">三芝區</option>
          <option value="B.221">汐止區</option>
          <option value="B.227">雙溪區</option>
          <option value="B.237">三峽區</option>
          <option value="B.243">泰山區</option>
          <option value="B.234">永和區</option>
          <option value="B.239">鶯歌區</option>
          <option value="B.247">蘆洲區</option>
          <option value="B.253">石門區</option>
          <option value="B.228">貢寮區</option>
          <option value="B.235">中和區</option>
          <option value="B.241">三重區</option>
          <option value="B.248">五股區</option>
          `
          );
          break;

        case "C":
          zipcodeOption.remove();
          zipcode.append(
            `
         <option value = "C.200">仁愛區</option>
        <option value="C.205">暖暖區</option>
        <option value="C.201">信義區</option>
        <option value="C.206">七堵區</option>
        <option value="C.202">中正區</option>
        <option value="C.203">中山區</option>
        <option value="C.204">安樂區</option>
        `
          );
          break;
      }

      var citySlected = $("#City :selected").text();
      if (citySlected != "城市") {
        $("#address").attr("value", citySlected);
      }
    }

    // 餐廳地址對應Textinput
    zipcode.on("change", function (e) {
      var adminArea = $("#zipcode :selected").text();
      if (adminArea != " ") {
        $("#address").attr("value", citySlected + adminArea);
        $("#address").attr("value");
      }

    })

  })




});