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

