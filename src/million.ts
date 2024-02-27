import { readFileSync, writeFileSync } from 'fs'
import { JSDOM } from 'jsdom'

const jsdom = new JSDOM()
const parser = new jsdom.window.DOMParser()
const fileRaw = readFileSync('./dist/million-units.html').toString()

const doc = parser.parseFromString(fileRaw, 'text/html')

const tables = Array.from(doc.querySelectorAll("table"))

type Unit = {
  name: string,
  members: string[]
}

const result: Unit[] = []

tables.forEach(table => {
  
})

// console.log(result)
writeFileSync("./dist/cinderella_units.json", JSON.stringify(result))
