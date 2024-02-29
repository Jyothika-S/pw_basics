import { ElementHandle, Page } from "@playwright/test";

export class LoginPage {
    page: Page; //Page - a single browser tab or window
    username_textbox: ElementHandle; //ElementHandle - reference to a specific element on a web page
    password_textbox: ElementHandle;
    login_button: ElementHandle;

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }

    //actions or methods
    //either seperate fns for entering username & password, and login click
    //or as a single login fn 

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, password: string){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }  
}