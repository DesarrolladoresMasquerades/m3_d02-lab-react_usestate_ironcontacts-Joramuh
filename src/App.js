import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {

const [fiveContacts, setContacts] = useState(contacts.slice(0,5))

function addRandom(){
  let randomContact = contacts[5+Math.floor(Math.random()*contacts.length)]
  if(fiveContacts.length < contacts.length)return fiveContacts.push(randomContact)

}

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandom}>Add Random Contact</button>
      <button>Sort by polarity</button>
      <button>Sort by name</button>

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
                <td>{(contact.popularity).toFixed(2)}</td>
                {contact.wonOscar && <td>&#x1F3C6;</td>}
                {contact.wonEmmy && <td>&#x1F3C6;</td>}
                <td><button>DELETE</button> </td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
}

export default App;
