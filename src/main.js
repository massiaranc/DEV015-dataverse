import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData } from './dataFunctions.js';

const container = document.querySelector('#root');
const orden1 = document.querySelector('[data-testid="select-sort"]');
const filtroTime = document.querySelector('[data-testid="select-filter"]');
const clearButton = document.querySelector('[data-testid="button-clear"]');
const datosBusqueda = {orden1: '', filtroTime: ''}

// COPIA ARRAY ORIGINAL
let datosFiltradosYOrdenados = [...data];

// FUNCION PARA RENDERIZAR
const renderFilteredData = (filteredData) => {
  const ul = renderItems(filteredData);
  container.innerHTML = ''; // Limpia el contenido previo
  container.appendChild(ul); // Añade el nuevo contenido filtrado
  console.log('Datos filtrados y ordenados renderizados en el DOM');
};

// RENDERIZADO inicial de los datos
renderFilteredData(datosFiltradosYOrdenados);

// SELECTORES DE FILTRO Y ORDEN
const orden1 = document.querySelector('[data-testid="select-sort"]');
const filtroTime = document.querySelector('[data-testid="select-filter"]');
const datosBusqueda = {orden1: '', filtroTime: ''}

orden1.addEventListener('change', (e) => {
  const sortBy = "name";
  const sortOrder = e.target.value;
  console.log('Ordenando por:', sortOrder);
  datosFiltradosYOrdenados = sortData(datosFiltradosYOrdenados, sortBy, sortOrder);

  renderFilteredData(datosFiltradosYOrdenados);
});

filtroTime.addEventListener('change', (e) => {
  const filterBy = "tiempoDePreparacion";
  const value = e.target.value;
  console.log('Filtrando por:', value);
  datosFiltradosYOrdenados = filterData(data, filterBy, value);
  if (datosBusqueda.orden1) {
    const sortBy = "name";
    datosFiltradosYOrdenados = sortData(datosFiltradosYOrdenados, sortBy, datosBusqueda.orden1);
  }

  renderFilteredData(datosFiltradosYOrdenados);
});

// BOTON DE LIMPIEZA
const clearButton = document.querySelector('[data-testid="button-clear"]');

clearButton.addEventListener('click', () => {
  // Limpiar los valores de los selectores y el estado de datos
  orden1.value = '';
  filtroTime.value = '';
  datosFiltradosYOrdenados = [...data];
  renderFilteredData(datosFiltradosYOrdenados);
  console.log('Filtros limpiados');
});
