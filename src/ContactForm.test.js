import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import ContactForm from "./components/ContactForm";

test('Does contact form render?', () => {
    render(<ContactForm />);
    console.log("Contact form renders!")
});

test('Can the forms submit?'), () => {
    const {getByText, getByTestId} = render(<ContactForm/>);

    const firstName = getByText(/first name*/i);
    const lastName = getByText(/last name*/i);
    const email = getByText(/email*/i);
    const submit = getByTestId(/submitTestId/i);

    fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'Emma'
    }});
}