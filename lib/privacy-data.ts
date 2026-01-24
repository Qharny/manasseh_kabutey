export interface PrivacyPolicy {
  slug: string;
  appName: string;
  lastUpdated: string;
  description: string;
  content: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export const privacyPolicies: PrivacyPolicy[] = [
  {
    slug: 'facepassx',
    appName: 'FacePassX',
    lastUpdated: 'January 24, 2026',
    description: 'Privacy Policy for FacePassX Facial Recognition Attendance System.',
    content: 'FacePassX is committed to protecting your privacy and security. This policy outlines how we handle facial data and user information.',
    sections: [
      {
        title: 'Data Collection',
        content: 'We collect facial geometry data solely for the purpose of attendance tracking. This data is encrypted and stored securely.'
      },
      {
        title: 'Data Usage',
        content: 'Facial data is used only to verify identity during attendance check-ins. We do not use this data for marketing or share it with third parties.'
      },
      {
        title: 'Permissions',
        content: 'The app requires Camera access to capture facial images and Internet access to sync data with the secure server.'
      },
      {
        title: 'User Rights',
        content: 'Users can request the deletion of their facial data at any time through their institutional administrator.'
      }
    ]
  },
  {
    slug: 'trackermate',
    appName: 'TrackerMate',
    lastUpdated: 'January 24, 2026',
    description: 'Privacy Policy for TrackerMate Location Tracking Application.',
    content: 'TrackerMate helps you find missing phones. Your location data is your business, and we treat it with the highest confidentiality.',
    sections: [
      {
        title: 'Location Data',
        content: 'We collect real-time location data only when the "Track" feature is active. This data is protected by your account credentials.'
      },
      {
        title: 'Data Sharing',
        content: 'We do not share your location data with any third parties or allow it to be used for advertising.'
      },
      {
        title: 'Permissions',
        content: 'Requires Background Location access (to find the phone even when the app is closed) and SMS permissions for emergency alerts.'
      },
      {
        title: 'Data Retention',
        content: 'Location history is stored for 30 days and then automatically deleted from our servers.'
      }
    ]
  },
  {
    slug: 'aeroguard',
    appName: 'AeroGuard',
    lastUpdated: 'January 24, 2026',
    description: 'Privacy Policy for AeroGuard IoT Smoke Detector System.',
    content: 'AeroGuard monitors your environment for safety. We prioritize local processing and minimal data collection.',
    sections: [
      {
        title: 'IoT Data',
        content: 'Sensor data (smoke levels, temperature) is sent to our servers for real-time alerting. This data is anonymous and not linked to personal identity.'
      },
      {
        title: 'Personal Information',
        content: 'We only collect your email address for sending critical safety alerts.'
      },
      {
        title: 'Permissions',
        content: 'Requires Bluetooth and WiFi permissions to connect to IoT devices, and Notification permissions for alerts.'
      },
      {
        title: 'Third Party Services',
        content: 'We use Firebase for real-time data sync and Cloud Messaging. Information is handled according to Google Privacy Policies.'
      }
    ]
  }
];
