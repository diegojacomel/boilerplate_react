// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

import Dropzone from "react-dropzone";

// Types
import { FETCH_REGISTER_FORM } from '../../redux/form/types';

const RegisterWrapper = styled('div')`
    display: block;
`

class Register extends Component {
    state = {}

    registerData = (data) => {
        const { props: { dispatch } } = this;
        
        dispatch({
            type: FETCH_REGISTER_FORM.SUCCESS,
            data
        })
    }

    render() {
        return (
            <RegisterWrapper>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        files: []
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 500);

                        alert(
                            JSON.stringify({
                                files: values.files.map(file => ({
                                    fileName: file.name,
                                    type: file.type,
                                    size: `${file.size} bytes`
                                })),
                            }, null, 2)
                        );
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                        .email()
                        .required('Required'),
                    })}
                    >
                    {form => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            setFieldValue
                        } = form;

                        return (
                            <Form>
                                <Dropzone onDrop={(acceptedFiles) => {
                                    if (acceptedFiles.length === 0) { return; }
                                    setFieldValue("files", values.files.concat(acceptedFiles));
                                }}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Click</p>
                                            </div>
                                            {values.files && values.files
                                                ?
                                                <Thumbnail file={new Blob(values.files)} />
                                                :
                                                null
                                            }
                                        </section>
                                    )}
                                </Dropzone>
                                <Field
                                    component={Input}
                                    id="email"
                                    placeholder="Enter your email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onKeyUp={(e) => this.registerData(form.values)}
                                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                                />
                                {errors.email && touched.email &&
                                    <div className="input-feedback">
                                        {errors.email}
                                    </div>
                                }
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="success"
                                >
                                    Submit
                                </Button>
                            </Form>
                        );
                    }}
                    </Formik>
            </RegisterWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default connect(mapStateToProps)(Register);