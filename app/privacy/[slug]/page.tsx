import { privacyPolicies } from '@/lib/privacy-data';
import { Metadata } from 'next';
import PrivacyDetailClient from './PrivacyDetailClient';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const policy = privacyPolicies.find(p => p.slug === slug);

  if (!policy) {
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-blue-500 selection:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        
        {/* Header Section */}
        <section className="relative pt-32 pb-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 mx-auto max-w-4xl">
            <Link href="/privacy" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all policies
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{policy.appName} <span className="text-blue-600">Privacy Policy</span></h1>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Last Updated: {policy.lastUpdated}
                </div>
                <div className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase">
                  Official Document
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-blue-800 dark:text-blue-300">
                <p className="text-lg leading-relaxed italic">
                  &ldquo;{policy.content}&rdquo;
                </p>
              </div>

              <div className="space-y-12">
                {policy.sections.map((section, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                        <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-500 font-bold text-sm">
                            {index + 1}
                        </div>
                        <h2 className="text-2xl font-bold mt-1">{section.title}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg ml-12">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Legal Footer */}
              <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-gray-400 text-sm leading-relaxed">
                <p>
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at kabuteymanasseh@gmail.com.
                </p>
                <p className="mt-4">
                   This document was generated for {policy.appName} and is subject to change at any time. We encourage users to check this page frequently for any updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Chatbot />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyDetailPage;
