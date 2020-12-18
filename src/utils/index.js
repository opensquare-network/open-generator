
const tryFetch = (src) => {
  return new Promise(async (resolve) => {
    try {
      await fetch(src)
      resolve(true)
    } catch {
      resolve(false)
    }
  })
}

export async function testImgSrc(src) {
  const notCors = await tryFetch(src)
  if (!notCors) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const img = await fetch(proxyUrl + src)
    const blob = await img.blob()
    const getBase64 = (image) => (
      new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(image);
      })
    )
    const base64 = await getBase64(blob)
    return base64
  } else {
    return src
  }
}
