import React ,{useState} from "react";
function ComplaintRegister()
{
    const[formData,setFormData]=useState({
        eName:'',
        complaint:'',
         NumberHolder: Math.floor(Math.random() * 1000000)
    });

    const handleChange=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        const msg=`Thanks ${formData.employeeName} \n your complin was sumbitted . ID IS ${formData.NumberHolder}`;
        alert(msg);

        setFormData({
            ...formData,
            ename:'',
            complaint:'',
              NumberHolder: Math.floor(Math.random() * 1000000)
        });
    };

    return(
        <div>
            <h2>Complaint registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Employee Name :</label>
                    <input 
                    type="text"
                    name="ename"
                    value={formData.ename}
                    onChange={handleChange}
                    required
                    />
                    <label>Complaint details</label>
                    <textarea
                    name="complaint"
                    value={formData.complaint}
                    onChange={handleChange}
                    required
                    />

                </div>
                <button type="submit" >Submit complaint</button>
            </form>
            
        
        </div>
    );

}
export default ComplaintRegister;