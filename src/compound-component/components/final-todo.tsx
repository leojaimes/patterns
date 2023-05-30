import { useState, createContext, useContext } from 'react';

interface TodoState {
  todoListValues: TodoProps[];
  handleSubmit: (inputValue: string) => void;
  toogleTodo: ({
    target: { name },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}
const initialTodoContext = {
  todoListValues: [] as TodoProps[],
  handleSubmit: (inputValue: string) => {},
  toogleTodo: ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {},
};
const TodoContext = createContext<TodoState>(initialTodoContext);
const { Provider: TodoProvider } = TodoContext;
///
interface TodoProps {
  name: string;
  isDone: boolean;
}
export function TodoTitle({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

export function TodoForm() {
  const { handleSubmit: onSubmit } = useContext(TodoContext);
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

export function TodoList() {
  const { todoListValues: list, toogleTodo } = useContext(TodoContext);
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
              onChange={toogleTodo}
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

export function FinalTodo({ children }: { children?: React.ReactNode }) {
  const [listTodos, setListTodos] = useState<{ [key: string]: TodoProps }>({});

  const handleSubmit = (inputValue: string) => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = ({
    target: { name },
  }: React.ChangeEvent<HTMLInputElement>) => {
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

  const valuesTodoProvider = {
    todoListValues,
    handleSubmit,
    toogleTodo,
    // getTodoValues,
  };
  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoProvider value={valuesTodoProvider}>
        {/* <TodoTitle>
          <h2>{title}</h2>
        </TodoTitle>
        <main>
          <TodoForm onSubmit={handleSubmit} />
        </main>
        <footer>
          {!todoListValues.length && <p>No todo added yet.</p>}
          <TodoList list={todoListValues} onChange={toogleTodo} />
        </footer> */}
        {children}
      </TodoProvider>
    </div>
  );
}

FinalTodo.TodoTitle = TodoTitle;
FinalTodo.TodoForm = TodoForm;
FinalTodo.TodoList = TodoList;
