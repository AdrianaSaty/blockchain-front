import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchBlocks } from "../../../service/api/FetchBlocks/fetchBlocks"
import('./Home.css');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

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

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchBlocks())
    }

    render() {
        const { blocks = [] } = this.props
        console.log(this.state)
        return (
            <div>
                {blocks.loading ? "To Carregando" : (<></>)}
                {`${blocks.data.map((block) => { return block.hash })}`}

                <div className="">
                    <div className="container ">
                        <div className="row line">
                            <div className="col-4 p-0 ">
                                <div className="">
                                    <h2 className="mt-5">
                                        Last Games:
                                    </h2>
                                </div>
                            </div>

                            <div className="col-4 p-0">
                                <div>
                                    <h2 className="mt-5 txt-center">
                                        Balance:
                                    </h2>
                                    <h4 className="txt-center">
                                        $1000
                                    </h4>
                                    <button className='mt-5 btn btn-outline-warning btn-lg btn-block'>
                                        New Bett:
                                    </button>
                                    <h2 className="mt-5 txt-center">
                                        Your Betts:
                                    </h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><h4>Team 1</h4></th>
                                                <th><h4>x</h4></th>
                                                <th><h4>Team 2</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th><h5>$100</h5></th>
                                            <th><h5></h5></th>
                                            <th><h5>$300</h5></th>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>

                            <div className="col-4 p-0">
                                <div className="">
                                    <h2 className="mt-5">
                                        Next Games:
                                     </h2>
                                </div>

                                <div className="d-flex justify-content-center mt-1">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    blocks: state.blocks
})

export default connect(mapStateToProps)(Home);
