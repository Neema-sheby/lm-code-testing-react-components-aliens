interface ErrorMessageProp {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProp> = ({ errorMessage }) => {
  return <div>{errorMessage}</div>;
};

export default ErrorMessage;
