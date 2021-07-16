import PropTypes from 'prop-types';
import { useState } from 'react';

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        message: '',
    });
    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        })
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback({
            message: formFields.message
        });
        setFormFields({
            message: '',
        });
    };
    return (
        <form onSubmit={onFormSubmit} id="new-card-form">
            <label htmlFor="new-card-message">Message:</label>
            <input
                classname="new-item-input"
                id="new-card-message"
                name="new-card-message"
                value={formFields.message}
                onChange={onMessageChange}
                maxLength="40"
            />
            <button>Submit</button>
        </form>
    );
};
export default NewCardForm;