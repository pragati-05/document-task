import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDocument } from "../redux/action";
import { getDocumentsById } from "../redux/selectors";

const ViewDocument = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id = "" } = useParams();
  const documents = useSelector((state) => getDocumentsById(state, id));

  const deleteDoc = () => {
    dispatch(deleteDocument(id));
    navigate('/dashboard');
  };

  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <div style={{ padding: "50px" }}>
            <h6
              style={{
                borderBottom: "1px solid grey",
                paddingBottom: "10px",
                marginBottom: "20px",
              }}
            >
              DETAILS
            </h6>
            <div className="mb-2 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary me-3"
                style={{ float: "right" }}
                onClick={() => navigate("/dashboard")}
              >
                Back
              </button>
              {!!documents.length && (
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ float: "right" }}
                  onClick={() => deleteDoc()}
                >
                  Delete
                </button>
              )}
            </div>
            <div
              className="d-flex align-items-center"
              style={{ padding: "50px" }}
            >
              {!!documents.length ? (
                <div>
                  <p>Document Id: {documents[0].docId}</p>
                  <p>Document Name: {documents[0].docName}</p>
                  <p>Document Type: {documents[0].docType}</p>
                  <p>Description: {documents[0].description}</p>
                </div>
              ) : (
                <p>No Data Available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDocument;
