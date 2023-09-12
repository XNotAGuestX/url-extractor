// const readline = require('readline');
// const clipboardy = require('clipboardy');
import readline from 'readline';
import clipboardy from 'clipboardy';
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let strikes = 0;
console.clear();
startExtract();

function startExtract() {
	new Promise((resolve, reject) => {
		rl.question('Enter HTML Embed\n', (inputEmbed) => {
			let httpsPos = inputEmbed.indexOf('https://');
			if (httpsPos > -1) {
				let result;
				console.clear();
				if (inputEmbed.includes('"')) {
					result = inputEmbed
						.substring(
							httpsPos,
							inputEmbed.substring(httpsPos).indexOf('"') + httpsPos,
						)
						.replace('/100/', '/800/');
				} else {
					result = inputEmbed.replace('?size=1x', '?size=8x');
				}
				console.log(result);
				clipboardy.write(result);
				console.log('Copied to clipboard');
				strikes = 0;
			} else {
				strikes++;
				console.log(httpsPos);
				console.log('Strike ' + strikes);
				if (strikes >= 2) reject('bruh');
			}
			resolve('bruh');
		});
	})
		.then(() => {
			startExtract();
		})
		.catch((err) => {
			rl.close();
			console.log(err);
			console.log('invalid embed - leaving');
		});
}
