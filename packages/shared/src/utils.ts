import { DEFAULT_HEALTH_STATUS } from "./constants";
import type { HealthStatus } from "./types";

export function createHealthStatus(
  service: string,
  checkedAt = new Date().toISOString(),
): HealthStatus {
  return {
    service,
    status: DEFAULT_HEALTH_STATUS,
    checkedAt,
  };
}
