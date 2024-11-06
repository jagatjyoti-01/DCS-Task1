import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";



function Header() {
  return (
    <div>
      <div className="col-md-12 d-flex justify-content-center flex-column bg-danger text-white pt-4 px-0 pb-0 ">
        
        <div
          className="user-icon border mt-4 border-dark d-none d-lg-flex"
          style={{
            height: "220px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "-20px",
            left: "230px",
            background: "rgb(9,37,29)",
            overflow: "auto", 
          }}
        >
          <FaUser style={{ fontSize: "180px" }} />
        </div>

        <h2 className="" style={{ fontSize: "4.6rem" }}>
          KEVON LEE
        </h2>
        <p
          className="pb-0"
          style={{
            display: "block",
            backgroundColor: "#640000",
            width: "100%",
          }}
        >
          IT Professional Graduate
        </p>
      </div>

      <div>
        <p className="text-muted">
          <i className="bi bi-envelope"><IoMail />
          </i> jagatj33@gmail.com &nbsp; | &nbsp;
          <i className="bi bi-telephone"> <IoMdCall />
          </i>+ 91-6372304687 &nbsp; | &nbsp;
          <i className="bi bi-geo-alt"><IoLocationSharp />
</i> patia cs pur , IL 751016
         
        </p>
      </div>
    </div>
  );
}

export default Header;
