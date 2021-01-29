//Global currentCatTax variable
let currentCatTax = 0;
const amountOwed = document.getElementById('amountOwed');
const payCatTaxButton = document.getElementsByClassName('payBtn')[0];
const amountOwedDiv = document.getElementById('amountOwed');
const imageUrl = 'https://api.thecatapi.com/v1/images/search';
const imageContainer = document.getElementsByClassName('imageContainer')[0];
const gif = 'https://gfycat.com/snivelingbeautifuljoey';
const container = document.getElementsByClassName('container')[0];

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
  const rand = Math.floor(Math.random() * 21);
  currentCatTax = rand;
  if (currentCatTax == 0) {
    payCatTaxButton.classList.add('d-none');
  }
  //Change to update both a with no matter what
  if (currentCatTax != 0) {
    amountOwed.textContent = `You owe ${currentCatTax} cat tax! Pay up!`;
    payCatTaxButton.textContent = 'Pay Cat Tax';
    payCatTaxButton.classList.remove('d-none');
  } else {
    // make no longer hidden
    amountOwed.textContent = `You owe ${currentCatTax} cat tax! You've escaped this time!`;
  }
}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat tax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
  previousCatTax = currentCatTax--;
  if (currentCatTax > 0) {
    amountOwedDiv.textContent = `You still owe ${currentCatTax} cat tax! Pay up!`;
  } else {
    amountOwedDiv.textContent = 'Your debts are paid...';
  }
  if (previousCatTax > 0) {
    fetch(imageUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newImg = document.createElement('img');
        newImg.className = 'm-1';
        newImg.src = data[0].url;
        imageContainer.prepend(newImg);
      });
  } else {
    container.innerHTML = `
       <div style='position:relative; padding-bottom:calc(125.32% + 44px)'><iframe src='https://gfycat.com/ifr/SnivelingBeautifulJoey' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`;
  }
}
