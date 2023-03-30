import React from "react";
import { useSelector } from "react-redux";
import { getDocuments } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const documents = useSelector(getDocuments);
  const deleteDocument = () => {};
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
              DOCUMENTS
            </h6>
            <div className="mb-3 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={() => navigate("/add-document")}
              >
                Add Documents
              </button>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!!documents.length ? (
                    documents.map((item: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{item.docId}</td>
                          <td>{item.docName}</td>
                          <td>{item.docType}</td>
                          <td>
                            <span
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() =>
                                navigate(`/view-document/${item.docId}`)
                              }
                            >
                              View
                            </span>{" "}
                            |{" "}
                            <span
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() =>
                                navigate(`/edit-document/${item.docId}`)
                              }
                            >
                              Edit
                            </span>{" "}
                            |{" "}
                            <span
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() => deleteDocument()}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="text-center">
                      <td colSpan={5}>No document found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
