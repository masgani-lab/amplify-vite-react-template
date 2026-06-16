export type AppEnvironment = "local" | "development" | "staging" | "production";

export type HealthStatus = {
  service: string;
  status: typeof import("./constants").DEFAULT_HEALTH_STATUS;
  checkedAt: string;
};
