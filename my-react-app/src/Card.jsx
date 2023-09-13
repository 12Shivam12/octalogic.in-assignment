import './CSS/Courses.css'

const Card = ({title, desc}) => {
    return (
        <>



            <div className="flex flex-col justify-between items-center p-2 bg-white
                            h-[90px] w-[250px] rounded-md">
                <div className="flex items-center gap-4 bg-white">
                    <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-contacts-twitter-flatart-icons-outline-flatarticons.png"
                        alt="contact-icon"
                        className="w-[35px] h-[35px] bg-green-200 rounded-xl"
                    />
                    <div className="text-left">
                        <h1 className="font-[900] text-2xl bg-white">{title}</h1>
                        <p className="text-[10px] font-bold bg-white">{desc}</p>
                    </div>
                </div>
                <button className="text-[10px] font-extrabold text-red-500 self-end">View</button>
            </div>



        </>

    )
}

export default Card