
$(document).ready(function(){
    $("#myform").validate({
        rules:{
            email: {
                required: true,
                email: true,  
            },
            szuletes: {
                required: true,
            },
            nezi: {
                required: true,
            },
            nezni_fogja: {
                required: true,
            },
            hirlevel: "required",
        },
        messages:{
            email: {
                required: "Add meg az email címedet!",
                email: "Az email-ednek tartalmaznia kell a @ karaktert",   
            },
            szuletes: {
                required: "Add meg a születési dátumodat!",
            },
            nezi: {
                required: "Kérlek válassz a felsorolt lehetőségek közül!",
            },
            nezni_fogja: {
                required: "Kérlek válassz a felsorolt lehetőségek közül!",
            },
            hirlevel: "Kérlek nyilatkozz, hogy igényt tartasz-e a hírlevélre!",
        }
    })
})