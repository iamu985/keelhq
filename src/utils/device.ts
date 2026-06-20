/**
 * Server-side user-agent device detection utility.
 *
 * Responsibility:
 * - Parse a UA string and classify the request origin as mobile, tablet, or desktop.
 */

// TODO: add unit tests for this logic
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

const MOBILE_PATTERN = /iPhone|Android.*Mobile|BlackBerry|IEMobile|Opera Mini/i;
const TABLET_PATTERN = /iPad|Android(?!.*Mobile)|Silk|Kindle/i;

export function detectDevice(userAgent: string): DeviceType {
  if (MOBILE_PATTERN.test(userAgent)) return 'mobile';
  if (TABLET_PATTERN.test(userAgent)) return 'tablet';
  return 'desktop';
}
