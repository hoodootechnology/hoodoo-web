import React from "react"
import "./how-it-works.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"

export default class HowItWorks extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    var steps = [
      {
        step: "Step 1",
        step_title: "Contact us",
        step_desc: "Let us know your requirements and available time slot",
        step_img: "step1.svg",
      },
      {
        step: "Step 2",
        step_title: "Get a free trial",
        step_desc:
          "A trained cook would be on your door at the selected time for a trial",
        step_img: "step2.svg",
      },
      {
        step: "Step 3",
        step_title: "Voila! You're done!",
        step_desc:
          "If you liked the cook, you can subscribe on a monthly basis, else you can get another cook for a trial",
        step_img: "step3.svg",
      },
    ]
    return (
      <div className="steps-container"
        ref={this.props.setRef}
        id="howItWorks">
        <p className="heading heading-1">All you need to do is...</p>
        <div className="row">
          <div className="col-md-8 steps-details">
            {steps.map((step, i) => {
              return (
                <div className="col-md-4 details-wrapper" key={i}>
                  <Image alt={step.step_title} filename={step.step_img} />
                  <h4 className="step">{step.step}</h4>
                  <h3 className="step-title">{step.step_title}</h3>
                  <p>{step.step_desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <hr className="d-block d-sm-block d-md-none line" />
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="testimonials"
        />
      </div>
    )
  }
}
