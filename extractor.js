const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
strikes = 0;
startExtract();

function startExtract() {
	new Promise((resolve, reject) => {
		rl.question('Enter HTML Embed\n', (inputEmbed) => {
			let httpsPos = inputEmbed.indexOf('https://');
			if (httpsPos > 0) {
				console.log(
					inputEmbed.substring(
						httpsPos,
						inputEmbed.substring(httpsPos).indexOf('"') + httpsPos,
					),
				);
				strikes = 0;
			} else {
				strikes++;
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
