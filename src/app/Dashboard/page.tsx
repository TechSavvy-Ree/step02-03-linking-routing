const dashboard=() =>{
    return <div className="p-12">
        Dashboard
        <div >
            <p className="font-bold text-lg"> Nested Route</p>
            <p>To create a nested route, you can nest folders inside each other.
               For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
            </p>
        </div>
        <div className=" flex flex-col gap-5">
        {'HTML <a> Tag'}
        <p>
         The {'<a>'} tag defines a hyperlink, which is used to link from one page to another.
         The most important attribute of the {'<a>'} element is the href attribute, which indicates the link's destination
        </p>
            <a>HTML Link </a>
        </div>
    </div>
}
export default dashboard;