const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные были получины с ошибкой!')
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error.massage);
    })
    .finally(() => {
      console.log('finally');
    })
};

getData();