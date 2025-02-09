let verbDB = [];
let nounDB = [];
let pronounDB = [];
let adverbDB = [];
let adjectiveDB = [];
let prepositionDB = [];
let conjunctionDB = [];
let interjectionDB = [];

async function databaseLoader() {
    try {
        verbDB = await (await fetch("../data/verbs.json")).json();
        nounDB = await (await fetch("../data/nouns.json")).json();
        pronounDB = await (await fetch("../data/pronouns.json")).json();
        adverbDB = await (await fetch("../data/adverbs.json")).json();
        adjectiveDB = await (await fetch("../data/adjectives.json")).json();
        prepositionDB = await (await fetch("../data/prepositions.json")).json();
        conjunctionDB = await (await fetch("../data/conjunctions.json")).json();
        interjectionDB = await (await fetch("../data/interjections.json")).json();
        articleDB = await (await fetch("../data/articles.json")).json();

        console.log("Scenario database loaded successfully.");

    } catch (error){
        console.error("Error loading scenario database: ", error);
        alert("Database Unable To Access")
    }
}

module.exports = {
    databaseLoader,
    verbDB,
    nounDB,
    pronounDB,
    adverbDB,
    adjectiveDB,
    prepositionDB,
    conjunctionDB,
    interjectionDB,
    articleDB
};