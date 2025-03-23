export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">📘 Crammer</h1>
      <p className="text-xl max-w-lg mb-8">
        Upload your notes. Instantly get summaries, flashcards, and quizzes. Study smarter — not harder.
      </p>
      <a
        href="/upload"
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Try It Free
      </a>
      <p className="text-sm mt-4 opacity-80">No account required · Totally free to start</p>
    </main>
  );
}
