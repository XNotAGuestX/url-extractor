const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
startExtract();
function startExtract() {
	new Promise((resolve, reject) => {
		rl.question('Enter HTML Embed\n', (inputEmbed) => {
			let httpsPos = inputEmbed.indexOf('https://');
			console.log(httpsPos);
			if (httpsPos > 0) {
				console.log(
					inputEmbed.substring(
						httpsPos,
						inputEmbed.substring(httpsPos).indexOf('"') + httpsPos,
					),
				);
			} else {
				reject('bruh');
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
