import React from "react";

export const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <legend className="legend"></legend>
      <label htmlFor="question"></label>
      <textarea type="text" id="question" name="question"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};
