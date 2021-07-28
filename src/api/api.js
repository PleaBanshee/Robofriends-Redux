// fetches data from API
export const apiCall = (link) =>
  fetch(link).then(response => response.json())