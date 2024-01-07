import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} placeholder="Post message"/>
          </div>
          <div>
              <button>Add post</button>
          </div>
      </form>
    );
};

export const AddPostReduxForm = reduxForm({form: "ProfileAddPostForm"})(AddNewPostForm)