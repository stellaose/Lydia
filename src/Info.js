import { useState } from 'react';
import { info } from './Components/Data/info';
import './Stylesheets/Info.css';

const Info = () => {
    // eslint-disable-next-line no-unused-vars
    const { data, setData } = useState(info);

    console.log(info)
    return (
        <>
            <div>
                {
                    data?.map((datei) => {
                        const {id, title, content} = datei;
                        
                        return (
                            <div key = {id} className = 'information'>
                                <h4>{title}</h4>
                                <p>{content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Info;