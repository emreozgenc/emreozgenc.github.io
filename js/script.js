var typeIndex = 0;
const typeText = 'Alanıma hoşgeldiniz...';

const typeFunction = () => {

    if(typeIndex < typeText.length) {
        document.getElementById('title-2').innerHTML += typeText.charAt(typeIndex);
        typeIndex++;

        setTimeout(typeFunction, 75);
    }

}

setTimeout(typeFunction, 1000);