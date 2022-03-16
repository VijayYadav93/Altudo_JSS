import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addTemplate({
    name: 'DoctorList-Template',
    fields: [
      { name: 'doctorName', type: CommonFieldTypes.SingleLineText },
      { name: 'doctorUrl', type: CommonFieldTypes.GeneralLink }],
  });
}
