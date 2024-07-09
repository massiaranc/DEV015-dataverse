
export const filterData = (data, filterBy, value) => {
  console.log(`Filtrando por: ${filterBy}`);
  if (!filterBy) return data;
  // Aplicar el filtro adecuadamente
  const filteredData = data.filter(item => {
    const itemValue = item.facts[filterBy];
    return itemValue === value
  });
  // Aquí se debería devolver el resultado del filtro
  console.log(filteredData);
  return filteredData; // Devolver los datos filtrados
};
// Función para ordenar los datos
export const sortData = (data, sortBy, sortOrder) => {
  console.log(`Ordenando por: ${sortBy}, Orden: ${sortOrder}`);
  if (!sortBy || !sortOrder) return data;

  const sortedData = [...data]; // Hacer una copia de los datos

  sortedData.sort((a, b) => {
    const valueA = a[sortBy].toLowerCase();
    const valueB = b[sortBy].toLowerCase();

    if (sortOrder === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else if (sortOrder === 'desc') {
      return valueA < valueB ? 1 : -1;
    }
    return 0;
  });

  console.log('Datos ordenados:', sortedData);
  return sortedData;
};
