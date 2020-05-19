//creo la griglia tramite Handlebars

var template_html = $('#griglia').html();

var template_function = Handlebars.compile(template_html);

var html_finale = template_function();

for (var i = 0; i < 36; i++) {
    $('.griglia').append(html_finale);
}

//intercetto il click su un quadrato della griglia

$('.quadrato').click(function () {
//memorizzo il this in una variabile per poterlo usare all interno di ajax
    var indice = $(this);
//richiamo un ajax per un numero random da 1 a 9
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data) {
//memorizzo in una variabile la proprieta response
            var numero_pc = data.response;
//richiamo la funzione per assegnare il colore di sfondo al quadrato
            colore(numero_pc, indice);
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });
})

//funzione per cambiare il colore di sfondo del quadrato cliccato

function colore(pc_number, index) {
    $(index).find('p').text(pc_number)
    if (pc_number <= 5) {
        $(index).addClass('giallo');
    }
    else {
        $(index).addClass('verde');
    }
}
