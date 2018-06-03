import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCard } from '../actions';

class CardNew extends Component {
    renderField (field) {
        const { meta: { touched, error }} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        console.log(field);
        return (
            <div className='fieldWrap'>
                <div className={className}>
                    <label>{field.label}</label>
                    <input
                        className='form-control'
                        type='text'
                        {...field.input}
                    />
                    <div className='text-help'>
                        {touched ? error : ''}
                    </div>
                </div>
            </div>
        );
    }

    formMenu() {
        return <div>폼 메뉴 추가</div>;
    }

    onSubmit (values) {
        this.props.createCard(values, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const  { handleSubmit } = this.props;
        
        return (
            <div className="CNwrap">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label='Title For Card '
                        name='title'
                        component={this.renderField}
                    />
                    <Field
                        label='Content'
                        name='content'
                        component={this.formMenu}
                    />
                    <button type='submit' className='btn'>Submit</button>
                    <Link to='/' className='btn'>Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate (values) {
    const errors = {}
    
    if (!values.title) {
        errors.title = 'Enter a title';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'CardNewForm'
})(
    connect(null, { createCard })(CardNew)
);