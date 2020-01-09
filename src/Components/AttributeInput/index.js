import React from "react";
import './AttributeInput.css';


class AttributeInputBlock extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            availablePoints: this.props.availablePoints,
            pointCosts: this.props.pointCosts,
        }
        
    }

    
    

    render() {
        
        const options = buildAvailableOptions(this);
        
        options.join('');

        return (
            <div>
                <select className="select-css">{options}</select>
            </div>
        )

    }

}

function buildAvailableOptions(that) {
    
    let availablePoints = that.state.availablePoints;
    const pointCosts = that.state.pointCosts;
    const pointDisplayVals = Object.keys(pointCosts);

    let lastPointKey = 8;

    const optionsArr = [];

    for (const opt of pointDisplayVals) {
        let optionHmtl;

        if (availablePoints - pointCosts[lastPointKey]) {
            optionHmtl = (
                <option value={pointCosts[lastPointKey]} key={pointCosts[lastPointKey]*lastPointKey}>{lastPointKey}</option>
            );
            optionsArr.push(optionHmtl);
        }
        
        availablePoints = availablePoints - pointCosts[lastPointKey];

        lastPointKey++;
    }
    
    return optionsArr;
}



export default AttributeInputBlock;