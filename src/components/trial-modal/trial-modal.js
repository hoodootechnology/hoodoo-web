import React from "react"
import Image from "../image"
import "./trial-modal.scss"
import { IconContext } from "react-icons"
import { FaBars, FaTimes, FaCaretRight, FaCheckCircle } from "react-icons/fa"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
export default class TrialModal extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleTrialShow = this.handleTrialShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
    this.openContactForm = this.openContactForm.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      show: false,
      open_form: false,
      name: "",
      contact: "",
      validated: false,
      is_form_valid: true,
    }
  }
  openContactForm() {
    this.setState({ open_form: true })
  }
  handleTrialShow() {
    this.setState({ show: true })
  }
  handleClose() {
    this.setState({ show: false })
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleContactChange(e) {
    this.setState({ contact: e.target.value })
  }
  submitForm(event) {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      validated: true,
    })
    if (form.checkValidity() === true) {
      this.setState({
        is_form_valid: false,
      })
      this.props.updateBookingData({
        name: this.state.name,
        contact: this.state.contact,
      })
    }
  }
  render() {
    return (
      <Modal centered show={this.state.show} onHide={this.handleClose} className="trial-modal" size="xl">
        <Modal.Body className="trial-modal-body px-0 py-0">
          <div className="row">
            {!this.state.open_form ?
              (
                <div className="col trial-data-col">
                  <div className="text-center trial-data">
                    <p className="text-white heading-1">Get 2 meals for</p>
                    <span className="text-xl text-white">₹299</span>
                    <p className="text-red heading-1 free">Free</p>
                    <button type="button" className="btn-primary" onClick={this.openContactForm}>Book Now</button>
                  </div>
                </div>
              ) :
              [
                this.state.is_form_valid ? (
                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={this.submitForm} className="col mt-4 mx-4" key={this.state.name}
                  >
                    <Form.Group controlId="contactForm">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                  </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formContactNumber">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        value={this.state.contact}
                        onChange={this.handleContactChange}
                        required
                        pattern="[1-9]{1}[0-9]{9}"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid contact number
                  </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-center">
                      <button type="submit" className="confirm-button mx-auto">
                        Confirm
                  </button>
                    </div>
                  </Form>
                ) : (
                    <div className="text-center col mt-4" key={this.state.name}>
                      <IconContext.Provider
                        value={{
                          className: "check-icon",
                        }}
                      >
                        <FaCheckCircle />
                      </IconContext.Provider>
                      <h3 className="thank-you">Thank You!</h3>
                      <p>We'll get in touch with you shortly.</p>
                    </div>
                  )
              ]}
            <div className="col image-col">
              <div className="float-right mr-4" onClick={this.handleClose}>
                <IconContext.Provider
                  value={{
                    className: "close-icon",
                  }}
                >
                  <FaTimes />
                </IconContext.Provider></div>
              <Image alt="'homepage'" filename="homepage.png" />
            </div>
          </div>
        </Modal.Body>
      </Modal >
    )
  }
}
