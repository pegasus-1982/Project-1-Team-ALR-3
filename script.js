
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
    console.log(response.meals[0].strMeal);
    console.log(response.meals[1].strMeal);
    console.log(response.meals[2].strMeal);


    // Transfer content to HTML
    $("#dishes-list").append("<h3>" + "Options using " + mainIngredient + "</h3>");
    $("#dishes-list").append("<li>" + response.meals[0].strMeal + "</li>");
    $("#dishes-list").append("<li>" + response.meals[1].strMeal + "</li>"); 
    $("#dishes-list").append("<li>" + response.meals[2].strMeal + "</li>"); 
    $("#dishes-list").append("<li>" + response.meals[3].strMeal + "</li>");
    $("#dishes-list").append("<li>" + response.meals[4].strMeal + "</li>"); 

    
  
    
   
  });


});



$(".drink-form").on("click",function(event){
  event.preventDefault();
  // Here we are building the URL we need to query the database
  var ingDrink=$("#ingredientDrink").val();
  var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
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
  console.log(response.drinks[0].strDrink);
  console.log(response.drinks[0].strIngredient1);
  console.log(response.drinks[0].strIngredient2);
  console.log(response.drinks[0].strIngredient3);
  console.log(response.drinks[0].strIngredient4);
  console.log(response.drinks[0].strInstructions);
  
  
       $("#dishes-drink").append("<h3>" + response.drinks[0].strDrink + "</h3>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient1 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient2 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient3 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient4 + "</li>"); 
       $("#dishes-drink").append("<p>" + response.drinks[0].strInstructions + "</p>"); 
  
  
  
  });

});




