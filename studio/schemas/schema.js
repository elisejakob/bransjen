// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import project from './documents/project'
import sketch from './documents/sketch'
import news from './documents/news'
import siteSettings from './documents/siteSettings'
import about from './documents/about'

// Object types
import source from './objects/source'
import figure from './objects/figure'
import video from './objects/video'
import figureTwoColumn from './objects/figureTwoColumn'
import simplePortableText from './objects/simplePortableText'
import gradientPalette from './objects/gradientPalette'
import footer from './objects/footer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Bransjen',
  // Then proceed to concatenate our our document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as { type: 'typename' } in other document schemas
    source,
    figure,
    video,
    figureTwoColumn,
    simplePortableText,
    gradientPalette,
    footer,
    // The following are document types which will appear in the studio.
    category,
    project,
    sketch,
    news,
    siteSettings,
    about
  ])
})
