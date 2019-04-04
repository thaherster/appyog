import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../actions/actions";

class Button extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    console.log("ADD CLICKED");
    this.props.addProduct();
  }
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li>
                <button
                  class="sticky button is-rounded is-primary"
                  onClick={this.onClick}
                >
                  <span class="icon is-small">
                    <i class="fas fa-plus" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Button.propType = {
  addProduct: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  items: state.items
});

export default connect(
  mapStatetoProps,
  { addProduct }
)(Button);
