import { HashRouter, Routes, Route } from "react-router-dom";

import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import Header from "./Header";
import MetaItem from "./MetaItem";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <HashRouter>
        <MetaItem />
        <div id="wrapper">
          <SideBar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
                <Header />
              </nav>
              <Routes>
                {/* <DashboardContent /> */}
                <Route path="/1" element={<DashboardContent />} />
                <Route path="/2" element={<DashboardContent />} />
                <Route path="/3" element={<DashboardContent />} />
                {/* Error */}
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </div>
            <Footer />
          </div>
          <a className="border rounded d-inline scroll-to-top" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
