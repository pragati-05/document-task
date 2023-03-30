import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../redux/selectors";
import { useNavigate } from "react-router-dom";
import { deleteDocument } from "../redux/action";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const Dashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const documents = useSelector(getDocuments);

  const deleteDoc = (id: string) => {
    dispatch(deleteDocument(id));
  };

  const columns = [
    // {
    //   dataField: "serial",
    //   isDummyField: true,
    //   text: "#",
    //   formatter: (cell: any, row: any, rowIndex: any) => {
    //     return (
    //       <span>{rowIndex + 1}</span>
    //     );
    //   },
    // },
    {
      dataField: "docId",
      text: "ID",
      sort: true,
    },
    {
      dataField: "docName",
      text: "Name",
      sort: true,
    },
    {
      dataField: "docType",
      text: "Type",
      sort: true,
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      formatter: (cell: any, row: any) => {
        return (
          <>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate(`/view-document/${row.docId}`)}
            >
              View
            </span>{" "}
            |{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate(`/edit-document/${row.docId}`)}
            >
              Edit
            </span>{" "}
            |{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => deleteDoc(row.docId)}
            >
              Delete
            </span>
          </>
        );
      },
    },
  ];

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
            <BootstrapTable
              keyField="docId"
              bootstrap4
              data={documents}
              columns={columns}
              bordered={false}
              noDataIndication={"No document found"}
              pagination={paginationFactory({
                sizePerPageList: [
                  {
                    text: "5",
                    value: 5,
                  },
                  {
                    text: "10",
                    value: 10,
                  },
                  {
                    text: "20",
                    value: 20,
                  },
                ],
              })}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
