const recipeCloseBtn = document.getElementById('close-btn');

recipeCloseBtn.addEventListener('click', () => {
    document.getElementById("informacion").style.display="none";
});

function emergente() {
    document.getElementById('informacion').style.display = "block";
 }