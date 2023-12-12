export default [
  {
    name: 'post',
    path: '#',
    children: [
      { name: 'allArticles', path: '/articles' },
      { name: 'newArticle', path: '/articles/create' }
    ]
  }
]
