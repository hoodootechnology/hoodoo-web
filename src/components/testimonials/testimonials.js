import React from "react"
import "./testimonial.scss"
import Carousel from "react-bootstrap/Carousel"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { IconContext } from "react-icons"
import CallUsModal from "../call-us/call-us"

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      display_content: [], // or your default width here
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions)
    this.updateWindowDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState(
      {
        width: window.innerWidth,
      },
      function () {
        this.setState({
          display_content: this.applicable_content(),
        })
      }
    )
  }
  callUsModalRef = ref => {
    if (ref) {
      this.showModal = ref.handleContactShow
    }
  }

  handleContactShow = () => {
    if (this.showModal) {
      this.showModal()
    }
  }

  testimonials = [
    {
      name: "Rashmi Kumar",
      date: "10th July",
      msg:
        "I was skeptical before hiring them due to covid, but their focus on cook’s <b>hygiene and sanitization</b> in trial got me to subscribe for the monthly plan. Its going great guys.. keep it up!",
      rating: 5,
      place: "Marathahalli, Bangalore",
    },
    {
      name: "Shalinee Singh",
      date: "4th August",
      msg:
        "Couldn’t ask for more. I get <b>home cooked food</b> even in the pandemic. Wish you could deliver groceries too with the cook.",
      rating: 4,
      place: "HSR Layout, Bangalore",
    },
    {
      name: "Utkarsh Tiwari",
      date: "19th July",
      msg:
        "We hired a cook from them. It has been two months now and I think it was a good decision. Hoodoo delivers on its promise of providing <b>reliable cooks.</b>",
      rating: 5,
      place: "Electronic City, Bangalore",
    },
  ]
  applicable_content = () => {
    let content = []
    if (this.state.width <= 768) {
      this.testimonials.forEach((item, i) => {
        content[`page${i}`] = [item]
      })
      return content
    } else {
      var count = 0
      for (let i = 0; i < this.testimonials.length; i = i + 3) {
        for (let x = 0; x < 3; x++) {
          if (x === 0) {
            content[`page${count}`] = [this.testimonials[i + x]]
          } else {
            if (this.testimonials[i + x])
              content[`page${count}`].push(this.testimonials[i + x])
          }
        }
        count++
      }
      return content
    }
  }
  render() {
    return (
      <div className="testimonial-container" ref={this.props.setRef}>
        <p className="heading heading-1">Reviews about us</p>
        <Carousel>
          {Object.keys(this.state.display_content).map((page, i) => {
            return (
              <Carousel.Item key={i} className="carousel-container">
                {this.state.display_content[page].map((testimonial, test_i) => {
                  return (
                    <div key={test_i} className="testimonial">
                      <p className="user-name"> {testimonial.name} </p>
                      <p className="date my-0 pb-0"> {testimonial.date} </p>
                      <p className="date pt-0"> {testimonial.place} </p>
                      <hr className="hr" />
                      <div className="message-wrapper">
                        <p
                          className="message"
                          dangerouslySetInnerHTML={{
                            __html: testimonial.msg
                          }}
                        ></p>
                        <div className="ratings">
                          {[...Array(testimonial.rating)].map(
                            (rating, index) => {
                              return (
                                <IconContext.Provider
                                  key={index}
                                  value={{
                                    className: "stars filled-stars",
                                  }}
                                >
                                  <FaStar />
                                </IconContext.Provider>
                              )
                            }
                          )}
                          {[...Array(5 - testimonial.rating)].map(
                            (rating, index) => {
                              return (
                                <IconContext.Provider
                                  key={index}
                                  value={{
                                    className: "stars empty-stars",
                                  }}
                                >
                                  <FaStarHalfAlt />
                                </IconContext.Provider>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div className="text-center py-4">
          <p className="heading heading-1">Get your free trial today!</p>
          <span className="call-us-button mb-0"
            onClick={this.handleContactShow}>
            Call Us
          </span>
        </div>
        <CallUsModal ref={this.callUsModalRef}></CallUsModal>
      </div>
    )
  }
}
