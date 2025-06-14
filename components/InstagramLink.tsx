import { FaInstagram } from 'react-icons/fa'

export default function InstagramLink() {
    return (
        <div className="w-full h-8 flex justify-center">
            <a
                href="https://www.instagram.com/your_instagram" // ← 여기에 실제 계정 주소 입력
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-colors"
            >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm font-medium">@your_instagram</span>
            </a>
        </div>
    )
}
