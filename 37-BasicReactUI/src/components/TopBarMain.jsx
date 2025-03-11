import React from 'react';
import { Search, LogOut, Briefcase } from 'lucide-react';

const TopBarMain = () => {
  return (
    <div className='h-16 w-full bg-white border-b border-gray-200 px-6 flex items-center justify-between'>
      {/* Left Section - Logo */}
      <div className='flex items-center'>
        <div className='flex items-center space-x-2'>
          <Briefcase className='w-6 h-6 text-blue-600' />
          <span className='text-lg font-semibold text-gray-800'>WorkerConnect</span>
        </div>
      </div>

      {/* Middle Section - Search */}
      <div className='flex-1 max-w-2xl mx-12'>
        <div className='relative'>
          <input
            type="text"
            placeholder="Search for services..."
            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          />
          <Search className='absolute left-3 top-2.5 w-5 h-5 text-gray-400' />
        </div>
      </div>

      {/* Right Section - Logout */}
      <button className='flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200'>
        <LogOut className='w-5 h-5' />
        <span className='font-medium'>Logout</span>
      </button>
    </div>
  );
};

export default TopBarMain;
