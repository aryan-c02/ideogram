
interface propsType {
    content: String,
}

export const SettingCardButton = (props: propsType) => {
    return (
        <div className="w-full" >
            <button type="button" className="text-gray-900 bg-white border border-none focus:outline-none hover:bg-neutral-400 w-full focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2  text-left    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{props.content}</button>

        </div>
    )
}
