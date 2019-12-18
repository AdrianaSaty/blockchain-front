import { connect } from 'react-redux';
import React, { Component } from 'react';
import GameTable from '../../organisms/GameTable/GameTable';
// import Loading from '../../molecules/Loading/Loading';
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        let value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
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
        // const newMatches = matches.data.matches;
        // let newMatchesFinished = null;
        // let newMatchesScheduled = null;
        // if (newMatches) {
        //     newMatchesFinished = newMatches.filter(function (elem, i, array) {
        //         return elem.status === "FINISHED";
        //     });

        //     newMatchesScheduled = newMatches.filter(function (elem, i, array) {
        //         return elem.status === "SCHEDULED" || elem.status === "IN_PLAY";
        //     });
        // }

        return isLoaded && (
            <div>
                {/* {blocks.loading ? "To Carregando block" : (<></>)}
                {blocks.data.map((block) => block.hash)} */}
                <Navbar route={this.props.route} logout={this.props.logout} />
                <div className="">
                    <div className="row line">
                        {/* <div className="col-5 p-0 ">
                            <div className="ml-5 mr-5">
                                <h2 className="mt-5 txt-center">
                                    Last Games:
                                </h2>
                                <div className="shadow-gradient">
                                    <div className="div-scroll">
                                        {newMatches ? (<></>) : <Loading />}
                                        {newMatchesFinished ? newMatchesFinished.map((match) => <GameTable team1={match.awayTeam.name} team2={match.homeTeam.name} />) : null}
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-2 p-0">
                            <div>
                                
                                <h2 className="txt-center mt-5">
                                    Balance:
                                    </h2>
                                <h4 className="txt-center">
                                    $1000
                                    </h4>
                                    <input 
                                        type="button" className='mt-5 btn btn-outline-warning btn-lg btn-block'
                                        onClick={this.showModal}
                                        value="New Bet:" />

                                    <Modal onClose={this.showModal} show={this.state.show}>
                                    </Modal>

                                <h2 className="mt-5 txt-center">
                                    Your Bets:
                                    </h2>
                                <YourBetTable team1="Team 1" team2="Team 2" value1="value1" value2="value1" />
                                <div className="mt-5"><img className="center d-inline" src={Barclays} alt="express" href="" /></div>

                            </div>
                        </div> */}

                        <div className="col p-0">
                            <div className="mr-5 ml-5">
                                <h2 className="mt-2 txt-center">
                                    Current Matchday
                                </h2>
                                <div className="shadow-gradient">
                                    <div className="div-scroll">
                                        {/* {currentMatches ? (<></>) : <Loading />} */}
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
