'use client';

import React, { useState } from 'react';
import { Video, MessageSquare, Clock, Calendar } from 'lucide-react';
import { Button, Card } from '@/components/ui';

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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
          Talk to a Doctor
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Connect with available doctors for instant consultation
        </p>
      </div>

      {/* Available Doctors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableDoctors.map((doctor, i) => (
          <Card
            key={i}
            className={`p-6 border-2 ${
              doctor.available ? 'border-green-200 bg-green-50/30' : 'border-[var(--border-default)]'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                {doctor.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{doctor.specialty}</p>

              {doctor.available ? (
                <>
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-semibold">Available Now</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-4">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{doctor.waitTime}</span>
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
                <div className="text-[var(--text-tertiary)] text-sm font-medium py-3">
                  Currently Unavailable
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-2 border-blue-100 bg-blue-50/30 text-center">
          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <Video size={28} className="text-blue-600" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] mb-2">HD Video Call</h3>
          <p className="text-sm text-[var(--text-secondary)]">Crystal clear video consultation</p>
        </Card>

        <Card className="p-6 border-2 border-green-100 bg-green-50/30 text-center">
          <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={28} className="text-green-600" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] mb-2">Instant Chat</h3>
          <p className="text-sm text-[var(--text-secondary)]">Text chat during consultation</p>
        </Card>

        <Card className="p-6 border-2 border-purple-100 bg-purple-50/30 text-center">
          <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <Calendar size={28} className="text-purple-600" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] mb-2">Get Prescription</h3>
          <p className="text-sm text-[var(--text-secondary)]">Digital prescription after consultation</p>
        </Card>
      </div>
    </div>
  );
}
