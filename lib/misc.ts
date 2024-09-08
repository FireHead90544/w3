import data from "@/content/misc/facts.json";

export function getRandomFact(){
    const facts = data.facts;

    return facts[Math.floor(Math.random() * facts.length)]
}

export function getHostURL(){
    const host = process.env.HOST_DOMAIN || process.env.VERCEL_PROJECT_PRODUCTION_URL
    
    return host ? `https://${host}` : "http://localhost:3000"
}