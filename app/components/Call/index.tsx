"use client";

import React, { useState } from 'react';

interface ModalProps {
    onClose: () => void;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, message }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <p className="mb-8">{message}</p>
        <div className="mt-4 flex justify-center">
      <button
        onClick={onClose}
        className="group flex items-center justify-center gap-2 rounded-md bg-[#F9B572] px-5 py-3 text-gray-700 transition focus:outline-none sm:w-auto"
      >
        <span className="text-sm font-medium"> Close </span>
      </button>
    </div>
      </div>
    </div>
  );

export default () => {
    const [url, setUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const urlPattern = /^https:\/\/chat\.openai\.com\/g\/g-[a-zA-Z0-9]+$/;

        if (!urlPattern.test(url)) {
            setModalMessage("Invalid URL format. Please enter a URL like https://chat.openai.com/g/g-xxxxxxxxx");
            setIsModalOpen(true);
            return;
        }

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (response.status !== 200) {
                setModalMessage('Submission failed. Please check you GPTS url and try again.');
                setIsModalOpen(true);
            } else {
                const result = await response.json();
                setModalMessage('Submission Successful! We will show your GPTs soon.');
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setModalMessage('Submission failed. Please check you GPTS url and try again.');
            setIsModalOpen(true);
        }
    };

    return (
<section className="bg-gray-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Welcome to submit your GPTs
      </h3>
      <p className="hidden text-gray-500 sm:mt-4 sm:block">
      Let more people see your GPTs, let us build the largest public GPTs store together
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="Url" className="sr-only">Url</label>

          <input
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://chat.openai.com/g/g-xxxxxxxx"
            className="w-full rounded-md  p-3 text-gray-700 shadow-xl transition focus:border-white focus:outline-none focus:ring focus:ring-[#A7D397]"
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#F9B572] px-5 py-3 text-gray-700 transition focus:outline-none sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Submit Now </span>
        </button>
      </form>
    </div>
  </div>
  {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} message= {modalMessage} />}
</section>
    );
};

