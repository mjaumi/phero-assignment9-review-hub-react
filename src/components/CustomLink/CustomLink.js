import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{ borderBottom: match ? "2px solid #9aef0a" : "none" }}
                to={to}
                {...props}
                className='inline-block px-3 py-2 mt-1 md:mt-0 md:ml-5 hover:opacity-50 duration-300 -z-50'
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;