import React from "react"
import Modal from "react-bootstrap/Modal"
import Image from "../image"
import "./trial-modal.scss"

export default class TrialModal extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleTrialShow = this.handleTrialShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      show: false,
    }
  }

  handleTrialShow() {
    this.setState({ show: true })
  }
  handleClose() {
    this.setState({ show: false })
  }
  render() {
    return (
      <Modal centered show={this.state.show} onHide={this.handleClose} className="trial-modal" size="xl">
        <Modal.Body className="trial-modal-body px-0 py-0">
          <div className="row">
            <div className="col trial-data-col">
              <div className="text-center trial-data">
                <p className="text-white heading-1">Get 2 meals for</p>
                <span className="text-xl text-white">₹299</span>
                <p className="text-red heading-1 free">Free</p>
                <button type="button" className="btn-primary">Book Now</button>
              </div>
            </div>
            <div className="col image-col">
              <Image alt="'homepage'" filename="homepage.png" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}
