import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import BgImg from "../../assets/images/Login8.jpg";
import GoogleIcon from "../../assets/images/google.svg";
import FacebookIcon from "../../assets/images/Facebook.svg";
import AppleIcon from "../../assets/images/apple.svg";
import style from "./Login.module.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string().required("Password is required"),
});

const Form = () => {
  const userData = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = userData.filter(
        (val) =>
          val?.email === values?.email && val?.password === values?.password
      );
      if (data.length > 0) {
        navigate("/dashboard", { state: data });
      }
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
                      <h1 className={style.formTitle}>Sign in</h1>
                    </Grid>
                    <Grid item xs={6} className={style.noAccountWrapper}>
                      <Grid className={style.noAccount}>
                        <span className={style.noAccountStyle}>
                          No Account ?
                        </span>
                        <a href="/register" className={style.signUp}>
                          Sign up
                        </a>
                      </Grid>
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
                      {formik.touched.password && formik.errors.password && (
                        <Grid className={style.required}>
                          {formik.errors?.password}
                        </Grid>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      className={style.forgotPass}
                    >
                      <a href="#">Forgot Password</a>
                    </Grid>
                    <Grid item xs={12} className={style.signBtnWrapper}>
                      <Button
                        fullWidth
                        variant="contained"
                        className={style.signBtn}
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      className={style.orDivider}
                    >
                      OR
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid container>
                        <Grid item xs={12} className={style.loginFooter}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<img src={GoogleIcon} alt="" />}
                            className={style.googleBtn}
                          >
                            Sign in with Google
                          </Button>
                          <Grid className={style.socialIconWrapper}>
                            <IconButton className={style.socialIcon}>
                              <img src={FacebookIcon} alt="" />
                            </IconButton>
                            <IconButton className={style.socialIcon}>
                              <img src={AppleIcon} alt="" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
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
export default Form;
