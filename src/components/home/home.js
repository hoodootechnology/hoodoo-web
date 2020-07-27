import React from "react"
import "./home.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"
import Modal from "react-bootstrap/Modal"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
    this.scrollToElement = this.scrollToElement.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  handleClose() {
    this.setState({
      modal: false,
    })
  }
  handleShow() {
    this.setState({
      modal: true,
    })
  }
  render() {
    return (
      <div className="home-container" ref={this.props.setRef}>
        <div className="row">
          <div
            className="background col-md-5 offset-md-1 d-none d-md-block"
            style={{ opacity: this.props.is_menu_visible ? 0.6 : 1 }}
          ></div>
          <div
            className="small-bg col-sm-12 d-block d-sm-block d-md-none"
            style={{ opacity: this.props.is_menu_visible ? 0.6 : 1 }}
          >
            <Image alt="'homepage'" filename="homepage.png" />
          </div>
          <div className="col-md-6 home-text-wrapper">
            <h1 className="home-text">
              Do you need a cook and are worried about Covid19? We can help.
            </h1>
            <p className="call-us-button" onClick={this.handleShow}>
              Call Us
            </p>
            <span className="vertical-line d-none"></span>
            <div className="chat-image d-none">
              <Image alt="'chat'" filename="chat.svg" />
            </div>
          </div>
        </div>
        <hr className="d-block d-sm-block d-md-none line" />
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="benefits"
        />
        <Modal show={this.state.modal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Call Us</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center modal-text">
            <h3>
              <br />
              Please call us for any queries on
              <br />
              <br />
              +91 8073508734
            </h3>
            <br />
            <p>We will be happy to hear from you.</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
