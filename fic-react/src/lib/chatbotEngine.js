/**
 * FAQ-style chatbot logic — ported from scripts/chatbot.js (no external API).
 */

const answers = {
  greeting: {
    text: "Hi! I'm the FI Consultancy assistant. You can ask me about our services, how to contact us, appointments, or careers. How can I help you today?",
    chips: [
      'What services do you offer?',
      'How can I contact you?',
      'Book an appointment',
      'Careers',
    ],
  },
  services: {
    text: 'We offer Financial Reporting, Tax, Audit, Bookkeeping, Advisory, and Integrated Solutions. Each service is designed to help businesses with compliance, transparency, and growth. Would you like details on a specific service?',
    chips: [
      'Financial Reporting',
      'Tax',
      'Audit',
      'Bookkeeping',
      'Advisory',
      'Contact us',
    ],
  },
  contact: {
    text: 'You can reach us by email at info@ficonsultancy.net or via WhatsApp at +92-314-1503257 and +92-322-0846330. You can also use the Contact page for a form, or book an appointment to meet the team.',
    chips: ['Book an appointment', 'Email', 'Back to services'],
  },
  appointment: {
    text: "To make an appointment, use the 'Make Appointment' button in the navigation or visit our appointment page. There you can meet our team and schedule a consultation.",
    chips: ['Contact', 'Services', 'Home'],
  },
  careers: {
    text: 'We welcome talented professionals. Visit our Careers page to explore current opportunities and learn about our culture and values.',
    chips: ['Our values', 'Contact', 'Services'],
  },
  about: {
    text: 'FI Consultancy is a professional services firm specializing in auditing, taxation, financial reporting, and corporate reporting. We focus on integrity, excellence, and helping businesses meet regulatory requirements and build stakeholder confidence.',
    chips: ['Services', 'Contact', 'Careers'],
  },
  'financial-reporting': {
    text: 'Our Financial Reporting service ensures accurate, compliant financial statements aligned with international standards. We help with transparency, decision-making, and meeting regulatory requirements.',
    chips: ['Other services', 'Contact', 'Book appointment'],
  },
  tax: {
    text: 'We offer tax planning, compliance, and advisory tailored to your business. We help you meet regulations, manage risk, and improve tax efficiency across jurisdictions.',
    chips: ['Audit', 'Bookkeeping', 'Contact'],
  },
  audit: {
    text: 'We provide independent, risk-focused audit services for regulatory compliance, financial accuracy, and stronger internal controls. Our audits support transparency and informed decision-making.',
    chips: ['Tax', 'Advisory', 'Contact'],
  },
  bookkeeping: {
    text: 'We maintain accurate financial records, ensure regulatory compliance, and keep your books audit-ready so you can focus on growing your business.',
    chips: ['Financial Reporting', 'Tax', 'Contact'],
  },
  advisory: {
    text: 'Our advisory covers financial planning, risk management, compliance, and strategic consulting. We support informed decisions, integrity, and sustainable growth.',
    chips: ['Integrated Solutions', 'Contact', 'Careers'],
  },
  'integrated-solutions': {
    text: 'We provide end-to-end solutions combining auditing, taxation, advisory, and financial reporting in one unified approach—reducing complexity and streamlining operations.',
    chips: ['Services', 'Contact', 'Appointment'],
  },
  default: {
    text: "I'm not sure I understood that. You can ask about our services (Financial Reporting, Tax, Audit, Bookkeeping, Advisory, Integrated Solutions), how to contact us, book an appointment, or careers. Try one of the suggestions below!",
    chips: [
      'What services do you offer?',
      'How can I contact you?',
      'Book an appointment',
    ],
  },
}

function normalize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getAnswerKey(msg) {
  const n = normalize(msg)
  if (!n) return 'greeting'

  const greeting = /\b(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy)\b/
  if (greeting.test(n)) return 'greeting'

  if (/\b(service|services|what\s*do\s*you\s*offer|offer)\b/.test(n)) return 'services'
  if (/\b(contact|email|phone|whatsapp|reach|address)\b/.test(n)) return 'contact'
  if (/\b(appointment|book|schedule|meet|consultation)\b/.test(n)) return 'appointment'
  if (/\b(career|careers|job|jobs|hiring|vacancy)\b/.test(n)) return 'careers'
  if (/\b(about|who\s*are\s*you|company|fic|fi\s*consultancy)\b/.test(n)) return 'about'

  if (/\b(financial\s*reporting|reporting)\b/.test(n)) return 'financial-reporting'
  if (/\b(tax|taxation)\b/.test(n)) return 'tax'
  if (/\b(audit|auditing)\b/.test(n)) return 'audit'
  if (/\b(bookkeeping|book\s*keeping|books)\b/.test(n)) return 'bookkeeping'
  if (/\b(advisory|advisors)\b/.test(n)) return 'advisory'
  if (/\b(integrated|solutions|end\s*to\s*end)\b/.test(n)) return 'integrated-solutions'

  return 'default'
}

export function getChatbotReply(msg) {
  const key = getAnswerKey(msg)
  return answers[key] || answers.default
}

export function getWelcomeReply() {
  return getChatbotReply('hello')
}

/** Same 12-hour label format as scripts/chatbot.js */
export function formatChatbotTimeLabel(date = new Date()) {
  const h = date.getHours()
  const m = date.getMinutes()
  const hour12 = h <= 12 ? h : h - 12
  const displayHour = hour12 === 0 ? 12 : hour12
  return `${displayHour}:${m < 10 ? '0' : ''}${m}${h < 12 ? ' AM' : ' PM'}`
}

/** Typing delay matching original: 600ms + random 0–400ms */
export function getChatbotReplyDelayMs() {
  return 600 + Math.random() * 400
}
