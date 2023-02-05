import React from 'react';

function SearchBox(props) {
    return (
        <div className={`search flex`}>
            <div className={`sbox flex aic`}>
                <button className={`fa-solid fa-magnifying-glass s24`}/>
                <input placeholder={`Search chat or contacts`} className={`s16 font`}/>
            </div>
        </div>
    );
}

export default SearchBox;

