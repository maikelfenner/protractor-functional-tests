[![Build Status](https://travis-ci.org/maikelfenner/protractor-functional-tests.svg?branch=master)](https://travis-ci.org/maikelfenner/protractor-functional-tests)

**#01 - Login com usuário ou senha inválido**
DADO que o usuário deseja acessar o site para realizar compras
QUANDO digitar usuário e senha inválidos, ao pressionar “login"
ENTÃO deve ser exibida uma mensagem de erro informando que o usuário ou senha informados são inválidos.

**#02 - Login com usuário e senha válidos**
DADO que o usuário deseja acessar o site para realizar compras
QUANDO digitar usuário e senha válidos, ao pressionar “login"
ENTÃO deve ser direcionado para a tela de produtos para que possa realizar suas compras.