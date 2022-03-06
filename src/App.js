import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [fiveContacts, setContacts] = useState(contacts.slice(0, 5));

  function addRandom() {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    if (fiveContacts.length === contacts.length)
      return console.log("No more contacts!");
    if (fiveContacts.some((contact) => contact.id === randomContact.id)) {
      addRandom();
    } else setContacts((fiveContacts) => [...fiveContacts, randomContact]);
  }

  function sortPopularity() {
    const sortedContacts = fiveContacts.slice().sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  }

  function sortName() {
    const sortedContacts = fiveContacts.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  }

  function deleteContact(contactId) {
    const updatedContacts = fiveContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        <tr className="list">
          {fiveContacts.map((contact) => {
            return (
              <div key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contactPic"
                    width="100px"
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar && <td>&#x1F3C6;</td>}
                {contact.wonEmmy && <td>&#x1F3C6;</td>}
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    DELETE
                  </button>
                </td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
}

export default App;
