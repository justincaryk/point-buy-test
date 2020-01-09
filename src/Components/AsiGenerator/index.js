import React from 'react';
import './AsiGenerator.css';

import PointBuy from './PointBuy';

class AsiGenerator extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            attributes: [
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
            ]
        }

        this.getUpdatedAttributes = (updatedAttributes) => {
            
            this.setState({
                attributes: updatedAttributes
            });
            
        }

    }

    render() {

        return (
            <div className="space-sequence-20">
                <div>
                    <div>
                        <select className="select-css">
                            <option>Point Buy</option>
                            <option>Standard Array</option>
                            <option>Manual</option>
                        </select>
                    </div>
                </div>

                <div>
                    <PointBuy
                        callbackToGetAttributes={this.getUpdatedAttributes}
                        attributes={this.state.attributes}></PointBuy>
                </div>

                <div className="content-wrap space-sequence-20">
                    <div className="big-ole-table-outer">
                        <div className="tbl-row">
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Strength</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[0].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Dexterity</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[1].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Constitution</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[2].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-ole-table-outer">
                    <div className="tbl-row">
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Intelligence</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[3].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Wisdom</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[4].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tbl-cell">
                                <div className="attr-block">
                                    <div className="attr-title-bar asi-heading">Charisma</div>
                                    <div className="attr-content">
                                        <div className="attr-row">
                                            <div className="label-left">Base</div>
                                            <div className="score">{this.state.attributes[5].currentAssignedScore}</div>
                                        </div>
                                        <div className="attr-row">
                                            <div className="label-left">Modifer</div>
                                            <div className="score">{}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}





export default AsiGenerator;