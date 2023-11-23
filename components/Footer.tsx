import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">
        © {new Date().getFullYear()} Aurora Holding Name. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 space-x-4">
        <Link href="/privacy-policy">
          <span  className="text-gray-300 hover:text-white">Privacy Policy</span >
        </Link>
        <Link href="/terms-and-conditions">
          <span className="text-gray-300 hover:text-white">Terms and Conditions</span >
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
