function hide (e, reflow) { // Oculta o elemento e faz script de seu estilo
  if (reflow) {             // Se o 2º argumento é verdadeiro
    e.style.display = 'none'// Oculta o elemento e utiliza seu espaço
  } else {
    e.style.visibility = 'hidden';
  }
}

function highlight(e) {    // Destaca 'e', definindo uma classe classe
                           // Basta definir ou anexar no atributo da classe HTML.
                           // Isso presume que uma folha de estilos CSS já define a classe 'hilite'
  if (!e.className) e.className = 'hilite';
  else e.className += 'hilite';
}
