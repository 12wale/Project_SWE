
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8" data-aos="fade-right">
      <h2 className="text-3xl font-bold text-yellow-500 cinzel-decorative mb-6">Get in Touch</h2>
      <p className="text-gray-300 mb-8">
        Have questions about the museum? Interested in a guided tour? 
        Reach out to us using the form or the contact details below.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-500/10 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Visit Us</h3>
            <p className="text-gray-400">Tahrir Square, Meret Basha</p>
            <p className="text-gray-400">Qasr El Nil, Cairo Governorate, Egypt</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-500/10 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
            <p className="text-gray-400">+20 2 25782448</p>
            <p className="text-gray-400">+20 2 25782452</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-500/10 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
            <p className="text-gray-400">info@egyptianmuseum.gov.eg</p>
            <p className="text-gray-400">support@egyptianmuseum.gov.eg</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-500/10 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Opening Hours</h3>
            <p className="text-gray-400">Saturday - Thursday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-400">Friday: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
