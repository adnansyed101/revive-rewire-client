import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { useEffect } from "react";

const Error = () => {
     useEffect(() => {
        document.title = "R&R | Error";
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center">
      <h1 className="text-4xl font-semibold">
        Oops Error 404. Something went wrong.
      </h1>
      <Link to="/">
        <Button className="btn btn-primary">Go Back To Home</Button>
      </Link>
    </div>
  );
};

export default Error;
