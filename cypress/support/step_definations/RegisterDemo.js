/// <reference types="cypress" />

const RegisterPages = require ('../pages/register.pages')

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
//import register from "../../../support/pages/RegisterPages";

Given("Eu esteja na pagina register",()=>{
    RegisterPages.acessarSite();
});
