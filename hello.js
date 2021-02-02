#!/usr/bin/env node
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function hello() {
	let driver = await new Builder()
	    	    .forBrowser('firefox').build();
	await driver.get('https://www.google.com/');
	await driver.findElement(By.id('gsr')).click();
	await driver.findElement(By.name('q')).sendKeys('devops',Key.RETURN);
})();
