export default function Contact() {
  return (
    <section className="py-20 bg-dark text-text">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-8 text-center">Contact Me</h2>
        <form className="bg-dark-light p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}