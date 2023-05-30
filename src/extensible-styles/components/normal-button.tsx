import './button.css';

interface Props {
  name: string;
  type: ButtonType;
  onClick: () => void;
  children?: React.ReactNode;
}
export enum ButtonType {
  button = 'button',
  submit = 'submit',
}
export function NormalButton({ name, type, onClick, children }: Props) {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      className="btn btn-primary"
    >
      {children}
    </button>
  );
}
