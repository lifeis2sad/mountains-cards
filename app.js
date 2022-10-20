const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        if (!slide.classList.contains('active')){
            clearActive()
            slide.classList.add('active')
        } else {
            clearActive()
        }
    })
})
// for (const slide of slides){
//     slide.addEventListener('click', () => {
//         slide.classList.add('active')
//     })
// }
function clearActive(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}