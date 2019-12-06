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
                {`${blocks.data.map((block)=>{return block.hash})}`}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    blocks: state.blocks
})

export default connect(mapStateToProps)(Home);
