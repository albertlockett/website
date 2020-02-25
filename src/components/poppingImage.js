import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function PoppingImage(props) {
  const [displayBig, setDisplayBig] = useState(false)
  return (
    <span style={{ maxWidth: '100px', maxHeight: '100px' }}>
      <button
        style={{
          padding: 0,
          cursor: 'pointer',
          background: 'white',
          border: 'none',
          zIndex: 0,
        }}
        className="display-picture-button" 
        onClick={() => setDisplayBig(true)}
       >
          <img 
            style={{
              width: 12,
              height: 12,
              cursor: 'pointer',
              position: 'relative',
              top: 2,
              zIndex: 1,
            }} 
            src="/image_icon.png"
          />
      </button>
      {displayBig && (
        <div 
          onClick={() => setDisplayBig(false)}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 2,
            cursor: 'pointer',
          }}
         >
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              background: '#333',
              opacity: 0.8,
              zIndex: 3,
            }} />
            <div style={{
              'position': 'absolute',
              'top': '50%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)',
              zIndex: 4,
            }}>
              <img src={props.src} />
            </div>
        </div>
      )}
    </span>
  )
}

PoppingImage.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
}