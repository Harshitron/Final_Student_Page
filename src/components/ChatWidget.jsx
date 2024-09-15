import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (currentMessage.trim()) {
      setChatMessages([...chatMessages, { text: currentMessage, sender: 'user' }])
      setCurrentMessage('')
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for your message. An administrator will respond shortly.", sender: 'ai' },
        ])
      }, 1000)
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Us</h3>
            <button onClick={() => setIsChatOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}