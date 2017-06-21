import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';


const required = val => val && val.length;

const CustomErrors = props => 
    <Errors
      model={props.model}
      messages={props.messages}
      show={{touched: true, focus: false}}
      wrapper={(props) => <div className="text-danger">{props.children}</div>}
    />
    
class ListForm extends React.Component {
  handleSubmit(user) {
    console.log(user);
  }
  render() {
    return (
      <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <h1>Test Form</h1>
        <div>
          <label htmlFor="user.firstName">First name:</label>
          <Control.text model="user.firstName" id="user.firstName" validators={{ required }}/>
          <CustomErrors
            model="user.firstName"
            messages={{
              required: 'Please enter a first name.',
            }}
          />
        </div>
        <div>
          <label htmlFor="user.lastName">Last name:</label>
          <Control.text model="user.lastName" id="user.lastName"  validators={{ required }}/>
          <CustomErrors
            model="user.lastName"
            messages={{
              required: 'Please enter a last name.',
            }}
          />
        </div>
        <button className="btn btn-default" type="button">
          Add another
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    );
  }
}

export default ListForm;