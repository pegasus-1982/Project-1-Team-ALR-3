
// Here we are building the URL we need to query the database



// Here we run our AJAX call to the OpenWeatherMap API
$(".ingredient-form").on("submit",function(event){
event.preventDefault();
  var mainIngredient = $("#ingredientFood").val();
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+ mainIngredient;

  console.log(mainIngredient);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
for (var i=0; i< 5;i++)
{
            var dishEl = $("<li>");
            dishEl.text(response.meals[i].strMeal);
            $("#dishes-list").append(dishEl);
}      
    
   
  });


});


  

// Here we are building the URL we need to query the database
var ingDrink="vodka";
var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +ingDrink;
//var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";


// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURLdrink,
method: "GET"
})
// We store all of the retrieved data inside of an object called "response"
.then(function(response) {

// Log the queryURL
console.log(queryURLdrink);

// Log the resulting object
console.log(response.ingredients[0]);

// Transfer content to HTML
     $("#drink").append("<h1>" + response.ingredients[0].strDescription+ " Drink </h1>");



});

