const dashboard=() =>{
    return <div className="p-12">
        Dashboard
        <div >
        {/* <h1 style={{color: "green"}}>
        Nested Route
            </h1>  */}
            <p className="font-bold text-lg"> Nested Route</p>
            <p>To create a nested route, you can nest folders inside each other.
               For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
            </p>
        </div>
        <div className=" flex flex-col gap-5">
        {'HTML <a> Tag'}
        <p>
         The {'<a>'} tag defines a hyperlink, which is used to link from one page to another.
         The most important attribute of the {'<a>'} element is the href attribute, which indicates the links destination
        </p>
            <a>HTML Link </a>

        <p className="font-bold text-lg">Here, We have nested route i.e: Analytics and Settings, which corresponds to the path ‘/’</p>    
        </div>
    </div>
}
export default dashboard;