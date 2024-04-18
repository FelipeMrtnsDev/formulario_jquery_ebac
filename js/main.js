$(document).ready(function(){
    $('#cpf-input').mask('000.000.000-00');
    $('#tel-input').mask('(00) 00000-0000')
    $('#cep-input').mask('00000-000');

    $('form').on('submit', function(e){
        e.preventDefault();
        $('form h2').slideDown();
    })
});