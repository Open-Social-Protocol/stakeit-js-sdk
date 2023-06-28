/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * StakeKit
 * StakeKit API documentation
 * OpenAPI spec version: 1.0
 */
import type { BalanceTypes } from './balanceTypes';
import type { PendingActionDto } from './pendingActionDto';
import type { TokenDto } from './tokenDto';

export interface YieldBalanceDto {
  type: BalanceTypes;
  amount: string;
  date?: string;
  /** The price of the reward token as a multiple of the underlying token. Used when dealing with index based yield opportunities where the reward asset appreciates in value over time. */
  pricePerShare: string;
  pendingActions: PendingActionDto[];
  token: TokenDto;
  validatorAddress?: string;
}
