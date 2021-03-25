import React, { Component } from  'react';
import  './App.css';

class App extends Component {
  render()  {
    return  (
      <div className="App">
        <div>
        <form>
          <label>
            Name
          </label>
          <input  
            name="name"
            type="text"
            />
          <br />

          <label>
            Email
          </label>
          <input  
            name="email"
            type="text"
            />
          <br />

          <label>
            Password
          </label>
          <input  
            name="password"
            type="password"
            />
          <br />

          <label>
            Confirm Password
          </label>
          <input  
            name="confirm_password"
            type="password"
            />
          <br />

          <label>
            Mobile Number
          </label>
          <input  
            name="mobile_number"
            type="number"
            />
          <br />

          <label>
            Gender
          </label>
          <br />
          <label>
            Male
          </label>
          <input  
            name="gender"
            type="radio"
            />

          <label>
            Female
          </label>
          <input  
            name="gender"
            type="radio"
            />
          <br />

          <label>
            Country
          </label>
          <select>
            <option>
              India
            </option>
            <option>
              Australia
            </option>
            <option>
              Japan
            </option>
            <option>
              New Zealand
            </option>
            <option>
              England
            </option>
          </select>

          <br />

          <label>
            State
            <select>
            <option>
                Rajasthan
              </option>
              <option>
                Uttarakhand
              </option>
              <option>
                Karnatka
              </option>
              <option>
                Maharashtra
              </option>
              <option>
                Kerala
              </option>

              <option>
                New South Wales
              </option>
              <option>
                Queensland
              </option>
              <option>
                Tasmania
              </option>
              <option>
                Victoria
              </option>
              <option>
                Western Australia
              </option>

              <option>
              Aichi
              </option>
              <option>
              Akita
              </option>
              <option>
              Aomori
              </option>
              <option>
              Chiba
              </option>
              <option>
              Ehime
              </option>

              <option>
              Auckland 
              </option>
              <option>
              Bay of Plenty 
              </option>
              <option>
              Canterbury 
              </option>
              <option>
              Gisborne 
              </option>
              <option>
              Hawke's Bay 
              </option>

              <option>
              Scotland
              </option>
              <option>
              Northern Ireland
              </option>
              <option>
              Wales
              </option>
              <option>
              North East
              </option>
              <option>
              North West
              </option>
            </select>
          </label>

          <br />
          <input 
          name="terms_and_conditions"
          type="checkbox"
          />
          <label>
            I agree to <a>terms and conditions</a>
          </label>

          <br />
          <button>Submit</button>
          <button>Cancel</button>
        </form>
      </div>
      </div>
    )
  }
}

export default App;
