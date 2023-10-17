Feature: Registrar Usuario

eu como usuario desejo poder realizar o registro no site Automation Demo Site

Scenario: realizar registro com sucesso
Given que eu esteja na pagina register do site Automation Demo Site
When eu preencher o campo full name
    And preencher o campo email address
    And preencher o campo phone
    And preencher o campo gender
    And preencher o campo country
    And preencher os demais campos
    And submeter a foto
    And clico no botao submit
Then verifico a mensagem de bem vindo do usuario