import React, { Component } from "react";
import Block from "./Block";

import PropTypes from "prop-types";
import { connect } from "react-redux";
class Content extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: this.props.items.products
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.setState({ products: nextProps.items.products });
    }
  }
  render() {
    const { items } = this.props;
    console.log("this.props");
    console.log(this.props);
    return (
      <section class="section">
        <div class="container">
          <div className="columns is-multiline">
            {this.state.products.map(function(value, i) {
              return <Block value={value} key={i} id={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

Content.propTypes = {
  items: PropTypes.object.isRequired
};
const mapStatetoProps = state => ({
  items: state.items
});
export default connect(
  mapStatetoProps,
  {}
)(Content);
