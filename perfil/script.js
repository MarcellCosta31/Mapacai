const list = document.querySelectorAll(".list");
function activeLink() {
list.forEach((item) => item.classList.remove("active"));
this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

const inputImagem = document.getElementById("input-imagem");
        const imagemPreview = document.getElementById("imagem-preview");
        const botaoRemover = document.getElementById("remover-imagem");

        // Verifica se já existe uma imagem salva no LocalStorage ao carregar a página
        window.onload = function () {
            const imagemSalva = localStorage.getItem("imagemSalva");
            if (imagemSalva) {
                imagemPreview.src = imagemSalva;
                imagemPreview.style.display = "block";
            }
        };

        // Evento para carregar a imagem escolhida
        inputImagem.addEventListener("change", function(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    imagemPreview.src = e.target.result;
                    imagemPreview.style.display = "block";

                    // Salva a imagem no LocalStorage
                    localStorage.setItem("imagemSalva", e.target.result);
                };

                reader.readAsDataURL(file);
            }
        });