export default function SectionTitle(props:{title: string}) {
    return (
        <div className="flex w-full bg-gold justify-center items-center py-[5px] mt-[20px] mb-[10px]">
            <h2 className="h-fit text-xl font-bold">{props.title}</h2>
        </div>
    )
}