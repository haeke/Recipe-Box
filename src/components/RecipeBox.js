import React, { Component } from 'react';
import { Grid, Accordion, Header } from 'semantic-ui-react';
import AddRecipe from './AddRecipe';
import ShowRecipes from './ShowRecipes';
import base from '../data/base';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeIndex: 0,
        editRecipeItem: [],
        recipes: [],
      };

    this.addRecipe = this.addRecipe.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentWillMount() {
    this.recipesRef = base.syncState('recipes', {
        context: this,
        state: 'recipes',
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

  addRecipe(item) {
      this.setState({
          recipes: [...this.state.recipes, item],
      });
  }

  removeItem(index) {
      let { recipes } = this.state;
      recipes.splice(index, 1);
      this.setState({
          recipes: this.state.recipes,
      });
  }

  editItem(item, activeIndex) {
      let { recipes } = this.state;
      this.setState({
          recipies: recipes[activeIndex] = item,
      });
  }

  render() {
      return (
          <div>
              <Grid centered computer={16}>
                  <Grid.Row>
                      <Grid.Column computer={8} tablet={16} mobile={16}>
                          <Header as='h1' content='Recipe Box' textAlign='center' />
                          <Accordion fluid styled>
                              <AddRecipe addRecipe={this.addRecipe} />
                              {
                                  this.state.recipes.length > 0 ?
                                      <ShowRecipes
                                      recipes={this.state.recipes}
                                      removeItem={this.removeItem}
                                      editItem={this.editItem}
                                      addRecipe={this.addRecipe} /> : null
                                  }
                          </Accordion>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
      )
  }
}

export default RecipeBox;
