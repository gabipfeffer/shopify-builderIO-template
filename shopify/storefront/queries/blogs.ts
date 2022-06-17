import { gql } from '@apollo/client'

export const getAllBlogs = gql`
  query getAllBlogs {
    blogs(first: 20) {
      edges {
        node {
          id
          handle
          title
        }
      }
    }
  }
`

export const getBlog = (handle: string) => gql`
  query getBlog {
  blog(handle: "${handle}") {
    id
    title
    handle
    articles(first: 100, sortKey: PUBLISHED_AT) {
      edges {
        cursor
        node {
          title
          id
          handle
          publishedAt
          image {
            src
          }
          content(truncateAt: 100)
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
}`

export const getArticle = (blog: string, article: string) => gql`
 query getSingleArticle {
  blogByHandle(handle: "${blog}") {
    articleByHandle(handle: "${article}") {
      title
      tags
      publishedAt
      content
      contentHtml
      excerpt
      excerptHtml
      handle
      id
      image {
        src
      }
      blog {
        handle
        title
      }
      author {
        name
      }
    }
  }
}
`
