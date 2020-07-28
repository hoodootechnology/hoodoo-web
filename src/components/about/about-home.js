import React from "react"
import "./about.scss"
import Scroll from "../scroll/scroll"

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    return (
      <div className="about-container text-center">
        <div className="about-wrapper">
          <h2 className="about-heading">About Us</h2>
          <h3 className="sub-heading">Who we are</h3>
          <p className="sub-desc">
            Hoodoo is a cool hiring startup that will not disappoint you. We
            currently operate in Bengaluru, India. We are registered
            organisation whose aim is to provide you with reliable cooks.
          </p>
          <h3 className="sub-heading">What we do</h3>
          <p className="sub-desc">
            Hoodoo hires or puts a customer in touch with a cook. We always
            ensure that the cooks we put our customers in touch with are
            trustworthy and safe. We make it a point to check that our cooks
            obey proper hygiene and are regular.
          </p>
        </div>
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="desc"
        />
      </div>
    )
  }
}
