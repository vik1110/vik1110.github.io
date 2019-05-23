let name;
let phone;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;
let patt;
let result;
const fireBaseData = firebase.database().ref("register");
//const 變數不可修改，let 變數可修改

//document ready
//按鈕送出事件，二選一(btn 要給 id)
    //$("#send").on('click', function(e){ send(e); });
    //$("#send").click(function(e){ send(e); });
$(function(){ 
    $("#send").click(function(e){ send(e); });
})


function send(e)
{
    //很重要
    e.preventDefault();

    let allpass = true;
    $(".is-invalid").removeClass("is-invalid")
    $("#check_games_invalid").hide();

    name = $("#input_name").val();
    if(name == "")
    {
        $("#input_name").addClass("is-invalid")
        allpass = false;

    }

    phone = $("#input_phone").val();
    patt = /^09[0-9]{8}/i;
    result = patt.test(phone);

    if(phone == "" || !result)
    {
        $("#input_phone").addClass("is-invalid")
        allpass = false;
    }

    email = $("#input_email").val();
    result = email.indexOf('@');
    if(email == "" || !result)
    {
        $("#input_email").addClass("is-invalid")
        allpass = false;
    }

    bdy = $("#sel_bdy").val();
    if(bdy == "")
    {
        $("#sel_bdy").addClass("is-invalid")
        allpass = false;

    }
    

    bdm = $("#sel_bdm").val();
    bdd = $("#sel_bdd").val();
    game = [];
    gender = $("input[name='radio_gender']:checked").val()
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    if (games.length == 0)
    {
        $("input[name='check_games']").addClass("is-invalid");
        $("#check_games_invalid").show();
    }
    note = $("#text_note").val();

   console.log("name is: " + name);
   console.log("phone is " + phone);
   console.log("birthday is: " + bdy + "/" + bdm + "/" + bdd);
   console.log("gender is: " + gender);
   console.log("games is: " + games);
   console.log("note is: " + note);

   if(!allpass) return;
   fireBaseData.push({
   name: name,
   bd: bdy+"/"+bdm+"/"+bdd,
   gender: gender,
   email: email,
   phone: phone,
   games: games.toString(),
   note:note,
   time: firebase.database.ServerValue.TIMESTAMP

},
function (error) {
if (error) {
alert('系統出現問題，請稍後再試。');
} else {
alert('我們已收到您的訊息，將會有專人與您聯繫。');
}
});

}