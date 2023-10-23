Feature: Pesquisar Viagem

eu como usuario desejo pesquisar passagens aéreas

Scenario: realizar pesquisa de passagens aéreas com sucesso
Given que eu esteja na pagina voos do site 123milhas
When eu preencher o campo origem
    And preencher o campo destino
    And preencher o campo data ida
    And preencher o campo data volta
    And preencher a quantidade de passageiros
    And preencher o tipo de exibicao
    And clicar no botao buscar voos
Then verifico os resultados da busca