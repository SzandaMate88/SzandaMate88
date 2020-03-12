export{};
let koz = ''
let csil = '*'
let lineCount = 4

for (let i = 1; i <= lineCount; i++) {
	for (let j = 1; lineCount - i >= j; j++) {
		koz=koz.concat(' ')
	}
	console.log(koz + csil)

	koz = ''
	csil += '**'
}

let csil2 =''
let starLength = csil.length-4

for (let p = lineCount-1; p > 0; p--) {
	for (let b= starLength;b > 0; b--) {
		csil2=csil2.concat('*')
	}
	koz+= ' '
	
	console.log(koz + csil2)

	csil2=''
	starLength-=2
}

