function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
        inline: "start" // Faz o scroll horizontal funcionar
    });
}
