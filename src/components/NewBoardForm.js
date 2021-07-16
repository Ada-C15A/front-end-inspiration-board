import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
    });
    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };
    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addBoardCallback({
            title: formFields.title,
            owner: formFields.owner
        });
        setFormFields({
            title: '',
            owner: '',
        });
    };

    return (
        <form onSubmit={onFormSubmit} id="new-board-form">
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    classname="new-item-input"
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange}
                />
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input
                    classname="new-item-input"
                    name="owner"
                    value={formFields.owner}
                    onChange={onOwnerChange}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};
export default NewBoardForm;