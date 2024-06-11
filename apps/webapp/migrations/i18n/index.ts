import { at, defineMigration, setIfMissing, unset } from 'sanity/migrate'

export default defineMigration({
  title: 'i18n',
  documentTypes: ['post'],

  migrate: {
    document(doc, context) {
      // this will be called for every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents

      return at('title', setIfMissing('Default title'))
    },
    node(node, path, context) {
      // this will be called for every node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents

      if (typeof node === 'string' && node === 'deleteme') {
        return unset()
      }
    },
    object(node, path, context) {
      // this will be called for every object node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
      // if (node._type === 'author') {
      //   // make sure all authors objects have a books array
      //   return at('books', setIfMissing([]))
      // }
    },
    array(node, path, context) {
      // this will be called for every array node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
    },
    string(node, path, context) {
      // this will be called for every string node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
    },
    number(node, path, context) {
      // this will be called for every number node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
    },
    boolean(node, path, context) {
      // this will be called for every boolean node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
    },
    null(node, path, context) {
      // this will be called for every null node in every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
    }
  }
})
