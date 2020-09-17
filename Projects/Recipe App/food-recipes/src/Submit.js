import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
// import { browserHistory } from 'react-router';
import { withRouter } from "react-router";

class Submit extends Component {

    constructor(props) {
        super(props);


        this.state = {
            recipies: JSON.parse(localStorage.getItem('recipies')) || [],
            newRecipie: {
                name: "New Recipie",
                description: "Description",
                ingredients: []
            }
        };
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    submitRecipe() {
        console.log('Submit Recipie');
        console.log(this.name.value, this.description.value);
        let newRecipie = this.state.newRecipie;

        newRecipie.name = this.name.value;
        newRecipie.description = this.description.value;

        //Update newRecipie
        this.setState({ newRecipie });

        let recipies = this.state.recipies;
        recipies.push(newRecipie);

        this.setState({ recipies });
        localStorage.setItem('recipies', JSON.stringify(recipies));
        console.log(recipies);
        this.props.history.push('/');
    }

    // const HomeWitRouter = withRouter(Home);

    addIngredient(quantity, ingredient) {
        console.log("Add Ingredients in Submit js", quantity, ingredient);
        let newRecipie = this.state.newRecipie;
        newRecipie.ingredients.push({ quantity: quantity, ingredient: ingredient });
        this.setState({ newRecipie: newRecipie });
        console.log(newRecipie);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h2>Submit</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                ref={(input) => { this.name = input; }}
                                className="form-control"
                                id="name"
                                placeholder="Enter the name of the recipe"
                                aria-describedby="nameHelp" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter a brief description" aria-describedby="descriptionlHelp" />
                        </div>

                        <IngredientList recipie={this.state.newRecipie} />

                        <Ingredients addIngredient={(quantity, ingredient) => { this.addIngredient(quantity, ingredient) }} />

                        <button type="button" onClick={this.submitRecipe} className="btn btn-dark">Submit</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default Submit;