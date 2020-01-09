import React from "react";
import './AttributeInput.css';


class AttributeInputBlock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            attributeName: this.props.attributeName,
            hasValueSelected: false,
            indexOfOptionSelected: 0,
            options: buildAvailableOptions(this)
        }

        this.handleChange = event => {
            // const name = this.state.attributeName;
            const newAssignedScore = event.target.value.split('-')[0];
            // we'll need to set this so we can strip more expensive options if user runs out of points elsewhere
            this.state.indexOfOptionSelected = _getIndexOfOptions(event.target.value, this.state.options);
            //using this as a callback of sorts.. not sure whether this is reliable...
            this.props.attribute.currentAssignedScore = parseInt(newAssignedScore);
            //used as a flag to ensure options aren't reset when a user selected a value
            this.state.hasValueSelected = newAssignedScore != 8 ? true : false;
        }
    }

    render() {

        let currentOptions;

        // nothing is selected here, but other attributes have changed
        if (_fullRebuildIsNeeded(this)) {
            currentOptions = _rebuildAvailableOptions(this);
        }
        // something is selected here, but it isn't the highest and we might need to 
        // add or delete options
        else if (_moreOrLessOptionsMayBeRequired(this)) {
            const name = this.props.attribute.name;
            currentOptions = _addOrRemoveAvailableOptionsAtIndex(this);
        }
        // else keep as is.
        else {
            currentOptions = this.state.options;
        }

        return (
            <div>
                <select className="select-css"
                    onChange={this.handleChange}>{currentOptions}</select>
            </div>
        )

    }

}

export default AttributeInputBlock;


// creating and modifying the options array
function buildAvailableOptions(that) {
    let availablePoints = that.props.availablePoints;
    const pointCosts = that.props.pointCosts;
    const pointDisplayVals = Object.keys(pointCosts);

    let lastPointKey = 8;

    const optionsArr = [];

    for (const opt of pointDisplayVals) {
        let optionHmtl;

        if (Math.sign(availablePoints - pointCosts[lastPointKey]) != -1) {
            optionHmtl = (
                <option
                    value={lastPointKey + '-' + that.props.attribute.id}
                    key={lastPointKey}>{lastPointKey}</option>
            );
            optionsArr.push(optionHmtl);
        }

        lastPointKey++;
    }

    return optionsArr;
}

function _rebuildAvailableOptions(that) {

    if (!that.state && that.state.hasValueSelected == false) {
        return;
    }

    let availablePoints = that.props.availablePoints;
    const pointCosts = that.props.pointCosts;
    const pointDisplayVals = Object.keys(pointCosts);

    let lastPointKey = 8;

    const optionsArr = [];

    for (const opt of pointDisplayVals) {
        let optionHmtl;

        if (Math.sign(availablePoints - pointCosts[lastPointKey]) != -1) {
            optionHmtl = (
                <option
                    value={lastPointKey + '-' + that.props.attribute.id}
                    key={lastPointKey}>{lastPointKey}</option>
            );
            optionsArr.push(optionHmtl);
        }

        lastPointKey++;
    }

    return optionsArr;
}

function _addOrRemoveAvailableOptionsAtIndex(that) {

    const options = that.state.options;
    //selected index
    const currentlySelectedIndex = that.state.indexOfOptionSelected;
    //starting index
    const startingIndex = currentlySelectedIndex + 1;
    //avaiable points
    const availablePoints = that.props.availablePoints;
    //cost of scores
    const pointCosts = that.props.pointCosts;
    //all available point options
    const pointDisplayVals = Object.keys(pointCosts);
    //find the value of points already invested
    const priceAlreadyPaid = parseInt(pointCosts[options[currentlySelectedIndex].key]);
    
    //here we are finding the least expensive option that is NOT in the current options list
    //and checking if we can afford to add it back in
    
    const firstUnavailableOption = parseInt(pointDisplayVals[options.length]);
    const priceOfFirstUnavailableOption = pointCosts[firstUnavailableOption];
    const realCostToIncreaseBeyondAvailOpt = firstUnavailableOption ? priceOfFirstUnavailableOption - priceAlreadyPaid : false;
    
    // need to add options
    if ( availablePoints >= realCostToIncreaseBeyondAvailOpt ) {
        
        let currentPointKey = firstUnavailableOption;
        
        for (let i = options.length; i < pointDisplayVals.length; i++) {
            
            let optionHmtl;

            if (Math.sign(availablePoints - (pointCosts[currentPointKey] - priceAlreadyPaid)) != -1) {
                optionHmtl = (
                    <option
                        value={currentPointKey + '-' + that.props.attribute.id}
                        key={currentPointKey}>{currentPointKey}</option>
                );
                options.push(optionHmtl);
            }
            
            currentPointKey++;
        }

    }
    
    const lastOptionIsNotSelectedOption = options.length - 1 != currentlySelectedIndex ? true : false;
    // here we look to see if the last currently available option costs more than we can afford
    if (lastOptionIsNotSelectedOption) {
        
        const lastAvailableOption = parseInt(options[options.length -1 ].key);
        const priceOfLastAvailableOption = pointCosts[lastAvailableOption];
        const realCostOfLastAvailableOption = priceOfLastAvailableOption - priceAlreadyPaid; 
        
        // need to remove options
        if (availablePoints < realCostOfLastAvailableOption) {
            for (let i = startingIndex; i < options.length; i++) {
                let attributeScoreOfCurrentOption = options[i].key;
                
                if (availablePoints < pointCosts[attributeScoreOfCurrentOption] - priceAlreadyPaid) {
                    options.length = i;
                    break;
                }
            }
        }
    }

    return options;

}

// getting the index of the currently selected option
function _getIndexOfOptions(eventTargetVal, optionsInState) {

    for (let i = 0; i < optionsInState.length; i++) {

        const opt = optionsInState[i];

        if (eventTargetVal === opt.props.value) {
            return i;
        }

    }
}


// basic validation funnels
function _fullRebuildIsNeeded(that) {
    if (that.props.availablePoints < 27 && that.state.hasValueSelected == false) {
        return true;
    }
    return false;
}

function _moreOrLessOptionsMayBeRequired(that) {
    
    if (
        that.state.hasValueSelected &&
        that.state.indexOfOptionSelected < 7 &&
        that.props.availablePoints < 27 &&
        that.props.attribute.currentAssignedScore != 15
    ) {
        return true;
    }

    return false;
}