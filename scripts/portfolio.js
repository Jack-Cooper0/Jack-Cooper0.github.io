
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