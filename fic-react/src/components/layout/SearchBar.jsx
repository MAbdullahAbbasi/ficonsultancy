import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMobileMenu } from '../../context/MobileMenuContext'
import { filterSearchEntries } from '../../lib/siteSearch'

function SearchResultsPanel({
  variant,
  inputId,
  query,
  results,
  activeIndex,
  onSelectIndex,
  onNavigate,
  panelVisible,
}) {
  const resultsId =
    variant === 'mobile' ? 'mobileSearchResults' : 'desktopSearchResults'

  if (!panelVisible) {
    return <div id={resultsId} style={{ display: 'none' }} aria-hidden="true" />
  }

  const hasQuery = query.trim().length > 0

  if (!hasQuery) {
    return <div id={resultsId} style={{ display: 'none' }} aria-hidden="true" />
  }

  if (results.length === 0) {
    return (
      <div id={resultsId} style={{ display: 'block' }} role="listbox" aria-labelledby={inputId}>
        <div className="search-item" role="option" aria-selected="false">
          No results found
        </div>
      </div>
    )
  }

  return (
    <div
      id={resultsId}
      style={{ display: 'block' }}
      role="listbox"
      aria-labelledby={inputId}
    >
      {results.map((item, index) => {
        const isActive = index === activeIndex
        if (!item.route) {
          return (
            <div
              key={`${item.legacyUrl}-${index}`}
              className="search-item"
              role="option"
              aria-selected={isActive}
              aria-disabled="true"
            >
              <strong>{item.title}</strong>
              <p>{item.content}</p>
            </div>
          )
        }

        return (
          <Link
            key={item.route}
            to={item.route}
            className="search-item"
            role="option"
            aria-selected={isActive}
            onMouseEnter={() => onSelectIndex(index)}
            onClick={() => onNavigate(item.route)}
          >
            <strong>{item.title}</strong>
            <p>{item.content}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default function SearchBar({ id, variant = 'desktop' }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const rootRef = useRef(null)
  const { closeMenu } = useMobileMenu()

  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [panelOpen, setPanelOpen] = useState(false)

  const trimmedQuery = query.trim()
  const results = trimmedQuery ? filterSearchEntries(trimmedQuery) : []

  const resetSearch = useCallback(() => {
    setQuery('')
    setActiveIndex(0)
    setPanelOpen(false)
  }, [])

  const navigateToResult = useCallback(
    (route) => {
      if (!route) return
      resetSearch()
      if (variant === 'mobile') closeMenu()
      navigate(route)
    },
    [navigate, resetSearch, closeMenu, variant],
  )

  const runSearchInput = useCallback((value) => {
    setQuery(value)
    setActiveIndex(0)
    setPanelOpen(value.trim().length > 0)
  }, [])

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setPanelOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      resetSearch()
      inputRef.current?.blur()
      return
    }

    if (!trimmedQuery || results.length === 0) {
      if (event.key === 'Enter') {
        event.preventDefault()
      }
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setPanelOpen(true)
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1))
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((prev) => Math.max(prev - 1, 0))
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      const target = results[activeIndex]
      if (target?.route) {
        navigateToResult(target.route)
      }
    }
  }

  const inputProps = {
    ref: inputRef,
    type: 'text',
    className: 'searchBarInput',
    id,
    placeholder: 'Search...',
    'aria-label': 'Search',
    'aria-controls':
      variant === 'mobile' ? 'mobileSearchResults' : 'desktopSearchResults',
    'aria-expanded': panelOpen && trimmedQuery.length > 0,
    'aria-autocomplete': 'list',
    role: 'combobox',
    value: query,
    onChange: (e) => runSearchInput(e.target.value),
    onFocus: () => {
      if (trimmedQuery) setPanelOpen(true)
    },
    onKeyDown: handleKeyDown,
  }

  const panelVisible = panelOpen && trimmedQuery.length > 0

  const resultsPanel = (
    <SearchResultsPanel
      variant={variant}
      inputId={id}
      query={query}
      results={results}
      activeIndex={activeIndex}
      onSelectIndex={setActiveIndex}
      onNavigate={navigateToResult}
      panelVisible={panelVisible}
    />
  )

  if (variant === 'mobile') {
    return (
      <div className="mobileSearchBarContainer" ref={rootRef}>
        <div className="searchBarContainer">
          <input {...inputProps} />
        </div>
        {resultsPanel}
      </div>
    )
  }

  return (
    <div className="navInnerdivs" id="searchBarDiv" ref={rootRef}>
      <div className="searchBarContainer">
        <input {...inputProps} />
        {resultsPanel}
      </div>
    </div>
  )
}
