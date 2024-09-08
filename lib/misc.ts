import data from "@/content/misc/facts.json";

export function getRandomFact(){
    const facts = data.facts;

    return facts[Math.floor(Math.random() * facts.length)]
}

export function getHostURL(){
    const host = process.env.VERCEL_URL || process.env.HOST_DOMAIN
    
    return host ? `https://${host}` : "http://localhost:3000"
}