class NegociacaoService {

    obterNegociacoesDaSemana() {

        let xhr = new XMLHttpRequest();

      /* configurações */
      xhr.open('GET', 'negociacoes/semana');

      xhr.onreadystatechange = () => {
/* 
    0: requisição ainda não iniciada

    1: conexão com o servidor estabelecida

    2: requisição recebida

    3: processando requisição

    4: requisição está concluída e a resposta está pronta

*/
        if (xhr.readyState == 4) {
          
          if (xhr.status == 200) {
            
            JSON.parse(xhr.responseText)
              .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

          } else {
            console.log(xhr.responseText);
            
          }
        }
      }
      
      /* executa */
      xhr.send();
    }
}