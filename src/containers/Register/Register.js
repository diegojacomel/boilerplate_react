// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

// Components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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
                    initialValues={{ email: '' }}
                    onSubmit={({ setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 500);
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
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleReset,
                        } = form;

                        return (
                            <Form>
                                <Field
                                    component={Input}
                                    id="email"
                                    placeholder="Enter your email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onKeyUp={() => this.registerData(form.values)}
                                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                                />
                                {errors.email && touched.email &&
                                    <div className="input-feedback">
                                        {errors.email}
                                    </div>
                                }

                                <Button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                    color="danger"
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="success">
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