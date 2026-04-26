import { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, RefreshCw, User, HelpCircle, 
  Truck, Calendar, ExternalLink, Edit3, MessageCircle 
} from 'lucide-react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// --- Types ---
interface Order {
  date: string;
  item: string;
  qty: number;
  status: 'Delivered' | 'In Transit';
  link: string;
}
interface UserDashboardProps {
    user: boolean,
    setUser: any,
}
// --- Dummy Data ---
const orders: Order[] = [
  { date: '05/03/2024', item: 'Limon drink', qty: 28, status: 'Delivered', link: '#' },
  { date: '07/03/2024', item: 'Limon drink', qty: 3, status: 'In Transit', link: '#' },
  { date: '20/05/2024', item: 'Limon drink', qty: 2, status: 'Delivered', link: '#' },
  { date: '11/03/2024', item: 'Limon drink', qty: 2, status: 'Delivered', link: '#' },
];

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'My Orders', icon: ShoppingBag },
  { name: 'Active Sub...', icon: RefreshCw },
  { name: 'Profile Settings', icon: User },
  { name: 'Get Help', icon: HelpCircle },
];

const UserDashboard: React.FC<UserDashboardProps>= (({user, setUser}) => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className={`${user ? "top-0" : "-top-full"} fixed w-full h-screen bg-[#0a1120] text-slate-200 p-6 overflow-hidden font-sans z-1001 transition-all duration-300 ease-in-out`}>
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-350 mx-auto flex gap-6 relative z-10">
        
        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 flex flex-col gap-2 bg-[#1e293b]/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 h-[calc(100vh-3rem)] sticky top-6">
          <div className="mb-4">
            {/* Sidebar Logo/Brand Space if needed, empty since no header requested */}
          </div>
          
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-cyan-400' : 'text-slate-400'} />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 flex flex-col gap-8">
          
          {/* Welcome Text */}
          <div className="mt-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-500">
              Welcome back, [Customer Name]
            </h1>
            <FaArrowAltCircleRight onClick={() => setUser(false)} size={26} className='text-white hover:text-white/70 transition-all duration-200' />
          </div>

          {/* Widgets Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Widget 1: Total Orders */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex items-center gap-6 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]">
              <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <ShoppingBag size={32} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">28</h3>
                <p className="text-slate-400 text-sm">Total Orders</p>
              </div>
            </div>

            {/* Widget 2: Subscribed Plan (Cyan Glow Focus) */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-cyan-500/40 rounded-2xl p-6 flex items-center gap-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-transform duration-300">
              <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <RefreshCw size={32} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Subscribed Plan</h3>
                <p className="text-cyan-400 text-sm font-medium">Plan: The Daily Zest</p>
                <p className="text-slate-400 text-xs mt-1">Duration: 1 month</p>
              </div>
            </div>

            {/* Widget 3: Recent Delivery */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex items-center gap-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                <Truck size={32} className="text-yellow-100" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Recent Delivery</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Last shipment was delivered tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Two-Column Section (Order History + Quick Actions) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
            
            {/* Order History Table */}
            <div className="lg:col-span-2 bg-[#1e293b]/40 backdrop-blur-md border border-slate-700 rounded-3xl p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-yellow-500/90 mb-6">Order History</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 text-sm">
                      <th className="pb-4 font-medium pl-4">Order Date</th>
                      <th className="pb-4 font-medium">Item</th>
                      <th className="pb-4 font-medium">Quantity</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Tracking Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, idx) => (
                      <tr 
                        key={idx} 
                        className={`group border-b border-slate-800 hover:bg-cyan-500/5 transition-colors ${order.status === 'In Transit' ? 'bg-cyan-900/10 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.05)_inset]' : ''}`}
                      >
                        <td className="py-4 pl-4 text-sm text-slate-300">{order.date}</td>
                        <td className="py-4 text-sm text-white">{order.item}</td>
                        <td className="py-4 text-sm text-slate-300">{order.qty}</td>
                        <td className="py-4 text-sm">
                          <span className={`${order.status === 'In Transit' ? 'text-yellow-400' : 'text-green-400'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-sm">
                          <a href={order.link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                            https://limondr... <ExternalLink size={14} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="flex flex-col gap-6">
              
              <h2 className="text-xl font-semibold text-yellow-500/90">Quick Actions</h2>

              {/* Manage Sub Button */}
              <button className="w-full bg-linear-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-transform">
                <Calendar size={20} />
                Manage Subscription
              </button>

              {/* Edit Profile Details */}
              <div className="bg-[#1e293b]/40 backdrop-blur-md border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Edit Profile</h3>
                  <button className="text-slate-400 hover:text-cyan-400"><Edit3 size={16}/></button>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-slate-400">Name:</span>
                    <span className="text-slate-200">Active Profile</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/50 pb-2">
                    <span className="text-slate-400">Email:</span>
                    <span className="text-slate-200">reddargon@limondrink</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-400">Address:</span>
                    <span className="text-slate-200 text-right">No. 123, Pyay Road,<br/>Yangon</span>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-[#1e293b]/40 backdrop-blur-md border border-slate-700 rounded-2xl p-5 flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-yellow-500" />
                  <span className="font-medium text-white">Contact Support</span>
                </div>
                <span className="text-cyan-400 text-sm">Contact</span>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
})

export default UserDashboard;