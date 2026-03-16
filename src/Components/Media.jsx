import React from "react";
import { FaExternalLinkAlt, FaPlay, FaYoutube } from "react-icons/fa";

const channelUrl = "https://www.youtube.com/@ArovanaIpass";
const uploadsPlaylistId = "UUjFO3pVtSPGwI-kugjQ81yQ";

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
    title:
      "Hindutva | Maanbumigu Vetpaalar Democracy Festival 2026",
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
    title:
      "Hindutva | Maanbumigu Vetpaalar Democracy Festival 2026",
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
  return (
    <section className="bg-[#111111] px-4 py-14 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FFE900]/40 bg-[#FFE900]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#FFE900]">
              <FaYoutube />
              Media
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
              Watch Arovana on YouTube
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Explore the latest uploads from Arovana IPASS, including Democracy
              Festival explainers and debate highlights.
            </p>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D31A50] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b61544]"
          >
            Visit Channel
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1a1a] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="border-b border-white/10 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFE900]">
                All Uploads
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase text-white">
                Channel Playlist
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Play through the full Arovana upload stream directly from this
                section.
              </p>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/videoseries?list=${uploadsPlaylistId}`}
                title="Arovana IPASS uploads playlist"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#FFE900] p-6 text-black shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#FFE900]">
                <FaPlay />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
                  Channel Handle
                </p>
                <h3 className="text-xl font-black uppercase">
                  @ArovanaIpass
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-black px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Videos Added
                </p>
                <p className="mt-2 text-4xl font-black">{videos.length}</p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/40 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.25em] text-black/60">
                  Content Focus
                </p>
                <p className="mt-2 text-base font-bold leading-7">
                  Politics, ideology explainers, debate snippets, and event
                  media from the Democracy Festival.
                </p>
              </div>
            </div>

            <a
              href={`${channelUrl}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-black hover:text-[#FFE900]"
            >
              Open Video Library
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-[26px] border border-white/10 bg-[#1b1b1b] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
                  <span className="rounded-full bg-[#FFE900] px-3 py-1 text-black">
                    {video.published}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-white/70">
                    {video.views}
                  </span>
                </div>

                <h3 className="min-h-[56px] text-lg font-black leading-7 text-white">
                  {video.title}
                </h3>

                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FFE900] transition hover:text-white"
                >
                  Watch on YouTube
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media;
