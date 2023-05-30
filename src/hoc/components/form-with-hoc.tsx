import { ChangeEvent, FC, FormEvent, useState } from 'react';

type FormValues = {
  name: string;
  title: string;
};
type FormProps = {
  formValues: FormValues;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const withControlledForm = (Form: FC<FormProps>, initialState: FormValues) => {
  function ControlledForm({
    onSubmit,
  }: {
    onSubmit: (values: FormValues) => void;
  }) {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = e;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // console.log(formValues);
      onSubmit(formValues);
    };

    return (
      <Form
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return ControlledForm;
};

function MyFormA({ formValues, handleChange, handleSubmit }: FormProps) {
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
        <p>Job</p>
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export const MyFormAControlled = withControlledForm(MyFormA, {
  name: 'jonh doe',
  title: 'full stack developer',
});
