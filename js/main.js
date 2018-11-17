document.querySelector('button').onclick = recipe;

function recipe (){

  let apiURL = "https://www.themealdb.com/api/json/v1/1/random.php"

  fetch(apiURL)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    document.querySelector('img').src = response.meals[0].strMealThumb
    document.querySelector('h1').innerHTML = response.meals[0].strMeal
    nutrition (response.meals[0].strArea)
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("Date must be between Jun 16, 1995 and Oct 25, 2018 and written in YYYY-MM-DD form.")
  });


}
function nutrition (ing){

  var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ ing +"&format=json"
  console.log(ing)
  fetch(apiURL)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    document.querySelector('p').innerHTML = response[2]["0"]
    document.querySelector('p').innerHTML = response[2]["1"]
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("can't find this ingredient.")
  });
}
