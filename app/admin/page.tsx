'use client'
import { useState } from 'react'
import contentData from '@/data/content.json'

export default function AdminPage() {
    const [password, setPassword] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [data, setData] = useState(contentData)
    const [status, setStatus] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'admin1234') {
            setIsAuthorized(true)
        } else {
            alert('비밀번호가 틀렸습니다.')
        }
    }

    const handleChange = (path: string, value: string) => {
        const newData = JSON.parse(JSON.stringify(data))
        const keys = path.split('.')
        let lastObj = newData
        for (let i = 0; i < keys.length - 1; i++) {
            lastObj = lastObj[keys[i]]
        }
        lastObj[keys[keys.length - 1]] = value
        setData(newData)
    }

    const handleSave = () => {
        // 클라이언트 사이드에서는 파일 쓰기가 불가능하므로, 
        // 수정된 JSON을 복사할 수 있게 팝업으로 띄워주거나 콘솔에 출력합니다.
        // 로컬 환경이라면 나중에 API Route를 통해 자동 저장 로직을 추가할 수 있습니다.
        const jsonString = JSON.stringify(data, null, 2)
        console.log('Updated JSON:', jsonString)
        
        // 간단한 시각적 피드백
        const blob = new Blob([jsonString], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'content.json'
        a.click()
        
        setStatus('데이터가 준비되었습니다. 다운로드된 파일을 data/content.json에 덮어씌워주세요.')
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-100">
                <form onSubmit={handleLogin} className="bg-white p-8 shadow-xl rounded-sm space-y-4 w-full max-w-md">
                    <h1 className="text-2xl font-serif font-bold text-center text-stone-800">DDEUL-O-HAIR ADMIN</h1>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-stone-200 focus:outline-none focus:border-gold"
                    />
                    <button type="submit" className="w-full bg-stone-800 text-white py-2 tracking-widest hover:bg-gold transition-colors">
                        LOGIN
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-stone-50 p-6 md:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <header className="flex justify-between items-center border-b border-stone-200 pb-6">
                    <h1 className="text-3xl font-serif font-bold text-stone-800">Admin Dashboard</h1>
                    <button 
                        onClick={handleSave}
                        className="bg-gold text-white px-6 py-2 text-sm tracking-widest hover:bg-stone-800 transition-colors"
                    >
                        SAVE & DOWNLOAD
                    </button>
                </header>

                {status && (
                    <div className="bg-green-100 text-green-700 p-4 text-sm rounded-sm">
                        {status}
                    </div>
                )}

                <div className="space-y-8">
                    {/* 공지사항 */}
                    <section className="space-y-3">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">Notice Bar</h2>
                        <textarea 
                            value={data.notice}
                            onChange={(e) => handleChange('notice', e.target.value)}
                            className="w-full p-4 border border-stone-200 h-24 focus:outline-none focus:border-gold bg-white"
                        />
                    </section>

                    {/* 히어로 섹션 */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">Hero Section</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-stone-500">Title</label>
                                <input 
                                    value={data.hero.title}
                                    onChange={(e) => handleChange('hero.title', e.target.value)}
                                    className="w-full p-2 border border-stone-200 bg-white"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-stone-500">Sub Title</label>
                                <input 
                                    value={data.hero.subTitle}
                                    onChange={(e) => handleChange('hero.subTitle', e.target.value)}
                                    className="w-full p-2 border border-stone-200 bg-white"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-stone-500">Slogan</label>
                            <textarea 
                                value={data.hero.slogan}
                                onChange={(e) => handleChange('hero.slogan', e.target.value)}
                                className="w-full p-2 border border-stone-200 h-20 bg-white"
                            />
                        </div>
                    </section>

                    {/* 영업 정보 */}
                    <section className="space-y-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">Business Info</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-stone-500">Phone</label>
                                <input 
                                    value={data.business.phone}
                                    onChange={(e) => handleChange('business.phone', e.target.value)}
                                    className="w-full p-2 border border-stone-200 bg-white"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-stone-500">Email</label>
                                <input 
                                    value={data.business.email}
                                    onChange={(e) => handleChange('business.email', e.target.value)}
                                    className="w-full p-2 border border-stone-200 bg-white"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
