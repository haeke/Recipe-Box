import React, { Component } from "react";
import { Grid, Accordion } from "semantic-ui-react";
import AddRecipe from "./AddRecipe";
import ShowRecipes from "./ShowRecipes";
import HeaderTitle from "./HeaderTitle";
import Footer from "./Footer";
import base from "../data/base";

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      recipes: []
    };
  }

  componentWillMount() {
    this.recipesRef = base.syncState("recipes", {
      context: this,
      state: "recipes"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.recipesRef);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  addRecipe = item => {
    this.setState({
      recipes: [...this.state.recipes, item]
    });
  };

  removeItem = index => {
    let { recipes } = this.state;
    recipes.splice(index, 1);
    this.setState({
      recipes: this.state.recipes
    });
  };

  editItem = (item, activeIndex) => {
    let { recipes } = this.state;
    this.setState({
      recipies: (recipes[activeIndex] = item)
    });
  };

  render() {
    return (
      <Grid centered computer={16}>
        <HeaderTitle />
        <Grid.Row style={{ paddingTop: 0, minHeight: "100vh" }}>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Accordion fluid styled style={{ marginTop: "15px" }}>
              <AddRecipe addRecipe={this.addRecipe} />
              {this.state.recipes.length > 0 ? (
                <ShowRecipes
                  recipes={this.state.recipes}
                  removeItem={this.removeItem}
                  editItem={this.editItem}
                  addRecipe={this.addRecipe}
                />
              ) : null}
            </Accordion>
          </Grid.Column>
        </Grid.Row>
        <Footer />
      </Grid>
    );
  }
}

export default RecipeBox;
