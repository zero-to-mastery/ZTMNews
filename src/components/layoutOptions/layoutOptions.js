import React from 'react';

const LayoutOptions = ({ display, changeDisplay }) => {
    const viewArry = ["tableview", "fullwidth", "masonry"]
    const name = {tableview: "Condensed", fullwidth: "Full Width", masonry: "Grid View"  }


    const isChecked = (opt) => {
        if (display === undefined && opt === viewArry[0]) return true;
        if (display === opt) return true;
    };


    function addOption(opt) {
        const id = Math.random();
        return (
            <div key={opt + id} className="pretty p-default p-smooth p-bigger lang-controls">
                <input
                    id={opt}
                    type="checkbox"
                    defaultChecked={isChecked(opt)}
                    onChange={() => changeDisplay(opt)}
                />
                <div className="state p-warning">
                    <label htmlFor={opt}>{name[opt]}</label>
                </div>
            </div>
        );
    }



    return <div className="text-white text-center p-4">{viewArry.map(addOption)}</div>;

};

export default LayoutOptions;