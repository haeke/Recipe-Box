import React, { Component } from 'react';
import { Modal, Button, Form, Message } from 'semantic-ui-react';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        //set the initial state for the addRecipe modal
        this.state = {
            open: false,
            name: '',
            description: '',
            error: false,
        }

        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //set the state of open to true and size of the modal to be small
    show = size => () => this.setState({ size, open: true });
    //set the state of open to false to close the modal
    close = () => this.setState({ open: false });

    //update the input/ state object when a user types
    handleChange = (e, { name, value }) => this.setState({[name]: value});

    //send the text entered into the 
    handleSubmit = () => {
        const { name, description } = this.state;
        //if either are null do not update the state with the new item
        if (name === '' || description === '') {
            this.setState({
                error: !this.state.error,
            });
            console.log(this.state.error);
        } else {
            //create a new object containing the name and description
            const newItem = Object.assign({name, description});
            console.log(newItem);
            this.props.addRecipe(newItem);
            this.close();
        }
    }

    render() {
        const { open, size, error } = this.state;
        return (
            <div>
               <Button fluid color='blue' onClick={this.show('small')}>Add Recipe</Button>
               
               <Modal size={size} open={open}>
                    <Modal.Header>
                        Add a Receipe
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit} error>
                            <Form.Input fluid label='Name' name='name' value={this.state.name} placeholder='Recipe Name' onChange={this.handleChange}/>
                            { error ? <Message error header='Error' content='The name cannot be null' /> : null }
                            <Form.Input fluid label='Description' name='description' value={this.state.description} placeholder='Description'  onChange={this.handleChange}/>
                            { error ? <Message error header='Error' content='The description cannot be null' /> : null }
                            <Form.Button content='Submit'/>
                            <Form.Button type="button" onClick={this.close}>Close</Form.Button>
                        </Form>
                    </Modal.Content>
               </Modal>
            </div>
        );
    }
}

export default AddRecipe;