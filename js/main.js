//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#searchButton').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    clearInterval(intervalID)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

document.querySelector('#randomizerButton').addEventListener('click', addInterval)

let intervalID

function addInterval(){
  clearInterval(intervalID)
  myCallback()
  intervalID = setInterval(myCallback, 7000)
}

function myCallback() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}