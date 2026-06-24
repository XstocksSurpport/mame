export const TOKEN_ADDRESS =
  '0xe92f7fe3eaf61df28b7b75f3faab199333c42302' as const

export const CLAIM_ADDRESS =
  '0x816b6d8b6e5e85fac5e185bb3c4c70c3daf246cc' as const

/** 待领取 MAME 分红（固定展示） */
export const PENDING_DIVIDEND_MAME = '16975'

export const BSC_CHAIN_ID = 56

export const BSCSCAN_URL = 'https://bscscan.com'

/** 单次 getLogs 查询的区块范围（BSC 公共节点限制较严） */
export const LOG_CHUNK_SIZE = 50n

/** 最多扫描的区块数 */
export const MAX_BLOCKS_TO_SCAN = 10_000n

/** 最多扫描的分块次数 */
export const MAX_LOG_CHUNKS = 200

export const BSC_RPC_URL = 'https://bsc.publicnode.com'

export const EXPLORER_API_BASE = import.meta.env.DEV
  ? '/api/explorer'
  : 'https://api.etherscan.io/v2/api'
