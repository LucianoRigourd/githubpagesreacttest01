import React, {Component} from 'react'
import Table from './Table.js'
import Form from './Form.js'

class App extends Component {
    constructor(props){
      super()
      this.removeCharacter = this.removeCharacter.bind(this);
    }

    state = {
        formName : "",
        formJob: "",
        characters : []
    }
  render() {
    const {characters} = this.state

    return (
      <div className="container">
            < Form handleSubmit={this.handleSubmit}/>
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }

  handleSubmit = (character) => {
      this.setState({characters: [...this.state.characters, character]})
  }

  removeCharacter(index)  {
      this.state.characters.splice(index,1);
      this.setState({characters:this.state.characters})
    }
}

export default App