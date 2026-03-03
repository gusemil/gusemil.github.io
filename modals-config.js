/**
 * Modal Configuration
 * Central configuration for all modals on the portfolio site
 * Easily add, remove, or modify modals by editing this data structure
 */

const MODALS_CONFIG = [
  {
    id: 'dungeonModal',
    title: 'The Untitled Dungeon Crawler (TBA)',
    image: 'images/dungeon.png',
    description: `A work in progress old-school 3D Action-RPG made in Godot 4, using Blender and Trenchroom in addition`,
    content: `<p>A work in progress old-school 3D Action-RPG made in Godot 4, using Blender and Trenchbroom in addition</p>`,
    links: [
      { url: 'https://www.youtube.com/watch?v=dU6H0RkQnac&feature=youtu.be', icon: 'fa fa-youtube', label: 'YouTube' }
    ]
  },
  {
    id: 'questionModal',
    title: 'Fossreads (TBA)',
    image: 'images/question.png',
    description: `A clone of a popular book database built using React with TypeScript and PHP/Laravel, connected via Inertia.js. Databases using PostgreSQL. Styling via TailwindCSS`,
    content: `<p>Coming soon...</p>`,
    links: [
      { url: 'https://github.com/gusemil', icon: 'fa fa-github', label: 'GitHub' }
    ]
  },
  {
    id: 'wargameModal2',
    title: 'WarGameTracker 2.0 (Laravel) (2025)',
    image: 'images/wargame2.PNG',
    description: `WarGameTracker 2.0 is an enhanced version of WarGameTracker 1.0 rebuilt in Laravel (PHP)`,
    content: `
      <p>WarGameTracker 2.0 is an enhanced version of <a href="https://github.com/gusemil/wargame-tracker-php-1.0">WarGameTracker 1.0</a> rebuilt in Laravel (PHP)</p>
      <p>Laravel (PHP)/SQL (PostgreSQL) based CRUD site for tracking stats and matches of nerdy miniature war games using ELO scoring system.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/wargametracker-laravel', icon: 'fa fa-github', label: 'GitHub' }
    ]
  },
  {
    id: 'wargameModal',
    title: 'WarGameTracker (2024)',
    image: 'images/wargame2.PNG',
    description: `PHP/SQL based CRUD site for tracking stats and matches of nerdy miniature war games using ELO scoring system`,
    content: `
      <p>PHP/SQL based CRUD site for tracking stats and matches of nerdy miniature war games using ELO scoring system.</p>
      <h3>Features</h3>
      <ul>
        <li>View latest matches and top players</li>
        <li>Registration with email verification using PHPMailer</li>
        <li>User login and user dashboard including user stats</li>
        <li>Admin tools for adding matches</li>
        <li>ELO based user ranking</li>
        <li>Responsive. Both mobile and desktop friendly</li>
      </ul>
      <h3>Stack</h3>
      <ul>
        <li>Styling: HTML, CSS, Bootstrap 5</li>
        <li>Frontend: JavaScript</li>
        <li>Backend: PHP</li>
        <li>Databases: SQL</li>
      </ul>
    `,
    links: [
      { url: 'https://github.com/gusemil/wargame-tracker-php-1.0/', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://youtu.be/UvyrT_duius', icon: 'fa fa-youtube', label: 'YouTube' }
    ]
  },
  {
    id: 'intermittentModal',
    title: 'Intermittent Fasting App (2024)',
    image: 'images/intermittent-fasting-app.png',
    description: `.NET MAUI/C# (Android) App for tracking intermittent fasting with customizable intermittent fasting periods`,
    content: `
      <p>.NET MAUI/C# (Android) App for tracking intermittent fasting with customizable intermittent fasting periods (default 16:8)</p>
      <p>You can set your own fasting period to match your needs in the settings page. The app has notifications to let you know the fasting or eating period is done and when there is only one hour left. By default notifications are on, but you can toggle them off in the settings page.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/IntermittentFasting', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://youtu.be/6gBp30SZD9k?si=PIBhhlpIXG1sh8A7', icon: 'fa fa-youtube', label: 'YouTube' },
      { url: 'https://www.dropbox.com/scl/fi/dlm1yo999b3wb1c8iv537/com.companyname.intermittentfasting-Signed.apk?rlkey=l8jisfd2g8ocjn7e4fimekqvj&st=vgve1gdh&dl=0', icon: 'fa fa-dropbox', label: 'Download APK' }
    ]
  },
  {
    id: 'godotModal',
    title: 'The Untitled Godot RPG (2023)',
    image: 'images/godot.png',
    description: `A 3D RPG prototype made in Godot 3.5.1. Inspired by The Elder Scrolls games`,
    content: `
      <p>A 3D RPG prototype made in Godot 3.5.1. Simple but functional first-person perspective 3D Action-RPG prototype inspired by The Elder Scrolls games. Featuring one test dungeon with simple RPG mechanics (leveling up, attributes, perks), enemies and lootable containers.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/The-Untitled-Godot-RPG', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=I7xL-KsknTE', icon: 'fa fa-youtube', label: 'YouTube' },
      { url: 'https://champion-eternal.itch.io/the-untitled-godot-rpg', icon: 'fa-brands fa-itch-io', label: 'Itch.io' }
    ]
  },
  {
    id: 'strikeModal',
    title: 'Strike Control Server (2021)',
    image: 'images/strike-control.png',
    description: `A NodeJS high score server for a 3D real-time strategy game (Unity + C#)`,
    content: `
      <div class="text-center mb-3"><img src="images/strike-control.png" style="width: 20rem"></div>
      <ul>
        <li>A NodeJS server project for a Unity real-time 3D strategy game</li>
        <li>Stack: MySQL, NodeJS, JSON, SimpleJSON for Unity</li>
        <li>Tested with XAMPP</li>
      </ul>
    `,
    links: [
      { url: 'https://github.com/gusemil/StrikeControlNodeServer', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://youtu.be/6P-S2v2Ve_4?si=djzasug7YDmMNy9g', icon: 'fa fa-youtube', label: 'YouTube' },
      { url: 'https://www.dropbox.com/s/v7iwp1h6hqlu3mn/StrikeControlBuild-And-NodeServer.zip?dl=0', icon: 'fa fa-dropbox', label: 'Download' }
    ]
  },
  {
    id: 'diabloModal',
    title: 'Unreal Engine Diablo clone (2021)',
    image: 'images/diablo.png',
    description: `3D Action-RPG prototype in the vein of Diablo made in Unreal Engine 4 for Gameplay Programming course`,
    content: `
      <p>3D Action-RPG prototype in the vein of Diablo made in Unreal Engine 4 for Gameplay Programming course.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/UE-Diablo-Prototype2', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=dPS1Hv1Dxtc', icon: 'fa fa-youtube', label: 'YouTube' },
      { url: 'https://champion-eternal.itch.io/der-teufel-2-unreal-engine-diabloclone', icon: 'fa-brands fa-itch-io', label: 'Itch.io' }
    ]
  },
  {
    id: 'xenoModal',
    title: 'Xenoshock 2D (2020)',
    image: 'images/Xenoshock-2d.png',
    description: `Solo-developed Unity 2D (C#) Topdown shooter in the vein of Crimsonland and Hotline Miami`,
    content: `
      <p>Solo-developed Unity 2D (C#) Topdown shooter in the vein of Crimsonland and Hotline Miami</p>
      <ul>
        <li>Team Size: 1.</li>
        <li>Responsibilities: Solo project. All programming.</li>
        <li>Features: Unity 2D Topdown shooter in the vein of Crimsonland and Hotline Miami.</li>
        <li>Other: Art from open and free sources (Unity Asset Store, OpenGameArt.org and Kenney.nl). Music and sounds bought from Humble Bundle.</li>
      </ul>
    `,
    links: [
      { url: 'https://github.com/gusemil/TopDownShooter2D', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=fUtLqPlL2PI', icon: 'fa fa-youtube', label: 'YouTube' }
    ]
  },
  {
    id: 'tiedModal',
    title: 'Tied Up In Space (2021)',
    image: 'images/tied-up-in-space.png',
    description: `3D Co-op puzzle-platformer. Programmer in a large scale (+20 person) co-op puzzle-platformer game built with Unreal Engine 4`,
    content: `
      <p>3D Co-op puzzle-platformer. I was a programmer in a large scale (+20 person) co-op puzzle-platformer game built with Unreal Engine 4 during my exchange at Hochschule Der Medien Stuttgart.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/HDM-Unreal-Engine-Platformer', icon: 'fa fa-github', label: 'GitHub' }
    ]
  },
  {
    id: 'strikeControlModal',
    title: 'Strike Control (2020)',
    image: 'images/strike-control.png',
    description: `3D real-time strategy game made in Unity and C# with 3 other programmers and 2 artists in roughly 8 weeks`,
    content: `
      <p>3D real-time strategy game made in Unity and C# with 3 other programmers and 2 artists in roughly 8 weeks.</p>
      <ul>
        <li>Team Size: 6 (4 programmers, 2 artists)</li>
        <li>Responsibilities: Project Leader, Lead Game Designer, Programmer (Resource Gathering and Player Resources, Enemy Spawning, Factions, 50% of unit AI code)</li>
        <li>Other: Made in 8 weeks during Game Project course. Due lack of time the unit movement and combat are clumsy but otherwise it is a very functional game.</li>
      </ul>
    `,
    links: [
      { url: 'https://github.com/gusemil/Strike-Control', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=6P-S2v2Ve_4', icon: 'fa fa-youtube', label: 'YouTube' },
      { url: 'https://www.dropbox.com/s/v7iwp1h6hqlu3mn/StrikeControlBuild-And-NodeServer.zip?dl=0', icon: 'fa fa-dropbox', label: 'Download' }
    ]
  },
  {
    id: 'chessModal',
    title: 'Chess AI (2020)',
    image: 'images/chess-resized.png',
    description: `Chess game AI pair project made in C++ during the 2nd year of university studies using minimax and alpha-beta pruning algorithms`,
    content: `
      <p>Chess game AI pair project made in C++ during the 2nd year of university studies using minimax and alpha-beta pruning algorithms.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/chess-ai', icon: 'fa fa-github', label: 'GitHub' }
    ]
  },
  {
    id: 'valhallaModal',
    title: 'Valhalla Denied (2019)',
    image: 'images/Valhalla.png',
    description: `A 2D roguelike game made in Unity and C# with two other people during the first year of university studies`,
    content: `
      <p>A 2D roguelike game made in Unity and C# with two other people during the first year of university studies.</p>
    `,
    links: [
      { url: 'https://github.com/gusemil/Valhalla-Denied', icon: 'fa fa-github', label: 'GitHub' },
      { url: 'https://www.youtube.com/watch?v=HDN4eKzqeaM', icon: 'fa fa-youtube', label: 'YouTube' }
    ]
  }
];
