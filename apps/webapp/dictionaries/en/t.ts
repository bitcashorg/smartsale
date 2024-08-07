import { whitepaper } from "./whitepaper"
import fs from 'node:fs'

function transformWhitepaper(whitepaper) {
    const newSections = []
    let currentSection = null
    let isFirstParagraph = true

    whitepaper.content.forEach((item, index) => {
        if (item.type === 'h1') {
            if (currentSection) {
                newSections.push(currentSection)
            }
            currentSection = { type: 'section', title: item.text, content: [] }
            isFirstParagraph = true
        } else if (item.type === 'p') {
            if (isFirstParagraph) {
                currentSection.content.push(item)
                isFirstParagraph = false
            } else {
                const firstPointIndex = item.text.indexOf('.')
                if (firstPointIndex !== -1) {
                    const subtitle = item.text.substring(0, firstPointIndex + 1)
                    const remainingText = item.text.substring(firstPointIndex + 1).trim()
                    currentSection.content.push({ type: 'h2', text: subtitle })
                    if (remainingText) {
                        currentSection.content.push({ type: 'p', text: remainingText })
                    }
                } else {
                    currentSection.content.push(item)
                }
            }
        } else {
            currentSection.content.push(item)
        }
    })

    if (currentSection) {
        newSections.push(currentSection)
    }

    return { sections: newSections }
}

// Transform the whitepaper
const transformedWhitepaper = transformWhitepaper(whitepaper)

// Output the transformed whitepaper
const t = JSON.stringify(transformedWhitepaper, null, 2)
fs.writeFileSync('whitepaper.json', t)