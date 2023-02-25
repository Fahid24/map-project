const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sectionTemplate = path.resolve("src/templates/dynamic-page.js")
  // Query the data for the dynamic pages
  const result = await graphql(`
    query {
      allContentfulEventsPage {
        edges {
          node {
            pageTitle
            events {
              id
              title
              eventDate(locale: "")
              eventDescription {
                eventDescription
              }
            }
          }
        }
      }
    }
  `)

  const sections = result.data.allContentfulEventsPage.edges[0].node.events
  // Create a page for each item in the data
  // console.log(sections)
  sections.forEach(section => {
    createPage({
      path: `${section.title}/${section.id}`,
      component: sectionTemplate,

      context: {
        slug: section.id,
        title: result.data.allContentfulEventsPage.edges[0].node.pageTitle,
        subTitle: section.title,
        date: section.eventDate,
        des: section.eventDescription.eventDescription,
      },
    })
  })

  const updateSectionTemplate = path.resolve("src/templates/update-details.js")
  // Query the data for the dynamic pages
  const result2 = await graphql(`
    query {
      allContentfulUpdatesPage {
        edges {
          node {
            pageTitle
            pageDescription {
              pageDescription
            }
            updates {
              id
              date
              title
              updateImage {
                url
              }
              description {
                description
              }
            }
          }
        }
      }
    }
  `)

  const sections2 = result2.data.allContentfulUpdatesPage.edges[0].node.updates
  // Create a page for each item in the data
  // console.log(sections)
  sections2.forEach(section => {
    createPage({
      path: `${section.title}/${section.id}`,
      component: updateSectionTemplate,

      context: {
        slug: section.id,
        title: result2.data.allContentfulUpdatesPage.edges[0].node.pageTitle,
        subTitle: section.title,
        date: section.date,
        des: section.description.description,
      },
    })
  })
}
