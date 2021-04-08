import { useState } from "react";

function NewBoxForm({ addBox }) {
  const defaultData = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(defaultData);

  function handleSubmit(evt) {
    evt.preventDefault();
    let data = formData;
    if (!data.height.endsWith("px")) {
      data.height += "px";
    }
    if (!data.width.endsWith("px")) {
      data.width += "px";
    }
    //pattern to create the key here
    
    addBox(data);
    setFormData(defaultData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label forHTML="height">height:</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          inputType="text"
          onChange={handleChange}
        />
        <label forHTML="width">width:</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          inputType="text"
          onChange={handleChange}
        />
        <label forHTML="backgroundColor">background color:</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          inputType="text"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBoxForm;