import React from 'react';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form';
import CustomErrors from './CustomErrors';
import formProps from '../redux/formPropsSelector';

const required = val => val && val.length;

class UsersForm extends React.Component {
  handleSubmit(usersForm) {
    console.log(usersForm)
  }

  onAdd(e) {
      e.preventDefault();
      const {model, createUser} = this.props;
      createUser(model);
  }

  onRemove(id, e) {
      e.preventDefault();
      const {model, removeUser} = this.props;
      removeUser(model, id);
  }

  render() {
    const { model, usersForm } = this.props;
    return (
      <Form
        model={model}
        onSubmit={(usersForm) => this.handleSubmit(usersForm)}
      >
        <h1>Test Form</h1>
        {usersForm.users.map((user, i) =>
          <div key={i}>
            <h2>User #{i+1}</h2>
            <div>
              <label htmlFor={`users-${i}-firstName`}>First name:</label>
              <Control.text model={`${model}.users.[${i}].firstName`} id={`users-${i}-firstName`} validators={{ required }}/>
              <CustomErrors
                model={`${model}.users.[${i}].firstName`}
                messages={{required: 'Please enter a first name.'}}
              />
            </div>
            <div>
              <label htmlFor={`users-${i}-lastName`}>Last name:</label>
              <Control.text model={`${model}.users.[${i}].lastName`} id={`users-${i}-lastName`}  validators={{ required }}/>
              <CustomErrors
                model={`${model}.users.[${i}].lastName`}
                messages={{required: 'Please enter a last name.'}}
              />
            </div>
            <button className="btn btn-danger" type="button" onClick={this.onRemove.bind(this, i)}>
              Remove
            </button>
          </div>
        )}
        <button className="btn btn-default" type="button" onClick={this.onAdd.bind(this)}>
          Add User
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...formProps(state, 'usersForm')
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (model) => {
            dispatch(actions.push(`${model}.users`, {}));
        },
        removeUser: (model, id) => {
            dispatch(actions.remove(`${model}.users`, id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
