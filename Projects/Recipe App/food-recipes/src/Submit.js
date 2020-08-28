import React, { Component } from 'react';
import Ingredients from './Ingredients';

class Submit extends Component {

    constructor(props) {
        super(props);


        this.state = {};
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    submitRecipe() {
        console.log('Submit Recipie');
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h2>Submit</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter the name of the recipe" aria-describedby="nameHelp" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter a brief description" aria-describedby="descriptionlHelp" />
                        </div>

                        <Ingredients />

                        <button type="button" onClick={this.submitRecipe} className="btn btn-default">Submit</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default Submit;