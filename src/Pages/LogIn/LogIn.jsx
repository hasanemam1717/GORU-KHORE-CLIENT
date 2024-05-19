import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const LogIn = () => {
  const [disble, setDisble] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const form = location.state?.from?.pathname || "/";
  const handleLogIn = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(form, { replace: true });
    });
    // console.log(email, password);
  };
  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setDisble(false);
    } else {
      setDisble(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>LogIn || Goru Khore</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Right the captcha avob"
                  className="input input-bordered"
                />
                <button className="btn btn-outline btn-xs mt-2">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disble}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <h1 className="text-center">
              <small>New here!</small>
              <Link className="text-blue-600" to="/register">
                Create a new account
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
