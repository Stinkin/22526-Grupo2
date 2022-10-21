document.getElementById("header").innerHTML = 
`
<div id="screen">
      <h1 id="titulo_texto">LENGUAJES DE PROGRAMACION </h1>
</div>
`

document.getElementById("footer").innerHTML = `
<div>
<a class="social FB" href="https://www.facebook.com/cristh.hoff/" target="_blank"><i class='bx bxl-facebook'></i></a>
<a class="social WA" href="https://wa.me/5491163081330" target="_blank"><i class='bx bxl-whatsapp'></i></a>
<a class="social IG" href="https://www.instagram.com/stinkin_evil/" target="_blank"><i class='bx bxl-instagram'></i></a>
<a class="social TT" href="https://www.tiktok.com/@stinkinevil?lang=es" target="_blank" > <i class='bx bxl-tiktok'></i></a>
<a class="social FB" href="https://www.linkedin.com/in/cristhian-e-hoffmann-arce-91a9129/" target="_blank">  <i class='bx bxl-linkedin' ></i></a>
<br>
&copy; Derechos Reservados 2022 
</div>
`

const pagina = document.querySelector("main");
const cols = document.querySelectorAll(".col");

cols.forEach(col => {
  col.classList.add(pagina.id);
});
