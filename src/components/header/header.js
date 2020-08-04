import { Link } from "gatsby"
import React from "react"
import "./header.scss"
import Image from "../image"
import { IconContext } from "react-icons"
import { FaBars, FaTimes, FaCaretRight, FaCheckCircle } from "react-icons/fa"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header_class: "white-bg",
      callback_modal: false,
      name: "",
      contact: "",
      validated: false,
      is_form_valid: true,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({
        header_class: "blue-bg",
      })
    } else {
      this.setState({
        header_class: "white-bg",
      })
    }
  }
  toggleMenu() {
    this.props.toggleMenu()
  }
  handleMouseDown(e) {
    this.toggleMenu()
    e.stopPropagation()
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent)
  }
  handleClose() {
    this.setState({
      callback_modal: false,
    })
  }
  handleShow() {
    this.setState({
      callback_modal: true,
    })
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
      this.props.updateClientData({
        name: this.state.name,
        contact: this.state.contact,
      })
    }
  }
  render() {
    return (
      <div className={`header-container ${this.state.header_class}`}>
        <header>
          <div className="header-wrapper clearfix">
            <h1 className="header">
              <span
                role="button"
                tabIndex={0}
                aria-label="Hoodoo Logo"
                onClick={() => this.scrollToElement("home")}
                onKeyDown={() => this.scrollToElement("home")}
              >
                <Image
                  className="logo-image"
                  alt="Hoodoo"
                  filename="hoodoo-logo.png"
                />
                <span className="header-title">
                  <span className="text-black">hoo</span>
                  <span>doo </span>
                </span>
              </span>
              <div className="float-right">
                <button className="btn-primary" onClick={this.handleShow}>
                  Request a Callback
                </button>
                <span className="vertical-line"> </span>
                <a
                  role="button"
                  tabIndex={0}
                  aria-label="menu"
                  className="menu-container"
                  onClick={this.handleMouseDown}
                  onKeyDown={this.handleMouseDown}
                >
                  <IconContext.Provider
                    value={{
                      className: "bars-icon",
                    }}
                  >
                    <FaBars />
                  </IconContext.Provider>
                </a>
              </div>
              <div
                role="button"
                tabIndex={0}
                aria-label="callback-button"
                onMouseDown={this.handleMouseDown}
                className={this.props.is_menu_visible ? "show" : "hide"}
              >
                <div className="menu-list-container col-md-8 offset-md-6">
                  <div className="menu-list-wrapper">
                    <div className="clearfix">
                      <div className="col-md-6 float-right">
                        <button
                          onClick={this.handleShow}
                          className="btn-primary"
                        >
                          Request a Callback
                        </button>

                        <span className="vertical-line"> </span>
                        <a className="menu-container">
                          <IconContext.Provider
                            value={{
                              className: "cross-icon",
                            }}
                          >
                            <FaTimes />
                          </IconContext.Provider>
                        </a>
                      </div>
                    </div>
                    <ul className="menu-list">
                      <li
                        className="menu-items"
                        onClick={() => this.scrollToElement("howItWorks")}
                        onKeyDown={() => this.scrollToElement("howItWorks")}
                      >
                        <span className="text"> How It Works </span>
                        <span className="right-caret">
                          <IconContext.Provider
                            value={{
                              className: "right-caret-icon",
                            }}
                          >
                            <FaCaretRight />
                          </IconContext.Provider>
                        </span>
                      </li>
                      <li className="menu-items">
                        <Link to="/blogs">
                          <span className="text"> Blog </span>
                          <span className="right-caret">
                            <IconContext.Provider
                              value={{
                                className: "right-caret-icon",
                              }}
                            >
                              <FaCaretRight />
                            </IconContext.Provider>
                          </span>
                        </Link>
                      </li>
                      <li className="menu-items">
                        <Link to="/about">
                          <span className="text"> About Us </span>
                          <span className="right-caret">
                            <IconContext.Provider
                              value={{
                                className: "right-caret-icon",
                              }}
                            >
                              <FaCaretRight />
                            </IconContext.Provider>
                          </span>
                        </Link>
                      </li>
                      <li className="menu-items">
                        <span className="text"> Contact Us </span>
                        <span className="right-caret">
                          <IconContext.Provider
                            value={{
                              className: "right-caret-icon",
                            }}
                          >
                            <FaCaretRight />
                          </IconContext.Provider>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </header>
        <Modal
          show={this.state.callback_modal}
          onHide={this.handleClose}
          className="callback-modal"
        >
          <Modal.Header closeButton className="text-center">
            <Modal.Title>Request a callback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.is_form_valid ? (
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.submitForm}
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
                  <button type="submit" className="btn-primary mx-auto">
                    Submit
                  </button>
                </div>
              </Form>
            ) : (
              <div className="text-center">
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
            )}
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
