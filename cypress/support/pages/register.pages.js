

export default class RegisterPages{
    static acessarSite(){
        cy.visit('/').then(()=>{
            cy.url()
        })
    }
}