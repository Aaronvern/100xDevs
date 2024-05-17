import React from 'react';

function RevenueCard({
    title,
    orderCount,
    amount
}) {
    const [count, setCount] = useState(0);

    return <Card>
        <button onClick={() => {
            setCount(count + 1);
            setTimeout(() => {
                console.log(count)
            }, 1000)
        }}></button>
        </Card>
    }


export default RevenueCard;