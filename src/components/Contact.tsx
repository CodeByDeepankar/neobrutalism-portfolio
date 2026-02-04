'use client';

import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(result.message);
        e.currentTarget.reset(); // Clear the form
      } else {
        setSubmitMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-16">
      <h2 className="neobrutalist-h2 mb-8">CONTACT</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neobrutalist-card border-4 border-black p-8">
          <h3 className="neobrutalist-h3 mb-6">GET IN TOUCH</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-bold">NAME</label>
              <input 
                type="text" 
                name="name"
                className="neobrutalist-input w-full" 
                placeholder="YOUR NAME"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-bold">EMAIL</label>
              <input 
                type="email" 
                name="email"
                className="neobrutalist-input w-full" 
                placeholder="YOUR EMAIL"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-bold">MESSAGE</label>
              <textarea 
                rows={4} 
                name="message"
                className="neobrutalist-input w-full" 
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="neobrutalist-btn w-full">
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            
            {submitMessage && (
              <div className={`mt-4 p-4 text-center ${submitMessage.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} border-2 border-black`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
        
        <div className="neobrutalist-card border-4 border-black p-8">
          <h3 className="neobrutalist-h3 mb-6">CONTACT INFO</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📧</div>
              </div>
              <div>
                <h4 className="font-bold mb-1">EMAIL</h4>
                <p>codebydeepankar@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📱</div>
              </div>
              <div>
                <h4 className="font-bold mb-1">PHONE</h4>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📍</div>
              </div>
              <div>
                <h4 className="font-bold mb-1">LOCATION</h4>
                <p>New Delhi, India</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-4">SOCIAL LINKS</h4>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="neobrutalist-btn text-sm px-3 py-2"
                    style={{ backgroundColor: '#000', color: '#fff' }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;