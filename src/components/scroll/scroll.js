import React from "react"
import "./scroll.scss"
import { IconContext } from "react-icons"
import { FaAngleDown } from "react-icons/fa"

export default class Scroll extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    return (
      <div className="scroll-wrapper">
        <p className="text-center">
          <span> Scroll down </span> <br />
          <span
            role="button"
            aria-label="scroll-button"
            tabIndex={0}
            onClick={() => this.scrollToElement(this.props.element)}
            onKeyDown={() => this.scrollToElement(this.props.element)}
          >
            <IconContext.Provider
              value={{
                className: "arrow-icon",
              }}
            >
              <FaAngleDown />
            </IconContext.Provider>
          </span>
        </p>
      </div>
    )
  }
}
