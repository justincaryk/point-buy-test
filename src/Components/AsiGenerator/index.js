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
            totalPointsAvail: 27,
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
        }

        this.attributes = [
            {
                id: 1,
                name: 'Strength',
            },
            {
                id: 2,
                name: 'Dexterity',
            },
            {
                id: 3,
                name: 'Constitution',
            },
            {
                id: 4,
                name: 'Intelligence',
            },
            {
                id: 5,
                name: 'Wisdom',
            },
            {
                id: 6,
                name: 'Charisma',
            },
        ]
    }

    render() {




        return (
            <div className="content-wrap">
                <div>
                    <div className="asi-heading">Points Remaining</div>
                    <div className="asi-points-val-total">{this.state.pointsRemaining} / {this.state.totalPointsAvail}</div>
                </div>
                <div className="mt-20">
                    <div className="big-ole-table-outer">
                        <div className="tbl-row">
                            <div className="tbl-cell">
                                <div className="asi-heading">Strength</div>
                                <div className="asi-val-select-outer">
                                    <AttributeInputBlock
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
                                        key={this.attributes[5].id}
                                        availablePoints={this.state.pointsRemaining}
                                        pointCosts={this.state.standardPointCost} >
                                    </AttributeInputBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }



}



export default AsiGenerator;