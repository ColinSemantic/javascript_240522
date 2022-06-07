console.log("### Global and Local scope")

// Global scope

function localscope (){
  // Local Scope
  var localVar = "Can't be used outside"
  console.log(localVar);
};

localscope();

//Uncomment to see how local variables can't be used outside its scope.
//console.log(localVar); //Uncought Reference Error.

// This refers to Global Object.
console.log(this);
if (this == window){
  console.log("True")
};

// This Refers to Object.
class animal{
	constructor(especie){
    	this.specie = especie;
	}
  //Este método mostrará this que es el mismo objeto.
  verThis(){
    console.log(this);
  }
  saludo(){
    console.log("hola soy un " + this.specie);
  }
}

// Aqui "new" creará una nueva instancia u objeto. Por lo que el método de la clase anterior hará referencia a esta nueva instancia creada.
let perro = new animal("perro");
let gato = new animal("gato");
perro.verThis();

//Aquí "call" nos permite cambiar el conexto de "this". Así en vez de utilizar la especie "perro" utilizará la especie gato de nuestra otra "instancia".
perro.saludo.call(gato);