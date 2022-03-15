import { useState } from "react";

export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [userFormErrors, setUserFormErrors] = useState({
    nameError: null,
    emailError: null,
    userNameError: null,
    passwordError: null,
    confirmPassword: null,
  });
  const handelFormSubmit=(ev)=>{
ev.preventDefault();
  }
  const handelFormChange = (ev) => {
    switch (ev.target.id) {
      case "name":
        {
            setUserForm({
                ...userForm,
                name:ev.target.value,
            })
            setUserFormErrors({
                ...userFormErrors,
                nameError:
                    ev.target.value.length===0
                    ?"this field is required"
                    :null,
            })
        }
        break;
      case "email":
        {
            setUserForm({
                ...userForm,
                email:ev.target.value,
            })
            setUserFormErrors({
                ...userFormErrors,
                emailError:
                ev.target.value.length === 0
                ? "This field is required"
                : ev.target.value.match(/^([A-Za-z]|[0-9])+$/)
                ? "this format is not match email format"
                : null,
            })
        }
        break;
      case "userName":
        {
            setUserForm({
                ...userForm,
                userName:ev.target.value,
            })
            setUserFormErrors({
                ...userFormErrors,
                userNameError:
                    ev.target.value.length===0
                    ?"this field is required"
                    :!ev.target.value.match(/^[^\r\n\t\f\v ]*$/)
                    ?"this format is contain space"
                    :null,
            })
        }
        break;
      case "password":
        {
            setUserForm({
                ...userForm,
                password:ev.target.value,
            })
            setUserFormErrors(
                {
                ...userFormErrors,
                    passwordError:
                        ev.target.value.length===0
                        ?"this field is required"
                        :ev.target.value.length<8
                        ?"this field is must be 8 or more characters"
                        :!ev.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
                        ?"this format is not match password format"
                        :null,
                })
        }
        break;
        case "confirmPass":
        {
            setUserForm({
                ...userForm,
                confirmPassword:ev.target.value,
            })
            setUserFormErrors(
                {
                ...userFormErrors,
                    confirmPassword:
                        ev.target.value.length===0
                        ?"this field is required"
                        :ev.target.value.length<8
                        ?"this field is must be 8 or more characters"
                        :!ev.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
                        ?"this format is not match password format"
                        :ev.target.value!==userForm.password
                        ?"the value is not same the password value"
                        :null,
                })
        }
        break;
    }
  };
  return (
    <div className="container-fluid">
      <h1 className="text-success fw-bold text-center pt-5">Register</h1>
      <form
      onSubmit={(e) => handelFormSubmit(e)}
      className="p-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold fs-5">
            Name
          </label>
          <input
            type="text"
            //    className={`form-control ${}}
            className="form-control"
            aria-describedby="nameHelp"
            id="name"
            value={userForm.name}
            onChange={(ev) => handelFormChange(ev)}
          />
          <div id="nameHelp" className="text-danger form-text">
              {userFormErrors.nameError}
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold fs-5">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={userForm.email}
            onChange={(ev) => handelFormChange(ev)}
          />
          <div id="emailHelp" className="text-danger form-text">
              {userFormErrors.emailError}
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label fw-bold fs-5">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            aria-describedby="userNameHelp"
            value={userForm.userName}
            onChange={(ev) => handelFormChange(ev)}
          />
          <div id="userNameHelp" className="text-danger form-text">
              {userFormErrors.userNameError}
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label fw-bold fs-5">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            aria-describedby="passHelp"
            value={userForm.password}
            id="password"
            onChange={(ev) => handelFormChange(ev)}
          />
          <div id="passHelp" className="text-danger form-text">
              {userFormErrors.passwordError}
            </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPass" className="form-label fw-bold fs-5">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={userForm.confirmPassword}
            id="confirmPass"
            aria-describedby="conPassHelp"
            onChange={(ev) => handelFormChange(ev)}
          />
          <div id="conPassHelp" className="text-danger form-text">
              {userFormErrors.confirmPassword}
            </div>
        </div>

        <button type="submit" className="btn btn-primary bg-success fw-bold">
          Submit
        </button>
      </form>
    </div>
  );
}
