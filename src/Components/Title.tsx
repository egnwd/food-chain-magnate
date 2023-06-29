import React from 'react';

type TitleProps = {
    children: string;
};

const Title: React.FC<TitleProps> = ({children}) => (
    <div style={{display: 'flex', justifyContent: 'start', minWidth: '100vw', padding: '0 15px', boxSizing: 'border-box'}}>
        <h2 data-text={children}>
            {children}
        </h2>
    </div>
);

export default Title;
