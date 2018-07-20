import React, { Component } from 'react';

class Recipe extends Component {

    constructor() {
        super();

        this.state = {
            title: "Spaghetti",
            image: "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpg"
        }
    }

    render() {
        return (
            <div className="card m-4" style={styles.card}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div style={styles.title}>{this.state.title}</div>
                        </div>
                        <div className="col-4" style={styles.imageColumn}>
                            <img className="card-img" src={this.state.image} style={styles.image}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Styles

const card = {
    width: 400
}

const image =  {
    width: "100%"
};

const title = {
    textAlign: "center",
    width: "100%",
    height: 25
}

const imageColumn = {
    padding: 0
}

const styles = { image, card, title, imageColumn };

export default Recipe;