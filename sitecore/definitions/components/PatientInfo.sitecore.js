import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'PatientInfo',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'patientName', type: CommonFieldTypes.SingleLineText },
      { name: 'patientGender', type: CommonFieldTypes.SingleLineText },
      { name: 'patientDob', type: CommonFieldTypes.DateTime },
      { name: 'patientNo', type: CommonFieldTypes.SingleLineText },
      { name: 'patientPhoneNumber', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
