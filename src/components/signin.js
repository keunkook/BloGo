import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import '../style/signin.css';
import { renderSVG } from './render_svg';

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        padding: '32px',
        boxSizing: 'border-box',
        width: '568px'
    }
}

Modal.setAppElement('#root');

class SignIn extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    renderField (field) {
        const { meta: { touched, error, active }} = field;
        const isActive = `${active ? 'input-ctn-active' : 'input-ctn'}`
        const isTouchNError = `sign-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className='fieldWrap'>
                <div className={isTouchNError}>
                    <div className={isActive}>
                        <div className="svg-div">
                            <div className="svg-opt">
                                <svg
                                viewBox="0 0 24 24"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                                style={{height: "1em", width: "1em", dispaly: "block", fill: "currentcolor"}}
                                >
                                    {renderSVG(field.type)}
                                </svg>
                            </div>
                        </div>
                        <input
                            className='form-control'
                            type={field.type}
                            {...field.input}
                            placeholder={`${field.label}`}
                            autoComplete="off" />
                    </div>
                    <div className='text-help'><span>{touched ? error : ''}</span></div>
                </div>
            </div>
        );
    }

    onSubmit (values) {
        // action
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="signModal">
                <Modal
                    id='signin'
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    style={customStyle}
                    contentLabel='Sign Modal'
                    shouldCloseOnOverlayClick={true}
                    >
                    <div className="exit-btn">
                        <button className="modal-close btn" onClick={this.props.closeModal}>x</button>
                    </div>
                    <section>
                        <div>
                            <div style={{marginBottom:'8px'}}>
                                <form action="/oauth_connect?from=facebook_signup&service=facebook" method="POST">
                                    <input 
                                    type="hidden"
                                    name="authenticity_token"
                                    value="reqtoken" />
                                    <button
                                    type="submit"
                                    className="btn login-btn"
                                    aria-busy="false">
                                        <span className="login-opt">
                                            <div className="login-wrap">
                                                <div className="logo-ctn">
                                                    <div style={{marginRight: "12px"}}>
                                                    {renderSVG('facebook')}
                                                    </div>
                                                </div>
                                                <div className="logo-ctn">
                                                    <span>페이스북 계정으로 로그인</span>
                                                </div>
                                            </div>
                                        </span>
                                    </button>
                                </form>
                            </div>
                            {/* 구글 로그인 */}
                            <form
                            action="/oauth_connect?from=google_signup&service=google"
                            method="POST">
                                <input
                                type="hidden"
                                name="authenticity_token"
                                value="reqtoken" />
                                <button
                                type="submit"
                                className="btn login-btn google-login"
                                aria-busy="false">
                                    <span className="login-opt">
                                        <div className="login-wrap">
                                            <div className="logo-ctn">
                                                <div  style={{marginRight:"12px"}}>
                                                    {renderSVG('google')}
                                                </div>
                                            </div>
                                            <div className="logo-ctn">
                                                <span>구글 계정으로 로그인</span>
                                            </div>
                                        </div>
                                    </span>
                                </button>
                            </form>
                        </div>
                        <div style={{marginTop: "16px", marginBottom: "16px"}}>
                            <div style={{textAlign: "center", overflow: "hidden"}}>
                                <span className="div-ctn">
                                    <span className="div-opt">
                                        <span>또는</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Field
                                    type='email'
                                    label='E-mail address'
                                    name='email'
                                    component={this.renderField} 
                                />
                                <Field
                                    type='password'
                                    label='Password'
                                    name='password'
                                    component={this.renderField}
                                />
                                <div style={{marginBottom: "16px"}}>
                                    <div className="va-container">
                                        <div className="va-middle">
                                            <label className="label-ctn" htmlFor="email-login-remember-me-checkbox">
                                                <div style={{display: "table-row"}}>
                                                    <div className="label-opt">
                                                        <span className="lable-span">
                                                            <input
                                                            type="checkbox"
                                                            className="label-input"
                                                            id="email-login-remember-me-checkbox"
                                                            name="remember_me"
                                                            value="1">
                                                            </input>
                                                            {/* <span 
                                                            data-fake-checkbox="true"
                                                            data-style-select="false"
                                                            data-style-default="true"
                                                            className="label-span-span">
                                                            </span> */}
                                                        </span>
                                                    </div>
                                                    <div className="label-opt">
                                                        <span className="label-opt-span">비밀번호 저장
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginBottom: "16px"}}>
                                    <div style={{marginTop: "8px"}}>
                                        <div className="forgot-password">
                                            <span className="forgot-password-btn" onClick={this.props.onForgotPassword}>
                                                비밀번호가 생각나지 않으세요?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginBottom: "16px"}}>
                                    <button className="modal-submit">Sign In</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div style={{marginTop: "16px", marginBottom: "16px"}}>
                            <div style={{borderBottom: "1px solid rgb(219, 219, 219)"}} />
                        </div>
                        <div className="va-container">
                            <span className="va-middle">
                                <span className="foot-msg">
                                    계정이 없으신가요?
                                </span>
                                <div className="foot-login">
                                    <span className="foot-login-opt">
                                        <span className="btn-sign" onClick={this.props.onSignUp}>
                                            Sign Up
                                        </span>
                                    </span>
                                </div>
                            </span>
                        </div>
                    </section>
                </Modal>
            </div>
        );
    }
}

function validate (values) {
    const errors = {}

    if (!values.email) {
        errors.email = '메일주소를 입력해주세요.'
    }

    if (!values.password) {
        errors.password = '암호를 입력해주세요.'
    }

    return errors;
}

function mapStateToProps({ form }) {
    return { form };
}

export default reduxForm({
    validate,
    form: 'SignInForm'
})(connect(mapStateToProps)(SignIn));