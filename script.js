// Espera a página carregar
document.addEventListener('DOMContentLoaded', function() {
  
  // Seleciona TODOS os elementos que têm a classe ".card"
  const cards = document.querySelectorAll('.card');
  
  // Passa por cada cartão encontrado
  cards.forEach(card => {
    
    // Adiciona um "ouvinte" de clique para cada um
    card.addEventListener('click', function() {
      // Adiciona (ou remove) a classe "flipped"
      // Isso permite que ela possa "desvirar" se clicar de novo
      card.classList.toggle('flipped');
    });
    
  });
  
});
