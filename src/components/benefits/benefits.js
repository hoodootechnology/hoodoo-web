import React from "react"
import "./benefits.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"

export default class Benefits extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    var benefits = [
      {
        benefit_title: "Professional",
        benefit_image: "professional.svg",
      },
      {
        benefit_title: "Hygienic",
        benefit_image: "hygenic.svg",
      },
      {
        benefit_title: "On Time",
        benefit_image: "ontime.svg",
      },
    ]
    return (
      <div className="benefit-container" ref={this.props.setRef}>
        <h1 className="heading">Find a cook who is...</h1>
        <div className="row">
          <div className="col-md-8 benefit-details">
            {benefits.map((benefit, i) => {
              return (
                <div
                  className="col-xs-12 col-sm-12 col-md-4 details-wrapper"
                  key={i}
                >
                  <Image
                    alt={benefit.benefit_title}
                    filename={benefit.benefit_image}
                  />
                  <h3 className="step-title text-red">
                    {benefit.benefit_title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
        <hr className="d-block d-sm-block d-md-none line" />
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="howItWorks"
        />
      </div>
    )
  }
}
