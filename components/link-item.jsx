import Link from "next/link"

export const LinkItem = ({ list }) =>{
    return(
        <>
        {
            list.map((item) => 
                (
                    <Link key={item.id} href={item.link} 
                    className='hover:text-gray-900 
                    dark:hover:text-gray-400' 
                    target='_blank'>{item.icon}</Link>
                )
            )
        }
        </>
    )
};
