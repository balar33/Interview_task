import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import BgImg from "../../assets/images/Login8.jpg";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addData } from "../../Redux/counterSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  userName: Yup.string().required("User Name is required"),
  contact: Yup.string().required("Contact is required"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      contact: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addData(values));
      navigate('/')
    },
  });

  return (
    <>
      <Grid
        className={style.mainGrid}
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <Grid className={style.loginContainer} spacing={2}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <form onSubmit={formik.handleSubmit}>
              <Card className={style.loginCard}>
                <CardContent className={style.loginCardInner}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span className={style.welcomeText}>
                        Welcome to Lorem
                      </span>
                      <h1 className={style.formTitle}>Sign up</h1>
                    </Grid>
                    <Grid item xs={6} className={style.noAccountWrapper}>
                      <div className={style.noAccount}>
                        <span className={style.noAccountStyle}>
                          Have an Account ?
                        </span>
                        <a href="#" className={style.signUp}>
                          Sign in
                        </a>
                      </div>
                    </Grid>
                    <Grid className={style.fieldLabel}>
                      <label>Enter your username or email address</label>
                    </Grid>
                    <Grid item xs={12} className={style.textFieldWrapper}>
                      <TextField
                        name="email"
                        type="text"
                        label="Username or email address"
                        variant="outlined"
                        fullWidth
                        className={style.textField}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        success={Boolean(
                          formik.touched.email && !formik.errors.email
                        )}
                        error={Boolean(
                          formik.touched.email && formik.errors.email
                        )}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <Grid className={style.required}>
                          {formik.errors?.email}
                        </Grid>
                      )}
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid className={style.fieldLabel}>
                          <label>User name</label>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="userName"
                            type="text"
                            label="User name"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.userName}
                            success={Boolean(
                              formik.touched.userName && !formik.errors.userName
                            )}
                            error={Boolean(
                              formik.touched.userName && formik.errors.userName
                            )}
                          />
                          {formik.touched.userName &&
                            formik.errors.userName && (
                              <Grid className={style.required}>
                                {formik.errors?.userName}
                              </Grid>
                            )}
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid className={style.fieldLabel}>
                          <label>Contact Number</label>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="contact"
                            type="text"
                            label="Contact Number"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contact}
                            success={Boolean(
                              formik.touched.contact && !formik.errors.contact
                            )}
                            error={Boolean(
                              formik.touched.contact && formik.errors.contact
                            )}
                          />
                          {formik.touched.contact && formik.errors.contact && (
                            <Grid className={style.required}>
                              {formik.errors?.contact}
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Grid className={style.fieldLabel}>
                          <label>Enter your Password</label>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            success={Boolean(
                              formik.touched.password && !formik.errors.password
                            )}
                            error={Boolean(
                              formik.touched.password && formik.errors.password
                            )}
                          />
                          {formik.touched.password &&
                            formik.errors.password && (
                              <Grid className={style.required}>
                                {formik.errors?.password}
                              </Grid>
                            )}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className={style.signBtnWrapper}>
                      <Button
                        fullWidth
                        variant="contained"
                        className={style.signBtn}
                        type="submit"
                      >
                        Sign up
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Register;
