import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4 text-red-500">Oh No!</h2>
                <p className="text-xl mb-6">
                    <span className="font-bold text-red-600">404 - Sex Not Found!</span>
                    <br />
                    Looks like you’re lost in a web of desire, but this page is MIA.
                </p>
                <p className="text-lg mb-8">
                    Maybe it’s time to redirect your passion somewhere else?
                </p>
                <Link
                    to="/" // or href="/" if using Next.js
                    className="btn bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
                >
                    Get Back to Safety
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
