import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, albumsData as allAlbumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  // console.log(id);
  // const albums = allAlbumsData[id];
  // console.log(albums);
  const album = albumsData.find((album) => album.id === parseInt(id)); // Get the specific album based on the ID
  const albumSongs = songsData.filter((song) => album.songs.includes(song.id)); 

  const {playWithId} = useContext(PlayerContext);


  return (
    <>

      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={album.image} alt='' />
        <div className='flex flex-col'>
          <p>playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl '>{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className='mt-1'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt='' />
            <p>Spotify</p>
            . 1323154 likes
            . <b>{albumSongs.length} songs,</b>
            about 2 hr 30 min

          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7a]'>
      <p><b className='mr-4 '>#</b>title</p>
      <p>Album</p>
      <p className='hidden sm:block '>Data Added</p>
      <img className='m-auto w-4' src={assets.clock_icon} alt=''/>
      </div>
      <hr/>
      {
        albumSongs.map((item,index)=>(
          <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer '>
            <p className='text-white'>
              <b className='mr-4 text-[a7a7a7]'>{index+1}</b>
              <img className='inline w-10 mr-5 ' src={item.image} alt=''/>
              {item.name}
            </p>
            <p className='text-[15px]'>{album.name}</p>
            <p className='text-[15px] hidden sm:block '>5 day ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum