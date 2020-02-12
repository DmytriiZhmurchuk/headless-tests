const playwright = require('playwright');
const chai = require('chai');
const utils = require('../utils');
const expect = chai.expect;
const BASE_URL = 'https://sap.com';
const SELECTORS = {
    root: '.navigation-icon-bar-standard',
    navitem: '.navigation-icon-bar-standard .navbar-item-icon-link',
    navBarTitle: '.navigation-icon-bar-standard .navbar-item-title' 
};

// playwright variables
let page, browser, context, getStyles;

describe('SAP 1DX TESTS - Navigation Icon Bar Standard', () => {
    before(async () => {
        browser = await playwright['chromium'].launch({ headless: true });
        context = await browser.newContext();
        page = await context.newPage(BASE_URL);
    })

    after(async function() {
        await browser.close()
    })

    it('Check Navigation Icon Bar main container', async() => {
        let styles = await utils.getComputedStyles(SELECTORS.root, page);
        expect(styles["background-color"]).to.be.equal('rgb(34, 34, 34)');
        expect(styles["padding-top"]).to.be.equal('65px');
        expect(styles["padding-bottom"]).to.be.equal('65px');
    })
    it('Check Navigation Icon Bar Nav Item', async() => {
        let styles = await utils.getComputedStyles(SELECTORS.navitem, page);
        expect(styles["padding-top"]).to.be.equal('5px');
        expect(styles["font-size"]).to.be.equal('16px');
        expect(styles["font-family"]).to.be.equal('SAPRegular, Arial, Helvetica, sans-serif');
    })
    it('Check Navigation Icon Bar Icon Title', async() => {
        let styles = await utils.getComputedStyles(SELECTORS.navBarTitle, page);
        expect(styles["color"]).to.be.equal('rgb(255, 255, 255)');
    })
})