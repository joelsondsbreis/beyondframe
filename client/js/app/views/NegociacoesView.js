class NegociacoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {

        return  `
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                        ).join('')}
                </tbody>        
                <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
                </tfoot>
            </table>    
        `;
    }
}
/*sem Reduce seria dessa maneira:
                    ${
                        (function() {
                
                            let total = 0;
                            model.negociacoes.forEach(n => total+= n.volume);
                            return total;
                      })()
                     }
 Ou dessa maneira usando o paradigma funcional:
                    ${model.negociacoes.reduce(function(total, n) {
               return total + n.volume;
         }, 0.0)
        }                    
                    */
