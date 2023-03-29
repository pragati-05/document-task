import React from "react";
import { useSelector } from "react-redux";
import { getDocuments } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const documents = useSelector(getDocuments);

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
                onClick={() => navigate('/add-document')}
              >
                Add Documents
              </button>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!!documents.length ? (
                    documents.map((item: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th scope="row">1</th>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            <span style={{ color: "blue", cursor: "pointer" }}>
                              View
                            </span>{" "}
                            |{" "}
                            <span style={{ color: "blue", cursor: "pointer" }}>
                              Edit
                            </span>{" "}
                            |{" "}
                            <span style={{ color: "blue", cursor: "pointer" }}>
                              Delete
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="text-center">
                      <td colSpan={4}>No document found</td>
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
