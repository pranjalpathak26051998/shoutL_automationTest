const { Builder, Browser, By, value } = require('selenium-webdriver');
const mocha = require('mocha');
require('dotenv').config();

describe('ShoutL Login Unit Testing', () => {
    let driver;
    let website_url = 'https://dev-app.shoutl.com/';
    before(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        console.log("Driver accessed successfully");

    });
    after(async function () {
        await driver.quit();
        console.log("Closed webDriver instance...");
    });
    //loading the dev server
    it('Load the shoutL website', async function () {
        //dev server
        await driver.get(website_url);
        console.log(`Website fetched successfully`);
    });
    //entering the username/email
    it('Enter the email ', async function () {
        let dev_email = process.env.dev_email;
        await driver.findElement(By.id('email')).sendKeys(dev_email);
        await driver.sleep(2000);
        console.log("entered email successfully");
    });
    // entering the password
    it('Enter the password ', async function () {
        let dev_password = process.env.dev_password;
        await driver.findElement(By.id('password')).sendKeys(dev_password);
        await driver.sleep(2000);
        console.log("entered the password successfully ");
    });
    //finding the signin button and clicking it
    it('clicking on the sign in button',async function(){
        //finding the signin button and clicking it
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
    await driver.sleep(5000);
    console.log("Successfully signed in")
    });

}).timeout(60000);


