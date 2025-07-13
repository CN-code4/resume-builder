'use client'

function ResumeForm({formData, setFormData}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
       setFormData({
        ...formData, [name]: value
       })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold">Resume Form</h2>
            <div className="grid grid-cols-2 gap-8 mt-5">
                <input className="border-2 p-3 rounded-md" value={formData.name} type="text" name="name" onChange={handleChange} placeholder="Fullname" />
                <input className="border-2 p-3 rounded-md" value={formData.email} type="email" name="email" placeholder="Email" onChange={handleChange}  />
                <input className="border-2 p-3 rounded-md" value={formData.phone} type="tel" name="phone" placeholder="Phone Number" onChange={handleChange}  />
                <textarea className="border-2 p-3 rounded-md" value={formData.summary} name="summary" placeholder="About me" onChange={handleChange}  />
                <textarea className="border-2 p-3 rounded-md" value={formData.skills} name="skills" placeholder="Skills" onChange={handleChange}  />
                <textarea className="border-2 p-3 rounded-md" value={formData.education} name="education" placeholder="Education" onChange={handleChange}  />
                <textarea className="border-2 p-3 rounded-md" value={formData.experience} name="experience" placeholder="Work Experience" onChange={handleChange}  />
            </div>
        </div>
    )
}

export default ResumeForm;