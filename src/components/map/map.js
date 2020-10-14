import React from "react"
import Image from "../image"
import "./map.scss"

export default class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var pins = [{
      'img': 'pin1.svg',
      'top': '19%',
      'left': '10%'
    }, {
      'img': 'pin2.svg',
      'top': '26%',
      'left': '20%'
    },
    {
      'img': 'pin3.svg',
      'top': '38%',
      'left': '87%'
    },
    {
      'img': 'pin5.svg',
      'top': '31%',
      'left': '4%'
    },
    {
      'img': 'pin3.svg',
      'top': '44%',
      'left': '30%'
    },
    {
      'img': 'pin2.svg',
      'top': '53%',
      'left': '26%'
    },
    {
      'img': 'pin4.svg',
      'top': '52%',
      'left': '76%'
    },
    {
      'img': 'pin5.svg',
      'top': '28%',
      'left': '59%'
    },
    {
      'img': 'pin3.svg',
      'top': '56%',
      'left': '50%'
    },
    {
      'img': 'pin2.svg',
      'top': '12%',
      'left': '34%'
    },
    {
      'img': 'pin1.svg',
      'top': '47%',
      'left': '5%'
    },
    {
      'img': 'pin1.svg',
      'top': '47%',
      'left': '58%'
    },
    {
      'img': 'pin5.svg',
      'top': '38%',
      'left': '69%'
    },
    {
      'img': 'pin1.svg',
      'top': '60%',
      'left': '68%'
    }
    ]
    return (
      <div className="map-container">
        <div className="map-image">
          <Image alt="'map'" filename="blr-map.svg" />
          {pins.map((pin, pin_i) => {
            return (
              <div className="map-pin"
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-easing="ease-out"
                data-sal-delay="300"
                style={{ top: pin.top, left: pin.left }} key={pin_i}>
                <Image alt="pin" filename={pin.img}></Image>
              </div>
            )
          })
          }
          <span className="map-name">Bangalore</span>
        </div>
        <div className="data-container">
          <div className="data-wrapper">
            <h1 className="number text-center font-bold mb-3" data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease-out"><span>50+</span></h1>
            <p className="title">Happy Customers</p>
          </div>
          <div className="data-wrapper">
            <h1 className="number text-center font-bold mb-3" data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease-out"
              data-sal-delay="200"><span>20+</span></h1>
            <p className="title">Professional Cooks</p>
          </div>
          <div className="data-wrapper">
            <h1 className="number text-center font-bold mb-3" data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease-out"
              data-sal-delay="300"><span>1</span></h1>
            <p className="title">Thriving Location</p>
          </div>
        </div>

      </div>
    )
  }
}
