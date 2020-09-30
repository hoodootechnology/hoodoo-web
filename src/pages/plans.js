import React from "react"
import "../fonts/fonts.css"
import "../components/layout.scss"
import SEO from "../components/seo"
import Image from "../components/image"
import Form from "react-bootstrap/Form"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import LastCallUs from "../components/last-call-us/last-call-us"
import basicPlans from "../mock-data/basic-plans.json"
import "./plans.scss"

export default class Plans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      is_menu_visible: false,
      mealPreference: {
        breakfast: true,
        lunch: false,
        dinner: false
      },
      utensils: "yes",
      cookFrequency: 'one'
    }
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
    this.onUtensilsChanged = this.onUtensilsChanged.bind(this)
    this.onFrequencyChanged = this.onFrequencyChanged.bind(this)
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
  onUtensilsChanged(e) {
    this.setState({
      utensils: e.currentTarget.value
    });
  };
  onFrequencyChanged(e) {
    this.setState({
      cookFrequency: e.currentTarget.value
    });
  };
  onMealChanged(type, e) {
    var mealPreference = { ... this.state.mealPreference }
    mealPreference[type] = !mealPreference[type];
    this.setState({ mealPreference });
  }
  render() {
    var price_list = basicPlans;
    return (
      <div>
        <SEO title="Plans | Know about the pricing plans that we have to cater to your different needs" description="Know more about Hoodoo, follow us on social media. Know about the pricing plans that we have to cater to your different needs." />
        <Header
          scrollToElement={this.scrollToElementFun}
          toggleMenu={this.toggleMenu}
          is_menu_visible={this.state.is_menu_visible}
        />
        <div className="plans-container">
          <h1 className="heading">Hoodoo Price Chart</h1>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <table className="table table-responsive table-striped plans-table text-center">
                <thead>
                  <tr>
                    <th><p className="mb-0 table-header">Residents</p></th>
                    <th><p className="mb-0 table-header">1 meal</p></th>
                    <th><p className="mb-0 table-header">Breakfast + 1 meal</p></th>
                    <th><p className="mb-0 table-header">2 meals</p></th>
                    <th><p className="mb-0 table-header">Breakfast + 2 meals</p></th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  {price_list.map((plan, i) => {
                    return (
                      <tr key={i} className="plans-wrapper">
                        <td>{plan.numberOfPeople}</td>
                        <td>{plan.one_meal}</td>
                        <td>{plan.one_meal_breakfast}</td>
                        <td>{plan.two_meals}</td>
                        <td>{plan.two_meals_breakfast}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <p className="disclaimer mb-0">*All Charges mentioned above are indicative and may vary depending on the number of visits/day and other factors such as distance/cook experience etc.</p>
              <p className="disclaimer">**All Charges mentioned above are calculated for 1 visit/day by the cook.</p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="custom-price-container mt-4">
                <h1 className="heading py-4">Check Custom Plan Prices</h1>
                <div className="row">
                  <div className="col-md-6 form-container">
                    <Form
                      noValidate
                      validated={this.state.validated}
                      onSubmit={this.submitForm}
                    >
                      <div className="row pb-2">
                        <div className="col-md-5 offset-md-1">
                          <p className="mt-3 mb-0 text-right">Number of people</p>
                        </div>
                        <div className="col-md-5">
                          <Form.Group controlId="priceForm">
                            <Form.Control
                              className="number-input"
                              type="text"
                              value={this.state.name}
                              onChange={this.handleNameChange}
                              required
                              pattern="[1-9]{1}[0-9]{9}"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter number of people.</Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col-md-5 offset-md-1">
                          <p className="mb-0 text-right">Meals</p>
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                            className="custom-checkbox"
                            type="checkbox"
                            id='breakfast'
                            label="Breakfast"
                            onChange={(e) => this.onMealChanged("breakfast", e)}
                            checked={this.state.mealPreference.breakfast}
                          />
                          <Form.Check
                            className="custom-checkbox"
                            type="checkbox"
                            id='lunch'
                            label="Lunch"
                            onChange={(e) => this.onMealChanged("lunch", e)}
                            checked={this.state.mealPreference.lunch}
                          />
                          <Form.Check
                            className="custom-checkbox"
                            type="checkbox"
                            id='dinner'
                            label="Dinner"
                            onChange={(e) => this.onMealChanged("dinner", e)}
                            checked={this.state.mealPreference.dinner}
                          />
                        </div>
                      </div>
                      <div className="row pb-4">
                        <div className="col-md-5 offset-md-1">
                          <p className="mb-0 text-right">Number of times cook would everyday</p>
                        </div>
                        <div className="col-md-5 my-auto">
                          <Form.Check inline
                            className="custom-radio"
                            type="radio"
                            id='one'
                            label="1"
                            name="cookFrequency"
                            value="one"
                            onChange={this.onFrequencyChanged}
                            checked={this.state.cookFrequency === "one"}
                          />
                          <Form.Check inline
                            className="custom-radio"
                            type="radio"
                            id='two'
                            label="2"
                            name="cookFrequency"
                            value="two"
                            onChange={this.onFrequencyChanged}
                            checked={this.state.cookFrequency === 'two'}
                          />
                          <Form.Check inline
                            className="custom-radio"
                            type="radio"
                            id='three'
                            label="3"
                            name="cookFrequency"
                            value="three"
                            onChange={this.onFrequencyChanged}
                            checked={this.state.cookFrequency === "three"}
                          />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-md-5 offset-md-1">
                          <p className="mt-0 text-right">Utensils cleaning required?</p>
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                            className="custom-radio"
                            type="radio"
                            id='yes'
                            label="Yes"
                            name="utensils"
                            value="yes"
                            onChange={this.onUtensilsChanged}
                            checked={this.state.utensils === "yes"}
                          />
                          <Form.Check
                            className="custom-radio"
                            type="radio"
                            id='no'
                            label="No"
                            name="utensils"
                            value="no"
                            onChange={this.onUtensilsChanged}
                            checked={this.state.utensils === "no"}
                          />
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <button type="submit" className="btn-primary mx-auto">
                          Submit
                  </button>
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-6 pl-0">
                    <Image className="mb-0" alt="'custome price'" filename="custom-price.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <LastCallUs />
        <Footer />
      </div >
    )
  }
}
