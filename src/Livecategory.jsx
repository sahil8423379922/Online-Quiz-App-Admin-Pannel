import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Livecategory() {

    const [showModal, setShowModal] = useState(false);
    const[cat,setcat] = useState("");
    const navigate  =useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission
      setShowModal(true); // Show the modal
    };

    const livequiz =()=>{
navigate("/livequiz",{ state: { cat } })
    }


  return (

   <>
<form style={{marginRight:"10%",marginLeft:"10%"}}>
  <div className="mb-3 row">
    <div className="col">
      <input
        type="text"
        onChange={(val)=>{
           console.log(val.target.value)
           setcat(val.target.value)
        }}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter the Live Category Name"
      />
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
</form>


 {/* Modal */}
 <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Live Category :{cat}</h5>
             
            </div>
            <div className="modal-body">
              <p>Do you want to add live category?</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              <button type="button" className="btn btn-secondary" onClick={livequiz}>Next</button>
            </div>
          </div>
        </div>
      </div>


   </>
  )
}
