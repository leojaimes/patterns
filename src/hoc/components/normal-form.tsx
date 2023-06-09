import React, { useState } from 'react';

interface Props {
  onSubmit: (e: string) => void;
}
export function NormalForm({ onSubmit }: Props) {
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    age: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Address</p>
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Age</p>
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Phone</p>
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
