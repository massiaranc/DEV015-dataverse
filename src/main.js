import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData } from './dataFunctions.js';

const container = document.querySelector('#root');
const orden1 = document.querySelector('[data-testid="select-sort"]');
const filtroTime = document.querySelector('[data-testid="select-filter"]');
const clearButton = document.querySelector('[data-testid="button-clear"]');
const datosBusqueda = {orden1: '', filtroTime: ''}

// Estado para almacenar los datos filtrados y ordenados
let datosFiltradosYOrdenados = [...data]; // Comienza con una copia de los datos originales

// Función para renderizar los datos filtrados y ordenados en el DOM
const renderFilteredData = (filteredData) => {
  const ul = renderItems(filteredData);
  container.innerHTML = ''; // Limpia el contenido previo
  container.appendChild(ul); // Añade el nuevo contenido filtrado
  console.log('Datos filtrados y ordenados renderizados en el DOM');
};

// RENDERIZADO inicial de los datos
renderFilteredData(datosFiltradosYOrdenados);

// MANEJADORES de eventos para los selectores
orden1.addEventListener('change', (e) => {
  const sortBy = "name"; // Criterio de ordenamiento por defecto (nombre en este caso)
  const sortOrder = e.target.value; // Valor seleccionado en el selector de orden
  console.log('Ordenando por:', sortOrder);
  
  // Ordenar los datos filtrados y actualizamos el estado
  datosFiltradosYOrdenados = sortData(datosFiltradosYOrdenados, sortBy, sortOrder);
  
  // Renderizar los datos filtrados y ordenados
  renderFilteredData(datosFiltradosYOrdenados);
});

filtroTime.addEventListener('change', (e) => {
  const filterBy = "tiempoDePreparacion"; // Criterio de filtro por defecto (tiempo de preparación en este caso)
  const value = e.target.value; // Valor seleccionado en el selector de filtro
  console.log('Filtrando por:', value);
  
  // Filtrar los datos y actualizamos el estado
  datosFiltradosYOrdenados = filterData(data, filterBy, value);
  
  // Si hay criterio de ordenamiento aplicado, reordenamos los datos
  if (datosBusqueda.orden1) {
    const sortBy = "name"; // Criterio de ordenamiento por defecto (nombre en este caso)
    datosFiltradosYOrdenados = sortData(datosFiltradosYOrdenados, sortBy, datosBusqueda.orden1);
  }
  
  // Renderizar los datos filtrados y ordenados
  renderFilteredData(datosFiltradosYOrdenados);
});

// BOTON DE LIMPIEZA
clearButton.addEventListener('click', () => {
  // Limpiar los valores de los selectores y el estado de datos
  orden1.value = '';
  filtroTime.value = '';
  datosFiltradosYOrdenados = [...data]; // Restaurar a los datos originales
  renderFilteredData(datosFiltradosYOrdenados);
  console.log('Filtros limpiados');
});