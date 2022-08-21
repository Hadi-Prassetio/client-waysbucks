import React from "react";
import NavbarUser from "../components/navbar";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { DataTransaction } from "../datadummy/datatransaction";
import Icon from "../assets/TrashIcon.png";
import convertRupiah from "rupiah-format";
import { useState } from "react";

export default function Cart() {
  const countTotal = (items) =>
    items.reduce((acc, curr) => acc + curr.price, 0);

  const jumlah = countTotal(DataTransaction);

  const qty = DataTransaction.length;

  console.log(qty);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavbarUser />
      <div>
        <Container>
          <div className="ms-5 mt-3">
            <h1 style={{ color: "#BD0707" }}>My Cart</h1>
            <Row>
              <p style={{ color: "#BD0707" }}>Review Your Order</p>
              <Col md={8}>
                <hr />

                {DataTransaction.map((item, index) => {
                  return (
                    <div className="mb-2">
                      <Row>
                        <Col md={2}>
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </Col>
                        <Col md={10}>
                          <Col className="d-flex justify-content-between">
                            <p>
                              <strong style={{ color: "#BD0707" }}>
                                {item.Productname}
                              </strong>
                            </p>
                            <p>{convertRupiah.convert(item.price)}</p>
                          </Col>
                          <Col className="d-flex justify-content-between">
                            <p>Topping : {item.topping}</p>
                            <img
                              src={Icon}
                              alt=""
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
                <hr />
              </Col>
              <Col md={4}>
                <hr />
                <Col className="d-flex justify-content-between">
                  <p>SubTotal</p>
                  <p>{convertRupiah.convert(jumlah)}</p>
                </Col>
                <Col className="d-flex justify-content-between">
                  <p>Qty</p>
                  <p>{qty}</p>
                </Col>
                <hr />
                <Col className="d-flex justify-content-between">
                  <p>Total</p>
                  <p>{convertRupiah.convert(jumlah)}</p>
                </Col>
                <button
                  type="button"
                  className="pt-2 pb-2"
                  style={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "red",
                    borderColor: "red",
                    borderRadius: "5px",
                  }}
                  onClick={handleShow}
                >
                  Pay
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div
        className="modal fade"
        id="thanks-for-order"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      ></div>
      <Modal
        className="p-5"
        show={show}
        onHide={handleClose}
        animation={false}
        style={{ borderRadius: "0px" }}
      >
        <p
          className="pt-3 pb-3 d-flex justify-content-center align-items-center"
          style={{ color: "#757575" }}
        >
          Thank You for Ordering in us, Please wait to verify your order
        </p>
      </Modal>
    </div>
  );
}
