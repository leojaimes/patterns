import { FinalTodo } from './final-todo';
import { Todo } from './normal-todo';

export function CompoundComponentPage() {
  return (
    <>
      <h2>Compound Component</h2>
      <>
        <h2>Ejemplo sin Compound Component</h2>
        <Todo title="Sin Compound Pattern :o" />
        <hr />

        <h2>Ejemplo con Compound Component</h2>
        {/* <FinalTodo>
          <TodoTitle>Compound Pattern</TodoTitle>
          <TodoForm />
          <TodoList />
        </FinalTodo> */}

        <FinalTodo>
          <FinalTodo.TodoTitle>Compound Pattern</FinalTodo.TodoTitle>
          <FinalTodo.TodoForm />
          <FinalTodo.TodoList />
        </FinalTodo>
      </>
    </>
  );
}
