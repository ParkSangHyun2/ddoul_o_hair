'use client'

import { DayPicker } from 'react-day-picker'
import { ko } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'

type Props = {
    closedDates: Date[] // ISO 형식 'YYYY-MM-DD' 배열
}

export default function KoreanSimpleHolidayCalendar({ closedDates }: Props) {
    // 일요일인지 확인하는 함수
    const isSunday = (date: Date) => date.getDay() === 0;

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold text-center mb-4 text-stone-800">휴무일 안내</h2>

            <div className="rounded-lg shadow-md border border-gray-200 p-4 bg-white">
                <DayPicker
                    locale={ko}
                    showOutsideDays
                    pagedNavigation
                    modifiers={{ 
                        closed: closedDates,
                        sunday: isSunday
                    }}
                    modifiersClassNames={{ 
                        closed: 'bg-stone-100 text-stone-400 font-semibold',
                        sunday: 'text-red-500 font-bold'
                    }}
                    styles={{
                        caption: { textAlign: 'center', marginBottom: '1rem' },
                        head_cell: { textTransform: 'none', fontWeight: '500', color: '#555' },
                        cell: { padding: '0.5rem', textAlign: 'center' },
                    }}
                />
            </div>
            <p className="text-xs text-stone-400 text-center mt-4">* 매주 일요일은 휴무입니다.</p>
        </div>
    )
}
