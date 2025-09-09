export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-auto shadow-inner">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
}
