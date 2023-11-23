const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">
        © {new Date().getFullYear()} Aurora Holding Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
