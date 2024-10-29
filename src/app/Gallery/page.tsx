/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */

export default function ProjectGrid() {
  const photos = [
    {
      image: "/images/soccer.jpg",
    },
    {
      image: "/images/bestill2.jpg",
    },
    {
      image: "/images/gta.jpg",
    },
    {
      image: "/images/bri.jpg",
    },
    {
      image: "/images/bestill.jpg",
    },
    {
      image: "/images/sportcenter.jpg",
    },
    {
      image: "/images/demoi.jpg",
    },
    {
      image: "/images/shoes.jpg",
    },
    {
      image: "/images/joshua.jpg",
    },
    {
      image: "/images/lay.jpg",
    },
    {
      image: "/images/sarah.jpg",
    },
    {
      image: "/images/will.jpg",
    },
    {
      image: "/images/jekhi.jpg",
    },
    {
      image: "/images/back.jpg",
    },
    {
      image: "/images/lorena.jpg",
    },
    {
      image: "/images/nicole.jpg",
    },
    {
      image: "/images/hug.jpg",
    },
    {
      image: "/images/tree.jpg",
    },
    {
      image: "/images/laylay.jpg",
    }
  ];

  return (
<main className="py-8 px-5">
  <h1 className="text-black/30 text-xs tracking-tighter font-normal pb-5 text-center">SHOT ON SONY A7SII</h1>
  <ul className="columns-1 md:columns-3 lg:columns-4 xl:columns-6 gap-5 space-y-5">
    {photos.map((photo, index) => (
      <li key={index} className="break-inside-avoid">
        <img src={photo.image} alt="image" className="rounded-lg w-full" />
      </li>
    ))}
  </ul>
</main>
  );
}
