import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import { mongoose } from "mongoose";

function App() {
  const [searchField, setSearchField] = useState(""); // Los useState los vamos a usar cuando queremos que algo este en constante cambio por ejemplo cuando queremos buscar algun cafe
  const [coffee, setCoffee] = useState([]); // la primera variable es donde se va a almacenar el valor la segunda es donde vamos a meter ese valor este es para llamar a la api y alm,acenar la info en coffee
  const [filteredCoffee, setFilterCoffee] = useState(coffee); /// este lo usaremos para hacer un filtro y tener las busquedas de nuestro cafe

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((resp) => resp.json())
      .then((data) => setCoffee(data));
  }, []); // use effect lo usaremos cuando queramos solo usarlo una vez este lo implementaremos cuando cargue el documento llamara a la api y almacenaremos el dato en setCoffee que tomara el valor de coffee
  useEffect(() => {
    const newFilteredCoffee = coffee.filter((el) => {
      return el.title.toLocaleLowerCase().includes(searchField);
    });
    setFilterCoffee(newFilteredCoffee);
  }, [coffee, searchField]); // de igual forma este lo hacemos como optimizacion queremos que cada vez que cambien las variables de busqueda o de caffee esta accion sera ejecutada\
  // para especificar cuando queremos que estos se actualicen bastara con ponerle el arreglo con comas al final
  const onChangeHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchField(search);
  }; // este envento simplemente detecta cuando nosotros escribimos en el buscador va a almacenar el dato en search que posteriormente se convertira en searchField

  //EN COMPONENTES ESTAN LOS COMPONENTES CARTA Y LA CAJA DE BUSQUEDA , EL COMPONENTE CARTA NOS AYUDARA A ESTRUCTURAR COMO QUEREMOS LA CARTA
  // Y EL COMPONENTE LISTA CARTA NOS SERVIRA A LOOPEAR TODAS LAS CARTAS GENERADAS EN EL DOCUMENTO esas funciones las exportaremos y las usaremos aqui
  console.log(coffee);
  return (
    <div className="App">
      <h1 className="title">MENU ESIME</h1>
      <header className="App-header">
        <input
          type="text"
          required="true"
          placeholder="Buscar"
          className="input"
          onChange={onChangeHandler}
        />
        <CardList coffees={filteredCoffee} />
      </header>
    </div>
  );
}

export default App;
