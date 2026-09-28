
const disc = 'texto'


function copiarTexto(texto) {

    navigator.clipboard.writeText(texto).then(() => {
        const mensaje = document.getElementById('copiar-mensaje')
        if (mensaje) {
            
        }   

    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
    const aviso = document.createElement('div');
  aviso.className = 'aviso-copiado';
  aviso.textContent = '⚠️ Discord copiado al portapapeles';

  document.body.appendChild(aviso);

  // Lo borra a los 2 segundos
  setTimeout(() => aviso.remove(), 2000);
}
function filtrarProyectos(categoria, botonPulsado) {

  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(btn => btn.classList.remove('active'));
  botonPulsado.classList.add('active');
 
  const tarjetas = document.querySelectorAll('.targeta');
  tarjetas.forEach(tarjeta => {
    const catTarjeta = tarjeta.getAttribute('data-categoria');
    
    if (categoria === 'todos' || catTarjeta === categoria) {
      tarjeta.style.display = 'inline-block';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}