'use client';

import React from 'react';
import { TrendingUp, DollarSign, CreditCard, Download } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';

export default function DoctorEarningsPage() {
  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-bold text-slate-900">Earnings & Payouts</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 text-white border-none">
             <CardContent className="p-6">
                <p className="text-slate-400 text-sm font-medium mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold mb-4">₹48,250</h2>
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none">
                   Withdraw Funds
                </Button>
             </CardContent>
          </Card>
          
          <Card className="border-slate-200">
             <CardContent className="p-6">
                <p className="text-slate-500 text-sm font-medium mb-1">This Month</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">₹12,400</h2>
                <p className="text-green-600 text-sm font-semibold flex items-center gap-1">
                   <TrendingUp size={16} /> +18% vs last month
                </p>
             </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
               <p className="text-slate-500 text-sm font-medium mb-1">Pending Payouts</p>
               <h2 className="text-4xl font-bold text-slate-900 mb-2">₹4,200</h2>
               <p className="text-slate-400 text-sm">Processing usually takes 24h</p>
            </CardContent>
          </Card>
       </div>

       <div className="bg-white border border-slate-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-bold text-slate-900">Transaction History</h3>
             <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} /> Export CSV
             </Button>
          </div>
          <div className="space-y-4">
             {[
               { id: '#TRX-9983', date: 'Today, 2:30 PM', desc: 'Consultation Fee - John Doe', amount: '+₹500', status: 'Success' },
               { id: '#TRX-9982', date: 'Yesterday, 10:15 AM', desc: 'Consultation Fee - Sita Devi', amount: '+₹500', status: 'Success' },
               { id: '#TRX-9981', date: '5 Feb, 09:00 AM', desc: 'Withdrawal to HDFC Bank', amount: '-₹10,000', status: 'Processing' },
             ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                   <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${tx.amount.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-600'}`}>
                         {tx.amount.startsWith('+') ? <DollarSign size={20} /> : <CreditCard size={20} />}
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">{tx.desc}</p>
                         <p className="text-xs text-slate-500">{tx.date} • {tx.id}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-slate-900'}`}>{tx.amount}</p>
                      <p className="text-xs font-semibold text-slate-400 uppercase">{tx.status}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}
