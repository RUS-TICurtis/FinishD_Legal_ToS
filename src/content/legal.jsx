export const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "April 28, 2026",
    atAGlance: [
      "We collect account info, content you create, and usage data.",
      "We use AI tools for automated content moderation to ensure safety.",
      "You have the right to access and delete your data at any time."
    ],
    sections: [
      {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, information automatically collected when you use our Service, and information from third parties.

A. Information You Provide to Us
• Account Information: When you create an account, we collect your email address, username, first name, last name, profile picture, and bio.
• Authentication Data: We support sign-in via third-party providers (Apple, Google) and email/password. We do not store your passwords for third-party providers.
• User-Generated Content: We collect the content you create, upload, or send, including chat messages, community posts, comments, short videos, GIFs, and images.
• Library & Preferences: We store your tracked movies and TV shows (e.g., "watching," "watchlist," "finished," "favorites").

B. Information Automatically Collected
• Analytics & Usage Data: We log how you interact with the Service, such as the screens you view, buttons you click, watch time for videos, and your scroll depth (e.g., via analytics_events).
• Device & Connection Information: We collect push notification tokens (Firebase Cloud Messaging/APNs) to send you updates.
• Moderation Data: If you report content or users, or if your content is reported, we collect the details of the report, the status of the review, and any subsequent enforcement actions.

C. Inferred & Generated Data
• Recommendations: Based on your viewing history and social graph, we generate personalized recommendations for movies, TV shows, and creator content feeds.
• Creator Stats: For users uploading videos, we generate aggregated statistics (e.g., daily views, watch time, new followers).`
      },
      {
        title: "2. How We Use Information",
        content: `We use the collected information for the following purposes:
• To Provide the Service: Authenticating users, storing your watch lists, displaying your profile, and facilitating chat and community interactions.
• To Personalize Your Experience: Powering the algorithmic recommendations for your personalized feed and discovery sections.
• To Improve Our Service: Analyzing usage data (e.g., tracking screen time) to understand how the app is used and to fix bugs.
• For Safety and Security: Moderating content (using both human review and automated AI moderation tools) to enforce our Terms of Use, investigating reports, and preventing spam or abusive behavior.
• To Communicate with You: Sending push notifications regarding chat messages, community updates, or moderation warnings.`
      },
      {
        title: "3. How We Share Information",
        content: `We do not sell your personal data. We only share information in the following circumstances:
• With Other Users: Your public profile (username, bio, profile picture) and any public content you post (community posts, creator videos, comments) are visible to other users.
• With Service Providers: We share data with trusted third-party vendors who assist us in operating our Service (e.g., Supabase for database hosting, Firebase for notifications, OpenAI for content moderation).
• For Legal Reasons: We may disclose your information if required to do so by law, to enforce our Terms of Use, or to protect the rights, property, or safety of Finishd, our users, or the public.`
      },
      {
        title: "4. Third-Party Services",
        content: `The Service integrates with third-party APIs to provide rich entertainment metadata and video playback. These services may collect their own data based on your interactions:
• TMDB & OMDb: Used to fetch movie/TV show metadata, cast information, and ratings.
• YouTube: Used for trailer playback and video extraction. By using these features, you are subject to the YouTube Terms of Service and Google Privacy Policy.
• Streaming Providers: We provide deep links to third-party streaming platforms (e.g., Netflix, Hulu, Watchmode). Clicking these links takes you out of Finishd and into those third-party environments. We are not responsible for their privacy practices.`
      },
      {
        title: "5. Data Security",
        content: `We implement reasonable security measures to protect your personal information, including utilizing secure backend infrastructure (Supabase) and Row Level Security (RLS) policies to ensure that private data (like chat messages and watchlists) is only accessible to authorized users.`
      },
      {
        title: "6. Data Retention",
        content: `We retain your personal information for as long as your account is active or as needed to provide you the Service.
• User Content: Your posts, messages, and library data are retained until you delete them or your account.
• Analytics: Analytics events may be aggregated or anonymized over time.
• Moderation Logs: Records of banned accounts and blocked content are retained indefinitely for security and safety purposes.`
      },
      {
        title: "7. User Rights & Controls",
        content: `Depending on your jurisdiction (such as under GDPR or CCPA), you have certain rights regarding your data:
• Access & Correction: You can view and edit your profile information and library data directly within the app.
• Deletion: You can delete your account at any time using the "Delete Account" option in the settings menu. Deleting your account will permanently remove your profile and personal data from active databases (via the delete-account edge function).
• Notifications: You can opt out of push notifications via your device settings.
• Note on Export: Currently, Finishd does not feature an automated "Export Data" button within the app. To request a copy of your data, please contact us.`
      },
      {
        title: "8. Children’s Privacy",
        content: `Finishd is not intended for children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children under these ages. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information and terminate the account.`
      },
      {
        title: "9. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through the Service or by other means so you have the opportunity to review the changes before they become effective.`
      },
      {
        title: "10. Contact Information",
        content: `If you have questions or concerns about this Privacy Policy, please contact us at:
Email: support@finishd.app`
      }
    ]
  },
  terms: {
    title: "Terms of Use",
    lastUpdated: "April 28, 2026",
    introduction: `Welcome to Finishd! These Terms of Use ("Terms") govern your access to and use of the Finishd mobile application and related services (collectively, the "Service"). By creating an account or otherwise using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.`,
    sections: [
      {
        title: "1. Introduction & Acceptance of Terms",
        content: `Finishd is a social-first entertainment platform that allows users to discover, track, and discuss movies and TV shows, post content, join communities, and interact with a content feed. These Terms constitute a legally binding agreement between you and Finishd.`
      },
      {
        title: "2. Eligibility",
        content: `You must be at least 13 years old to use the Service. If you are under the age of majority in your jurisdiction, you must have your parent or legal guardian's permission to use the Service. By using the Service, you represent and warrant that you meet these eligibility requirements.`
      },
      {
        title: "3. User Accounts & Responsibilities",
        content: `To access certain features, you must register for an account. You may register using an email address, or third-party single sign-on providers such as Apple or Google.
• Account Security: You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
• Accurate Information: You agree to provide accurate and complete information when creating your account.`
      },
      {
        title: "4. Acceptable Use Policy",
        content: `You agree not to use the Service to:
• Violate any applicable law, contract, intellectual property, or other third-party right.
• Engage in harassing, threatening, intimidating, predatory, or stalking conduct.
• Use or attempt to use another user's account without authorization.
• Spam, solicit money from, or defraud any users.
• Post or share content that contains hate speech, violence, adult content, or spam.
• Attempt to circumvent any content-filtering techniques, moderation mechanisms, or security features.`
      },
      {
        title: "5. User-Generated Content",
        content: `Finishd allows you to post content, including text, images, GIFs, short videos, comments, and community posts ("User Content").
• Ownership: You retain ownership of your User Content.
• License Granted to Finishd: By posting User Content, you grant Finishd a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, store, display, reproduce, modify, create derivative works, perform, and distribute your User Content on the Service for the purposes of operating, developing, providing, and using the Service.
• Content Restrictions: You are solely responsible for the User Content you post. Finishd does not endorse any User Content and expressly disclaims any liability associated with it.`
      },
      {
        title: "6. Community Guidelines & Moderation",
        content: `Finishd is committed to maintaining a safe community. We employ automated systems and human review to moderate content.
• Reporting: You can report content (including creator videos, chat messages, and community posts) or users that you believe violate these Terms or our Community Guidelines using the in-app reporting tools.
• Enforcement Actions: We reserve the right to review, remove, or suppress User Content at our sole discretion. We may take enforcement actions against your account, including issuing warnings, temporary suspensions, or permanent bans, for violations of these Terms.
• Appeals: If your account is suspended or banned, you may have the opportunity to submit an appeal through the Service.`
      },
      {
        title: "7. Intellectual Property",
        content: `• Finishd Content: The Service and its original content (excluding User Content), features, and functionality are owned by Finishd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
• Third-Party Content: The Service utilizes third-party metadata, images, trailers, and API integrations (such as TMDB). This content remains the intellectual property of its respective owners.`
      },
      {
        title: "8. Third-Party Services & Links",
        content: `The Service may contain links to third-party websites, applications, and streaming platforms (e.g., Netflix, Hulu, YouTube) or display content provided by third parties.
• Streaming Platforms Disclaimer: Finishd provides deep links and availability data for third-party streaming services. We are not responsible for the availability, accuracy, or content of these third-party services. Your use of third-party platforms is subject to their respective terms of use and privacy policies.
• YouTube Integration: The Service uses YouTube API Services to display video content. By using these features, you also agree to be bound by the YouTube Terms of Service.`
      },
      {
        title: "9. Privacy & Data Usage",
        content: `Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and share your personal information.`
      },
      {
        title: "10. Notifications & Communications",
        content: `By creating an account, you consent to receive electronic communications from Finishd, including push notifications regarding account status, moderation actions, and service updates. You may opt out of certain notifications through your device settings.`
      },
      {
        title: "11. Termination & Account Deletion",
        content: `• Termination by You: You may delete your account at any time through the app settings.
• Termination by Finishd: We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.`
      },
      {
        title: "12. Disclaimers",
        content: `YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. FINISHD EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
Finishd does not guarantee the accuracy of social recommendations, trending algorithms, or third-party metadata.`
      },
      {
        title: "13. Limitation of Liability",
        content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FINISHD BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.`
      },
      {
        title: "14. Indemnification",
        content: `You agree to defend, indemnify, and hold harmless Finishd and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms; or c) User Content posted on the Service.`
      },
      {
        title: "15. Changes to Terms",
        content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of significant changes through the Service. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.`
      },
      {
        title: "16. Governing Law",
        content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Finishd operates, without regard to its conflict of law provisions.`
      },
      {
        title: "17. Contact Information",
        content: `If you have any questions about these Terms, please contact us at support@finishd.app.`
      }
    ]
  },
  guidelines: {
    title: "Community Guidelines",
    subtitle: "Ensuring a supportive environment for every finisher.",
    encouraged: [
      { title: "Goal-Setting", text: "Share your journey and milestones openly." },
      { title: "Mutual Support", text: "Celebrate the \"Finished\" status of your peers." },
      { title: "Authenticity", text: "Share real progress, including the struggles along the way." }
    ],
    prohibited: [
      { title: "Harassment & Bullying", text: "We have zero tolerance for targeted abuse." },
      { title: "Hate Speech", text: "Any content attacking individuals based on race, religion, or identity." },
      { title: "Misinformation", text: "Sharing fake achievements or misleading health/productivity advice." },
      { title: "Illegal Acts", text: "Promoting or sharing any unlawful activities." }
    ]
  }
}
