export default function Footer() {
  return (
    <footer className="bg-dark-light text-text py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p>
          Built with <a href="https://reactjs.org/" className="text-blue-400 hover:underline">React</a> and <a href="https://tailwindcss.com/" className="text-blue-400 hover:underline">TailwindCSS</a>.
        </p>
      </div>
    </footer>
  );
}