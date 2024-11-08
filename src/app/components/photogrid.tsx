/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
export default function PhotoGrid() {
  const projects = [
    {
      image: "/images/kay/sun.jpg",
      name: "Kalaya",
    },
  ];

  return (
    <main className="">
      <div className="flex justify-between items-center pb-5">
      </div>
      <ul className="grid grid-cols-1 gap-3">
        {projects.map(project => (

          <div className="pb-5 text-center">
            <a className="flex justify-center">
              <div className="relative">
                <img src={project.image} className="rounded-md w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="tracking-tighter text-white sm:text-5xl md:text-9xl font-light">{project.name}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </ul>
    </main>
  );
}
