import React, { useState } from "react";

function Form(props) {

  return (
    <form>
      <input type="text"
        onChange={handleFirstNameChange}
        value={props.firstName} 
        />
      <input type="text"
        onChange={handleLastNameChange}
        value={props.lastName}
         />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;