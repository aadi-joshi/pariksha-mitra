const SocialLinks = () => (
    <div className="flex space-x-4 mt-8">
        <a href="mailto:toaadijoshi@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
        >Contact Us</a>


        <div className="flex space-x-4">
            <a
                href="https://instagram.com" // link to be opened
                target="_blank" // to open the link in a diff tab
                rel="noopener noreferrer" // noopener to disallow dom manipulation, norefferer to keep our page anonymous
                className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/instagram.png" width="25"></img>
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/youtube.png" width="25"></img>
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all"
            ><img src="../src/assets/icons/linkedin.png" width="25"></img>
            </a>
            <a href="mailto:toaadijoshi@gmail.com" className="p-3 bg-purple-800 rounded-full hover:bg-pink-600 transition-all">
                <img src="../src/assets/icons/mail.png" width="25"></img></a>
        </div></div>

);
export default SocialLinks;