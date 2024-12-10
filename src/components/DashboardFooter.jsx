const DashboardFooter = () => (
    <footer className="bg-gray-900 p-6 mt-8 text-center">
        <div className="mb-4">
            <a href="https://youtube.com"><button className="mx-2 text-white hover:text-purple-400">YouTube</button></a>
            <a href="https://instagram.com"><button className="mx-2 text-white hover:text-purple-400">Instagram</button></a>
            <a href="https://linkedin.com"><button className="mx-2 text-white hover:text-purple-400">LinkedIn</button></a>
        </div>
        <p className="text-sm text-gray-400">Privacy Policy | © {new Date().getFullYear()} Pariksha Mitra</p>
    </footer>
);

export default DashboardFooter;