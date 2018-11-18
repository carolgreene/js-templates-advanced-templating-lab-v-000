function init() {
let formTemplate = document.getElementById("recipe-form-template").innerHTML;
let formTemplateFn = Handlebars.compile(formTemplate);
document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
})
}

function handleSubmit() {
  //set variables from form
  var recipe = {}
  var nameNode = document.getElementById('name');
  var descriptionNode = document.getElementById('description');
  var ingredientNodes = document.getElementsByName('ingredients');
  //set attribute values
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for(var i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
