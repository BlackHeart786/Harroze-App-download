'use client';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0d0c0b] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 w-full max-w-md shadow-2xl border-t-4 border-green-500 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Reset!</h2>
        <p className="text-gray-500 mb-8">
          Your password has been updated successfully. You can now login to the app with your new credentials.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
          <p className="text-sm font-semibold text-gray-700">Open the Harroze App to Login</p>
        </div>
      </div>
    </div>
  );
}