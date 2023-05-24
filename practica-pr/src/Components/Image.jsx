import useImage from '../hooks/useImage.js'

export const Image = () => {
  const { imageUrl } = useImage({ fact: 'cat' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}