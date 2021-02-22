import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Le Nguyen Thi',
                job: 'vat vo',
            },
            {
                name: 'Nguyen Truong Uyen Nhi',
                job: 'PHP',
            },
            {
                name: 'Nguyen Thi Kim Thoa',
                job: 'PHP',
            },
            {
                name: 'Mai Xuan Binh Minh',
                job: 'vat vo',
            },
            {
                name: 'Le Nguyen Thi2',
                job: 'vat vo',
            },
        ]
    };
    removeCharacter = (index) => {
        const {characters} = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
    render(){
        
        const { characters } = this.state
        return (
            <div className='container'>
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
            
        )
    }
}
export default App