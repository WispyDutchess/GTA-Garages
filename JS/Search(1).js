// const userCardTemplate = document.querySelector("[data-user-template]")

// fetch()
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {     
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             const name = card.querySelector("[data-name]")
//             const colour = card.querySelector("[data-colour]")
//             const image = card.querySelector("[data-image]")
//             name.textContent = user.name
//             colour.textContent = user.colour
//             image.textContent = user.image
//             userCardContainer.append(card)
//         });
//     });







// getData();

// async function getData() {
//     const response = await fetch("../GTA - Sheet1.csv");
//     const data = await response.text();


//     const table = data.split("\n").slice(1);
//     table.forEach( row => {
//         const column = row.split(",");
//         const address = column[0];
//         const addressImage = column[2];
//         const use = column[3];
//         const make = column[4];
//         const makeImage = column[6];
//         const colour = column[7];
//         const note = column[8];
//         console.log(address, addressImage, use, make, makeImage, colour, note);

//         then(data => {
//                     data.forEach(user => {     
//                         const card = userCardTemplate.content.cloneNode(true).children[0]
//                         const name = card.querySelector("[data-name]")
//                         const colour = card.querySelector("[data-colour]")
//                         const image = card.querySelector("[data-image]")
//                         name.textContent = user.name
//                         colour.textContent = user.colour
//                         image.textContent = user.image
//                         userCardContainer.append(card)
//             });
//         });
//     });
// }

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {

        const isVisible = 
            user.name.toLowerCase().includes(value) || 
            user.where.toLowerCase().includes(value) ||
            user.theme.toLowerCase().includes(value) ||
            user.Color.toLowerCase().includes(value) ||
            user.notes.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)

        console.log(users)

    })
})

fetch("../Sheet.json")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const address = card.querySelector("[data-address]")
            const addressImage = card.querySelector("[data-addressImage]")
            const make = card.querySelector("[data-make]")
            const use = card.querySelector("[data-use]")
            const colour = card.querySelector("[data-colour]")
            const note = card.querySelector("[data-note]")
            const makeImage = card.querySelector("[data-makeImage]")
            const cardId = card.querySelector("[data-id]")

            address.textContent = "Address:     " + user.Address
            addressImage.src = "./images/GTA-Cars/" + user.AddressPath
            make.textContent = "Make & Model:     " + user.Name
            use.textContent = "Theme/Use:     " + user.Theme
            colour.textContent = "Colour:     " + user.Colour
            note.textContent = "Note:     " + user.Note
            makeImage.src = "./images/GTA-Cars/" + user.ImageFile       
            cardId.id = user.cId   
            userCardContainer.append(card)
            return { where: user.Address, whereImage: user.AddressPath, name: user.Name, theme: user.Theme, Color: user.Colour, notes: user.Note, makeImage: user.ImageFile, cdId: user.cId, element: card }
        })
    });


// var identifier = addEventListener(onclick) {
//     getId
// }


// function changeclass() {

//     var changeClass = document.getElementById(identifier)

//     if(changeClass.className == "card") {

//         changeClass.className = "changed"
//     } else {
//         changeClass.className = "card"
//     }
    


// Get all the cards on the page

const cards = document.querySelectorAll('.card');
console.log(cards);

// Add event listener to each card

cards.forEach(card => {
    console.log('Adding click listener to card', card); 
  card.addEventListener('click', function() {

    // Remove "selected" class from all cards

    cards.forEach(card => {
      card.classList.remove('selected');
    });
    
    // Add "selected" class to the clicked card

    this.classList.add('selected');
  });
});




// const cards = document.querySelectorAll('.card');
// console.log(cards);

// cards.forEach(card => {
//   const cardId = card.getAttribute('data-id');
  
//   card.addEventListener('click', () => {
//     console.log(`Clicked card with ID: ${cardId}`);
//     // Add your code to change the class of the clicked card here
//     card.classList.add('selected');
//   });
// });