export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee8beb99bc9650292ea9a9e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qcmisjyw',
                  apiId: 'b78fa798-d5f5-47c5-8548-a7da9772e838'
                },
                {
                  buildHookId: '5ee8beb9521af9019d0ada3b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2a9ntm8s',
                  apiId: '939c67f1-aeb0-42b9-9d49-93e3fdbcdcd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Scottemilesimon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2a9ntm8s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
