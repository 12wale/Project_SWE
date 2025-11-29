
import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm" data-aos="fade-left">
      <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
