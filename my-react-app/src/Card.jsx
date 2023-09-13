

const Card = () => {
    return (
        <div className="w-[233px] h-[96px] border border-slate-950">
            <div className="flex items-center justify-center">
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-contacts-twitter-flatart-icons-outline-flatarticons.png" alt="contact-icon"
                    className="font-medium w-[30px] h-[30px]" />
                <div className="text-left">
                    <h1 className="font-[900] text-2xl">164</h1>
                    <p className="text-xs">Total no of Students</p>
                </div>
            </div>
            <button>View</button>
        </div>
    )
}

export default Card