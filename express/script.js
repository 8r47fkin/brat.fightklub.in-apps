

document.addEventListener('visibilitychange',
function () {
    if (document.visibilityState === "visible") {
        document.title = "Press #";
    }
    else {
        document.title = "we dont talk about this";
    }
});


document.addEventListener(
"keydown",
(e) => {
if (e.key === "#") {
  toggleFullScreen();
}
},
false,
);
function toggleFullScreen() {
if (!document.fullscreenElement) {
document.documentElement.requestFullscreen();
} else if (document.exitFullscreen) {
document.exitFullscreen();
}
}




const boldBtn = document.querySelector("#bold-btn")
const underlineBtn = document.querySelector("#underline-btn")
const italicBtn = document.querySelector("#italic-btn")
const strikeBtn = document.querySelector("#strike-btn")
const colorBtn = document.querySelector("#color-btn")

const newBtn = document.querySelector("#new-btn")
const txtBtn = document.querySelector("#txt-btn")
const pdfBtn = document.querySelector("#pdf-btn")

const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")

boldBtn.addEventListener("click", () => {
    document.execCommand("bold")
})

underlineBtn.addEventListener("click", () => {
    document.execCommand("underline")
})

italicBtn.addEventListener("click", () => {
    document.execCommand("italic")
})

strikeBtn.addEventListener("click", () => {
    document.execCommand("strikethrough")
})

colorBtn.addEventListener("input", () => {
    document.execCommand("forecolor", false, colorBtn.value)
})

newBtn.addEventListener("click", () => {
    content.innerHTML = ""
})

txtBtn.addEventListener("click", () => {
    const a = document.createElement("a")
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click()
})

pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
})