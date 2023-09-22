
export const Project = ({id, nombre, descripcion,foto }) => {

  return (
    <>
      <div className="row text-center">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <img src={foto} className="img-fluid"></img>
        </div>
        <div className="col-md-6 align-self-center">
          <p className="fs-4 fw-medium">{nombre}</p>
          <p className="fs-5 fw-light">
            {descripcion}
          </p>
          <button type="button" className="btn btn-secondary btn">
            GO LIVE
          </button>
        </div>
      </div>
    </>
  );
};
