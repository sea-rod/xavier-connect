import "./admin.css";
const Admin = () => {
  return (
    <>
      <div className="d-flex" id="sidebar">
        <div className="sidebar col-2 px- vh-100 bg-danger">
          <div className="d-flex bg-success px-3 py-1">
            <i
              aria-hidden="true"
              style={{ fontSize: "25px" }}
              className="fa fa-bars me-3 mt-1"
            ></i>
            <p style={{ fontSize: "25px" }}>Menu</p>
          </div>
          <hr />
          <ul className="m-0 p-0">
            <a href="#" className="px-3 py-2 align-content-center">
              <div className="d-flex flex-wrap">
                <i className="fa fa-home me-4 my-auto"></i>
                <p className="p-0 m-0">home</p>
              </div>
            </a>
            <a href="#" className="px-3 py-2 align-content-center">
              <div className="d-flex">
                <i className="fa fa-home me-4 my-auto"></i>
                <p className="my-auto">home</p>
              </div>
            </a>
            <a href="#" className="px-3 py-2 align-content-center">
              <div className="d-flex">
                <i className="fa fa-home me-4 my-auto"></i>
                <p className="my-auto">home</p>
              </div>
            </a>
            <a href="#" className="px-3 py-2 align-content-center">
              <div className="d-flex">
                <i className="fa fa-home me-4 my-auto"></i>
                <p className="my-auto">home</p>
              </div>
            </a>
          </ul>
        </div>
        <div className="bg-primary flex-grow-1">body</div>
      </div>
    </>
  );
};

export default Admin;
