import React from "react";
import 'antd/dist/antd.less'

import { Table } from "antd";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
 categoryAdd,
 categoryGet,
 categoryUpdate,
 categoryDelete
} from "../../redux/features/category/category";

export default function Category() {
  const columns = [
    {
      key: "1",
      title: "ID",
      render: (text, record, index) => index + 1,
    },
    {
      key: "2",
      title: "Category Name",
      dataIndex: "categoryName",
    },
    {
      key: "3",
      title: "category Description",
      dataIndex: "categoryDescription",
    },
  
    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{ color: "blue", marginRight: 12 }}
              className="edit"
              onClick={() => {
                handleShow(record);
              }}
            />
            <DeleteOutlined
              style={{ color: "red", marginRight: 12 }}
              onClick={() => {
                handleDelete(record);
              }}
            />
          </>
        );
      },
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [record, setRecord] = useState({
    categoryName: "",
    status: "",
    _id:"",
    categoryDescription:"",
  });
  const [reactForm, setReactForm] = useState({
    categoryName: "",
    categoryDescription:"",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryGet());
  }, [dispatch]);

  const { data } = JSON.parse(
    JSON.stringify(useSelector((state) => state.categoryGet))
  );

  console.log(data)

  const handleShow = (record) => {
    setIsShow(true);
    setRecord(record);
  };
  const handleAddShow = () => {
    setIsAdd(true);
  };
  const handleClose = () => {
    setIsShow(false);
    setIsAdd(false);
  };


  const onChange = (e) => {
    const { id, value } = e.target;
    setReactForm({ ...reactForm, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedForm = new FormData();
    for (var key in reactForm) {
      convertedForm.append(key, reactForm[key]);
    }
    if(isShow){
      convertedForm.append("_id", record._id);
      dispatch(categoryUpdate(convertedForm)).then((error, response) => {
        handleClose();
        dispatch(categoryGet());
      });
    }else{
      dispatch(categoryAdd(convertedForm)).then((error, response) => {
        handleClose();
        dispatch(categoryGet());
      });
    }
  };


  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(categoryDelete(record._id)).then(() => {
          // dispatch(categoryGet());
        });
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };



  const {categoryDescription, categoryName} = record;

 
  return (
    <>
    <div>
      <div className="content-wrapper">
        <div className="m-5">
        <header>
        <button
          className="btn btn-sm btn-primary float-left"
          onClick={() => handleAddShow()}
        >
          <i className="bi bi-plus text-white" />
          Add Category
        </button>
        <Table  className="mt-4" columns={columns} dataSource={data.data} size="small"></Table>
        </header>
      {/* upload Category */}
      <Modal show={isAdd || isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isAdd ? "add new category" : "Update main category"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <div className="row">
                <label htmlFor="title">Category Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="categoryName"
                  name="categoryName"
                  defaultValue={isShow?categoryName:null}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="row">
                <label htmlFor="arabTitle">Category Description</label>
                <input
                  className="form-control"
                  type="text"
                  id="categoryDescription"
                  name="categoryDescription"
                  defaultValue={isShow?categoryDescription:null}
                  onChange={(e) => onChange(e)}
                />
              </div>
              
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </div>
    </>
  );
}
