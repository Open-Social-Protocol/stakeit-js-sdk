/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * StakeKit
 * StakeKit API documentation
 * OpenAPI spec version: 1.0
 */
import type { Role } from './role';

export interface UserDto {
  email: string;
  emailVerified: boolean;
  id: string;
  lastAccessedAt: string | null;
  name: string | null;
  surname: string | null;
  role: Role;
  serviceConditionsAcceptedAt: string | null;
  teamId: string;
}
