document.addEventListener("DOMContentLoaded", function() {

    // Select the main element to append the generated content to it
    const placementElement = document.querySelector('div.Placement');
  
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
          placementElement.appendChild(outerClone);
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