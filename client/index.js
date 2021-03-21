async function UploadImagem(event) {
  const file = event.target.files[0]
  const img = document.getElementById("imagem_foto");
  //const arquivo = await Ler(file)
  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = (event) => {
    img.src = event.target.result
  }

  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  img.onload = function() {
    ctx.canvas.width = img.naturalWidth;
    ctx.canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0)
    //A QUALIDADE DA IMAGEM VAI DE 0.1 A 1 
    const dataURL = c.toDataURL('image/jpeg', 0.1);
    console.log(dataURL);
  }
}

