import React from "react"
import Modal from "react-bootstrap/Modal"

export default class CallUsModal extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleContactShow = this.handleContactShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      show: false,
    }
  }

  handleContactShow() {
    this.setState({ show: true })
  }
  handleClose() {
    this.setState({ show: false })
  }
  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Call Us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center modal-text">
          <h3>
            <br />
            Please call us for any queries on
            <br />
            <br />
            <a href="tel:+91-968-770-4308" className="text-red">9687 704 308</a>
          </h3>
          <br />
          <p>We will be happy to hear from you.</p>
        </Modal.Body>
      </Modal>
    )
  }
}
