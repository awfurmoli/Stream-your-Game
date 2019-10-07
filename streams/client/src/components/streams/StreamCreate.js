import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  //recives the field by prop from Field Component methode call

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
// returns an array which will be passed to renderInput methode
// by fields, van be accessed as prop of meta.eror

export default connect(
  null,
  { createStream }
)(StreamCreate);
