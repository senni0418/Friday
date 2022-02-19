const language = require('@google-cloud/language');

const getSentiment  = (cb, text) => {


    // Creates a client
    const client = new language.LanguageServiceClient();
    // Prepares a document, representing the provided text

    // Detects sentiment of entities in the document

    const positive_entities = []
    const neutral_entities = []
    const negative_entities = []

    // var itemProcessed = 0
    // sentences.forEach((sentence ) => {
    //     const document = {
    //         content: sentence,
    //         type: 'PLAIN_TEXT',
    //     };

    const document = {
    content: text,
    type: 'PLAIN_TEXT',
    };
    client.analyzeSentiment({document}).then(([res]) => {
        let sentences = res.sentences
        sentences.forEach(sentence => {
            if (sentence.sentiment.score > 0){
                positive_entities.push(sentence.text.content)
            }
            else if(sentence.sentiment.score == 0)
                neutral_entities.push(sentence.text.content)
            else
                negative_entities.push(sentence.text.content)
        })
        // itemProcessed ++;
        // if (itemProcessed == sentences.length) {
        cb ({
            "positive": [...positive_entities],
            "neutral": [...neutral_entities],
            "negative": [...negative_entities]
        })
        // }
    })    
    // })
}

module.exports = getSentiment
