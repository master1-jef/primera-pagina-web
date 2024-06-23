function showGameDetails(gameId) {
    // Ocultar todos los detalles de los juegos
    var details = document.querySelectorAll('.game-details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });


    // Mostrar los detalles del juego seleccionado
    var gameDetails = document.getElementById(gameId);
    if (gameDetails) {
        gameDetails.style.display = 'block';
        gameDetails.scrollIntoView({ behavior: 'smooth' });
    }
}
