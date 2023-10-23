
const VoosElements = require('../elements/voos.elements')

export default class VoosPages{
    static acessarSite(){
        cy.visit('/')

    }

    static validaLogo(){
        return VoosElements.logo().should('be.visible')
    }

    static campoOrigem(){
        return VoosElements.campoOrigem().click().type(`${dados.origem}`)
    }

    static campoDestino(){
        return VoosElements.campoDestino().click().type(`${dados.destino}`)
    }

    static dataIda(){
        return VoosElements.dataIda().click().type(`${dados.dataIda}`)
    }

    static dataVolta(){
        return VoosElements.dataVolta().click().type(`${dados.dataVolta}`)
    }

    static passageiros(){
        return VoosElements.passageiros().click()
    }


    static exibiReais(){
        return VoosElements.exibiReais().click()
    }

    static exibiPontos(){
        return VoosElements.exibiPontos().click()
    }

    static botaoBuscar(){
        return VoosElements.botaoBuscar().click()
    }

   /* static menssagem(){
        return VoosElements.menssagem()
    }*/
    
}