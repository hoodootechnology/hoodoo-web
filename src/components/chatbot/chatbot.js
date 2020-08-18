import React from "react"
import { Link } from "@reach/router"
import "./chatbot.scss"

export default class Chatbot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      is_chat_open: true,
    }
    this.toggleChatbot = this.toggleChatbot.bind(this)
  }
  toggleChatbot() {
    this.setState({
      is_chat_open: !this.state.is_chat_open,
    })
  }
  render() {
    console.log(this.state)
    return (
      <div
        className="chatbot-container"
        onClick={this.toggleChatbot}
        onKeyDown={this.toggleChatbot}
      >
        <p>Chatbot</p>
        <div className={this.state.is_chat_open ? "show_bot" : "hide_bot"}>
          <div className="chat-box-wrapper">
            <p>box</p>
          </div>
        </div>
      </div>
    )
  }
}
