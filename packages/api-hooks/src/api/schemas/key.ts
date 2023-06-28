/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * StakeKit
 * StakeKit API documentation
 * OpenAPI spec version: 1.0
 */
import type { KeyDeletedAt } from './keyDeletedAt';

export interface Key {
  id: string;
  createdAt: string;
  updatedAt: string;
  apiKey: string;
  deletedAt: KeyDeletedAt;
  info: string;
  category: string;
  name: string;
  lastUsedAt: string | null;
  projectId: string;
}
