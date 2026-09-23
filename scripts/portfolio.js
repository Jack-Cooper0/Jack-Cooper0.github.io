
const disc = 'texto'

function copiarTexto(texto) {

    navigator.clipboard.writeText(texto).then(() => {
        const mensaje = document.getElementById('copiar-mensaje')
        if (mensaje) {
            
        }   

    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}