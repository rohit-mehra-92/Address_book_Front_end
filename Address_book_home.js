window.addEventListener("DOMContentLoaded", (event) => {
    contactList = getContactFromLocalStorage();
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
    });
  
  const getContactFromLocalStorage = () =>{
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
  }
  const createInnerHtml = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th>" +
                    "<th>Phone Number</th>";
    if (contactList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contact of contactList) {
      innerHtml = `${innerHtml} 
        <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
        </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
    
  let contactList = [
    {
      _id: 1,
      _name: "Rohit mehra",
      _phoneNumber: "7415257009",
      _address: "Vijay Nagar",
      _city: "Indore",
      _state: "Madhya pradesh",
      _zip: "452020",
    },
];

const remove = (node) => {
    let removeContact = contactList.find(contact => contact._id == node.id);
    if (!removeContact) {
      return;
    }
    const index = contactList.map(contact => contact._id).indexOf(removeContact._id);
    contactList.splice(index, 1);
    localStorage.setItem("ContactList", JSON.stringify(contactList));
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
    window.location.replace("Address_book_home.html");
  }

  const update = (node) => {
    let contactToEdit = contactList.find(editContact => editContact._id == node.id);
    if (!contactToEdit) {
      return;
    }
    localStorage.setItem('contactEdit', JSON.stringify(contactToEdit));
    window.location.replace(site_properties.add_contacts_page);
  }

