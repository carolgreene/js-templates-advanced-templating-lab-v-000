function init() {
let formTemplate = document.getElementById("recipe-form-template").innerHTML;
let formTemplateFn = Handlebars.compile(formTemplate);
document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  //set variables from form
  let recipe = {}
  let nameNode = document.getElementById('name');
  let descriptionNode = document.getElementById('description');
  var ingredientNodes = document.getElementsByName('ingredients');
  //set attribute values
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for(var i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }
  let recipeTemplate = document.getElementById('recipe-template').inner.HTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}
