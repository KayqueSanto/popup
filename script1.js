$(document).ready(function() {
    $('#popupButton').click(function() {
        exibirPergunta();
    });

    function exibirPergunta() {
        $('#popupButton').hide(); // Oculta o botão "Clique aqui"
        $('#myModal').modal('show');

        $('#simButton').click(function() {
            alert("Acho bom mesmo viu, rum.");
            $('#myModal').modal('hide');
            exibirVideo();
        });

        $('#naoButton').click(function() {
            $('#pergunta').text("Tu me ama?");
            $('#emoji').removeClass().addClass('far fa-smile'); // Emoji de risada
        });
    }

    function exibirVideo() {
        $('#videoContainer').show();
        // reproduzir o vídeo automaticamente, descomente a linha abaixo:
        // document.getElementById('myVideo').play();
    }
});