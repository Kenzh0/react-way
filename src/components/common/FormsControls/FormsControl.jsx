import React, {Fragment} from 'react';
import styles from './FormsControl.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
      <Fragment>
          <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
              {children}
          </div>
          <div className={styles.errorText}>
              {hasError && <span>{error}</span>}
          </div>
      </Fragment>
    );
};

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (component, validate, name, placeholder, props = {}, text = "") => {
    return (
      <Fragment>
          <Field component={component}
                 validate={validate}
                 name={name}
                 placeholder={placeholder}
                 {...props}
          /> {text}
      </Fragment>
    )
}