export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-[#ebdbb2]">
      <h1 className="text-4xl font-bold mb-6 text-[#fe8019]">Privacy Policy</h1>
      <p className="mb-4 text-[#a89984]">
        Effective Date: July 26, 2025
      </p>

      <p className="mb-6">
        At <strong>Nafs</strong>, we take your privacy seriously — not just because it’s legally required, but because it’s the right thing to do. This policy explains what data we collect, how we use it, and what we avoid collecting altogether.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">1. What We Collect</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li><strong>Email address</strong> – to create your account, sync progress, and send important updates (no spam).</li>
        <li><strong>Challenge data</strong> – including completed tasks, streaks, and level progression.</li>
        <li><strong>Saved reflections</strong> – personal notes or ayahs you save; stored securely and privately.</li>
        <li><strong>Basic device info</strong> – like browser type or crash logs to help us improve app performance (anonymous).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">2. What We Don’t Collect</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>No location tracking.</li>
        <li>No microphone or camera access.</li>
        <li>No third-party ad trackers.</li>
        <li>No selling or sharing your data</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">3. Who Can See Your Data?</h2>
      <p className="mb-6">
        Your data is yours. Nobody else can see your reflections, progress, or habits unless:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>You explicitly share something (e.g., public reflections – if we add that feature)</li>
        <li>You ask us to export or transfer it</li>
        <li>We’re legally required to (rare and unlikely, but disclosed here anyway)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">4. Data Storage</h2>
      <p className="mb-6">
        All user data is securely stored using industry best practices. If you delete your account, your data is permanently removed from our servers.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">5. Changes to This Policy</h2>
      <p className="mb-6">
        If we ever update this privacy policy, we’ll notify users directly inside the app or via email (if important). We don’t make silent updates that affect your data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#fabd2f]">6. Questions?</h2>
      <p>
        Email us at <a href="mailto:nafs.app.official@gmail.com" className="text-[#fe8019] underline">support@nafs.in</a> if you have any questions or concerns about your privacy.
      </p>
    </main>
  );
}
