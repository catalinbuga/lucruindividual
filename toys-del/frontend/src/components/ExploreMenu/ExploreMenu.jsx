import React from 'react'
import './ExploreMenu.css'
import { m_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-m' id='explore-m'>
        <h1>Explorează jucăriile noastre</h1>
        <p className='explore-m-text'>
          Indiferent de vârstă sau preferințe, avem jucării pentru toți copiii. De la seturi creative LEGO până la plușuri adorabile și jocuri educative – alege distracția perfectă pentru cei mici!
        </p>
        <div className="explore-m-list">
            {m_list.map((item, index) => (
                <div
                  key={index}
                  className="explore-m-list-item"
                  onClick={() => setCategory(prev => prev
                     === item.m_name ? "All" : item.m_name)}
                >
                    <img
                      className={category === item.m_name ? "active" : ""}
                      src={item.m_image}
                      alt={item.m_name}
                    />
                    <p>{item.m_name}</p>
                </div>
            ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
