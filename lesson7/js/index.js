let name;
let phone;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;

//document ready
$(function(){

    //文字框賦值
    //姓名
    $("#input_name").val('李小華');
    //文字框取值
    console.log("name is: " + name);

    //電話
    $("#input_phone").val('0919-102-163');
    console.log("phone is: " + phone);

    //下拉選單賦值
    //年
    $("#sel_bdy").val('1980');
    //下拉選單取值

    //下拉選單賦值
    //月
    $("#sel_bdm").val('11');
    //下拉選單取值

    //下拉選單賦值
    //日
    $("#sel_bdd").val('10');
    //下拉選單取值

    //最終取值樣子
    console.log("birhtday is: " + bdy + ". " + bdm + ". " + bdd);

    //radio賦值
    $("input[name='radio_gender'][value='f']").prop("checked", true);
    //radio取值
    console.log("gender is: " + gender);

    //checkbox賦值
    $("#check_games_1").prop("checked", true);
    $("input[name='check_games'][value='2']").prop("checked", true);
    //checkbox取值
    console.log("cake is: " + games);

    //textarea賦值
    $("#text_note").val('我要一個問號的蠟燭～謝謝尼～');
    //textarea取值
    console.log("note is: " + note);


    //按鈕送出事件，二選一(btn 要給 id)
    //$("#send").on('click', function(e){ send(e); });
    //$("#send").click(function(e){ send(e); });
    $("#send").click(function(e){ send(e); });
})

function send(e)
{
    //很重要
    e.preventDefault();

    name = $("#input_name").val();
    phone = $("#input_phone").val();
    bdy = $("#sel_bdy").val();
    bdm = $("#sel_bdm").val();
    bdd = $("#sel_bdd").val();
    game = [];
    gender = $("input[name='radio_gender']:checked").val()
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    note = $("#text_note").val();

   console.log("name is: " + name);
   console.log("phone is " + phone);
   console.log("birthday is: " + bdy + "/" + bdm + "/" + bdd);
   console.log("gender is: " + gender);
   console.log("games is: " + games);
   console.log("note is: " + note);
}