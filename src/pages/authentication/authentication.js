import SignInForm from "../../Components/sign-in/sign-in";
import SignUpForm from "../../Components/sign-up/sign-up";
import "./authentication.css";

const Authentication = () => {
  return (
    <div className="row">
      {/* Left side image */}
      <div id="ddd" className="col-lg-7 d-lg-block d-none">
        <img
          src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694470069/210362805_206821121316734_7335298537487020808_n_ihoadw.jpg"
          alt="art"
          id="cover"
          className="img-fluid"
          style={{ position: "relative", zIndex: "0", height: "100%" }}
        />
      </div>

      {/* Right side authentication form */}
      <div className="authentication-container col-lg-5 col-md-12">
        <SignInForm />
      </div>
    </div>
  );
};

export default Authentication;
