import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'HealthArticle',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Brief', type: CommonFieldTypes.RichText },
      { name: 'DetailedArticle', type: CommonFieldTypes.RichText },
      { name: 'ArticleImage', type: CommonFieldTypes.Image },
      { name: 'ArticleAuthors', type: CommonFieldTypes.ContentList },
    ],
  });
}
