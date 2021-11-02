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

test('testing adding movie title', async () => {
    let input = await driver.findElement(By.xpath("//input"))
    let submit = await driver.findElement(By.xpath("//button"))
    for (let i =0;i<=4;i++){    
    await input.sendKeys(`Movie title test ${i}`)
    await submit.click()
    let movieTitle = await(await driver.findElement(By.xpath(`//span[contains(text(), 'Movie title test ${i}')]`)).getText())
    expect(movieTitle).toEqual(`Movie title test ${i}`)
    }

    await driver.sleep(2000)
})
test('deleting a movie', async ()=>{
    let movieSpan = await driver.findElement(By.xpath("//span"))
    await movieSpan.click()
    await driver.sleep(2000)

    let moviebutton = await driver.findElement(By.id("Movietitletest0"))
    await moviebutton.click()
    await driver.sleep(2000)
})
test('testing the message creation', async ()=>{
    let input = await driver.findElement(By.xpath("//input"))
    let submit = await driver.findElement(By.xpath("//button"))
    for (let i =0;i<=3;i++){    
    await input.sendKeys(`Movie title test ${i}`)
    await submit.click()
    }
    
    await driver.sleep(2000)
    let movieTitles = await driver.findElements(By.xpath('//span'))
    for (let i=0;i<movieTitles.length;i++){    
            let movieTitle = await movieTitles[i].getText()
            expect(movieTitle).toEqual(`Movie title test ${i}`)
            await driver.sleep(2000)
    }
})
test(`testing watched message creation`,async ()=>{
    let buttons = await driver.findElements(By.xpath("//button[contains(text(),'x')]"))
    console.log(buttons.length)
    for (let i = buttons.length-1; i>=0;i--){
        let movieTitle = await driver.findElement(By.id(`Movietitletest${i}`))
        await movieTitle.click()
        let message = await(await driver.findElement(By.xpath('//aside'))).getText()
        expect(message).toEqual(`Movie title test ${i} deleted!`)
    }
})
test(`testing delete message creation`,async ()=>{
    let buttons = await driver.findElements(By.xpath("//button[contains(text(),'x')]"))
    console.log(buttons.length)
    for (let i = buttons.length-1; i>=0;i--){
        let moviebutton = await driver.findElement(By.xpath(`//span[contains(text(), 'Movie title test ${i}')]`))
        await moviebutton.click()
        let message = await(await driver.findElement(By.xpath('//aside'))).getText()
        expect(message).toEqual(`Movie title test ${i} watched!`)
    }
})