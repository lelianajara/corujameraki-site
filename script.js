function abrirLightbox(src, alt) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}" />
      <span class="fechar">&times;</span>
    </div>
  `;
  document.body.appendChild(lightbox);

  document.querySelector(".fechar").onclick = () => lightbox.remove();
  lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.remove();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".galeria img");
  imagens.forEach(img => {
    img.addEventListener("click", () => {
      abrirLightbox(img.src, img.alt);
    });
  });

  // menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});
