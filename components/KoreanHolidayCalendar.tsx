'use client'

import { DayPicker } from 'react-day-picker'
import { ko } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'

type Props = {
    closedDates: string[] // ISO 형식 'YYYY-MM-DD' 배열
}

export default function KoreanSimpleHolidayCalendar({ closedDates }: Props) {
    const isClosed = (date: Date) => {
        const iso = date.toISOString().split('T')[0]
        return closedDates.includes(iso)
    }

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold text-center mb-4">휴무일 안내</h2>

            <div className="rounded-lg shadow-md border border-gray-200 p-4 bg-white">
                <DayPicker
                    locale={ko}
                    showOutsideDays
                    fromYear={2025}
                    toYear={2030}
                    pagedNavigation
                    modifiers={{ closed: isClosed }}
                    modifiersClassNames={{ closed: 'bg-red-100 text-red-700 font-semibold' }}
                    styles={{
                        caption: { textAlign: 'center', marginBottom: '1rem' },
                        head_cell: { textTransform: 'none', fontWeight: '500', color: '#555' },
                        cell: { padding: '0.5rem', textAlign: 'center' },
                    }}
                />
            </div>
        </div>
    )
}
