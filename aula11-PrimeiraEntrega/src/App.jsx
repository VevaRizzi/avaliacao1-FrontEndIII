import { useState } from "react";
import CardCafe from "./CardCafe";
import "./index.css";

function App() {
  const [metodoEscolhido, setMetodoEscolhido] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagemMetodo, setImagemMetodo] = useState("");

  const [metodos, setMetodos] = useState([]);

  function salvarMetodo(event) {
    event.preventDefault();

    if (metodoEscolhido === "" || quantidade === "" || imagemMetodo === "") {
      alert("Preencha os campos para salvar o método escolhido.");
    } else {
      setMetodos([
        ...metodos,
        {
          metodo: metodoEscolhido,
          xicaras: quantidade,
          url: imagemMetodo,
        },
      ]);
      console.log(metodos);
      console.log(form.metodo);
      console.log(form.xicaras);
      console.log(form.url);
    }

    if (quantidade === "") {
      alert("Por favor insira um número");
      return;
    }

    if (quantidade < 0 || quantidade < 3) {
      alert("Você não me parece tão cafeínado assim!");
      return;
    }

    if (event.target.value.length < 10 || event.target.value.trim("")) {
      alert("O campo deve conter uma url");
      return;
    }
  }

  return (
    <div className="container">
      <h1>Métodos de Preparo de Café Especial</h1>
      <h2 className="title">Qual método de preparo você gosta?</h2>
      <form className="form" onSubmit={salvarMetodo}>
        <label>Método</label>
        <select
          value={metodoEscolhido}
          onChange={(event) => setMetodoEscolhido(event.target.value)}
        >
          <option disabled hidden value="">
            Selecione um método
          </option>
          <option value="hario">Hario V60</option>
          <option value="aeropress">Aeropress</option>
          <option value="prensa">Prensa Francesa</option>
          <option value="origami">Origami</option>
          <option value="clever">Clever</option>
          <option value="espresso">Espresso</option>
          <option value="moka">Moka Italiana</option>
          <option value="chemex">Chemex</option>
        </select>
        <label>Xícaras</label>
        <input
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
          placeholder="Quantas xícaras por dia?"
        />
        <label>Imagem do Método</label>
        <input
          value={imagemMetodo}
          onChange={(event) => setImagemMetodo(event.target.value)}
          placeholder="insira uma imagem do método escolhido"
        />
        <input
          className="botao"
          type="submit"
          onClick={salvarMetodo}
          value="Salvar"
        />
      </form>
      {
      metodos.map((metodo, xicaras, url, i) => {
        return (

          <>
            <Card key={i} metodo={metodoEscolhido} xicaras={quantidade} url={imagemMetodo}/>
            <img src={metodo.url}/>
          </>

        );
      })}
    </div>
  );
}

export default App;
