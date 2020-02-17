export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4a5bdf6825cf4fa065e14b',
                  title: 'Sanity Studio',
                  name: 'bransjen-studio',
                  apiId: '64f4fdad-4148-466e-9bdc-0d305ac560be'
                },
                {
                  buildHookId: '5e4a5bdf08ec7b4ea63fc320',
                  title: 'Portfolio Website',
                  name: 'bransjen',
                  apiId: '75b48480-b30f-49b5-9817-8770ca76933a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elisejakob/bransjen',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://bransjen.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
