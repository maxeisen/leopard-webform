import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import btcLogo from "./assets/btc_logo_transparent.png";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { name: "", postalCode: "", phone: "", leopardSignUp: true },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div class="form-container">
      <h1 style={{marginTop: 0 + 'px'}}>
        Busy Times Café
      </h1>
      <img class="shop-logo" src={btcLogo} alt="Busy Times Café logo"/>
      <h3>
        Welcome to Busy Times Café!
      </h3>
      <p style={{textAlign: "center"}}>
        For your own safety and the safety of others, please fill out your information for COVID-19 tracing purposes.
      </p>
    <form htmlFor="form" onSubmit={formik.handleSubmit}>
      <div class="info-container">
        <label htmlFor="text">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          style={{width: "auto"}}
        />
        <label htmlFor="text">Postal Code</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
          style={{width: "auto"}}
        />
        <label htmlFor="number">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
          style={{width: "auto"}}
        />
        <label className="signup-checkbox" htmlFor="checkbox">
        <input
          id="leopardSignUp"
          name="leopardSignUp"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.leopardSignUp}
          checked={formik.values.leopardSignUp}
        />
          Sign Up for Leopard
        </label>
      </div>
      <div className="signup-text">
        <p>
          Leopard allows for easy collection of contact information for COVID-19 contact tracing. Signing up will redirect to the App Store to download the Leopard app. 
        </p>
        <br></br>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="leopard-footer">
      <p>
      Powered by <i>leopard.</i>
      </p>
    </div>
  );
};

function App() {
  return (
  <div>
    <SignupForm />
    <Footer></Footer>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

