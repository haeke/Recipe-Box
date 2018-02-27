import React, { Component } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import EditRecipe from './EditRecipe';

class ShowRecipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            showEdit: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
       
        this.setState({ activeIndex: newIndex });
    }

    removeItem = () => {
        console.log(this.state.activeIndex);
        this.props.removeItem(this.state.activeIndex);
    }

    render() {
        const { activeIndex } = this.state;
        const items = this.props.recipes.map((item, index) => {
            return (
                <div key={index}>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                <Icon name='dropdown' />
                    {item.name}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    <p>{item.description}</p>
                    <Button.Group>
                        <EditRecipe itemName={item.name} itemDescription={item.description} editItem={this.props.editItem} activeIndex={this.state.activeIndex} />
                        <Button onClick={this.removeItem} color='red'>X</Button>
                    </Button.Group>
                </Accordion.Content>
                </div>
            );
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default ShowRecipes;