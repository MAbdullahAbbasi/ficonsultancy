import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faHeadset,
  faPaperPlane,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  formatChatbotTimeLabel,
  getChatbotReply,
  getChatbotReplyDelayMs,
  getWelcomeReply,
} from '../../lib/chatbotEngine'

function createWelcomeMessage() {
  const welcome = getWelcomeReply()
  return {
    id: 'welcome',
    role: 'bot',
    text: welcome.text,
    chips: welcome.chips ?? [],
    isWelcome: true,
    time: formatChatbotTimeLabel(),
  }
}

export default function ChatbotWidget() {
  const titleId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState(() => [createWelcomeMessage()])
  const messagesRef = useRef(null)
  const inputRef = useRef(null)
  const replyTimeoutRef = useRef(null)

  const scrollMessagesToEnd = useCallback(() => {
    const el = messagesRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollMessagesToEnd()
  }, [messages, isTyping, scrollMessagesToEnd])

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) clearTimeout(replyTimeoutRef.current)
    }
  }, [])

  const submitUserText = useCallback((rawText) => {
    const text = (rawText ?? '').trim()
    if (!text || isTyping) return

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}-${Math.random()}`,
        role: 'user',
        text,
        time: formatChatbotTimeLabel(),
      },
    ])
    setInputValue('')
    setIsTyping(true)

    const delay = getChatbotReplyDelayMs()
    replyTimeoutRef.current = setTimeout(() => {
      const reply = getChatbotReply(text)
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}-${Math.random()}`,
          role: 'bot',
          text: reply.text,
          chips: reply.chips ?? [],
          time: formatChatbotTimeLabel(),
        },
      ])
      setIsTyping(false)
    }, delay)
  }, [isTyping])

  const handleSend = () => {
    submitUserText(inputValue)
  }

  const handleChipClick = (chipLabel) => {
    submitUserText(chipLabel)
  }

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const closePanel = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [isOpen])

  return (
    <div
      className={`fi-chatbot-wrap${isOpen ? ' is-open' : ''}`}
      id="fi-chatbot-wrap"
    >
      <button
        type="button"
        className="fi-chatbot-trigger"
        id="fi-chatbot-trigger"
        aria-label="Open chat"
        aria-expanded={isOpen}
        aria-controls="fi-chatbot-panel"
        onClick={toggleOpen}
      >
        <FontAwesomeIcon icon={faComments} />
      </button>

      <div
        className="fi-chatbot-panel"
        id="fi-chatbot-panel"
        role="dialog"
        aria-label="Chat"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
      >
        <div className="fi-chatbot-header">
          <div className="fi-chatbot-avatar">
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <div className="fi-chatbot-title" id={titleId}>
            FI Consultancy
          </div>
          <div className="fi-chatbot-status">
            <span className="fi-chatbot-status-dot" aria-hidden="true" />
            Online
          </div>
          <button
            type="button"
            className="fi-chatbot-close"
            id="fi-chatbot-close"
            aria-label="Close chat"
            onClick={closePanel}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div
          className="fi-chatbot-messages"
          id="fi-chatbot-messages"
          ref={messagesRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`fi-chatbot-msg fi-chatbot-msg-${msg.role === 'user' ? 'user' : 'bot'}${msg.isWelcome ? ' fi-chatbot-welcome' : ''}`}
              data-role={msg.role}
            >
              <div>{msg.text}</div>
              <div className="fi-chatbot-msg-time">{msg.time}</div>
              {msg.role === 'bot' && msg.chips?.length > 0 && (
                <div className="fi-chatbot-chips">
                  {msg.chips.map((label) => (
                    <button
                      key={`${msg.id}-${label}`}
                      type="button"
                      className="fi-chatbot-chip"
                      data-chip={label}
                      disabled={isTyping}
                      onClick={() => handleChipClick(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="fi-chatbot-typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <div className="fi-chatbot-input-wrap">
          <div className="fi-chatbot-input-inner">
            <input
              ref={inputRef}
              type="text"
              className="fi-chatbot-input"
              id="fi-chatbot-input"
              placeholder="Type your question..."
              autoComplete="off"
              aria-label="Message"
              value={inputValue}
              disabled={isTyping}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <button
              type="button"
              className="fi-chatbot-send"
              id="fi-chatbot-send"
              aria-label="Send"
              disabled={isTyping || !inputValue.trim()}
              onClick={handleSend}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
