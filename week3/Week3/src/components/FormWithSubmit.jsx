import React, { useState } from 'react';

const FormWithSubmit = () => {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submittedValue, setSubmittedValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
        setSubmitted(true);
        console.log('Form submitted with value:', inputValue);
        
        // Reset form after submission (optional)
        setInputValue('');
        
        // Clear success message after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100 text-center">
            {submitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Form submitted successfully with value: <strong>{submittedValue}</strong>
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
                <div className="w-full">
                    <label htmlFor="inputField" className="block text-sm font-medium text-gray-700 mb-1">Your Input</label>
                    <input 
                        id="inputField"
                        type="text" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        placeholder="Enter text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                    </svg>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormWithSubmit;
