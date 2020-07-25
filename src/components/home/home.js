import React from "react"
import "./home.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    return (
      <div className="home-container" ref={this.props.setRef}>
        <div className="row">
          <div
            className="background col-md-5 offset-md-1"
            style={{ opacity: this.props.is_menu_visible ? 0.6 : 1 }}
          ></div>
          <div className="col-md-6 home-text-wrapper">
            <h1 className="home-text">
              Do you need a cook and are worried about Covid19? We can help.
            </h1>
            <p className="call-us-button">Call Us</p>
            <span className="vertical-line"></span>
            <div className="chat-image">
              <Image alt="'chat'" filename="chat.svg" />
            </div>
          </div>
        </div>
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="benefits"
        />
      </div>
    )
  }
}
