import { useAuth } from '../../context/AuthContex';

function LoginButton() {
  const { login } = useAuth();
  const handledClick = () => {
    const user = {
      id: '',
      name: '',
      imageUrl: '',
    };
    login(user);
  };
  return <button onClick={handledClick}>Login</button>;
}

export default LoginButton;
