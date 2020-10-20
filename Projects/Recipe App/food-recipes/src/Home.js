import React, { Component } from 'react';

import IngredientList from './IngredientList';
import Footer from './Footer';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipies: JSON.parse(localStorage.getItem('recipies')) || []
        };
    }

    displayRecipies() {
        let resultsArray = [];

        // eslint-disable-next-line array-callback-return
        this.state.recipies.map((recipie, i) => {
            resultsArray.push(
                <div className="col-sm-6 col-md-4">
                    <div className="card">

                        <div className="card-body">
                            <h3 className="card-title">{recipie.name}</h3>
                            <img src={recipie.image} alt={recipie.name} className="card-img-top" />
                            <p className="card-text">{recipie.description}</p>
                            <IngredientList recipie={recipie} />

                            <a href="/#" className="btn btn-primary">More Info</a>
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
                <h1>Hello welcome to my recipe app made with react-js...</h1>
                <h1><i>Take a look of displayed recipes sample here:</i></h1>
                {this.displayRecipies()}

                <div className="footer">
                    <Footer />
                </div>

            </div>
        );
    }
}

export default Home;