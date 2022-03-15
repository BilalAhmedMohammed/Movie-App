import { useState } from "react";

export default function Login() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const [userFormErrors, setUserFormErrors] = useState({
    emailError: null,
    passwordError: null,
  });
  const handelFormChange = (ev) => {
    switch (ev.target.id) {
      case "email":
        {
          setUserForm({
            ...userForm,
            email: ev.target.value,
          });
          setUserFormErrors({
            ...userFormErrors,
            emailError:
              ev.target.value.length === 0
                ? "This field is required"
                : ev.target.value.match(/^([A-Za-z]|[0-9])+$/)
                ? "this format is not match email format"
                : null,
          });
        }
        break;
      case "password":
        {
          setUserForm({
            ...userForm,
            password: ev.target.value,
          });

          setUserFormErrors({
            ...userFormErrors,
            passwordError:
              ev.target.value.length === 0
                ? "this field is required"
                : ev.target.value.length < 8
                ? "this field is must be 8 or more characters"
                : null,
          });
        }
        break;
      default:
        return "No Match";
    }
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1 className="text-center text-primary fw-bold mt-5 col-12">Login</h1>
        <form
          onSubmit={(e) => handelFormSubmit(e)}
          className="m-5 col-5 d-flex flex-column"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold fs-5">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${
                userFormErrors.emailError ? "border-danger" : ""
              }`}
              id="email"
              name="emailAddress"
              value={userForm.email}
              aria-describedby="emailHelp"
              onChange={(e) => handelFormChange(e)}
            />
            <div id="emailHelp" className="text-danger form-text">
              {userFormErrors.emailError}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold fs-5">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                userFormErrors.passwordError ? "border-danger" : ""
              }`}
              id="password"
              name="pass"
              aria-describedby="passHelp"
              value={userForm.password}
              onChange={(e) => handelFormChange(e)}
            />
            <div id="passHelp" className="text-danger form-text">
              {userFormErrors.passwordError}
            </div>
          </div>
          <button type="submit" className="btn btn-primary fw-bold fs-3">
            Login
          </button>
          <p className="fw-bold fs-5 text-center pt-5">
            Don't have account /?{" "}
            <a href="www.google.com" className="text-dark ">
              {" "}
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
