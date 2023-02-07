import React from "react";
import "antd/dist/antd.less";
import "./Products.css";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { categoryGet } from "../../redux/features/category/category";
import { imagesGet } from "../../redux/features/products/product";
import {
  productAdd,
  productGet,
  productDelete,
  productUpdate,
} from "../../redux/features/products/product";
export default function Products() {
  const columns = [
    {
      key: "1",
      title: "ID",
      render: (text, record, index) => index + 1,
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "productName",
    },
    {
      key: "3",
      title: "Brand",
      dataIndex: "brand",
    },
    {
      key: "4",
      title: "Model",
      dataIndex: "modelName",
    },
    {
      key: "5",
      title: "Final Price",
      dataIndex: "finalPrice",
    },
    {
      key: "6",
      title: "MRP",
      dataIndex: "mrpPrice",
    },
    {
      key: "7",
      title: "Discount",
      dataIndex: "discountPercentage",
    },
    {
      key: "8",
      title: "Quantity",
      dataIndex: "netQuantity",
    },
    {
      key: "9",
      title: "Sold Stock",
      dataIndex: "soldStock",
    },

    {
      key: "10",
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
  const [isShowImage, setIsShowImage] = useState(false);
  const [images, setImags]= useState([])
  const [thumbnails, setThumbnails]= useState()

  const [record, setRecord] = useState({
    _id: "",
    brand: "",
    modelName: "",
    formFactor: "",
    specialFeature: "",
    connectivityTechnology: "",
    itemDimensions: "",
    itemWeight: "",
    finalPrice: "",
    mrpPrice: "",
    discountPercentage: "",
    netQuantity: "",
    soldStock: "",
    categoryId: "",
    productName: "",
    productDescription: "",
    colors: [],
    rating: "",
    thumbnails: [],
  });
  const [reactForm, setReactForm] = useState({
    brand: "",
    modelName: "",
    formFactor: "",
    specialFeature: "",
    connectivityTechnology: "",
    itemDimensions: "",
    itemWeight: "",
    finalPrice: "",
    mrpPrice: "",
    discountPercentage: "",
    netQuantity: "",
    soldStock: "",
    categoryId: "",
    productName: "",
    productDescription: "",
    colors: [],
    rating: "",
    thumbnails: [],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryGet());
    dispatch(productGet());
    dispatch(imagesGet()).then((response)=>{
      setImags(response.payload.data)
    })
  }, [dispatch]);

  const categorys = JSON.parse(
    JSON.stringify(useSelector((state) => state.categoryGet))
  );
  const products = JSON.parse(
    JSON.stringify(useSelector((state) => state.productGet))
  );

  //   read files from input
  //  const saveFile = (e) => {
  //   setFile(e.target.files);
  // };

  const handleShow = (record) => {
    setIsShow(true);
    setRecord(record);
  };
  const handleAddShow = () => {
    setIsAdd(true);
  };

  const handleShowImage = () => {
    setIsShowImage(true);
  };

  const handleCloseImage = () => {
    setIsShowImage(false);
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

    if (isShow) {
      convertedForm.append("_id", record._id);
      dispatch(productUpdate(reactForm)).then((error, response) => {
        handleClose();
        dispatch(productGet());
      });
    } else {
      dispatch(productAdd(reactForm)).then((error, response) => {
        handleClose();
        dispatch(productGet());
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
        dispatch(productDelete(record._id)).then(() => {
          // dispatch(categoryGet());
        });
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };




  // select uploaded images
  const SelectImages = (()=>{
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
      var data={"imageName":checkboxes[i].value, "imageLink":"http:/localhost:3000/"+checkboxes[i].value}
      array.push(data)
    }
    setReactForm({...reactForm, ['thumbnails']:array});
  })
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
                <i className="fa fa-plus text-white" /> &nbsp; Add Product
              </button>
              <Table
                className="mt-4"
                columns={columns}
                dataSource={products.data.data}
                size="small"
              ></Table>
            </header>
            {/* add category */}
            <Modal
              dialogClassName="modal-lg"
              show={isAdd || isShow}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  {isAdd ? "add product" : "Update product"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="row">
                    <div className="col-4">
                      <label className="mt-2" htmlFor="title">
                        select category
                      </label>

                      <select
                        className="form-control"
                        name="categoryId"
                        id="categoryId"
                        onChange={(e) => onChange(e)}
                      >
                        <option default>Select Category</option>
                        {categorys.data.data ? (
                          categorys.data.data.map((element) => {
                            return (
                              <option value={element._id}>
                                {element.categoryName}
                              </option>
                            );
                          })
                        ) : (
                          <option>Category not found</option>
                        )}
                      </select>
                    </div>
                    <div className="col-8">
                      <label className="mt-2" htmlFor="arabTitle">
                        Product Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="productName"
                        name="productName"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="productDescription">
                        Product Description
                      </label>
                      <textarea
                        className="form-control"
                        id="productDescription"
                        name="productDescription"
                        onChange={(e) => onChange(e)}
                      ></textarea>
                    </div>

                    <div className="col-6">
                      <label className="mt-2" htmlFor="brand">
                        Brand
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="brand"
                        name="brand"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="col-6">
                      <label className="mt-2" htmlFor="modelName">
                        Modal Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="modelName"
                        name="modelName"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="col-6">
                      <label className="mt-2" htmlFor="colors">
                        Colors
                      </label>
                      <input
                        className="form-control"
                        type="color"
                        id="colors"
                        name="colors"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="formFactor">
                        Form Factor
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="formFactor"
                        name="formFactor"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="specialFeature">
                        specialFeature
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="specialFeature"
                        name="specialFeature"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="connectivityTechnology">
                        connectivityTechnology
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="connectivityTechnology"
                        name="connectivityTechnology"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="itemDimensions">
                        itemDimensions
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="itemDimensions"
                        name="itemDimensions"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="itemWeight">
                        itemWeight
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="itemWeight"
                        name="itemWeight"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="finalPrice">
                        Final Price
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="finalPrice"
                        name="finalPrice"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="mrpPrice">
                        MRP
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="mrpPrice"
                        name="mrpPrice"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="discountPercentage">
                        Discount
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="discountPercentage"
                        name="discountPercentage"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="netQuantity">
                        Quantity
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="netQuantity"
                        name="netQuantity"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="arabTitle">
                        soldStock
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="soldStock"
                        name="soldStock"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-3">
                      <label className="mt-2" htmlFor="rating">
                        rating
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="rating"
                        name="rating"
                        defaultValue={isShow ? null : null}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="mt-2" htmlFor="thumbnails">
                        Images  {reactForm.thumbnails.length} SELECTED
                      </label>{" "}
                      <br />
                      <span
                        className="btn btn-primary"
                        onClick={handleShowImage}
                      >
                        <i className="fa fa-upload"></i> &nbsp; &nbsp; SELECT
                        IMAGES
                      </span>
                    </div>
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

            {/* select images */}
            <Modal show={isShowImage} onHide={handleCloseImage}>
              <Modal.Header closeButton>
                <Modal.Title>Select Product images</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="products">
                  <ul>
                    {images ? images.map((element, index)=>{
                      return(
                        <li>
                          <input type="checkbox" id={`myCheckbox${index}`} value={element} onClick={SelectImages} />
                          <label for={`myCheckbox${index}`}>
                            <img src={`http://localhost:3000/${element}`} />
                          </label>
                        </li>
                      )
                     }):null}
                  </ul>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseImage}>
                  SELECT
                </Button>
                <Button variant="secondary" onClick={handleCloseImage}>
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
