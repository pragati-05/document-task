import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setDocuments, updateDocument } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";
import { getDocumentsById } from "../redux/selectors";

interface document {
  docName: string;
  docType: string;
  description?: string;
  docId?: string;
}
const AddDocument = () => {
  const [doc, setDocs] = useState<document>({ docName: "", docType: "" });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id = "" } = useParams();
  const documents = useSelector((state) => getDocumentsById(state, id));

  useEffect(() => {
    if (id) {
      setDocs(documents[0]);
    }
  }, [id]);

  const validationSchema = Yup.object().shape({
    docName: Yup.string().required("Required"),
    docType: Yup.string().required("Required"),
  });

  const submitDetails = async (values: any, { resetForm, setErrors }: any) => {
    let payload: document = {
      docName: values.docName,
      docType: values.docType,
      description: values.description,
    };
    resetForm();
    if (id) {
      dispatch(updateDocument({id: id, data: payload}));
    } else {
      dispatch(setDocuments(payload));
    }
    navigate("/dashboard");
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
              ADD DOCUMENTS
            </h6>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ padding: "50px" }}
            >
              <Formik
                enableReinitialize
                initialValues={{
                  docName: doc.docName ?? "",
                  docType: doc.docType ?? "",
                  description: doc.description ?? "",
                }}
                validationSchema={validationSchema}
                onSubmit={submitDetails}
              >
                {({
                  errors,
                  touched,
                  handleSubmit,
                  values,
                  handleChange,
                  handleBlur,
                }) => {
                  return (
                    <form style={{ width: "50%" }}>
                      <div className="mb-3">
                        <label htmlFor={"docName"} className="form-label">
                          Document Name
                        </label>

                        <input
                          type={"text"}
                          className={`form-control ${
                            touched.docName && errors.docName
                              ? "is-invalid"
                              : ""
                          }`}
                          id={"docName"}
                          value={values.docName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">
                          {touched.docName && errors.docName}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor={"docType"} className="form-label">
                          Document Type
                        </label>

                        <input
                          type={"text"}
                          className={`form-control ${
                            touched.docType && errors.docType
                              ? "is-invalid"
                              : ""
                          }`}
                          id={"docType"}
                          value={values.docType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">
                          {touched.docType && errors.docType}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor={"description"} className="form-label">
                          Description
                        </label>

                        <textarea
                          className={`form-control ${
                            touched.description && errors.description
                              ? "is-invalid"
                              : ""
                          }`}
                          id={"description"}
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="invalid-feedback">
                          {touched.description && errors.description}
                        </div>
                      </div>

                      <div className="pt-2 d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => navigate("/dashboard")}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddDocument;
