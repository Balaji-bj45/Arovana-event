import React, { useState } from "react";
import { FaExternalLinkAlt, FaPlay, FaYoutube, FaTimes } from "react-icons/fa";

const channelUrl = "https://www.youtube.com/@ArovanaIpass";

const videos = [
  {
    id: "ww_Ifi2eVOA",
    title: "Nationalism Explained | Democracy Festival 2026",
    published: "1 day ago",
    views: "6 views",
  },
  {
    id: "l-PJOAFFXgw",
    title: "Communism Explained | Democracy Festival 2026",
    published: "1 day ago",
    views: "16 views",
  },
  {
    id: "y6Ff4QDndjY",
    title: "Hindutva | Maanbumigu Vetpaalar Democracy Festival 2026",
    published: "2 days ago",
    views: "121 views",
  },
  {
    id: "DSYWHuyowt4",
    title: "Dravidian Movement Explained in Simple Terms",
    published: "2 days ago",
    views: "14 views",
  },
  {
    id: "AGQl4JV5FQI",
    title: "Hindutva | Maanbumigu Vetpaalar Democracy Festival 2026",
    published: "3 days ago",
    views: "213 views",
  },
  {
    id: "veP1A20zCYM",
    title: "Dravidian Movement Explained in Simple Terms",
    published: "4 days ago",
    views: "46 views",
  },
];

function Media() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <>
      {/* Video Popup */}
      {playingId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setPlayingId(null)}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlayingId(null)}
              className="mb-3 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D31A50]"
            >
              <FaTimes />
            </button>
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${playingId}?autoplay=1`}
                title="Now playing"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#111] px-4 py-14 sm:px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Top */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[#FFE900]">
                <FaYoutube className="text-xl" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Media
                </span>
              </div>
              <h2 className="text-2xl font-black uppercase text-white sm:text-3xl md:text-4xl">
                Latest Videos
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Democracy Festival explainers and debate highlights from Arovana
                IPASS.
              </p>
            </div>

            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#D31A50] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b61544]"
            >
              YouTube Channel
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          {/* Video Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] hover:border-[#FFE900]/30"
                onClick={() => setPlayingId(video.id)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D31A50] text-white">
                      <FaPlay className="ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-bold text-white group-hover:text-[#FFE900]">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex gap-3 text-xs text-white/40">
                    <span>{video.published}</span>
                    <span>•</span>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link */}
          <div className="mt-8 text-center">
            <a
              href={`${channelUrl}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white/60 hover:border-[#FFE900]/40 hover:text-[#FFE900]"
            >
              View All on YouTube
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;