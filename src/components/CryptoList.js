import React from 'react'

import CrytptoCard from './CrytptoCard'
import './CryptoList.css'
const CryptoList = ({ coinsData }) => {
  return (
    <div className="crypto_list">
      {coinsData.map((coin) => {
        return (
          <CrytptoCard
            key={coin.id}
            image={coin.image}
            name={coin.name}
            price={coin.current_price.toLocaleString()}
          />
        )
      })}
    </div>
  )
}

export default CryptoList
