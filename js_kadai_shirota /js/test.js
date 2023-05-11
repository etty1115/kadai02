$(".gu_btn").on("click", function () {
    var kuji=Math.floor( Math.random() *5); 
    if(kuji>3){
        console.log("チョキ");
        $('#aitenote').html("チョキ");
        console.log("勝ち");
        $('#result').html("勝ち");

    }
    else if(kuji===2)
    {console.log("グー");
    $('#aitenote').html("グー");
    console.log("あいこ");
    $('#result').html("あいこ");}
    else {
        console.log("パー");
    $('#aitenote').html("パー");
    console.log("負け");
    $('#result').html("負け");}
    });

$(".cho_btn").on("click", function () {
    var kuji=Math.floor( Math.random() *5); 
    if(kuji>3){
        console.log("チョキ");
        $('#aitenote').html("チョキ");
        console.log("あいこ");
        $('#result').html("あいこ");

    }
    else if(kuji===2)
    {console.log("グー");
    $('#aitenote').html("グー");
    console.log("負け");
    $('#result').html("負け");}
    else {
        console.log("パー");
    $('#aitenote').html("パー");
    console.log("勝ち");
    $('#result').html("勝ち");}
    });
$(".par_btn").on("click", function () {
    var kuji=Math.floor( Math.random() *5); 
    if(kuji>3){
        console.log("チョキ");
        $('#aitenote').html("チョキ");
        console.log("負け");
        $('#result').html("負け");

    }
    else if(kuji===2)
    {console.log("グー");
    $('#aitenote').html("グー");
    console.log("勝ち");
    $('#result').html("勝ち");}
    else {
        console.log("パー");
    $('#aitenote').html("パー");
    console.log("あいこ");
    $('#result').html("あいこ");}
    });