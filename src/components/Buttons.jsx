import TranslationContext from '../context/Translation';

const Buttons = () => {
  return (
    <TranslationContext.Consumer>
      {(value) => (
        <div className="buttons">
          <button onClick={value.french}>Fr</button>
          <button onClick={value.english}>En</button>
        </div>
      )}
    </TranslationContext.Consumer>
  )
}

export default Buttons;