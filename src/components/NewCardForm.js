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
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="message">Message:</label>
                <input
                    name="message"
                    value={formFields.message}
                    onChange={onMessageChange}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};
export default NewCardForm;