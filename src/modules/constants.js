export const appName =
  typeof window === "undefined"
    ? process.env.APP_NAME
    : process.env.NEXT_PUBLIC_APPNAME;
