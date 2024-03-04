type Token = {
  token_id: string;
  balance: number;
};

type Balance = {
  balance: number;
  timestamp: string;
  tokens: Token[];
};

type Transaction = {
  bytes: null | string;
  charged_tx_fee: number;
  consensus_timestamp: string;
  entity_id: null | string;
  max_fee: string;
  memo_base64: string;
  name: string;
  nft_transfers: any[];
  node: string;
  nonce: number;
  parent_consensus_timestamp: null | string;
  result: string;
  scheduled: boolean;
  staking_reward_transfers: any[];
  token_transfers: any[];
  transaction_hash: string;
  transaction_id: string;
  transfers: any[];
  valid_duration_seconds: string;
  valid_start_timestamp: string;
};

type Key = {
  _type: string;
  key: string;
};

type Links = {
  next: null | string;
};

export type AccountResponseType = {
  account: string;
  alias: null | string;
  auto_renew_period: number;
  balance: Balance;
  created_timestamp: string;
  decline_reward: boolean;
  deleted: boolean;
  ethereum_nonce: number;
  evm_address: string;
  expiry_timestamp: string;
  key: Key;
  max_automatic_token_associations: number;
  memo: string;
  pending_reward: number;
  receiver_sig_required: boolean;
  staked_account_id: null | number;
  staked_node_id: number;
  stake_period_start: string;
  transactions: Transaction[];
  links: Links;
};