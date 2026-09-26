const fs = require("fs");
const path = require("path");

const ROOT = path.join(process.cwd(), "f1-community");

const files = [
    // app
    "app/layout.tsx",
    "app/loading.tsx",
    "app/error.tsx",
    "app/not-found.tsx",

    // main
    "app/(main)/page.tsx",

    "app/(main)/races/page.tsx",
    "app/(main)/races/[raceId]/page.tsx",
    "app/(main)/races/[raceId]/result/page.tsx",
    "app/(main)/races/[raceId]/analysis/page.tsx",

    "app/(main)/drivers/page.tsx",
    "app/(main)/drivers/[driverId]/page.tsx",

    "app/(main)/teams/page.tsx",
    "app/(main)/teams/[teamId]/page.tsx",

    "app/(main)/standings/page.tsx",

    "app/(main)/community/page.tsx",
    "app/(main)/community/free/page.tsx",
    "app/(main)/community/race/[raceId]/page.tsx",
    "app/(main)/community/posts/new/page.tsx",
    "app/(main)/community/posts/[postId]/page.tsx",

    "app/(main)/prediction/page.tsx",
    "app/(main)/prediction/[raceId]/page.tsx",
    "app/(main)/prediction/ranking/page.tsx",

    "app/(main)/premium/page.tsx",
    "app/(main)/premium/pricing/page.tsx",

    // auth
    "app/(auth)/login/page.tsx",
    "app/(auth)/signup/page.tsx",
    "app/(auth)/forgot-password/page.tsx",

    // profile
    "app/profile/page.tsx",
    "app/profile/posts/page.tsx",
    "app/profile/predictions/page.tsx",
    "app/profile/subscription/page.tsx",

    // payment
    "app/payment/success/page.tsx",
    "app/payment/fail/page.tsx",

    // api
    "app/api/auth/.gitkeep",
    "app/api/races/.gitkeep",
    "app/api/drivers/.gitkeep",
    "app/api/teams/.gitkeep",
    "app/api/posts/.gitkeep",
    "app/api/comments/.gitkeep",
    "app/api/likes/.gitkeep",
    "app/api/predictions/.gitkeep",
    "app/api/payments/.gitkeep",
    "app/api/subscription/.gitkeep",

    // components
    "components/common/Header.tsx",
    "components/common/Footer.tsx",
    "components/common/Loading.tsx",

    "components/race/RaceCard.tsx",
    "components/race/RaceCalendar.tsx",
    "components/race/SessionTable.tsx",

    "components/driver/DriverCard.tsx",
    "components/driver/DriverStats.tsx",
    "components/driver/DriverComparison.tsx",

    "components/team/TeamCard.tsx",
    "components/team/TeamStats.tsx",

    "components/community/PostCard.tsx",
    "components/community/PostList.tsx",
    "components/community/CommentList.tsx",
    "components/community/CommentForm.tsx",
    "components/community/LikeButton.tsx",

    "components/prediction/PredictionForm.tsx",
    "components/prediction/RankingTable.tsx",

    "components/premium/PremiumBadge.tsx",
    "components/premium/PremiumGate.tsx",
    "components/premium/PricingCard.tsx",

    "components/ui/Button.tsx",
    "components/ui/Card.tsx",
    "components/ui/Input.tsx",
    "components/ui/Modal.tsx",
    "components/ui/Tabs.tsx",

    // lib
    "lib/db.ts",
    "lib/auth.ts",
    "lib/utils.ts",

    "lib/f1/api.ts",
    "lib/f1/races.ts",
    "lib/f1/drivers.ts",
    "lib/f1/teams.ts",

    "lib/payment/stripe.ts",
    "lib/payment/subscription.ts",
    "lib/payment/webhook.ts",

    "lib/validation/user.ts",
    "lib/validation/post.ts",
    "lib/validation/comment.ts",
    "lib/validation/prediction.ts",

    // prisma
    "prisma/schema.prisma",
    "prisma/seed.ts",

    // types
    "types/user.ts",
    "types/race.ts",
    "types/driver.ts",
    "types/team.ts",
    "types/post.ts",
    "types/prediction.ts",
    "types/payment.ts",

    // data
    "data/drivers.ts",
    "data/teams.ts",
    "data/circuits.ts",

    // public
    "public/images/drivers/.gitkeep",
    "public/images/teams/.gitkeep",
    "public/images/circuits/.gitkeep",
    "public/images/tracks/.gitkeep",
    "public/icons/.gitkeep",

    // styles
    "styles/globals.css",

    // root
    ".env.local",
    ".env.example",
    ".gitignore",
    "next.config.ts",
    "tsconfig.json",
    "package.json",
    "README.md",
];

const initialContents = {
    "app/layout.tsx": `import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
`,

    "app/loading.tsx": `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
`,

    "app/(main)/page.tsx": `export default function HomePage() {
  return (
    <main>
      <h1>F1 Community</h1>
      <p>Formula 1 Community Platform</p>
    </main>
  );
}
`,

    "styles/globals.css": `@import "tailwindcss";

:root {
  color-scheme: dark;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  background: #0a0a0a;
  color: #ffffff;
}
`,

    "README.md": `# F1 Community

Formula 1 Community Platform

## Features

- Race
- Community
- Drivers
- Teams
- Standings
- Prediction
- Premium
- Subscription
- User Profile

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Auth.js
`,
};

for (const file of files) {
    const fullPath = path.join(ROOT, file);
    const dir = path.dirname(fullPath);

    fs.mkdirSync(dir, { recursive: true });

    const content = initialContents[file] ?? "";

    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content, "utf8");
    }
}

console.log("");
console.log("========================================");
console.log(" F1 Community structure created!");
console.log("========================================");
console.log("");
console.log(`Location: ${ROOT}`);
console.log("");
console.log("Created folders/files:", files.length);
console.log("");