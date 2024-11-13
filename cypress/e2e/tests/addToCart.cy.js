
import { Homepage } from "../../pages/Homepage";
const homePageObj = new Homepage();
import testData from "../../fixtures/testData01.json"
//import { before } from "lodash";
// Test 01

describe("Add to cart flow",()=>{

    before(()=>{

        cy.login(testData.login.username, testData.login.password)
        
    })

    it("add to cart",()=>{

        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain',testData.message.SucessMessage)

    })
})