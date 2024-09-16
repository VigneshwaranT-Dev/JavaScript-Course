//#region Task - 1: To Print the key and that values (e.g Object has two fruits and that values are their counts, to print that fruits with how many counts)
    // // create 1 object and give values of fruits as a key and count as it's counts
    // let fruits = {
    //     apple: 25,
    //     orange: 50,
    //     pomogranade: 30,
    //     mosambi: 100
    // }

    // // we use Object.keys() it can take to the keys seperately from the object.
    // // we use foreach(()=> {}) to take the object keys one by one from that object.
    // Object.keys(fruits).forEach((key) => {
    //     // we use console.log() because of to print the output values in console.
    //     console.log(`I have ${fruits[key]} ${key} fruits`);
    // })
//#endregion

//#region Task - 2: Reverse an Array
    // // Solution 1 - Using reverse() method.
    //     let numArray = [1, 2, 3, 4, 5]
    //     let reversedNumArray = numArray.reverse();

    //     // we use console.log() because of to print the output values in console.
    //     console.log(reversedNumArray);

    // Solution 2 - Using for() loop to save values in different array.
    //     let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    //     let reversedVowelsArray = [];

    //     for(i=0; i<vowelsArray.length; i++){
    //         arrayLastValue = vowelsArray[vowelsArray.length - 1 - i];
    //         reversedVowelsArray.push(arrayLastValue);
    //     }

    //     console.log(reversedVowelsArray);

    // // Solution 3 - Using for() loop to save values in Same array.
    //     let nameArray = ['Vignesh', 'Laura', 'Natasha', 'Margaret', 'Ronald'];
    //     let tempArray;

    //     for(i=0; i<nameArray.length/2; i++){
    //         tempArray = nameArray[i]
    //         nameArray[i] = nameArray[nameArray.length - 1 - i];
    //         nameArray[nameArray.length - 1 - i] = tempArray;
    //     }

    //     console.log(nameArray);
//#endregion

//#region Task - 3: Reverse a String value
    // let stringValue = 'Lets reverse this text';

    // let reversedText = [...stringValue].reverse().join('');

    // console.log(reversedText);
    
//#endregion

//#region Task - 4: Find Vowels in a sentence.
    // let name = 'Vigneshwaran';
    // let Vowels = ['a', 'e', 'i', 'o', 'u'];
    // let VowelsCount = 0;
    // let nameSplit = name.split('');

    // for(i=0; i<name.length; i++) {
    //     Vowels.forEach((vowel) => {
    //         nameSplit[i] === vowel ? VowelsCount++ : VowelsCount
    //     })
    // }

    // console.log(VowelsCount);
//#endregion

//#region Task - 4: Show Cart Quantity
    let cartQuantity = 0;

    function showQuantityFn() {
        document.getElementById("cartQuantity").innerHTML = `Cart Quantity: ${cartQuantity}`;
    }

    function showQuantity() {
        this.showQuantityFn();
    }

    function addToCart() {
        if(cartQuantity < 10){
            cartQuantity++;
        } else {
            alert('The cart is Full')
        }
        this.showQuantityFn();
    }

    function add2Quantity() {
        if(cartQuantity < 10){
            cartQuantity += 2;
        } else {
            alert('The cart is Full')
        }
        this.showQuantityFn();
    }

    function add3Quantity() {
        if(cartQuantity < 10){
            cartQuantity += 3;
        } else {
            alert('The cart is Full')
        }
        
        this.showQuantityFn();
    }

    function add4Quantity() {
        if(cartQuantity < 10){
            cartQuantity += 4;
        } else {
            alert('The cart is Full')
        }
        
        this.showQuantityFn();
    }

    function add5Quantity() {
        if(cartQuantity < 10){
            cartQuantity += 5;
        } else {
            alert('The cart is Full')
        }
        
        this.showQuantityFn();  
    }

    function resetCart() {
        cartQuantity = 0;
        this.showQuantityFn();
    }

    function hideQuantity() {
        document.getElementById("cartQuantity").innerHTML = '';
    }

    function remove2Quantity() {
        cartQuantity > 2 ? cartQuantity -= 2 : cartQuantity <= 1 ? cartQuantity = 0 : cartQuantity = 0
        this.showQuantityFn();
    }

    function remove3Quantity() {
        cartQuantity > 3 ? cartQuantity -= 3 : cartQuantity <= 2 ? cartQuantity = 0 : cartQuantity = 0
        this.showQuantityFn();
    }

    const removeFromCart = () => {
        cartQuantity > 0 ? cartQuantity-- : 0
        this.showQuantityFn();
    }


//#endregion