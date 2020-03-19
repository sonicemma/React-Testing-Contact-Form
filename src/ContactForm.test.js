import React from 'react';
import { render, fireEvent, getByLabelText, wait } from '@testing-library/react';
import ContactForm from "./components/ContactForm";

test('Does contact form render?', () => {
    render(<ContactForm />);
    console.log("Contact form renders!")
});

test('Can the forms submit?', async () => {
    const {getByLabelText, getByTestId, findByText} = render(<ContactForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);
    const submit = getByTestId('submit');

    fireEvent.change(firstName, {
        target: { name: 'firstName', value: 'ab'}
    });

    fireEvent.change(lastName, {
        target: {name: 'lastName', value: 'def'}
    });

    fireEvent.change(email, {
        target: {name: 'email', value: 'emma@gmail.com'}
    });

    fireEvent.change(message, {
        target: {name: 'message', value: 'beep boop'}
    });

    fireEvent.click(submit);

    await findByText(/ab/i);
    await findByText(/def/i);
    await findByText(/emma@gmail.com/i);
    await findByText(/beep boop/i);

    console.log("It submits");
})