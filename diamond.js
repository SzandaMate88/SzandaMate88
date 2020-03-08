let koz = ''
let csil = '*'
let lineCount = 4


for (let i = 1; i <= lineCount; i++) {
	for (let j = 1; lineCount - i >= j; j++) {
		koz += ' '




	}
	console.log(koz + csil)
	koz = ''
	csil += '**'
}

/* console.log(koz.length, csil.length)

console.log('line count :',lineCount ) */
//köz=0
//csill=9
//lineCount=4

let csil2 = '*'
for (let p = lineCount - 1; p >= 0; p--) {
	for (let b = lineCount - 1; b >= 0; b--) {
		if (b % 2 !== 0) {
			csil += "*"
		}
	}
	console.log(koz + csil)
	koz+= ' '
}

console.log(koz.length, csil.length)

console.log('line count :', lineCount)
