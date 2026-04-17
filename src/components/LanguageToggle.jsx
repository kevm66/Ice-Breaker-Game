function LanguageToggle({ currentLanguage, onToggle, t }) {
  return (
    <div className="language-toggle">
      <button
        id="langBtn"
        className="btn-lang"
        onClick={onToggle}
        aria-label="Switch language"
      >
        <span>🌐</span> <span>{currentLanguage === 'en' ? 'DE' : 'EN'}</span>
      </button>
    </div>
  )
}

export default LanguageToggle
