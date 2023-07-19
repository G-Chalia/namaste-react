import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);

  return (
    <div>
      <h1>{status}</h1>
      <h2>Oops ! {statusText}</h2>
    </div>
  );
};

export default Error;
