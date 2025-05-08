function debounce(func, wait) {
    let timeout

    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}

function printing(text) {
    console.log(text)
}

const debouncedPrinting = debounce(printing, 1000)

debouncedPrinting("Hello")
debouncedPrinting("Hello again")
