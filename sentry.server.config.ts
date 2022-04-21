import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN: string =
  process.env.SENTRY_DSN ||
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://64a4340f8ecb476a8335ca97867dc076@o348574.ingest.sentry.io/2224455";

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://64a4340f8ecb476a8335ca97867dc076@o348574.ingest.sentry.io/2224455",
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});