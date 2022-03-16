import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'PageNotFound',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Description', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
