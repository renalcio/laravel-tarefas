import React, {useEffect, useRef} from 'react';

export default function Textarea({
                                     rows,
                                     name,
                                     value,
                                     className,
                                     autoComplete,
                                     required,
                                     isFocused,
                                     handleChange,
                                 }) {
    const input = useRef();

    return (
        <div className="flex flex-col items-start">
            <textarea
                name={name}
                defaultValue={value}
                rows={rows}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` + className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
