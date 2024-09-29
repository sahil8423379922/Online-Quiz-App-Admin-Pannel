import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const operations = [
    { name: "Live Quiz", background: "#ffffcc", path: "/livequiz" },
    { name: "Mock Quiz", background: "#ffffcc", path: "/mockquiz" },
    { name: "Live Category", background: "#ffffcc", path: "/livecategory" },
    { name: "Mock Category", background: "#ffffcc", path: "/mockcategory" },
    { name: "Total User", background: "#ffffcc", path: "/totaluser" },
    { name: "Total Revenue", background: "#ffffcc", path: "/revenue" },
    { name: "Paid User", background: "#ffffcc", path: "/paiduser" },
    { name: "Free User", background: "#ffffcc", path: "/freeuser" },
  ];

  return (
    <>
      <div className="container">
        <div className="mb-2">
          {" "}
          <span style={{ fontSize: "20px" }}>Available Operations</span>
        </div>
        <div className="row justify-content-center">
          {/* Center the row's content */}
          {operations.map((val) => (
            <div className="col-3" key={val.id}>
              <Link to={val.path} style={{textDecoration:"none"}}>
                <div
                  className="card"
                  style={{
                    backgroundColor: val.background,
                    padding: "20px",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ textAlign: "center" }}>{val.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
