$(document).ready(function() {


    $("#form").submit(function(e) {
        e.preventDefault();

        var ip = $('#ip').val();

        console.log(ip)

        $.ajax({
                url: `http://ip-api.com/json/${ip}`,
            })
            .done(function(retorno) {

                console.log(retorno);
                // alert(retorno.city)
                var cidade = retorno.city;

                var cd = document.querySelector("#cd")

                cd.innerHTML = `${cidade}`;

            });
    });

})