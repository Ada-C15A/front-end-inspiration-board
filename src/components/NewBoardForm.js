import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = () => {
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

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input>
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange}
                </input>
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input>
                    name="owner"
                    value={formFields.title}
                    onChange={onOwnerChange}
                </input>
            </div>
            <input>
                type="submit"
                value="Add Board"
            </input>
        </form>
    );
};
export default NewBoardForm;