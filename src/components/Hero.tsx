export default function Hero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-center">
            <div className="relative max-w-xl aspect-[9/16] bg-gradient-to-b from-gray-800 to-black rounded-lg lg:rounded-[32px] overflow-hidden w-full h-full">
                <div className="z-20 absolute top-12 x-auto w-full text-center">
                    <h1 className="text-4xl font-bold text-black">Finn Elliott</h1>
                    <h2 className="text-2xl font-medium text-gray-600 capitalize mt-2">Full-stack web developer</h2>
                </div>
                <div className="z-10 absolute w-full h-full top-0 left-0 object-cover">
                    <div style={{position: "relative", paddingTop: "177.777777778%" }} ><iframe src="https://customer-v2h1xfqvigafdf4t.cloudflarestream.com/70b0a69f92eccb460cfb97cf705c84b5/iframe?poster=https%3A%2F%2Fcustomer-v2h1xfqvigafdf4t.cloudflarestream.com%2F70b0a69f92eccb460cfb97cf705c84b5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600" style={{border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%"}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true}></iframe></div>
                </div>
            </div>
        </section>
    )
}