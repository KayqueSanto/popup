$(document).ready(function() {
    $('#popupButton').click(function() {
        exibirPergunta();
    });

    function exibirPergunta() {
        $('#myModal').modal('show');

        $('#simButton').click(function() {
            alert("Acho bom mesmo viu, rum.");
            $('#myModal').modal('hide');
        });

        $('#naoButton').click(function() {
            $('#pergunta').text("Tu me ama?");
            $('#emoji').removeClass().addClass('far fa-smile'); // Emoji de risada
        });
    }
});
