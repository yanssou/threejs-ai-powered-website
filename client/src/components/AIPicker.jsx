import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        className='aipicker-textarea'
        placeholder='Demander à une IA ?'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton type='outline' title="Requete à l'IA en cours..." customStyles='text-xs' />
        ) : (
          <>
            <CustomButton type='outline' title='Logo par IA' handleClick={() => handleSubmit('logo')} customStyles='text-xs' />
            <CustomButton type='filled' title='Full par IA' handleClick={() => handleSubmit('full')} customStyles='text-xs' />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker