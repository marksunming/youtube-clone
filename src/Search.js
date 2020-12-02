import React from 'react'
import './Search.css'
import { useParams } from 'react-router-dom';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function Search() {
    const { searchTerm } = useParams();

    return (
        <div className='search'>
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Clever Programmer'
                verified
                subs='659K'
                noOfVideos={382}
                description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...'
            />
            <hr />

            <VideoRow 
                views='1.5M' 
                subs='659K'
                description='Do you want a FREE one for training - check this out'
                timestamp='69 seconds ago'
                channel='Clever Programmer' 
                title="Let's build a youtube clone with REACT JS for beginners"
                image='https://i.ytimg.com/vi/xavmKxH9oyo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWTY0jSZqcvyGUcGjuU1sXxlILHg'
            />
            <VideoRow 
                views='1.5M' 
                subs='659K'
                description='Do you want a FREE one for training - check this out'
                timestamp='69 seconds ago'
                channel='Clever Programmer' 
                title="Let's build a youtube clone with REACT JS for beginners"
                image='https://i.ytimg.com/vi/xavmKxH9oyo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWTY0jSZqcvyGUcGjuU1sXxlILHg'
            />
            <VideoRow 
                views='1.5M' 
                subs='659K'
                description='Do you want a FREE one for training - check this out'
                timestamp='69 seconds ago'
                channel='Clever Programmer' 
                title="Let's build a youtube clone with REACT JS for beginners"
                image='https://i.ytimg.com/vi/xavmKxH9oyo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWTY0jSZqcvyGUcGjuU1sXxlILHg'
            />
            <VideoRow 
                views='1.5M' 
                subs='659K'
                description='Do you want a FREE one for training - check this out'
                timestamp='69 seconds ago'
                channel='Clever Programmer' 
                title="Let's build a youtube clone with REACT JS for beginners"
                image='https://i.ytimg.com/vi/xavmKxH9oyo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWTY0jSZqcvyGUcGjuU1sXxlILHg'
            />

        </div>
    )
}

export default Search
