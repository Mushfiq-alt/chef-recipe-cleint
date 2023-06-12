import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center">
        <h1 className="display-4  fw-bold">Sorry!</h1>
        <h6 className="lead">
          Did not find the page you are looking for ! ! !
        </h6>
        <p>Check Whether you write the accurate URL</p>
        <NavLink className="" to="/">
          <button className="btn btn-warning">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
