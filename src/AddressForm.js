import React from 'react';
import us_states from './us_state';

const AddressForm = props => {
  return (
    <div className="address-form">
      <h1>Find Upcoming Elections</h1>
      <form onSubmit={props.handleSubmit}>
        <p>Enter the address where you are registered to vote</p>
        <div>
          <label htmlFor="street-field">Street:</label>
          <input id="street-field" name="street" type="text" />
        </div>
        <div>
          <label htmlFor="street-2-field">Street 2:</label>
          <input id="street-2-field" name="street-2" type="text" />
        </div>
        <div>
          <label htmlFor="city-field">City:</label>
          <input id="city-field" name="city" type="text" required />

          <label htmlFor="state-field">State:</label>
          <select id="state-field" name="state" required>
            <option></option>
            {us_states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <label htmlFor="zip-field">ZIP:</label>
          <input id="zip-field" name="zip" size="10" type="text" />
        </div>
        <div className="button">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
