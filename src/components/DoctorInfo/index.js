import React from 'react';
import { Text, getFieldValue } from '@sitecore-jss/sitecore-jss-react';

const DoctorInfo = (props) => {
  const fieldValue = getFieldValue(props.fields, 'doctorExperience');
  return (
    <div>
      <p>Doctor Information</p>
      <h1>
        <Text field={props.fields.doctorName} />
      </h1>
      <p>
        <Text field={props.fields.doctorQualification} />
      </p>
      <p>
        <Text field={props.fields.doctorSpeciality} />
      </p>
      <p>{fieldValue}</p>
    </div>
  );
};
export default DoctorInfo;
