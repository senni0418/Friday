const language = require('@google-cloud/language');

const getSentiment  = (cb, text) => {


    // Creates a client
    const client = new language.LanguageServiceClient();
    // Prepares a document, representing the provided text

    // Detects sentiment of entities in the document

    const positive_entities = []
    const neutral_entities = []
    const negative_entities = []

    const document = {
    content: text,
    type: 'PLAIN_TEXT',
    };

    var count = 0;
    client.analyzeSentiment({document}).then(([res]) => {
        let sentences = res.sentences
        sentences.forEach(sentence => {
            const obj = {}
            const document = {
                content: sentence.text.content,
                type: 'PLAIN_TEXT',
            };
            obj.sentence = sentence.text.content
            client.analyzeEntities({document}).then(([res]) => {
                let entities = res.entities
                const entityList = []
                entities.forEach(entity => {
                    entityList.push(entity.name)
                })
                obj.entities = entityList
                if (sentence.sentiment.score > 0){
                    positive_entities.push(obj)
                }
                else if(sentence.sentiment.score == 0)
                    neutral_entities.push(obj)
                else
                    negative_entities.push(obj)
                count ++;
                if (count === sentences.length){
                    cb ({
                        "positive": [...positive_entities],
                        "neutral": [...neutral_entities],
                        "negative": [...negative_entities]
                    })
                }
            }) 
        })
    })    
}


module.exports = getSentiment
