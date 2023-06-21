import React from "react";

import classes from "./AddForm.module.css";

export default function AddForm({ onSubmit, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("dataForm", data);
    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit} className={classes.addForm}>
      <div className={classes.containerForm}>
        <div className={classes.inputDiv}>
          <label htmlFor="name">Name:</label>
          <input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            defaultValue={defaultData?.name}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="address">address:</label>
          <input
            className={classes.input}
            type="text"
            id="address"
            name="address"
            defaultValue={defaultData?.address}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="latitude:">latitude:</label>
          <input
            className={classes.input}
            type="number"
            id="latitude"
            name="latitude"
            defaultValue={defaultData?.latitude}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="longitude:">longitude:</label>
          <input
            className={classes.input}
            type="number"
            id="longitude"
            name="longitude"
            defaultValue={defaultData?.longitude}
          />
        </div>
        {/* <div>
        <label htmlFor="image">image:</label>
        <input
          type="text"
          id="image"
          name="image"
          defaultValue={defaultData?.image}
        />
      </div> */}
        <div>
          <label htmlFor="description">description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            defaultValue={defaultData?.description}
          ></textarea>
        </div>
        <div>
          <div>
            <label htmlFor="favorite">Favorite</label>
            <input
              type="checkbox"
              id="favorite"
              name="favorite"
              defaultValue={defaultData?.favorite}
            />
          </div>
          <div>
            <label htmlFor="grill">grill:</label>
            <input
              type="checkbox"
              id="grill"
              name="grill"
              defaultValue={defaultData?.grill}
            />
          </div>
          <div>
            <label htmlFor="beatch">beatch:</label>
            <input
              type="checkbox"
              id="beatch"
              name="beatch"
              defaultValue={defaultData?.beatch}
            />
          </div>
          <div>
            <label htmlFor="camping">camping</label>
            <input
              type="checkbox"
              id="camping"
              name="camping"
              defaultValue={defaultData?.camping}
            />
          </div>
          <div>
            <label htmlFor="shore">shore</label>
            <input
              type="checkbox"
              name="shore"
              id="shore"
              defaultValue={defaultData?.shore}
            />
          </div>
          <div>
            <label htmlFor="boat">boat</label>
            <input
              type="checkbox"
              name="boat"
              id="boat"
              defaultValue={defaultData?.boat}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
