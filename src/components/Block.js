import React, { Component } from "react";
import classnames from "classnames";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateProduct } from "../actions/actions";

class Block extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isDuplicate: false
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClick(e) {
    console.log("UPDATE CLICKED");
    e.preventDefault();
    console.log(this.state.text);
    console.log(this.props.id);
    let newproducts = this.props.items.products;

    newproducts[this.props.id] = {
      text: this.state.text,
      isDuplicate: false
    };
    this.props.updateProduct(newproducts);
  }

  componentDidMount() {
    this.setState({
      text: this.props.value.text,
      isDuplicate: this.props.value.isDuplicate
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.value.text,
      isDuplicate: nextProps.value.isDuplicate
    });
  }

  render() {
    return (
      <div className="column is-one-quarter">
        <article
          class={classnames("media notification", {
            "is-info": !this.state.isDuplicate,
            "is-primary": this.state.isDuplicate
          })}
        >
          <div class="media-content">
            <div class="content">
              <p class="is-size-5">
                <input
                  class="input"
                  type="text"
                  name="text"
                  placeholder="Ball,1,2,2,1,ball"
                  value={this.state.text}
                  onChange={this.onChange}
                />
              </p>
              <button onClick={this.onClick} className="button is-danger">
                update
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

Block.propType = {
  updateProduct: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  items: state.items
});

export default connect(
  mapStatetoProps,
  { updateProduct }
)(Block);
