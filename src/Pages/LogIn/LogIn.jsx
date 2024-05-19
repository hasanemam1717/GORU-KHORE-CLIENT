import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
const LogIn = () => {
    const captchaRef = useRef()
    const [disble,setDisble] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogIn = e => {
        e.preventDefault();
        const from = e.target
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
    }
    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value
        console.log(value);
        if(validateCaptcha(value)){
            setDisble(false)
        }
        else{
            setDisble(true)
        }

    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
            </div><div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Right the captcha avob"
                className="input input-bordered"
                
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>
            <div className="form-control mt-6">
                <input disabled={disble}  className="btn btn-primary" type="submit" value='login' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
