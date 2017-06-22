import React from 'react';
import { Control } from 'react-redux-form';
import CustomErrors from './CustomErrors';

const required = val => val && val.length;

const User = props => { 
	return (
		<div>
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
		</div>
	);
}

export default User;