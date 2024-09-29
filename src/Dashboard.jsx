import React from "react";

export default function Dashboard() {
  const operations = [
    { name: "Live Quiz", background: "#ffffcc" },
    { name: "Mock Quiz", background: "#ffffcc"  },
    { name: "Live Category", background: "#ffffcc"  },
    { name: "Mock Category",background: "#ffffcc" },
    { name: "Total User",background: "#ffffcc"  },
    { name: "Total Revenue",background: "#ffffcc"  },
    { name: "Paid User",background: "#ffffcc" },
    { name: "Free User",background: "#ffffcc"  },
  ];

  return (
    <>
      <div className="container">
        <div className="mb-2"> <span style={{fontSize:"20px"}}>Available Operations</span></div>
        <div className="row justify-content-center">
         
          {/* Center the row's content */}
          {operations.map((val) => (
            <div className="col-3" key={val.id}>
      
              <div

className="card"
                style={{
                  backgroundColor:val.background,
                  padding: "20px",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                <span style={{ textAlign: "center" }}>{val.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
