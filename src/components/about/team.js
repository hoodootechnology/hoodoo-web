import React from "react"
import "./about.scss"
import Image from "../image"
import { IconContext } from "react-icons"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

export default class Team extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }

  render() {
    var members = [
      // {
      //   name: "Rahul Beniwal",
      //   profile: "IIT Bombay",
      //   profile_img: "RahulBeniwal.jpeg",
      //   social_media: {
      //     linkedin: "https://www.linkedin.com/in/rahulbeniwal/",
      //   },
      // },
      {
        name: "Kopal Awasthi",
        profile: "XLRI Jamshedpur",
        profile_img: "KopalAwasthi.jpeg",
        social_media: {
          linkedin: "https://www.linkedin.com/in/kopalawasthi/",
        },
      },
      {
        name: "Gaurav Tolani",
        profile: "IIIT Vadodara",
        profile_img: "GauravTolani.jpeg",
        social_media: {
          linkedin: "https://www.linkedin.com/in/gaurav-tolani-445a6489/",
        },
      },
      {
        name: "Rupjit Chakraborty",
        profile: "IIIT Bhubaneswar",
        profile_img: "Rupjit.jpeg",
        social_media: {
          linkedin: "https://www.linkedin.com/in/rupjit-chakraborty-ba4605159/",
        },
      },
    ]
    return (
      <div ref={this.props.setRef} className="team-container text-center">
        <div className="row team-wrapper">
          {members.map((member, i) => {
            return (
              <div className="col-sm-4" key={i}>
                <div className="profile-image">
                  <Image
                    className="logo-image"
                    alt={member.name}
                    filename={member.profile_img}
                  />
                </div>
                <div className="profile-desc mb-4">
                  <h3>{member.name}</h3>
                  <p>{member.profile}</p>
                  <div className="social-media">
                    {Object.keys(member.social_media).map((social, i) => {
                      {
                        if (social === "facebook") {
                          return (
                            <IconContext.Provider
                              key={i}
                              value={{
                                className: "social-icon",
                              }}
                            >
                              <FaFacebook />
                            </IconContext.Provider>
                          )
                        } else if (social === "linkedin") {
                          return (
                            <IconContext.Provider
                              key={i}
                              value={{
                                className: "social-icon",
                              }}
                            >
                              <FaLinkedin />
                            </IconContext.Provider>
                          )
                        } else if (social === "twitter") {
                          return (
                            <IconContext.Provider
                              key={i}
                              value={{
                                className: "social-icon",
                              }}
                            >
                              <FaTwitter />
                            </IconContext.Provider>
                          )
                        }
                      }
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
