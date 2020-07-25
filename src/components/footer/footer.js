import React from "react"
import "./footer.scss"

export default class Footer extends React.Component {
  render() {
    var content = {
      Links: [
        {
          title: "Home",
          link_url: "home",
        },
        {
          title: "About",
          link_url: "home",
        },
        {
          title: "How It Works",
          link_url: "home",
        },
      ],
      Connect: [
        {
          title: "Facebook",
          link_url: "",
        },
        {
          title: "Instagram",
          link_url: "",
        },
        {
          title: "LinkedIn",
          link_url: "",
        },
      ],
      Blog: [
        {
          title: "Medium",
          link_url: "",
        },
      ],
      Contact: [
        {
          title: "hello@hoodoo.co.in",
          link_url: "",
        },
      ],
    }

    return (
      <footer>
        <div className="footer-container row">
          <div className="col-sm-8 offset-sm-2">
            <div className="row">
              {Object.keys(content).map((item, i) => {
                return (
                  <div className="col-sm-3" key={i}>
                    <p className="footer-title">{item}</p>
                    {content[item].map((links, i) => {
                      return (
                        <div key={i}>
                          <p className="footer-links">{links.title}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <hr />
            <div>
              <p className="footer">
                Copyright {new Date().getFullYear()} @ hoodoo.co.in
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
