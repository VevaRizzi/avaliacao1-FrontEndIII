function CardCafe(props) {
  return (
    <div className="card-container">
      {/* <h1>{props.metodo.metodoEscolhido}</h1> */}
      <h2>Método escolhido: {props.metodo.metodoEscolhido}</h2>
      <h3>Quantidade de Xícaras: {props.metodo.quantidade}</h3>
      <img src={props.imagemMetodo} width={300} height={500} />
    </div>
  );
}

export default CardCafe
