
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('https://devopsassessment-nl.herokuapp.com/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test(`draw populates bots`,async ()=>{
    const draw = await driver.findElement(By.id(`draw`))
    draw.click()
    await driver.sleep(500)
    const hand = await (await driver.findElement(By.id('choices'))).isDisplayed()
    expect(hand).toEqual(true)
})

test(`selected bot enters player choice`, async ()=>{
    const draw = await driver.findElement(By.id(`draw`))
    draw.click()
    await driver.sleep(500)
    const botCard=await driver.findElements(By.className(`bot-card outline`))
    let botText = await botCard[0].getText()
    const addButton = await driver.findElements(By.xpath(`//button[contains(@class,'bot-btn')]`))
    await driver.sleep(500)
    addButton[0].click()
    await driver.sleep(500)
    const addedBot = await(await driver.findElement(By.xpath(`//div[contains(@id, 'player-duo')]/div/h3`))).getText()
    expect(botText).toContain(addedBot)
})