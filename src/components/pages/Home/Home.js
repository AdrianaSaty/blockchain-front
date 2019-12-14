import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchBlocks } from "../../../service/api/FetchBlocks/fetchBlocks";
import { fetchFootbalMatches } from '../../../service/api/FetchFootbalMatches/fetchFootbalMatches';
import GameTable from '../../molecules/GameTable/GameTable';
import Modal from '../../organisms/Modal/Modal';
import YourBetTable from '../../molecules/YourBetTable/YourBetTable';
import Loading from '../../molecules/Loading/Loading';
import('./Home.css');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
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

    showModal = () => {
        // this.setState({ show: true });
        this.setState({
            ...this.state,
            show: !this.state.show  
        })
      };

    hideModal = () => {
        // this.setState({ show: false });
    };

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchBlocks())
        dispatch(fetchFootbalMatches())
    }

    render() {
        const { blocks, matches } = this.props;
        const newMatches = matches.data.matches;
        let newMatchesFinished = null;
        let newMatchesScheduled = null;
        if (newMatches) {
            newMatchesFinished = newMatches.filter(function (elem, i, array) {
                return elem.status === "FINISHED";
            });

            newMatchesScheduled = newMatches.filter(function (elem, i, array) {
                return elem.status === "SCHEDULED" || elem.status === "IN_PLAY";
            });
        }



        console.log(newMatches)
        return (
            <div>
                {/* {blocks.loading ? "To Carregando block" : (<></>)}
                {blocks.data.map((block) => block.hash)} */}
                <div className="">
                    <div className="row line">
                        <div className="col-5 p-0 ">
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
                        </div>
                        <div className="col-2 p-0">
                            <div>
                                <h2 className="mt-5 txt-center">
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
                                        <h3>Your Best Bet:</h3>
                                    </Modal>
                                <h2 className="mt-5 txt-center">
                                    Your Bets:
                                    </h2>
                                <YourBetTable team1="Team 1" team2="Team 2" value1="value1" value2="value1" />
                            </div>
                        </div>

                        <div className="col-5 p-0">
                            <div className="mr-5 ml-5">
                                <h2 className="mt-5 txt-center">
                                    Next Games:
                                </h2>
                                <div className="shadow-gradient">
                                    <div className="div-scroll">
                                        {newMatches ? (<></>) : <Loading />}
                                        {newMatchesScheduled ? newMatchesScheduled.map((match) => <GameTable team1={match.awayTeam.name} team2={match.homeTeam.name} />) : null}
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
