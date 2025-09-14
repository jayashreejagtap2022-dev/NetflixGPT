import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants';


const GptSearch = () => {
  return (
    <div>
      <div
                className="relative min-h-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url(${BG_IMG})`
                }}
              >
      //GptSearch bar
      <GptSearchBar />
      <GptMovieSuggestion />
      //movie suggestions
      </div>
    </div>
  )
}

export default GptSearch