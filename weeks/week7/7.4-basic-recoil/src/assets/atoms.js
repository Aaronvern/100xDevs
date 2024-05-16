import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key:"networkAtom",
    default : 3 
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default : 0 
})
export const messageAtom = atom({
    key:"messageAtom",
    default : 100 
})
export const notifs = atom({
    key:"notifs",
    default : 2 
})

export const totalCount = selector({
    key:"totalSelector",
    get:({get})=>{
        const not = get(notifs)
        const message = get(messageAtom)
        const jobs = get(jobsAtom)
        const net = get(networkAtom)

        return not+message+jobs+net;
    }
}) 