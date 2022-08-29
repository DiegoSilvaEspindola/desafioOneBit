import Footer from "./Footer";

const Itens = ({ nome, descricao, valor, imagem }) => {
  return (
    <div>
      <h2>Sabor: {nome}</h2>
      <p>Descrição:{descricao}</p>
      <p>Valor:{valor}</p>
      <img src={imagem} alt={nome}></img>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Itens;
