import { visible } from "ansi-colors"

export class Homepage{

    weblocators = {

        search_input:'.form-control.input-lg',
        click_search:'.btn.btn-default.btn-lg',
        product:'a[href="https://naveenautomationlabs.com/opencart/image/cache/catalog/demo/macbook_1-228x228.jpg"]',
        addtocart:'[onclick="cart.add(\'43\', \'1\');"]',
        sucessMessage:'.alert.alert-success.alert-dismissible'
        
    }

    searchProduct(productName){

        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }
    addToCart(){

        cy.get(this.weblocators.addtocart).click()
        //cy.findByText(this.weblocators.addtocart).first().click()
    }
    verifySucessMessage(){

        //return cy.findByText(this.weblocators.sucessMessage)
       return cy.get(this.weblocators.sucessMessage)
    }
}