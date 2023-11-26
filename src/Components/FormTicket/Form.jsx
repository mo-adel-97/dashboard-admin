import { useForm, Controller } from 'react-hook-form';
import { TextField,Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Slide } from 'react-reveal';
import { ThemeContext } from '../ThemeContect/ThemeContext';
import { useContext,useState,useEffect } from "react";
import image1 from "../../Images/classeraBrand.png"
import image2 from "../../Images/cpaybrand.png"
import image3 from "../../Images/cspace_logo.webp"
import CircularProgress from '@mui/joy/CircularProgress';
import Button from '@mui/joy/Button';
import Swal from 'sweetalert2';
const MyForm = () => {

    const [loading, setLoading] = useState(false)

  

    const { formState: { errors } } = useForm();
    
    const Brand = [
        {
         image:image1,
         para:"Classera",
         value:"Classeraoption1"
        },{
            image:image2,
            para:"Cpay",
            value:"Cpay"
           },{
            image:image3,
            para:"Cspace",
            value:"Cspace"
           }
    ]
    const { handleSubmit, control } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
      setTimeout(() => Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Ticket has been saved",
        showConfirmButton: false,
        timer: 2000
      }), 2000)
 
    };
    const { theme } = useContext(ThemeContext);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Slide right duration={1500} delay={100}>
        <div style={{width:"70%",display:"flex",justifyContent:"space-between"}}>
        <div style={{ paddingTop:"2px", display: "flex", flexDirection: "column"}}>
            <h4 style={{ fontFamily: "cursive" }}>Subject</h4>
            <p style={{ fontFamily: "cursive",fontSize:"13px" }}>Title of ticket</p>
        </div>
        <Controller name="TitleOfTicket" control={control}
  render={({ field }) => (
    <TextField
    required
    // color="warning"
    focused={theme === "dark"}
      {...field} 
    variant="outlined"
    style={{
        width: "60%",
      }}
      inputProps={{
        style: { color: theme === "dark" ? 'white' : 'black' }
      }}
    />
  )}
/>
{errors.TitleOfTicket && <span>{errors.TitleOfTicket.message}</span>}
</div>
<br />
  </Slide>
  <hr/>
  <br />
  <Slide right duration={1500} delay={200}>
  <div style={{width:"70%",display:"flex",justifyContent:"space-between"}}>
        <div style={{ paddingTop:"2px", display: "flex", flexDirection: "column"}}>
            <h4 style={{ fontFamily: "cursive" }}>Description</h4>
            <p style={{ fontFamily: "cursive",fontSize:"13px" }}>Detailed description for the ticket</p>
        </div>
        <Controller name="DescriptionForTicket" control={control}
  render={({ field }) => (
    <TextField 
    required
    //  color="warning"
     focused={theme === "dark" ? true : false}
      {...field} 
      multiline
      rows={4}
      variant="outlined"
      style={{width:"60%"}}
      inputProps={{
        style: { color: theme === "dark" ? 'white' : 'black' }
      }}
      // Add any other props you need for the TextField component
    />
  )}
/>
{errors.DescriptionForTicket && <span>{errors.DescriptionForTicket.message}</span>}
</div>
</Slide>
<br />
  <hr/>
  <br />
  <Slide right duration={1500} delay={300}>
  <div style={{width:"70%",display:"flex",justifyContent:"space-between"}}>
        <div style={{ paddingTop:"2px", display: "flex", flexDirection: "column"}}>
            <h4 style={{ fontFamily: "cursive" }}>Brand</h4>
            <p style={{ fontFamily: "cursive",fontSize:"13px" }}>Product on which issue happen</p>
        </div>
        <Controller name="Brand" control={control}
  render={({ field }) => (
    <FormControl 
    inputProps={{
        style: { color: theme === "dark" ? 'white' : 'black' }
      }}
      style={{width:"60%"}}  focused={theme === "dark" ? true : false} >
      <InputLabel>Brand</InputLabel>
      <Select
      required
       focused 
      label="Brand"
        {...field} // Spread the field props into the Select component
        variant="outlined" // Specify the Select variant
        fullWidth // Set the field to occupy the full width
      >
        {/* Add your select options using MenuItem components */}
         {Brand.map((brand)=>{
            return (
                <MenuItem   value={brand.value}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={brand.image} alt="brandImage" style={{ marginRight: '8px', width: '50px', height: '30px' }} />
                    <p  style={{color: theme === "dark" ? 'green' : 'black'}}>{brand.para}</p>
                  </div>
                </MenuItem>
              )
         })}
      </Select>
    </FormControl>
  )}
/>
{errors.Brand && <span>{errors.Brand.message}</span>}

</div>
</Slide>
<br />
  <hr/>
  <br />
  <Slide right duration={1500} delay={400}>
  <div style={{width:"70%",display:"flex",justifyContent:"space-between"}}>
        <div style={{ paddingTop:"2px", display: "flex", flexDirection: "column"}}>
            <h4 style={{ fontFamily: "cursive" }}>Module</h4>
            <p style={{ fontFamily: "cursive",fontSize:"13px" }}>Module on wich issue happen</p>
        </div>
        <Controller name="Module" control={control}
  render={({ field }) => (
    <FormControl     
     focused={theme === "dark" ? true : false}  style={{width:"60%"}}>
      <InputLabel>Module</InputLabel>
      <Select
      required
      label="Module"
        {...field} // Spread the field props into the Select component
        variant="outlined" // Specify the Select variant
        fullWidth // Set the field to occupy the full width
      >
        {/* Add your select options using MenuItem components */}
        <MenuItem value="option1"><p  style={{color: theme === "dark" ? 'green' : 'black'}}>Users Management System</p></MenuItem>
        <MenuItem value="option2"><p  style={{color: theme === "dark" ? 'green' : 'black'}}>Users Management System</p></MenuItem>
        <MenuItem value="option3"><p  style={{color: theme === "dark" ? 'green' : 'black'}}>Users Management System</p></MenuItem>
      </Select>
    </FormControl>
  )}
/>
{errors.Module && <span>{errors.Module.message}</span>}

</div>
</Slide>
<br />
  <hr/>
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
  <Button style={{margin:"5px"}} variant="outlined" type="submit" startDecorator={loading ? <CircularProgress variant="solid" /> : null}>Save</Button>
  <Button style={{margin:"5px"}} variant="outlined">Cancel</Button>
</div>
      </form>
    );
  };

  export default MyForm;
