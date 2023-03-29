//import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
 const [fields, setFields] = React.useState([
    { id: 1, value: "", trueFalse: "" }
  ]);

  const handleAddField = () => {
    const newId = fields.length + 1;
    const newField = { id: newId, value: "", dropdownValue: "", trueFalse: "" };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    const filteredFields = fields.filter((field) => field.id !== id);
    setFields(filteredFields);
  };

  const handleInputChange = (id, value) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, value };
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  };

  const handleTrueFalseChange = (id, trueFalse) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, trueFalse };
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  };
  const handleDropdownValueChange = (id, dropdownValue) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, dropdownValue };
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  };

  const handleArgumentChange = (id, argument) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, argument };
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  };
  const handleResetArgument = (id) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, dropdownValue: "Select argumen", argument: "" };
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  };
  return (
    <div>
      <h3>First Dropdown</h3>
      {fields.map((field) => (
        <div key={field.id}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
          <select
            value={field.trueFalse}
            onChange={(e) => handleTrueFalseChange(field.id, e.target.value)}
          >
            <option value="">Select true/false</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button onClick={() => handleRemoveField(field.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add</button>

      <div>
        <h3>Second Dropdown</h3>
        {fields.map((field) => (
          <div key={field.id}>
            {field.dropdownValue === "Constant" ? (
              <select
                value={field.trueFalse}
                onChange={(e) =>
                  handleTrueFalseChange(field.id, e.target.value)
                }
              >
                <option value="">Select true/false</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            ) : (
              <select
                value={field.dropdownValue}
                onChange={(e) =>
                  handleDropdownValueChange(field.id, e.target.value)
                }
              >
                <option value="">Select argument</option>
                <option value="Constant">Constant</option>
                <option value="Argument">Argument</option>
                <option value="And">And</option>
                <option value="Or">Or</option>
              </select>
            )}
            <button onClick={() => handleResetArgument(field.id)}>Reset</button>
          </div>
        ))}
        <button onClick={handleAddField}>Add</button>

        <h3>True/False Result</h3>
        {fields.map((field) => {
          if (field.dropdownValue === "Constant" && field.trueFalse !== "") {
            return (
              <div key={`${field.id}-result`}>
                Input: {field.value}, Result: {field.trueFalse}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
