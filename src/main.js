import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const ul = renderItems(data);

const container = document.querySelector('#root');

if (container) {container.appendChild(ul);console.log('Datos renderizados en el DOM');
} else {console.error('No se encontró el contenedor con id "root".');
}
