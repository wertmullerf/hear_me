let headphones = document.getElementById('black_headphone')

$('#orange').click(()=>{
  headphones.src = "media/orange_headphones_web.png"
})

$('#black').click(()=>{
  headphones.src = "media/black_headphones_web.png"
})

$('#golden').click(()=>{
  headphones.src = "media/golden_headphones_web.png"
})


$('.caseTitle').mouseenter(()=>{
  alert("This is not in stock")
})