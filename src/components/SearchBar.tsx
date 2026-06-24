import { useEffect, useState } from 'react'
import { isAddress } from 'viem'

interface SearchBarProps {
  onSearch: (address: string) => void
  loading: boolean
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ onSearch, loading, value, onChange }: SearchBarProps) {
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
  }, [value])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!isAddress(trimmed)) {
      setError('请输入有效的钱包地址')
      return
    }
    setError('')
    onSearch(trimmed)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="输入钱包地址 0x..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? '查询中...' : '查询'}
      </button>
      {error && <p className="error-text">{error}</p>}
    </form>
  )
}
