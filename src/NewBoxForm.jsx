import { useState } from "react";

function NewBoxForm({ addBox }) {
  const defaultData = { height: "", width: "", backgroundColor: "", valid: true};
  const [formData, setFormData] = useState(defaultData);

  function handleSubmit(evt) {
    evt.preventDefault();
    let data = formData;
    if(isNaN(data.height)|| isNaN(data.width)){
      setFormData(d => ({...d, valid: false}));
    } else {
      data.height += "px";
      data.width += "px";
      addBox(data);
      setFormData(defaultData);
    }
   
    //pattern to create the key here
   
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {!formData.valid && <div class="Box-error">Invalid form data, please submit numbers for height and width</div>}
        <label htmlFor="height">height:</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="width">width:</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="backgroundColor">background color:</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBoxForm;