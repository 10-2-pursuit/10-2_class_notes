function contactTemplate(name, telephone, email, notes) {
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

  const remove = document.createElement("button")
  remove.innerText = "Remove Contact"
  console.log(remove)
  li.append(remove)

  return li;
}

function generateContact(name, telephone, email, notes) {
  const li = contactTemplate(name, telephone, email, notes);

  const ul = document.querySelector("ul");
  ul.append(li);
  

}