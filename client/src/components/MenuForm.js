import React from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class MenuForm extends React.Component {

  state = {
    id: this.props.id,
    name:this.props.name,
    // age:'',
  
  }

  handleOnSubmit = (event) => {           //need some sort of reference to the event, e or event, the event that triggers thing called
    event.preventDefault();
    if (this.props.id){
        this.props.updateMenu(this.state, this.props.id)
      }

    else{
      this.props.addMenuProp(this.state)
      }

    this.setState({
      name: '',
    })
  }

  handleChange = (event) => { //need to do binding
    this.setState({
      // name: event.target.value,
      [event.target.name]: event.target.value

    })
  }

  render(){
    return(
      <Form onSubmit={this.handleOnSubmit}>

        <Form.Input 
          label="Menu"
          name="name"
          placeholder='Enter a Menu'
          required
          onChange={this.handleChange}
          value={this.state.name}
         />

      <Button type='submit'> Submit </Button>
      </Form>
    )
  }


}