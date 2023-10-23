/// <reference types="cypress" />

const VoosPages = require ('../pages/voos.pages')

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
//import register from "../pages/register.pages";

Given("que eu esteja na pagina voos do site 123milhas",()=>{
    VoosPages.acessarSite()
    cy.wait(60000)
    VoosPages.validaLogo()
})

When("eu preencher o campo origem",()=>{

    VoosPages.campoOrigem()
})

And("preencher o campo destino",()=>{
    VoosPages.CampoDestino()
})

And("preencher o campo data ida",()=>{
    VoosPages.dataIda()
})

And("preencher o campo data volta",()=>{
    VoosPages.dataVolta()
})

And("preencher a quantidade de passageiros",()=>{
    VoosPages.passageiros()
})

And("preencher o tipo de exibicao",()=>{
    VoosPages.exibiReais()
})

And("clicar no botao buscar voos",()=>{
    VoosPages.botaoBuscar()
})

Then("verifico os resultados da busca",()=>{

})
