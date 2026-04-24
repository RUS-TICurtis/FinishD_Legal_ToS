# FinishD - Legal Document Generation Brief

This document provides a comprehensive technical and functional overview of the **FinishD** application. It is designed to serve as the foundational context for generating accurate legal documents, including a Privacy Policy, Terms of Service (ToS), User Agreement, and Community Guidelines (e.g., using platforms like Termly.io).

## 1. General Application Information
*   **App Name:** FinishD (also referred to as Superpod/Finishd)
*   **Platform Support:** Cross-platform (iOS, Android, Web, Desktop) via Flutter.
*   **Core Purpose:** A social networking and tracking platform for movies and TV shows. It allows users to track their watch history, discover new content via a personalized video feed (TikTok-style vertical scrolling), connect with friends, and chat in real-time.

## 2. Features & Functionality
The app includes the following core functionalities:
*   **Account Management:** Sign up, log in, profile creation, and management.
*   **Content Tracking:** Users can add movies/shows to specific lists (Watchlist, Currently Watching, Finished, Favorites).
*   **Social Networking:** Users can follow/unfollow each other, view friends' activity, and recommend content to friends.
*   **Real-Time Chat:** 1-on-1 messaging that supports both text and media (image/video) attachments.
*   **Content Discovery:** A personalized vertical video feed featuring movie/show trailers and clips.
*   **Notifications:** Push notifications for trending content, new episodes, and chat messages.

## 3. Data Collection & Privacy (For Privacy Policy)
FinishD collects and processes various types of user data to function properly.

### A. Personal Information Collected
*   **Account Data:** Email addresses, hashed passwords, and authentication tokens via third-party providers (Google Sign-In, Apple Sign-In).
*   **Profile Data:** Usernames, profile pictures (avatars), and personal bios.
*   **User-Generated Content (UGC):** Chat messages (text and media), recommendations sent to friends, custom lists, and interactions (likes, shares, comments).
*   **Usage & Analytics Data:** App usage metrics, screen view duration, and interaction logs.
*   **Device Information:** Device tokens for push notifications (FCM tokens), OS type, and app version.

### B. Third-Party Services & Data Processors
The app relies on several third-party services that may process user data:
*   **Supabase:** Primary backend infrastructure (Database, Authentication, Storage, Edge Functions).
*   **Firebase:** Used for Analytics, Crashlytics, and Cloud Messaging (Push Notifications).
*   **Mux:** Video streaming and user video upload infrastructure.
*   **TMDB API:** Fetches movie and TV show metadata (posters, synopses, cast info).
*   **OMDb API:** Fetches movie ratings (IMDb, Rotten Tomatoes, Metacritic).
*   **YouTube API / YouTube Explode:** Extracts and plays video content for the personalized feed and trailers.

### C. Data Storage
*   Data is securely stored in cloud databases (Supabase/PostgreSQL, Firebase).
*   Local device caching is utilized for offline access and performance (using ObjectBox, Hive, SQLite, Shared Preferences).

## 4. User-Generated Content (UGC) & Moderation (For Terms of Service & Guidelines)
Since FinishD includes social and communication features, it must enforce strict UGC policies.
*   **Content Uploads:** Users can upload profile pictures and send media files in private chats.
*   **Moderation:** The app utilizes automated moderation scripts (e.g., Supabase edge functions like `moderate-message`) to scan and filter inappropriate content or abusive language.
*   **Acceptable Use Policy:** Users are prohibited from sharing illegal, abusive, harassing, or sexually explicit content. Spamming and unauthorized advertising are also restricted.
*   **Reporting:** The app should include mechanisms for users to report abusive behavior or inappropriate content, which administrators can review.

## 5. Intellectual Property & Copyright (For Terms of Service)
*   **App Content:** FinishD aggregates and displays movie/TV metadata, posters, and trailers via third-party APIs (TMDB, OMDb, YouTube). This content remains the intellectual property of its respective owners. The ToS must explicitly state that FinishD does not claim ownership of this third-party media.
*   **DMCA Policy:** As users may potentially upload media or share links, the app must include a standard DMCA takedown procedure for copyright infringement claims.

## 6. Monetization & Payments
*   Currently, the application does not appear to process direct payments, subscriptions, or in-app purchases. If future monetization (e.g., premium tiers) is planned, the ToS will need to be updated to include billing, refund, and subscription cancellation policies.

## Instructions for Legal Agent (Termly.io Context)
When inputting this data into a legal generator like Termly.io, please ensure:
1.  **CCPA/GDPR Compliance:** Enable clauses for users to request data deletion, access their data, and opt-out of analytics tracking.
2.  **Age Restrictions:** Specify a minimum age requirement (typically 13 in the US for COPPA compliance, or 16 in the EU for GDPR) due to the social networking and chat features.
3.  **Liability Limitations:** Include standard "as-is" clauses to protect the developers from liability regarding user disputes in chats or inaccuracies in aggregated movie data.
