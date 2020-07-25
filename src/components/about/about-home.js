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
            Search Results Featured snippet from the web Image result for add
            redirect to in react function import from "react-router-dom"; The
            easiest way to use this method is by maintaining a redirect property
            inside the state of the component. Whenever you want to redirect to
            another path, you can simply change the state to re-render the
            component, thus rendering the
          </p>
          <h3 className="sub-heading">What we do</h3>
          <p className="sub-desc">
            Search Results Featured snippet from the web Image result for add
            redirect to in react function import from "react-router-dom"; The
            easiest way to use this method is by maintaining a redirect property
            inside the state of the component. Whenever you want to redirect to
            another path, you can simply change the state to re-render the
            component, thus rendering the
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
