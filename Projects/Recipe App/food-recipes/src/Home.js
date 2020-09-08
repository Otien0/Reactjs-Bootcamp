import React, { Component } from 'react';

import IngredientList from './IngredientList';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipies: JSON.parse(localStorage.getItem('recipies')) || []
        };
    }

    displayRecipies() {
        let resultsArray = [];

        this.state.recipies.map((recipie, i) => {
            resultsArray.push(
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={recipie.image} alt={recipie.name} />
                        <div className="caption">
                            <h3>{recipie.name}</h3>
                            <p>{recipie.description}</p>
                            <IngredientList recipie={recipie} />
                        </div>
                    </div>
                </div>
            );
        });

        return resultsArray;
    }

    render() {
        return (
            <div className="row">
                <h1>Home</h1>
                {this.displayRecipies()}
            </div>
        );
    }
}

export default Home;