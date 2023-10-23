export default class RegisterElements{


    static logo(){
        return cy.get('.styles__HeaderLogo-sc-1iy4jor-4 > span > img')
    }

    static campoOrigem(){
        return cy.get('.styles__InvertValuesWrapper-sc-1ommosc-0 > :nth-child(2) > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input')
    }

    static campoDestino(){
        return cy.get(':nth-child(5) > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input')
    }

    static dataIda(){
        return cy.get('#datepicker-ida')
    }

    static dataVolta(){
        return cy.get('#datepicker-volta')
    }

    static passageiros(){
        return cy.get('.styles__StyledFormControl-sc-1xwl39-1 > .MuiFormControl-root > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input')
    }
  
    static exibiReais(){
        return cy.get('.iOCHIf > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss6')
    }

    static exibiPontos(){
        return cy.get('.iOCHIf > .MuiFormGroup-root > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss6')
    }

    static botaoBuscar(){
        return cy.get('.styles__ButtonWrapper-sc-1ommosc-1 > .MuiButtonBase-root > .MuiButton-label > .styles__StyledText-sc-jikqhn-0')
    }

   /* static menssagem(){
        return cy.get('.styles__PopupBody-sc-samcz2-1')
    }*/
}