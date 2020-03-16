import React from 'react';
import './App.css';
import axios from 'axios'
import MenuForm from './components/MenuForm';
import Menu from './components/Menu';
import {Container} from 'semantic-ui-react'

export default class App extends React.Component {
  state = {
    menus: [],
    loadMenuError: false,
    errorStatusCode: null,
    loading: true
  };

  addMenu = (menu)=>{
    // post menu
    axios.post('api/menus', { //rails path w post method
      //data
      name: menu.name,
    }).then((res)=>{
      console.log(res)
      const newArray = [res.data, ...this.state.menus] 
      this.setState({
          menus: newArray
      })
      //success
    }).catch((err)=>{
      //error
      console.log(err)

    })

  }

  updateMenu = (menuFromForm, id) => {
    axios.put(`api/menus/${id}`,{
      name: menuFromForm.name,
      
    })
    .then((res)=>{
      const newArray = this.state.menus.map ( currentMenu =>{
        if(currentMenu.id !== id) return currentMenu
        return {...currentMenu, ...menuFromForm}
      })
      this.setState({
          menus: newArray
      })
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)

    })
  }
  
  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter(menu => menu.id !== id), })
      })
  }


  renderMenus(){ //don't need to use arrow. if you have nested function and event handles, must use arrow function
    if (this.state.loading){
      return 'loading'
    }
    if (this.state.loadMenuError) {
      return(
         <div>
        <h1 style={{color:'red'}}>Error </h1>
      
        <p>Status Code: {this.state.errorStatusCode}</p>
        </div>)
    }
    return this.state.menus.map( menu =>{
      return(
        <Menu key={`menu-${menu.id}`} deleteMenu={this.deleteMenu} updateMenu={this.updateMenu} {...menu} />

      )
    })
  }
          /* <menu key={`menu-${menu.id}`} name={menu.name} complete={menu.complete} id={menu.id} /> */

  componentDidMount(){
    console.log('get data here')
    axios.get('api/menus')
      .then((res)=>{ //res or response
        this.setState({
          loading: false,
          menus: res.data,
          errorStatusCode: res.status,
         
        })
      })
      .catch((error)=>{
        console.log(error);
        this.setState({
          loading: false,
          loadMenuError: true,
          errorStatusCode: error.toString()
        })
      })
  }
  render(){
    return (
      <Container>
        <MenuForm addMenuProp={this.addMenu} />
        {this.renderMenus()}
  
      </Container>
    );
  }
}
