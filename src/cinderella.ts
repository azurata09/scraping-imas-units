import { readFileSync, writeFileSync } from 'fs'
import { JSDOM } from 'jsdom'

const jsdom = new JSDOM()
const parser = new jsdom.window.DOMParser()
const fileRaw = readFileSync('./dist/cinderella-units.html').toString()

const doc = parser.parseFromString(fileRaw, 'text/html')

const tables = Array.from(doc.querySelectorAll("table"))

type Unit = {
  name: string,
  members: string[]
}

const result: Unit[] = []

// 0       : Example of tables
// over 19 : Nameless units' tables
tables.slice(1, 19).forEach(table => {
  const tr_array = Array.from(table.querySelectorAll("tr"))
  tr_array.forEach(tr => {
    // console.log(tr.innerHTML)
    const unit_name = tr.querySelector("th > a")?.textContent!
    const unit_members = tr.querySelector("td")?.textContent?.split("×").map(str => str.trim())!
    // console.log("Unit Name: " + unit_name + "\n" + "Unit Members: " + unit_members)
    result.push({
      name: unit_name,
      members: unit_members
    })
  })
})

// console.log(result)
writeFileSync("./dist/cinderella_units.json", JSON.stringify(result))
