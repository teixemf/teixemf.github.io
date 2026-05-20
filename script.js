window.addEventListener('scroll', () => {
    // Captura a quantidade de pixéis que o utilizador já desceu
    const scrollTop = window.scrollY;
    // Captura a altura total da janela do navegador
    const windowHeight = window.innerHeight;
    const maxScroll = document.body.scrollHeight - windowHeight;
    const scrollProgress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

    // Elementos que vamos manipular
    const textContainer = document.querySelector('.text-container');
    const brandImageContainer = document.querySelector('.brand-image-container');

    // --- Lógica para o Texto MTex ---
    // O texto desaparece por completo quando o scroll atinge metade da altura do ecrã
    const fadeEnd = windowHeight * 0.5;
    let textOpacity = 1 - (scrollTop / fadeEnd);
    if (textOpacity < 0) textOpacity = 0;
    let textTranslateY = scrollTop * -0.5;

    textContainer.style.opacity = textOpacity;
    textContainer.style.transform = `translateY(${textTranslateY}px)`;

    // --- Lógica para a Imagem de Marca ---
    // A imagem aumenta opacidade à medida que descemos; no fim da página fica totalmente centrada
    let imgOpacity = 0.25 + scrollProgress * 0.65;
    if (imgOpacity > 0.9) imgOpacity = 0.9;

    // Ajusta a posição vertical para que no fim do scroll a imagem esteja centralizada
    let imgTranslateY = -40 - scrollProgress * 10;
    if (imgTranslateY < -50) imgTranslateY = -50;

    brandImageContainer.style.opacity = imgOpacity;
    brandImageContainer.style.transform = `translate(-50%, ${imgTranslateY}%)`;
});