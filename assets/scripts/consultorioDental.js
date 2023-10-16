const configMenu = document.getElementById("configMenu");
const profileImg = document.getElementById("profileImg");

// Mostrar/ocultar menú al hacer clic en la imagen de perfil
profileImg.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    configMenu.style.display = (configMenu.style.display === "none" || configMenu.style.display === "") ? "block" : "none";
});

// Cerrar menú si se hace clic en cualquier parte de la pantalla
window.addEventListener("click", () => {
    configMenu.style.display = "none";
});