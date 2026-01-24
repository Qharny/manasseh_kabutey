"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Chatbot from '../components/Chatbot';
import { useTheme } from '../hooks/use-theme';
import { Button } from '../components/UI/button';
import { privacyPolicies } from '@/lib/privacy-data';

const PrivacyListingPage = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-blue-500 selection:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        
        {/* Header Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy <span className="text-blue-600 dark:text-blue-400">Policies</span></h1>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                Your privacy is our priority. Below you will find the privacy policies for all our released mobile and web applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Policies List */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto grid gap-6">
              {privacyPolicies.map((policy, index) => (
                <motion.div
                  key={policy.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/privacy/${policy.slug}`}>
                    <div className="group p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 flex items-center justify-between">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{policy.appName}</h2>
                        <p className="text-gray-500 dark:text-gray-400">{policy.description}</p>
                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Last Updated: {policy.lastUpdated}
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Read Policy
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="container px-4 mx-auto pb-20 text-center">
            <Link href="/apps">
              <Button variant="ghost" className="text-gray-500 dark:text-gray-400 hover:text-blue-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shipped Applications
              </Button>
            </Link>
        </div>

        <Chatbot />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyListingPage;
