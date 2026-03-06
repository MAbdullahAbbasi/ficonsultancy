/**
 * FI Consultancy - Site-wide chatbot
 * Injects widget, handles open/close, and answers basic FAQ-style questions.
 * Respects light/dark theme via CSS variables.
 */
(function () {
    'use strict';

    // Base URL for links (works from index, pages/, pages/services/, pages/industries/)
    function getBasePath() {
        var path = window.location.pathname || '';
        if (path.indexOf('/pages/') === -1) return '';
        if (path.indexOf('/pages/services/') !== -1 || path.indexOf('/pages/industries/') !== -1) return '../../';
        return '../';
    }

    var base = getBasePath();

    // FAQ-style answers: keywords/phrases -> { text, chips (optional) }
    var answers = {
        greeting: {
            text: "Hi! I'm the FI Consultancy assistant. You can ask me about our services, how to contact us, appointments, or careers. How can I help you today?",
            chips: ['What services do you offer?', 'How can I contact you?', 'Book an appointment', 'Careers']
        },
        services: {
            text: "We offer Financial Reporting, Tax, Audit, Bookkeeping, Advisory, and Integrated Solutions. Each service is designed to help businesses with compliance, transparency, and growth. Would you like details on a specific service?",
            chips: ['Financial Reporting', 'Tax', 'Audit', 'Bookkeeping', 'Advisory', 'Contact us']
        },
        contact: {
            text: "You can reach us by email at info@ficonsultancy.net or via WhatsApp at +92-314-1503257 and +92-322-0846330. You can also use the Contact page for a form, or book an appointment to meet the team.",
            chips: ['Book an appointment', 'Email', 'Back to services']
        },
        appointment: {
            text: "To make an appointment, use the 'Make Appointment' button in the navigation or visit our appointment page. There you can meet our team and schedule a consultation.",
            chips: ['Contact', 'Services', 'Home']
        },
        careers: {
            text: "We welcome talented professionals. Visit our Careers page to explore current opportunities and learn about our culture and values.",
            chips: ['Our values', 'Contact', 'Services']
        },
        about: {
            text: "FI Consultancy is a professional services firm specializing in auditing, taxation, financial reporting, and corporate reporting. We focus on integrity, excellence, and helping businesses meet regulatory requirements and build stakeholder confidence.",
            chips: ['Services', 'Contact', 'Careers']
        },
        financial-reporting: {
            text: "Our Financial Reporting service ensures accurate, compliant financial statements aligned with international standards. We help with transparency, decision-making, and meeting regulatory requirements.",
            chips: ['Other services', 'Contact', 'Book appointment']
        },
        tax: {
            text: "We offer tax planning, compliance, and advisory tailored to your business. We help you meet regulations, manage risk, and improve tax efficiency across jurisdictions.",
            chips: ['Audit', 'Bookkeeping', 'Contact']
        },
        audit: {
            text: "We provide independent, risk-focused audit services for regulatory compliance, financial accuracy, and stronger internal controls. Our audits support transparency and informed decision-making.",
            chips: ['Tax', 'Advisory', 'Contact']
        },
        bookkeeping: {
            text: "We maintain accurate financial records, ensure regulatory compliance, and keep your books audit-ready so you can focus on growing your business.",
            chips: ['Financial Reporting', 'Tax', 'Contact']
        },
        advisory: {
            text: "Our advisory covers financial planning, risk management, compliance, and strategic consulting. We support informed decisions, integrity, and sustainable growth.",
            chips: ['Integrated Solutions', 'Contact', 'Careers']
        },
        'integrated-solutions': {
            text: "We provide end-to-end solutions combining auditing, taxation, advisory, and financial reporting in one unified approach—reducing complexity and streamlining operations.",
            chips: ['Services', 'Contact', 'Appointment']
        },
        default: {
            text: "I'm not sure I understood that. You can ask about our services (Financial Reporting, Tax, Audit, Bookkeeping, Advisory, Integrated Solutions), how to contact us, book an appointment, or careers. Try one of the suggestions below!",
            chips: ['What services do you offer?', 'How can I contact you?', 'Book an appointment']
        }
    };

    // Normalize user input for matching
    function normalize(s) {
        return (s || '')
            .toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Map user message to an answer key
    function getAnswerKey(msg) {
        var n = normalize(msg);
        if (!n) return 'greeting';

        var greeting = /\b(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy)\b/;
        if (greeting.test(n)) return 'greeting';

        if (/\b(service|services|what\s*do\s*you\s*offer|offer)\b/.test(n)) return 'services';
        if (/\b(contact|email|phone|whatsapp|reach|address)\b/.test(n)) return 'contact';
        if (/\b(appointment|book|schedule|meet|consultation)\b/.test(n)) return 'appointment';
        if (/\b(career|careers|job|jobs|hiring|vacancy)\b/.test(n)) return 'careers';
        if (/\b(about|who\s*are\s*you|company|fic|fi\s*consultancy)\b/.test(n)) return 'about';

        if (/\b(financial\s*reporting|reporting)\b/.test(n)) return 'financial-reporting';
        if (/\b(tax|taxation)\b/.test(n)) return 'tax';
        if (/\b(audit|auditing)\b/.test(n)) return 'audit';
        if (/\b(bookkeeping|book\s*keeping|books)\b/.test(n)) return 'bookkeeping';
        if (/\b(advisory|advisors)\b/.test(n)) return 'advisory';
        if (/\b(integrated|solutions|end\s*to\s*end)\b/.test(n)) return 'integrated-solutions';

        return 'default';
    }

    function getAnswer(msg) {
        var key = getAnswerKey(msg);
        return answers[key] || answers.default;
    }

    function timeLabel() {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        return (h <= 12 ? h : h - 12) + ':' + (m < 10 ? '0' : '') + m + (h < 12 ? ' AM' : ' PM');
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function createWelcome() {
        var welcome = getAnswer('hello');
        var html = '<div class="fi-chatbot-msg fi-chatbot-msg-bot fi-chatbot-welcome" data-role="bot">';
        html += '<div>' + escapeHtml(welcome.text) + '</div>';
        html += '<div class="fi-chatbot-msg-time">' + timeLabel() + '</div>';
        if (welcome.chips && welcome.chips.length) {
            html += '<div class="fi-chatbot-chips">';
            welcome.chips.forEach(function (label) {
                html += '<button type="button" class="fi-chatbot-chip" data-chip="' + escapeHtml(label) + '">' + escapeHtml(label) + '</button>';
            });
            html += '</div>';
        }
        html += '</div>';
        return html;
    }

    function appendBotMessage(text, chips) {
        var container = document.getElementById('fi-chatbot-messages');
        if (!container) return;

        // Remove any typing indicator
        var typing = container.querySelector('.fi-chatbot-typing');
        if (typing) typing.remove();

        var html = '<div class="fi-chatbot-msg fi-chatbot-msg-bot" data-role="bot">';
        html += '<div>' + escapeHtml(text) + '</div>';
        html += '<div class="fi-chatbot-msg-time">' + timeLabel() + '</div>';
        if (chips && chips.length) {
            html += '<div class="fi-chatbot-chips">';
            chips.forEach(function (label) {
                html += '<button type="button" class="fi-chatbot-chip" data-chip="' + escapeHtml(label) + '">' + escapeHtml(label) + '</button>';
            });
            html += '</div>';
        }
        html += '</div>';

        var wrap = document.createElement('div');
        wrap.innerHTML = html;
        container.appendChild(wrap.firstElementChild);
        container.scrollTop = container.scrollHeight;
    }

    function showTyping() {
        var container = document.getElementById('fi-chatbot-messages');
        if (!container) return;
        var div = document.createElement('div');
        div.className = 'fi-chatbot-typing';
        div.innerHTML = '<span></span><span></span><span></span>';
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function appendUserMessage(text) {
        var container = document.getElementById('fi-chatbot-messages');
        if (!container) return;
        var html = '<div class="fi-chatbot-msg fi-chatbot-msg-user" data-role="user">';
        html += '<div>' + escapeHtml(text) + '</div>';
        html += '<div class="fi-chatbot-msg-time">' + timeLabel() + '</div>';
        html += '</div>';
        var wrap = document.createElement('div');
        wrap.innerHTML = html;
        container.appendChild(wrap.firstElementChild);
        container.scrollTop = container.scrollHeight;
    }

    function replyToUser(input) {
        var text = (input || '').trim();
        if (!text) return;

        appendUserMessage(text);
        showTyping();

        setTimeout(function () {
            var reply = getAnswer(text);
            appendBotMessage(reply.text, reply.chips);
            bindChipClicks();
        }, 600 + Math.random() * 400);
    }

    // Only show bot reply (inline script already added the user message)
    function doBotReplyOnly(text) {
        var t = (text || '').trim();
        if (!t) return;
        try {
            showTyping();
            setTimeout(function () {
                try {
                    var reply = getAnswer(t);
                    var msg = (reply && reply.text) ? reply.text : "How can I help you today? Ask about our services, contact info, or appointments.";
                    var chips = (reply && reply.chips) ? reply.chips : ['What services do you offer?', 'How can I contact you?'];
                    appendBotMessage(msg, chips);
                    bindChipClicks();
                } catch (err) {
                    appendBotMessage("Thanks for your message! You can reach us at info@ficonsultancy.net or use the Contact page.", []);
                }
            }, 600 + Math.random() * 400);
        } catch (err) {}
    }

    function bindChipClicks() {
        var panel = document.getElementById('fi-chatbot-panel');
        if (!panel) return;
        panel.querySelectorAll('.fi-chatbot-chip').forEach(function (btn) {
            if (btn._bound) return;
            btn._bound = true;
            btn.addEventListener('click', function () {
                var chipText = btn.getAttribute('data-chip') || btn.textContent;
                replyToUser(chipText);
            });
        });
    }

    // Called by inline script when user sends (user message already in chat)
    window.fiChatbotReply = doBotReplyOnly;

    // Legacy: some pages may still call this
    window.fiChatbotSend = function () {
        var input = document.getElementById('fi-chatbot-input');
        var val = input && (input.value || '').trim();
        if (!val) return;
        input.value = '';
        replyToUser(val);
    };

    function init() {
        var wrap = document.getElementById('fi-chatbot-wrap');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'fi-chatbot-wrap';
            wrap.className = 'fi-chatbot-wrap';
            wrap.innerHTML =
                '<button type="button" class="fi-chatbot-trigger" id="fi-chatbot-trigger" aria-label="Open chat">' +
                '<i class="fas fa-comments"></i>' +
                '</button>' +
                '<div class="fi-chatbot-panel" id="fi-chatbot-panel" role="dialog" aria-label="Chat">' +
                '<div class="fi-chatbot-header">' +
                '<div class="fi-chatbot-avatar"><i class="fas fa-headset"></i></div>' +
                '<div class="fi-chatbot-title">FI Consultancy</div>' +
                '<div class="fi-chatbot-status">' +
                '<span class="fi-chatbot-status-dot"></span> Online' +
                '</div>' +
                '<button type="button" class="fi-chatbot-close" id="fi-chatbot-close" aria-label="Close chat"><i class="fas fa-times"></i></button>' +
                '</div>' +
                '<div class="fi-chatbot-messages" id="fi-chatbot-messages">' +
                createWelcome() +
                '</div>' +
                '<div class="fi-chatbot-input-wrap">' +
                '<div class="fi-chatbot-input-inner">' +
                '<input type="text" class="fi-chatbot-input" id="fi-chatbot-input" placeholder="Type your question..." autocomplete="off" aria-label="Message">' +
                '<button type="button" class="fi-chatbot-send" id="fi-chatbot-send" aria-label="Send" onclick="window.fiChatbotSend && window.fiChatbotSend()"><i class="fas fa-paper-plane"></i></button>' +
                '</div>' +
                '</div>' +
                '</div>';
            document.body.appendChild(wrap);
        }

        var input = document.getElementById('fi-chatbot-input');
        var sendBtn = document.getElementById('fi-chatbot-send');
        var messagesEl = document.getElementById('fi-chatbot-messages');
        if (!wrap) return;

        // Open/close is handled by inline onclick in HTML so it works even if script fails

        if (messagesEl && !messagesEl.innerHTML.trim()) {
            try { messagesEl.innerHTML = createWelcome(); } catch (e) {}
        }

        function send() {
            var val = input && (input.value || '').trim();
            if (!val) return;
            input.value = '';
            replyToUser(val);
        }

        if (sendBtn) sendBtn.onclick = send;
        if (input) {
            input.onkeydown = function (e) {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
            };
        }

        if (messagesEl) {
            try {
                messagesEl.querySelectorAll('.fi-chatbot-chip').forEach(function (btn) {
                    if (btn._bound) return;
                    btn._bound = true;
                    btn.onclick = function () {
                        replyToUser(btn.getAttribute('data-chip') || btn.textContent);
                    };
                });
            } catch (e) {}
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 0);
    }
})();
