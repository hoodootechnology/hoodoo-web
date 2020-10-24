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
            Chefed is a cool hiring startup that will not disappoint you.We are
            run by people from IIT Bombay and XLRI Jamshedpur.and currently
            operate in Bengaluru, India.We are a registered organisation whose
            aim is to provide you with hygienic, professional and reliable
            cooks.
          </p>
          <h3 className="sub-heading">How we do it</h3>
          <p className="sub-desc">
            Chefed puts the customer in touch with a cook from our inventory of
            cook who match your requirements. We always ensure that the cooks we
            put our customers in touch with are trustworthy and safe. We make it
            a point to check that our cooks obey proper hygiene and are regular.
          </p>
        </div>
      </div>
    )
  }
}
