import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text7 thq-heading-1">
                  Crea tus listas de tareas con estilo
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text8 thq-body-large">
                  Organiza tus actividades diarias de forma sencilla y elegante
                  con nuestra plataforma en línea para crear to do lists.
                  Destaca por su diseño minimalista y estilizado, junto a una
                  paleta de colores única que te inspirará a ser más productivo.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6 thq-body-small">
                    Crear mi primera lista
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5 thq-body-small">
                    Ver demostración
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1666307580427-821f83a763f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1612708345011-a49a57be15df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image11Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image5Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1724802799568-0f7a05b37672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1611186802476-42ce97d4a4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1646233361931-be6c183909f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Hero Image',
  image9Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image11Alt: 'Hero Image',
  action2: undefined,
  action1: undefined,
  image8Src:
    'https://images.unsplash.com/photo-1552595945-1a8d6751504d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1643057824234-6cd1a515403a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1585308013711-6b134e2c6a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  heading1: undefined,
  content1: undefined,
  image10Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image9Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1678571033038-a29468ee43cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTI5MzA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero17.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero17