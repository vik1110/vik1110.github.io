let name;
let phone;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;

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
    if(phone == "")
    {
        $("#input_phone").addClass("is-invalid")
        allpass = false;
    }

    email = $("#input_email").val();
    if(email == "")
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
}