function init() {
let formTemplate = document.getElementById("recipe-form-template").innerHTML;
let formTemplateFn = Handlebars.compile(formTemplate);
document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


