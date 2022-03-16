import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'DoctorInfo',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'doctorName', type: CommonFieldTypes.SingleLineText },
      { name: 'doctorQualification', type: CommonFieldTypes.SingleLineText },
      { name: 'doctorSpeciality', type: CommonFieldTypes.SingleLineText },
      { name: 'doctorExperience', type: CommonFieldTypes.Number },
    ],
  });
}
