const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = event.target.name.value
    let phone = event.target.phone.value
    let email = event.target.email.value
    let notes = event.target.notes.value
    let relationship = event.target.relationship.value
    
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(notes);
    console.log(relationship)
    
    generateContact(name, phone, email, notes, relationship)
    
    
    form.reset();
})


function contactTemplate(name, telephone, email, notes, relationship) {
    const li = document.createElement("li");
    li.textContent += name;
    
    if (telephone) {
        const strong = document.createElement("strong");
        strong.textContent = "Tel: ";
        li.append(document.createElement("br"), strong, telephone);
    }
    
    if (email) {
        const strong = document.createElement("strong");
        strong.textContent = "Email: ";
        li.append(document.createElement("br"), strong, email);
    }
    
    if (notes) {
        const strong = document.createElement("strong");
        strong.textContent = "Notes: ";
        li.append(document.createElement("br"), strong, notes);
    }
    if (relationship) {
        const strong = document.createElement("strong");
        strong.textContent = "Relationship: ";
        li.append(document.createElement("br"), strong, relationship);
    }


    
    const remove = document.createElement("button")
    remove.innerText = "Remove Contact"
    console.log(remove)
    li.append(remove)
    
    remove.addEventListener("click", (event) => {
        li.remove();
        updateCounter()
    })

    return li;
}

function generateContact(name, telephone, email, notes, relationship) {
    const li = contactTemplate(name, telephone, email, notes, relationship);
    
    const ul = document.querySelector("ul");
    ul.append(li);
    
    updateCounter();
}

function updateCounter() {
    const ul = document.querySelector("ul")

    let contact = document.querySelector(".contact-count")
    contact.textContent = `(${ul.children.length} Contacts)`
}