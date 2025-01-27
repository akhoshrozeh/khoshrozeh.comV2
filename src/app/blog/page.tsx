import Link from 'next/link'
export default function BlogHomePage() {

    const items = [{title: "Break out the cage", link: "/break-out-the-cage"}]
    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="text-7xl">Blog Posts</h1>
            <div className="text-3xl">Yeah.</div>
            

            {/* List */}
            <div className="overflow-hidden rounded-md shadow">
                <ul role="list" className="divide-y divide-gray-200">
                    {items.map((item) => (
                    <li key={item.title} className="px-6 py-4 text-3xl">
                        <Link href={"blog/" + item.link} className="hover:text-sky-500 hover:underline">{item.title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}