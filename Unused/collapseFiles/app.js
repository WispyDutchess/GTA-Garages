// First Attempt
// // Load JSON data
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Create HTML for each address
//     const accordion = document.getElementById('accordion');
//     data.data.forEach(address => {
//       const addressSection = document.createElement('section');
//       const addressHeader = document.createElement('header');
//       const addressImg = document.createElement('img');
//       addressImg.src = address.addressImg;
//       const addressTitle = document.createElement('h2');
//       addressTitle.textContent = address.address;
//       const addressContent = document.createElement('div');
//       const vehicleList = document.createElement('ul');
//       address.
//         // Add address header and content to section
//         addressHeader.appendChild(addressImg);
//         addressHeader.appendChild(addressTitle);
//         addressContent.appendChild(vehicleList);
//         addressSection.appendChild(addressHeader);
//         addressSection.appendChild(addressContent);

//         // Add section to accordion
//         accordion.appendChild(addressSection);

//         // Add collapsible behavior to section
//         addressHeader.addEventListener('click', () => {
//         addressContent.classList.toggle('active');
//         });
//     });
// });
// In this JavaScript code, we first load the JSON data from the `data.json` file using the `fetch` function. We then loop through each address in the data and create a collapsible section for it. 

// For each address, we create a `section` element with a header that contains the address image and title. We also create a `div` element to hold the vehicle list and a `ul` element to hold the list items.

// We then loop through each vehicle in the address and create a `li` element for it. We add an image of the vehicle, the make and theme as a title, and a `dl` element containing the vehicle's color and notes.

// Next, we add the address header and vehicle list to the collapsible section and append the section to the accordion. We also add a click event listener to the header that toggles the visibility of the vehicle list.

// Finally, we catch any errors that may occur during the fetching and rendering of the data and log them to the console.

// To make this code work, you would need to create a `style.css` file to add some basic styles to the application. You would also need to create a `data.json` file with the JSON data for your application.

// I hope this helps you get started on building your web application!

// chat gpt 

// Second Attempt:

// Load JSON data
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Create HTML for each address
//     const accordion = document.getElementById('accordion');
//     data.data.forEach(address => {
//       const addressSection = document.createElement('section');
//       const addressHeader = document.createElement('header');
//       const addressImg = document.createElement('img');
//       addressImg.src = address.addressImg;
//       const addressTitle = document.createElement('h2');
//       addressTitle.textContent = address.address;
//       const addressContent = document.createElement('div');
//       const vehicleList = document.createElement('ul');

//       // Loop through each vehicle and create a list item for it
//       address.vehicles.forEach(vehicle => {
//         const vehicleItem = document.createElement('li');
//         const vehicleImg = document.createElement('img');
//         vehicleImg.src = vehicle.vehicleImg;
//         const vehicleTitle = document.createElement('h3');
//         vehicleTitle.textContent = `${vehicle.make} ${vehicle.theme}`;
//         const vehicleDetails = document.createElement('dl');
//         const vehicleColor = document.createElement('dt');
//         vehicleColor.textContent = 'Color:';
//         const vehicleColorValue = document.createElement('dd');
//         vehicleColorValue.textContent = vehicle.color;
//         const vehicleNotes = document.createElement('dt');
//         vehicleNotes.textContent = 'Notes:';
//         const vehicleNotesValue = document.createElement('dd');
//         vehicleNotesValue.textContent = vehicle.notes;
//         vehicleDetails.appendChild(vehicleColor);
//         vehicleDetails.appendChild(vehicleColorValue);
//         vehicleDetails.appendChild(vehicleNotes);
//         vehicleDetails.appendChild(vehicleNotesValue);
//         vehicleItem.appendChild(vehicleImg);
//         vehicleItem.appendChild(vehicleTitle);
//         vehicleItem.appendChild(vehicleDetails);
//         vehicleList.appendChild(vehicleItem);
//       });

//       // Add address header and content to section
//       addressHeader.appendChild(addressImg);
//       addressHeader.appendChild(addressTitle);
//       addressContent.appendChild(vehicleList);
//       addressSection.appendChild(addressHeader);
//       addressSection.appendChild(addressContent);

//       // Add section to accordion
//       accordion.appendChild(addressSection);

//       // Add collapsible behavior to section
//       addressHeader.addEventListener('click', () => {
//         addressContent.classList.toggle('active');
//       });
//     });
//   })
//   .catch(error => console.error(error));

// Third Attempt

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Create HTML for each address
//     const accordion = document.getElementById('accordion');
//     data.data.forEach(address => {
//       const addressSection = document.createElement('section');
//       const addressHeader = document.createElement('header');
//       const addressImg = document.createElement('img');
//       addressImg.src = address.addressImg;
//       const addressTitle = document.createElement('h2');
//       addressTitle.textContent = address.address;
//       const addressContent = document.createElement('div');
//       const vehicleList = document.createElement('ul');

//       // Loop through each vehicle and create a list item for it
//       address.vehicles.forEach(vehicle => {
//         const vehicleItem = document.createElement('li');
//         const vehicleImg = document.createElement('img');
//         vehicleImg.src = vehicle.vehicleImg;
//         const vehicleTitle = document.createElement('h3');
//         vehicleTitle.textContent = `${vehicle.make} ${vehicle.theme}`;
//         const vehicleDetails = document.createElement('dl');
//         const vehicleColor = document.createElement('dt');
//         vehicleColor.textContent = 'Color:';
//         const vehicleColorValue = document.createElement('dd');
//         vehicleColorValue.textContent = vehicle.color;
//         const vehicleNotes = document.createElement('dt');
//         vehicleNotes.textContent = 'Notes:';
//         const vehicleNotesValue = document.createElement('dd');
//         vehicleNotesValue.textContent = vehicle.notes;
//         vehicleDetails.appendChild(vehicleColor);
//         vehicleDetails.appendChild(vehicleColorValue);
//         vehicleDetails.appendChild(vehicleNotes);
//         vehicleDetails.appendChild(vehicleNotesValue);
//         vehicleItem.appendChild(vehicleImg);
//         vehicleItem.appendChild(vehicleTitle);
//         vehicleItem.appendChild(vehicleDetails);
//         vehicleList.appendChild(vehicleItem);
//       });

//       // Add address header and content to section
//       addressHeader.appendChild(addressImg);
//       addressHeader.appendChild(addressTitle);
//       addressContent.appendChild(vehicleList);
//       addressSection.appendChild(addressHeader);
//       addressSection.appendChild(addressContent);

//       // Add section to accordion
//       accordion.appendChild(addressSection);

//       // Add collapsible behavior to section
//       addressHeader.addEventListener('click', function() {
//         this.classList.toggle('active');
//         const content = this.nextElementSibling;
//         if (content.style.display === 'block') {
//           content.style.display = 'none';
//         } else {
//           content.style.display = 'block';
//         }
//       });
//     });
//   })
//   .catch(error => console.error(error));

// Fourth Attempt

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     const template = document.getElementById('address-template');

//     // Create HTML for each address
//     const accordion = document.getElementById('accordion');
//     data.data.forEach(address => {
//       const addressSection = template.content.cloneNode(true);
//       const addressHeader = addressSection.querySelector('header');
//       const addressImg = addressSection.querySelector('img');
//       addressImg.src = address.addressImg;
//       const addressTitle = addressSection.querySelector('h2');
//       addressTitle.textContent = address.address;
//       const addressContent = addressSection.querySelector('div');
//       const vehicleList = addressSection.querySelector('ul');

//       // Loop through each vehicle and create a list item for it
//       address.vehicles.forEach(vehicle => {
//         const vehicleItem = document.createElement('li');
//         const vehicleImg = document.createElement('img');
//         vehicleImg.src = vehicle.vehicleImg;
//         const vehicleTitle = document.createElement('h3');
//         vehicleTitle.textContent = `${vehicle.make} ${vehicle.theme}`;
//         const vehicleDetails = document.createElement('dl');
//         const vehicleColor = document.createElement('dt');
//         vehicleColor.textContent = 'Color:';
//         const vehicleColorValue = document.createElement('dd');
//         vehicleColorValue.textContent = vehicle.color;
//         const vehicleNotes = document.createElement('dt');
//         vehicleNotes.textContent = 'Notes:';
//         const vehicleNotesValue = document.createElement('dd');
//         vehicleNotesValue.textContent = vehicle.notes;
//         vehicleDetails.appendChild(vehicleColor);
//         vehicleDetails.appendChild(vehicleColorValue);
//         vehicleDetails.appendChild(vehicleNotes);
//         vehicleDetails.appendChild(vehicleNotesValue);
//         vehicleItem.appendChild(vehicleImg);
//         vehicleItem.appendChild(vehicleTitle);
//         vehicleItem.appendChild(vehicleDetails);
//         vehicleList.appendChild(vehicleItem);
//       });

//       // Add address header and content to section
//       addressHeader.appendChild(addressImg);
//       addressHeader.appendChild(addressTitle);
//       addressContent.appendChild(vehicleList);
//       accordion.appendChild(addressSection);

//       // Add collapsible behavior to section
//       addressHeader.addEventListener('click', function() {
//         this.classList.toggle('active');
//         const content = this.nextElementSibling;
//         if (content.style.display === 'block') {
//           content.style.display = 'none';
//         } else {
//           content.style.display = 'block';
//         }
//       });
//     });
//   })
//   .catch(error => console.error(error));

//   Fifth Attempt

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     const template = document.querySelector('.items');
//     const container = document.querySelector('.container');

//     // Loop through each address in the data
//     data.data.forEach(address => {
//       // Clone the template for each address
//       const item = template.content.cloneNode(true);
//       const addressElem = item.querySelector('[data-address]');
//       const addressImgElem = item.querySelector('[data-addressImage]');

//       // Set the address and address image
//       addressElem.textContent = address.address;
//       addressImgElem.src = address.addressImg;

//       // Loop through each vehicle in the address
//       const content = item.querySelector('.content');
//       address.vehicles.forEach(vehicle => {
//         const vehicleElem = document.createElement('div');
//         vehicleElem.classList.add('vehicle');
//         const makeElem = document.createElement('div');
//         makeElem.classList.add('make');
//         makeElem.textContent = vehicle.make;
//         const themeElem = document.createElement('div');
//         themeElem.classList.add('theme');
//         themeElem.textContent = vehicle.theme;
//         const colorElem = document.createElement('div');
//         colorElem.classList.add('color');
//         colorElem.textContent = vehicle.color;
//         const notesElem = document.createElement('div');
//         notesElem.classList.add('notes');
//         notesElem.textContent = vehicle.notes;
//         const vehicleImgElem = document.createElement('img');
//         vehicleImgElem.classList.add('vehicle-image');
//         vehicleImgElem.src = vehicle.vehicleImg;
//         vehicleElem.appendChild(makeElem);
//         vehicleElem.appendChild(themeElem);
//         vehicleElem.appendChild(colorElem);
//         vehicleElem.appendChild(notesElem);
//         vehicleElem.appendChild(vehicleImgElem);
//         content.appendChild(vehicleElem);
//       });
//     });
// });

//       // Add the cloned template to the container

// Sixth Atempt

// const addressHeader = addressSection.querySelector('.collapsible');
// const addressImg = addressSection.querySelector('img[data-addressImage]');
// const addressTitle = addressSection.querySelector('div[data-address]');
// const vehicleList = addressSection.querySelector('.content');

// // Set data attributes from JSON
// addressImg.setAttribute('src', address.addressImg);
// addressTitle.textContent = address.address;

// // Loop through each vehicle and create a list item for it
// address.vehicles.forEach(vehicle => {
//   const vehicleItem = document.createElement('div');
//   const vehicleImg = document.createElement('img');
//   vehicleImg.src = vehicle.vehicleImg;
//   const vehicleMake = document.createElement('div');
//   vehicleMake.setAttribute('data-make', vehicle.make);
//   const vehicleColor = document.createElement('div');
//   vehicleColor.setAttribute('data-colour', vehicle.color);
//   const vehicleUse = document.createElement('div');
//   vehicleUse.setAttribute('data-use', vehicle.theme);
//   const vehicleNote = document.createElement('div');
//   vehicleNote.setAttribute('data-note', vehicle.notes);
//   vehicleItem.appendChild(vehicleImg);
//   vehicleItem.appendChild(vehicleMake);
//   vehicleItem.appendChild(vehicleColor);
//   vehicleItem.appendChild(vehicleUse);
//   vehicleItem.appendChild(vehicleNote);
//   vehicleList.appendChild(vehicleItem);
// });

// Seventh Atempt:

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []
// let selectedCard = null;

// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase()
//     users.forEach(user => {
//         const isVisible = 
//             user.name.toLowerCase().includes(value) || 
//             user.where.toLowerCase().includes(value) ||
//             user.theme.toLowerCase().includes(value) ||
//             user.Color.toLowerCase().includes(value) ||
//             user.notes.toLowerCase().includes(value)
//         user.element.classList.toggle("hide", !isVisible)
//     })
// })

// fetch("data2.json")
//     .then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = userCardTemplate.content.cloneNode(true).querySelector(".items");
//             const address = card.querySelector("[data-address]");
//             const addressImage = card.querySelector("[data-addressImage]");
//             const make = card.querySelector("[data-make]");
//             const theme = card.querySelector("[data-theme]");
//             const colour = card.querySelector("[data-color]");
//             const note = card.querySelector("[data-notes]");
//             const makeImage = card.querySelector("[data-makeImage]");
//             const cardId = card.getAttribute("data-id");
            
//             address.textContent = user.Address;
//             addressImage.src = "./images/GTA-Cars/" + user.AddressPath;
//             make.textContent = user.Name;
//             theme.textContent = user.Theme;
//             colour.textContent = user.Colour;
//             note.textContent = user.Note;
//             makeImage.src = "./images/GTA-Cars/" + user.ImageFile;       
//             card.setAttribute("data-id", user.cId);   
//             userCardContainer.appendChild(card);

//             // Add event listener to each card element
//             card.addEventListener('click', () => {
//                 console.log(`Clicked card with ID: ${cardId}`);
                
//                 if (selectedCard === card) {
//                     // If the clicked card is already selected, remove the `selected` class from it
//                     selectedCard.classList.remove('selected');
//                     selectedCard = null;
//                 } else {
//                     // If a card is already selected, remove the `selected` class from it
//                     if (selectedCard) {
//                         selectedCard.classList.remove('selected');
//                     }
                
//                     // Add the `selected` class to the clicked card and update the selectedCard variable
//                     card.classList.add('selected');
//                     selectedCard = card;
//                 }
//             });

//             return { element: card, name: user.Name, where: user.Address, theme: user.Theme, Color: user.Colour, notes: user.Note, whereImage: user.AddressPath, makeImage: user.ImageFile, cId: user.cId }
//         });
//     });

// Eighth Attempt

// fetch("data2.json")
//     .then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = userCardTemplate.content.cloneNode(true).querySelector(".items");
//             const address = card.querySelector("[data-address]");
//             const addressImage = card.querySelector("[data-addressImage]");
//             const make = card.querySelector("[data-make]");
//             const theme = card.querySelector("[data-theme]");
//             const colour = card.querySelector("[data-color]");
//             const note = card.querySelector("[data-notes]");
//             const makeImage = card.querySelector("[data-makeImage]");
//             const cardId = card.getAttribute("data-id");
            
//             address.textContent = user.Address;
//             addressImage.src = "./images/GTA-Cars/" + user.AddressPath;
//             make.textContent = user.Name;
//             theme.textContent = user.Theme;
//             colour.textContent = user.Colour;
//             note.textContent = user.Note;
//             makeImage.src = "./images/GTA-Cars/" + user.ImageFile;       
//             card.setAttribute("data-id", user.cId);   
//             userCardContainer.appendChild(card);

//             // Add event listener to each card element
//             card.addEventListener('click', () => {
//                 console.log(`Clicked card with ID: ${cardId}`);
                
//                 if (selectedCard === card) {
//                     // If the clicked card is already selected, remove the `selected` class from it
//                     selectedCard.classList.remove('selected');
//                     selectedCard = null;
//                 } else {
//                     // If a card is already selected, remove the `selected` class from it
//                     if (selectedCard) {
//                         selectedCard.classList.remove('selected');
//                     }
                
//                     // Add the `selected` class to the clicked card and update the selectedCard variable
//                     card.classList.add('selected');
//                     selectedCard = card;
//                 }
//             });

//             return { element: card, name: user.Name, where: user.Address, theme: user.Theme, Color: user.Colour, notes: user.Note, whereImage: user.AddressPath, makeImage: user.ImageFile, cId: user.cId }
//         });
//     });

// Mine

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")


// fetch("data2.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             const address = card.querySelector("[data-address]")
//             const addressImage = card.querySelector("[data-addressImage]")
//             const make = card.querySelector("[data-make]")
//             const use = card.querySelector("[data-use]")
//             const colour = card.querySelector("[data-colour]")
//             const note = card.querySelector("[data-note]")
//             const makeImage = card.querySelector("[data-makeImage]")
//             const cardIds = card.querySelector("[data-id]")

//             address.textContent = "Address:     " + user.Address
//             addressImage.src = "./images/GTA-Cars/" + user.AddressPath
//             make.textContent = "Make & Model:     " + user.Name
//             use.textContent = "Theme/Use:     " + user.Theme
//             colour.textContent = "Colour:     " + user.Colour
//             note.textContent = "Note:     " + user.Note
//             makeImage.src = "./images/GTA-Cars/" + user.ImageFile       
//             cardIds.id = user.cId   

//             console.log(make);
//             userCardContainer.append(card)

//             return { where: user.Address, whereImage: user.AddressPath, name: user.Name, theme: user.Theme, Color: user.Colour, notes: user.Note, makeImage: user.ImageFile, cdId: user.cId, element: card }
//         })
//     });

// Mine

// const temp1 = document.getElementById("template1");

// let content1 = temp1.content.cloneNode(true);


// document.body.appendChild(content1);

// const temp2 = document.getElementById("template2");
// let content2 = temp2.content.cloneNode(true);

// document.body.appendChild(content2);
// document.body.appendChild(content2);

// console.log(content2)

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// Nineth Attempt

// const outerTemplate = document.querySelector("#outer-template");
//   const innerTemplate = document.querySelector("#inner-template");

//   const data = {
//     title: "Nested Template Example",
//     items: [
//       {
//         address: "123 Main St",
//         make: "Honda",
//         theme: "Sport",
//         color: "Red",
//         notes: "This is a note",
//         image: "https://via.placeholder.com/150"
//       },
//       {
//         address: "456 Elm St",
//         make: "Toyota",
//         theme: "Luxury",
//         color: "Blue",
//         notes: "This is another note",
//         image: "https://via.placeholder.com/150"
//       }
//     ]
//   };

//   const outerClone = outerTemplate.content.cloneNode(true);
//   const innerContainer = outerClone.querySelector("#inner-template-container");

//   data.items.forEach(item => {
//     const innerClone = innerTemplate.content.cloneNode(true);
//     const makeElement = innerClone.querySelector("[data-make]");
//     const themeElement = innerClone.querySelector("[data-theme]");
//     const colorElement = innerClone.querySelector("[data-color]");
//     const notesElement = innerClone.querySelector("[data-notes]");
//     const imageElement = innerClone.querySelector("[data-makeImage]");

//     makeElement.textContent = item.make;
//     themeElement.textContent = item.theme;
//     colorElement.textContent = item.color;
//     notesElement.textContent = item.notes;
//     imageElement.src = item.image;

//     innerContainer.appendChild(innerClone);
//   });

//   document.body.appendChild(outerClone);

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// Tenth Attempt


// const outerTemplate = document.querySelector("#outer-template");
// const innerTemplate = document.querySelector("#inner-template");

// const data = {
//   title: "Nested Template Example",
//   items: [
//     {
//       address: "123 Main St",
//       make: "Honda",
//       theme: "Sport",
//       color: "Red",
//       notes: "This is a note",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       address: "456 Elm St",
//       make: "Toyota",
//       theme: "Luxury",
//       color: "Blue",
//       notes: "This is another note",
//       image: "https://via.placeholder.com/150"
//     }
//   ]
// };

// const outerClone = outerTemplate.content.cloneNode(true);
// const innerContainer = outerClone.querySelector("#inner-template-container");

// data.items.forEach(item => {
//   const innerClone = innerTemplate.content.cloneNode(true);
//   const makeElement = innerClone.querySelector("[data-make]");
//   const themeElement = innerClone.querySelector("[data-theme]");
//   const colorElement = innerClone.querySelector("[data-color]");
//   const notesElement = innerClone.querySelector("[data-notes]");
//   const imageElement = innerClone.querySelector("[data-makeImage]");
//   const collapsibleButton = innerClone.querySelector(".collapsible");

//   makeElement.textContent = item.make;
//   themeElement.textContent = item.theme;
//   colorElement.textContent = item.color;
//   notesElement.textContent = item.notes;
//   imageElement.src = item.image;

//   if (collapsibleButton !== null) {
//     collapsibleButton.addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }

//   innerContainer.appendChild(innerClone);
// });

// document.body.appendChild(outerClone);


// Eleventh Attempt


// document.addEventListener("DOMContentLoaded", function() {

// const outerTemplate = document.querySelector("#outer-template");
// const innerTemplate = document.querySelector("#inner-template");

// const data = {
//   title: "Nested Template Example",
//   items: [
//     {
//       address: "123 Main St",
//       make: "Honda",
//       theme: "Sport",
//       color: "Red",
//       notes: "This is a note",
//       image: "https://via.placeholder.com/150"
//     },
//     {
//       address: "456 Elm St",
//       make: "Toyota",
//       theme: "Luxury",
//       color: "Blue",
//       notes: "This is another note",
//       image: "https://via.placeholder.com/150"
//     }
//   ]
// };

// const outerClone = outerTemplate.content.cloneNode(true);
// const innerContainer = outerClone.querySelector("#inner-template-container");

// data.items.forEach(item => {
//   const innerClone = innerTemplate.content.cloneNode(true);
//   const makeElement = innerClone.querySelector("[data-make]");
//   const themeElement = innerClone.querySelector("[data-theme]");
//   const colorElement = innerClone.querySelector("[data-color]");
//   const notesElement = innerClone.querySelector("[data-notes]");
//   const imageElement = innerClone.querySelector("[data-makeImage]");
//   const collapsibleButton = innerClone.querySelector(".collapsible");

//   makeElement.textContent = item.make;
//   themeElement.textContent = item.theme;
//   colorElement.textContent = item.color;
//   notesElement.textContent = item.notes;
//   imageElement.src = item.image;

//   innerContainer.appendChild(innerClone);
// });

// const collapsibleButtons = document.getElementsByClassName("collapsible");

// for (let i = 0; i < collapsibleButtons.length; i++) {
//   collapsibleButtons[i].addEventListener("click", function() {
//     console.log("Button clicked");
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// document.body.appendChild(outerClone);

// });


// Twelth Attempt

// const outerTemplate = document.querySelector("#outer-template");
// const innerTemplate = document.querySelector("#inner-template");

// fetch("data2.json")
//   .then(response => response.json())
//   .then(data => {
//     const outerClone = outerTemplate.content.cloneNode(true);
//     const innerContainer = outerClone.querySelector("#inner-template-container");

//     data.map(item => {
//       const innerClone = innerTemplate.content.cloneNode(true);
//       const makeElement = innerClone.querySelector("[data-make]");
//       const themeElement = innerClone.querySelector("[data-theme]");
//       const colorElement = innerClone.querySelector("[data-color]");
//       const notesElement = innerClone.querySelector("[data-notes]");
//       const imageElement = innerClone.querySelector("[data-makeImage]");
//     //   const imageElement2 = innerClone.querySelector("[data-addressImage]");

//       makeElement.textContent = item.Name;
//       themeElement.textContent = item.Theme;
//       colorElement.textContent = item.Colour;
//       notesElement.textContent = item.Notes;
//       imageElement.src = "Images/GTA-Cars/" + item.ImageFile;
//     //   imageElement2.src = "Images/GTA-Cars/" + item.AddressPath;

//       innerContainer.appendChild(innerClone);
//     });

//     document.body.appendChild(outerClone);

//     const coll = document.getElementsByClassName("collapsible");

//     for (let i = 0; i < coll.length; i++) {
//       coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         const content = this.nextElementSibling;
//         if (content.style.display === "block") {
//           content.style.display = "none";
//         } else {
//           content.style.display = "block";
//         }
//       });
//     }
//   })
//   .catch(error => console.error(error));


// Thirteenth Attempt (implementing grouping behavior)

// document.addEventListener("DOMContentLoaded", function() {

// fetch("../../Sheet.json")
//   .then(response => response.json())
//   .then(data => {
//     // sort data by address
//     // data.sort((a, b) => (a.Address > b.Address) ? 1 : -1);

//     // group inner template elements by address
//     const groupedData = {};
//     data.forEach(item => {
//       const address = item.Address;
//       if (!groupedData[address]) {
//         groupedData[address] = [];
//       }
//       groupedData[address].push(item);
//     });

//     // create outer and inner template elements from grouped data
//     for (const [address, items] of Object.entries(groupedData)) {
//       const outerClone = outerTemplate.content.cloneNode(true);
//       const addressElement = outerClone.querySelector("[data-address]");
//       // const imageElement = outerClone.querySelector("[data-addressImage]");
//       const innerContainer = outerClone.querySelector("#inner-template-container");

//       addressElement.textContent = address;
//     //   imageElement.src = "Images/GTA-Cars/" + address + ".jpg";

//       items.forEach(item => {
//         const innerClone = innerTemplate.content.cloneNode(true);
//         const makeElement = innerClone.querySelector("[data-make]");
//         const themeElement = innerClone.querySelector("[data-theme]");
//         const colorElement = innerClone.querySelector("[data-color]");
//         const notesElement = innerClone.querySelector("[data-notes]");
//         const imageElement = innerClone.querySelector("[data-makeImage]");
//         const placeElement = outerClone.querySelector("[data-addressImage]");
//         const unitElement = innerClone.querySelector("[data-unit]");
//         // const unitAddressElement = innerClone.querySelector("[data-address]");

//         makeElement.textContent = item.Name;
//         themeElement.textContent = item.Theme;
//         colorElement.textContent = item.Colour;
//         notesElement.textContent = item.Note;
//         unitElement.textContent = item.Address + item.Unit;
//         imageElement.src = "Images/GTA-Cars/" + item.ImageFile;
//         placeElement.src = "Images/GTA-Cars/" + item.AddressPath;        

//         innerContainer.appendChild(innerClone);
//       });

//       document.body.appendChild(outerClone);
//     }

//     // add collapsible behavior to outer template elements
//     const coll = document.getElementsByClassName("collapsible");

//     for (let i = 0; i < coll.length; i++) {
//       coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         const content = this.nextElementSibling;
//         if (content.style.display === "block") {
//           content.style.display = "none";
//         } else {
//           content.style.display = "block";
//         }
//       });
//     }
//   })
//   .catch(error => console.error(error));
// });


// Fourteenth Attempt: render in main tag

document.addEventListener("DOMContentLoaded", function() {

  // Select the main element to append the generated content to it
  const mainElement = document.querySelector('main');

  fetch("../../Sheet.json")
    .then(response => response.json())
    .then(data => {
      // sort data by address
      // data.sort((a, b) => (a.Address > b.Address) ? 1 : -1);

      // group inner template elements by address
      const groupedData = {};
      data.forEach(item => {
        const address = item.Address;
        if (!groupedData[address]) {
          groupedData[address] = [];
        }
        groupedData[address].push(item);
      });

      // create outer and inner template elements from grouped data
      for (const [address, items] of Object.entries(groupedData)) {
        const outerClone = outerTemplate.content.cloneNode(true);
        const addressElement = outerClone.querySelector("[data-address]");
        // const imageElement = outerClone.querySelector("[data-addressImage]");
        const innerContainer = outerClone.querySelector("#inner-template-container");

        addressElement.textContent = address;
      //   imageElement.src = "Images/GTA-Cars/" + address + ".jpg";

        items.forEach(item => {
          const innerClone = innerTemplate.content.cloneNode(true);
          const makeElement = innerClone.querySelector("[data-make]");
          const themeElement = innerClone.querySelector("[data-theme]");
          const colorElement = innerClone.querySelector("[data-color]");
          const notesElement = innerClone.querySelector("[data-notes]");
          const imageElement = innerClone.querySelector("[data-makeImage]");
          const placeElement = outerClone.querySelector("[data-addressImage]");
          const unitElement = innerClone.querySelector("[data-unit]");
          // const unitAddressElement = innerClone.querySelector("[data-address]");

          makeElement.textContent = item.Name;
          themeElement.textContent = item.Theme;
          colorElement.textContent = item.Colour;
          notesElement.textContent = item.Note;
          unitElement.textContent = item.Address + item.Unit;
          imageElement.src = "Images/GTA-Cars/" + item.ImageFile;
          placeElement.src = "Images/GTA-Cars/" + item.AddressPath;        

          innerContainer.appendChild(innerClone);
        });

        // Append the generated content to the main element
        mainElement.appendChild(outerClone);
      }

      // add collapsible behavior to outer template elements
      const coll = document.getElementsByClassName("collapsible");

      for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
    })
    .catch(error => console.error(error));
});