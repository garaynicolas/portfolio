import "../style.css";

export const Footer = () => {
  return (
    <>
    <div id="bcfooter">
      <div className="container">
        <div className="row pb-5 pt-5">
          <div className="col-md-6 px-4">
            <p
              className="fs-5 pt-1 mb-3 fw-semibold text-white"
              id="navbarNombre"
            >
              GARAY NICOLAS
            </p>
            <p className="text-white fs-6 mb-3 fw-light lh-lg">
              A Full Stack Developer specializing in the Backend of Websites
              <br /> and Web Applicationes for optimal operation of your
              project.
            </p>
          </div>
          <div className="col-md-6">
            <p
              className="fs-5 mb-2 px-2 fw-semibold text-white pt-1"
              id="navbarNombre"
            >
              SOCIAL
            </p>
            <img src="linkedinWhite.png" width="40" />
            <img src="githubWhite.png" width="40"/>
          </div>
      <hr/>
        </div>
      </div>
    </div>
    </>
  );
};
