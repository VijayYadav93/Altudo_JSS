import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'PatientRecords',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'records', type: CommonFieldTypes.ContentList }],
  });
}
