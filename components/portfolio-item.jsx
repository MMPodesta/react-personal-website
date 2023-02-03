import Link from "next/link";
import Image from "next/image";

export const PortfolioItem = ({ list }) =>{
    return(
        <>
        {
            list.map((item) =>
                (
                    <div className='basis-1/3 flex-1'>
                        <Link key={item.key} href={item.link} 
                        target='_blank'>
                            <Image src={item.photo} alt='' 
                            className='rounded-lg object-cover 
                            hover:shadow-lg hover:shadow-teal-400' 
                            width={'100%'} height={'100%'} />
                        </Link>
                    </div>
                )
            )
        }    
        </>
    )
};