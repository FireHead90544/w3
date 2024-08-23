import data from "@/content/misc/facts.json";

export function getRandomFact(){
    const facts = data.facts;

    return facts[Math.floor(Math.random() * facts.length)]
}