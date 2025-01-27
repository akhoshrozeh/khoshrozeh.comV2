import Link from 'next/link'

export default function Page() {
    const items = [{title: "JobTrendr", link: "https://jobtrendr.com", description: "Providing real-time and historical analytics on in-demand skills for tech jobs."},
        {title: "Devreadz", link: "https://devreadz.com", description: "Aggregating and indexing high quality tech articles."}
    ]

    return <div className="flex flex-col items-center h-screen">
        <h1 className="text-7xl mb-12 underline">Projects</h1>
        {/* List */}
        <div className="overflow-hidden rounded-md shadow text-center">
                <ul role="list" className="divide-y divide-gray-200">
                    {items.map((item) => (
                    <li key={item.title} className="px-6 py-4 text-3xl">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline">{item.title}</Link>
                        <p className="text-xl text-gray-300">{item.description}</p>
                    </li>
                    ))}
                </ul>
            </div>
    </div>
}