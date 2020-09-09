import React from "react"
import "./last-call-us.scss"
import CallUsModal from "../call-us/call-us"

export default class LastCallUs extends React.Component {
  constructor(props) {
    super(props)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  callUsModalRef = ref => {
    if (ref) {
      this.showModal = ref.handleContactShow
    }
  }
  handleContactShow = () => {
    if (this.showModal) {
      this.showModal()
    }
  }
  render() {
    return (
      <div className="call-us-container">
        <div className="text-center py-4">
          <p className="heading heading-1">Get your free trial today!</p>
          <span className="call-us-button mb-0" data-sal="zoom-in"
            data-sal-duration="500"
            data-sal-easing="ease-out"
            onClick={this.handleContactShow}>
            Call Us
          </span>
        </div>
        <CallUsModal ref={this.callUsModalRef}></CallUsModal>
      </div>
    )
  }
}
