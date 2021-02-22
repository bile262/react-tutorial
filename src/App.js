import React, {Component} from 'react'
import Table from './Table'


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
    render(){
        
        const { characters } = this.state
        return (
            <div className='container'>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
}
export default App