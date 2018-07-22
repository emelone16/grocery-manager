import React from 'react';

// Styles

const card = {
    width: 400,
    height: 125,
    overflow: "hidden"
}

const image = {
    height: "110%"
};

const title = {
    textAlign: "center",
    width: "100%",
    backgroundColor: "#4286f4",
    color: "white",
    fontSize: "1.5em"
}

const column = {
    padding: 0,
    width: 100
}

const styles = {
    image,
    card,
    title,
    column
};

const Recipe = ({recipe}) => {
    return (
        <div className="container card m-4" style={styles.card}>
            <div className="row">
                <div className="col-8" style={styles.column}>
                    <div style={styles.title}>{recipe.title}</div>
                    <div>{recipe.blurb}</div>
                </div>
                <div className="col-4 text-center" style={styles.column}>
                    <img src={recipe.image} alt={recipe.title} style={styles.image}/>
                </div>
            </div>
        </div>
    );
}

export default Recipe;