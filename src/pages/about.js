import React from "react"
import "../fonts/fonts.css"
import "../components/layout.scss"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import AboutUs from "../components/about/about-home"
import Team from "../components/about/team"
import DescPage from "../components/about/desc"

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { is_menu_visible: false }
    this.BenefitsRef = React.createRef()
    this.HowItWorksRef = React.createRef()
    this.TestimonialsRef = React.createRef()
    this.HomeRef = React.createRef()
    this.DescRef = React.createRef()
    this.TeamRef = React.createRef()

    this.allRefs = {
      benefits: this.BenefitsRef,
      howItWorks: this.HowItWorksRef,
      testimonials: this.TestimonialsRef,
      home: this.HomeRef,
      desc: this.DescRef,
      team: this.TeamRef,
    }
    this.scrollToElementFun = this.scrollToElementFun.bind(this)
  }
  toggleMenu = () => {
    this.setState({
      is_menu_visible: !this.state.is_menu_visible,
    })
  }
  scrollToElementFun(ref) {
    var element = this.allRefs[ref]
    if (element && element.current) {
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      window.location.href = "/#" + ref
    }
  }
  render() {
    return (
      <div>
        <SEO
          title="About Chefed | How we provide taste with no compromise on your health"
          description="Find out about Chefed team members and the way we work and take care of our customers."
        />
        <Header
          scrollToElement={this.scrollToElementFun}
          toggleMenu={this.toggleMenu}
          is_menu_visible={this.state.is_menu_visible}
        />
        <AboutUs scrollToElement={this.scrollToElementFun} />
        <DescPage
          setRef={this.DescRef}
          scrollToElement={this.scrollToElementFun}
        />
        {/* <Team setRef={this.TeamRef} scrollToElement={this.scrollToElementFun} /> */}
        <Footer />
      </div>
    )
  }
}
