import { useState } from "react";

const initialUserForm = {
  name: "",
  description: "",
};

export default function ServiceForm() {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { name, description } = userForm;

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !description) {
      alert("Debe completar los campos del formulario!");
      return;
    }
    console.log(userForm);

    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="form-control my-3 w-75" placeholder="Name" name="name" value={name} onChange={onInputChange} />
      <input
        className="form-control my-3 w-75"
        placeholder="Description"
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
}
