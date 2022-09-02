// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, showThumbnailImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    showThumbnailImage(id)
  }

  const thumbnailClassName = isActive ? `thumbnail-active` : `thumbnail`

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-image-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
