import React from 'react';
import { Truck, Gift, RefreshCw, Circle } from 'lucide-react';
import { FaArrowCircleLeft } from 'react-icons/fa';

interface NotificationItem {
  id: number;
  type: 'delivery' | 'promo' | 'system';
  title: string;
  message: string;
  time: string;
  isNew: boolean;
}
interface NotiProp {
    setNoti: any,
    noti: boolean,
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    type: 'delivery',
    title: 'Order Delivered!',
    message: 'Your Limon drink pack has been delivered to your doorstep.',
    time: '2 mins ago',
    isNew: true,
  },
  {
    id: 2,
    type: 'promo',
    title: 'Fresh Discount inside!',
    message: 'Get 20% off on your next subscription of The Daily Zest.',
    time: '1 hour ago',
    isNew: true,
  },
  {
    id: 3,
    type: 'system',
    title: 'Subscription Renewed',
    message: 'Your monthly plan was successfully renewed for April.',
    time: 'Yesterday',
    isNew: false,
  }
];

const Noti: React.FC<NotiProp> =(({setNoti, noti}) => {
  return (
    <div className={`flex justify-center ${noti ? "top-0" : "-top-full"} w-full h-screen fixed z-1001 items-center pt-10 min-h-screen transition-all duration-300 ease-in-out bg-[#0a1120]`}>
      {/* Notification Dropdown Container */}
      <FaArrowCircleLeft onClick={() => setNoti(false)} size={24} className="absolute top-5 left-5 text-white hover:text-white/70 hover:scale-104 transition-all duration-200 ease-in-out cursor-pointer"/>
      <div className="w-full max-w-md bg-[#1e293b]/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">Notifications</h3>
            <span className="bg-cyan-500 text-[#0a1120] text-[10px] font-black px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              2 NEW
            </span>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors">
            <span className="text-xs font-medium underline underline-offset-4">Mark all as read</span>
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-112 overflow-y-auto">
          {notifications.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative flex gap-4 p-5 transition-all duration-300 cursor-pointer border-b border-white/5 last:border-0 hover:bg-cyan-500/5 ${notif.isNew ? 'bg-cyan-500/3' : ''}`}
            >
              {/* Left Icon with Glow Background */}
              <div className={`mt-1 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${
                notif.type === 'delivery' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                notif.type === 'promo' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
              }`}>
                {notif.type === 'delivery' && <Truck size={18} />}
                {notif.type === 'promo' && <Gift size={18} />}
                {notif.type === 'system' && <RefreshCw size={18} />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`text-sm font-bold ${notif.isNew ? 'text-white' : 'text-slate-300'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium">{notif.time}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {notif.message}
                </p>
              </div>

              {/* New Status Dot */}
              {notif.isNew && (
                <div className="mt-2">
                  <Circle size={8} fill="currentColor" className="text-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <button className="w-full py-4 text-sm font-bold text-cyan-400 bg-white/5 hover:bg-cyan-500/10 transition-all border-t border-white/5">
          View All Activities
        </button>
      </div>
    </div>
  );
});

export default Noti;