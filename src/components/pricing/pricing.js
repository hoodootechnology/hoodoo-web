import React from "react"
import { Link } from "gatsby"
import "./pricing.scss"
import Image from "../image"
import Scroll from "../scroll/scroll"
import TrialModal from "../trial-modal/trial-modal";

export default class Pricing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open_trial_form: false,
    }
    this.scrollToElement = this.scrollToElement.bind(this)

  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }

  trialModalRef = ref => {
    if (ref) {
      this.showModal = ref.handleTrialShow
    }
  }

  handleTrialShow = () => {
    if (this.showModal) {
      this.showModal(true)
    }
  }
  render() {
    return (
      <div className="pricing-container"
        ref={this.props.setRef}
        id="pricing">
        <p className="heading heading-1">Pocket friendly prices</p>
        <div className="row">
          <div className="col-md-3 plan-details trial offset-md-2 my-4"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="ease-out">
            <div className="trial-data-col">
              <div className="text-center trial-data">
                <p className="text-white heading-1 mb-3">Trial</p>
                <p className="text-white">Get 2 meals for</p>
                <span className="strike-text text-xl text-white">₹299</span>
                <p className="free">FREE</p>
                <button type="button" className="btn-primary mt-4" onClick={this.handleTrialShow}>Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 plan-details offset-md-2 my-4"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease-out">
            <div className="monthly-data-col">
              <div className="text-center monthly-data">
                <p className="heading-1 mb-3">Monthly Plan</p>
                <br></br>
                <p className="text-xl text-red">₹5500</p>
                <br />
                <Link to="/plans">
                  <button type="button" className="btn-primary more-details mt-4">More Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-block d-sm-block d-md-none line" />
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="testimonials"
        />
        <TrialModal ref={this.trialModalRef}></TrialModal>
      </div>
    )
  }
}
