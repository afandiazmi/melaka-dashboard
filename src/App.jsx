import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import DashboardContent from "./DashboardContent";
import DashboardContent2 from "./DashboardContent2";
import DashboardContent3 from "./DashboardContent3";
import Footer from "./Footer";
import Header from "./Header";
import MetaItem from "./MetaItem";
import SideBar from "./SideBar";

function App() {
  const [data, setData] = useState([]);

  // Function to fetch data from your API
  const fetchData = async () => {
    try {
      const response = await fetch("https://afandiazmi.com/api/getall/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data initially and every 1 second
  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
                <Route path="/1" element={<DashboardContent data={data} />} />
                <Route path="/2" element={<DashboardContent2 />} />
                <Route path="/3" element={<DashboardContent3 />} />
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
