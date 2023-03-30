import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserDetails } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../redux/action";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserDetails);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const submitDetails = async (values: any, { resetForm, setErrors }: any) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    if (
      userDetails &&
      userDetails.email === payload.email &&
      userDetails.password === payload.password
    ) {
      resetForm();
      dispatch(setAuthenticated(true));
      navigate("/dashboard");
    } else {
      if (userDetails.email !== payload.email) {
        setErrors({
          email: "Invalid Email",
        });
      }
      if (userDetails.password !== payload.password) {
        setErrors({
          password: "Invalid Password",
        });
      }
      if (userDetails.email !== payload.email && userDetails.password !== payload.password) {
        setErrors({
          email: "Invalid Credentials",
        });
      }
    }
  };

  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ padding: "50px" }}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={submitDetails}
            >
              {({
                errors,
                touched,
                handleSubmit,
                values,
                handleChange,
                handleBlur,
              }) => {
                return (
                  <form style={{ width: "70%" }}>
                    <h6
                      style={{
                        borderBottom: "1px solid grey",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      LOGIN
                    </h6>
                    <div className="mb-3">
                      <label htmlFor={"email"} className="form-label">
                        Email
                      </label>

                      <input
                        type={"email"}
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        id={"email"}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="invalid-feedback">
                        {touched.email && errors.email}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group">
                        <input
                          type={"password"}
                          className={`form-control ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">
                          {touched.password && errors.password}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
