"force-static"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen">
      <h1 className="text-white text-7xl">Anthony Khoshrozeh</h1>
      <p className="text-white text-3xl">Software Engineer & Entrepreneur</p>
      <p className="text-white text-3xl">Los Angeles, CA</p>
      
      {/* Intro */}
      <div className="text-white text-2xl mt-8">
        <p>
            I am a software engineer and entrepreneur. I currently run <a href="https://www.devreadz.com" className="text-blue-500 underline ">Devreadz</a>, a platform that helps developers find and read articles, and <a href="https://jobtrendr.com" className="text-blue-500 underline ">Jobtrendr</a>, a app that provides real-time and historical analytics on the job market. 
        </p>    
        
      </div>
    </div>
  );
}
