import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData } from './dataFunctions.js';

const container = document.querySelector('#root');

//FUNCION para renderizar los datos en el DOM
const renderFilteredData = (filteredData) => {
  const ul = renderItems(filteredData);
  container.innerHTML = ''; // Limpia el contenido previo
  container.appendChild(ul); // Añade el nuevo contenido filtrado
  console.log('Datos filtrados renderizados en el DOM');
};

//RENDERIZADO inicial de los datos
renderFilteredData(data);

//LEER valores de los Selects
const orden1 = document.querySelector('[data-testid="select-sort"]');
const filtro1 = document.querySelector('[data-testid="select-filter"]');
const datosBusqueda = {orden1: '', filtro1: ''}
//MANEJADORES de eventos para los selectores
orden1.addEventListener('change', (e) => {
  datosBusqueda.orden1 = e.target.value;
  let sortedData = [...data]; // Copia de los datos
  if (datosBusqueda.orden1 === 'alfabetico') {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (datosBusqueda.orden1 === 'alfabeticoInverso') {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  }
  renderFilteredData(sortedData);
});
filtro1.addEventListener('change', (e) => {
  datosBusqueda.filtro1 = e.target.value;
  console.log(datosBusqueda.filtro1)
  const filteredData = filterData(data, "tiempoDePreparacion", datosBusqueda.filtro1);
  console.log(filteredData)
 // renderFilteredData(filteredData);
});

//BOTON DE LIMPIEZA
const clearButton = document.querySelector('[data-testid="button-clear"]');

clearButton.addEventListener('click', () => {
  orden1.value = '';
  filtro1.value = '';
  datosBusqueda.orden1 = '';
  datosBusqueda.filtro1 = '';
  renderFilteredData(data);
  console.log('Filtros limpiados');
});

//VISUALIZACION DE TARJETAS
//const ul = renderItems(data);
const card = document.getElementsByClassName('card-container')
console.log(card)