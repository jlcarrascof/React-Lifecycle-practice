import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() { 
    const animals = this.props.animals;
    return <div>
      {
        animals.map((animal) => (
          <div key={animal.name}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name}  width={'300px'} />
            <br/>
            <span>{animal.specie}</span>
          </div>  
        ))  
      }  
    </div>
    
  }
}
