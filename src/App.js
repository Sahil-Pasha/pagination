import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CryptoList from './components/CryptoList'
import Pagination from './components/Pagination'

function App() {
  const [coinsData, setCoinsData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(8)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )

      setCoinsData(response.data)
    }
    fetchData()
  }, [])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex)
  // console.log('The data is', coinsData)

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
