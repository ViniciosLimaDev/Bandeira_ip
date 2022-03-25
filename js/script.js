$(function() {


    $("#form").submit(function(e) {
        e.preventDefault();
        var ip = $('#ip').val();
        $.ajax({
                url: `http://ip-api.com/json/${ip}`
            })
            .done(function(retorno) {


                console.log(retorno);
                // alert(retorno.city)
                let cidade = retorno.city;
                $('#cd').text(cidade)

                let cit = $('#cd').text();


                $.getJSON(`https://customsearch.googleapis.com/customsearch/v1?cx=629a8112478ebedb2&num=2&q=imagens da bandeira da cidade de ${cit}&searchType=image&key=AIzaSyCXOR3QnviZaioPsD7fPfajG5uoBxy0i0c`, function(response) {
                    if (response != null || response != undefined) {
                        console.log(response)
                        var data = response.items[1].link;
                        console.log(data)

                        $('.img').html(`<img class="img_city" src="${data}" id="images"/>`)
                    }
                })

            });




    });

})