[![Build Status](https://travis-ci.org/maikelfenner/protractor-functional-tests.svg?branch=master)](https://travis-ci.org/maikelfenner/protractor-functional-tests)

##Testes funcionais com protractor.

Site testado: https://www.saucedemo.com/

**#01 - Login com usuário ou senha inválido**  
DADO que o usuário deseja acessar o site para realizar compras  
QUANDO digitar usuário e senha inválidos, ao pressionar “login"  
ENTÃO deve ser exibida uma mensagem de erro informando que o usuário ou senha informados são inválidos.  


**#02 - Login com usuário e senha válidos**  
DADO que o usuário deseja acessar o site para realizar compras  
QUANDO digitar usuário e senha válidos, ao pressionar “login"  
ENTÃO deve ser direcionado para a página de produtos para que possa realizar suas compras.  


**#03 - Visualizar detalhes de produto**  
DADO que o usuário deseja visualizar mais informações sobre o produto  
QUANDO clicar sobre a imagem do produto desejado  
ENTÃO deve ser direcionado para a página com imagem ampliada do produto e informações sobre ele.  


**#04 - Voltar para listagem de produtos**  
DADO que o usuário não se interessou pelo produto que acessou  
QUANDO clicar no botão de voltar  
ENTÃO deve ser direcionado à lista de produtos.  


**#05 - Adicionar produto para o carrinho**  
DADO que o usuário deseja adicionar um produto ao carrinho de compras
QUANDO acessar um produto e clicar no botão de adicionar ao carrinho  
ENTÃO o produto será acrescentado ao carrinho de compras  


**#06 - Remover produto do carrinho de compras**  
DADO que o usuário deseja remover do carrinho um produto já adicionado  
QUANDO acessar o produto selecionado e clicar no botão de remover  
ENTÃO o produto será removido do carrinho de compras  


**#07 - Ver produtos no carrinho de compras - vazio**  
DADO que o usuário deseja visualizar os itens acrescentados ao carrinho de compras  
QUANDO clicar no botão com a imagem de um carrinho de compras  
ENTÃO deve ser direcionado à página com a listagem de produtos adicionados ao carrinho de compras.  


**#08 - Continuar comprando**  
DADO que o usuário deseja adicionar mais produtos ao carrinho;
QUANDO clicar no botão de continuar comprando
ENTÃO deve ser direcionado à página de listagem de produtos.  


**#09 - Ver produtos no carrinho de compras - com produtos**  
DADO que o usuário deseja visualizar os itens acrescentados ao carrinho de compras  
QUANDO clicar no botão com a imagem de um carrinho de compras  
ENTÃO deve ser direcionado à página com a listagem de produtos adicionados ao carrinho de compras.  


**#10 - Proceder para pagamento da compra**  
DADO que o usuário deseja prosseguir para o pagamento  
QUANDO clicar no botão de checkout  
ENTÃO deve ser direcionado à página para finalização da compra.  


**#11 - Pagamento da compra sem informa código postal**  
DADO que o usuário deseje finalizar a compra sem informar o código postal  
QUANDO clicar no botão de continuar  
ENTÃO deve ser exibida uma mensagem de erro informando que o código posta é requerido.  


**#12 - Pagamento da compra com dados válidos**  
DADO que o informe todos os campos necessários para finalizar compra  
QUANDO clicar no botão de continuar  
ENTÃO deve ser exibida a página com os dados de pagamento da compra.    


**#13 - Finalizar compra**  
DADO que o usuário deseje confirmar o pagamento para finalizar a compra  
QUANDO clicar no botão de finalizar  
ENTÃO deve ser direcionado à página de confirmação do pedido.  
