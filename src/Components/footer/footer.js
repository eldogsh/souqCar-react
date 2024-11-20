import "./footer.css";
import strings from "../../localization/localization";
export default function Footer(props) {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="footer-container p-4">

          {/*icon section*/}

          <section className="mb-4">

                  <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/memeeldogsh"
            role="button">
            <i className="fab fa-facebook-f"></i>
            </a>

          
            <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/201149701019" role="button">
              <i class="fab fa-whatsapp"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/eldoogsh/" role="button">
              <i class="fab fa-instagram"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mohamed-apoelwafa-010657274/" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/eldogsh" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" class="form-control" />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="">
            <div className="row" style={{display:"flex",justifyContent:"center"}}>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <h4 >{strings.souqcar}</h4>
                  </li>
                  <li>
                    <a id="foot" href="#!" className="text-white">
                    {strings.aboutus}   
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" className="text-white">
                    {strings.contactus}
                    </a>
                  </li>
               
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <h4 >{strings.needhelp}</h4>
                  </li>
                  <li>
                    <a id="foot" href="#!" className="text-white">
                      {strings.faq}className
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" className="text-white">
                      {strings.privacypolicy}
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" className="text-white ">
                      {strings.termsofuse}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <h4>{strings.famouscarmakers}</h4>
                  </li>
                  <li>
                    <a href="#!" id="foot" className="text-white">
                      {strings.hyundai}
                    </a>
                  </li>

                  <li>
                    <a href="#!" id="foot" className="text-white">
                      {
                        strings.mercedes
                      }
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="foot" className="text-white">
                      {strings.fiat}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}