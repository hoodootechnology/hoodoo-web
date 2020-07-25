import React from "react"
import "./about.scss"
import Scroll from "../scroll/scroll"

export default class DescPage extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this)
  }
  scrollToElement(el) {
    this.props.scrollToElement(el)
  }
  render() {
    return (
      <div ref={this.props.setRef} className="desc-container text-center">
        <div>
          <div className="desc-wrapper col-md-8">
            <h1>Customer Safety Is Our Priority</h1>
            <p>
              Search Results Featured snippet from the web Image result for add
              redirect to in react function import from "react-router-dom"; The
              easiest way to use this method is by maintaining a redirect
              property inside the state of the component. Whenever you want to
              redirect to another path, you can simply change the state to
              re-render the component, thus rendering the
            </p>
          </div>
        </div>
        <Scroll
          {...this.props}
          scrollToElement={this.scrollToElement}
          element="team"
        />
      </div>
    )
  }
}
