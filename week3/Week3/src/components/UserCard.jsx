import React from 'react';

const UserCard = ({ name, email }) => {
    // Generate avatar from name initials
    const initials = name.split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    
    // Generate a random pastel color based on name
    const generateColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const h = hash % 360;
        return `hsl(${h}, 70%, 80%)`;
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
                <div 
                    className="flex-shrink-0 h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold text-white"
                    style={{ backgroundColor: generateColor(name) }}
                >
                    {initials}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">User</span>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Profile</button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
