import React from 'react';
import { jobsAtom, messageAtom, networkAtom, notifs, totalCount } from '../assets/atoms'
import { useRecoilValue } from 'recoil';
function Notification(props) {
    const net = useRecoilValue(networkAtom)
    const job = useRecoilValue(jobsAtom)
    const mes = useRecoilValue(messageAtom)
    const not = useRecoilValue(notifs)
    const total = useRecoilValue(totalCount)
    return (
        <div>
            <button>home</button>
            <button>my network {net}</button>
            <button>jobs {job}</button>
            <button>messaging {mes}</button>
            <button>notifs {not}</button>
            <button>me  {total}</button>
        </div>
    );
}

export default Notification;