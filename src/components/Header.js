import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({location: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let location = this.state.location;
        this.props.history.push(`/search/${location}`);
    }

    componentDidMount() {
        if(this.props.history.location.pathname){
            let pathname = this.props.history.location.pathname;
            this.setState({
                location : pathname.slice(8)
            });
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Weather App</a>
                </div>

                <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Location" onChange={this.handleChange} value={this.state.location}  />
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                </form>
            </nav>
        )
    }
}

export default withRouter(Header);

