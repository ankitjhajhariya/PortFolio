import React from 'react';
import './Button.scss';

function Button({ text, link, download = false }) {
    return (
        <a
            href={link}
            className="btn"
            {...(download ? { download: true } : {})}
            target={download ? "_self" : "_blank"}
            rel={download ? undefined : "noopener noreferrer"}
            aria-label={text}
        >
            <span className="text">{text}</span>
            {download && <i className="fa-solid fa-download download-icon" aria-hidden="true"></i>}
        </a>
    );
}

export default Button;
