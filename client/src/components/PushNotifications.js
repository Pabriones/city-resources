import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "../../src/css/EmailNotifications.css";

function pushSaved() {
  document.getElementById("pushsave").innerHTML = "SAVED!";
  document.getElementById("pushsave").style.backgroundColor = "#659962";
  window.location.reload();
  return false;
}

const OPTIONS = [
  "Information related to my favorites",
  "City Resources updates and announcements",
  "Feedback and Surveys",
];

class PushNotifications extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="byemail-container">
        <div className="row mt">
          <div className="selection-email">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-dark mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>

                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onClick={pushSaved}
                  id="pushsave"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PushNotifications;
