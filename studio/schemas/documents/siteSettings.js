export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      description: 'Beskrivelse som dukker opp i søkemotorer og sosiale medier.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Stikkord',
      description: 'Stikkord som brukes av søkemotorer.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
