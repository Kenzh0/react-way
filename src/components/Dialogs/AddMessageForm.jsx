import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    const maxLength50 = maxLengthCreator(50)
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field name="newMessageBody" component={Textarea} validate={[required, maxLength50]} placeholder="Enter your message" />
          </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    );
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)