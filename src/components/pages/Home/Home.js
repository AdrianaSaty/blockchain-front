import { connect } from 'react-redux';
import React, { Component } from 'react';
import GameTable from '../../organisms/GameTable/GameTable';
import Navbar from '../../organisms/Navbar/Navbar';
import { getMatches } from '../../../service/football-api';
import('./Home.css');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            currentMatchday: 17,
            isLoaded: false,
            currentMatches: [],
            previousMatches: [],
            nextMatches: [],
        }
    }

    async componentDidMount() {
        let currentMatches = await getMatches(this.state.currentMatchday);
        let previousMatches = await getMatches(this.state.currentMatchday - 1);
        let nextMatches = await getMatches(this.state.currentMatchday + 1);
        this.setState({
            isLoaded: true,
            currentMatches,
            previousMatches,
            nextMatches,
        })
    }

    render() {
        const { isLoaded, currentMatches } = this.state;

        return isLoaded && (
            <div>
                <Navbar route={this.props.route} logout={this.props.logout} />
                <div className="">
                    <div className="row line">
                        <div className="col p-0">
                            <div className="mr-5 ml-5">
                                <h2 className="mt-5 txt-center">
                                    Current Matchday
                                </h2>
                                <div className="shadow-gradient">
                                    <div className="div-scroll">
                                        {currentMatches ? <GameTable gamesList={currentMatches} /> : null}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-1">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    matches: state.matches,
    blocks: state.blocks
})

export default connect(mapStateToProps)(Home);
