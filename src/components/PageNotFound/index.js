import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const PageNotFound = (props) => (
  <div>
    <Text field={props.fields.Title} />
    <p>
      <RichText field={props.fields.Description} />
    </p>
  </div>
);

export default PageNotFound;
