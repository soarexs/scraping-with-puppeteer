const puppeteer = require('puppeteer')
const { promisify } = require('util')
const fs = require("fs")

const BASE_URL = "https://www.netmovies.com.br/"
const scraping = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    const data = await page.evaluate(() => {
        const cardsImgs = [...document.querySelectorAll(".styles_cover__2tUW8")]

        const srcImgs = cardsImgs.map(({src}) => ({
            src: src
        }))
        return srcImgs
    });

    await promisify(fs.writeFile)('scrapped.json', JSON.stringify(data, null, 2), err => {
        if(err) throw new Error('there was an error')
    })
    
    await browser.close()
}
scraping()