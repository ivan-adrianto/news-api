import * as Sentry from "@sentry/react";

export const sentryError = (errorTitle, tag) => {
  return Sentry.captureException(new Error(errorTitle), {
    tags: {
        process: tag,
    },
  });
};
