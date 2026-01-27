import { privacyPolicies } from '@/lib/privacy-data';
import { Metadata } from 'next';
import PrivacyDetailClient from './PrivacyDetailClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = privacyPolicies.find(p => p.slug === slug);

  if (!policy) {
    return {
      title: 'Policy Not Found',
    };
  }

  return {
    title: `${policy.appName} Privacy Policy | Manasseh Kabutey`,
    description: policy.description,
  };
}

const PrivacyDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const policy = privacyPolicies.find(p => p.slug === slug);

  if (!policy) {
    notFound();
  }

  return <PrivacyDetailClient slug={slug} />;
};

export default PrivacyDetailPage;
