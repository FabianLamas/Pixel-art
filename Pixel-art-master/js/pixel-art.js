var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var botonBorrar = document.getElementById('borrar');
var superHeroes = document.getElementById('imgs');
var botonGuardar = document.getElementById('guardar');
var listaPixeles = [];
var colorActual;
var clickOn = false;

function generarPaleta(){
  for (var i = 0; i < nombreColores.length; i++) {
      var color = document.createElement('div');
      color.style.backgroundColor = nombreColores[i];
      color.className = "color-paleta";
      paleta.appendChild(color);
  }
}
function crearGrilla(){
  for (var i = 0; i < 1750; i++) {
      var pixel = document.createElement('div');
      grilla.appendChild(pixel);
      listaPixeles.push(pixel);
  }
}

function cambiarIndicadorColor(e){
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
  colorActual = indicadorColor.style.backgroundColor;
}

function pintarColor(e){
  e.target.style.backgroundColor = colorActual;
}

function pintarCorrido(e){
  if(clickOn){
    pintarColor(e);
  }
}

function borrarTodo(){
  for (var i = 0; i < listaPixeles.length; i++) {
    $(listaPixeles[i]).animate({"opacity": "0" , "backgroundColor": ""}, 1000);
      $(listaPixeles[i]).animate({"opacity": "100"}, 400);
  }
}

function cargarheroe(e){
  switch (e.target.id) {
    case "batman":
          cargarSuperheroe(batman);
      break;
    case "wonder":
          cargarSuperheroe(wonder);
      break;
    case "flash":
          cargarSuperheroe(flash);
      break;
    case "invisible":
          cargarSuperheroe(invisible);
      break;

    default:

  }
}
inicio();
function inicio(){
  generarPaleta();
  crearGrilla();
}

paleta.addEventListener("click", cambiarIndicadorColor);
grilla.addEventListener("mousedown", pintarColor);
grilla.addEventListener("mouseover", pintarCorrido);
grilla.addEventListener("mousedown", function(){ clickOn = true});
grilla.addEventListener("mouseup", function(){ clickOn = false});
botonBorrar.addEventListener("click", borrarTodo);
superHeroes.addEventListener("click", cargarheroe);
botonGuardar.addEventListener("click", guardarPixelArt);
colorPersonalizado.addEventListener('change',
  (function() {
    colorActualRueda = colorPersonalizado.value;
    indicadorColor = colorActualRueda;
  })
);
