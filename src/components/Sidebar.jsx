import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-80 h-full overflow-y-auto text-gray-400'>
      {/* Search */}
      <div className='bg-[#362C29] rounded-xl p-4'>
        <h4 className='pb-8'>Categories</h4>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="indy" />
            <label htmlFor="indy">Indy</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Adventure" />
            <label htmlFor="Adventure">Adventure</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="MMO" />
            <label htmlFor="MMO">MMO</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Casual Game" />
            <label htmlFor="Casual Game">Casual Game</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Strategy" />
            <label htmlFor="Strategy">Strategy</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Simulator" />
            <label htmlFor="Simulator">Simulator</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Sports Game" />
            <label htmlFor="Sports Game">Sports Game</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Action Game" />
            <label htmlFor="Action Game">Action Game</label>
          </div>
        </div>
        <h4 className='my-6'>Platforms</h4>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="PC" />
            <label htmlFor="PC">PC</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="PlayStation 5" />
            <label htmlFor="PlayStation 5">PlayStation 5</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Playstation 4" />
            <label htmlFor="Playstation 4">Playstation 4</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Xbox Series" />
            <label htmlFor="Xbox Series">Xbox Series</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type="checkbox" name="" id="Nintendo Switch" />
            <label htmlFor="Nintendo Switch">Nintendo Switch</label>
          </div>
        </div>
        <h4 className='my-6'>Prices</h4>
        <div className='flex justify-between gap-1 items-center'>
          <div className='flex gap-2 bg-gray-50 p-2 rounded-md'>
            <p>$</p>
            <input type="number" className='w-20' />
          </div>
          <p>-</p>
          <div className='flex gap-2 bg-gray-50 p-2 rounded-md'>
            <p>$</p>
            <input type="number" className='w-20' />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar