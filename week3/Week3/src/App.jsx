import React, { useState } from 'react';
import TextUpdater from './components/TextUpdater.jsx';
import FormWithSubmit from './components/FormWithSubmit.jsx';
import UserCard from './components/UserCard.jsx';
import Button from './components/Button.jsx';
import LoginForm from './components/LoginForm.jsx';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  // Component to render based on active state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'text-updater':
        return (
          <section>
            <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
            <TextUpdater />
          </section>
        );
      case 'form-with-submit':
        return (
          <section>
            <h2 className="text-xl font-semibold mb-2">Form with Submit</h2>
            <FormWithSubmit />
          </section>
        );
      case 'user-card':
        return (
          <section>
            <h2 className="text-xl font-semibold mb-2">User Card</h2>
            <UserCard name="Abhay Prasad" email="ap903778@gmail.com" />
          </section>
        );
      case 'button':
        return (
          <section>
            <h2 className="text-xl font-semibold mb-2">Button</h2>
            <Button />
          </section>
        );
      case 'login-form':
        return (
          <section>
            <h2 className="text-xl font-semibold mb-2">Login Form</h2>
            <LoginForm />
          </section>
        );
      default:
        return (
          <div className="flex items-center justify-center h-[70vh]">
            <h1 className="text-3xl font-bold text-center">Welcome to Week 3 Assignment</h1>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md py-4 sticky top-0 z-10">
        <nav className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {['home', 'text-updater', 'form-with-submit', 'user-card', 'button', 'login-form'].map((component) => (
              <button 
                key={component}
                onClick={() => setActiveComponent(component)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeComponent === component 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {component.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8 min-h-[70vh] transition-all duration-300">
        {renderComponent()}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p></p>
      </footer>
    </div>
  );
};

export default App;
