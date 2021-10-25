
/*Animacion con javascript ScrollReveal en 'Peliculas' 'Series' y 'Principal'*/
ScrollReveal().reveal('.populares');
ScrollReveal().reveal('.populares', {delay: 500});
/*Menu responsive*/
document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
