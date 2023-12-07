 const km = document.getElementById('km');
 console.log('km', km,typeof km);

 const age = document.getElementById('age');
 console.log('age', age,typeof age);

 const calcButton = document.getElementById('calc-button');
 console.log('calcButton', calcButton,typeof calcButton);

 calcButton.addEventListener('click', function() {

    const kmInNumber = parseInt(km.value);
    const ageInNumber = parseInt(age.value);

    if(ageInNumber < 18){
        const price = (kmInNumber * 0.21);
        console.log('price', price, typeof price);
    
        const discountedPrice = price - ((price/100) * 20);
        console.log('discountedPrice',discountedPrice, typeof discountedPrice);
        
        document.writeln('Ilprezzo del biglietto è' + discountedPrice.toFixed(2));
    
    }
    
     else if(ageInNumber > 65){
        const price = (kmInNumber * 0.21);
        console.log('price', price, typeof price);
    
        const discountedPrice = price - ((price/100) * 40);
        console.log('discountedPrice',discountedPrice, typeof discountedPrice);
        
        document.writeln('Ilprezzo del biglietto è' + discountedPrice.toFixed(2));
    }
    
    else {
        const price = (kmInNumber * 0.21);
        console.log('price', price, typeof price);
        
        document.writeln('Ilprezzo del biglietto è' + price.toFixed(2));
    }
 })