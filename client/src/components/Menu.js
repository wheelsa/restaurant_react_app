import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import MenuForm from './MenuForm'


export default class Menu extends React.Component{
 state={
   showForm: false
 }

 showForm(){
   return(<MenuForm       
    name={this.props.name}
    id={this.props.id} 
    updateMenu={this.props.updateMenu}
/>
   )
 }
 showMenu(){
   return(
     <>
      <div> {this.props.id}</div>
      <div>{this.props.name}</div>
     </>
   )
 }

 toggleForm = () =>{
   this.setState({
     showForm: !this.state.showForm
   })
 }

 

  render(){
    const {deleteMenu, id} = this.props
    return(
        <>
        <Card>
            <Card.Content>
              {this.state.showForm? this.showForm() : this.showMenu()}
              <Button onClick={this.toggleForm}> 
              {this.state.showForm ? 'Hide Form': 'Edit'} 
              </Button>
              <Button  
                color="red" 
                onClick={() => deleteMenu(id)} 
                style={{ marginLeft: "15px", }}> 
                Delete
              </Button>
    
          </Card.Content>
          </Card>
        </>
      
      
    )
  }
}