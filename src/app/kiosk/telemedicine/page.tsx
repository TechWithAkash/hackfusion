'use client';

import React, { useState } from 'react';
import { Video, Phone, MessageSquare, Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function TelemedicinePage() {
  const [isConnecting, setIsConnecting] = useState(false);

  const availableDoctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      available: true,
      waitTime: '~2 min',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Internal Medicine',
      available: true,
      waitTime: '~5 min',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      available: false,
      waitTime: 'Unavailable',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link href="/kiosk">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
            <Video size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Talk to a Doctor
          </h1>
          <p className="text-xl text-gray-600">
            Connect with available doctors for instant consultation
          </p>
        </div>

        {/* Available Doctors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {availableDoctors.map((doctor, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 border-2 ${
                doctor.available ? 'border-green-200' : 'border-gray-200'
              } shadow-sm`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-100"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{doctor.specialty}</p>

                {doctor.available ? (
                  <>
                    <div className="flex items-center gap-2 text-green-600 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock size={16} />
                      <span className="text-sm">{doctor.waitTime}</span>
                    </div>
                    <Button
                      onClick={() => setIsConnecting(true)}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl h-12 font-semibold hover:shadow-lg transition-all"
                    >
                      <Video size={20} className="mr-2" />
                      Connect Now
                    </Button>
                  </>
                ) : (
                  <div className="text-gray-400 text-sm">Currently Unavailable</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-100 text-center">
            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Video size={28} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">HD Video Call</h3>
            <p className="text-sm text-gray-600">Crystal clear video consultation</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-green-100 text-center">
            <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={28} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Chat</h3>
            <p className="text-sm text-gray-600">Text chat during consultation</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-purple-100 text-center">
            <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Calendar size={28} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Prescription</h3>
            <p className="text-sm text-gray-600">Digital prescription after consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
