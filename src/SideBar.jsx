import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Master Trainer</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <NavLink className="nav-link active" to="1">
                <i className="fas fa-tachometer-alt" />
                <span>Group 1</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link active" to="2">
                <i className="fas fa-tachometer-alt" />
                <span>Group 2</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="3">
                <i className="fas fa-tachometer-alt" />
                <span>Group 3</span>
              </NavLink>
            </li> */}
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
