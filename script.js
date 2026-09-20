// Si el usuario actualiza una página interna,
// regresar a la portada principal
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    window.location.href = "index.html";
}
