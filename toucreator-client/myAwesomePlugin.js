module.exports = {
  plugin(schema, documents, config) {
    console.log(`Config: ${JSON.stringify(config)}`);
    return JSON.stringify(config) + '\n' + documents
      .map(doc => {
        const docsNames = doc.document.definitions.map(def => def.name.value)
 
        return `File ${doc.location} contains: ${docsNames.join(', ')}`
      })
      .join('\n');
  }
};
