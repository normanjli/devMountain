import { Builder, Capabilities, WebDriver, By } from "selenium-webdriver"
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/labs/automation/movieList/index.html')
    // await driver.sleep(5000)
})

afterAll(async ()=>{
    await driver.quit()
})

// test('testing adding movie title', async () => {
//     let input = await driver.findElement(By.xpath("//input"))
//     let submit = await driver.findElement(By.xpath("//button"))
//     for (let i =0;i<=0;i++){    
//     await input.sendKeys(`Movie title test ${i}`)
//     await submit.click()
//     }

//     await driver.sleep(2000)
// })
// test('deleting a movie', async ()=>{
//     let movieSpan = await driver.findElement(By.xpath("//span"))
//     await movieSpan.click()
//     await driver.sleep(2000)

//     let moviebutton = await driver.findElement(By.id("Movietitletest0"))
//     await moviebutton.click()
//     await driver.sleep(2000)
// })
test('testing the message creation', async ()=>{
    let input = await driver.findElement(By.xpath("//input"))
    let submit = await driver.findElement(By.xpath("//button"))
    for (let i =0;i<=0;i++){    
    await input.sendKeys(`Movie title test ${i}`)
    await submit.click()
    }
    let message:String = await driver.findElement(By.xpath('//aside')).getText()
    console.log(message)
})