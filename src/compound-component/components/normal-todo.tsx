import { useState } from 'react';

interface TodoProps {
  name: string;
  isDone: boolean;
}
function TodoTitle({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

function TodoForm({ onSubmit }: { onSubmit: (inputValue: string) => void }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">
        New todo:
        <input
          id="todoInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList({
  list,
  onChange,
}: {
  list: TodoProps[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <ul>
      {list.map(({ name, isDone }) => (
        <li key={name}>
          <label htmlFor="todoInput">
            <input
              id="todoInput"
              name={name}
              type="checkbox"
              checked={isDone}
              onChange={onChange}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : '' }}>
              {name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export function Todo({ title }: { title: string }) {
  const [listTodos, setListTodos] = useState({});

  const handleSubmit = (inputValue: any) => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = ({ target: { name } }) => {
    setListTodos({
      ...listTodos,
      [name]: {
        ...listTodos[name],
        isDone: !listTodos[name].isDone,
      },
    });
  };

  const getTodoValues = () => Object.values(listTodos);

  const todoListValues = getTodoValues() as TodoProps[];

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoTitle>
        <h2>{title}</h2>
      </TodoTitle>
      <main>
        <TodoForm onSubmit={handleSubmit} />
      </main>
      <footer>
        {!todoListValues.length && <p>No todo added yet.</p>}
        <TodoList list={todoListValues} onChange={toogleTodo} />
      </footer>
    </div>
  );
}
