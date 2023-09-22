export const About = () => {
  return (
    <>
      <div id="bcabout">
      <div className="container mb-4">
        <div className="row py-5  text-center">
          <h1 className="mb-0">ABOUT ME</h1>
          <p className="fs-1 fw-bold mb-0 text-danger-emphasis">- - -</p>
          <p className="fs-5 fw-light">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of <br /> programming and technology
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <p className="fs-4 fw-bold ">Get to know me!</p>
              <p className="fs-6 fw-light lh-lg mb-3">
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section.{" "}
                <br /> I also like sharing content related to the stuff that I
                have learned over the years in Web Development so it can help
                other people of the Dev Community. Feel free to Connect or
                Follow me on my Linkedin where I post useful content related to
                Web Development and Programming <br /> I'm open to Job
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to contact me.
              </p>
              <button type="button" className="btn btn-secondary btn-lg mb-3" id="btnProjects">
                CONTACT
              </button>
            </div>
            <div className="col-md-6">
              <p className="fs-4 fw-bold mb-4 mx-2">My Skills</p>
              
              <span className="fw-medium fs-4 badge text-secondary bg-secondary-subtle mx-2 p-3 mb-3">HTML</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">CSS</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">React</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">Java</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">Spring</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3 ">JavaScript</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">MySQL</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-3">Docker</span>
              <span className="fw-medium fs-4 badge bg-secondary-subtle text-secondary mx-2 p-3 mb-5">Github</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
