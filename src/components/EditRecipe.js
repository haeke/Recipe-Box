import React, { Component } from 'react';
import { Button, Modal, Form, Message } from 'semantic-ui-react';

class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            error: false,
            name: this.props.itemName || '',
            description: this.props.itemDescription || '',
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
        console.log(name + description);
        if (name === '' || description === '') {
            this.setState({
                error: !this.state.error,
            });
            console.log(this.state.error);
        } else {
            //create an object containing the name and description
            const newItem = Object.assign({name, description});
            console.log(newItem);
            this.props.editItem(newItem, this.props.activeIndex);
            this.close();
        }
    }

    render() {
        const { open, size, error } = this.state;
        return (
            <div>
                <Button color='blue' onClick={this.show('small')}>Edit Item</Button>
                <Modal size={size} open={open}>
                    <Modal.Header>
                        Edit a Receipe
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit} error>
                            <Form.Input fluid label='Name' name='name' value={this.state.name} placeholder='Recipe Name' onChange={this.handleChange}/>
                            { error ? <Message error header='Error' content='The name cannot be null' /> : null }
                            <Form.Input fluid label='Description' name='description' value={this.state.description} placeholder='Description'   onChange={this.handleChange}/>
                            { error ? <Message error header='Error' content='The description cannot be left blank.' /> : null }
                            <Form.Button content='Submit'/>
                            <Form.Button type="button" onClick={this.close}>Close</Form.Button>
                        </Form>
                    </Modal.Content>
               </Modal>
            </div>
        );
    }
}

export default EditRecipe;