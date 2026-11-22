import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  const tracks = [
    {
      tag: 'Track 01',
      title: 'Applied Software & Web',
      desc: 'Build deployable full-stack apps with live code reviews instead of passive video marathons.',
      accent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      tag: 'Track 02',
      title: 'Data & Practical AI',
      desc: 'Move from raw datasets to working models and automated workflows in structured sprints.',
      accent: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      tag: 'Track 03',
      title: 'Product & Systems Design',
      desc: 'Learn interface clarity, user research, and real-world engineering handoff.',
      accent: 'bg-sky-50 text-sky-700 border-sky-200',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900">
      {/* HERO SECTION: Asymmetric Editorial Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              REACHEDU · OPEN LEARNING PLATFORM
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
              Learn by shipping{' '}
              <span className="underline decoration-amber-400 decoration-4 underline-offset-4">
                real work
              </span>
              , not just watching lectures.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              ReachEdu is a focused EdTech platform built for curious learners. Follow structured
              skill tracks, test ideas in interactive labs, and get direct feedback from working
              mentors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/courses"
                className="btn rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border-none px-7 font-semibold normal-case shadow-sm"
              >
                Explore Tracks
              </Link>
              <Link
                to="/labs"
                className="btn btn-ghost rounded-full border border-slate-300 hover:bg-slate-100 text-slate-800 px-6 font-medium normal-case"
              >
                Try a Live Lab →
              </Link>
            </div>
          </div>

          {/* Right Interactive Snapshot Card (Replaces generic hero stock photos) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Current Cohort
                  </p>
                  <p className="font-bold text-slate-900 mt-0.5">Full-Stack Foundations</p>
                </div>
                <span className="badge bg-amber-100 text-amber-900 border-none font-semibold">
                  Week 04
                </span>
              </div>

              {/* Mini Milestone Checklist */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                  <span className="font-medium text-slate-700">01. Concept Micro-Brief</span>
                  <span className="text-emerald-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <span className="font-medium text-slate-900">02. Hands-On Sandbox Build</span>
                  <span className="text-emerald-700 font-semibold">In Progress</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                  <span className="font-medium text-slate-500">03. Mentor Code Review</span>
                  <span className="text-slate-400 font-medium">Up Next</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <span>18,400+ active learners</span>
                <span className="font-semibold text-slate-800">4.9 ★ learner rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO LEARNING TRACKS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Focused paths, zero fluff
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Every ReachEdu track pairs short lessons with a verifiable project.
            </p>
          </div>
          <Link to="/courses" className="text-sm font-semibold text-emerald-700 hover:underline">
            View full curriculum →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tracks.map((track) => (
            <div
              key={track.tag}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${track.accent}`}
                >
                  {track.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{track.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{track.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Self-paced + Mentor Q&A</span>
                <Link
                  to="/courses"
                  className="text-xs font-bold text-slate-900 hover:text-emerald-700"
                >
                  Start →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;