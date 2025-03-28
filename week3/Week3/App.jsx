import React from 'react';
import TextUpdater from './TextUpdater';
import FormWithSubmit from './FormWithSubmit';
import UserCard from './UserCard';
import Button from './Button';
import LoginForm from './LoginForm';

const App = () => {
    return (
        <div className="p-4 space-y-8">
            <h1 className="text-2xl font-bold text-center">Component Showcase</h1>
            
            <section>
                <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
                <TextUpdater />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Form with Submit</h2>
                <FormWithSubmit />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">User Card</h2>
                <UserCard name="John Doe" email="john.doe@example.com" />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Button</h2>
                <Button />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Login Form</h2>
                <LoginForm />
            </section>
        </div>
    );
};

export default App;
