import React from 'react';
import { Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const PatientInfo = (props) => (
  <div>
    <h1>
      <Text field={props.fields.patientName} />
    </h1>
    <p>
      <Text field={props.fields.patientGender} />
    </p>
    <p>
      <DateField field={props.fields.patientDob} />
    </p>
    <p>
      <Text field={props.fields.patientNo} />
    </p>
    <p>
      <Text field={props.fields.patientPhoneNumber} />
    </p>
  </div>
);

export default PatientInfo;
