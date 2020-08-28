import React, { Component } from 'react';

class Submit extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h2>Submit</h2>
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter the name of the recipe" aria-describedby="nameHelp" />
                        </div>

                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter a brief description" aria-describedby="descriptionlHelp" />
                        </div>

                        <div className="form-inline form-group">
                            <label for="quantity">Quantity</label>
                            <input type="text" className="form-control" id="quantity" placeholder="Quantity" aria-describedby="quantitylHelp" />

                            <label for="ingredient">Ingredient</label>
                            <input type="text" className="form-control" id="ingredient" placeholder="Ingredient" aria-describedby="ingredientHelp" />

                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Submit;