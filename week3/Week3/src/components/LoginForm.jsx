import React, { useState } from 'react';
// You may need to install and import an icon library like:
// import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50"
        >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
            <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                        {/* If using React Icons: <FaEnvelope /> */}
                        📧
                    </div>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                        placeholder="Enter your email"
                    />
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                        {/* If using React Icons: <FaLock /> */}
                        🔒
                    </div>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                        placeholder="Enter your password"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
            >
                Login
            </button>
            <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200">
                    Forgot password?
                </a>
            </div>
        </form>
    );
};

export default LoginForm;
