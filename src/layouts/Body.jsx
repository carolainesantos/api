import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Body() {
  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1A1A1A",
          color: "#333",
          margin: "0",
          padding: "20px 0px",
          minHeight: "64.8vh",
        }}
      >
        <Outlet />
      </div>
      <div
        style={{
          backgroundColor: "#365E32", //cor footer
        }}
      >
        <Footer />
      </div>
    </>
  );
}
