//JavaScript file with all java script functionalities for BudgetBod


//Slider and output variables
var slider = document.getElementById("weight_slider");
var output = document.getElementById("weight_value");

//Set output to slider value
output.innerHTML = slider.value;

//Output value of slider
slider.oninput = function (){
  output.innerHTML = this.value;
}
