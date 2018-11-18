function init() {
let formTemplate = document.getElementById("recipe-form-template").innerHTML;
let formTemplateFn = Handlebars.compile(formTemplate);
document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerHelper("displayIngredient" funcion(ingredient) {
  return new Handlebars.SafeString('<li> name="ingredients">' + ingredient + '</li>');
})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
