// Importing React, useState and useEffect
import React, { useState, useEffect } from 'react'

// Importing the valid and error icons
import validIcon from './valid.png'
import errorIcon from './error.png'

// This is the modal component
// The modal component is composed of a modal option, a close icon, a button and a button callback
// allowCustomization is a boolean that allows the user to customize the modal
const Modal = ({
  modal,
  closeIcon,
  button,
  allowCustomization,
  buttonCallback,
}) => {
  const [shown, setShown] = useState(true)

  // The modal options are defined in those two arrays
  const modalOptions = [
    {
      title: 'valid',
      icon: validIcon,
      altText: 'valid image',
      content: 'Your request has been successfully processed.',
      cta: 'Thanks !',
    },
    {
      title: 'error',
      icon: errorIcon,
      altText: 'error image',
      content: 'It seems that something went wrong.',
      cta: 'Try again !',
    },
  ]

  // The modal is closed when the user clicks on the close icon
  const handleShown = () => {
    setShown(false)
    if (buttonCallback) {
      buttonCallback()
    }
  }

  // The modal is closed when the user presses the escape key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleShown()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  // The modal option is defined based on the allowCustomization prop
  let option

  if (allowCustomization) {
    // If the modal is customizable, the modal option is set to the modal prop
    option = modal
  } else {
    // If the modal is not customizable, the modal option is set to the default option
    const selectedModalOption = modalOptions.filter((i) => i.title === modal)
    option = selectedModalOption[0]
  }

  // It returns a modal component if the shown state is true
  return shown ? (
    <modal open={true} className="modal__background">
      <div className="modal">
        {closeIcon ? (
          <button onClick={() => handleShown()} className="modal__closeButton">
            ✖
          </button>
        ) : null}
        <img className="modal__image" src={option.icon} alt={option.altText} />
        <p className="modal__body">{option.content}</p>
        {button ? (
          <button
            onClick={() => handleShown()}
            className={`modal__cta modal__cta--${option.title}`}
          >
            {option.cta}
          </button>
        ) : null}
      </div>
    </modal>
  ) : <modal open={false} />;
}

export default Modal
