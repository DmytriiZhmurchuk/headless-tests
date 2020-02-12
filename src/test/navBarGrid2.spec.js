const playwright = require('playwright');
const chai = require('chai');
const expect = chai.expect;
const BASE_URL = 'https://sap.com';

// playwright variables
let page, browser, context
let getStyles = async function(selector, page) {
	return await page.$eval(selector, (el) => {
  	const computedStyle  = window.getComputedStyle(el);
  	return [...computedStyle].reduce( (elementStyles, property) => ({...elementStyles, [property]: computedStyle.getPropertyValue(property)}), {} )
  });
};

describe('SAP 1DX TESTS - PILOT PROJECT', () => {

    beforeEach(async () => {
        browser = await playwright['chromium'].launch({ headless: true })
        context = await browser.newContext()
        page = await context.newPage(BASE_URL);
    })

    afterEach(async function() {
        await browser.close()
    })

    it('Check Navigation Icon Bar Height', async() => {
    	await page.waitForSelector('.navigationIconBarStandard');
        let styles = await  getStyles(".navigationIconBarStandard", page);
        expect(styles.height).to.be.equal('286px');
    })
   
})