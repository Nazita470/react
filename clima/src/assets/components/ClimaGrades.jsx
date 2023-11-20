export function ClimaGrades({grades, url}) {
    return (
        <aside className="clima_img_grades">
            <img width= "64px" height="64px" src={url} alt="" />
            <p className="grades_number">{grades}</p>
        </aside>
    )
}