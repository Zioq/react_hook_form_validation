# React-Hook-Form validation 

React-Hook-Form is a new npm library for form validation such as *Sign-up* or *Log-in*

There are many libraries you can use to check form validation, but `React-Hook-Form` show much high speed of performance.
```
React Hook Form => Took: 3800ms
Formik => Took: 5800ms
Redux Form => Took: 16000ms
```
You can see the Perfomance Compare in here: https://github.com/react-hook-form/performance-compare

More detail document for the React-Hook-Form: https://github.com/react-hook-form/react-hook-form


1. Prerequisite to start
    1. Create Empty folder to start
    2. Create React app  `npx create-react-app 'name what you want'`
    3. Go to the React Hook Form Homepage and click the `CODESANDBOX` to get a template
        https://react-hook-form.com/get-started
    4. Copy and Paste Index.js & styles.css into your react-app to get to start


2. Get Start
    1. Install React-Hook-Form library into your react-app. Type this command into your react-app terminal
        `npm install react-hook-form -- save`
    2. Edit the form. You can add Name, Email, Password etc...

3. How can we settting validation into specific input field?
    Here we will use `register` & `errors` comes from useForm();
    ```
    import { useForm } from "react-hook-form";
    function App() {
        const { register, errors} = useForm();

        <label>Name</label>
      <input name="name" ref={register({ required: true, maxLength: 20 })} />
      
      //Error message for the require validation
      {errors.name && errors.name.type === "required" && (
        <p>This name field is required</p>
      )}
    
      //Error message for the maxLength validation
      {errors.name && errors.name.type === "maxLength" && (
        <p>Your input exceed maximum lenght(10)</p>
      )}
    }
    ```

    For example, in the `Name input`, We use ref={register()} to make validation check system.
    (required and maxLenght)


    Also we can add error message using a `<p></p>` for the each validation check type. 

4. How can we compare the password validation?

    We can use `useRef()` & `watch`

    By `useRef()` we can set the  password as a ref object with a `.current` property

    (More info about the useRef(): https://reactjs.org/docs/hooks-reference.html#useref)

    In the password.current assing the password value which was entered in the password label
    ```
    const password = useRef();
    password.current = watch("password");
    ```
    *watch("input_name") saves the user's input in the "input_name" field*

    With this `password.crruent` we can check the validation password and password_confirm input data

### Reference Video: https://www.youtube.com/watch?v=nF4vw3efUwY

Happy Coding :)

Author: Jaehyeon Robert Han

Update Date: 2020-12-17
