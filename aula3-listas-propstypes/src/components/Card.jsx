import './card.css'
import PropsTypes from 'prop-types'

export function Card({ imageUrl, title, description, totalComments }) {
    return (
        <div className='container'>
            <img src={imageUrl} alt="imagem do post" />
            <div className='content'>
                <strong>{title}</strong>
                <p>{description}</p>

                <div className='footer'>
                    <span>{totalComments} comentarios</span>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    imageUrl: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    description: PropsTypes.string,
    totalComments: PropsTypes.number,
}