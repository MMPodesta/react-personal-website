export const ListItem = ({ children }) => {
    return(
        <>
        {
            children.map((child) => (
                <p className='text-gray-800 py-1
                 dark:text-gray-400' key={child}>{child}</p>
            )
        )}
        </>
    )}

