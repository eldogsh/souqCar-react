import { signInWithGooglePopup } from "../../firebase/firebase";
import SignUpForm from "../sign-up/sign-up";
import Button from "../button/button.component";
import "./sign-in.scss";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../navbar/navbar";

const SignInForm = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate("/MainPage");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <>
      <Card className="shadow rounded-4 mt-5" style={{ border: "1px solid white" }}>
        <Card.Body>
          <Link
            className="login-logo d-inline-block mb-5 d-flex justify-content-end"
            to="/MainPage"
            title="سوق كار"
          >
            <img
              className="light w-100 animate__animated animate__fadeInRight duration_2s img-fluid w-auto"
              src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694468780/Untitled_Project_kxiqpk.jpg"
              alt="سوق كار"
            />
          </Link>

          <div className="sign-in-container">
            <div className="buttons-container">
              <Button type="button" id="btn1" buttonType="google" onClick={signInWithGoogle}>
                <i
                  className="fa-brands fa-google"
                  style={{
                    color: "#ffffff",
                    fontSize: "25px",
                    marginTop: "11.5px",
                    marginInlineEnd: "10px",
                  }}
                />
                <div>Login With Google</div>
              </Button>
              <br />
              <Button type="button" id="btn2">
                <i
                  className="fa-brands fa-facebook"
                  style={{
                    color: "#ffffff",
                    fontSize: "26px",
                    marginTop: "11.5px",
                    marginInlineEnd: "10px",
                  }}
                />
                <div>Login With Facebook</div>
              </Button>
              <br />
              <Button type="button" id="btn3">
                <i
                  className="fa-solid fa-phone"
                  style={{
                    color: "#ffffff",
                    fontSize: "25px",
                    marginTop: "11.5px",
                    marginInlineEnd: "10px",
                  }}
                />
                <div>Login With Mobile</div>
              </Button>
              <br />
              <Button type="button" id="btn4">
                <i
                  className="fa-solid fa-envelope"
                  style={{
                    color: "#ffffff",
                    fontSize: "25px",
                    marginTop: "11.5px",
                    marginInlineEnd: "10px",
                  }}
                />
                <div>Login With Email</div>
              </Button>
              <br />
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Sign Up Form Component */}
      <SignUpForm />
    </>
  );
};

export default SignInForm;
