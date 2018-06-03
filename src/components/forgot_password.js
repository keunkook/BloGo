import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import '../style/forgot_password.css';
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
                    <header>
                        <div className="header-wrap">
                            <div className="header-opt">
                                <h1 className="header-h1">
                                    비밀번호 재설정
                                </h1>
                            </div>
                            <div style={{marginBottom: "16px"}}>
                                <div style={{borderBottom: "1px solid rgb(219, 219, 219)", width: "156px"}} />
                            </div>
                            <div lassName="sub-opt" style={{width: "98%"}}>
                                <span>
                                    계정으로 사용중인 이메일 주소를 입력하시면, 비밀번호 재설정 링크를 전송해 드립니다.
                                </span>
                            </div>
                        </div>
                    </header>
                    <section>
                        
                        <div>
                            <div>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Field
                                    type='email'
                                    label='E-mail address'
                                    name='email'
                                    component={this.renderField} 
                                />

                                <div className="va-container">
                                    <span className="va-middle">
                                        <span className="btn-sign-in" onClick={this.props.onSignIn}>
                                            {"< Go to Sign In"}
                                        </span>
                                        <button className="btn-submit">
                                            재설정 링크 전송하기
                                        </button>
                                    </span>
                                </div>
                            </form>
                            </div>
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

    return errors;
}

function mapStateToProps({ form }) {
    return { form };
}

export default reduxForm({
    validate,
    form: 'SignInForm'
})(connect(mapStateToProps)(SignIn));