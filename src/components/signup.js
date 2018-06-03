import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { renderSVG } from './render_svg';
//css는 헤더에 있음(모든 요소가 공통됨)

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

// function getParent() {
//     return document.querySelector('#root');
// }

class SignUp extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);

        // this.afterOpenModal = this.afterOpenModal.bind(this);
    }
    // afterOpenModal() {
    //     this.subtitle.style.color = '#a0a0a0';
    //     <h3 ref={subtitle => this.subtitle = subtitle} >Sign Up</h3>
    // } //이런게 있어다 정도 알려고 남겨두었죠

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
                    id='signup'
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
                                    type='name'
                                    label='Name'
                                    name='name'
                                    component={this.renderField} 
                                />
                                <Field
                                    type='password'
                                    label='Password'
                                    name='password'
                                    component={this.renderField}
                                />
                                <Field
                                    type='password'
                                    label='Reconfirm'
                                    name='second'
                                    component={this.renderField}
                                />
                                <div style={{marginBottom: "16px"}}>
                                    <button className="modal-submit">회원가입</button>
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
                                    이미 계정이 있다면
                                </span>
                                <div className="foot-login">
                                    <span className="foot-login-opt">
                                        <span className="btn-sign"  onClick={this.props.onSignIn}>
                                            Sign In
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

    if (!values.name) {
        errors.name = '이름을 입력해주세요.'
    }

    if (!values.password) {
        errors.password = '암호를 입력해주세요.'
    }

    if (values.password !== values.second) {
        errors.second = '위와 같은 암호를 입력해주세요.'
    }

    return errors;
}

function mapStateToProps({ form }) {
    return { form };
}

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(connect(mapStateToProps)(SignUp));