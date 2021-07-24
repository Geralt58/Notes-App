import { createNote, removeAll, loadNotes } from "./notes";
import { setFilters } from "./filters"
import { renderNotes } from "./views"

renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`edit.html#${id}`)
})

document.querySelector("#remove-all").addEventListener('click', () => {
    removeAll()
    renderNotes()
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        console.log('a')
        loadNotes()
        renderNotes()
    }
})
