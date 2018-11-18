function init() {
let template = document.getElementById("recipe-form-template").innerHTML;
let templateFn = Handlebars.compile(template);
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
