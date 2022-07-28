import { DiasDaSemana } from "../utils/enums/diasDaSemana.js";
import { Negociação } from "../models/Negociação.js"
import { Negociações } from "../models/Negociações.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociaçõesView } from "../views/NegociaçõesView.js";
import { DOMInjector } from "../utils/decorators/DOMInject.js";
import { NegociaçõesService } from "../service/negociaçõesService.js";
import { Imprimir } from "../utils/interfaces/imprimir.js";
import { NegociaçõesLS } from "../service/NegociaçõesLS.js";

export class NegociaçãoController {
    @DOMInjector('#data')
    private dataInput: HTMLInputElement
    @DOMInjector('#quantidade')
    private quantidadeInput: HTMLInputElement
    @DOMInjector('#valor')
    private valorInput: HTMLInputElement

    private listaNegociações = new Negociações();
    private negociaçõesView = new NegociaçõesView('#viewNegociações')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {

        this.importaLS()
    }
  
    public adicionar(): void {

          let negociação = Negociação.criaDe(
                this.dataInput.value, 
                this.quantidadeInput.value, 
                this.valorInput.value)
 
        if(!this.ehDiaÚtil(negociação.data)){

            this.mensagemView.update(`Só é possível incluir negociações em dias úteis.`)
            return
        }
        
        Imprimir(this.listaNegociações, negociação)


        this.afterAdd(negociação)
    }

    public importa(): void {

        NegociaçõesService.obterNegociações()
        .then(negociaçõesDeHoje => {
            return negociaçõesDeHoje.filter( negociaçãoDoDia => {
                return !this.listaNegociações
                     .lista()
                     .some( negociação=> negociação
                        .ehIgual(negociaçãoDoDia)
                     )
                })
             })
        .then(negociaçõesDeHoje => {
            for (let negociação of negociaçõesDeHoje) {
                this.listaNegociações.adicionar(negociação)
                this.negociaçõesView.update(this.listaNegociações)
            }
        })
        .catch( err => console.log('Não foi possível fazer o API Rest. Você subiu o servido da pasta "servido-api" ?')
        )
    }

    public apagar(): void  {

        this.listaNegociações.apagar()
        this.negociaçõesView.update(this.listaNegociações)
        NegociaçõesService.apagarNegociações()
    }

    private importaLS():void {

        NegociaçõesService.obterNegociaçõesLS()
        .forEach( negociação =>  this.listaNegociações.adicionar(negociação))
        
        this.negociaçõesView.update(this.listaNegociações)
    }

    private ehDiaÚtil(data: Date): boolean {

        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO
    }

    private limparFormulário(): void {

        this.dataInput.value = ''
        this.quantidadeInput.value = ''
        this.valorInput.value = ''

        this.dataInput.focus()
    }

    private atualizarView(): void {
        
        this.negociaçõesView.update(this.listaNegociações) 
        this.mensagemView.update(`Negociações adicionadas com sucesso.`)
    }

    private afterAdd(negociação: Negociação): void {

            this.listaNegociações.adicionar(negociação);
            NegociaçõesLS.adicionandoNegociação(negociação)
            this.atualizarView()  
            this.limparFormulário() 
    }
}