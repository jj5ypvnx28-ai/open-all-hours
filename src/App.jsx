import { useEffect, useState } from "react";

// 🔥 Replace this with your uploaded logo file (put logo.png in /public folder)
const logo = "/logo.png";

// 🔗 Put your real Discord invite link here
const DISCORD_INVITE = "https://discord.gg/fyPqG2Pdcf";
const DISCORD_CODE = "fyPqG2Pdcf";

const SHEET_ID = "1ICCE9hCK2gPMzqcni412xALWIawcm65ujxNAYNqRm0o";
const SHEET_TABS = [
  { sheet: "Prem", name: "Premier Division" },
  { sheet: "D1", name: "Division 1" },
  { sheet: "D2", name: "Division 2" },
  { sheet: "D3", name: "Division 3" },
  { sheet: "D4", name: "Division 4" },
  { sheet: "D5", name: "Division 5" },
  { sheet: "D6", name: "Division 6" },
  { sheet: "D7", name: "Division 7" },
  { sheet: "D8", name: "Division 8" },
  { sheet: "D9", name: "Division 9" },
];

const initialDivisions = [
  {
    name: 'Premier Division',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Milkweed', played: 6, won: 6, draw: 0, lost: 0, legsFor: 30, legsAgainst: 8, legDiff: 22, points: 18 },
      { pos: 2, player: 'Bravedart', played: 5, won: 3, draw: 1, lost: 1, legsFor: 22, legsAgainst: 13, legDiff: 9, points: 10 },
      { pos: 3, player: 'Gaz', played: 4, won: 2, draw: 1, lost: 1, legsFor: 16, legsAgainst: 13, legDiff: 3, points: 7 },
      { pos: 4, player: 'Andy', played: 4, won: 2, draw: 1, lost: 1, legsFor: 17, legsAgainst: 15, legDiff: 2, points: 7 },
      { pos: 5, player: 'Sean P', played: 5, won: 2, draw: 1, lost: 2, legsFor: 16, legsAgainst: 19, legDiff: -3, points: 7 },
      { pos: 6, player: 'Henri Lansivaara', played: 5, won: 2, draw: 1, lost: 2, legsFor: 15, legsAgainst: 20, legDiff: -5, points: 7 },
      { pos: 7, player: 'Dan Gretton', played: 3, won: 1, draw: 0, lost: 2, legsFor: 8, legsAgainst: 11, legDiff: -3, points: 3 },
      { pos: 8, player: 'Dazza', played: 3, won: 0, draw: 1, lost: 2, legsFor: 10, legsAgainst: 14, legDiff: -4, points: 1 },
      { pos: 9, player: 'Markym26', played: 2, won: 0, draw: 0, lost: 2, legsFor: 4, legsAgainst: 10, legDiff: -6, points: 0 },
      { pos: 10, player: 'George pvfc', played: 5, won: 0, draw: 0, lost: 5, legsFor: 10, legsAgainst: 25, legDiff: -15, points: 0 },
    ],
  },
  {
    name: 'Division 1',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'VanishingE', played: 6, won: 5, draw: 1, lost: 0, legsFor: 29, legsAgainst: 15, legDiff: 14, points: 16 },
      { pos: 2, player: 'DK118', played: 5, won: 3, draw: 1, lost: 1, legsFor: 22, legsAgainst: 15, legDiff: 7, points: 10 },
      { pos: 3, player: 'Cotillion', played: 5, won: 2, draw: 2, lost: 1, legsFor: 21, legsAgainst: 14, legDiff: 7, points: 8 },
      { pos: 4, player: 'Matthew', played: 3, won: 2, draw: 0, lost: 1, legsFor: 11, legsAgainst: 8, legDiff: 3, points: 6 },
      { pos: 5, player: 'Benawatt8', played: 6, won: 1, draw: 3, lost: 2, legsFor: 19, legsAgainst: 24, legDiff: -5, points: 6 },
      { pos: 6, player: 'Tyler McM', played: 4, won: 1, draw: 2, lost: 1, legsFor: 15, legsAgainst: 16, legDiff: -1, points: 5 },
      { pos: 7, player: 'Alan Bellott', played: 4, won: 1, draw: 1, lost: 2, legsFor: 13, legsAgainst: 14, legDiff: -1, points: 4 },
      { pos: 8, player: 'Reggie46', played: 2, won: 0, draw: 2, lost: 0, legsFor: 8, legsAgainst: 8, legDiff: 0, points: 2 },
      { pos: 9, player: 'Reggieb11', played: 4, won: 0, draw: 1, lost: 3, legsFor: 11, legsAgainst: 19, legDiff: -8, points: 1 },
      { pos: 10, player: 'Brandon Bell', played: 5, won: 0, draw: 1, lost: 4, legsFor: 8, legsAgainst: 24, legDiff: -16, points: 1 },
    ],
  },
  {
    name: 'Division 2',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'walker', played: 6, won: 4, draw: 1, lost: 1, legsFor: 27, legsAgainst: 18, legDiff: 9, points: 13 },
      { pos: 2, player: 'Frank Doberman', played: 4, won: 4, draw: 0, lost: 0, legsFor: 20, legsAgainst: 11, legDiff: 9, points: 12 },
      { pos: 3, player: 'RubendabeastY', played: 6, won: 3, draw: 1, lost: 2, legsFor: 25, legsAgainst: 17, legDiff: 8, points: 10 },
      { pos: 4, player: 'Shane', played: 5, won: 3, draw: 0, lost: 2, legsFor: 18, legsAgainst: 16, legDiff: 2, points: 9 },
      { pos: 5, player: 'Airwin', played: 4, won: 2, draw: 2, lost: 0, legsFor: 18, legsAgainst: 14, legDiff: 4, points: 8 },
      { pos: 6, player: 'Rog', played: 5, won: 2, draw: 1, lost: 2, legsFor: 20, legsAgainst: 20, legDiff: 0, points: 7 },
      { pos: 7, player: 'Dan H', played: 4, won: 1, draw: 1, lost: 2, legsFor: 14, legsAgainst: 17, legDiff: -3, points: 4 },
      { pos: 8, player: 'Mark Wright', played: 5, won: 1, draw: 0, lost: 4, legsFor: 13, legsAgainst: 22, legDiff: -9, points: 3 },
      { pos: 9, player: 'StayBraw(kev)', played: 6, won: 1, draw: 0, lost: 5, legsFor: 16, legsAgainst: 28, legDiff: -12, points: 3 },
      { pos: 10, player: 'pierre', played: 3, won: 0, draw: 0, lost: 3, legsFor: 7, legsAgainst: 15, legDiff: -8, points: 0 },
    ],
  },
  {
    name: 'Division 3',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Kieran1756', played: 4, won: 4, draw: 0, lost: 0, legsFor: 20, legsAgainst: 10, legDiff: 10, points: 12 },
      { pos: 2, player: 'Gareth treanor', played: 4, won: 3, draw: 0, lost: 1, legsFor: 18, legsAgainst: 9, legDiff: 9, points: 9 },
      { pos: 3, player: 'jordan092235', played: 4, won: 2, draw: 1, lost: 1, legsFor: 17, legsAgainst: 15, legDiff: 2, points: 7 },
      { pos: 4, player: 'Willundersc', played: 3, won: 1, draw: 1, lost: 1, legsFor: 12, legsAgainst: 9, legDiff: 3, points: 4 },
      { pos: 5, player: 'Nathan b 25', played: 3, won: 1, draw: 1, lost: 1, legsFor: 12, legsAgainst: 12, legDiff: 0, points: 4 },
      { pos: 6, player: 'David C', played: 4, won: 1, draw: 1, lost: 2, legsFor: 15, legsAgainst: 16, legDiff: -1, points: 4 },
      { pos: 7, player: 'Joe', played: 3, won: 1, draw: 0, lost: 2, legsFor: 8, legsAgainst: 13, legDiff: -5, points: 3 },
      { pos: 8, player: 'Kev', played: 4, won: 1, draw: 0, lost: 3, legsFor: 10, legsAgainst: 18, legDiff: -8, points: 3 },
      { pos: 9, player: 'Ross nolan', played: 3, won: 0, draw: 2, lost: 1, legsFor: 9, legsAgainst: 13, legDiff: -4, points: 2 },
      { pos: 10, player: 'Sam Luke', played: 2, won: 0, draw: 0, lost: 2, legsFor: 4, legsAgainst: 10, legDiff: -6, points: 0 },
    ],
  },
  {
    name: 'Division 4',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Brads', played: 6, won: 5, draw: 0, lost: 1, legsFor: 28, legsAgainst: 16, legDiff: 12, points: 15 },
      { pos: 2, player: 'Chris Malcolms', played: 6, won: 5, draw: 0, lost: 1, legsFor: 26, legsAgainst: 14, legDiff: 12, points: 15 },
      { pos: 3, player: 'Bradhtfc01', played: 5, won: 3, draw: 1, lost: 1, legsFor: 21, legsAgainst: 15, legDiff: 6, points: 10 },
      { pos: 4, player: 'sam lee', played: 6, won: 2, draw: 2, lost: 2, legsFor: 21, legsAgainst: 22, legDiff: -1, points: 8 },
      { pos: 5, player: 'Callum (paddy p)', played: 4, won: 2, draw: 1, lost: 1, legsFor: 16, legsAgainst: 13, legDiff: 3, points: 7 },
      { pos: 6, player: 'The Reigner', played: 5, won: 1, draw: 2, lost: 2, legsFor: 16, legsAgainst: 18, legDiff: -2, points: 5 },
      { pos: 7, player: 'Lien "bottler" Lla', played: 5, won: 1, draw: 1, lost: 3, legsFor: 17, legsAgainst: 21, legDiff: -4, points: 4 },
      { pos: 8, player: 'BatesyXVI', played: 5, won: 1, draw: 1, lost: 3, legsFor: 16, legsAgainst: 21, legDiff: -5, points: 4 },
      { pos: 9, player: 'Manulowlands', played: 5, won: 1, draw: 1, lost: 3, legsFor: 13, legsAgainst: 22, legDiff: -9, points: 4 },
      { pos: 10, player: 'Dini89', played: 5, won: 0, draw: 1, lost: 4, legsFor: 12, legsAgainst: 24, legDiff: -12, points: 1 },
    ],
  },
  {
    name: 'Division 5',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Dan(dan081017)', played: 5, won: 5, draw: 0, lost: 0, legsFor: 25, legsAgainst: 6, legDiff: 19, points: 15 },
      { pos: 2, player: 'Mike Gwynne', played: 5, won: 2, draw: 2, lost: 1, legsFor: 20, legsAgainst: 16, legDiff: 4, points: 8 },
      { pos: 3, player: 'Robrobob', played: 6, won: 2, draw: 1, lost: 3, legsFor: 18, legsAgainst: 24, legDiff: -6, points: 7 },
      { pos: 4, player: 'Jordan Joyce 28', played: 3, won: 2, draw: 0, lost: 1, legsFor: 11, legsAgainst: 8, legDiff: 3, points: 6 },
      { pos: 5, player: 'Bill', played: 4, won: 2, draw: 0, lost: 2, legsFor: 12, legsAgainst: 15, legDiff: -3, points: 6 },
      { pos: 6, player: 'almightytea', played: 4, won: 1, draw: 1, lost: 2, legsFor: 11, legsAgainst: 15, legDiff: -4, points: 4 },
      { pos: 7, player: 'Anth Sweeting', played: 3, won: 1, draw: 0, lost: 2, legsFor: 11, legsAgainst: 11, legDiff: 0, points: 3 },
      { pos: 8, player: 'Mason Stephens', played: 4, won: 1, draw: 0, lost: 3, legsFor: 13, legsAgainst: 16, legDiff: -3, points: 3 },
      { pos: 9, player: 'Demi', played: 3, won: 1, draw: 0, lost: 2, legsFor: 9, legsAgainst: 13, legDiff: -4, points: 3 },
      { pos: 10, player: 'jordzbrown01', played: 3, won: 1, draw: 0, lost: 2, legsFor: 6, legsAgainst: 12, legDiff: -6, points: 3 },
    ],
  },
  {
    name: 'Division 6',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'jack "The Lad" D', played: 5, won: 4, draw: 1, lost: 0, legsFor: 24, legsAgainst: 12, legDiff: 12, points: 13 },
      { pos: 2, player: 'LegoHead24', played: 5, won: 4, draw: 1, lost: 0, legsFor: 24, legsAgainst: 12, legDiff: 12, points: 13 },
      { pos: 3, player: 'Quad', played: 4, won: 3, draw: 0, lost: 1, legsFor: 16, legsAgainst: 7, legDiff: 9, points: 9 },
      { pos: 4, player: 'Kenny2613', played: 3, won: 2, draw: 0, lost: 1, legsFor: 13, legsAgainst: 6, legDiff: 7, points: 6 },
      { pos: 5, player: 'Michael', played: 3, won: 2, draw: 0, lost: 1, legsFor: 13, legsAgainst: 8, legDiff: 5, points: 6 },
      { pos: 6, player: 'Rollo', played: 5, won: 2, draw: 0, lost: 3, legsFor: 13, legsAgainst: 15, legDiff: -2, points: 6 },
      { pos: 7, player: 'GG', played: 4, won: 1, draw: 0, lost: 3, legsFor: 11, legsAgainst: 15, legDiff: -4, points: 3 },
      { pos: 8, player: 'DaveyG', played: 3, won: 1, draw: 0, lost: 2, legsFor: 5, legsAgainst: 13, legDiff: -8, points: 3 },
      { pos: 9, player: 'Stevo', played: 4, won: 0, draw: 0, lost: 4, legsFor: 8, legsAgainst: 20, legDiff: -12, points: 0 },
      { pos: 10, player: 'Gester', played: 4, won: 0, draw: 0, lost: 4, legsFor: 1, legsAgainst: 20, legDiff: -19, points: 0 },
    ],
  },
  {
    name: 'Division 7',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Jadenbaker1', played: 4, won: 4, draw: 0, lost: 0, legsFor: 20, legsAgainst: 6, legDiff: 14, points: 12 },
      { pos: 2, player: 'Michael maloney', played: 5, won: 3, draw: 1, lost: 1, legsFor: 22, legsAgainst: 12, legDiff: 10, points: 10 },
      { pos: 3, player: 'J3N24', played: 4, won: 3, draw: 0, lost: 1, legsFor: 15, legsAgainst: 10, legDiff: 5, points: 9 },
      { pos: 4, player: 'Gez', played: 6, won: 2, draw: 2, lost: 2, legsFor: 20, legsAgainst: 20, legDiff: 0, points: 8 },
      { pos: 5, player: 'Sure Shot Shane', played: 4, won: 2, draw: 0, lost: 2, legsFor: 15, legsAgainst: 13, legDiff: 2, points: 6 },
      { pos: 6, player: 'Jordan', played: 5, won: 1, draw: 3, lost: 1, legsFor: 20, legsAgainst: 19, legDiff: 1, points: 6 },
      { pos: 7, player: 'Dav1d77777', played: 4, won: 2, draw: 0, lost: 2, legsFor: 12, legsAgainst: 11, legDiff: 1, points: 6 },
      { pos: 8, player: 'Gronky Kong', played: 5, won: 1, draw: 1, lost: 3, legsFor: 11, legsAgainst: 22, legDiff: -11, points: 4 },
      { pos: 9, player: 'Caz2892', played: 4, won: 1, draw: 0, lost: 3, legsFor: 10, legsAgainst: 18, legDiff: -8, points: 3 },
      { pos: 10, player: 'chris.k', played: 5, won: 0, draw: 1, lost: 4, legsFor: 10, legsAgainst: 24, legDiff: -14, points: 1 },
    ],
  },
  {
    name: 'Division 8',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Kurtis91', played: 5, won: 4, draw: 1, lost: 0, legsFor: 24, legsAgainst: 8, legDiff: 16, points: 13 },
      { pos: 2, player: 'Markm5471', played: 5, won: 3, draw: 1, lost: 1, legsFor: 21, legsAgainst: 13, legDiff: 8, points: 10 },
      { pos: 3, player: 'Max Barbier', played: 4, won: 3, draw: 0, lost: 1, legsFor: 17, legsAgainst: 8, legDiff: 9, points: 9 },
      { pos: 4, player: "Big'un", played: 4, won: 2, draw: 2, lost: 0, legsFor: 18, legsAgainst: 11, legDiff: 7, points: 8 },
      { pos: 5, player: 'Fatboy.darts on yt', played: 4, won: 1, draw: 2, lost: 1, legsFor: 14, legsAgainst: 15, legDiff: -1, points: 5 },
      { pos: 6, player: 'Nathan2809', played: 4, won: 1, draw: 1, lost: 2, legsFor: 13, legsAgainst: 16, legDiff: -3, points: 4 },
      { pos: 7, player: 'joeyalberti', played: 5, won: 1, draw: 1, lost: 3, legsFor: 14, legsAgainst: 19, legDiff: -5, points: 4 },
      { pos: 8, player: 'Paul (PaulBag)', played: 5, won: 1, draw: 1, lost: 3, legsFor: 14, legsAgainst: 21, legDiff: -7, points: 4 },
      { pos: 9, player: 'gary robertson', played: 4, won: 0, draw: 3, lost: 1, legsFor: 12, legsAgainst: 17, legDiff: -5, points: 3 },
      { pos: 10, player: 'Argyleman2', played: 6, won: 1, draw: 0, lost: 5, legsFor: 7, legsAgainst: 26, legDiff: -19, points: 3 },
    ],
  },
  {
    name: 'Division 9',
    updated: 'Current table',
    table: [
      { pos: 1, player: 'Ryan P', played: 6, won: 5, draw: 1, lost: 0, legsFor: 29, legsAgainst: 10, legDiff: 19, points: 16 },
      { pos: 2, player: 'John', played: 6, won: 5, draw: 0, lost: 1, legsFor: 26, legsAgainst: 13, legDiff: 13, points: 15 },
      { pos: 3, player: 'Dan(gitsurfer83)', played: 6, won: 4, draw: 1, lost: 1, legsFor: 27, legsAgainst: 14, legDiff: 13, points: 13 },
      { pos: 4, player: 'Mark_LFC', played: 6, won: 3, draw: 0, lost: 3, legsFor: 22, legsAgainst: 18, legDiff: 4, points: 9 },
      { pos: 5, player: 'Danny', played: 6, won: 2, draw: 2, lost: 2, legsFor: 22, legsAgainst: 22, legDiff: 0, points: 8 },
      { pos: 6, player: 'R Bain', played: 6, won: 2, draw: 1, lost: 3, legsFor: 19, legsAgainst: 24, legDiff: -5, points: 7 },
      { pos: 7, player: 'Comicbob69', played: 5, won: 2, draw: 0, lost: 3, legsFor: 13, legsAgainst: 19, legDiff: -6, points: 6 },
      { pos: 8, player: 'Tonycroc', played: 6, won: 2, draw: 0, lost: 4, legsFor: 15, legsAgainst: 24, legDiff: -9, points: 6 },
      { pos: 9, player: 'Russlads', played: 6, won: 1, draw: 1, lost: 4, legsFor: 18, legsAgainst: 26, legDiff: -8, points: 4 },
      { pos: 10, player: 'Troup', played: 5, won: 0, draw: 0, lost: 5, legsFor: 4, legsAgainst: 25, legDiff: -21, points: 0 },
    ],
  },
];

const newsItems = [
  {
    title: 'Summer Knockout now underway',
    tag: 'Tournament News',
    summary: 'The latest server tournament has kicked off, with first-round matches now being arranged inside Discord.',
    update: 'Fixtures posted in the tournaments channel.',
  },
  {
    title: 'Premier Division title race tightens',
    tag: 'League Update',
    summary: 'Only a handful of points separate the top contenders as the latest weekly results are submitted across the server.',
    update: 'Full standings refreshed after the latest match night.',
  },
  {
    title: 'Registration open for next event',
    tag: 'Discord Notice',
    summary: 'Players in the community can now put their names down for the next tournament directly through the Discord server.',
    update: 'Sign-ups live now in Discord.',
  },
  {
    title: 'Weekly results roundup posted',
    tag: 'Results',
    summary: 'A fresh roundup of division movement, standout results and important scheduling notes has been added for members.',
    update: 'Catch up in the news feed below.',
  },
];

const highlights = [
  { label: 'League Divisions', value: '10', detail: 'Premier + Divisions 1–9' },
  { label: 'Live Tables', value: '100', detail: 'Players tracked across all divisions' },
  { label: 'Tourneys Live', value: '2', detail: 'Events active in Discord now' },
  { label: 'Latest Update', value: 'Today', detail: 'Standings refreshed' },
];

function LiveNowBanner({ onlineCount, discordLoading }) {
  const isLive = !discordLoading && (onlineCount ?? 0) > 0;

  return (
    <div className={`relative overflow-hidden rounded-[1.6rem] border p-5 shadow-xl shadow-black/30 ${isLive ? 'border-red-400/20 bg-gradient-to-r from-red-500/15 via-slate-950 to-slate-950' : 'border-white/10 bg-slate-950'}`}>
      <div className={`absolute inset-x-0 top-0 h-1 ${isLive ? 'bg-gradient-to-r from-red-500 via-orange-400 to-red-500' : 'bg-gradient-to-r from-sky-400 to-orange-500'}`} />
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.28em] ${isLive ? 'bg-red-500/15 text-red-300' : 'bg-white/5 text-slate-300'}`}>
              {discordLoading ? 'Checking Status' : isLive ? 'Live Now' : 'Offline Right Now'}
            </span>
            {isLive ? <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" /> : null}
          </div>
          <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
            {discordLoading ? 'Checking Discord activity…' : isLive ? 'Players are active in Discord right now.' : 'No live Discord activity at the moment.'}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {discordLoading
              ? 'Pulling your live server presence now.'
              : isLive
                ? `${onlineCount} member${onlineCount === 1 ? '' : 's'} currently online in your server.`
                : 'The live banner will light up automatically whenever people are active in the server.'}
          </p>
        </div>
        <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className={`inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.2em] transition ${isLive ? 'bg-red-500 text-white hover:bg-red-400' : 'bg-sky-400 text-slate-950 hover:opacity-90'}`}>
          Join Live Chat
        </a>
      </div>
    </div>
  );
}

const featuredStories = [
  {
    kicker: 'Main Event',
    title: 'Premier Division title race heats up',
    body: 'Milkweed sets the pace at the top, but the chasing pack are still in striking distance as the latest results land.',
  },
  {
    kicker: 'On Now',
    title: 'Summer Knockout fixtures posted',
    body: 'The latest tournament bracket is live in Discord, with first-round ties now being arranged across the server.',
  },
  {
    kicker: 'Coming Up',
    title: 'More league nights, more table movement',
    body: 'Every update can shift promotion, relegation and the title picture across all ten divisions.',
  },
];

function getSheetUrl(sheetName) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${encodeURIComponent(sheetName)}&tqx=out:json`;
}

function extractGoogleJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Could not read Google Sheets response.");
  }
  return JSON.parse(text.slice(start, end + 1));
}

function cellValue(cell) {
  if (!cell) return "";
  if (cell.v !== undefined && cell.v !== null) return cell.v;
  if (cell.f !== undefined && cell.f !== null) return cell.f;
  return "";
}

function toNumber(value) {
  const cleaned = String(value ?? "")
    .replace(/,/g, "")
    .trim();

  if (cleaned === "") return 0;
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : 0;
}

function parseDivisionSheet(json, divisionName) {
  const rows = json?.table?.rows ?? [];
  const table = rows
    .map((row, index) => {
      const cells = row.c ?? [];
      const player = String(cellValue(cells[0]) ?? "").trim();

      if (!player) return null;

      return {
        pos: index + 1,
        player,
        played: toNumber(cellValue(cells[1])),
        won: toNumber(cellValue(cells[2])),
        draw: toNumber(cellValue(cells[3])),
        lost: toNumber(cellValue(cells[4])),
        legsFor: toNumber(cellValue(cells[5])),
        legsAgainst: toNumber(cellValue(cells[6])),
        legDiff: toNumber(cellValue(cells[7])),
        points: toNumber(cellValue(cells[8])),
      };
    })
    .filter(Boolean);

  return {
    name: divisionName,
    updated: "Auto-updated from Google Sheets",
    table,
  };
}

async function fetchDivision({ sheet, name }) {
  const response = await fetch(getSheetUrl(sheet));
  if (!response.ok) {
    throw new Error(`Failed to load ${name}`);
  }

  const text = await response.text();
  const json = extractGoogleJson(text);
  return parseDivisionSheet(json, name);
}

async function fetchAllDivisions() {
  return Promise.all(SHEET_TABS.map(fetchDivision));
}

function StatCard({ label, value, detail }) {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-sky-400/15 bg-slate-950 p-5 shadow-xl shadow-black/30">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-orange-500" />
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-300">{label}</p>
      <p className="mt-3 text-4xl font-black leading-none tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{detail}</p>
    </div>
  );
}

function StoryCard({ kicker, title, body }) {
  return (
    <article className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950 p-5 shadow-xl shadow-black/30">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-orange-500" />
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-300">{kicker}</p>
      <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
    </article>
  );
}

function DivisionTable({ division }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-sky-500/15 via-slate-950 to-orange-500/15 px-4 py-4">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight text-white">{division.name}</h3>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">{division.updated}</p>
        </div>
        <div className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-orange-300">
          Live Table
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[860px]">
          <div className="grid grid-cols-[46px_1.6fr_56px_56px_56px_56px_72px_72px_72px_60px] gap-2 border-b border-white/10 bg-slate-900 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
            <div>Pos</div>
            <div>Player</div>
            <div>P</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div>For</div>
            <div>Agst</div>
            <div>Diff</div>
            <div>Pts</div>
          </div>
          {division.table.map((row, index) => (
            <div key={row.player} className={`grid grid-cols-[46px_1.6fr_56px_56px_56px_56px_72px_72px_72px_60px] gap-2 border-b border-white/5 px-4 py-3 text-sm last:border-b-0 ${index === 0 ? 'bg-gradient-to-r from-sky-500/10 to-transparent' : index < 3 ? 'bg-white/[0.02]' : ''}`}>
              <div className={`font-black ${index === 0 ? 'text-sky-300' : 'text-white'}`}>{row.pos}</div>
              <div className="font-semibold text-white">{row.player}</div>
              <div className="text-slate-300">{row.played}</div>
              <div className="text-slate-300">{row.won}</div>
              <div className="text-slate-300">{row.draw ?? 0}</div>
              <div className="text-slate-300">{row.lost}</div>
              <div className="text-slate-300">{row.legsFor ?? '-'}</div>
              <div className="text-slate-300">{row.legsAgainst ?? '-'}</div>
              <div className={`${(row.legDiff ?? 0) >= 0 ? 'text-slate-200' : 'text-red-300'}`}>{row.legDiff ?? row.legs ?? '-'}</div>
              <div className="font-black text-orange-300">{row.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mb-8 flex flex-col gap-2 border-l-4 border-sky-400 pl-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-slate-400">{copy}</p>
    </div>
  );
}

export default function OpenAllHoursDartsWebsite() {
  const [memberCount, setMemberCount] = useState(null);
  const [onlineCount, setOnlineCount] = useState(null);
  const [discordLoading, setDiscordLoading] = useState(true);
  const [divisions, setDivisions] = useState(initialDivisions);
  const [isLoadingTables, setIsLoadingTables] = useState(true);
  const [tableError, setTableError] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetchAllDivisions()
      .then((data) => {
        if (!isMounted) return;
        setDivisions(data);
        setTableError("");
      })
      .catch((error) => {
        console.error("Google Sheets sync failed:", error);
        if (!isMounted) return;
        setTableError("Live Google Sheets sync is unavailable right now. Showing the latest saved tables.");
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoadingTables(false);
      });

    return () => {
      isMounted = false;
    };
    }, []);

  // 🔴 Discord member count
  useEffect(() => {
    let mounted = true;
    fetch(`https://discord.com/api/v9/invites/${DISCORD_CODE}?with_counts=true`)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setMemberCount(data?.approximate_member_count ?? null);
        setOnlineCount(data?.approximate_presence_count ?? null);
      })
      .catch(() => {
        if (!mounted) return;
        setMemberCount(null);
        setOnlineCount(null);
      })
      .finally(() => {
        if (!mounted) return;
        setDiscordLoading(false);
      });

    return () => (mounted = false);
  }, []);

  return (
    <div className="min-h-screen bg-[#050b16] text-white">
      <header className="sticky top-0 z-50 border-b border-sky-400/10 bg-[#050b16]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          <div className="flex items-center gap-4">
            <img src={logo} alt="Open All Hours Darts logo" className="h-14 w-14 rounded-2xl border border-white/10 object-cover shadow-lg shadow-orange-500/10" />
            <div>
              <p className="text-lg font-black uppercase tracking-[0.14em] text-white">Open All Hours Darts</p>
              <p className="text-sm text-slate-400">Online League Headquarters</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            <a href="#divisions" className="transition hover:text-white">Divisions</a>
            <a href="#news" className="transition hover:text-white">News</a>
            <a href="#discord" className="transition hover:text-white">Discord</a>
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-400">Join Server</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-sky-400/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_24%),linear-gradient(180deg,_#07101f_0%,_#050b16_55%,_#091222_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:pb-16 lg:pt-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-300">
            <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sky-300">Live Tables</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Google Sheets Sync</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Tournament Centre</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Discord Updates</span>
          </div>
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-sky-300">Open All Hours Darts</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-7xl">
                A league website with a proper PDC feel.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Live division tables, current tournament coverage and Discord-first league updates presented in a sharper match-centre style.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#divisions" className="rounded-full bg-sky-400 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:opacity-90">
                  View Tables
                </a>
                <a href="#news" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                  Tournament News
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <StatCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-300">League Identity</p>
                </div>
                <div className="p-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                    <img src={logo} alt="Open All Hours Darts" className="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                {featuredStories.map((story) => (
                  <StoryCard key={story.title} {...story} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <section id="divisions" className="mb-16">
          <SectionHeading
            eyebrow="League Structure"
            title="All 10 Divisions"
            copy="These tables now pull directly from your Google Sheet, so your website can update automatically whenever you update the sheet."
          />
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 font-bold uppercase tracking-[0.2em] text-sky-300">
              {isLoadingTables ? 'Syncing tables…' : 'Google Sheets connected'}
            </div>
            {tableError ? (
              <div className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 font-semibold text-red-300">
                {tableError}
              </div>
            ) : (
              <div className="rounded-full border border-white/10 px-4 py-2 text-slate-300">
                Sheet ID linked successfully
              </div>
            )}
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {divisions.map((division) => (
              <DivisionTable key={division.name} division={division} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <LiveNowBanner onlineCount={onlineCount} discordLoading={discordLoading} />
        </section>

        <section id="news" className="mb-16">
          <SectionHeading
            eyebrow="Server Feed"
            title="News & Current Tournament Updates"
            copy="Use this area to highlight what is happening in the Discord server right now, including tournament progress, sign-ups and weekly notices."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {newsItems.map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 p-6 shadow-xl shadow-black/30">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-orange-500" />
                <div className="inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Current Update</p>
                  <p className="mt-2 text-sm text-slate-300">{item.update}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="discord" className="mb-16">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950 p-8 shadow-2xl shadow-black/30 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-300">Discord Community</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">Your server is the heart of the league</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  This website acts as the public-facing home for Open All Hours Darts, while Discord stays the place for match arranging, live chat, tournament coordination and player updates.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 font-bold uppercase tracking-[0.2em] text-sky-300">
                    {discordLoading ? 'Loading…' : `${memberCount ?? '--'} Members`}
                  </div>
                  <div className="rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 font-bold uppercase tracking-[0.2em] text-green-300">
                    {discordLoading ? 'Loading…' : `${onlineCount ?? '--'} Online`}
                  </div>
                </div>
              </div>
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:opacity-90">
                Join the Discord
              </a>
            </div>
          </div>
        </section>

        <section id="join">
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1424] to-slate-950 p-8 shadow-2xl shadow-black/30 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-300">Get Involved</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">Join Open All Hours Darts</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Build your squad, enter the next season and get featured on the league site with fixtures, results and stat tracking.
                </p>
              </div>
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:opacity-90">
                Join the Discord
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
