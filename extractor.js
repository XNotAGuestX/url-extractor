const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
strikes = 0;
console.clear();
startExtract();

function startExtract() {
	new Promise((resolve, reject) => {
		rl.question('Enter HTML Embed\n', (inputEmbed) => {
			let httpsPos = inputEmbed.indexOf('https://');
			if (httpsPos > -1) {
				console.clear();
				if (inputEmbed.includes('"')) {
					console.log(
						inputEmbed
							.substring(
								httpsPos,
								inputEmbed.substring(httpsPos).indexOf('"') + httpsPos,
							)
							.replace('/100/', '/800/'),
					);
				} else {
					console.log(inputEmbed.replace('?size=1x', '?size=4x'));
				}
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
