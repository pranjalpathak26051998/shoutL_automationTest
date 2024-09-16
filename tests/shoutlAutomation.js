const {Builder, By, Browser, value } = require('selenium-webdriver');
require('dotenv').config();
(async function shoutlAuto(){

let driver = await new Builder().forBrowser(Browser.CHROME).build();
console.log("Sucessfully created an INSTANCE for the browser");
try {
    //visit the website...
    let website_url = 'https://dev-app.shoutl.com/';
    await driver.get(website_url);
    console.log("Successfully visited the website");
    //finding and entering the username
    let dev_email= 'pranjal.p+onDev@paytunes.in';
    await driver.findElement(By.id('email')).sendKeys(dev_email);
    await driver.sleep(2000);
    console.log("entered email successfully");
    //finding and entering the password
    let dev_password='User@123';
    await driver.findElement(By.id('password')).sendKeys(dev_password);
    await driver.sleep(2000);
    console.log("entered the password successfully ");
    //finding the signin button and clicking it
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
    await driver.sleep(10000);
    console.log("Successfully signed in");
    // Closing the profile page
    let profile_close_xpath = "//div[@class='relative bg-white w-full max-w-md md:max-w-[1000px] rounded-lg shadow-lg overflow-y-auto max-h-[90vh]']/span[1]"
    await driver.findElement(By.xpath(profile_close_xpath)).click();
    console.log("profile preview closed");
    await driver.sleep(1000);
    //finding the ad Manager and clicking on it
    await driver.findElement(By.xpath("//a[@href='/ad-manager']")).click();
    await driver.sleep(10000);
    console.log("Successfully clicked on the Ad Manager and reached Ad Creater Page");
    //clicking on the create audio button 
    let audio_create_btn_xpath = "(//*[@id='root']//div[1]/div/div[2]/section/div/div/ul/li/div/a[@href='/ad-manager/audios-list'])[1]";  //--> for first indexing
    // OR 
    // let audio_create_btn_xpath = "(//*[@id='root']//div[1]/div/div[2]/section/div/div/ul/li/div/a[@href='/ad-manager/audios-list'])[last()]"; --> for last indexing
    await driver.findElement(By.xpath(audio_create_btn_xpath)).click();
    console.log("Successfully clicked on the create audio button");
    await driver.sleep(2000);

    //Testing the Parts Creative Sets , Audios and Banners is present
    let CreativeSetsTest= await driver.findElement(By.xpath("//h2[text()='Creative Sets']"));
    let textHead1 = CreativeSetsTest.getText();
    console.log("The first Part is "+textHead1 +"Tested successfullt");
    
} catch (error) {
    console.log(error.message);
}
finally{
    await driver.quit();
}

})();
