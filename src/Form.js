import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    render(){

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                <label for="job">Job</label>
                <input type="text" name="job" id="job" value={this.state.job} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }

    handleChange = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}

export default Form