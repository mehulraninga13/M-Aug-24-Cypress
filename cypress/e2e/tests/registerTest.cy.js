
import { registerPage } from "../../pages/registerPage"
const regesterObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe('test automation', ()=>{


    it('register flow',()=>{
        regesterObj.openURL()
        regesterObj.enterFirstName(registerData.firstName)
        regesterObj.enterLastName(registerData.lastName)
        regesterObj.enterEmail(registerData.email)
        regesterObj.enterTelephone(registerData.telephone)
        regesterObj.enterPassword(registerData.password)
        regesterObj.selectCheckbox()
        regesterObj.clickOnContinue()

    })
})