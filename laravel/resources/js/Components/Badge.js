import React from 'react';

export default function Badge({ color = 'gray', className = '', children }) {

    const badgeColor = (color) => {
        switch (color){
            case 'purple':
                return ' bg-purple-200 text-purple-900 ';
            case 'blue':
                return ' bg-blue-200 text-blue-900 ';
            case 'green':
                return ' bg-green-200 text-green-900 ';
            case 'red':
                return ' bg-red-200 text-red-900 ';
            case 'yellow':
                return ' bg-yellow-200 text-yellow-900 ';
            case 'indigo':
                return ' bg-indigo-200 text-indigo-900 ';
            case 'pink':
                return ' bg-pink-200 text-pink-900 ';
            default:
                return ' bg-gray-200 text-gray-900 ';
        }
    }

    return (
        <div className={`relative inline-block px-3 py-1 text-sm px-3 rounded-full` + badgeColor(color) + className}>{children}</div>
    );
}
