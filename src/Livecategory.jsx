import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { rdb,db } from './firebase';
import { child, get, ref, remove } from 'firebase/database';
import { collection, deleteDoc, getDocs } from 'firebase/firestore';

export default function Livecategory() {
  const [showModal, setShowModal] = useState(false);
  const [cat, setCat] = useState("");
  const navigate = useNavigate();
  const [keys, setKeys] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setShowModal(true); // Show the modal
  };

  const livequiz = () => {
    navigate("/livequiz", { state: { cat } });
  };

  useEffect(() => {
    const fetchKeys = async () => {
      const dbRef = ref(rdb);
      const path = 'livequiz/sets';
      try {
        const snapshot = await get(child(dbRef, path));
        if (snapshot.exists()) {
          const keysArray = Object.keys(snapshot.val());
          setKeys(keysArray);
          console.log('Fetched keys:', keysArray);
        } else {
          console.log('No data available');
        }
      } catch (err) {
        console.log('Error fetching data:', err.message);
      }
    };

    fetchKeys();
  }, []);

  const deleteKey = async (key) => {
    const keyRef = ref(rdb, `livequiz/sets/${key}`);
    try {
      await remove(keyRef);
      console.log(`Key ${key} deleted successfully.`);
      deleteCollection(key);
      setKeys(keys.filter(k => k !== key)); // Update state to remove the deleted key
    } catch (err) {
      console.error('Error deleting key:', err.message);
    }
  };

  const deleteCollection = async (collectionName) => {
    const collectionRef = collection(db, `livequiz/sets/${collectionName}`);
  
    try {
      // Get all documents in the collection
      const querySnapshot = await getDocs(collectionRef);
      
      // Loop through each document and delete it
      const deletePromises = querySnapshot.docs.map(async (doc) => {
        return deleteDoc(doc.ref);
      });
  
      // Wait for all delete operations to complete
      await Promise.all(deletePromises);
      console.log(`Collection ${collectionName} successfully deleted!`);
    } catch (error) {
      console.error('Error deleting collection: ', error);
    }
  };

  return (
    <>
      <form style={{ marginRight: "10%", marginLeft: "10%" }}>
        <div className="mb-3 row">
          <div className="col">
            <input
              type="text"
              onChange={(val) => setCat(val.target.value)}
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
              <h5 className="modal-title">Live Category: {cat}</h5>
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

      <div style={{ margin: "0 auto", width: "80%", marginTop: "3%", fontSize: "20px", marginBottom: "10px", fontWeight: "bold" }}>
        <span>Available Live Sections</span>
      </div>
      <table className="table" style={{ margin: "0 auto", width: "80%", border: "1px solid black", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col" style={{ border: "1px solid black" }}>S.NO</th>
            <th scope="col" style={{ border: "1px solid black" }}>Live Sections</th>
            <th scope="col" style={{ border: "1px solid black" }}>Last</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((val, index) => (
            <tr key={val}>
              <th scope="row" style={{ border: "1px solid black" }}>{index + 1}</th>
              <td style={{ border: "1px solid black" }}>{val}</td>
              <td style={{ border: "1px solid black" }}>
                <button type="button" className="btn btn-danger" onClick={() => deleteKey(val)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
