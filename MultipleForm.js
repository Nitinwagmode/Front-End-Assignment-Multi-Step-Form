import React,{useState } from "react";

const MultipleForm = () => {

  const [step, setStep] =  useState(1);
  const [Submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange =(e) =>{
    const {name, value, type, checked } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]:type === "checkbox" ? checked : value,
      }));
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role:"",
    terms: false,
  });

  const isStep1Valid =
    form.fullName.trim() !== "" &&
    form.email.trim()  !== "";

    const isStep2Valid =
    form.role !== "" &&
    form.terms === true;


  if(Submit){
  return(
    <div>
    <h2> Submission Summary</h2>
      <p><strong>Full Name:</strong>{form.fullName}</p>
       <p><strong>E MAIL:</strong>{form.email}</p>
       <p><strong>ROLE:</strong>{form.role}</p>
       <p><strong>Terms Accepted:</strong>{" "}
         {form.terms ? "yes" : "NO"}</p>
    </div>
  )
  }

  return(
    <div> 
      <h1>Form filling   </h1>
      <form onSubmit={handleSubmit} >
      { step === 1 && (
      <>
      <div>
        <label> Full Name</label>
        <input
          type='text'
          name="fullName"
         value={form.fullName}
        onChange={handleChange}
          />
      </div>

         <div>
        <label> E MAIl </label>
        <input
          type='email'
          name="email"
         value={form.email}
        onChange={handleChange}
          />
      </div>
        <button
          type="button"
          disabled={!isStep1Valid}
          onClick={() => setStep(2)}
          >
          Next
        </button>
      </>
      )}
  {step === 2 && (
<>
<div>
<lable> Role </lable>    <select
    name="role"
    value={form.role}
    onChange={handleChange}  //Role (dropdown)

    >
  <option vlaue= "">select Role</option>
   <option vlaue= "Developer">Developer</option>
   <option vlaue= "Designer">Designer</option>
   <option vlaue= "Manager">Manager</option>
  </select>
</div>
  <div>
    <lable>
     <input
       type= "checkbox"
       name="terms"
       checked= {form.terms}
       onChange={handleChange}
       />
       Accept Terms & Conditions
     </lable>
     </div>
  <button type="button" onClick={() => setStep(1)}>
    Back
    </button>
   <button type="Submit" disabled={!isStep2Valid}>
    Submit
    </button>
  
</>
 )}   
      </form>
    </div>
  )  
};
export default MultipleForm;
