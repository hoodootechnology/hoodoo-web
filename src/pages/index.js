import React from "react"
import "../fonts/fonts.css"
import "../components/layout.scss"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import SEO from "../components/seo"
import Home from "../components/home/home"
import Benefits from "../components/benefits/benefits"
import HowItWorks from "../components/how-it-works/how-it-works"
import Testimonials from "../components/testimonials/testimonials"
import LastCallUs from "../components/last-call-us/last-call-us"
import TrialModal from "../components/trial-modal/trial-modal"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { is_menu_visible: false }
    this.BenefitsRef = React.createRef()
    this.HowItWorksRef = React.createRef()
    this.TestimonialsRef = React.createRef()
    this.HomeRef = React.createRef()
    this.timer = null;
    this.allRefs = {
      benefits: this.BenefitsRef,
      howItWorks: this.HowItWorksRef,
      testimonials: this.TestimonialsRef,
      home: this.HomeRef,
    }
    this.scrollToElementFun = this.scrollToElementFun.bind(this)
    this.updateClientData = this.updateClientData.bind(this)
  }

  // componentDidMount() {
  //   this.timer = setTimeout(() => this.handleTrialShow(), 0)
  // }
  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }
  toggleMenu = () => {
    this.setState({ is_menu_visible: !this.state.is_menu_visible })
  }
  scrollToElementFun(ref) {
    var element = this.allRefs[ref]
    if (element && element.current) {
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  updateClientData(data) {
    let url =
      "https://script.google.com/macros/s/AKfycbyjI82hmp8k3ocAOvsAVTLnI5DoZJiUB6M8b3Yd-opYC004ErIu/exec"

    const form = new FormData()
    form.set("name", data.name)
    form.set("contact", data.contact)
    form.set("date", new Date().toLocaleDateString())
    fetch(url, { method: "POST", body: form })
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message))
  }
  updateBookingData(data) {
    let url =
      "https://script.google.com/macros/s/AKfycbyjI82hmp8k3ocAOvsAVTLnI5DoZJiUB6M8b3Yd-opYC004ErIu/exec"

    const form = new FormData()
    form.set("name", data.name)
    form.set("contact", data.contact)
    form.set("date", new Date().toLocaleDateString())
    form.set("type", 'BOOKING')
    fetch(url, { method: "POST", body: form })
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message))
  }
  trialModalRef = ref => {
    if (ref) {
      this.showTrialModal = ref.handleTrialShow
    }
  }

  handleTrialShow = () => {
    if (this.showTrialModal) {
      this.showTrialModal()
    }
  }

  render() {
    return (
      <div>
        <Header
          scrollToElement={this.scrollToElementFun}
          toggleMenu={this.toggleMenu}
          is_menu_visible={this.state.is_menu_visible}
          updateClientData={this.updateClientData}
        />
        <div>
          <SEO title="Welcome to Hoodoo - Get cooks in Bangalore" />
          <TrialModal ref={this.trialModalRef}
            updateBookingData={this.updateBookingData}
          />
          <Home
            {...this.props}
            setRef={this.HomeRef}
            scrollToElement={this.scrollToElementFun}
            is_menu_visible={this.state.is_menu_visible}
          />
          <Benefits
            {...this.props}
            setRef={this.BenefitsRef}
            scrollToElement={this.scrollToElementFun}
          />
          <HowItWorks
            {...this.props}
            setRef={this.HowItWorksRef}
            scrollToElement={this.scrollToElementFun}
          />
          <Testimonials
            {...this.props}
            setRef={this.TestimonialsRef}
            scrollToElement={this.scrollToElementFun}
          />
          <LastCallUs />
          <Footer />
        </div>
      </div>
    )
  }
}
