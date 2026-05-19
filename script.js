window.addEventListener('scroll', () => {
    // Captura a quantidade de pixéis que o utilizador já desceu
    const scrollTop = window.scrollY;
    // Captura a altura total da janela do navegador
    const windowHeight = window.innerHeight;

    // Elementos que vamos manipular
    const textContainer = document.querySelector('.text-container');
    const brandImageContainer = document.querySelector('.brand-image-container');

    // --- Lógica para o Texto MTex ---
    // O texto desaparece por completo quando o scroll atinge metade da altura do ecrã
    const fadeStart = 0;
    const fadeEnd = windowHeight * 0.5;
    
    let textOpacity = 1 - (scrollTop / fadeEnd);
    // Garante que a opacidade não desce abaixo de 0
    if (textOpacity < 0) textOpacity = 0; 
    
    // Faz o texto subir ligeiramente enquanto desaparece
    let textTranslateY = scrollTop * -0.5; 

    textContainer.style.opacity = textOpacity;
    textContainer.style.transform = `translateY(${textTranslateY}px)`;

    // --- Lógica para a Imagem de Marca ---
    // A imagem começa com 0.25 de opacidade e chega ao máximo (ex: 0.9) à medida que descemos
    const imgFadeEnd = windowHeight * 0.8;
    let imgOpacity = 0.25 + (scrollTop / imgFadeEnd) * 0.65;
    if (imgOpacity > 0.9) imgOpacity = 0.9; // Mantém um tom celestial sem estourar o branco

    // A imagem move-se ligeiramente para cima de modo a centrar-se na rotação do scroll
    // Começou em -40% no CSS, vamos ajustar o eixo Y dinamicamente
    let imgTranslateY = -40 + (scrollTop / windowHeight) * 15;
    if (imgTranslateY > -25) imgTranslateY = -25; // Limita o movimento para ficar harmonioso

    brandImageContainer.style.opacity = imgOpacity;
    brandImageContainer.style.transform = `translate(-50%, ${imgTranslateY}%)`;
});