import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdStars from 'react-icons/lib/md/stars'

const hiddenDocTypes = listItem =>
  !['category', 'project', 'sketch', 'news', 'siteSettings', 'about'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Innstillinger')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Prosjekter')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Prosjekter')),
      S.listItem()
        .title('Div')
        .schemaType('sketch')
        .child(S.documentTypeList('sketch').title('Div')),
      S.listItem()
        .title('Bransjenytt')
        .schemaType('news')
        .child(S.documentTypeList('news').title('Bransjenytt')),
      S.listItem()
        .title('Kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorier')),
      S.listItem()
        .title('Om Bransjen')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        )
        .icon(MdStars),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
