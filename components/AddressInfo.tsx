import { FaMapMarkerAlt, FaPhoneAlt, FaStore } from 'react-icons/fa'

export default function AddressInfo() {
    return (
        <div className="text-sm text-gray-700 leading-relaxed space-y-2 border-t-10 border-t-[#BFA45AFF]">
            <div className="flex items-center gap-2">
                <FaStore className="text-gray-500 w-4 h-4" />
                <span className="font-semibold text-base">뜰오헤어(안중점)</span>
            </div>
            <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500 w-4 h-4" />
                <span>경기도 평택시 안중읍 송담6길 3</span>
            </div>
            <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-500 w-4 h-4" />
                <a href="tel:01011110000" className="underline">010-1111-0000</a>
            </div>
        </div>
    )
}
