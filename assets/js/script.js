$(document).ready(function () {

    $("#btn1").click(function () {
        alert('1');
        $("#div1").load("partiel1.html");
    });

    $("#btn2").click(function () {
        alert('2');
        $("#div1").load("partiel2.html");
    });
});