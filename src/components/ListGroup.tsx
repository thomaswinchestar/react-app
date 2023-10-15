import {useState} from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void
}
function ListGroup({items, heading, onSelectItem}: Props) {
    

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <div className="w-100 bg-gray-200 p-5 h-screen">
                <h1 className="text-center font-bold text-3xl font-lg text-gray-900 py-5">{heading}</h1>
                <ul className="m-auto w-96 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {items.length === 0 &&
                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">No
                            Item Found!!</li>}
                    {items.map((item, index) => (
                        <li key={item}
                            className={ selectedIndex === index ? 'w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 active [&.active]:bg-blue-400': 'w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'}
                            onClick={() => { 
                                setSelectedIndex(index);
                                onSelectItem(item);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ListGroup;
