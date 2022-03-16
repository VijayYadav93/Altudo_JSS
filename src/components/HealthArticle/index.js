import React from 'react';
import { RichText, Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HealthArticle = (props) => {
  const AuthorList = props.fields.ArticleAuthors;
  return (
    <div>
      <h3>
        <Text field={props.fields.Title} />
      </h3>
      <h6>
        <RichText field={props.fields.Brief} />
      </h6>
      <p>
        <RichText field={props.fields.DetailedArticle} />
      </p>
      <div>
        <Image media={props.fields.ArticleImage} />
      </div>
      <div>
        <h4>List Of Doctor Available</h4>
        {AuthorList &&
          AuthorList.map((listItem, index) => {
            return (
              <div key={`DoctorInfoListItem-${index}`}>
                <h5>
                  <Link field={listItem.fields.doctorUrl}>
                    <Text field={listItem.fields.doctorName} />
                  </Link>{' '}
                </h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default HealthArticle;
