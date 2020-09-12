import React from "react"
import "./about.scss"
import Scroll from "../scroll/scroll"

export default class DescPage extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    return (
      <div ref={this.props.setRef} className="desc-container text-center">
        <div>
          <div className="desc-wrapper col-md-8">
            <h1>Customer Safety Is Our Priority</h1>
            <p> Covid19 Safety Precautions </p>
            <p>
              Safety first, everything else comes later. All Our cooks wear mask
              and gloves while working and are regularly advised to maintain
              proper hygiene and stay clean. We guarantee you we will go the
              extra mile to ensure satisfaction.
            </p>
          </div>
        </div>
        {/* <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="team"
        /> */}
      </div>
    )
  }
}
