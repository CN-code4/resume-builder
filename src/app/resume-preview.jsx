'use client'

function ResumePreview({formData}) {
    return (
        <div>
            <h2>Full Name: {formData.name}</h2>
            <h2>Email: {formData.email}</h2>
            <h2>Phone Number: {formData.phone}</h2>
            <h2>About Me: {formData.summary}</h2>
            <h2>Skills: {formData.skills}</h2>
            <h2>Education: {formData.eduction}</h2>
            <h2>Experience: {formData.experience}</h2>
        </div>
    )
}

export default ResumePreview;