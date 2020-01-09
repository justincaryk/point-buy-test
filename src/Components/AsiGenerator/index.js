import React from "react";
import './AsiGenerator.css';

import AttributeInputBlock from '../AttributeInput';


class AsiGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            racialBonus: [],
            rules: {
                maximumBeforeRace: 15,
                minimumBeforeRace: 8,
            },
            pointsUsed: 0,
            pointsRemaining: 27,
            standardPointPool: 27,
            standardPointCost: {
                // 18: 19,
                // 17: 15,
                // 16: 12,
                15: 9,
                14: 7,
                13: 5,
                12: 4,
                11: 3,
                10: 2,
                9: 1,
                8: 0,
                // 7: -1,
                // 6: -2,
                // 5: -4,
                // 4: -6,
                // 3: -9,
            }
        };

        this.attributes = [
            {
                id: 1,
                name: 'Strength',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
            {
                id: 2,
                name: 'Dexterity',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
            {
                id: 3,
                name: 'Constitution',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
            {
                id: 4,
                name: 'Intelligence',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
            {
                id: 5,
                name: 'Wisdom',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
            {
                id: 6,
                name: 'Charisma',
                currentAssignedScore: 8,
                previousAssignedScore: 8,
            },
        ];

        this.handleChanges = (event) => {
            //value format is [ASI_SCORE-ATTR_ID]
            //after splitting this var will be ['ASI_SCORE', 'ATTRIBUTE_ID']
            const eventValArr = event.target.value.split('-');

            const attributeId = parseInt(eventValArr[1]);

            for (let attr of this.attributes) {
                if (attributeId == attr.id) {
                    const newAttributeScore = parseInt(eventValArr[0]);
                    const prevAttributeScore = parseInt(attr.previousAssignedScore);

                    // if the previous score was 8, then it can be treated as a brand new selection
                    const userMadeBrandNewSelection = prevAttributeScore == 8 ? true : false;
                    // therefore, we assign the new choice as the previousScore for next time 
                    if (userMadeBrandNewSelection) {
                        // and simply decrease the remaining points
                        this.setState({
                            pointsRemaining: this.state.pointsRemaining - this.state.standardPointCost[newAttributeScore],
                        })

                        //update previous with current
                        attr.previousAssignedScore = newAttributeScore;

                        return;
                    }

                    // if there was a previous score, then we need to find out whether they increased or decreased
                    // and then add or subtract the difference 
                    const userIncreasedScore = Math.sign(newAttributeScore - prevAttributeScore) == 1 ? true : false;

                    const pointCost = this.state.standardPointCost

                    if (userIncreasedScore) {
                        // new higher price - the previous lower price = real cost increase
                        const debit = pointCost[newAttributeScore] - pointCost[prevAttributeScore];
                        // subtract the additional cost from the pointsRemaining
                        this.setState({
                            pointsRemaining: this.state.pointsRemaining - debit,

                        })
                        //update previous with current
                        attr.previousAssignedScore = newAttributeScore;
                        return;
                    }

                    // previous higher price - new lower price = real cost decrease
                    const credit = pointCost[prevAttributeScore] - pointCost[newAttributeScore];
                    // add the credit back to pointsRemaining
                    this.setState({
                        pointsRemaining: this.state.pointsRemaining + credit,
                    })
                    //update previous with current
                    attr.previousAssignedScore = newAttributeScore;

                    return;
                }
            }


        }

    }



    render() {


        return (
            <div className="content-wrap">
                <div>
                    <div className="asi-heading">Points Remaining</div>
                    <div className="asi-points-val-total">{this.state.pointsRemaining} / {this.state.standardPointPool}</div>
                </div>
                <div className="mt-20">
                    <form onChange={this.handleChanges}>
                        <div className="big-ole-table-outer">
                            <div className="tbl-row">
                                <div className="tbl-cell">
                                    <div className="asi-heading">Strength</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[0]}
                                            key={this.attributes[0].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                                <div className="tbl-cell">
                                    <div className="asi-heading">Dexterity</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[1]}
                                            key={this.attributes[1].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                                <div className="tbl-cell">
                                    <div className="asi-heading">Constitution</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[2]}
                                            key={this.attributes[2].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                                <div className="tbl-cell">
                                    <div className="asi-heading">Intelligence</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[3]}
                                            key={this.attributes[3].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                                <div className="tbl-cell">
                                    <div className="asi-heading">Wisdom</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[4]}
                                            key={this.attributes[4].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                                <div className="tbl-cell">
                                    <div className="asi-heading">Charisma</div>
                                    <div className="asi-val-select-outer">
                                        <AttributeInputBlock
                                            attribute={this.attributes[5]}
                                            key={this.attributes[5].id}
                                            availablePoints={this.state.pointsRemaining}
                                            pointCosts={this.state.standardPointCost} >
                                        </AttributeInputBlock>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }



}



export default AsiGenerator;