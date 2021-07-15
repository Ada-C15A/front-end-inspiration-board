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

    // const onBoardSubmit = event => {
    //     event.preventDefault();
    //     props.addBoard(formFields)
    // }
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange}
                />
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input
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