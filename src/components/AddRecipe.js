import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            description: '',
        }

        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    show = size => () => this.setState({ size, open: true });

    close = () => this.setState({ open: false });

    handleChange = (e, { name, value }) => this.setState({[name]: value});

    handleSubmit = () => {
        const { name, description } = this.state;
        //create an object containing the name and description
        const newItem = Object.assign({name, description});
        console.log(newItem);
        this.props.addRecipe(newItem);
    }

    render() {
        const { open, size } = this.state;
        return (
            <div>
               <Button fluid color='blue' onClick={this.show('small')}>Add Recipe</Button>
               
               <Modal size={size} open={open}>
                    <Modal.Header>
                        Add a Receipe
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input fluid label='Name' name='name' value={this.state.name} placeholder='Recipe Name' onChange={this.handleChange}/>
                            <Form.Input fluid label='Description' name='description' value={this.state.description} placeholder='Description'   onChange={this.handleChange}/>
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