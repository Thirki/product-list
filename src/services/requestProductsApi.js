async function requestProductsApi(product){
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`
  const response = await fetch(url)
  const jsonResponse = await response.json();
  return jsonResponse.results;
}

export default requestProductsApi;