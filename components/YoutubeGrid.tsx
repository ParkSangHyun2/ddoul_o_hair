export default function YoutubeGrid() {
    // 유튜브 영상 ID 리스트
    const videos = [
        'dQw4w9WgXcQ',
        '3JZ_D3ELwOQ',
        'M7lc1UVf-VE',
        // 필요에 따라 더 추가 가능
    ]

    return (
        <section className="max-w-6xl mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((id) => (
                    <div key={id} className="w-full aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            src={`https://www.youtube.com/embed/${id}`}
                            title={`YouTube video ${id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
