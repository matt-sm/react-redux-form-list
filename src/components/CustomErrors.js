import React from 'react';
import { Errors } from 'react-redux-form';

const CustomErrors = props => 
    <Errors
      model={props.model}
      messages={props.messages}
      show={{touched: true, focus: false}}
      wrapper={(props) => <div className="text-danger">{props.children}</div>}
    />

export default CustomErrors;