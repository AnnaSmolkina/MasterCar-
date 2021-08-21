import React , { Component } from 'react';
import axios from 'axios';
import { Button,  Form } from 'semantic-ui-react';

class PostForm extends Component{

    constructor(props){
        super(props)
        this.state= {
            user:'',
            phone:'',
            message:''
        }
    }

    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.user]:event.target.value});
    }

    handleChange = (event) => {
        this.setState({ [event.target.phone]:event.target.value});
      }

    handleSubmit  = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post('https://reqres.in/api/users', this.state)
             .then( response => {
            console.log(response)
            this.setState({message:"Ваши данные успешно отправлены"})
        }).catch( error => {
            console.log(error)
        })
    };

    render(){
        const {user,phone,message} = this.state;
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Имя</label>
              <input 
              type='text'
              name='text'
              placeholder={user}
              onChange={this.handleHtmlControlChange} />
            </Form.Field>
            <Form.Field>
              <label>Номер телефона</label>
              <input 
              type='text'
              name='text'
              placeholder={phone}
              onChange={this.handleChange}/>
            </Form.Field>
            <div>{message}</div>
            <Button type='submit'>Отправить</Button>
          </Form>
          )
     }
 };

export default PostForm;