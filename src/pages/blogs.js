import React from "react"
import "../fonts/fonts.css"
import "../components/layout.scss"
import SEO from "../components/seo"
import Image from "../components/image"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
// import { Link } from "@reach/router"
import "./blogs.scss"

export default class Blogs extends React.Component {
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
      window.location.href = "/#" + ref;
    }
  }
  render() {
    var blog_list = [
      {
        name: "The Easiest Way To Follow A Diet!",
        desc:
          "What do you believe is the root cause of a diet plan failing? Apart from your cravings of course! Most believe that the constant effort needed to avail and prepare a balanced diet stops us to follow our diet plans. What if we tell you a hack into this. Read on.",
        author: "Kopal Awasthi",
        img: "kopal_blog_1.png",
        medium_link:
          "https://medium.com/@awasthi.kopal/the-easiest-way-to-follow-a-diet-197ed5dd6596",
      },
      {
        name: "Home Cooked Food and Eating Habits",
        desc: "A guide to why eating homemade food can make a difference",
        author: "Kopal Awasthi",
        img: "kopal_blog_2.png",
        medium_link:
          "https://medium.com/@awasthi.kopal/staying-away-from-home-sitting-in-front-of-laptops-attending-meetings-yes-this-is-how-our-day-c7120b285c76",
      },
      {
        name: "Food For Thought",
        desc:
          "People are only as capable as the food they put into their body. Said who? Said history. The ancient Romans have hardened warriors having wiry bodies and mental acuteness...",
        author: "Kopal Awasthi",
        img: "dummy_blog.jpeg",
        medium_link:
          "https://medium.com/@awasthi.kopal/staying-away-from-home-sitting-in-front-of-laptops-attending-meetings-yes-this-is-how-our-day-c7120b285c76",
      },
    ]
    return (
      <div>
        <SEO title="Blogs | Read the blogs related to Hoodoo to know more about us" description="Know more about Hoodoo, follow us on social media and read our blogs to get familiar with the way we maintain taste and health." />
        <Header
          scrollToElement={this.scrollToElementFun}
          toggleMenu={this.toggleMenu}
          is_menu_visible={this.state.is_menu_visible}
        />
        <div className="blogs-container">
          <h1 className="heading">Read about us...</h1>
          {blog_list.map((blog, i) => {
            return (
              <div key={i} className="row blog-wrapper">
                <div className="col-md-2 offset-md-2">
                  <Image alt={blog.name} filename={blog.img} />
                </div>
                <div className="col-md-6">
                  <a href={blog.medium_link} className="heading">
                    {blog.name}
                  </a>
                  <p className="desc">{blog.desc}</p>
                  <a href={blog.medium_link}>Read on Medium</a>
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
      </div>
    )
  }
}
