import './button.css';

interface Props {
  name: string;
  type: ButtonType;
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
}
export enum ButtonType {
  button = 'button',
  submit = 'submit',
}
export function CustomButton({
  name,
  type,
  onClick,
  children,
  className = 'btn btn-primary',
  style,
}: Props) {
  return (
    <button
      style={style}
      name={name}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
