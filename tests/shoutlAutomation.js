const {Builder, By, Browser, value } = require('selenium-webdriver');
require('dotenv').config();
(async function shoutlAuto(){

let driver = await new Builder().forBrowser(Browser.CHROME).build();
console.log("Sucessfully created an INSTANCE for the browser")
try {
    //visit the website...
    let website_url = 'https://dev-app.shoutl.com/';
    await driver.get(website_url);
    console.log("Successfully visited the website");
    //finding and entering the username
    let dev_email= 'pranjal.p+onDev@paytunes.in';
    await driver.findElement(By.id('email')).sendKeys(dev_email);
    await driver.sleep(2000)
    console.log("entered email successfully");
    //finding and entering the password
    let dev_password='User@123';
    await driver.findElement(By.id('password')).sendKeys(dev_password);
    await driver.sleep(2000);
    console.log("entered the password successfully ");
    //finding the signin button and clicking it
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
    await driver.sleep(5000);
    console.log("Successfully signed in")
    //finding the ad Manager and clicking on it
    await driver.findElement(By.xpath("//a[@href='/ad-manager']")).click();
    await driver.sleep(10000);
    console.log("Successfully clicked on the Ad Manager and reached Ad Creater Page");
    //Testing the Parts Creative Sets , Audios and Banners is present
    let CreativeSetsTest= await driver.findElement(By.xpath("//h2[text()='Creative Sets']"))
    let textHead1 = CreativeSetsTest.getText();
    console.log("The first Part is "+textHead1 +"Tested successfullt");
    
} catch (error) {
    console.log(error.message)
}
finally{
    await driver.quit();
}

})();
