import App from "./App";


const CardCafe = (props) => {

  return (
      <div>
        <h1>{props.metodoEscolhido}</h1>
        {/* <h2>{props.quantidade}</h2> */}
        <select>{props.metodoEscolhido}</select>
        <input>{props.quantidade}</input>
        <img src = {props.imagemMetodo} width = {300} height={500}/>
      </div>
  )
  };


  export default CardCafe;