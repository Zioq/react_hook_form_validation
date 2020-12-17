import React, { useRef } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, watch, errors,handleSubmit } = useForm();

  //console.log(watch("email"));

  const password = useRef();
  password.current = watch("password");

  // In general onSubmit handler has an `event` as a parameter. But onSubmit which come from the useForm() use a `data` as a parameter. `data` will be save all data about the input data
  const onSubmit = (data) => {
    console.log(data);

    // enter post request with axios
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    >
      <label>Email</label>
      <input
        name="email"
        type="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This email field is required</p>}

      <label>Name</label>
      <input name="name" ref={register({ required: true, maxLength: 20 })} />
      {errors.name && errors.name.type === "required" && (
        <p>This name field is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>Your input exceed maximum lenght(10)</p>
      )}
      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({ required: true, minLenght: 6 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This name field is required</p>
      )}
      {errors.password && errors.password.type === "minLenght" && (
        <p>Your should enter more than 6 characters for password</p>
      )}

      <label>Password Confirm</label>
      <input
        name="password_confirm"
        type="password"
        ref={register({
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm && errors.password_confirm.type === "required" && (
        <p>This name field is required</p>
      )}
      {errors.password_confirm && errors.password_confirm.type === "validate" && (
        <p>The password does not match</p>
      )}
      <input type="submit" />
    </form>
  );
}

export default App;
