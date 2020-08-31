import React from "react"
import "./home.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"
import CallUsModal from "../call-us/call-us"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
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
            <p className="call-us-button" onClick={this.handleContactShow}>
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
        <CallUsModal ref={this.callUsModalRef}></CallUsModal>
      </div>
    )
  }
}
