const ProjectSection = () => {
  return (
    <section>
      <p className="text-2xl sm:text-3xl text-gray-200 font-semibold">
        Pinned Projects
      </p>
      <div className="py-5">
        {[...new Array(1)].map((_, i) => (
          <div key={i}>
            <div className="border-b border-gray-600" />
            <div className="py-7 flex items-start flex-col-reverse md:flex-row">
              <div className="pr-4">
                <p className="text-xl text-gray-400 font-semibold py-2">
                  NxDraw
                </p>
                <p className="text-3xl text-gray-200 pb-5">
                  An online whiteboard application built with Next.js.
                </p>
                <p>skills</p>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://github.com/subrat611/NxDraw"
                    target="_blank"
                    className="bg-transparent border border-gray-700 p-2 text-gray-200 rounded-md hover:bg-gray-600/30"
                    aria-label="link to project repository"
                  >
                    View project
                  </a>
                  <a
                    href="https://nxdraw.vercel.app/"
                    className="bg-transparent border border-gray-700 p-2 text-gray-200 rounded-md hover:bg-gray-600/30"
                    aria-label="link to live site"
                  >
                    Live site
                  </a>
                </div>
              </div>

              {/* video player */}
              <video
                className="w-[360px] h-full rounded-lg bg-transparent"
                src="https://res.cloudinary.com/dr1dgktil/video/upload/f_auto:video,q_auto/v1/portfolio/q5uy8i7csf4vsenudktg"
                controls
                loop
                autoPlay={false}
                playsInline
              ></video>
            </div>
            {i === 1 && <div className="border-b border-gray-600" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
