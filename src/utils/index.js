module.exports.getComputedStyles = async function (selector, page) {
	return await page.$eval(selector, (el) => {
  		const computedStyle  = window.getComputedStyle(el);
  		return [...computedStyle].reduce( (elementStyles, property) => ({...elementStyles, [property]: computedStyle.getPropertyValue(property)}), {} )
  	});
};
