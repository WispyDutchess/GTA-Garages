const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []
let selectedCard = null;

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
            const cardIds = card.querySelector("[data-id]")

            address.textContent = "Address:     " + user.Address
            addressImage.src = "./images/GTA-Cars/" + user.AddressPath
            make.textContent = "Make & Model:     " + user.Name
            use.textContent = "Theme/Use:     " + user.Theme
            colour.textContent = "Colour:     " + user.Colour
            note.textContent = "Note:     " + user.Note
            makeImage.src = "./images/GTA-Cars/" + user.ImageFile       
            cardIds.id = user.cId   
            userCardContainer.append(card)

            // Add event listener to each card element
            const cardId = card.getAttribute('data-id');
            card.addEventListener('click', () => {
                console.log(`Clicked card with ID: ${cardId}`);
                
                if (selectedCard === card) {
                    // If the clicked card is already selected, remove the `selected` class from it
                    selectedCard.classList.remove('selected');
                    selectedCard = null;
                } else {
                    // If a card is already selected, remove the `selected` class from it
                    if (selectedCard) {
                        selectedCard.classList.remove('selected');
                    }
                
                    // Add the `selected` class to the clicked card and update the selectedCard variable
                    card.classList.add('selected');
                    selectedCard = card;
                }
            });

            return { where: user.Address, whereImage: user.AddressPath, name: user.Name, theme: user.Theme, Color: user.Colour, notes: user.Note, makeImage: user.ImageFile, cdId: user.cId, element: card }
        })
    });