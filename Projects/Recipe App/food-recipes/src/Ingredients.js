import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div className="form-inline form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="text" className="form-control" id="quantity" placeholder="Quantity" aria-describedby="quantitylHelp" />

                <label htmlFor="ingredient">Ingredient</label>
                <input type="text" className="form-control" id="ingredient" placeholder="Ingredient" aria-describedby="ingredientHelp" />

                <button type="submit" className="btn btn-primary">Add</button>
            </div>
    );
    }
}

export default Ingredients;