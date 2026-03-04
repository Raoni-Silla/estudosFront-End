function fazerPedido(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return reject(new Error("encontramos um erro"));
      }
      if (item === "pizza") {
        pedido = { prato: "Pizza", preco: 50 };
        return resolve(pedido);
      }
      return reject("não temos esse prato no cardápio");
    }, 1000);
  });
}

function processarPagamento(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return reject(new Error("encontramos um erro"));
      }
      if (valor <= 100) {
        return resolve("Pagamento aprovado");
      }

      return reject("Saldo insuficiente");
    }, 1000);
  });
}

function enviarEntregador() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return reject(new Error("encontramos um erro"));
      }
      return resolve("O entregador saiu para entrega!");
    }, 1000);
  });
}

const fluxoPedido = async () => {
  try {
    const pedido = await fazerPedido("pizza");
    console.log("Pedido feito: ", pedido.prato);
    const pagamento = await processarPagamento(pedido.preco);
    console.log(pagamento);
    const entregador = await enviarEntregador();
  } catch (erro) {
    console.log("ERRO NO PROCESSO:", erro.message);
  }
};
